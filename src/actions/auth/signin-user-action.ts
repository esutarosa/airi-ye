"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

type Res =
  | { success: true }
  | { success: false; error: string; statusCode: 500 };

export async function signinUserAction(values: unknown): Promise<Res> {
  try {
    if (
      typeof values !== "object" ||
      !values ||
      !("email" in values) ||
      !("password" in values)
    ) {
      throw new Error("Invalid JSON Object");
    }

    await signIn("credentials", { ...values, redirect: false });

    return { success: true };
  } catch (err) {
    if (err instanceof AuthError) {
      switch (err.type) {
        case "CredentialsSignin":
        case "CallbackRouteError":
          return {
            success: false,
            error: "Invalid credentials",
            statusCode: 401,
          };
        case "AccessDenied":
          return {
            success: false,
            error: "Access denied",
            statusCode: 401,
          };
        default:
          return {
            success: false,
            error: "Oops. Something went wrong",
            statusCode: 500,
          };
      }
    }

    console.error(err);
    return {
      error: "Curses!",
      success: false,
      statusCode: 500,
    };
  }
}
