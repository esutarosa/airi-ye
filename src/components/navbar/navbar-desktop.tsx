import type { FC } from "react";
import { Logo } from "@/components/logo";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";

const NavbarDesktop: FC = () => {
  return (
    <div className="container flex h-14 items-center border-b border-content1">
      <div className="flex w-full items-center justify-between">
        <Logo />
        <nav className="flex items-center space-x-4">
          <Link href="https://github.com/Esutarosa/airi-ye" target="_blank">
            <FiGithub className="size-5" />
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default NavbarDesktop;
