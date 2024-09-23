import type { FC } from "react";
import { NavbarDesktop, NavbarProvider } from "@/components/navbar";

const Navbar: FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full">
      <NavbarDesktop />
    </header>
  );
};

export default Navbar;
