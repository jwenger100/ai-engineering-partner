/*
 * Landing page variants.
 *
 * Every variant renders the SAME tail: how it works, proof, pricing, FAQ, CTA.
 * Only the hero and the problem section change. That is the whole architecture:
 * two ads, two doors, one argument.
 *
 * CLAIMS DISCIPLINE. The site previously claimed founders "typically" spend
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
  "AI builders are very good at the part everyone assumes is hard, which is turning an idea into working software. What comes after that, when the thing has to survive real users and real money, was never their job.";

export const SECURITY_VARIANT: LandingVariant = {
  slug: "is-my-app-safe",
  metaTitle: "Is your AI-built app safe to run?",
  metaDescription:
    "Of 1,072 AI-built apps independently scanned, 98% had at least one vulnerability and 16% had critical flaws. Five questions will show you where yours stands.",
  eyebrow: "For apps built on Lovable, Replit, Bolt and v0",
  headline: ["Your AI-built app", "might be leaking customer data."],
  subhead:
    "Researchers fully scanned 1,072 AI-built apps in June 2026. 98% had at least one vulnerability, 16% had critical flaws, and only 2% came back clean. Answer five questions and you will see which of those risks your own answers point to.",
  supporting:
    "It takes about a minute, with nothing to install and no sign-up wall at the end. You get a straight read whether or not you ever speak to me.",
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
      "The first you'd hear of a breach would be from a customer",
    ],
  },
};

export const COST_VARIANT: LandingVariant = {
  slug: "burning-credits",
  metaTitle: "Stop paying to watch the AI break your app",
  metaDescription:
    "Move your AI-built app off the credit treadmill and onto infrastructure you own, then learn to keep building it yourself. For apps built on Lovable, Replit and Bolt.",
  eyebrow: "For apps built on Lovable, Replit, Bolt and v0",
  headline: ["You're paying to watch", "the AI break your app."],
  subhead:
    "Credits go on fixes that don't hold, the same feature breaks twice a week, and the meter runs whether the attempt worked or not. There is a way off that treadmill that doesn't involve starting over.",
  supporting:
    "Both of the founders I've moved so far were spending over $700 a month before we started.",
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
    "You built it with AI. I make it safe to run: security gaps closed, your code and infrastructure in accounts you own, and the skills to keep building. For apps built on Lovable, Replit and Bolt.",
  eyebrow: "For founders who built on Lovable, Replit, Bolt or v0",
  headline: ["You built it with AI.", "Now make it safe to run."],
  subhead:
    "I close the security gaps, move everything onto accounts with your name on them, and leave you able to keep building on it. No rebuild required.",
  supporting:
    "I'm Jonathan Wenger, a principal engineer with twenty years in the industry, including several at Microsoft. Keeping software standing up under real users is the unglamorous half of the job, and it's the half your app has never had.",
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
    title: "Tell me what you've got",
    body: "Fifteen free minutes on a call, or five questions online if you'd rather not talk to anyone yet. By the end of it I know what you built, what's live, and what is riding on it.",
  },
  {
    title: "I look properly",
    body: "This is the $750 report. I read the code, the database rules and the secrets myself, then tell you what is true about your app rather than what would be convenient for me to say, up to and including that you don't need me yet. It lands within 72 hours.",
  },
  {
    title: "The accounts go in your name",
    body: "GitHub, hosting, database, domain, secrets. Every one of them created under your login and your billing, so ownership is a fact about the setup rather than a promise from me.",
  },
  {
    title: "Your app moves across",
    body: "I migrate what you built instead of rebuilding it, then verify the result against a checklist the two of us agree on before anything moves. You know what finished looks like in advance.",
  },
  {
    title: "The gaps get closed",
    body: "Database access rules written and tested, every key and secret rotated, and staging separated from production so you can try a change before your customers meet it.",
  },
  {
    title: "You learn to drive it",
    body: "Claude Code set up on your own codebase, plus up to four working sessions in it with me. You finish able to keep building without me, which is the whole point of the exercise.",
  },
];

export const DIFFERENTIATORS = [
  {
    title: "I'm not here to talk you out of AI",
    body: "Building this way was the right call and you should carry on doing it. These tools got you a working product faster than hiring could have. What they leave behind is the engineering underneath, and that is the part I do.",
  },
  {
    title: "No rebuild unless you need one",
    body: "Most of what you've made is fine and it moves across intact. Where a piece of the code really does need rewriting, you'll hear it plainly and with a price attached, instead of discovering it halfway through.",
  },
  {
    title: "You finish able to do it yourself",
    body: "The walkthrough and the Claude Code sessions carry most of the value in this engagement. Being able to ship your own changes afterwards is what stops you needing me again in six months.",
  },
  {
    title: "I'll tell you if you don't need me",
    body: "Plenty of apps are in better shape than their owners fear. When yours turns out to be one of them, the report says so and your $750 goes back. That costs me a sale and buys something I would rather have.",
  },
];

export const FAQ_ITEMS = [
  {
    question: "Do I have to rebuild my app?",
    answer:
      "No, and in most cases I would argue against it. The work takes what you already built, moves it onto infrastructure you own, and closes the gaps in it. Where part of the code really does need rewriting, that gets quoted separately so you can decide, rather than being folded quietly into a bill you already agreed to.",
  },
  {
    question: "Will I actually own everything afterwards?",
    answer:
      "That is the point of the engagement. Your code, your GitHub repository, hosting, database, domain and secrets all end up in accounts created in your name, with you as the owner. I hold no key you cannot revoke in a minute without asking me first.",
  },
  {
    question: "Can you work with an app built on Lovable or Replit?",
    answer:
      "Yes. Those two are the most common by a distance, with Bolt and v0 close behind. Underneath the editor, these tools write fairly ordinary React and Node, which is exactly why moving your app across is realistic and a rewrite usually isn't.",
  },
  {
    question: "Why does this cost $7,500 when I've seen migrations for $600?",
    answer:
      "Because it isn't the same job. A $600 migration copies your database from one host to another, which is a well-defined task and a fair price for it. This engagement also writes the access rules nobody ever wrote, rotates secrets that may already be in somebody else's hands, and spends real hours teaching you to run the result. If a straight database move is all you need, I'll say so on the call and point you at someone cheaper.",
  },
  {
    question: "Why would I pay $500 a month after you have handed everything over?",
    answer:
      "You might not need to, and I would rather you skipped it than resented it. If you are comfortable applying your own dependency updates, watching your own error rates, and being the person who gets up when something breaks at 2am, the engagement stands on its own without it. What the retainer buys is that I stay current on your codebase: security patches applied as they land rather than whenever you next look, monitoring that tells me before it tells your customers, and someone who does not need a week to remember how your app fits together. The founders who take it are usually the ones who do not want to be the only person alive who understands their own infrastructure. It starts after handover, and you can stop at the end of any month.",
  },
  {
    question: "What if you find something serious?",
    answer:
      "You'll know within the 72 hours the report takes, in plain language, ranked by what matters rather than by what sounds most alarming. What you do about it is your decision. Fixing it is quoted separately, so nothing arrives on an invoice you didn't agree to first.",
  },
  {
    question: "Will my app go down during the migration?",
    answer:
      "We plan the cutover together and aim for no interruption at all. How close we get depends on your setup, mostly on the way your domain and database are configured, and I won't promise zero downtime before I have seen it. What I will do is tell you exactly what to expect before anything moves.",
  },
  {
    question: "What does the $750 report actually get me?",
    answer:
      "A senior engineer going through your app properly, with the report in your hands inside 72 hours. You get a written account of what you own and what is exposed, a recorded walkthrough of your own codebase, and a fixed quote if you want the work. It comes off the price of the engagement if you go ahead, and if there is nothing in there worth acting on you get the $750 back.",
  },
  {
    question: "I'm pre-launch. Is it too early?",
    answer:
      "Pre-launch is the cheapest moment there will ever be to do this. No live users to migrate, and no incident to disclose if something was already wrong. Whether it is worth doing yet depends on how close you are to real customers, so ask me on the call and you'll get a straight answer either way.",
  },
];
