"use client";

import { type FC, useLayoutEffect, useRef, useState } from "react";
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

const AuthForm: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  // const emailRef = useRef<HTMLInputElement>(null);
  // useLayoutEffect(() => {
  //   emailRef.current?.focus();
  // }, []);

  const { register, handleSubmin } = useForm<AuthFormInput>({});

  const submit = (data: AuthFormInput) => {
    console.log("Form Data:", data);
  };

  return (
    <Container>
      <form className="flex flex-col">
        <div className="w-full flex flex-col space-y-6">
          <Input
            {...register("email")}
            // ref={emailRef}
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
          <Button type="submit" variant="flat" isLoading={isLoading}>
            Nya!
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default AuthForm;
