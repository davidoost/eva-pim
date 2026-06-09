"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { completeOpenIDLogin } from "./complete-openid";

function readCookie(name: string): string | undefined {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

function deleteCookie(name: string) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
}

export function OpenIDRedirectHandler() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const code = searchParams.get("code");
    const state = searchParams.get("state");
    const error = searchParams.get("error");

    async function handle() {
      if (error || !code || !state) {
        router.push(`/?error=${encodeURIComponent(error ?? "missing_params")}`);
        return;
      }

      const codeVerifier = readCookie(`oidc-verifier-${state}`);
      const providerIdStr = readCookie(`oidc-provider-${state}`);
      const baseUrl = readCookie(`oidc-base-${state}`);
      const clientId = readCookie(`oidc-client-${state}`);
      const namespace = readCookie(`oidc-namespace-${state}`);

      if (!codeVerifier || !providerIdStr || !baseUrl || !clientId || !namespace) {
        router.push("/?error=invalid_state");
        return;
      }

      // Clean up OIDC state cookies
      [`oidc-verifier`, `oidc-provider`, `oidc-base`, `oidc-client`, `oidc-namespace`].forEach(
        (key) => deleteCookie(`${key}-${state}`),
      );

      // Fetch discovery doc
      const discovery = await fetch(
        `${baseUrl}/.well-known/openid-configuration`,
      ).then((r) => r.json());

      // Exchange code for tokens — must happen from the browser for SPA-type AAD apps
      const tokenRes = await fetch(discovery.token_endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          client_id: clientId,
          code,
          redirect_uri: `${window.location.origin}/auth/redirect`,
          code_verifier: codeVerifier,
        }),
      });

      const tokenData = await tokenRes.json();
      const idToken: string | undefined = tokenData.id_token;

      if (!idToken) {
        const reason =
          tokenData.error_description ?? tokenData.error ?? "no_id_token";
        router.push(
          `/${namespace}/login?error=${encodeURIComponent(reason)}`,
        );
        return;
      }

      // Hand off to server action: calls EVA Login + sets httpOnly auth cookies
      await completeOpenIDLogin(namespace, idToken, parseInt(providerIdStr));
    }

    handle();
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-full">
      <p className="text-sm text-foreground-500">Completing sign in…</p>
    </div>
  );
}
