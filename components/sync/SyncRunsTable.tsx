"use client";

import { SelectSyncRun } from "@/lib/db/types";
import {
  Chip,
  EmptyState,
  Pagination,
  Table,
  Button,
  useOverlayState,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { useEffect, useMemo, useState } from "react";
import ResponsiveModal from "@/components/layout/responsive-modal";

function statusColor(
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

function RunDetailsModal({ run }: { run: SelectSyncRun }) {
  const modalState = useOverlayState();

  return (
    <>
      <Button variant="ghost" size="sm" onPress={modalState.open}>
        <Icon icon="hugeicons:view" />
        View
      </Button>

      <ResponsiveModal
        title="Sync Run Details"
        description={run.id}
        modalState={modalState}
      >
        <div className="flex flex-col gap-3 text-sm">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            <span className="text-muted">Status</span>
            <span className="font-medium capitalize">{run.status ?? "—"}</span>

            <span className="text-muted">Type</span>
            <span>{run.syncType ?? "—"}</span>

            <span className="text-muted">Triggered by</span>
            <span>{run.triggeredBy ?? "—"}</span>

            <span className="text-muted">Products submitted</span>
            <span>{run.productsSubmitted ?? "—"}</span>

            <span className="text-muted">Async token</span>
            <span className="font-mono text-xs break-all">
              {run.asyncToken ?? "—"}
            </span>

            <span className="text-muted">Started</span>
            <span>{run.startedAt?.toLocaleString() ?? "—"}</span>

            <span className="text-muted">Completed</span>
            <span>{run.completedAt?.toLocaleString() ?? "—"}</span>

            {run.error && (
              <>
                <span className="text-muted">Error</span>
                <span className="text-danger">{run.error}</span>
              </>
            )}
          </div>

          {run.evaResponse != null && (
            <div className="bg-surface-secondary rounded-lg">
              <pre className="p-4 text-xs overflow-auto max-h-60 whitespace-pre-wrap break-all">
                {JSON.stringify(run.evaResponse, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </ResponsiveModal>
    </>
  );
}

export function SyncRunsTable({
  runs,
  pageSize = 10,
}: {
  runs: SelectSyncRun[];
  pageSize?: number;
}) {
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [runs]);

  const totalPages = Math.ceil(runs.length / pageSize);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const paginatedItems = useMemo(() => {
    const start = (page - 1) * pageSize;
    return runs.slice(start, start + pageSize);
  }, [page, runs, pageSize]);
  const start = runs.length === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, runs.length);

  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content>
          <Table.Header>
            <Table.Column isRowHeader>Run ID</Table.Column>
            <Table.Column>Status</Table.Column>
            <Table.Column>Products</Table.Column>
            <Table.Column>Started</Table.Column>
            <Table.Column>Completed</Table.Column>
            <Table.Column />
          </Table.Header>
          <Table.Body
            renderEmptyState={() => (
              <EmptyState className="flex h-full w-full flex-col items-center justify-center gap-4 py-6 text-center">
                <Icon
                  className="size-6 text-muted"
                  icon="hugeicons:cloud-upload"
                />
                <span className="text-sm text-muted">
                  No sync runs yet. Click &ldquo;Sync to EVA&rdquo; to start.
                </span>
              </EmptyState>
            )}
          >
            {paginatedItems.map((run) => (
              <Table.Row key={run.id}>
                <Table.Cell className="font-mono text-xs">
                  {run.id.slice(0, 8)}…
                </Table.Cell>
                <Table.Cell>
                  <Chip color={statusColor(run.status)} variant="soft">
                    {run.status ?? "unknown"}
                  </Chip>
                </Table.Cell>
                <Table.Cell>{run.productsSubmitted ?? "—"}</Table.Cell>
                <Table.Cell>
                  {run.startedAt?.toLocaleString() ?? "—"}
                </Table.Cell>
                <Table.Cell>
                  {run.completedAt?.toLocaleString() ?? "—"}
                </Table.Cell>
                <Table.Cell>
                  <RunDetailsModal run={run} />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
      {totalPages > 1 && (
        <Table.Footer>
          <Pagination size="sm">
            <Pagination.Summary>
              {start} to {end} of {runs.length} results
            </Pagination.Summary>
            <Pagination.Content>
              <Pagination.Item>
                <Pagination.Previous
                  isDisabled={page === 1}
                  onPress={() => setPage((p) => Math.max(1, p - 1))}
                >
                  <Pagination.PreviousIcon />
                  Prev
                </Pagination.Previous>
              </Pagination.Item>
              {pages.map((p) => (
                <Pagination.Item key={p}>
                  <Pagination.Link
                    isActive={p === page}
                    onPress={() => setPage(p)}
                  >
                    {p}
                  </Pagination.Link>
                </Pagination.Item>
              ))}
              <Pagination.Item>
                <Pagination.Next
                  isDisabled={page === totalPages}
                  onPress={() => setPage((p) => Math.min(totalPages, p + 1))}
                >
                  Next
                  <Pagination.NextIcon />
                </Pagination.Next>
              </Pagination.Item>
            </Pagination.Content>
          </Pagination>
        </Table.Footer>
      )}
    </Table>
  );
}
