import DashboardPageHeader from "@/components/layout/dashboard-page-header";
import { core } from "@/lib/core";
import { notFound } from "next/navigation";
import { Description, Label } from "@heroui/react";
import DashboardCard from "@/components/layout/dashboard-card";

interface SettingsPageProps {
  params: Promise<{ namespace: string }>;
}

export default async function SettingsPage({ params }: SettingsPageProps) {
  const { namespace } = await params;

  const env = await core.getEnvironmentByNamespace(namespace);
  if (!env) notFound();

  return (
    <>
      <DashboardPageHeader
        title="Settings"
        description="EVA environment details"
      />

      <DashboardCard
        title="EVA Environment"
        description="These settings can't be changed"
      >
        <div className="w-full grid grid-cols-3 gap-2">
          <Label>Namespace</Label>
          <Description className="text-sm col-span-2">
            {env.data.namespace}
          </Description>

          <Label>Endpoint</Label>
          <Description className="text-sm col-span-2">
            {env.data.endpoint}
          </Description>
        </div>
      </DashboardCard>
    </>
  );
}
