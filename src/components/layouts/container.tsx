import type { FC, PropsWithChildren } from "react";

import { cn } from "@/utils/cn";

interface ContainerProps extends PropsWithChildren {
  color?: "accent" | "red";
  sectionClassName?: string;
  containerClassName?: string;
  padding?: "loose" | "normal" | "tight";
  centered?: boolean;
  spaceChildren?: boolean;
}

const Container: FC<ContainerProps> = ({
  children,
  sectionClassName,
  containerClassName,
  color,
  padding = "normal",
  centered = false,
  spaceChildren = true,
}) => {
  const getColorClasses = () => {
    switch (color) {
      case "accent":
        return [
          "bg-zinc-500/70 border-zinc-400 text-zinc-50 dark:bg-zinc-100 dark:border-zinc-200 dark:text-zinc-900",
        ];
      case "red":
        return ["text-zinc-50 bg-red-500/20 border-red-500"];
      default:
        return [];
    }
  };

  const getPaddingClasses = () => {
    switch (padding) {
      case "loose":
        return "py-16 md:py-24";
      case "normal":
        return "py-4 md:py-8";
      case "tight":
        return "py-1.5";
    }
  };

  return (
    <section
      className={cn(
        "rounded-md container",
        getColorClasses(),
        getPaddingClasses(),
        sectionClassName,
      )}
    >
      <div
        className={cn(
          centered && "flex flex-col items-center",
          spaceChildren && "space-y-4",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default Container;
