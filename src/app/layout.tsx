import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IO Software — Conseil & Développement",
  description:
    "Cabinet de conseil multidisciplinaire basé à Marseille. Management, Stratégie, Finance, Data, Process Mining, Systèmes d'information. Plus de 30 ans d'expérience.",
  keywords:
    "conseil entreprise, management, stratégie, finance, data, process mining, Marseille",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
