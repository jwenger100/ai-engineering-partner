import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@mantine/core";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/config/site";
import classes from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Send a message about your AI-built app. We reply within one business day — or book a free 15-minute call and skip the wait.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us what's going on"
        intro="A sentence or two is plenty. We read everything and reply within one business day."
      />

      <section className={classes.section}>
        <Container size="md">
          <div className={classes.card}>
            <ContactForm />
          </div>

          <div className={classes.alt}>
            <div className={classes.altItem}>
              <span className={classes.altLabel}>In a hurry?</span>
              <Link href="/book" className={classes.altLink}>
                Book a free 15-minute call →
              </Link>
            </div>
            <div className={classes.altItem}>
              <span className={classes.altLabel}>Not ready to talk?</span>
              <Link href="/risk-check" className={classes.altLink}>
                Answer five questions about your app →
              </Link>
            </div>
            <div className={classes.altItem}>
              <span className={classes.altLabel}>Prefer email?</span>
              <a href={`mailto:${site.email}`} className={classes.altLink}>
                {site.email}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
