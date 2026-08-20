import classes from "./Credentials.module.css";

/*
 * Founder credentials.
 *
 * With no published case studies yet, this is the strongest trust asset the
 * business has, and it answers the only question that matters to someone about
 * to hand over production database credentials: who is this person.
 *
 * Only three facts, all verifiable. Nothing here may be embellished into
 * specific teams, products, dates or titles beyond what is stated.
 */

const FACTS = [
  { value: "Ex-Microsoft", label: "Where the experience comes from" },
  { value: "Principal Engineer", label: "The level it was earned at" },
  { value: "20+ years", label: "Building and shipping software" },
];

export function Credentials({ variant = "strip" }: { variant?: "strip" | "block" }) {
  if (variant === "block") {
    return (
      <dl className={classes.block}>
        {FACTS.map((fact) => (
          <div key={fact.value} className={classes.blockItem}>
            <dt className={classes.blockValue}>{fact.value}</dt>
            <dd className={classes.blockLabel}>{fact.label}</dd>
          </div>
        ))}
      </dl>
    );
  }

  return (
    <ul className={classes.strip}>
      {FACTS.map((fact) => (
        <li key={fact.value} className={classes.stripItem}>
          {fact.value}
        </li>
      ))}
    </ul>
  );
}
