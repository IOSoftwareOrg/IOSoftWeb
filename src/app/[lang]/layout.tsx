import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { GoogleAnalytics } from "@next/third-parties/google";
import { hasLocale, locales, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

const BASE_URL = "https://www.io-software.fr";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: isFr
        ? "IO Software — Conseil en Stratégie, Organisation, Process, Data et IA"
        : "IO Software — Strategy, Organisation, Process, Data & AI Consulting",
      template: "%s — IO Software",
    },
    description: isFr
      ? "Cabinet de conseil basé à Marseille. Stratégie, Organisation, Process, Data et IA. Plus de 30 ans d'expérience."
      : "Consulting firm based in Marseille. Strategy, Organisation, Process, Data & AI. Over 30 years of experience.",
    keywords: isFr
      ? ["conseil entreprise", "stratégie", "data consulting", "process mining", "IA", "Marseille"]
      : ["consulting", "strategy", "data consulting", "process mining", "AI", "Marseille"],
    openGraph: {
      type: "website",
      locale: isFr ? "fr_FR" : "en_US",
      url: BASE_URL,
      siteName: "IO Software",
    },
    alternates: {
      canonical: `${BASE_URL}/${lang}`,
      languages: {
        fr: `${BASE_URL}/fr`,
        en: `${BASE_URL}/en`,
      },
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <>
      <JsonLd />
      <Navbar lang={lang as Locale} />
      <main className="flex-1">{children}</main>
      <Footer lang={lang as Locale} />
      <GoogleAnalytics gaId="G-42XYCYT1HZ" />
    </>
  );
}
