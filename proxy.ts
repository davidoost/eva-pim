import { NextRequest, NextResponse } from "next/server";
import { core } from "./lib/core";
import { validateCookies } from "./lib/cookies";

export async function proxy(req: NextRequest) {
  const url = req.nextUrl.clone();

  // Handle namespace routes (dashboard/login)
  const segments = url.pathname.split("/");
  const namespace = segments[1];
  const route = segments[2];

  if (route === "dashboard" || route === "login") {
    const { valid, refreshed } = await validateCookies(namespace);

    // If tokens were refreshed, redirect to apply the new cookies
    if (refreshed) {
      return NextResponse.redirect(req.url);
    }

    if (route === "dashboard" && !valid) {
      return NextResponse.redirect(new URL(`/${namespace}/login`, req.url));
    }

    if (route === "login" && valid) {
      return NextResponse.redirect(new URL(`/${namespace}/dashboard`, req.url));
    }
  }

  return NextResponse.next();
}

// Exclude Next internals + common files
export const config = {
  matcher: [
    "/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|webp|svg|gif|ico)).*)",
  ],
};
