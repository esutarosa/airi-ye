import type { FC } from "react";
import Link from "next/link";
import { Badge } from "@nextui-org/badge";

const Logo: FC = () => {
  return (
    <Badge content="beta" size="sm" className="-right-0">
      <Link className="text-xl font-semibold tracking-wider" href="/">
        AIRI
      </Link>
    </Badge>
  );
};

export default Logo;
