"use server";

import { FormState } from "@/lib/types";
import z from "zod";
import { CreateProductFormProps, createProductFormSchema } from "./schema";
import { core } from "@/lib/core";

type VariationGroup = { property: string; values: string[] };

function parseVariations(json: string): { property: string; value: string }[] {
  try {
    const groups: VariationGroup[] = JSON.parse(json || "[]");
    return groups.flatMap((g) =>
      g.values.filter(Boolean).map((value) => ({ property: g.property, value })),
    );
  } catch {
    return [];
  }
}

export async function createProduct(
  namespace: string,
  prevState: FormState<CreateProductFormProps>,
  formData: FormData,
): Promise<FormState<CreateProductFormProps>> {
  const rawData: CreateProductFormProps = {
    name: formData.get("name") as string,
    shortDescription: formData.get("shortDescription") as string,
    longDescription: formData.get("longDescription") as string,
    published: Boolean(formData.get("published")),
  };

  const parsed = createProductFormSchema.safeParse(rawData);

  if (!parsed.success) {
    console.error("parsing error in createProduct:", parsed.error);
    return {
      status: "error",
      fieldErrors: z.treeifyError(parsed.error).properties,
      fieldValues: rawData,
    };
  }

  const env = await core.getEnvironmentByNamespace(namespace);

  if (!env)
    return {
      status: "error",
      fieldValues: parsed.data,
      formErrors: ["Error fetching env"],
    };

  const imageUrls = (formData.getAll("imageUrl") as string[]).filter(Boolean);
  const variations = parseVariations(formData.get("variationsJson") as string);

  const success = await env.createProduct(parsed.data, imageUrls, variations);

  if (!success) {
    return {
      status: "error",
      fieldValues: parsed.data,
      formErrors: ["Error creating product"],
    };
  }

  return {
    status: "success",
  };
}
