import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const BASE_URL = "https://www.io-software.fr";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "IO Software — Strategy, Organisation, Process, Data & AI",
    template: "%s — IO Software",
  },
  description:
    "Consulting firm based in Marseille. Strategy, Organisation, Process, Data & AI. Over 30 years of experience.",
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
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const lang = headersList.get("x-locale") ?? "fr";

  return (
    <html lang={lang} className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
