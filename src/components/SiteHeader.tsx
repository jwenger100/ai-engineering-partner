"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@mantine/core";
import classes from "./SiteHeader.module.css";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Prototype to Production", href: "/prototype-to-production" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function LogoMark() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <polygon
        points="12,2 22,12 12,22 2,12"
        fill="none"
        stroke="#2563eb"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2.5" fill="#2563eb" />
      <line x1="12" y1="6" x2="12" y2="9.5" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="14.5" x2="12" y2="18" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="6" y1="12" x2="9.5" y2="12" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="14.5" y1="12" x2="18" y2="12" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={classes.header} style={{ position: "relative" }}>
      <div className={classes.inner}>
        <Link href="/" className={classes.logo}>
          <LogoMark />
          <div className={classes.logoText}>
            <span className={classes.logoMain}>AI Engineering Partner</span>
          </div>
        </Link>

        <nav className={classes.links}>
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className={classes.link}>
              {link.label}
            </Link>
          ))}
          <span className={classes.ctaLink}>
            <Button
              component={Link}
              href="/book"
              variant="filled"
              color="brand"
              size="sm"
              radius="md"
            >
              Book a Discovery Call
            </Button>
          </span>
        </nav>

        <button
          className={classes.burger}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen ? (
              <>
                <line x1="3" y1="3" x2="19" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="19" y1="3" x2="3" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className={classes.mobileMenu}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={classes.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book"
            className={classes.mobileLink}
            onClick={() => setMenuOpen(false)}
            style={{ color: "#2563eb", fontWeight: 600 }}
          >
            Book a Discovery Call →
          </Link>
        </div>
      )}
    </header>
  );
}
