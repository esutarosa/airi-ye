import type { FC } from "react";
import type { NavbarContextType } from "@/types";

import { NavbarDesktop, NavbarProvider } from "@/components/navbar";

const Navbar: FC<NavbarContextType> = () => {
  return (
    <NavbarProvider>
      <header className="sticky top-0 z-50 w-full">
        <NavbarDesktop />
      </header>
    </NavbarProvider>
  );
};

export default Navbar;
