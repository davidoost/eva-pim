"use server";

import z from "zod";
import { redirect } from "next/navigation";
import { FormState } from "@/lib/types";
import { ValidateEnvironmentProps, validateEnvironmentSchema } from "./schema";
import { ensureHasProtocol, toEvaApiUrl } from "@/lib/utils";
import { core } from "@/lib/core";

export default async function validateEnvironment(
  prevState: FormState<ValidateEnvironmentProps>,
  formData: FormData,
): Promise<FormState<ValidateEnvironmentProps>> {
  const raw = formData.get("query");
  const rawQuery = ensureHasProtocol(raw);

  const rawData: ValidateEnvironmentProps = {
    query: rawQuery as string,
  };

  const parsed = validateEnvironmentSchema.safeParse(rawData);

  if (!parsed.success) {
    return {
      status: "error",
      fieldErrors: z.treeifyError(parsed.error).properties,
      fieldValues: rawData,
    };
  }

  const evaUrl = toEvaApiUrl(parsed.data.query);

  const namespace = await core.validateEvaEndpoint(evaUrl);

  if (!namespace) {
    return {
      status: "error",
      fieldValues: parsed.data,
      fieldErrors: { query: { errors: ["Invalid EVA URL"] } },
    };
  }

  const env = await core.getEnvironmentByNamespace(namespace);

  if (!env) {
    const success = await core.createEnvironment({
      namespace: namespace,
      endpoint: evaUrl,
    });

    if (!success) {
      return {
        status: "error",
        fieldValues: parsed.data,
        fieldErrors: { query: { errors: ["Something went wrong"] } },
      };
    }
  }

  redirect(`/${namespace}/login`);
}
