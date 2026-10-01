import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Font self-hosted (variabili, da @fontsource): nessuna dipendenza da Google Fonts a build time
const display = localFont({
  src: "./fonts/bricolage.woff2",
  variable: "--font-display",
  weight: "200 800",
});
const body = localFont({
  src: "./fonts/inter.woff2",
  variable: "--font-body",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Oh ma celaffai?!",
  description: "Il quiz sui trend di oggi: slang, meme, creator e moda. Quanto ci sei dentro?",
};

export const viewport: Viewport = { themeColor: "#0b0b12" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
