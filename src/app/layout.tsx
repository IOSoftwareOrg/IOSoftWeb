import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const BASE_URL = "https://www.io-software.fr";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "IO Software — Conseil & Développement",
    template: "%s — IO Software",
  },
  description:
    "Cabinet de conseil multidisciplinaire basé à Marseille. Management, Stratégie, Finance, Data, Process Mining et Systèmes d'information. Plus de 30 ans d'expérience.",
  keywords: [
    "conseil entreprise",
    "management",
    "stratégie",
    "finance d'entreprise",
    "data consulting",
    "process mining",
    "systèmes d'information",
    "développement logiciel",
    "Marseille",
    "TPE PME",
  ],
  authors: [{ name: "IO Software", url: BASE_URL }],
  creator: "IO Software",
  publisher: "IO Software",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: BASE_URL,
    siteName: "IO Software",
    title: "IO Software — Conseil & Développement",
    description:
      "Cabinet de conseil multidisciplinaire. Management, Stratégie, Finance, Data, Process Mining. Plus de 30 ans d'expérience.",
  },
  twitter: {
    card: "summary_large_image",
    title: "IO Software — Conseil & Développement",
    description:
      "Cabinet de conseil multidisciplinaire. Management, Stratégie, Finance, Data, Process Mining. Plus de 30 ans d'expérience.",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
