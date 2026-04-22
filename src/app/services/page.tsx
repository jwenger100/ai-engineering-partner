import type { Metadata } from "next";
import Link from "next/link";
import { Button, Container } from "@mantine/core";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Services | AI Engineering Partner",
  description:
    "Hands-on AI workshops, custom AI tools, workflow automation, and ongoing support for software engineering teams.",
};

const services = [
  {
    label: "Service 01",
    title: "Team Workshops",
    tagline: "Hands-on AI training built around your actual codebase and workflows.",
    description:
      "Live workshops designed for real engineering teams — not generic AI demos. Training happens inside your actual environment, with your tools and code, so skills transfer immediately to daily work. Available in-person or fully remote.",
    leftItems: [
      "AI literacy for software teams",
      "Cursor and GitHub Copilot setup and best practices",
      "Prompting techniques for engineering tasks",
      "Using AI in your actual codebase and workflow",
      "How AI changes code writing and debugging",
    ],
    rightItems: [
      "PR and code review workflow adaptation",
      "Risk, hallucinations, and practical guardrails",
      "Security and privacy in AI tool use",
      "Hands-on exercises in your real environment",
      "Team Q&A and follow-up resources",
    ],
    format: [
      { label: "Format", value: "Full-day or half-day workshop" },
      { label: "Delivery", value: "In-person or remote (Zoom)" },
      { label: "Team size", value: "5–30 engineers" },
      { label: "Pricing", value: "Custom — based on team size and scope" },
    ],
    bg: "#ffffff",
  },
  {
    label: "Service 02",
    title: "Custom AI Tools",
    tagline: "Internal AI tools built for your team's specific engineering workflows.",
    description:
      "Off-the-shelf AI tools don't always fit your team's specific context. We design and build custom internal tools tailored to your workflows — coding copilots, review assistants, documentation helpers, and dev productivity tools that integrate directly into how your engineers work.",
    leftItems: [
      "Internal coding copilots",
      "Review and triage assistants",
      "PR summary generators",
    ],
    rightItems: [
      "Documentation helpers",
      "Knowledge retrieval tools",
      "Dev workflow automations",
    ],
    format: [
      { label: "Scope", value: "Custom per engagement" },
      { label: "Delivery", value: "Remote or on-site" },
      { label: "Timeline", value: "Discussed during discovery" },
      { label: "Pricing", value: "Project-based — book a call to discuss" },
    ],
    bg: "#f8f9fa",
  },
  {
    label: "Service 03",
    title: "Workflow Automation",
    tagline: "Automate repeatable engineering and operational workflows using AI.",
    description:
      "We identify your highest-ROI automation targets, build and test them, and make sure they work reliably in your real environment. Focus is on automations that save measurable time for your engineering team every week.",
    leftItems: [
      "PR summaries and release notes",
      "Ticket triage and categorization",
      "Documentation generation",
    ],
    rightItems: [
      "Support handoff workflows",
      "Internal knowledge extraction",
      "Changelog and update generation",
    ],
    format: [
      { label: "Scope", value: "Scoped per automation target" },
      { label: "Delivery", value: "Remote" },
      { label: "Timeline", value: "Fast turnaround for high-value targets" },
      { label: "Pricing", value: "Project-based — book a call to discuss" },
    ],
    bg: "#ffffff",
  },
  {
    label: "Service 04",
    title: "Ongoing Support",
    tagline: "Post-workshop and post-implementation support so adoption actually sticks.",
    description:
      "Workshops and implementations without follow-on support rarely produce lasting change. We offer flexible support models designed to fit your team's rhythm — whether you need weekly office hours, async help, or a retainer-based advisory relationship.",
    leftItems: [
      "Weekly office hours",
      "Slack or Teams async support",
      "Retainer-based advisory",
    ],
    rightItems: [
      "Monthly check-ins and architecture review",
      "Follow-up enablement sessions",
      "Onboarding new engineers to AI workflows",
    ],
    format: [
      { label: "Models", value: "Retainer, hourly, or session-based" },
      { label: "Delivery", value: "Remote (Slack, Zoom, async)" },
      { label: "Commitment", value: "Month-to-month available" },
      { label: "Pricing", value: "Discussed during discovery call" },
    ],
    bg: "#f8f9fa",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section
        style={{
          background: "linear-gradient(135deg, #060a1f 0%, #0d1433 60%, #091020 100%)",
          padding: "4rem 1.5rem 3rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 50% 60%, rgba(37,99,235,0.1) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <Container size="lg" style={{ position: "relative" }}>
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#2563eb",
              marginBottom: "0.75rem",
            }}
          >
            AI Engineering Partner
          </div>
          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}
          >
            Services &amp; Engagements
          </h1>
          <p style={{ color: "#b0c4e8", fontSize: "1.05rem", maxWidth: "580px", lineHeight: 1.7 }}>
            Hands-on workshops, custom AI tools, workflow automation, and ongoing support for software engineering teams.
          </p>
        </Container>
      </section>

      {/* Service Sections */}
      {services.map((service, i) => (
        <section key={i} style={{ padding: "5rem 1.5rem", background: service.bg }}>
          <Container size="lg">
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#2563eb",
                marginBottom: "0.5rem",
              }}
            >
              {service.label}
            </div>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(1.6rem, 3vw, 2.1rem)",
                fontWeight: 700,
                color: "#1a1a1a",
                marginBottom: "0.5rem",
              }}
            >
              {service.title}
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "#555",
                fontStyle: "italic",
                marginBottom: "1.5rem",
              }}
            >
              {service.tagline}
            </p>
            <p style={{ fontSize: "0.95rem", color: "#444", lineHeight: 1.8, maxWidth: "720px", marginBottom: "2.5rem" }}>
              {service.description}
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
              {/* What's included */}
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    color: "#555",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "1rem",
                  }}
                >
                  What&apos;s Included
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem 1.5rem" }}>
                  {[...service.leftItems, ...service.rightItems].map((item, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.875rem", color: "#333" }}>
                      <span style={{ color: "#2563eb", fontWeight: 700, flexShrink: 0 }}>→</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engagement format */}
              <div
                style={{
                  padding: "1.75rem",
                  background: "#f8f9fa",
                  border: "1px solid #e9ecef",
                  borderRadius: "10px",
                  borderLeft: "4px solid #2563eb",
                }}
              >
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    color: "#555",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "1.25rem",
                  }}
                >
                  Engagement Details
                </div>
                {service.format.map((detail, j) => (
                  <div
                    key={j}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      padding: "0.65rem 0",
                      borderBottom: j < service.format.length - 1 ? "1px solid #e9ecef" : "none",
                      gap: "1rem",
                    }}
                  >
                    <span style={{ fontSize: "0.85rem", color: "#888", flexShrink: 0 }}>{detail.label}</span>
                    <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "#1a1a1a", textAlign: "right" }}>{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* Productized offering: Prototype to Production */}
      <section style={{ padding: "5rem 1.5rem", background: "#ffffff" }}>
        <Container size="lg">
          <div
            style={{
              padding: "2.5rem",
              background: "linear-gradient(135deg, #060a1f 0%, #0d1433 60%, #091020 100%)",
              borderRadius: "12px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse at 80% 30%, rgba(37,99,235,0.15) 0%, transparent 60%)",
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "relative", display: "grid", gridTemplateColumns: "2fr 1fr", gap: "2rem", alignItems: "center" }}>
              <div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#3b82f6",
                    marginBottom: "0.5rem",
                  }}
                >
                  Also Available · Productized Offering
                </div>
                <h2
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "clamp(1.5rem, 3vw, 2rem)",
                    fontWeight: 700,
                    color: "#ffffff",
                    lineHeight: 1.25,
                    marginBottom: "0.75rem",
                  }}
                >
                  Prototype to Production
                </h2>
                <p style={{ color: "#b0c4e8", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1rem" }}>
                  A structured upgrade path for AI-built apps (Lovable, Replit,
                  and similar). Three fixed-scope tiers from code
                  independence to full AWS-scale architecture — designed to
                  replace unnecessary platform overhead with a foundation you
                  own.
                </p>
                <div style={{ fontSize: "0.85rem", color: "#b0c4e8" }}>
                  Independence ($7.5k) · Production Readiness ($3.5k) · Scale
                  Architecture (from $18k) · Fractional CTO retainers
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <Button
                  component={Link}
                  href="/prototype-to-production"
                  variant="filled"
                  color="brand"
                  size="md"
                  radius="md"
                >
                  Explore the Offering
                </Button>
                <Button
                  component={Link}
                  href="/prototype-to-production/services"
                  variant="outline"
                  size="md"
                  radius="md"
                  styles={{ root: { borderColor: "rgba(255,255,255,0.3)", color: "#d0d0d0" } }}
                >
                  View Packages
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        headline="Not sure which engagement is right for your team?"
        body="Book a 30-minute discovery call. We'll assess your current AI usage, identify the highest-ROI opportunities, and give you a direct recommendation — no commitment required."
        primaryLabel="Book a Discovery Call"
        primaryHref="/book"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
