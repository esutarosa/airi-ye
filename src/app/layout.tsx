import type { FC, PropsWithChildren } from "react";
import { Metadata } from "next";
import { NextUIProvider } from "@/providers";

import "@/styles/global.css";

export const metadata: Metadata = {
  title: "AIRI",
  description: "Some description",
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="uk" suppressHydrationWarning>
      <body>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
};

export default RootLayout;
