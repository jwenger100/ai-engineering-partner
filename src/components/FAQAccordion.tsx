"use client";

import { useState } from "react";
import classes from "./FAQAccordion.module.css";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      style={{
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 0.2s ease",
        flexShrink: 0,
        color: "#2563eb",
      }}
    >
      <path
        d="M3 6L8 11L13 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FAQItem({ question, answer }: FAQItem) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${classes.item} ${open ? classes.itemOpen : ""}`}>
      <button
        className={classes.control}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <ChevronIcon open={open} />
      </button>
      {open && (
        <div className={classes.body}>{answer}</div>
      )}
    </div>
  );
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className={classes.accordion}>
      {items.map((item, i) => (
        <FAQItem key={i} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}
