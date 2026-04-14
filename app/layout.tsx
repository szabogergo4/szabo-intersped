import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Szabó Intersped Kft. – Megbízható logisztika és szállítmányozás",
  description:
    "Komplett fuvarozási megoldások Magyarországon és Európa-szerte. Nemzetközi szállítmányozás, ADR szállítás, raktározás. Debrecen székhellyel.",
  keywords:
    "szállítmányozás, fuvarozás, logisztika, ADR, nemzetközi szállítás, Debrecen, Magyarország",
  authors: [{ name: "Szabó Intersped Kft." }],
  openGraph: {
    title: "Szabó Intersped Kft. – Logisztika, amiben bízhat",
    description:
      "Komplett fuvarozási megoldások Magyarországon és Európa-szerte.",
    type: "website",
    locale: "hu_HU",
    siteName: "Szabó Intersped Kft.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Szabó Intersped Kft.",
    description: "Komplett fuvarozási megoldások Magyarországon és Európa-szerte.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu" className="scroll-smooth">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
