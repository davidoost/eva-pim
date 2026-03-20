"use client";

import { Button, Spinner, toast } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { triggerSyncAction, pollSyncAction } from "@/app/[namespace]/dashboard/sync/actions";

interface SyncButtonProps {
  namespace: string;
}

export default function SyncButton({ namespace }: SyncButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [statusLabel, setStatusLabel] = useState<string | null>(null);

  async function handleSync() {
    if (isLoading) return;
    setIsLoading(true);
    setStatusLabel("Starting sync…");

    try {
      const result = await triggerSyncAction(namespace);

      if (result.error || !result.runId) {
        toast.danger(result.error ?? "Unknown error");
        setIsLoading(false);
        setStatusLabel(null);
        return;
      }

      toast.success("Sync submitted — waiting for EVA…");
      setStatusLabel("Polling…");

      // Poll every 3 seconds until completed or failed
      const runId = result.runId;
      let attempts = 0;
      const maxAttempts = 40; // ~2 minutes

      const poll = async () => {
        if (attempts >= maxAttempts) {
          setStatusLabel(null);
          setIsLoading(false);
          toast.warning("Polling timed out. Check the sync run status manually.");
          router.refresh();
          return;
        }

        attempts++;
        const status = await pollSyncAction(namespace, runId);

        if (status.status === "success") {
          setStatusLabel(null);
          setIsLoading(false);
          toast.success("Sync complete — products imported successfully.");
          router.refresh();
        } else if (status.status === "failed") {
          setStatusLabel(null);
          setIsLoading(false);
          toast.danger(status.error ?? "Unknown error from EVA");
          router.refresh();
        } else {
          setTimeout(poll, 3000);
        }
      };

      setTimeout(poll, 3000);
    } catch (error) {
      toast.danger(error instanceof Error ? error.message : "Unknown error");
      setIsLoading(false);
      setStatusLabel(null);
    }
  }

  return (
    <Button
      variant="tertiary"
      onPress={handleSync}
      isDisabled={isLoading}
    >
      {isLoading ? (
        <Spinner size="sm" color="current" />
      ) : (
        <Icon icon="hugeicons:cloud-upload" />
      )}
      {isLoading ? (statusLabel ?? "Syncing…") : "Sync to EVA"}
    </Button>
  );
}
