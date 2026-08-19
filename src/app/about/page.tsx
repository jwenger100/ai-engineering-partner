import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@mantine/core";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import classes from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "A founder-led engineering practice for people who built a product with AI and now need it to hold up in production.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    title: "You talk to the engineer",
    desc: "There is no account manager, no discovery team, and nobody who repeats your problem back to you before passing it along. The person on the call is the person doing the work.",
  },
  {
    title: "We say when you don't need us",
    desc: "Plenty of apps are in better shape than their owners fear, and some problems are cheaper to solve elsewhere. Saying so costs us a sale and buys something more useful.",
  },
  {
    title: "Fixed scope, agreed first",
    desc: "You know the price and what's included before anything starts. No open-ended hourly billing, and no discovery retainer that has to be paid before anyone will tell you anything.",
  },
  {
    title: "AI-built isn't a dirty word",
    desc: "Using AI to get a working product was the right call. The tools are genuinely good at that part. What they don't do is the engineering that has to happen next.",
  },
];

const EXPERTISE = [
  "Supabase and Postgres — access rules, schema design, migrations",
  "Auth systems and session handling",
  "Secrets management and key rotation",
  "CI/CD with GitHub Actions",
  "Environment separation and release process",
  "AWS, Terraform, containerised deployment",
  "Next.js and modern React codebases",
  "Claude Code and AI-assisted development workflows",
  "Security review of AI-generated code",
  "Teaching non-engineers to run their own product",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A small practice, on purpose"
        intro="We help founders whose products were built with AI turn them into something that holds up under real users."
      />

      <section className={classes.section}>
        <Container size="md">
          <div className={classes.prose}>
            <p>
              Something genuinely new happened in the last couple of years: people who don&apos;t
              write code started shipping real software. Not mockups — working products, with
              customers and revenue. The tools that made that possible are good, and getting
              better.
            </p>
            <p>
              What those tools don&apos;t do is the unglamorous engineering that has to happen
              afterwards. Nobody decides who&apos;s allowed to read the database. Nobody rotates
              the keys. Nobody sets up a place to try a change before customers see it. None of
              that is a criticism of the tools — it was never what they were for.
            </p>
            <p>
              That gap is the whole practice. We take products that already work and make them
              safe to run: security gaps closed, infrastructure moved into accounts you own, and
              — the part that actually matters — you left able to keep building it yourself.
            </p>
            <p>
              We stay deliberately small. It means you get senior engineering attention rather
              than whoever was available, and it means we turn down work that isn&apos;t a fit
              instead of stretching to cover it.
            </p>
          </div>
        </Container>
      </section>

      <section className={classes.sectionAlt}>
        <Container size="lg">
          <div className={classes.label}>How we work</div>
          <h2 className={classes.h2}>Four things you can hold us to</h2>
          <div className={classes.valueGrid}>
            {VALUES.map((value) => (
              <div key={value.title} className={classes.value}>
                <div className={classes.valueTitle}>{value.title}</div>
                <p className={classes.valueDesc}>{value.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className={classes.section}>
        <Container size="lg">
          <div className={classes.label}>What we actually do</div>
          <h2 className={classes.h2}>The work, specifically</h2>
          <ul className={classes.expertise}>
            {EXPERTISE.map((item) => (
              <li key={item} className={classes.expertiseItem}>
                <span className={classes.check} aria-hidden="true">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className={classes.note}>
            We also still work with in-house engineering teams on AI adoption —{" "}
            <Link href="/engineering-teams" className={classes.inlineLink}>
              that&apos;s here
            </Link>
            .
          </p>
        </Container>
      </section>

      <CTASection
        headline="Want to know where your app stands?"
        body="Fifteen minutes, free, with the engineer who'd do the work. Worst case, you get a straight second opinion and we tell you to save your money."
        primaryLabel="Book a free call"
        primaryHref="/book"
        secondaryLabel="Check my app first"
        secondaryHref="/risk-check"
      />
    </>
  );
}
