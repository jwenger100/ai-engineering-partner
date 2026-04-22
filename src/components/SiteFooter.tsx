import Link from "next/link";
import classes from "./SiteFooter.module.css";

const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "Prototype to Production", href: "/prototype-to-production" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Book a Discovery Call", href: "/book" },
];

function LogoMark() {
  return (
    <svg
      width="20"
      height="20"
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

export function SiteFooter() {
  return (
    <footer className={classes.footer}>
      <div className={classes.inner}>
        <div className={classes.top}>
          <div>
            <div className={classes.logoRow}>
              <LogoMark />
              <div className={classes.logoMain}>AI Engineering Partner</div>
            </div>
            <div className={classes.logoSub}>Hands-on AI training for engineering teams</div>
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
            aiengineeringpartner1@gmail.com
          </span>
        </div>
      </div>
    </footer>
  );
}
