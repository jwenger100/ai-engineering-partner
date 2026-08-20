import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@mantine/core";
import { PageHeader } from "@/components/PageHeader";
import { Credentials } from "@/components/Credentials";
import { CTASection } from "@/components/CTASection";
import classes from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "A one-engineer practice for founders who built a product with AI and now need it to hold up in production. A principal engineer with twenty years in the industry, including time at Microsoft.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    title: "You talk to the engineer",
    desc: "There is nobody standing between you and the work. Whoever is on the call is the same person who reads your code, writes the missing access rules and hands the finished thing back to you.",
  },
  {
    title: "I say when you don't need me",
    desc: "Plenty of apps are in better shape than their owners fear, and some problems are cheaper to solve somewhere that isn't here. Saying so costs me one sale and buys something I value a great deal more.",
  },
  {
    title: "Fixed scope, agreed first",
    desc: "You know the price and what sits inside it before anything begins. There is no open-ended hourly billing and no discovery retainer to pay before anybody will tell you anything useful.",
  },
  {
    title: "AI-built is not a dirty word",
    desc: "Using AI to reach a working product was the right call, and the tools are good at that part of the job. What they do not do is the engineering that has to happen next.",
  },
];

const EXPERTISE = [
  "Supabase and Postgres, including access rules, schema design and migrations",
  "Auth systems and session handling",
  "Secrets management and key rotation",
  "CI/CD with GitHub Actions",
  "Environment separation and release process",
  "AWS, Terraform and containerised deployment",
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
        intro="I help founders whose products were built with AI turn them into something that holds up once real users arrive."
      />

      <section className={classes.section}>
        <Container size="md">
          <div className={classes.prose}>
            <p>
              Something new happened in the last couple of years. People who don&apos;t write code
              started shipping real software, and not mockups either: working products with
              customers, revenue and a support inbox. The tools that made that possible are good,
              and they get better every quarter.
            </p>
            <p>
              What those tools do not do is the unglamorous engineering that comes afterwards:
              deciding who is allowed to read the database, rotating the keys, building somewhere
              safe to try a change before customers ever see it. None of that is a criticism of
              the tools, because it was never what they were built for.
            </p>
            <p>
              I&apos;m Jonathan Wenger, a principal engineer with twenty years in the industry,
              including time at Microsoft. That background
              is why a founder can hand me production database credentials without wondering who
              they are dealing with, and why I would rather tell you your app is fine than sell you
              work you do not need.
            </p>
            <p>
              The gap between a working prototype and a product that can survive its own customers
              is the whole practice. I take apps that already work and make them safe to run: the
              security holes closed, the infrastructure moved into accounts you own, and you left
              able to keep building the thing yourself. That last part matters most, and it is the
              easiest one to quietly skip.
            </p>
            <p>
              Staying small is a deliberate choice rather than a stage I am trying to grow out of.
              It means you get senior attention rather than whoever happened to be free that week,
              and it means I turn down work that isn&apos;t a fit instead of stretching to cover it.
            </p>
            <Credentials variant="block" />
          </div>
        </Container>
      </section>

      <section className={classes.sectionAlt}>
        <Container size="lg">
          <div className={classes.label}>How I work</div>
          <h2 className={classes.h2}>Four things you can hold me to</h2>
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
          <div className={classes.label}>The work itself</div>
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
            I also still work with in-house engineering teams on AI adoption, and{" "}
            <Link href="/engineering-teams" className={classes.inlineLink}>
              that work lives here
            </Link>
            .
          </p>
        </Container>
      </section>

      <CTASection
        headline="Find out where your app stands"
        body="Fifteen minutes, free, with the engineer who would do the work. Worst case you walk away with a straight second opinion and instructions to keep your money."
        primaryLabel="Book a free call"
        primaryHref="/book"
        secondaryLabel="Check my app first"
        secondaryHref="/risk-check"
      />
    </>
  );
}
