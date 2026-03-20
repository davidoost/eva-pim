import Sidebar from "@/components/layout/sidebar";
import { ScrollShadow } from "@heroui/react";
import { ReactNode } from "react";
import { DashboardProvider } from "./context";
import { core } from "@/lib/core";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";

interface DashboardLayoutProps {
  params: Promise<{ namespace: string }>;
  children: ReactNode;
}

export default async function DashboardLayout({
  params,
  children,
}: DashboardLayoutProps) {
  const { namespace } = await params;

  const [environment, cookieStore] = await Promise.all([
    core.getEnvironmentByNamespace(namespace),
    cookies(),
  ]);
  if (!environment) notFound();

  const [productProperties, products, taxCodes] = await Promise.all([
    environment.listProductProperties(cookieStore),
    environment.listProducts(),
    environment.listTaxCodes(cookieStore),
  ]);

  return (
    <div className="w-full max-w-7xl flex max-h-dvh gap-4">
      <DashboardProvider
        environment={environment.data}
        productProperties={productProperties}
        products={products}
        taxCodes={taxCodes}
      >
        <Sidebar />
        <ScrollShadow
          className="max-h-dvh flex-1 p-4 flex flex-col gap-6"
          hideScrollBar
        >
          {children}
        </ScrollShadow>
      </DashboardProvider>
    </div>
  );
}
