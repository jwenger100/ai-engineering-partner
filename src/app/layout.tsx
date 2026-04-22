import type { Metadata } from "next";
import { ColorSchemeScript } from "@mantine/core";
import { Providers } from "./providers";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Engineering Partner | Hands-On AI Training for Engineering Teams",
  description:
    "Hands-on AI workshops, custom tooling, and workflow automation for software engineering teams. Train your team to use AI effectively and see real productivity ROI.",
  openGraph: {
    title: "AI Engineering Partner",
    description:
      "Train your engineering team to use AI effectively. Workshops, custom tools, and workflow automation for software teams.",
    siteName: "AI Engineering Partner",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Providers>
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <SiteHeader />
            <main style={{ flex: 1 }}>{children}</main>
            <SiteFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
