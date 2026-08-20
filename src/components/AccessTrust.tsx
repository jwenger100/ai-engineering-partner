import system from "@/styles/system.module.css";
import classes from "./AccessTrust.module.css";

/*
 * Sits where case studies will eventually go, and stays afterwards.
 *
 * At this point in the page the reader has understood the offer and is deciding
 * whether to give a stranger their production database. No testimonial answers
 * that; a straight account of what access is needed and what happens to it
 * does. It is also all verifiable, which nothing else in the proof slot is
 * until real case studies land.
 */

const TERMS = [
  {
    title: "You create the accounts, not me",
    body: "GitHub, hosting, database, domain. Every account is opened in your name with your billing on it, and I am added as a collaborator you can remove in two clicks.",
  },
  {
    title: "Every secret is rotated at handover",
    body: "Any key I have seen is replaced before the engagement closes, including ones that were already exposed when I arrived. You end up holding credentials I have never had.",
  },
  {
    title: "Nothing is subcontracted",
    body: "One person does the work. Your code and your customer data are never passed to anyone else, offshore or otherwise, because there is nobody else to pass them to.",
  },
  {
    title: "You can stop at any point",
    body: "Revoke my access whenever you like and you keep everything produced up to that moment: the repository, the infrastructure, the runbook. None of it is held hostage to the invoice.",
  },
];

export function AccessTrust() {
  return (
    <section className={`${system.band} ${system.bandSurface}`}>
      <div className={system.shell}>
        <p className={system.eyebrow}>Before you hand over the keys</p>
        <h2 className={system.h2}>What I get access to, and what happens to it.</h2>
        <p className={system.body}>
          This work needs real credentials to your live application, which is a lot to ask of
          someone you met through an advert. So here is exactly how that is handled, in writing,
          before you have to decide anything.
        </p>

        <div className={classes.grid}>
          {TERMS.map((term) => (
            <div key={term.title} className={classes.item}>
              <h3 className={system.h3}>{term.title}</h3>
              <p className={classes.body}>{term.body}</p>
            </div>
          ))}
        </div>

        <p className={classes.footnote}>
          All of this goes in the engagement agreement, alongside a data processing agreement if
          your app holds personal data. Ask for both before you pay anything.
        </p>
      </div>
    </section>
  );
}
