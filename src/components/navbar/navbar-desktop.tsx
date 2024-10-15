import type { FC } from "react";
import Link from "next/link";
import { Github } from "lucide-react";

const NavbarDesktop: FC = () => {
  return (
    <div className="w-full flex h-14 items-center">
      <nav className="flex w-full justify-end items-end space-x-4">
        <Link href="https://github.com/Esutarosa/airi-ye" target="_blank">
          <Github className="size-5" />
        </Link>
      </nav>
    </div>
  );
};

export default NavbarDesktop;
