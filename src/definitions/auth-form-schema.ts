import { object, pipe, string, nonEmpty, email, InferInput } from "valibot";

export const AuthFormSchema = object({
  email: pipe(
    string("Ваш email має бути рядком."),
    nonEmpty("Будь ласка, введіть ваш email."),
    email("Email-адреса неправильно відформатована."),
  ),
  password: pipe(
    string("Ваш пароль має бути рядком."),
    nonEmpty("Будь ласка, введіть ваш пароль."),
  ),
});

export type AuthFormInput = InferInput<typeof AuthFormSchema>;
