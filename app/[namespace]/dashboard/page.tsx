import DashboardPageHeader from "@/components/layout/dashboard-page-header";
import DashboardCard from "@/components/layout/dashboard-card";
import { core } from "@/lib/core";
import { notFound } from "next/navigation";
import { Button, buttonVariants, Card, Chip, Separator } from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { SelectProduct, SelectSyncRun } from "@/lib/db/types";

function StatCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: number | string;
  icon: string;
}) {
  return (
    <Card className="flex flex-col gap-1 p-4">
      <div className="flex items-center gap-2 text-muted">
        <Icon icon={icon} className="size-4" />
        <span className="text-xs font-medium uppercase tracking-wide">
          {label}
        </span>
      </div>
      <span className="text-3xl font-semibold">{value}</span>
    </Card>
  );
}

function syncStatusColor(
  status: string | null,
): "default" | "success" | "danger" | "warning" {
  switch (status) {
    case "success":
      return "success";
    case "failed":
      return "danger";
    case "pending_async":
      return "warning";
    default:
      return "default";
  }
}

function productSyncStatus(
  product: SelectProduct,
): "draft" | "changed" | "synced" {
  if (!product.lastSyncedAt) return "draft";
  if (product.lastUpdatedAt > product.lastSyncedAt) return "changed";
  return "synced";
}

function LastSyncCard({
  run,
  namespace,
}: {
  run: SelectSyncRun | null;
  namespace: string;
}) {
  return (
    <DashboardCard
      title="Last Sync"
      headerContent={
        <Link
          href={`/${namespace}/dashboard/sync`}
          className={buttonVariants({ variant: "ghost" })}
        >
          View all
          <Icon icon="hugeicons:arrow-right-01" />
        </Link>
      }
    >
      {run ? (
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            <span className="text-muted">Status</span>
            <div>
              <Chip
                color={syncStatusColor(run.status)}
                variant="soft"
                size="sm"
                className="min-w-0 self-start"
              >
                {run.status ?? "unknown"}
              </Chip>
            </div>

            <span className="text-muted">Started</span>
            <span>{run.startedAt?.toLocaleString() ?? "—"}</span>

            <span className="text-muted">Completed</span>
            <span>{run.completedAt?.toLocaleString() ?? "—"}</span>

            <span className="text-muted">Products submitted</span>
            <span>{run.productsSubmitted ?? "—"}</span>
          </div>
          {run.error && (
            <div className="rounded-lg bg-danger/10 px-3 py-2 text-xs text-danger">
              {run.error}
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2 py-4 text-center">
          <Icon icon="hugeicons:cloud-upload" className="size-6 text-muted" />
          <span className="text-sm text-muted">No syncs yet</span>
          <Link
            href={`/${namespace}/dashboard/sync`}
            className={buttonVariants({ variant: "ghost" })}
          >
            Sync to EVA
            <Icon icon="hugeicons:arrow-right-01" />
          </Link>
        </div>
      )}
    </DashboardCard>
  );
}

export default async function DashboardHomePage({
  params,
}: {
  params: Promise<{ namespace: string }>;
}) {
  const { namespace } = await params;

  const env = await core.getEnvironmentByNamespace(namespace);
  if (!env) notFound();

  const [products, runs] = await Promise.all([
    env.listProducts(),
    env.listSyncRuns(),
  ]);

  const lastRun = runs[0] ?? null;

  const total = products.length;
  const published = products.filter((p) => p.published).length;
  const statuses = products.reduce(
    (acc, p) => {
      acc[productSyncStatus(p)]++;
      return acc;
    },
    { draft: 0, changed: 0, synced: 0 },
  );

  return (
    <>
      <DashboardPageHeader
        title="Overview"
        description={`${env.data.namespace} — ${env.data.endpoint}`}
      />

      <div className="flex flex-col gap-4">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <StatCard
            label="Total products"
            value={total}
            icon="hugeicons:package-01"
          />

          <StatCard
            label="Published"
            value={published}
            icon="hugeicons:checkmark-circle-02"
          />

          <StatCard
            label="Draft"
            value={statuses.draft}
            icon="hugeicons:file-edit"
          />

          <StatCard
            label="Changed"
            value={statuses.changed}
            icon="hugeicons:alert-02"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Sync status breakdown */}
          <DashboardCard
            title="Sync status"
            headerContent={
              <Link
                href={`/${namespace}/dashboard/sync`}
                className={buttonVariants({ variant: "ghost" })}
              >
                View products
                <Icon icon="hugeicons:arrow-right-01" />
              </Link>
            }
          >
            <div className="flex flex-col gap-2">
              {[
                {
                  label: "Up to date",
                  count: statuses.synced,
                  color: "text-success",
                  icon: "hugeicons:checkmark-circle-02",
                },
                {
                  label: "Changed",
                  count: statuses.changed,
                  color: "text-warning",
                  icon: "hugeicons:alert-02",
                },
                {
                  label: "Draft",
                  count: statuses.draft,
                  color: "text-muted",
                  icon: "hugeicons:file-edit",
                },
              ].map(({ label, count, color, icon }, i, arr) => (
                <div key={label}>
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon icon={icon} className={`size-4 ${color}`} />
                      <span>{label}</span>
                    </div>
                    <span className="text-sm font-medium">{count}</span>
                  </div>
                  {i < arr.length - 1 && <Separator />}
                </div>
              ))}
            </div>
          </DashboardCard>

          {/* Last sync */}
          <LastSyncCard run={lastRun} namespace={namespace} />
        </div>
      </div>
    </>
  );
}
