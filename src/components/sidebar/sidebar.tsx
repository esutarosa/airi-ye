import type { FC } from "react";
import { SidebarHeader, SidebarItems } from "@/components/sidebar";

const Sidebar: FC = () => {
  return (
    <aside className="hidden border-r border-content2 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2 bg-content1/70">
        <SidebarHeader />
        <SidebarItems />
      </div>
    </aside>
  );
};

export default Sidebar;
