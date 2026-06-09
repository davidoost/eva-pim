import { ReactNode } from "react";
import { DashboardProvider } from "./context";
import { core } from "@/lib/core";
import { notFound, redirect } from "next/navigation";
import AppSidebar from "@/components/navigation/sidebar";
import AppNavbar from "@/components/navigation/navbar";
import { AppLayoutClient } from "@/components/navigation/app-layout-client";

interface DashboardLayoutProps {
  params: Promise<{ namespace: string }>;
  children: ReactNode;
}

export default async function DashboardLayout({
  params,
  children,
}: DashboardLayoutProps) {
  const { namespace } = await params;

  const env = await core.getEnvironmentByNamespace(namespace);
  if (!env) {
    notFound();
  }

  const [currentUser, taxCodes, productProperties] = await Promise.all([
    env.getCurrentUser(),
    env.listTaxCodes(),
    env.listProductProperties(),
  ]);

  if (!currentUser) redirect(`/${env.data.namespace}/login`);

  return (
    <DashboardProvider
      environment={env.data}
      user={currentUser}
      taxCodes={taxCodes}
      productProperties={productProperties}
    >
      <AppLayoutClient sidebar={<AppSidebar />} navbar={<AppNavbar />}>
        <main className="p-6">{children}</main>
      </AppLayoutClient>
    </DashboardProvider>
  );
}
