import type { FC, PropsWithChildren } from "react";
import type { Metadata } from "next";

import { NextUIProvider } from "@/providers";
import { BASE_URL, SITE_DESCRIPTION, SITE_TITLE } from "@/config/site";

import "@/styles/global.css";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  ...(BASE_URL && { metadataBase: new URL(BASE_URL) }),
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  icons: [
    {
      url: "/favicon.ico",
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
    },
  ],
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
