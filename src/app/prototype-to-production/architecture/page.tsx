import type { Metadata } from "next";
import { RedirectNotice } from "@/components/RedirectNotice";

export const metadata: Metadata = { title: "Moved", robots: { index: false, follow: false } };

export default function P2PArchitectureRedirect() {
  return <RedirectNotice to="/how-it-works" label="how it works" />;
}
