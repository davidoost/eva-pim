import DashboardPageHeader from "@/components/layout/dashboard-page-header";
import { SyncRunsTable } from "@/components/sync/SyncRunsTable";
import SyncButton from "@/components/sync/SyncButton";
import { core } from "@/lib/core";
import { notFound } from "next/navigation";

interface SyncPageProps {
  params: Promise<{ namespace: string }>;
}

export default async function SyncPage({ params }: SyncPageProps) {
  const { namespace } = await params;

  const env = await core.getEnvironmentByNamespace(namespace);
  if (!env) notFound();

  const runs = await env.listSyncRuns();

  return (
    <>
      <DashboardPageHeader
        title="Sync"
        description="Push your product catalog to EVA via the ImportProducts API"
      />

      <div className="w-full flex flex-col gap-3">
        <div className="flex justify-end">
          <SyncButton namespace={namespace} />
        </div>

        <SyncRunsTable runs={runs} />
      </div>
    </>
  );
}
