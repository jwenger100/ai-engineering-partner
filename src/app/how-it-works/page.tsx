import type { Metadata } from "next";
import { Container } from "@mantine/core";
import { PageHeader } from "@/components/PageHeader";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CTASection } from "@/components/CTASection";
import { COMPARISON_ROWS } from "@/content/comparison";
import { STEPS, DIFFERENTIATORS } from "@/content/landing";
import classes from "./page.module.css";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "What actually happens: a 72-hour review, then infrastructure in your name, your app moved across and verified, security gaps closed, and you left able to keep building.",
  alternates: { canonical: "/how-it-works" },
};

const OWNED = [
  { thing: "Your code", detail: "In a repository you created, that you can hand to anyone." },
  { thing: "Your GitHub", detail: "Your account, your organisation. We're a collaborator you can remove." },
  { thing: "Your hosting", detail: "Billed to your card, under your login." },
  { thing: "Your database", detail: "Your project, your data, your backups." },
  { thing: "Your domain", detail: "Registered to you, with DNS you control." },
  { thing: "Your secrets", detail: "Rotated during the work, stored where only you can read them." },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        eyebrow="How it works"
        title="What actually happens"
        intro="Typically two to four weeks, depending on what you built and how fast you can answer questions. Here's the whole thing, start to finish."
      />

      <section className={classes.section}>
        <Container size="lg">
          <ol className={classes.steps}>
            {STEPS.map((step, i) => (
              <li key={step.title} className={classes.step}>
                <span className={classes.stepNum}>{i + 1}</span>
                <div>
                  <h2 className={classes.stepTitle}>{step.title}</h2>
                  <p className={classes.stepBody}>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className={classes.sectionAlt}>
        <Container size="lg">
          <div className={classes.label}>What you end up with</div>
          <h2 className={classes.h2}>Six things in your name</h2>
          <p className={classes.lead}>
            Not licensed to you, not managed on your behalf. Created under accounts you own, so
            you could fire us tomorrow and lose nothing.
          </p>

          <div className={classes.ownedGrid}>
            {OWNED.map((item) => (
              <div key={item.thing} className={classes.owned}>
                <span className={classes.ownedCheck} aria-hidden="true">✓</span>
                <div>
                  <div className={classes.ownedThing}>{item.thing}</div>
                  <div className={classes.ownedDetail}>{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className={classes.section}>
        <Container size="lg">
          <div className={classes.label}>Where you&apos;d land</div>
          <h2 className={classes.h2}>Three paths, honestly compared</h2>
          <p className={classes.lead}>
            Most founders belong in the middle column. We&apos;ll tell you if you don&apos;t — including
            if staying where you are is genuinely the right call for now.
          </p>
          <div className={classes.tableWrap}>
            <ComparisonTable rows={[...COMPARISON_ROWS]} />
          </div>
        </Container>
      </section>

      <section className={classes.sectionAlt}>
        <Container size="lg">
          <div className={classes.label}>How we work</div>
          <h2 className={classes.h2}>What to expect from us</h2>
          <div className={classes.diffGrid}>
            {DIFFERENTIATORS.map((item) => (
              <div key={item.title} className={classes.diff}>
                <div className={classes.diffTitle}>{item.title}</div>
                <p className={classes.diffBody}>{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        headline="Want to know where your app sits?"
        body="Fifteen minutes with the engineer who'd do the work. No deck, no pitch — just a straight read on what you've got."
        primaryLabel="Book a free call"
        primaryHref="/book"
        secondaryLabel="Check my app first"
        secondaryHref="/risk-check"
      />
    </>
  );
}
