import type { FC } from "react";
import { NavbarDesktop } from "@/components/navbar";

const Navbar: FC = () => {
  return (
    <header className="w-full">
      <NavbarDesktop />
    </header>
  );
};

export default Navbar;
