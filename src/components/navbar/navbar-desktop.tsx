import type { FC } from "react";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";

const NavbarDesktop: FC = () => {
  return (
    <div className="w-full flex h-14 items-center border-b border-content1">
      <nav className="flex w-full justify-end items-end space-x-4">
        <Link href="https://github.com/Esutarosa/airi-ye" target="_blank">
          <FiGithub className="size-5" />
        </Link>
      </nav>
    </div>
  );
};

export default NavbarDesktop;
