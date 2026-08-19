/*
 * Three infrastructure paths, side by side.
 *
 * NOTE ON THE COST ROW: this previously read "$700–800+ at growing usage" as a
 * flat statement about platform pricing. List prices are $20–25/mo; the large
 * bills come from metered credit consumption while actively building, which
 * varies enormously between projects. The row now says that, rather than
 * implying a universal figure we cannot evidence.
 */

export const COMPARISON_ROWS = [
  {
    attribute: "Who controls it",
    lovable:
      "The platform. Limited visibility into what runs where, and changing it means asking them.",
    github:
      "You do. Your GitHub, your Supabase project, your hosting account, your domain.",
    aws: "You do, described in code. Every resource versioned in Terraform and auditable.",
  },
  {
    attribute: "Deploying a change",
    lovable:
      "Click to deploy through the platform. Hard to reproduce locally, and hard to see why a failure happened.",
    github:
      "Pull request, automated checks, staging, then production. Repeatable, and you can watch it happen.",
    aws: "Container images and blue/green releases. More machinery than most early products need.",
  },
  {
    attribute: "Monthly cost",
    lovable:
      "Plans start around $20–25/mo, but metered AI credits dominate the bill and vary hugely — heavy building runs into the hundreds.",
    github:
      "Supabase Pro $25, hosting at cost, CI usually free. Commonly $50–150/mo, plus whatever AI tooling you choose.",
    aws: "Higher floor — roughly $200–500/mo before traffic — but predictable and controllable as you grow.",
  },
  {
    attribute: "Testing before it's live",
    lovable:
      "Often no separation at all. The same configuration serves your experiments and your customers.",
    github:
      "Separate development, staging and production, each with their own secrets and their own data.",
    aws: "Separate accounts or networks per environment. The standard for regulated work.",
  },
  {
    attribute: "Security",
    lovable:
      "Depends entirely on platform defaults and whether anyone checked. Access rules are frequently never configured.",
    github:
      "Access rules written and tested, secrets stored properly, dependencies tracked. A materially stronger baseline.",
    aws: "Network segmentation, managed secrets, full audit logging. Necessary for enterprise buyers, overkill before that.",
  },
  {
    attribute: "How you build from here",
    lovable:
      "Tied to the platform's editor and its prompting model. Your workflow is theirs.",
    github:
      "Claude Code on a clean repository, with test and review habits that hold as the codebase grows.",
    aws: "The same workflow, extended to the infrastructure itself.",
  },
  {
    attribute: "When this is right",
    lovable:
      "Getting an idea to a working prototype. It is genuinely very good at this.",
    github:
      "You have real users, or you're about to. This is where most founders should be.",
    aws: "Significant traffic, enterprise security requirements, or multi-region reliability. Rarely early.",
  },
] as const;
