import { deleteCookies } from "@/lib/cookies";
import { redirect } from "next/navigation";

export async function logout(namespace: string): Promise<boolean> {
  const success = await deleteCookies(namespace);

  if (!success) {
    return false;
  }

  redirect(`/${namespace}/login`);
}
