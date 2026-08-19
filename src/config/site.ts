/*
 * SITE CONFIG — single source of truth for everything you need to swap in.
 *
 * Anything marked TODO must be filled in before launch. The site builds and
 * runs with the placeholders, but forms will not deliver and booking will not
 * work until they are real.
 */

export const site = {
  name: "AI Engineering Partner",
  url: "https://www.aiengineeringpartner.com",
  email: "aiengineeringpartner1@gmail.com",
} as const;

/*
 * SCHEDULING — Cal.com or Calendly. Both are supported; set `provider`.
 *
 * ── Cal.com ────────────────────────────────────────────────────────────
 * `link` is the calLink, NOT a full URL: "username/event-slug".
 * e.g. cal.com/jonwenger/20min  ->  link: "jonwenger/20min"
 *
 * ── Calendly ───────────────────────────────────────────────────────────
 * `link` is the full URL: "https://calendly.com/username/20min"
 *
 * ── Either way, set up the event as ────────────────────────────────────
 *  1. Name: "Free 15-Minute Call". Duration: 15 min.
 *  2. Add these booking questions. They are the qualification filter, and
 *     they are asked AFTER the visitor decides to book — so they cost us
 *     nothing in conversion while still screening the calendar:
 *       - "Which platform did you build on?" (Lovable / Replit / Bolt / v0 / Other)
 *       - "Is your app live with real users?" (Yes / Not yet)
 *       - "Does it handle payments or personal data?" (Yes / No / Not sure)
 *       - "Roughly what are you spending per month on the platform today?"
 *  3. Connect your GA4 and Meta Pixel IDs inside the scheduling tool itself.
 *     We cannot see inside the booking iframe from our own page, so the
 *     booking conversion has to be fired by them, not by us.
 */
export const scheduling = {
  provider: "cal.com" as "cal.com" | "calendly",

  link: "jonathan-wenger-aiengineering-partner/15min",

  get isConfigured() {
    return !this.link.startsWith("YOUR_") && !this.link.includes("YOUR_USERNAME");
  },
} as const;

/*
 * WEB3FORMS — form delivery to email.
 *
 * Setup: web3forms.com → enter your email → copy the access key.
 * The key is PUBLIC by design; it only permits sending to the address that
 * created it. Free tier: 250 submissions/month, honeypot + spam filtering.
 */
export const web3forms = {
  accessKey: "6353a276-c55b-4f10-8911-24636d5f94b3",
  endpoint: "https://api.web3forms.com/submit",
  get isConfigured() {
    return !this.accessKey.startsWith("YOUR_");
  },
} as const;

/*
 * GOOGLE SHEET via Apps Script.
 *
 * Web3Forms' own Sheets integration is a PRO feature, so we post a second
 * time to a free Apps Script endpoint. See scripts/google-apps-script.js in
 * this repo for the code and deploy instructions.
 *
 * This POST is fire-and-forget and deliberately runs AFTER Web3Forms — if the
 * sheet fails, the lead is still emailed. A lead is never lost to this.
 */
export const leadSheet = {
  /** TODO: replace with your Apps Script Web App URL (ends in /exec). */
  endpoint: "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec",
  get isConfigured() {
    return !this.endpoint.includes("YOUR_DEPLOYMENT_ID");
  },
} as const;

/*
 * ANALYTICS
 *
 * These IDs are public by design — anyone can read them out of the page
 * source, on any site that uses them. They are not secrets, so they live here
 * as literals rather than as repository variables. That means a fresh clone
 * builds with working analytics and there is no setup step to forget.
 *
 * The env vars still take precedence, which is what you would use to point a
 * staging build at a separate property later.
 */
export const analytics = {
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID ?? "G-QYLV3Q6GTH",

  /** TODO: Meta Pixel ID from Events Manager (15-16 digits). */
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
} as const;
