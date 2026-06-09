import { OpenIDRedirectHandler } from "@/components/auth/openid-redirect-handler";
import { Suspense } from "react";

export default function AuthRedirectPage() {
  return (
    <Suspense>
      <OpenIDRedirectHandler />
    </Suspense>
  );
}
