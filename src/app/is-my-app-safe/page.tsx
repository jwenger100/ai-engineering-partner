import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { SECURITY_VARIANT } from "@/content/landing";

/*
 * Paid-traffic destination. noindex so it never competes with the homepage in
 * search, since it runs the same offer behind a different hook.
 *
 * Was the design-system pilot; now that the system is global it uses the same
 * shared component as every other landing page.
 */
export const metadata: Metadata = {
  title: SECURITY_VARIANT.metaTitle,
  description: SECURITY_VARIANT.metaDescription,
  robots: { index: false, follow: false },
};

export default function IsMyAppSafePage() {
  return <LandingPage variant={SECURITY_VARIANT} />;
}
