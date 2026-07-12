import type { Locale } from "@/lib/i18n";

/** Segment localisé pour la page "logiciels" : /fr/logiciels vs /en/software. */
export function logicielsSegment(lang: Locale): string {
  return lang === "en" ? "software" : "logiciels";
}

/**
 * Traduit un chemin en remplaçant la locale et, si présent, le segment
 * "logiciels"/"software" par son équivalent dans la locale cible.
 */
export function switchLocalePath(pathname: string, fromLang: Locale, toLang: Locale): string {
  const segments = pathname.split("/");
  if (segments[1] === fromLang) {
    segments[1] = toLang;
  }
  if (segments[2] === "logiciels" || segments[2] === "software") {
    segments[2] = logicielsSegment(toLang);
  }
  return segments.join("/");
}
