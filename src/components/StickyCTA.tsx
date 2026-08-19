"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { track } from "@/lib/tracking";
import classes from "./StickyCTA.module.css";

/*
 * Persistent mobile call-to-action bar.
 *
 * This is the highest-leverage conversion element on the site: most ad traffic
 * is thumbs on phones, and the single biggest cause of lost mobile conversions
 * is making someone scroll to find out how to get in touch. This never leaves
 * the screen.
 *
 * Hidden on /book, where the calendar itself is already the page.
 */
export function StickyCTA() {
  const pathname = usePathname();

  if (pathname === "/book") return null;

  return (
    <div className={classes.bar}>
      <Link
        href="/book"
        className={`${classes.action} ${classes.primary}`}
        onClick={() => track("cta_click", { placement: "sticky_mobile", target: "book" })}
      >
        Book a call
      </Link>
      <Link
        href="/contact"
        className={`${classes.action} ${classes.secondary}`}
        onClick={() => track("cta_click", { placement: "sticky_mobile", target: "contact" })}
      >
        Message
      </Link>
    </div>
  );
}
