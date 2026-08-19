import type { Metadata } from "next";
import { Container } from "@mantine/core";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/config/site";
import classes from "./page.module.css";

/*
 * ─────────────────────────────────────────────────────────────────────────
 * NOTE FOR JON — READ BEFORE RELYING ON THIS.
 *
 * This is an accurate description of what this website actually does. Every
 * third party named below is one the site genuinely sends data to, and the
 * list was written from the code rather than from a template — which is more
 * than can be said for most privacy policies.
 *
 * It is NOT legal advice and I am not a lawyer. Two things in particular you
 * should get looked at by someone who is:
 *
 *  1. If you take clients in the EU/UK, GDPR brings obligations this page
 *     only gestures at — lawful basis, data processing agreements with each
 *     processor, and a defined retention period.
 *  2. Once you start handling client production databases, you need a
 *     separate data processing agreement for THAT. This page covers the
 *     marketing website only. It does not cover engagement work, and it
 *     should not be pointed at as though it does.
 *
 * KEEP THIS PAGE TRUE. If you add a tool that touches visitor data, add it
 * here. A policy that describes a site you no longer run is worse than none.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "What data this website collects, who processes it, and how to have it removed.",
  alternates: { canonical: "/privacy" },
};

const LAST_UPDATED = "19 August 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy"
        title="What we collect, and why"
        intro="Written in plain language, and specific to what this site actually does."
      />

      <section className={classes.section}>
        <Container size="sm">
          <p className={classes.updated}>Last updated {LAST_UPDATED}</p>

          <div className={classes.prose}>
            <p className={classes.lead}>
              This covers {site.name}&apos;s website. If we work together, the handling of your
              own application and its data is governed by our engagement agreement, not by this
              page.
            </p>

            <h2>What we collect</h2>

            <h3>When you contact us</h3>
            <p>
              The contact form asks for your name, email address, which platform you built on,
              and whatever you write in the message. All four go to us by email. We ask for
              these because we cannot reply otherwise.
            </p>

            <h3>When you book a call</h3>
            <p>
              Booking is handled by Cal.com. They collect your name, email, chosen time, and
              your answers to the questions on the booking form. That information sits in our
              Cal.com account and our calendar.
            </p>

            <h3>When you use the app check</h3>
            <p>
              The five-question check runs entirely in your browser. Your answers are not sent
              anywhere unless you then choose to enter your email address to receive the written
              version — at which point your answers and your email are sent to us.
            </p>

            <h3>Automatically</h3>
            <p>
              If you arrive from an advertisement or a search result, your browser carries
              campaign tags in the address (things like <code>utm_source</code> or{" "}
              <code>fbclid</code>). We store those in your browser&apos;s session storage and
              attach them to any enquiry you submit, so we know which advert or link brought you
              here. Session storage is cleared when you close the tab.
            </p>
            <p>
              We may also use Google Analytics and the Meta Pixel to understand how people use
              the site and whether our advertising works. These set cookies and record things
              like pages viewed, approximate location, device and browser.
            </p>

            <h2>Who else handles it</h2>
            <p>
              We keep this list short deliberately. Each of these is a company we send some of
              your data to in order to run the site:
            </p>
            <ul className={classes.vendors}>
              <li>
                <strong>Web3Forms</strong> — delivers contact form submissions to our inbox.{" "}
                <a href="https://web3forms.com/privacy-policy" target="_blank" rel="noopener noreferrer">
                  Their policy
                </a>
              </li>
              <li>
                <strong>Google</strong> — Sheets and Apps Script store enquiries so we can keep
                track of them; Google Analytics measures site usage.{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                  Their policy
                </a>
              </li>
              <li>
                <strong>Cal.com</strong> — handles call bookings.{" "}
                <a href="https://cal.com/privacy" target="_blank" rel="noopener noreferrer">
                  Their policy
                </a>
              </li>
              <li>
                <strong>Meta</strong> — the Meta Pixel measures advertising performance.{" "}
                <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer">
                  Their policy
                </a>
              </li>
              <li>
                <strong>GitHub</strong> — hosts this website, and records server logs including
                IP addresses as part of serving it.{" "}
                <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">
                  Their policy
                </a>
              </li>
            </ul>
            <p>
              We do not sell your information, and we do not share it with anyone for their own
              marketing.
            </p>

            <h2>Why we are allowed to</h2>
            <p>
              When you send us an enquiry or book a call, you are asking us to get in touch — we
              use your details for that and for the follow-up conversation. For analytics and
              advertising measurement, we rely on our legitimate interest in understanding
              whether our marketing works, and you can opt out below.
            </p>

            <h2>How long we keep it</h2>
            <p>
              Enquiries and booking records are kept for as long as there is a realistic
              prospect of working together, and for up to two years afterwards so we have a
              record of who we have spoken to. Ask us to delete yours sooner and we will.
              Analytics data follows the providers&apos; own retention settings.
            </p>

            <h2>Turning off tracking</h2>
            <p>
              Most browsers let you block or delete cookies in their settings. You can opt out
              of Google Analytics with{" "}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
                Google&apos;s browser add-on
              </a>
              , and adjust what Meta uses for advertising in{" "}
              <a href="https://www.facebook.com/adpreferences" target="_blank" rel="noopener noreferrer">
                your Meta ad preferences
              </a>
              . Blocking these will not stop the site working.
            </p>

            <h2>Your choices</h2>
            <p>
              Email us and we will tell you what we hold about you, correct it, or delete it.
              You do not need to give a reason, and we will not make it difficult. Depending on
              where you live you may have further rights under laws such as the GDPR or the
              CCPA; we will honour those requests regardless of where you are.
            </p>

            <h2>Children</h2>
            <p>
              This site is for people running businesses. It is not directed at children, and we
              do not knowingly collect information from anyone under 16.
            </p>

            <h2>Changes</h2>
            <p>
              If we change how the site handles data, we will update this page and the date at
              the top of it.
            </p>

            <h2>Contact</h2>
            <p>
              Questions, or a request about your data:{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>. We reply within one business
              day.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
