import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@mantine/core";
import { PageHeader } from "@/components/PageHeader";
import { SchedulingEmbed } from "@/components/SchedulingEmbed";
import classes from "./page.module.css";

export const metadata: Metadata = {
  title: "Book a call",
  description:
    "Fifteen minutes with the engineer who would do the work: a straight read on your AI-built app and what your options are. Principal engineer, twenty years in the industry, formerly at Microsoft.",
  alternates: { canonical: "/book" },
};

const EXPECT = [
  {
    title: "What you built, and what's live",
    body: "Which platform you used, whether real people are using it yet, and whether any of it touches payments or personal data.",
  },
  {
    title: "Where the real risk sits",
    body: "I'll name the things worth worrying about and, just as usefully, the ones not worth another minute of your attention.",
  },
  {
    title: "What it would take",
    body: "A realistic shape and a real number. If the honest answer is nothing at all, or somebody cheaper than me, that is what you'll hear.",
  },
  {
    title: "No pressure to decide",
    body: "There is no second call where I close you. You finish the fifteen minutes holding everything you need to think it over on your own time.",
  },
];

export default function BookPage() {
  return (
    <>
      <PageHeader
        eyebrow="Free · 15 minutes"
        title="Talk to the engineer, not a salesperson"
        intro="Pick a time below. You will be talking to me: Jonathan Wenger, a principal engineer with more than twenty years in the industry and time at Microsoft behind me. I do the work as well as the calls, so nothing gets lost in the handover."
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
          <h2 className={classes.reassureTitle}>I&apos;ll tell you if you don&apos;t need me</h2>
          <p className={classes.reassureBody}>
            A fair number of the apps I look at turn out to be in better shape than their owners
            feared. If yours is one of them, that is what you will hear on the call, along with a
            short list of what to read instead.
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
