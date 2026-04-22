import Link from "next/link";
import { Button } from "@mantine/core";
import classes from "./PricingTierCard.module.css";

interface PricingTierCardProps {
  name: string;
  tagline: string;
  price: string;
  priceNote?: string;
  description: string;
  bulletPoints: string[];
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
  badge?: string;
}

export function PricingTierCard({
  name,
  tagline,
  price,
  priceNote,
  description,
  bulletPoints,
  ctaLabel,
  ctaHref,
  featured = false,
  badge,
}: PricingTierCardProps) {
  return (
    <div className={`${classes.card} ${featured ? classes.featured : ""}`}>
      {badge && <div className={classes.badge}>{badge}</div>}
      <div className={classes.name}>{name}</div>
      <div className={classes.tagline}>{tagline}</div>

      <div className={classes.priceBlock}>
        <div className={classes.price}>{price}</div>
        {priceNote && <div className={classes.priceNote}>{priceNote}</div>}
      </div>

      <div className={classes.description}>{description}</div>

      <ul className={classes.bullets}>
        {bulletPoints.map((point, i) => (
          <li key={i} className={classes.bullet}>
            <span className={classes.bulletIcon}>✓</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className={classes.cta}>
        <Button
          component={Link}
          href={ctaHref}
          variant={featured ? "filled" : "outline"}
          color="brand"
          fullWidth
          radius="md"
        >
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}
