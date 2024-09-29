"use client";

import type { FC } from "react";

import { navItems } from "@/config/data";
import { Link } from "@nextui-org/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";

const SidebarItems: FC = () => {
  const pathname = usePathname();
  return (
    <div className="flex-1">
      <div className="grid items-start px-2 text-sm font-medium lg:px-4">
        {navItems.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className={cn(
              "text-foreground/50 gap-3 rounded-lg transition-all hover:text-foreground hover:bg-content1 px-3 py-2",
              pathname === item.href &&
                "bg-content2/70 text-foreground hover:bg-content2/70 hover:opacity-100",
            )}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SidebarItems;
