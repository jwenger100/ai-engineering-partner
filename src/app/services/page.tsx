import type { Metadata } from "next";
import { RedirectNotice } from "@/components/RedirectNotice";

export const metadata: Metadata = { title: "Moved", robots: { index: false, follow: false } };

export default function ServicesRedirect() {
  return <RedirectNotice to="/pricing" label="pricing" />;
}
