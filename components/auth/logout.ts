"use server";

import { core } from "@/lib/core";
import { redirect } from "next/navigation";

export async function logout(namespace: string) {
  const env = await core.getEnvironmentByNamespace(namespace);
  if (env) await env.eva.logout();
  redirect(`/${namespace}/login`);
}
