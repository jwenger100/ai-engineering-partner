import Link from "next/link";
import { Button } from "@mantine/core";
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
  primaryLabel = "Book a Discovery Call",
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
          <Button
            component={Link}
            href={primaryHref}
            variant="filled"
            color="brand"
            size="lg"
            radius="md"
          >
            {primaryLabel}
          </Button>
          {secondaryLabel && secondaryHref && (
            <Button
              component={Link}
              href={secondaryHref}
              variant="outline"
              color="gray"
              size="lg"
              radius="md"
              styles={{ root: { borderColor: "rgba(255,255,255,0.3)", color: "#ccc" } }}
            >
              {secondaryLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
