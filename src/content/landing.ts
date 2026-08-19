/*
 * Landing page variants.
 *
 * Every variant renders the SAME tail — how it works, proof, pricing, FAQ, CTA.
 * Only the hero and the problem section change. That is the whole architecture:
 * two ads, two doors, one argument.
 *
 * CLAIMS DISCIPLINE — the site previously claimed founders "typically" spend
 * $700–800/mo on these platforms. List prices are $20–25/mo; that claim was
 * indefensible and has been removed. What replaces it is first-person and
 * verifiable: what OUR OWN clients were paying. Never restate it as a market
 * average, and never publish a savings percentage we cannot evidence.
 */

export interface LandingVariant {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: string[];
  subhead: string;
  supporting?: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  problem: {
    label: string;
    heading: string[];
    intro: string;
    items: string[];
  };
}

const CORE_PROBLEM_INTRO =
  "AI builders are genuinely good at getting an idea to a working prototype. The trouble starts after it works.";

export const SECURITY_VARIANT: LandingVariant = {
  slug: "is-my-app-safe",
  metaTitle: "Is your AI-built app safe to run?",
  metaDescription:
    "98% of AI-built apps scanned had a security flaw; 16% had critical ones. Check yours in about a minute — no call required.",
  eyebrow: "For apps built on Lovable, Replit, Bolt and v0",
  headline: ["Your AI-built app", "might be leaking customer data."],
  subhead:
    "Of 1,072 AI-built apps independently scanned in 2026, 98% had a security flaw and 16% had critical ones. Find out where yours stands.",
  supporting: "About a minute. Five questions. No call required, and nothing to install.",
  primaryCta: { label: "Check my app", href: "/risk-check" },
  secondaryCta: { label: "Book a free call", href: "/book" },
  problem: {
    label: "The problem",
    heading: ["Nobody wrote the rules", "about who can read your database."],
    intro: CORE_PROBLEM_INTRO,
    items: [
      "Anyone with your public key may be able to read your tables",
      "API keys sitting in code the browser can see",
      "No separation between test data and real customer data",
      "Nobody has checked any of it, because there was nobody to check it",
      "You'd find out from a customer, not from a monitor",
    ],
  },
};

export const COST_VARIANT: LandingVariant = {
  slug: "burning-credits",
  metaTitle: "Stop paying to watch the AI break your app",
  metaDescription:
    "Credits burning on failed fixes? Move your AI-built app onto infrastructure you own, and learn to keep building it yourself.",
  eyebrow: "For apps built on Lovable, Replit, Bolt and v0",
  headline: ["You're paying to watch", "the AI break your app."],
  subhead:
    "Credits burn on fixes that don't hold. The same feature breaks twice a week. There's a way off that treadmill that doesn't mean starting over.",
  supporting:
    "Both of the founders we've moved so far were spending over $700 a month before we started.",
  primaryCta: { label: "Book a free call", href: "/book" },
  secondaryCta: { label: "Check my app first", href: "/risk-check" },
  problem: {
    label: "The problem",
    heading: ["The last 20% costs more", "than the first 80%."],
    intro: CORE_PROBLEM_INTRO,
    items: [
      "You pay for the AI's failed attempts as well as its successes",
      "Fixing one thing quietly breaks another",
      "Big changes mean rebuilding work you already paid for",
      "No way to test a change before real users get it",
      "Every month costs the same whether you shipped or not",
    ],
  },
};

/* The homepage runs the full argument: security leads, cost proves. */
export const HOME_VARIANT: LandingVariant = {
  slug: "",
  metaTitle: "Production engineering for AI-built apps",
  metaDescription:
    "You built it with AI. We make it safe to run — security, ownership of your code and infrastructure, and the skills to keep building. For apps built on Lovable, Replit and Bolt.",
  eyebrow: "For founders who built on Lovable, Replit, Bolt or v0",
  headline: ["You built it with AI.", "Now make it safe to run."],
  subhead:
    "We close the security gaps, move everything onto accounts in your name, and leave you able to keep building it yourself. Without starting over.",
  supporting: "Not sure where you stand? Five questions, about a minute, no call required.",
  primaryCta: { label: "Check my app", href: "/risk-check" },
  secondaryCta: { label: "Book a free call", href: "/book" },
  problem: {
    label: "The problem",
    heading: ["Your prototype works.", "But nobody has engineered it."],
    intro: CORE_PROBLEM_INTRO,
    items: [
      "Nobody has checked who's allowed to read your database",
      "API keys sitting in code the browser can see",
      "Credits burn on fixes that break something else",
      "No way to test a change before real users get it",
      "Your business runs inside an account you don't control",
    ],
  },
};

/* ── Shared tail content ────────────────────────────────────────── */

export const STEPS = [
  {
    title: "Tell us what you've got",
    body: "A free 15-minute call, or five questions online if you'd rather not talk yet. We establish what you built, what's live, and what's at stake.",
  },
  {
    title: "We look properly",
    body: "The $750 report: a senior engineer reviews the code, the database rules and the secrets, then tells you what's actually true — including if you don't need us yet.",
  },
  {
    title: "You get your accounts",
    body: "GitHub, hosting, database, domain, secrets — set up in your name, with you as the owner. Not ours, not the platform's.",
  },
  {
    title: "Your app moves across",
    body: "We migrate what you built rather than rebuilding it, and verify it against a checklist we agree with you beforehand.",
  },
  {
    title: "We close the gaps",
    body: "Database access rules written and tested. Every key rotated. Staging separated from production, so a change can be tried before it's live.",
  },
  {
    title: "You learn to drive it",
    body: "Claude Code set up on your codebase, and up to four working sessions on your own code. You leave able to keep building — that's the point of all of it.",
  },
];

export const DIFFERENTIATORS = [
  {
    title: "We're not anti-AI",
    body: "You should keep building this way. AI got you a working product; that was the right call. We're here to put a real foundation under it, not to talk you out of it.",
  },
  {
    title: "No rebuild by default",
    body: "Most of what you've made is fine. We move it rather than starting over, and we'll say plainly when something genuinely does need rewriting.",
  },
  {
    title: "You end up able to do it yourself",
    body: "The walkthrough and the Claude Code sessions aren't a bonus at the end — they're the reason the engagement is worth what it costs.",
  },
  {
    title: "We'll tell you if you don't need us",
    body: "Some apps are in better shape than their owners fear. If yours is one of them, the report says so and you get your money back.",
  },
];

export const FAQ_ITEMS = [
  {
    question: "Do I have to rebuild my app?",
    answer:
      "No, and we'd usually advise against it. The work moves what you've already built onto infrastructure you own and closes the gaps in it. If part of the code genuinely does need rewriting, that's a separate conversation with its own price — not something we'd quietly fold in.",
  },
  {
    question: "Will I actually own everything afterwards?",
    answer:
      "That's the point of the engagement. Your code, GitHub repository, hosting, database, domain and secrets end up in accounts created under your name, with you as the owner. We hold no keys you can't revoke.",
  },
  {
    question: "Can you work with an app built on Lovable or Replit?",
    answer:
      "Yes — those are the two most common cases, along with Bolt and v0. The code these tools produce is standard React and Node underneath, which is why moving it is realistic rather than a rewrite.",
  },
  {
    question: "Why does this cost $7,500 when I've seen migrations for $600?",
    answer:
      "Because they're not the same job. A $600 migration copies your database from one place to another — a well-defined, repeatable task, and a fair price for it. This engagement also writes the access rules that were never there, rotates secrets that may already be compromised, and spends real time teaching you to run the result. If a straight database move is all you need, we'll tell you that on the call and point you somewhere cheaper.",
  },
  {
    question: "What if you find something serious?",
    answer:
      "You'll know within 72 hours of the report starting, in plain language, ranked by what actually matters. What you do about it is your call. Fixing it is quoted separately so you're never surprised by a bill.",
  },
  {
    question: "Will my app go down during the migration?",
    answer:
      "We plan the cutover with you and aim for no interruption, but the honest answer depends on your setup — how your domain and database are configured, mostly. We'll tell you exactly what to expect before anything moves, and we won't promise zero downtime until we've seen your app.",
  },
  {
    question: "What does the $750 report actually get me?",
    answer:
      "A senior engineer reviewing your app for 72 hours, a written summary of what you own and what's exposed, a recorded walkthrough of your own codebase, and a fixed quote if you want the work. It comes off the price of the engagement if you go ahead. If we find nothing worth acting on, you get it back.",
  },
  {
    question: "I'm pre-launch. Is it too early?",
    answer:
      "It's the cheapest possible moment to do it — no live users to migrate, no incident to disclose if something was wrong. Whether it's worth it yet depends on how close you are to real customers. Ask us on the call and we'll give you a straight answer.",
  },
];
