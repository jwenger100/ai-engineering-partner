import Link from "next/link";
import system from "@/styles/system.module.css";
import classes from "./CTASection.module.css";

interface CTASectionProps {
  headline: string;
  body: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTASection({
  headline,
  body,
  primaryLabel = "Book a free call",
  primaryHref = "/book",
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className={classes.wrapper}>
      <div className={classes.inner}>
        <h2 className={classes.headline}>{headline}</h2>
        <p className={classes.body}>{body}</p>
        <div className={classes.actions}>
          <Link href={primaryHref} className={`${system.btn} ${system.btnPrimary}`}>
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link href={secondaryHref} className={`${system.btn} ${system.btnGhost}`}>
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
