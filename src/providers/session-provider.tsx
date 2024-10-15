"use client";

import type { FC, PropsWithChildren } from "react";
import { SessionProvider } from "next-auth/react";

const Session: FC<PropsWithChildren> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Session;
