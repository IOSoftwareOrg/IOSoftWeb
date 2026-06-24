import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const BASE_URL = "https://www.io-software.fr";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "IO Software — Conseil en Stratégie, Organisation, Process, Data et IA",
    template: "%s — IO Software",
  },
  description:
    "Cabinet de conseil basé à Marseille. Stratégie, Organisation, Process, Data et IA. Plus de 30 ans d'expérience.",
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
  verification: {
    google: "fVnxu9l8yiFHzwFsXVRCoqZIM6Rl5A7KCeFpQN2umV8",
  },
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
    title: "IO Software — Conseil en Stratégie, Organisation, Process, Data et IA",
    description:
      "Cabinet de conseil basé à Marseille. Stratégie, Organisation, Process, Data et IA. Plus de 30 ans d'expérience.",
  },
  twitter: {
    card: "summary_large_image",
    title: "IO Software — Conseil en Stratégie, Organisation, Process, Data et IA",
    description:
      "Cabinet de conseil basé à Marseille. Stratégie, Organisation, Process, Data et IA. Plus de 30 ans d'expérience.",
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
      <GoogleAnalytics gaId="G-42XYCYT1HZ" />
    </html>
  );
}
