import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { safeParse } from "valibot";
import { AuthFormSchema } from "@/definitions/auth-form-schema";
import { findUserByEmail } from "@/actions/resources/user-queries";
import argon2 from "argon2";
import { authConfig } from "@/auth.config";

const nextAuth = NextAuth({
  ...authConfig,
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
});

export const { signIn, signOut, auth, handlers } = nextAuth;
