"use client";

import {
  createContext,
  useContext,
  type FC,
  type PropsWithChildren,
} from "react";

import type { NavbarContextType } from "@/types";

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbar must be used within a NavbarProvider");
  }
  return context;
};

const NavbarProvider: FC<PropsWithChildren<NavbarContextType>> = ({
  children,
  isHideNavbar,
}) => {
  return (
    <NavbarContext.Provider value={{ isHideNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarProvider;
