"use server";

import { core } from "@/lib/core";
import { redirect } from "next/navigation";

export async function completeOpenIDLogin(
  namespace: string,
  idToken: string,
  providerId: number,
) {
  const env = await core.getEnvironmentByNamespace(namespace);
  if (!env) redirect(`/${namespace}/login?error=env_not_found`);

  const authData = await env.eva.login({
    CustomAuthenticatorType: "OpenID",
    CustomAuthenticateData: { id_token: idToken, provider: providerId },
    OrganizationUnitID: 1,
    UseJwtTokens: true,
  });

  if (!authData || authData.Authentication !== 2) {
    redirect(`/${namespace}/login?error=auth_failed`);
  }

  redirect(`/${namespace}/dashboard`);
}
