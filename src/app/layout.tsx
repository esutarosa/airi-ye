import type { FC, PropsWithChildren } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIRI",
  description: "Some description",
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="uk" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
