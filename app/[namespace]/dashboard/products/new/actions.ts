"use server";

import { core } from "@/lib/core";
import { revalidatePath } from "next/cache";

type CreateProductInput = {
  name: string;
  brand?: string;
  taxCode?: string;
  shortDescription?: string;
  longDescription?: string;
  published: boolean;
  imageUrls: string[];
  variants?: { property: string; values: string[] };
  secondaryVariants?: { property: string; values: string[] };
};

export async function createProductAction(
  namespace: string,
  input: CreateProductInput,
): Promise<{ success: boolean; error?: string }> {
  const env = await core.getEnvironmentByNamespace(namespace);
  if (!env) return { success: false, error: "Environment not found" };

  const result = await env.createProductWithVariants(
    {
      name: input.name,
      brand: input.brand || null,
      taxCode: input.taxCode || "",
      shortDescription: input.shortDescription || null,
      longDescription: input.longDescription || null,
      published: input.published,
    },
    input.imageUrls,
    input.variants,
    input.secondaryVariants,
  );

  if (result.success) {
    revalidatePath(`/${namespace}/dashboard/products`);
  }

  return {
    success: result.success,
    error: result.success ? undefined : "Failed to create product",
  };
}
