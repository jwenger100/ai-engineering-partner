import classes from "./PageHeader.module.css";

/*
 * The dark page header was previously written inline on six separate pages.
 * One component now, so a change lands everywhere.
 */
export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className={classes.header}>
      <div className={classes.inner}>
        {eyebrow && <span className={classes.eyebrow}>{eyebrow}</span>}
        <h1 className={classes.title}>{title}</h1>
        {intro && <p className={classes.intro}>{intro}</p>}
      </div>
    </section>
  );
}
