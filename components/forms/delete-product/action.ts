"use server";

import { core } from "@/lib/core";
import { FormStateStatus } from "@/lib/types";

export async function deleteProduct(
  namespace: string,
  id: string,
  _prevState: FormStateStatus,
): Promise<FormStateStatus> {
  const env = await core.getEnvironmentByNamespace(namespace);
  if (!env) return "error";

  const success = await env.deleteProduct(id);

  if (!success) {
    return "error";
  }

  return "success";
}
