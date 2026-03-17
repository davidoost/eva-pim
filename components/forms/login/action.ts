"use server";

import z from "zod";
import { redirect } from "next/navigation";
import { FormState } from "@/lib/types";
import { LoginProps, loginSchema } from "./schema";
import { core } from "@/lib/core";

export async function login(
  namespace: string,
  prevState: FormState<LoginProps>,
  formData: FormData,
): Promise<FormState<LoginProps>> {
  const rawData: LoginProps = {
    username: formData.get("username") as string,
    password: formData.get("password") as string,
  };

  const parsed = loginSchema.safeParse(rawData);

  if (!parsed.success) {
    return {
      status: "error",
      fieldErrors: z.treeifyError(parsed.error).properties,
      fieldValues: rawData,
    };
  }

  const env = await core.getEnvironmentByNamespace(namespace);
  if (!env) {
    return {
      status: "error",
      fieldValues: parsed.data,
      formErrors: ["there was an error logging you in"],
    };
  }

  const success = await env.login(parsed.data.username, parsed.data.password);
  if (!success) {
    return {
      status: "error",
      fieldValues: parsed.data,
      formErrors: ["there was an error logging you in"],
    };
  }

  return { status: "success", fieldValues: parsed.data };
}
