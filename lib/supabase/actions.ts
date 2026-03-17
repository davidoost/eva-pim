"use server";

import { supabaseAdmin, STORAGE_BUCKET } from "./server";

export async function uploadProductImage(
  formData: FormData,
  namespace: string,
): Promise<{ url: string; path: string } | null> {
  const file = formData.get("file") as File | null;
  if (!file) return null;

  const ext = file.name.split(".").pop();
  const path = `${namespace}/${crypto.randomUUID()}.${ext}`;

  const { error } = await supabaseAdmin.storage
    .from(STORAGE_BUCKET)
    .upload(path, file, { upsert: false });

  if (error) {
    console.error("[ERROR]:[uploadProductImage]:", error.message);
    return null;
  }

  const { data } = supabaseAdmin.storage.from(STORAGE_BUCKET).getPublicUrl(path);

  return { url: data.publicUrl, path };
}

export async function deleteProductImage(path: string): Promise<void> {
  const { error } = await supabaseAdmin.storage.from(STORAGE_BUCKET).remove([path]);
  if (error) console.error("[ERROR]:[deleteProductImage]:", error.message);
}

export async function deleteProductImages(paths: string[]): Promise<void> {
  if (paths.length === 0) return;
  const { error } = await supabaseAdmin.storage.from(STORAGE_BUCKET).remove(paths);
  if (error) console.error("[ERROR]:[deleteProductImages]:", error.message);
}
