import Link from "next/link";
import { FAQAccordion } from "./FAQAccordion";
import { CaseStudies } from "./CaseStudies";
import { ScanPanel } from "./ScanPanel";
import { TIERS } from "@/content/pricing";
import { STEPS, DIFFERENTIATORS, FAQ_ITEMS, type LandingVariant } from "@/content/landing";
import system from "@/styles/system.module.css";
import classes from "./LandingPage.module.css";

/*
 * One page engine, three heroes.
 *
 * The homepage and both ad landing pages share everything below the problem
 * section — only the hero and problem copy vary. That keeps message match with
 * each ad without maintaining three separate sites.
 */
export function LandingPage({ variant }: { variant: LandingVariant }) {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className={`${system.shell} ${classes.hero}`}>
        <div className={classes.heroGrid}>
          <div>
            <p className={system.eyebrow}>{variant.eyebrow}</p>
            <h1 className={system.h1}>{variant.headline.join(" ")}</h1>
            <p className={system.lede}>{variant.subhead}</p>
            <div className={system.actions}>
              <Link
                href={variant.primaryCta.href}
                className={`${system.btn} ${system.btnPrimary}`}
              >
                {variant.primaryCta.label}
              </Link>
              <Link
                href={variant.secondaryCta.href}
                className={`${system.btn} ${system.btnGhost}`}
              >
                {variant.secondaryCta.label}
              </Link>
            </div>
            {variant.supporting && <p className={classes.supporting}>{variant.supporting}</p>}
          </div>

          {/* Stands in for a hero image: the finding, drawn to scale. */}
          <ScanPanel />
        </div>
      </section>

      {/* ── Problem ──────────────────────────────────── */}
      <section className={`${system.band} ${system.bandSunken}`}>
        <div className={system.shell}>
          <p className={system.eyebrow}>{variant.problem.label}</p>
          <h2 className={system.h2}>{variant.problem.heading.join(" ")}</h2>
          <p className={system.body}>{variant.problem.intro}</p>

          <ul className={classes.problemList}>
            {variant.problem.items.map((item) => (
              <li key={item} className={classes.problemItem}>
                <span className={classes.problemMark} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────── */}
      <section className={system.band}>
        <div className={system.shell}>
          <p className={system.eyebrow}>How it works</p>
          <h2 className={system.h2}>Six steps, start to finish.</h2>
          <p className={system.body}>
            Typically two to four weeks, depending on what you built and how quickly you can
            answer questions.
          </p>

          <div className={system.rows}>
            {STEPS.map((step, i) => (
              <div key={step.title} className={system.row}>
                <span className={system.rowNum}>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className={system.h3}>{step.title}</h3>
                  <p className={system.rowBody}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Renders nothing until real case studies exist. */}
      <CaseStudies intro="Both came to us from an AI builder with a working product and no engineer." />

      {/* ── Pricing ──────────────────────────────────── */}
      <section className={`${system.band} ${system.bandSunken}`} id="pricing">
        <div className={system.shell}>
          <p className={system.eyebrow}>Pricing</p>
          <h2 className={system.h2}>Start small. Decide after.</h2>
          <p className={system.body}>
            Fixed scope and fixed price, agreed before anything starts. The report comes off the
            cost of the work if you go ahead.
          </p>

          <div className={classes.tiers}>
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`${classes.tier} ${tier.featured ? classes.tierLead : ""}`}
              >
                <div className={classes.tierName}>{tier.name}</div>
                <div className={classes.tierTag}>{tier.tagline}</div>
                <div className={classes.tierPrice}>{tier.price}</div>
                <div className={classes.tierNote}>{tier.priceNote}</div>
                <ul className={classes.tierList}>
                  {tier.bullets.slice(0, 6).map((bullet) => (
                    <li key={bullet} className={system.tickItem}>
                      <span className={system.tick} aria-hidden="true">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <Link href={tier.ctaHref} className={classes.tierBtn}>
                  {tier.ctaLabel}
                </Link>
              </div>
            ))}
          </div>

          <p className={system.note}>
            <strong>If we find nothing, you don&apos;t pay.</strong> Some apps are in better shape
            than their owners fear. If the review turns up nothing worth acting on, we say so and
            refund the $750.{" "}
            <Link href="/pricing" className={system.link}>
              Full pricing
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── Why us ───────────────────────────────────── */}
      <section className={system.band}>
        <div className={system.shell}>
          <p className={system.eyebrow}>Why us</p>
          <h2 className={system.h2}>Senior engineering, without the agency overhead.</h2>

          <div className={system.grid}>
            {DIFFERENTIATORS.map((item) => (
              <div key={item.title} className={system.gridItem}>
                <h3 className={system.h3}>{item.title}</h3>
                <p className={system.rowBody}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────── */}
      <section className={`${system.band} ${system.bandSunken}`}>
        <div className={system.shell}>
          <p className={system.eyebrow}>Questions</p>
          <h2 className={system.h2}>The ones people actually ask.</h2>
          <div style={{ marginTop: "2.25rem" }}>
            <FAQAccordion items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      {/* ── Close ────────────────────────────────────── */}
      <section className={system.bandTight}>
        <div className={system.shell}>
          <h2 className={system.h2}>Find out what you&apos;re actually running.</h2>
          <p className={system.body}>
            Fifteen minutes with the engineer who&apos;d do the work. If you don&apos;t need us
            yet, we&apos;ll say so — that happens more often than you&apos;d think.
          </p>
          <div className={system.actions}>
            <Link href="/book" className={`${system.btn} ${system.btnPrimary}`}>
              Book a free call
            </Link>
            <Link href="/risk-check" className={`${system.btn} ${system.btnGhost}`}>
              Check my app first
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
