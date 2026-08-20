"use client";

import { useEffect, useRef } from "react";
import { scheduling, site } from "@/config/site";
import { readAttribution, decorateUrl, track } from "@/lib/tracking";

/*
 * Inline scheduling embed for either Cal.com or Calendly.
 *
 * Provider-agnostic on purpose: the two tools have genuinely different embed
 * APIs (Cal.com takes a "username/slug" calLink and a global Cal() queue;
 * Calendly takes a full URL and a data-attribute div), and which one is the
 * better free tier has moved around. Switching is now one line in site config.
 *
 * ATTRIBUTION: UTM and fbclid on the parent page do NOT reach an embedded
 * widget by themselves. Both branches forward the stored attribution in, so a
 * booking can be traced back to the ad that caused it.
 *
 * CONVERSION TRACKING: we cannot observe the booking itself across the iframe
 * boundary. Connect GA4 + Meta Pixel inside Cal.com/Calendly for that. What we
 * fire here is only that the widget was opened.
 */
/** Cal.com's embed exposes a global queue function that the loaded script drains. */
interface CalApi {
  (...args: unknown[]): void;
  q: unknown[][];
  loaded: boolean;
  ns: Record<string, unknown>;
}

export function SchedulingEmbed({ minHeight = 700 }: { minHeight?: number }) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scheduling.isConfigured || !container.current) return;

    track("booking_widget_opened", { provider: scheduling.provider });
    const attribution = readAttribution();

    if (scheduling.provider === "calendly") {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
      return () => script.remove();
    }

    /* Cal.com: bootstrap the embed queue, then render inline. */
    const w = window as unknown as { Cal?: CalApi };

    if (!w.Cal) {
      const api: CalApi = Object.assign(
        (...args: unknown[]) => {
          if (!api.loaded) {
            api.loaded = true;
            const s = document.createElement("script");
            s.src = "https://app.cal.com/embed/embed.js";
            document.head.appendChild(s);
          }
          api.q.push(args);
        },
        { q: [] as unknown[][], loaded: false, ns: {} as Record<string, unknown> },
      );
      w.Cal = api;
    }

    w.Cal("init", { origin: "https://app.cal.com" });
    w.Cal("inline", {
      elementOrSelector: container.current,
      calLink: scheduling.link,
      layout: "month_view",
      // Arbitrary keys here ride along with the booking record.
      config: { layout: "month_view", ...attribution },
    });
  }, []);

  if (!scheduling.isConfigured) {
    return (
      <div
        style={{
          background: "var(--surface)",
          border: "1px dashed var(--rule-firm)",
          borderRadius: 12,
          padding: "3rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>
          Scheduling is not connected yet.
        </div>
        <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.6, maxWidth: 440, margin: "0 auto 1rem" }}>
          Add your booking link in <code>src/config/site.ts</code> to activate this. In the
          meantime, email works:
        </p>
        <a href={`mailto:${site.email}`} style={{ color: "var(--accent)", fontWeight: 600 }}>
          {site.email}
        </a>
      </div>
    );
  }

  if (scheduling.provider === "calendly") {
    return (
      <div
        className="calendly-inline-widget"
        data-url={decorateUrl(scheduling.link)}
        style={{ minWidth: 280, height: minHeight }}
        aria-label="Booking calendar"
      />
    );
  }

  return <div ref={container} style={{ minWidth: 280, minHeight }} aria-label="Booking calendar" />;
}
