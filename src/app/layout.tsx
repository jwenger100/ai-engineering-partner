import type { Metadata } from "next";
import { Instrument_Sans, Public_Sans, IBM_Plex_Mono } from "next/font/google";
import { ColorSchemeScript } from "@mantine/core";
import { Providers } from "./providers";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyCTA } from "@/components/StickyCTA";
import { Analytics } from "@/components/Analytics";
import { site } from "@/config/site";
import "./globals.css";

/*
 * Loaded as CSS variables rather than applied globally, so only pages that
 * opt in pick them up. Lets the redesign roll out page by page without
 * changing the typography of pages that have not been redone yet.
 */
const displayFont = Instrument_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "AI Engineering Partner | Production engineering for AI-built apps",
    template: "%s | AI Engineering Partner",
  },
  description:
    "You built it with AI. We make it safe to run. Security review, ownership of your code and infrastructure, and the skills to keep building — for apps built on Lovable, Replit and Bolt.",
  openGraph: {
    title: "AI Engineering Partner",
    description:
      "You built it with AI. We make it safe to run — for apps built on Lovable, Replit and Bolt.",
    siteName: site.name,
    url: site.url,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Engineering Partner",
    description:
      "You built it with AI. We make it safe to run — for apps built on Lovable, Replit and Bolt.",
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
      <head>
        <ColorSchemeScript />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <Providers>
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <SiteHeader />
            <main style={{ flex: 1 }}>{children}</main>
            <SiteFooter />
          </div>
          <StickyCTA />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
