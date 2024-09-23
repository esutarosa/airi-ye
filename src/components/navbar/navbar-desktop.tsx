import type { FC } from "react";
import Link from "next/link";

const NavbarDesktop: FC = () => {
  return (
    <div className="container flex h-14 items-center">
      <nav className="flex w-full items-center justify-between">
        <Link href="/">AIRI</Link>
      </nav>
    </div>
  );
};

export default NavbarDesktop;
