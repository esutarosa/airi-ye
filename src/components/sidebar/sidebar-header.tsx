import type { FC } from "react";

import { Link } from "@nextui-org/link";
import { Badge } from "@nextui-org/badge";
import { Tent } from "lucide-react";

const SidebarHeader: FC = () => {
  return (
    <div className="flex h-14 items-center justify-between border-b border-content1 px-4 lg:h-[60px] lg:px-6">
      <Badge content="beta" size="sm" className="-right-5 border-none">
        <Link
          className="text-xl flex items-center gap-1 text-foreground font-semibold tracking-wider"
          href="/"
        >
          <Tent className="w-5 h-5" />
          AIRI
        </Link>
      </Badge>
    </div>
  );
};

export default SidebarHeader;
