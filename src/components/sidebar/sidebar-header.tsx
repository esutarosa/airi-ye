import type { FC } from "react";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

const SidebarHeader: FC = () => {
  return (
    <div className="flex h-14 items-center justify-between border-b border-content1 px-4 lg:h-[60px] lg:px-6">
      <Link
        href="/"
        className="flex items-center gap-2 font-semibold text-foreground"
      >
        AIRI
      </Link>
      <Button radius="full" variant="flat" isIconOnly aria-label="Notification">
        NF
      </Button>
    </div>
  );
};

export default SidebarHeader;
