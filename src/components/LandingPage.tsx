import Link from "next/link";
import { Button } from "@mantine/core";
import { FAQAccordion } from "./FAQAccordion";
import { PricingTierCard } from "./PricingTierCard";
import { CaseStudies } from "./CaseStudies";
import { CTASection } from "./CTASection";
import { TIERS } from "@/content/pricing";
import { STEPS, DIFFERENTIATORS, FAQ_ITEMS, type LandingVariant } from "@/content/landing";
import classes from "./LandingPage.module.css";

/*
 * One page engine, three heroes.
 *
 * The homepage and both ad landing pages share everything below the problem
 * section. Only the hero and problem copy vary, which is what keeps message
 * match with each ad without maintaining three sites.
 */
export function LandingPage({ variant }: { variant: LandingVariant }) {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className={classes.hero}>
        <div className={classes.heroInner}>
          <span className={classes.eyebrow}>{variant.eyebrow}</span>
          <h1 className={classes.h1}>
            {variant.headline.map((line, i) => (
              <span key={i} className={classes.h1Line}>
                {line}
              </span>
            ))}
          </h1>
          <p className={classes.subhead}>{variant.subhead}</p>
          {variant.supporting && <p className={classes.supporting}>{variant.supporting}</p>}

          <div className={classes.heroActions}>
            <Button
              component={Link}
              href={variant.primaryCta.href}
              variant="filled"
              color="brand"
              size="lg"
              radius="md"
            >
              {variant.primaryCta.label}
            </Button>
            <Button
              component={Link}
              href={variant.secondaryCta.href}
              variant="outline"
              size="lg"
              radius="md"
              styles={{ root: { borderColor: "rgba(255,255,255,0.3)", color: "#d6e0f0" } }}
            >
              {variant.secondaryCta.label}
            </Button>
          </div>
        </div>
      </section>

      {/* ── Problem ──────────────────────────────────────── */}
      <section className={classes.sectionAlt}>
        <div className={classes.inner}>
          <div className={classes.label}>{variant.problem.label}</div>
          <h2 className={classes.h2}>
            {variant.problem.heading.map((line, i) => (
              <span key={i} className={classes.h2Line}>
                {line}
              </span>
            ))}
          </h2>
          <p className={classes.lead}>{variant.problem.intro}</p>

          <ul className={classes.problemList}>
            {variant.problem.items.map((item) => (
              <li key={item} className={classes.problemItem}>
                <span className={classes.problemIcon} aria-hidden="true">✕</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Evidence ─────────────────────────────────────── */}
      <section className={classes.sectionDark}>
        <div className={classes.inner}>
          <div className={classes.labelLight}>The evidence</div>
          <h2 className={classes.h2Light}>
            <span className={classes.h2Line}>This isn&apos;t a hunch.</span>
            <span className={classes.h2Line}>Someone counted.</span>
          </h2>
          <p className={classes.leadLight}>
            In June 2026, Symbiotic Security fully scanned 1,072 apps built on Lovable, Replit,
            Bolt, v0 and similar tools. These are their published findings — a base rate for
            apps like yours, not a claim about your app specifically.
          </p>

          <div className={classes.statGrid}>
            <div className={classes.stat}>
              <div className={classes.statFigure}>98%</div>
              <div className={classes.statLabel}>had at least one security vulnerability</div>
            </div>
            <div className={`${classes.stat} ${classes.statCritical}`}>
              <div className={classes.statFigure}>16%</div>
              <div className={classes.statLabel}>had critical flaws</div>
            </div>
            <div className={classes.stat}>
              <div className={classes.statFigure}>2%</div>
              <div className={classes.statLabel}>were completely clean</div>
            </div>
          </div>

          <p className={classes.footnote}>
            172 of those apps allowed anyone to delete their data without logging in. A registered
            vulnerability, CVE-2025-48757, describes 170+ apps leaking personal data, payment
            details and API keys to unauthenticated strangers.
          </p>

          <div className={classes.darkCta}>
            <Button component={Link} href="/risk-check" variant="filled" color="brand" size="md" radius="md">
              See where your app stands
            </Button>
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────── */}
      <section className={classes.section} id="how-it-works">
        <div className={classes.inner}>
          <div className={classes.label}>How it works</div>
          <h2 className={classes.h2}>
            <span className={classes.h2Line}>Six steps, start to finish.</span>
          </h2>
          <p className={classes.lead}>
            Typically two to four weeks, depending on what you built and how quickly you can
            answer questions.
          </p>

          <ol className={classes.steps}>
            {STEPS.map((step, i) => (
              <li key={step.title} className={classes.step}>
                <span className={classes.stepNum}>{i + 1}</span>
                <div>
                  <div className={classes.stepTitle}>{step.title}</div>
                  <p className={classes.stepBody}>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Renders nothing until real case studies are added. */}
      <CaseStudies intro="Both came to us from an AI builder with a working product and no engineer." />

      {/* ── Pricing ──────────────────────────────────────── */}
      <section className={classes.sectionAlt} id="pricing">
        <div className={classes.inner}>
          <div className={classes.label}>Pricing</div>
          <h2 className={classes.h2}>
            <span className={classes.h2Line}>Start small. Decide after.</span>
          </h2>
          <p className={classes.lead}>
            Fixed scope, fixed price, agreed before anything starts. The report comes off the
            price of the work if you go ahead with it.
          </p>

          <div className={classes.tierGrid}>
            {TIERS.map((tier) => (
              <PricingTierCard
                key={tier.name}
                name={tier.name}
                tagline={tier.tagline}
                price={tier.price}
                priceNote={tier.priceNote}
                description={tier.description}
                bulletPoints={tier.bullets}
                ctaLabel={tier.ctaLabel}
                ctaHref={tier.ctaHref}
                featured={tier.featured}
                badge={tier.badge}
              />
            ))}
          </div>

          <p className={classes.pricingNote}>
            Bigger jobs — full AWS architecture, refactoring, fractional CTO —{" "}
            <Link href="/pricing" className={classes.inlineLink}>
              are on the pricing page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── Why us ───────────────────────────────────────── */}
      <section className={classes.section}>
        <div className={classes.inner}>
          <div className={classes.label}>Why us</div>
          <h2 className={classes.h2}>
            <span className={classes.h2Line}>Senior engineering,</span>
            <span className={classes.h2Line}>without the agency overhead.</span>
          </h2>

          <div className={classes.diffGrid}>
            {DIFFERENTIATORS.map((item) => (
              <div key={item.title} className={classes.diff}>
                <div className={classes.diffTitle}>{item.title}</div>
                <p className={classes.diffBody}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className={classes.sectionAlt}>
        <div className={classes.inner}>
          <div className={classes.label}>Questions</div>
          <h2 className={classes.h2} style={{ marginBottom: "2rem" }}>
            <span className={classes.h2Line}>The ones people actually ask.</span>
          </h2>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      <CTASection
        headline="Find out what you're actually running."
        body="A free 15-minute call with the engineer who'd do the work. If you don't need us yet, we'll say so — that happens more often than you'd think."
        primaryLabel="Book a free call"
        primaryHref="/book"
        secondaryLabel="Check my app first"
        secondaryHref="/risk-check"
      />
    </>
  );
}
