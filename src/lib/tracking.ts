/*
 * Attribution capture + analytics events.
 *
 * WHY ATTRIBUTION IS CAPTURED ON ARRIVAL
 * Ad traffic lands on a page with ?utm_source=…&fbclid=… but then navigates
 * before converting, and by the time they submit a form the query string is
 * long gone. So we snapshot it the moment they arrive and attach it to every
 * submission afterwards. Without this you cannot tell which ad produced a deal
 * that closes six weeks later.
 *
 * WHY localStorage AND NOT sessionStorage
 * sessionStorage is per-tab and is destroyed when the tab closes. That loses
 * attribution for anyone who clicks an ad, closes the tab, and comes back
 * later to convert, which is most people considering a five-figure purchase.
 * It also breaks when a link opens in a new tab. localStorage survives both,
 * and TTL_MS bounds how long a click can be credited.
 */

const STORAGE_KEY = "aiep_attribution";

/*
 * 30 days. Meta's default click window is 7 days and Google's is 30; a
 * $7,500 decision is rarely made in one sitting, so we take the longer one.
 * Beyond this the record expires and the next visit becomes first touch.
 */
const TTL_MS = 30 * 24 * 60 * 60 * 1000;

const TRACKED_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
  "gclid",
] as const;

export type Attribution = Partial<Record<(typeof TRACKED_PARAMS)[number], string>> & {
  landingPath?: string;
  referrer?: string;
  /** Epoch ms of capture, used to expire the record. Never sent onward. */
  capturedAt?: number;
};

/** Snapshot attribution on first page view of the session. Safe to call repeatedly. */
export function captureAttribution(): void {
  if (typeof window === "undefined") return;

  try {
    const params = new URLSearchParams(window.location.search);
    const incoming: Attribution = {};

    for (const key of TRACKED_PARAMS) {
      const value = params.get(key);
      if (value) incoming[key] = value;
    }

    const existing = readAttribution();

    // First touch wins: never overwrite a real campaign with a later blank
    // visit. But a genuinely new campaign click does replace the old one.
    const hasNewCampaign = Object.keys(incoming).length > 0;
    if (!hasNewCampaign && Object.keys(existing).length > 0) return;

    const base = {
      landingPath: window.location.pathname,
      referrer: document.referrer || "direct",
      capturedAt: Date.now(),
    };

    const record: Attribution = hasNewCampaign ? { ...incoming, ...base } : base;

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  } catch {
    // localStorage throws in private mode and when cookies are blocked.
    // Attribution is a nice-to-have; never let it break the page.
  }
}

export function readAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};

    const record = JSON.parse(raw) as Attribution;

    if (record.capturedAt && Date.now() - record.capturedAt > TTL_MS) {
      window.localStorage.removeItem(STORAGE_KEY);
      return {};
    }

    return record;
  } catch {
    return {};
  }
}

/** Append stored attribution to a URL, used to forward params into the Calendly iframe. */
export function decorateUrl(url: string): string {
  const attribution = readAttribution();
  const entries = Object.entries(attribution).filter(
    ([key]) => key !== "referrer" && key !== "capturedAt",
  );
  if (entries.length === 0) return url;

  try {
    const parsed = new URL(url);
    for (const [key, value] of entries) {
      if (typeof value === "string" && value) parsed.searchParams.set(key, value);
    }
    return parsed.toString();
  } catch {
    return url;
  }
}

/* ── Analytics events ──────────────────────────────────────────── */

type EventName =
  | "cta_click"
  | "booking_widget_opened"
  | "risk_check_started"
  | "risk_check_completed"
  | "report_email_captured"
  | "contact_form_submitted";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

/** Fire an event to GA4 and Meta Pixel. No-ops when the tags are absent. */
export function track(event: EventName, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;

  window.gtag?.("event", event, params);

  // Meta distinguishes standard events from custom ones; only Lead is standard here.
  if (event === "report_email_captured" || event === "contact_form_submitted") {
    window.fbq?.("track", "Lead", params);
  } else {
    window.fbq?.("trackCustom", event, params);
  }
}
