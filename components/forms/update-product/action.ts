"use server";

import { FormState } from "@/lib/types";
import z from "zod";
import { UpdateProductFormProps, updateProductFormSchema } from "./schema";
import { core } from "@/lib/core";
import { deleteProductImages } from "@/lib/supabase/actions";

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

export async function updateProduct(
  namespace: string,
  productId: string,
  prevState: FormState<UpdateProductFormProps>,
  formData: FormData,
): Promise<FormState<UpdateProductFormProps>> {
  const rawData: UpdateProductFormProps = {
    name: formData.get("name") as string,
    shortDescription: formData.get("shortDescription") as string,
    longDescription: formData.get("longDescription") as string,
    published: Boolean(formData.get("published")),
  };

  const parsed = updateProductFormSchema.safeParse(rawData);

  if (!parsed.success) {
    console.error("parsing error in updateProduct:", parsed.error);
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
  const removedPaths = (formData.getAll("removedImagePath") as string[]).filter(Boolean);
  const variations = parseVariations(formData.get("variationsJson") as string);

  await deleteProductImages(removedPaths);

  const success = await env.updateProduct(productId, parsed.data, imageUrls, variations);

  if (!success) {
    return {
      status: "error",
      fieldValues: parsed.data,
      formErrors: ["Error updating product"],
    };
  }

  return {
    status: "success",
  };
}
