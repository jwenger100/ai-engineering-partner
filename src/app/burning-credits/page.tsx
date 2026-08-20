import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { COST_VARIANT } from "@/content/landing";

/*
 * Paid-traffic destination. noindex so it never competes with the homepage in
 * search, since it runs the same offer behind a different hook.
 */
export const metadata: Metadata = {
  title: COST_VARIANT.metaTitle,
  description: COST_VARIANT.metaDescription,
  robots: { index: false, follow: false },
};

export default function BurningCreditsPage() {
  return <LandingPage variant={COST_VARIANT} />;
}
