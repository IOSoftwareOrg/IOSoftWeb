import { NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const locales = ["fr", "en"] as const;
type Locale = (typeof locales)[number];
const defaultLocale: Locale = "fr";

function getLocale(request: NextRequest): Locale {
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const headers = { "accept-language": acceptLanguage };
  const languages = new Negotiator({ headers }).languages();
  try {
    return match(languages, locales as unknown as string[], defaultLocale) as Locale;
  } catch {
    return defaultLocale;
  }
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    const locale = (locales.find((l) => pathname.startsWith(`/${l}`)) ?? defaultLocale) as Locale;
    const response = NextResponse.next();
    response.headers.set("x-locale", locale);
    return response;
  }

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|favicon|sitemap|robots|opengraph-image|icon|.*\\..*).*)"],
};
