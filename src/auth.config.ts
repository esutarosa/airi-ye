import type { NextAuthConfig } from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import Credentials from "next-auth/providers/credentials";
import db from "@/db/drizzle";
import * as schema from "@/db/schema";
import { getTableColumns } from "drizzle-orm";
import { findAdminUserEmailAddresses } from "@/actions/resources/admin-user-email-queries";
import { findUserByEmail } from "@/actions/resources/user-queries";
import argon2 from "argon2";
import { safeParse } from "valibot";
import { AuthFormSchema } from "@/definitions/auth-form-schema";
import type { AdapterUser } from "@auth/core/adapters";

export enum USER_ROLES {
  USER = "user",
  ADMIN = "admin",
}

export const authConfig = {
  adapter: {
    ...DrizzleAdapter(db, {
      accountsTable: schema.accounts,
      usersTable: schema.users,
      authenticatorsTable: schema.authenticators,
      sessionsTable: schema.sessions,
      verificationTokensTable: schema.verificationTokens,
    }),
    async createUser(data: AdapterUser) {
      const { id, ...insertData } = data;
      const hasDefaultId = getTableColumns(schema.users)["id"]["hasDefault"];

      const adminEmails = await findAdminUserEmailAddresses();
      const isAdmin = adminEmails.includes(insertData.email.toLowerCase());

      if (isAdmin) {
        insertData.role = USER_ROLES.ADMIN;
      } else {
        insertData.role = USER_ROLES.USER;
      }

      return db
        .insert(schema.users)
        .values(hasDefaultId ? insertData : { ...insertData, id })
        .returning()
        .then((res) => res[0]);
    },
  },
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: "/auth" },
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = safeParse(AuthFormSchema, credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.output;
          const user = await findUserByEmail(email);

          if (!user) return null;
          if (!user.password) return null;

          const passwordsMatch = await argon2.verify(user.password, password);

          if (passwordsMatch) {
            /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
            const { password: _, ...userWithoutPassword } = user;
            return userWithoutPassword;
          }
        }

        return null;
      },
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      const { nextUrl } = request;

      const isLoggedIn = !!auth?.user;
      const isOnProfile = nextUrl.pathname.startsWith("/profile");
      const isOnAuth = nextUrl.pathname.startsWith("/auth");

      if (isOnProfile) {
        if (isLoggedIn) return true;
        return Response.redirect(new URL("/auth", nextUrl));
      }

      if (isOnAuth) {
        if (!isLoggedIn) return true;
        return Response.redirect(new URL("/profile", nextUrl));
      }

      return true;
    },
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
    signIn({ account, profile }) {
      if (account?.provider === "google") {
        return !!profile?.email_verified;
      }

      return false;
    },
  },
} satisfies NextAuthConfig;
