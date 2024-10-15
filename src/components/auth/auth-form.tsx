"use client";

import { type FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import {
  type AuthFormInput,
  AuthFormSchema,
} from "@/definitions/auth-form-schema";
import { Container } from "@/components/layouts";
import { Mail, KeyRound, Eye, EyeOff } from "lucide-react";
import { signinUserAction } from "@/actions/auth/signin-user-action";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const AuthForm: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const router = useRouter();

  const { register, handleSubmit, setError, setFocus, formState } =
    useForm<AuthFormInput>({
      resolver: valibotResolver(AuthFormSchema),
      defaultValues: { email: "", password: "" },
    });

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  const submit = async (values: AuthFormInput) => {
    const res = await signinUserAction(values);

    if (res.success) {
      router.push("/profile");
    } else {
      switch (res.statusCode) {
        case 401:
          setError("password", { message: res.error });
          toast.error(res.error);
          break;
        case 500:
        default:
          const error = res.error || "Internal Server Error";
          setError("password", { message: error });
          toast.error(error);
      }
    }
  };

  return (
    <Container>
      <form className="flex flex-col" onSubmit={handleSubmit(submit)}>
        <div className="w-full flex flex-col space-y-6">
          <Input
            {...register("email")}
            type="email"
            variant="underlined"
            labelPlacement="outside"
            startContent={
              <Mail className="text-default-400 size-6 pointer-events-none" />
            }
            endContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small select-none">
                  @gmail.com
                </span>
              </div>
            }
            name="email"
            placeholder="Email"
          />
          <Input
            {...register("password")}
            type={isVisible ? "text" : "password"}
            variant="underlined"
            labelPlacement="outside"
            startContent={
              <KeyRound className="text-default-400 size-6 pointer-events-none" />
            }
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
                aria-label="toggle password visibility"
              >
                {isVisible ? (
                  <EyeOff className="size-5 text-default-400 pointer-events-none" />
                ) : (
                  <Eye className="size-5 text-default-400 pointer-events-none" />
                )}
              </button>
            }
            name="password"
            placeholder="Password"
          />
          <Button
            type="submit"
            variant="flat"
            isLoading={formState.isSubmitting}
          >
            Nya!
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default AuthForm;
