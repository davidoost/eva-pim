"use server";

import { core } from "@/lib/core";
import { cookies } from "next/headers";

export async function triggerSyncAction(
  namespace: string,
): Promise<{ runId?: string; error?: string }> {
  const cookieStore = await cookies();
  const token = cookieStore.get(`at-${namespace}`)?.value;

  if (!token) {
    return { error: "Not authenticated" };
  }

  const env = await core.getEnvironmentByNamespace(namespace);
  if (!env) {
    return { error: "Environment not found" };
  }

  const result = await env.triggerSync(cookieStore);

  if (result.error && !result.runId) {
    return { error: result.error };
  }

  return { runId: result.runId };
}

export async function pollSyncAction(
  namespace: string,
  runId: string,
): Promise<{ status: string; error?: string; completedAt?: string }> {
  const cookieStore = await cookies();
  const token = cookieStore.get(`at-${namespace}`)?.value;

  if (!token) {
    return { status: "failed", error: "Not authenticated" };
  }

  const env = await core.getEnvironmentByNamespace(namespace);
  if (!env) {
    return { status: "failed", error: "Environment not found" };
  }

  const run = await env.pollSyncRun(runId, await cookies());
  if (!run) {
    return { status: "failed", error: "Sync run not found" };
  }

  return {
    status: run.status ?? "pending_async",
    error: run.error ?? undefined,
    completedAt: run.completedAt?.toISOString() ?? undefined,
  };
}
