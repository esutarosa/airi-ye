"use client";

import type { FC } from "react";
import { AuthForm } from "@/components/auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Loader } from "@/components/loader";

const AuthPage: FC = () => {
  const session = useSession();
  const router = useRouter();

  switch (session.status) {
    case "loading":
      return <Loader />;
    case "unauthenticated":
      return <Auth />;
    case "authenticated":
      router.push("/");
    default:
      return null;
  }
};

const Auth: FC = () => {
  return (
    <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl shadow-xl">
      <div className="flex flex-col items-center justify-center space-y-3 border-b border-content1 bg-content1/50 px-4 py-6 pt-8 text-center sm:px-8">
        <h3 className="text-xl font-semibold">Nyan Auth</h3>
        <p className="text-sm text-default-400">
          Use your email and password to login :3
        </p>
      </div>
      <div className="flex flex-col bg-content1/50 px-4 pt-2">
        <AuthForm />
      </div>
      <div className="flex flex-col items-center justify-center bg-content1/50 px-4 py-2 pb-8">
        <p className="text-default-400 text-sm text-center">
          This site is restricted to a small group. If you haven&apos;t been
          given access by an admin, you won&apos;t be able to log in.{" "}
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
