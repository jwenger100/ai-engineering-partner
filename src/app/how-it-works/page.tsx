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
    "The whole process, step by step: a 72-hour review, infrastructure in your name, your app moved across and verified, the security gaps closed, and you left able to keep building.",
  alternates: { canonical: "/how-it-works" },
};

const OWNED = [
  { thing: "Your code", detail: "In a repository you created, that you can hand to anyone." },
  { thing: "Your GitHub", detail: "Your account, your organisation. I'm a collaborator you can remove in two clicks." },
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
            None of it is licensed to you or managed on your behalf. Every account is created in
            your name, which means you could fire me tomorrow and lose nothing at all.
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
            Most founders belong in the middle column. If you are not one of them you will hear
            that from me, including when staying exactly where you are is the right call for now.
          </p>
          <div className={classes.tableWrap}>
            <ComparisonTable rows={[...COMPARISON_ROWS]} />
          </div>
        </Container>
      </section>

      <section className={classes.sectionAlt}>
        <Container size="lg">
          <div className={classes.label}>How I work</div>
          <h2 className={classes.h2}>What to expect from me</h2>
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
        headline="See where your app sits today"
        body="Fifteen minutes with the engineer who would do the work, and a straight read on what you have built. There is no deck and no pitch waiting at the end of it."
        primaryLabel="Book a free call"
        primaryHref="/book"
        secondaryLabel="Check my app first"
        secondaryHref="/risk-check"
      />
    </>
  );
}
