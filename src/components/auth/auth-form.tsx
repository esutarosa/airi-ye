"use client";

import { type FC, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  type AuthFormSchemaType,
  authFormSchema,
} from "@/definitions/auth-form-schema";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import { Card, CardBody } from "@nextui-org/card";
import { Container } from "@/components/layouts";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

const AuthForm: FC = () => {
  const router = useRouter();

  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";

  const methods = useForm<AuthFormSchemaType>({
    resolver: zodResolver(authFormSchema),
  });

  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmitHandler: SubmitHandler<AuthFormSchemaType> = async (values) => {
    try {
      setSubmitting(true);

      const res = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
        redirectTo: callbackUrl,
      });

      setSubmitting(false);

      if (!res?.error) {
        toast.success("successfully logged in");
        router.push(callbackUrl);
      } else {
        reset({ password: "" });
        const message = "invalid email or password";
        toast.error(message);
        setError(message);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message);
      setError(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container centered containerClassName="min-h-[70vh] justify-center">
      <Card className="max-w-full w-[340px]">
        <CardBody className="overflow-hidden">
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            {error && (
              <p className="text-center bg-red-300 py-4 mb-6 rounded">
                {error}
              </p>
            )}
            <Input
              isRequired
              label="Email"
              {...register("email")}
              placeholder="Enter your nyan email"
              type="email"
            />
            {errors["email"] && (
              <span className="text-red-500 text-xs pt-1 block">
                {errors["email"]?.message as string}
              </span>
            )}
            <Input
              isRequired
              label="Password"
              {...register("password")}
              placeholder="Enter your super nyan password"
              type="password"
            />
            {errors["password"] && (
              <span className="text-red-500 text-xs pt-1 block">
                {errors["password"]?.message as string}
              </span>
            )}
            <div className="flex gap-2 justify-end">
              <Button
                fullWidth
                type="submit"
                disabled={submitting}
                color="primary"
              >
                {submitting ? "Loading..." : "Login"}
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </Container>
  );
};

export default AuthForm;
