"use server";

import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { generateCodeChallenge, generateCodeVerifier } from "@/lib/pkce";

export async function initiateOpenIDLogin(
  namespace: string,
  providerId: number,
  baseUrl: string,
  clientId: string,
  _formData: FormData,
) {
  const discoveryRes = await fetch(
    `${baseUrl}/.well-known/openid-configuration`,
  );
  const discovery = await discoveryRes.json();

  const codeVerifier = generateCodeVerifier();
  const codeChallenge = await generateCodeChallenge(codeVerifier);
  const state = generateCodeVerifier();

  const headersList = await headers();
  const host = headersList.get("host")!;
  const proto = headersList.get("x-forwarded-proto") ?? "http";
  const origin = `${proto}://${host}`;

  const cookieStore = await cookies();
  const opts = {
    httpOnly: false,
    secure: proto === "https",
    maxAge: 600,
    sameSite: "lax" as const,
    path: "/",
  };
  cookieStore.set(`oidc-verifier-${state}`, codeVerifier, opts);
  cookieStore.set(`oidc-provider-${state}`, String(providerId), opts);
  cookieStore.set(`oidc-base-${state}`, baseUrl, opts);
  cookieStore.set(`oidc-client-${state}`, clientId, opts);
  cookieStore.set(`oidc-namespace-${state}`, namespace, opts);

  const authUrl = new URL(discovery.authorization_endpoint);
  authUrl.searchParams.set("client_id", clientId);
  authUrl.searchParams.set("redirect_uri", `${origin}/auth/redirect`);
  authUrl.searchParams.set("response_type", "code");
  authUrl.searchParams.set("scope", "openid profile email");
  authUrl.searchParams.set("state", state);
  authUrl.searchParams.set("code_challenge", codeChallenge);
  authUrl.searchParams.set("code_challenge_method", "S256");

  redirect(authUrl.toString());
}
