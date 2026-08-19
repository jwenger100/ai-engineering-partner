"use client";

import { useState } from "react";
import classes from "./FAQAccordion.module.css";

interface FAQItem {
  question: string;
  answer: string;
}

/*
 * Plus/minus rather than a chevron: it reads as "expand" at a glance, and it
 * stays legible at the small size the control needs at the end of a long row.
 */
function ToggleIcon({ open }: { open: boolean }) {
  return (
    <span className={classes.icon} aria-hidden="true">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <line
          x1="1" y1="7" x2="13" y2="7"
          stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
        />
        <line
          x1="7" y1="1" x2="7" y2="13"
          stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
          className={open ? classes.iconBarOpen : classes.iconBar}
        />
      </svg>
    </span>
  );
}

function Row({ question, answer }: FAQItem) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${classes.item} ${open ? classes.itemOpen : ""}`}>
      <h3 className={classes.heading}>
        <button
          type="button"
          className={classes.control}
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
        >
          <span className={classes.question}>{question}</span>
          <ToggleIcon open={open} />
        </button>
      </h3>

      {/*
       * Grid-rows 0fr -> 1fr animates to auto height without hardcoding one,
       * and the inner element must own the overflow for it to work.
       */}
      <div className={classes.panel} data-open={open || undefined}>
        <div className={classes.panelInner}>
          <p className={classes.answer}>{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  return (
    <div className={classes.accordion}>
      {items.map((item) => (
        <Row key={item.question} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}
