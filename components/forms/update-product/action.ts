"use server";

import { FormState } from "@/lib/types";
import z from "zod";
import { UpdateProductFormProps, updateProductFormSchema } from "./schema";
import { core } from "@/lib/core";
import { deleteProductImages } from "@/lib/supabase/actions";

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
    taxCode: (formData.get("taxCode") as string) || undefined,
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

  await deleteProductImages(removedPaths);

  const success = await env.updateProduct(productId, parsed.data, imageUrls);

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
