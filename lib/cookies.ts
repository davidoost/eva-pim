"use server";

import { cookies } from "next/headers";

export async function deleteCookies(namespace: string): Promise<boolean> {
  try {
    const cookieStore = await cookies();

    cookieStore.delete(`at-${namespace}`);
    cookieStore.delete(`rt-${namespace}`);

    return true;
  } catch {
    return false;
  }
}
