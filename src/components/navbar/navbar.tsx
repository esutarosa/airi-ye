import type { FC } from "react";
import { NavbarDesktop, NavbarMobile } from "@/components/navbar";

const Navbar: FC = () => {
  return (
    <header className="flex h-14 items-center gap-4 border-b border-content2 bg-content1/70 px-4 lg:h-[60px] lg:px-6">
      <NavbarMobile />
      <NavbarDesktop />
    </header>
  );
};

export default Navbar;
