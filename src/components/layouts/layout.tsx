import type { FC, PropsWithChildren } from "react";

import { Navbar } from "@/components/navbar";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
