"use client";

import type { FC } from "react";
import { Spinner } from "@nextui-org/spinner";

const Loader: FC = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Spinner size="sm" color="default" />
    </div>
  );
};

export default Loader;
