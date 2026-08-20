import type { Metadata } from "next";
import Link from "next/link";
import { Container, Button } from "@mantine/core";
import { PageHeader } from "@/components/PageHeader";
import classes from "./page.module.css";

/*
 * The original business: AI enablement for in-house engineering teams.
 *
 * Deliberately kept alive and reachable from the footer, but out of the main
 * nav. It is recurring revenue from clients with budgets, and it pays while the
 * Prototype-to-Production offer is being validated. Deleting it was the one
 * genuinely irreversible move available in the pivot.
 */

export const metadata: Metadata = {
  title: "For engineering teams",
  description:
    "Hands-on AI workshops, custom internal tooling, and workflow automation for software teams that already have engineers.",
  alternates: { canonical: "/engineering-teams" },
};

const SERVICES = [
  {
    name: "Team workshops",
    format: "In person or remote · half-day to two days",
    body: "Hands-on sessions using your own codebase, not toy examples. Your engineers leave with working patterns for AI-assisted development rather than a set of slides.",
    includes: [
      "Working sessions on your real repositories",
      "Prompting patterns that survive code review",
      "Where AI helps, and where it reliably doesn't",
      "Testing and review habits for AI-written code",
    ],
  },
  {
    name: "Custom internal tooling",
    format: "Scoped per project",
    body: "The internal tools your team keeps saying somebody should build, built this time, then deployed and documented well enough to outlive the engagement.",
    includes: [
      "Internal assistants over your own documentation and data",
      "Code generation fitted to your conventions",
      "Integrations with the systems you already run",
      "Handover documentation, so it isn't ours to maintain",
    ],
  },
  {
    name: "Workflow automation",
    format: "Scoped per project",
    body: "Finding the repeated manual work in your engineering process and taking it away: review triage, release notes, test scaffolding, on-call routine.",
    includes: [
      "An audit of where your team's hours are going",
      "Automation for the highest-frequency work first",
      "CI and review pipeline improvements",
      "Measurement, so you know whether it worked",
    ],
  },
  {
    name: "Ongoing support",
    format: "Monthly retainer",
    body: "For teams that want an experienced pair of hands on call while their AI practice finds its feet, without hiring a head for it.",
    includes: [
      "Regular working sessions with your engineers",
      "Architecture and tooling guidance",
      "Async support when the team is stuck",
      "Periodic review as your practice matures",
    ],
  },
];

export default function EngineeringTeamsPage() {
  return (
    <>
      <PageHeader
        eyebrow="For engineering teams"
        title="Help your engineers use AI properly"
        intro="Most of my work now is with founders whose apps were built by AI. This is the other half of the practice: teams that already have engineers and want them getting real value out of these tools."
      />

      <section className={classes.section}>
        <Container size="lg">
          <div className={classes.grid}>
            {SERVICES.map((service) => (
              <article key={service.name} className={classes.card}>
                <h2 className={classes.name}>{service.name}</h2>
                <div className={classes.format}>{service.format}</div>
                <p className={classes.body}>{service.body}</p>
                <ul className={classes.list}>
                  {service.includes.map((item) => (
                    <li key={item} className={classes.item}>
                      <span className={classes.check} aria-hidden="true">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className={classes.cta}>
            <h2 className={classes.ctaTitle}>Let&apos;s talk about your team</h2>
            <p className={classes.ctaBody}>
              Tell me how big the team is and what you have already tried, and I&apos;ll tell you
              whether this is something I can help with.
            </p>
            <div className={classes.ctaActions}>
              <Button component={Link} href="/contact" variant="filled" color="brand" size="lg" radius="md">
                Get in touch
              </Button>
              <Button component={Link} href="/book" variant="outline" color="brand" size="lg" radius="md">
                Book a call
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
