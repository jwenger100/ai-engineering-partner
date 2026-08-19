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
      "A senior engineer reviews your app and tells you what's true: what you own, what the platform owns, what's exposed, and what it would take to fix. Turnaround is 72 hours.",
    bullets: [
      "Security review — database access rules, exposed keys, auth boundaries",
      "Ownership inventory — code, repo, hosting, database, domain, secrets",
      "What's genuinely urgent, and what can wait",
      "A recorded walkthrough of your own codebase",
      "A fixed quote for the work, if you want it",
      "If we find nothing that matters, we say so and refund it",
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
      "Everything moves onto accounts in your name, the security gaps get closed, and you finish able to keep building on your own. Preserving your app, not rebuilding it.",
    bullets: [
      "Infrastructure set up under accounts you own",
      "Your app moved across and verified against an agreed checklist",
      "Database access rules written and tested",
      "Every key and secret rotated, stored properly",
      "GitHub, CI/CD, and separate staging and production environments",
      "Claude Code set up on your codebase — up to four working sessions",
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
      "For founders who'd rather not be the only person who understands their infrastructure. Optional, and it starts after handover.",
    bullets: [
      "Dependency and security patching",
      "Uptime and error monitoring",
      "A named engineer who already knows your codebase",
      "Async support when you're stuck",
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
      "Full AWS path — Terraform, ECS Fargate, VPC and IAM, RDS or Aurora, multi-environment CI/CD, monitoring. Rarely the right call early. We'll tell you honestly if you're not there yet.",
  },
  {
    name: "Refactoring",
    price: "Scoped per project",
    description:
      "When the code itself is the problem, not the infrastructure. Quoted from the report, so you know what you're buying before you commit.",
  },
  {
    name: "Fractional CTO",
    price: "$1,500–3,500/mo",
    description:
      "Ongoing technical leadership — architecture decisions, hiring, planning. For founders scaling past the point where advice-by-the-hour works.",
  },
];
