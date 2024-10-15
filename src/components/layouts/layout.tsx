"use client";

import { useEffect, type FC, type PropsWithChildren } from "react";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Loader } from "@/components/loader";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/auth");
    }
  }, [session.status, router]);

  if (session.status === "loading") {
    return <Loader />;
  }

  if (session.status === "authenticated") {
    return <BaseLayout>{children}</BaseLayout>;
  }

  return null;
};

const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
