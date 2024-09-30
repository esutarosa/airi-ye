"use client";

import { type FC, useState } from "react";
import { Link } from "@nextui-org/link";
import { navItems } from "@/config/data";
import { AnimatePresence, easeOut, motion } from "framer-motion";
import { useKey } from "react-use";
import { Badge } from "@nextui-org/badge";
import { Button } from "@nextui-org/button";
import { Tent, AlignJustify, X } from "lucide-react";

const NavbarMobile: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const listItem = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.15, staggerChildren: 0.05, ease: easeOut },
    },
    exit: { opacity: 0, transition: { duration: 0.15 } },
  };

  useKey("Escape", () => setIsOpen(false));

  return (
    <>
      <Button
        className="md:hidden"
        variant="light"
        radius="full"
        size="sm"
        aria-label="Toggle menu"
        onClick={() => setIsOpen(true)}
      >
        <AlignJustify />
      </Button>
      <AnimatePresence mode="wait">
        {isOpen && (
          <div className="bg-content1 fixed overflow-hidden inset-0 z-50 h-screen w-full transform">
            <div className="absolute h-14 px-6 flex items-center justify-between w-screen transform">
              <Badge content="beta" size="sm" className="-right-5 border-none">
                <Link
                  className="text-xl flex items-center gap-1 text-foreground font-semibold tracking-wider"
                  href="/"
                >
                  <Tent className="w-5 h-5" />
                  AIRI
                </Link>
              </Badge>
              <Button
                size="sm"
                radius="full"
                variant="light"
                aria-label="Toggle menu"
                onClick={() => setIsOpen(false)}
                className="md:hidden"
              >
                <X />
              </Button>
            </div>

            <div className="max-h-screen supports-[height:100cqh]:h-[100cqh] supports-[height:100svh]:h-[100svh] overflow-y-auto pt-20 pb-32 px-4">
              {navItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={listItem}
                  className="border-b [&>div]:!rounded-none"
                >
                  <Link
                    href={item.href}
                    className="py-2 pl-3 pr-4 text-foreground flex items-center gap-2"
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarMobile;
