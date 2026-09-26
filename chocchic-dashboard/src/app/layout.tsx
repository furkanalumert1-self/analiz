import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const sans = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-sans", display: "swap" });
const serif = Fraunces({ subsets: ["latin", "latin-ext"], variable: "--font-serif", display: "swap" });

export const metadata: Metadata = {
  title: "ChocChic Growth & Automation Analysis",
  description:
    "ChocChic e-ticaret sitesi, ürün kataloğu ve reklamları üzerinden Callypso Engage otomasyon fırsatları ve AI/otomasyon yol haritası.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = { themeColor: "#3d2a20", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${sans.variable} ${serif.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
