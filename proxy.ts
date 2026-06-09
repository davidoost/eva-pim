import { NextRequest, NextResponse } from "next/server";
import { core } from "./lib/core";
import { checkAuth } from "@davidoost/eva-nextjs-sdk";

export async function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();

  const segments = url.pathname.split("/");
  const namespace = segments[1];
  const route = segments[2];

  // Only protect dashboard routes — everything else passes through
  if (route !== "dashboard") {
    return NextResponse.next();
  }

  const env = await core.getEnvironmentByNamespace(namespace);
  if (!env) {
    return NextResponse.next();
  }

  const { valid, refreshed, response } = await checkAuth(request, {
    baseUrl: env.data.endpoint,
    namespace,
  });

  if (!valid && !refreshed) {
    return NextResponse.redirect(new URL(`/${namespace}/login`, request.url));
  }

  return response;
}

// Exclude Next internals + common files
export const config = {
  matcher: [
    "/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|webp|svg|gif|ico)).*)",
  ],
};
