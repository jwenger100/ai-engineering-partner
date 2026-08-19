import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Paid-traffic landing pages: reachable by ads, not by search.
        disallow: ["/burning-credits", "/is-my-app-safe"],
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
