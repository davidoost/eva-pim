import { core } from "@/lib/core";
import { notFound } from "next/navigation";
import { Description, Label } from "@heroui/react";
import DashboardCard from "@/components/layout/dashboard-card";
import { headers } from "next/headers";
import { createClient } from "@/src/eva/server";

interface SettingsPageProps {
  params: Promise<{ namespace: string }>;
}

export default async function SettingsPage({ params }: SettingsPageProps) {
  const { namespace } = await params;

  const env = await core.getEnvironmentByNamespace(namespace);
  if (!env) notFound();

  const res = await env.eva.GetEndpointConfigurations({});

  return (
    <>
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
