import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@mantine/core";
import { PageHeader } from "@/components/PageHeader";
import { SchedulingEmbed } from "@/components/SchedulingEmbed";
import classes from "./page.module.css";

export const metadata: Metadata = {
  title: "Book a call",
  description:
    "Fifteen minutes with the engineer who'd do the work. No deck, no pitch — a straight read on your AI-built app and what your options are.",
  alternates: { canonical: "/book" },
};

const EXPECT = [
  {
    title: "What you built, and what's live",
    body: "Which platform, whether real people are using it, and whether it touches payments or personal data.",
  },
  {
    title: "What's actually at risk",
    body: "We'll name the things worth worrying about and, just as usefully, the things that aren't.",
  },
  {
    title: "What it would take",
    body: "A realistic shape and price. If that's nothing, or if it's someone cheaper than us, we'll say so.",
  },
  {
    title: "No pressure to decide",
    body: "There's no second call where we close you. You'll have what you need to think about it.",
  },
];

export default function BookPage() {
  return (
    <>
      <PageHeader
        eyebrow="Free · 15 minutes"
        title="Talk to the engineer, not a salesperson"
        intro="Pick a time below. You'll speak to the person who'd actually do the work."
      />

      <section className={classes.calendarSection}>
        <Container size="md">
          <SchedulingEmbed />
        </Container>
      </section>

      <section className={classes.expectSection}>
        <Container size="lg">
          <div className={classes.label}>What we&apos;ll cover</div>
          <h2 className={classes.h2}>Fifteen minutes, four questions</h2>

          <div className={classes.expectGrid}>
            {EXPECT.map((item, i) => (
              <div key={item.title} className={classes.expect}>
                <span className={classes.expectNum}>{i + 1}</span>
                <div>
                  <div className={classes.expectTitle}>{item.title}</div>
                  <p className={classes.expectBody}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className={classes.reassure}>
        <Container size="md" className={classes.reassureInner}>
          <h2 className={classes.reassureTitle}>We&apos;ll tell you if you don&apos;t need us</h2>
          <p className={classes.reassureBody}>
            A fair number of the apps we look at are in better shape than their owners fear. If
            yours is one of them, that&apos;s what you&apos;ll hear — and we&apos;ll point you at what
            to read instead.
          </p>
          <p className={classes.reassureAlt}>
            Rather not book a time?{" "}
            <Link href="/risk-check" className={classes.link}>
              Answer five questions instead
            </Link>{" "}
            or{" "}
            <Link href="/contact" className={classes.link}>
              send a message
            </Link>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
