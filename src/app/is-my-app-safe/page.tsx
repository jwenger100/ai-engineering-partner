import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CaseStudies } from "@/components/CaseStudies";
import { TIERS } from "@/content/pricing";
import { FAQ_ITEMS, STEPS, SECURITY_VARIANT } from "@/content/landing";
import classes from "./page.module.css";

/*
 * Design system pilot.
 *
 * Deliberately does NOT use the shared LandingPage component. The point is to
 * see a different visual language before committing to it everywhere; once
 * it's agreed, this becomes the basis of the shared component and the other
 * pages follow.
 *
 * Paid-traffic destination, so noindex — it runs the same offer as the
 * homepage behind a different hook.
 */

export const metadata: Metadata = {
  title: SECURITY_VARIANT.metaTitle,
  description: SECURITY_VARIANT.metaDescription,
  robots: { index: false, follow: false },
};

const USUALLY_WRONG = [
  {
    title: "Nobody set the rules on your database",
    body: "Row-level security is the setting that decides who can read which records. AI builders frequently never configure it, and nothing warns you. It is the most common critical finding, and usually a same-day fix.",
  },
  {
    title: "Your keys are in the page source",
    body: "Stripe keys, database keys, third-party API keys — routinely left somewhere the browser can read. Anyone who opens developer tools has them, and you would have no way of knowing.",
  },
  {
    title: "There is nowhere to try a change",
    body: "No staging environment means every edit goes straight to the people paying you. That is also why fixing one thing keeps breaking another.",
  },
  {
    title: "Your business lives in someone else's account",
    body: "The repository, hosting, database and domain sit under a platform login. Not fatal on its own, but it becomes urgent the moment you need to move, hire someone, or raise money.",
  },
];

export default function IsMyAppSafePage() {
  return (
    <div className={classes.page}>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className={`${classes.shell} ${classes.hero}`}>
        <div className={classes.heroGrid}>
          <div>
            <p className={classes.eyebrow}>Lovable · Replit · Bolt · v0</p>
            <h1 className={classes.h1}>Your AI-built app might be leaking customer data.</h1>
            <p className={classes.lede}>
              Of 1,072 AI-built apps independently scanned in 2026, 98% had a security flaw and
              16% had critical ones. Find out where yours stands.
            </p>
            <div className={classes.heroActions}>
              <Link href="/risk-check" className={`${classes.btn} ${classes.btnPrimary}`}>
                Check my app
              </Link>
              <Link href="/book" className={`${classes.btn} ${classes.btnGhost}`}>
                Book a free call
              </Link>
            </div>
            <p className={classes.reassure}>
              Five questions, about a minute. No sign-up, no call required, nothing to install.
            </p>
          </div>

          {/* Stands in for the hero image: the actual finding, drawn to scale. */}
          <div className={classes.panel}>
            <div className={classes.panelLabel}>1,072 AI-built apps scanned</div>
            <div
              className={classes.bar}
              role="img"
              aria-label="Of 1,072 apps scanned, 16 percent had critical flaws, 82 percent had other vulnerabilities, and 2 percent were clean."
            >
              <span className={classes.barCrit} />
              <span className={classes.barFlaw} />
              <span className={classes.barClean} />
            </div>
            <div className={classes.legend}>
              <div className={classes.legendRow}>
                <span className={classes.swatch} style={{ background: "var(--alarm)" }} />
                <span className={classes.legendFig}>16%</span>
                <span>had critical flaws</span>
              </div>
              <div className={classes.legendRow}>
                <span className={classes.swatch} style={{ background: "var(--accent)" }} />
                <span className={classes.legendFig}>82%</span>
                <span>had other vulnerabilities</span>
              </div>
              <div className={classes.legendRow}>
                <span className={classes.swatch} style={{ background: "#a8a29e" }} />
                <span className={classes.legendFig}>2%</span>
                <span>were completely clean</span>
              </div>
            </div>
            <p className={classes.panelFoot}>
              Symbiotic Security, June 2026. 172 of those apps allowed anyone to delete their
              data without logging in. This is the base rate for apps like yours, not a finding
              about yours specifically.
            </p>
          </div>
        </div>
      </section>

      {/* ── What's usually wrong ─────────────────────── */}
      <section className={`${classes.band} ${classes.bandSunken}`}>
        <div className={classes.shell}>
          <p className={classes.eyebrow}>What we usually find</p>
          <h2 className={classes.h2}>Four things, over and over.</h2>
          <p className={classes.body}>
            None of this is a criticism of the tools. They were built to get an idea working,
            and they are good at it. This is simply the engineering that has to happen next.
          </p>

          <div className={classes.rows}>
            {USUALLY_WRONG.map((item, i) => (
              <div key={item.title} className={classes.row}>
                <span className={classes.rowNum}>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className={classes.h3}>{item.title}</h3>
                  <p className={classes.rowBody}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────── */}
      <section className={classes.band}>
        <div className={classes.shell}>
          <p className={classes.eyebrow}>How it works</p>
          <h2 className={classes.h2}>Six steps, start to finish.</h2>
          <p className={classes.body}>
            Typically two to four weeks, depending on what you built and how quickly you can
            answer questions.
          </p>

          <div className={classes.rows}>
            {STEPS.map((step, i) => (
              <div key={step.title} className={classes.row}>
                <span className={classes.rowNum}>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className={classes.h3}>{step.title}</h3>
                  <p className={classes.rowBody}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Renders nothing until real case studies exist. */}
      <CaseStudies intro="Both came to us from an AI builder with a working product and no engineer." />

      {/* ── Pricing ──────────────────────────────────── */}
      <section className={`${classes.band} ${classes.bandSunken}`}>
        <div className={classes.shell}>
          <p className={classes.eyebrow}>Pricing</p>
          <h2 className={classes.h2}>Start small. Decide after.</h2>
          <p className={classes.body}>
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
                    <li key={bullet} className={classes.tierItem}>
                      <span className={classes.tick} aria-hidden="true">✓</span>
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

          <p className={classes.guarantee}>
            <strong>If we find nothing, you don&apos;t pay.</strong> Some apps are in better
            shape than their owners fear. If the review turns up nothing worth acting on, we say
            so and refund the $750.
          </p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────── */}
      <section className={classes.band}>
        <div className={classes.shell}>
          <p className={classes.eyebrow}>Questions</p>
          <h2 className={classes.h2}>The ones people actually ask.</h2>
          <div style={{ marginTop: "2.25rem" }}>
            <FAQAccordion items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      {/* ── Close ────────────────────────────────────── */}
      <section className={`${classes.bandTight} ${classes.bandSunken}`}>
        <div className={`${classes.shell} ${classes.close}`}>
          <h2 className={classes.h2}>Find out what you&apos;re actually running.</h2>
          <p className={classes.body}>
            Fifteen minutes with the engineer who&apos;d do the work. If you don&apos;t need us
            yet, we&apos;ll say so.
          </p>
          <div className={classes.closeActions}>
            <Link href="/book" className={`${classes.btn} ${classes.btnPrimary}`}>
              Book a free call
            </Link>
            <Link href="/risk-check" className={`${classes.btn} ${classes.btnGhost}`}>
              Check my app first
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
