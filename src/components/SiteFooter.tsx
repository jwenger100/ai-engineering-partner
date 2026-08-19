import Link from "next/link";
import { LogoMark } from "./LogoMark";
import { site } from "@/config/site";
import classes from "./SiteFooter.module.css";

const footerLinks = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Check your app", href: "/risk-check" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Book a call", href: "/book" },
  // Kept reachable but out of the main nav — see the pivot plan.
  { label: "For Engineering Teams", href: "/engineering-teams" },
  { label: "Privacy", href: "/privacy" },
];

export function SiteFooter() {
  return (
    <footer className={classes.footer}>
      <div className={classes.inner}>
        <div className={classes.top}>
          <div>
            <div className={classes.logoRow}>
              <LogoMark size={20} />
              <div className={classes.logoMain}>AI Engineering Partner</div>
            </div>
            <div className={classes.logoSub}>Production engineering for AI-built apps</div>
          </div>

          <div>
            <div className={classes.navLabel}>Navigation</div>
            <nav className={classes.navLinks}>
              {footerLinks.map((link) => (
                <Link key={link.label} href={link.href} className={classes.navLink}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className={classes.bottom}>
          <span className={classes.bottomText}>
            © {new Date().getFullYear()} AI Engineering Partner. All rights reserved.
          </span>
          <span className={classes.bottomText}>
            {site.email}
          </span>
        </div>
      </div>
    </footer>
  );
}
