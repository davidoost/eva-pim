"use client";

import { AppLayout } from "@heroui-pro/react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export function AppLayoutClient({
  sidebar,
  navbar,
  children,
}: {
  sidebar: ReactNode;
  navbar: ReactNode;
  children: ReactNode;
}) {
  const router = useRouter();
  return (
    <AppLayout sidebar={sidebar} navbar={navbar} navigate={router.push}>
      {children}
    </AppLayout>
  );
}
