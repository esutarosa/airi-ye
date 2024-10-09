import { type FC, Suspense } from "react";
import { AuthForm } from "@/components/auth";

const AuthPage: FC = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <AuthForm />
    </Suspense>
  );
};

export default AuthPage;
