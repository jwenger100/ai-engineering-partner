import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { SECURITY_VARIANT } from "@/content/landing";

export const metadata: Metadata = {
  title: SECURITY_VARIANT.metaTitle,
  description: SECURITY_VARIANT.metaDescription,
  robots: { index: false, follow: false },
};

export default function IsMyAppSafePage() {
  return <LandingPage variant={SECURITY_VARIANT} />;
}
