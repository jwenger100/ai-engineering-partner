import Link from "next/link";
import { CASE_STUDIES, HAS_CASE_STUDIES } from "@/content/caseStudies";
import classes from "./CaseStudies.module.css";

/*
 * Renders nothing until real case studies exist. See src/content/caseStudies.ts.
 *
 * An empty or generic "trusted by" band is worse than no section at all — it
 * advertises the absence. So this disappears cleanly instead.
 */
export function CaseStudies({
  heading = "Two founders, already moved",
  intro,
}: {
  heading?: string;
  intro?: string;
}) {
  if (!HAS_CASE_STUDIES) return null;

  return (
    <section className={classes.section}>
      <div className={classes.inner}>
        <div className={classes.label}>Proof</div>
        <h2 className={classes.heading}>{heading}</h2>
        {intro && <p className={classes.intro}>{intro}</p>}

        <div className={classes.grid}>
          {CASE_STUDIES.map((study) => (
            <article key={study.client} className={classes.card}>
              <div className={classes.platform}>From {study.platform}</div>
              <h3 className={classes.client}>{study.client}</h3>
              <p className={classes.product}>{study.product}</p>

              {study.quote && <blockquote className={classes.quote}>“{study.quote}”</blockquote>}

              <dl className={classes.detail}>
                <dt>Before</dt>
                <dd>{study.problem}</dd>
                <dt>What we did</dt>
                <dd>{study.work}</dd>
              </dl>

              {study.costBefore && study.costAfter && (
                <div className={classes.costs}>
                  <div className={classes.cost}>
                    <span className={classes.costLabel}>Was paying</span>
                    <span className={classes.costWas}>{study.costBefore}</span>
                  </div>
                  <span className={classes.arrow} aria-hidden="true">→</span>
                  <div className={classes.cost}>
                    <span className={classes.costLabel}>Now</span>
                    <span className={classes.costNow}>{study.costAfter}</span>
                  </div>
                </div>
              )}

              {study.url && (
                <Link href={study.url} className={classes.link} target="_blank" rel="noopener noreferrer">
                  See the product →
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
