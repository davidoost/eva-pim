import Sidebar from "@/components/layout/sidebar";
import { ReactNode } from "react";
import { DashboardProvider } from "./context";
import { core } from "@/lib/core";
import { notFound, redirect } from "next/navigation";

interface DashboardLayoutProps {
  params: Promise<{ namespace: string }>;
  children: ReactNode;
}

export default async function DashboardLayout({
  params,
  children,
}: DashboardLayoutProps) {
  const { namespace } = await params;

  const environment = await core.getEnvironmentByNamespace(namespace);
  if (!environment) {
    console.log("xd");
    notFound();
  }

  const [currentUser, taxCodes, productProperties] = await Promise.all([
    environment.getCurrentUser(),
    environment.listTaxCodes(),
    environment.listProductProperties(),
  ]);

  if (!currentUser) redirect(`/${environment.data.namespace}/login`);

  return (
    <DashboardProvider
      environment={environment.data}
      user={currentUser}
      taxCodes={taxCodes}
      productProperties={productProperties}
    >
      <div className="md:max-h-dvh flex w-full md:overflow-hidden">
        {/* Desktop Sidebar - Hidden on mobile */}

        <Sidebar />

        <div className="w-full flex flex-col">
          <div className="md:flex-1 md:overflow-x-hidden md:overflow-y-auto p-4 sm:p-6 pb-24 md:pb-6">
            <main className="w-full max-w-5xl mx-auto flex flex-col gap-4 sm:gap-6">
              {children}
            </main>
          </div>
        </div>
      </div>
    </DashboardProvider>
  );
}
