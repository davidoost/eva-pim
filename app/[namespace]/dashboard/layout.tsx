import Sidebar from "@/components/layout/sidebar";
import { ScrollShadow } from "@heroui/react";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  params: Promise<{ namespace: string }>;
  children: ReactNode;
}

export default async function DashboardLayout({
  params,
  children,
}: DashboardLayoutProps) {
  const { namespace } = await params;
  return (
    <div className="w-full max-w-7xl flex max-h-dvh gap-4">
      <Sidebar />
      <ScrollShadow
        className="max-h-dvh flex-1 p-4 flex flex-col gap-6"
        hideScrollBar
      >
        {children}
      </ScrollShadow>
    </div>
  );
}
