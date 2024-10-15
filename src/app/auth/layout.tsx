import type { FC, PropsWithChildren } from "react";

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      {children}
    </main>
  );
};

export default AuthLayout;
