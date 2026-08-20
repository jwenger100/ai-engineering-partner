/*
 * CASE STUDIES. Your two completed engagements.
 *
 * ─────────────────────────────────────────────────────────────────────
 * THIS ARRAY IS EMPTY ON PURPOSE. Nothing renders until you fill it in.
 *
 * The section disappears entirely while this is empty, so the site can never
 * ship an invented client, a fabricated quote, or a made-up number. Fill it in
 * with real data only. If you cannot substantiate a figure, leave that field
 * out rather than estimating, because a single unverifiable number here would
 * undermine every other number on the site.
 * ─────────────────────────────────────────────────────────────────────
 *
 * WHAT TO ASK EACH CLIENT FOR (a five-minute email gets all of it):
 *
 *  1. Permission to use their name and product name publicly. Get it in
 *     writing, and an email reply is fine.
 *  2. Their monthly platform spend BEFORE, and what they pay NOW. Exact
 *     figures if they'll share them; a rounded band if not.
 *  3. One or two sentences in their own words. The most persuasive quote is
 *     rarely praise. It is them describing the problem they had. "I was
 *     spending $700 a month watching it break the same feature" beats
 *     "great to work with" by a mile.
 *  4. Whether you may link to the live product.
 *
 * WHY THIS MATTERS MORE THAN ANYTHING ELSE ON THE SITE:
 * Two independent reviews both named "no proof" as the single biggest
 * weakness in this business. Two named clients, one Lovable and one Replit to
 * match the ad creative, are the direct answer to "why would I trust a
 * stranger with $7,500." Nothing else you can build converts as well.
 */

export interface CaseStudy {
  /** Client or company name. Requires written permission. */
  client: string;
  /** Which platform they came from: Lovable, Replit, etc. */
  platform: string;
  /** One line on what the product is. */
  product: string;
  /** The situation before. Concrete, not adjectives. */
  problem: string;
  /** What was done. Plain language, no jargon. */
  work: string;
  /** Monthly platform spend before, e.g. "$740/mo". Omit if not verifiable. */
  costBefore?: string;
  /** Monthly spend after, e.g. "$180/mo". Omit if not verifiable. */
  costAfter?: string;
  /** Their words, verbatim. Never paraphrase into something better. */
  quote?: string;
  /** Optional link to the live product, with permission. */
  url?: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  /*
   * Example of the shape. DELETE this comment and add real entries:
   *
   * {
   *   client: "Jane Doe, Acme Scheduling",
   *   platform: "Lovable",
   *   product: "Appointment booking for independent clinics",
   *   problem:
   *     "Burning credits re-fixing the same booking bug, with no way to test a change before it hit real patients.",
   *   work:
   *     "Moved onto their own GitHub, Supabase and Vercel accounts, wrote the missing access rules, rotated every key, and set them up to ship with Claude Code.",
   *   costBefore: "$740/mo",
   *   costAfter: "$180/mo",
   *   quote: "I was paying to watch it break the same feature twice a week.",
   * },
   */
];

/** True once at least one real case study exists. Gates the whole section. */
export const HAS_CASE_STUDIES = CASE_STUDIES.length > 0;
