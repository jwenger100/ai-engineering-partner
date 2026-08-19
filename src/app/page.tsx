import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { HOME_VARIANT } from "@/content/landing";

export const metadata: Metadata = {
  title: { absolute: "AI Engineering Partner | Production engineering for AI-built apps" },
  description: HOME_VARIANT.metaDescription,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <LandingPage variant={HOME_VARIANT} />;
}
