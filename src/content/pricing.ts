/*
 * The pricing ladder.
 *
 * TWO THINGS ARE LOAD-BEARING HERE AND SHOULD NOT BE SOFTENED:
 *
 * 1. The scope caps. "Four sessions" and "an agreed checklist" are what keep a
 *    fixed-price engagement from becoming an unlimited warranty. Delivery is
 *    estimated at 28–53 hours; without written limits on verification and
 *    teaching, one bad engagement eats the margin on several good ones.
 *
 * 2. The diagnostic being credited in full. It is what makes $750 an easy yes
 *    rather than a second purchase decision.
 */

export interface Tier {
  name: string;
  tagline: string;
  price: string;
  priceNote?: string;
  description: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
  badge?: string;
}

export const TIERS: Tier[] = [
  {
    name: "Ownership & Risk Report",
    tagline: "Find out what you're actually running.",
    price: "$750",
    priceNote: "Credited in full against any engagement that follows",
    description:
      "I go through your app and tell you where you stand: what you own, what the platform owns, what is exposed, and what it would take to put right. The report is back with you inside 72 hours.",
    bullets: [
      "Security review of access rules, exposed keys and auth boundaries",
      "An ownership inventory covering code, repo, hosting, database, domain and secrets",
      "What is urgent, and what can safely wait",
      "A recorded walkthrough of your own codebase",
      "A fixed quote for the work, if you want it",
      "If there is nothing worth acting on, I say so and refund it",
    ],
    ctaLabel: "Start with the report",
    ctaHref: "/book",
  },
  {
    name: "Production Ready",
    tagline: "Own it, secure it, and know how to run it.",
    price: "$7,500",
    priceNote: "Minus the $750 report. Typically 2–4 weeks.",
    description:
      "Everything moves onto accounts in your name, the security gaps get closed, and you come out the other side able to keep building on your own. Your app is preserved, not rebuilt.",
    bullets: [
      "Infrastructure set up under accounts you own",
      "Your app moved across and verified against an agreed checklist",
      "Database access rules written and tested",
      "Every key and secret rotated, then stored properly",
      "GitHub, CI/CD, and separate staging and production environments",
      "Claude Code set up on your codebase, with up to four working sessions",
      "A written runbook for your app, in plain language",
      "30 days of support after handover",
    ],
    ctaLabel: "Book a call",
    ctaHref: "/book",
    featured: true,
    badge: "Most take this",
  },
  {
    name: "Managed Care",
    tagline: "Someone to call when it breaks.",
    price: "$500",
    priceNote: "per month · cancel any time",
    description:
      "For founders who would rather not be the only person alive who understands their infrastructure. Entirely optional, and it starts after handover.",
    bullets: [
      "Dependency and security patching",
      "Uptime and error monitoring",
      "An engineer on call who already knows your codebase",
      "Async support when you get stuck",
      "Quarterly review as you grow",
    ],
    ctaLabel: "Ask about it",
    ctaHref: "/contact",
  },
];

export interface AddOn {
  name: string;
  price: string;
  description: string;
}

export const ADD_ONS: AddOn[] = [
  {
    name: "Scale Architecture",
    price: "From $18,000",
    description:
      "The full AWS path: Terraform, ECS Fargate, VPC and IAM, RDS or Aurora, multi-environment CI/CD and monitoring. It is rarely the right call this early, and I will say so if you are not there yet.",
  },
  {
    name: "Refactoring",
    price: "Scoped per project",
    description:
      "For when the code itself is the problem rather than the infrastructure around it. Quoted from the report, so you know what you are buying before you commit to any of it.",
  },
  {
    name: "Fractional CTO",
    price: "$1,500–3,500/mo",
    description:
      "Ongoing technical leadership on architecture decisions, hiring and planning. For founders who have scaled past the point where advice by the hour is any use.",
  },
];
