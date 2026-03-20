"use server";

import { core } from "@/lib/core";
import { revalidatePath } from "next/cache";

type UpdateProductInput = {
  name: string;
  brand?: string;
  taxCode?: string;
  shortDescription?: string;
  longDescription?: string;
  published: boolean;
  imageUrls: string[];
  removedImagePaths: string[];
  variants?: { property: string; values: string[] };
  secondaryVariants?: { property: string; values: string[] };
};

export async function updateProductAction(
  namespace: string,
  productId: string,
  input: UpdateProductInput,
): Promise<{ success: boolean; error?: string }> {
  const env = await core.getEnvironmentByNamespace(namespace);
  if (!env) return { success: false, error: "Environment not found" };

  const success = await env.updateProductWithVariants(
    productId,
    {
      name: input.name,
      brand: input.brand || null,
      taxCode: input.taxCode || "",
      shortDescription: input.shortDescription || null,
      longDescription: input.longDescription || null,
      published: input.published,
    },
    input.imageUrls,
    input.removedImagePaths,
    input.variants,
    input.secondaryVariants,
  );

  if (success) {
    revalidatePath(`/${namespace}/dashboard/products`);
  }

  return {
    success,
    error: success ? undefined : "Failed to update product",
  };
}
