import type { MetadataRoute } from "next";
import { site } from "@/config/site";

/*
 * Ad landing pages (/burning-credits, /is-my-app-safe) are deliberately absent.
 * They are paid-traffic destinations running the same offer as the homepage;
 * indexing them would split ranking signals and risk a duplicate-content read.
 */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1.0 },
    { path: "/how-it-works", priority: 0.9 },
    { path: "/pricing", priority: 0.9 },
    { path: "/risk-check", priority: 0.8 },
    { path: "/book", priority: 0.8 },
    { path: "/contact", priority: 0.6 },
    { path: "/about", priority: 0.5 },
    { path: "/engineering-teams", priority: 0.4 },
    { path: "/privacy", priority: 0.3 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    lastModified: new Date("2026-08-19"),
    changeFrequency: "monthly" as const,
    priority,
  }));
}
