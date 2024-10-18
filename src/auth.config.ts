import type { NextAuthConfig } from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import db from "@/db/drizzle";
import * as schema from "@/db/schema";
import { getTableColumns } from "drizzle-orm";
import { findAdminUserEmailAddresses } from "@/actions/resources/admin-user-email-queries";
import type { AdapterUser } from "@auth/core/adapters";

export enum USER_ROLES {
  USER = "user",
  ADMIN = "admin",
}

export const authConfig: Omit<NextAuthConfig, "providers"> = {
  // @ts-expect-error: type conflict due to dissimilarity between initial and final values,
  // not serious but requires additional attention in the future.
  adapter: {
    ...DrizzleAdapter(db, {
      accountsTable: schema.accounts,
      usersTable: schema.users,
      authenticatorsTable: schema.authenticators,
      sessionsTable: schema.sessions,
      verificationTokensTable: schema.verificationTokens,
    }),
    async createUser(data: AdapterUser): Promise<AdapterUser> {
      const { id, ...insertData } = data;
      const hasDefaultId = getTableColumns(schema.users)["id"]["hasDefault"];
      const adminEmails = await findAdminUserEmailAddresses();
      const isAdmin = adminEmails.includes(insertData.email.toLowerCase());

      insertData.role = isAdmin ? USER_ROLES.ADMIN : USER_ROLES.USER;

      const createdUser = await db
        .insert(schema.users)
        .values(hasDefaultId ? insertData : { ...insertData, id })
        .returning()
        .then((res) => res[0]);

      return {
        id: createdUser.id,
        email: createdUser.email,
        name: createdUser.name,
        emailVerified: createdUser.emailVerified,
        image: createdUser.image,
      } as AdapterUser;
    },
  },
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: "/auth" },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update") {
        return { ...token, ...session.user };
      }

      if (user?.id) token.id = user.id;
      if (user?.role) token.role = user.role;

      return token;
    },
    session({ session, token }) {
      session.user.id = token.id;
      session.user.role = token.role;

      return session;
    },
    async signIn({ user, account }) {
      if (account?.provider === "credentials") {
        if (user.emailVerified) return true;
      }
      return false;
    },
  },
};
