"use server";

import { cookies } from "next/headers";
import { SetCookiesProps } from "./core/types";
import { core } from "./core";

export async function setCookies({
  namespace,
  at,
  rt,
  rtExpString,
}: SetCookiesProps): Promise<boolean> {
  try {
    const rtExp = new Date(rtExpString);

    const cookieStore = await cookies();

    cookieStore.set(`at-${namespace}`, at, {
      maxAge: 5 * 60,
    });

    cookieStore.set(`rt-${namespace}`, rt, {
      expires: rtExp,
    });

    return true;
  } catch {
    return false;
  }
}

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

export async function validateCookies(
  namespace: string,
): Promise<{ valid: boolean; refreshed: boolean }> {
  const cookieStore = await cookies();

  // If access token exists, we're done.
  const at = cookieStore.get(`at-${namespace}`);
  if (at?.value) return { valid: true, refreshed: false };

  // No access token; require refresh token.
  const rt = cookieStore.get(`rt-${namespace}`);
  if (!rt?.value) return { valid: false, refreshed: false };

  // Resolve refresh target (deployment > environment).
  const target = await core.getEnvironmentByNamespace(namespace);

  if (!target) return { valid: false, refreshed: false };

  try {
    const refreshed = await target.refreshToken(rt.value);
    return { valid: refreshed, refreshed };
  } catch {
    return { valid: false, refreshed: false };
  }
}
