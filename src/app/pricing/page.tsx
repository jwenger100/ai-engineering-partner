import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@mantine/core";
import { PageHeader } from "@/components/PageHeader";
import { PricingTierCard } from "@/components/PricingTierCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { TIERS, ADD_ONS } from "@/content/pricing";
import { FAQ_ITEMS } from "@/content/landing";
import system from "@/styles/system.module.css";
import classes from "./page.module.css";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "A $750 review that comes off the price of the work. A $7,500 engagement that leaves you owning and running your own app. Optional care from $500/month.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Start small. Decide after."
        intro="Fixed scope and a fixed price, both agreed before anything begins. Start with the review, which comes off the cost of the work if you go ahead. Every engagement on this page is run by me, a principal engineer with more than twenty years in the industry and time at Microsoft behind me."
      />

      <section className={classes.section}>
        <Container size="lg">
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

          <div className={classes.guarantee}>
            <div className={classes.guaranteeTitle}>If there is nothing to find, you don&apos;t pay</div>
            <p className={classes.guaranteeBody}>
              Some apps are in better shape than their owners fear. When the review turns up
              nothing worth acting on, I say so and refund the $750 in full. That costs me one
              engagement and buys something I would rather have, which is a founder who believes
              the next thing I tell them.
            </p>
          </div>
        </Container>
      </section>

      <section className={classes.sectionAlt}>
        <Container size="lg">
          <div className={classes.label}>Beyond the core work</div>
          <h2 className={classes.h2}>When you need more than the engagement</h2>
          <p className={classes.lead}>
            Quoted from what the review finds, so you always know what you&apos;re buying before
            you commit to it.
          </p>

          <div className={classes.addOnGrid}>
            {ADD_ONS.map((addOn) => (
              <div key={addOn.name} className={classes.addOn}>
                <div className={classes.addOnTop}>
                  <span className={classes.addOnName}>{addOn.name}</span>
                  <span className={classes.addOnPrice}>{addOn.price}</span>
                </div>
                <p className={classes.addOnBody}>{addOn.description}</p>
              </div>
            ))}
          </div>

          <p className={classes.note}>
            Not sure which of these you need?{" "}
            <Link href="/risk-check" className={classes.inlineLink}>
              Answer five questions
            </Link>{" "}
            and you&apos;ll see what your own answers point to.
          </p>
        </Container>
      </section>

      <section className={classes.section}>
        <div className={`${system.shell} ${system.split}`}>
          <div className={system.splitRail}>
            <p className={system.eyebrow}>Questions</p>
            <h2 className={system.h2}>Before you ask</h2>
          </div>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      <CTASection
        headline="Not sure which one you need"
        body="That is what the call is for. Fifteen minutes, free, and if the honest answer is none of them, that is what you will hear."
        primaryLabel="Book a free call"
        primaryHref="/book"
        secondaryLabel="Check my app first"
        secondaryHref="/risk-check"
      />
    </>
  );
}
