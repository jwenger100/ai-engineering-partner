import type { Metadata } from "next";
import Link from "next/link";
import { Button, Container } from "@mantine/core";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Services & Packages",
  description:
    "Detailed breakdown of all three Prototype to Production tiers — Independence Package, Production Readiness, and Scale Architecture — plus retainer options.",
};

const tier1Standard = [
  "Code extraction & cleanup from managed platform",
  "Migration to GitHub with clean repository structure",
  "Repository optimized for AI-assisted development",
  "Claude Code workflow setup (prompt discipline, testing patterns)",
  "CI/CD pipeline via GitHub Actions",
  "Full environment separation: dev / staging / prod",
  "Supabase production deployment",
  "Basic observability integration points (logging, error tracking)",
  "Documentation of architecture and deployment process",
  "Two live training sessions (deploy workflow, day-to-day operations)",
];

const tier1Lean = [
  "Code extraction & cleanup",
  "Migration to GitHub",
  "Single environment setup",
  "Basic CI/CD pipeline",
  "Supabase deployment",
  "Minimal observability",
  "Faster turnaround (~2 weeks)",
];

const tier2Architecture = [
  "Data model review and indexing analysis",
  "Query performance audit",
  "Auth model analysis (JWT, session, OAuth flows)",
  "Edge function boundary review",
  "Vendor lock-in risk assessment",
  "Cost modeling at 1k / 10k / 100k users",
];

const tier2Security = [
  "Supabase Row Level Security (RLS) audit",
  "Secrets management review",
  "Third-party dependency risk review",
  "Abuse prevention checklist",
  "Backup and restore plan",
  "Monitoring and alerting recommendations",
];

const tier3Deliverables = [
  "Full Dockerization of application",
  "AWS ECS Fargate deployment",
  "Terraform-managed infrastructure (IaC)",
  "VPC + IAM configuration and hardening",
  "RDS/Aurora database setup (or Supabase hybrid path)",
  "Multi-environment CI/CD with GitHub Actions",
  "Monitoring and alerting baseline (CloudWatch / Datadog)",
  "Optional Next.js migration (+$6k–$15k depending on scope)",
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
            background:
              "radial-gradient(ellipse at 50% 60%, rgba(37,99,235,0.1) 0%, transparent 65%)",
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
            Prototype to Production
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
            Services &amp; Packages
          </h1>
          <p style={{ color: "#b8d0f0", fontSize: "1.05rem", maxWidth: "580px", lineHeight: 1.7 }}>
            Fixed-scope engagements with defined outcomes. Three tiers — from
            code independence to full AWS-scale infrastructure.
          </p>
        </Container>
      </section>

      {/* Tier 1 */}
      <section style={{ padding: "5rem 1.5rem", background: "#fff" }}>
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
            Tier 1
          </div>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              color: "#1a1a1a",
              marginBottom: "0.25rem",
            }}
          >
            Independence Package
          </h2>
          <p style={{ fontSize: "1rem", color: "#555", fontStyle: "italic", marginBottom: "1.75rem" }}>
            Own your code. Cut platform tax. Keep shipping fast.
          </p>
          <p style={{ fontSize: "0.95rem", color: "#444", lineHeight: 1.75, maxWidth: "680px", marginBottom: "2.5rem" }}>
            The foundation upgrade. Removes unnecessary abstraction layers and
            replaces them with clean, professional infrastructure — often
            reducing monthly overhead while increasing control, reliability, and
            security posture.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
              marginBottom: "2rem",
            }}
          >
            {/* Standard */}
            <div
              style={{
                position: "relative",
                padding: "2rem 2rem 2rem 2.5rem",
                border: "1px solid #e9ecef",
                borderRadius: "10px",
                background: "#fff",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  width: "5px",
                  background: "linear-gradient(180deg, #2563eb, #3b82f6)",
                  borderRadius: "10px 0 0 10px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "1.5rem",
                }}
              >
                <div>
                  <div style={{ fontWeight: 700, fontSize: "1.05rem", color: "#1a1a1a" }}>
                    Standard
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#888", marginTop: "0.1rem" }}>
                    Full engagement
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "#1a1a1a",
                  }}
                >
                  $7,500
                </div>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {tier1Standard.map((item, i) => (
                  <li
                    key={i}
                    style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.875rem", color: "#333" }}
                  >
                    <span style={{ color: "#2563eb", fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lean */}
            <div
              style={{
                position: "relative",
                padding: "2rem 2rem 2rem 2.5rem",
                border: "1px solid #e9ecef",
                borderRadius: "10px",
                background: "#fafafa",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  width: "5px",
                  background: "linear-gradient(180deg, #7aa3e8, #93b5ec)",
                  borderRadius: "10px 0 0 10px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "1.5rem",
                }}
              >
                <div>
                  <div style={{ fontWeight: 700, fontSize: "1.05rem", color: "#1a1a1a" }}>
                    Lean
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#888", marginTop: "0.1rem" }}>
                    Pre-revenue / fast-launch
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "#1a1a1a",
                  }}
                >
                  $5,000
                </div>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {tier1Lean.map((item, i) => (
                  <li
                    key={i}
                    style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.875rem", color: "#333" }}
                  >
                    <span style={{ color: "#7aa3e8", fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div
                style={{
                  marginTop: "1.5rem",
                  padding: "0.75rem 1rem",
                  background: "rgba(37, 99, 235, 0.05)",
                  borderRadius: "6px",
                  border: "1px solid rgba(37, 99, 235, 0.15)",
                  fontSize: "0.8rem",
                  color: "#555",
                }}
              >
                Good fit for pre-revenue or pre-launch teams preparing for a
                fundraise or serious launch.
              </div>
            </div>
          </div>

          {/* Bundle callout */}
          <div
            style={{
              padding: "1rem 1.5rem",
              background: "#eff6ff",
              border: "1px solid rgba(37, 99, 235, 0.25)",
              borderRadius: "8px",
              fontSize: "0.875rem",
              color: "#444",
            }}
          >
            <strong style={{ color: "#2563eb" }}>Bundle Incentive:</strong>{" "}
            Purchase Independence Package together with Production Readiness and
            receive a $1,000 credit.
          </div>
        </Container>
      </section>

      {/* Tier 2 */}
      <section style={{ padding: "5rem 1.5rem", background: "#f8f9fa" }}>
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
            Tier 2
          </div>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              color: "#1a1a1a",
              marginBottom: "0.25rem",
            }}
          >
            Production Readiness Package
          </h2>
          <p style={{ fontSize: "1rem", color: "#555", fontStyle: "italic", marginBottom: "1.75rem" }}>
            Find the risks before your customers do.
          </p>
          <p style={{ fontSize: "0.95rem", color: "#444", lineHeight: 1.75, maxWidth: "680px", marginBottom: "2.5rem" }}>
            A comprehensive audit of your architecture, security posture, and
            cost trajectory. Delivered as a written report — not a presentation
            deck — with risk scoring and a prioritized implementation roadmap.
          </p>

          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}
          >
            {[
              { title: "Architecture Review", items: tier2Architecture },
              { title: "Security Audit", items: tier2Security },
            ].map((group, gi) => (
              <div
                key={gi}
                style={{
                  position: "relative",
                  padding: "1.75rem 1.75rem 1.75rem 2.25rem",
                  background: "#fff",
                  border: "1px solid #e9ecef",
                  borderRadius: "10px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    width: "5px",
                    background: "linear-gradient(180deg, #2563eb, #3b82f6)",
                    borderRadius: "10px 0 0 10px",
                  }}
                />
                <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#1a1a1a", marginBottom: "1rem" }}>
                  {group.title}
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                  {group.items.map((item, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.875rem", color: "#444" }}>
                      <span style={{ color: "#2563eb", fontWeight: 700, flexShrink: 0 }}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.25rem",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                padding: "1.5rem",
                background: "#fff",
                border: "1px solid #e9ecef",
                borderRadius: "10px",
              }}
            >
              <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "#1a1a1a", marginBottom: "0.75rem" }}>
                Deliverable Format
              </div>
              {["10–20 page written report", "Risk scoring per finding", "Prioritized action roadmap", "Effort estimates for each item"].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.875rem", color: "#555", marginBottom: "0.4rem" }}>
                  <span style={{ color: "#2563eb", fontWeight: 700 }}>→</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div
              style={{
                padding: "1.5rem",
                background: "#eff6ff",
                border: "1px solid rgba(37, 99, 235, 0.2)",
                borderRadius: "10px",
              }}
            >
              <div style={{ fontFamily: "Georgia, serif", fontSize: "2rem", fontWeight: 700, color: "#1a1a1a" }}>
                $3,500
              </div>
              <div style={{ fontSize: "0.8rem", color: "#888", marginBottom: "1rem" }}>
                Fixed price · Delivered in 1–2 weeks
              </div>
              <div style={{ fontSize: "0.875rem", color: "#444", marginBottom: "0.75rem" }}>
                <strong>Optional:</strong> Implementation sprint at $2,500/week to
                act on report findings immediately.
              </div>
              <Button
                component={Link}
                href="/book"
                variant="filled"
                color="brand"
                size="sm"
                radius="md"
                fullWidth
              >
                Request Audit
              </Button>
            </div>
          </div>

          <div
            style={{
              padding: "1rem 1.5rem",
              background: "#eff6ff",
              border: "1px solid rgba(37, 99, 235, 0.25)",
              borderRadius: "8px",
              fontSize: "0.875rem",
              color: "#444",
            }}
          >
            <strong style={{ color: "#2563eb" }}>Bundle Incentive:</strong>{" "}
            Purchase Production Readiness together with Independence Package and
            receive a $1,000 credit.
          </div>
        </Container>
      </section>

      {/* Tier 3 */}
      <section style={{ padding: "5rem 1.5rem", background: "#fff" }}>
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
            Tier 3
          </div>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              color: "#1a1a1a",
              marginBottom: "0.25rem",
            }}
          >
            Scale Architecture Package
          </h2>
          <p style={{ fontSize: "1rem", color: "#555", fontStyle: "italic", marginBottom: "1.75rem" }}>
            Build the system you won&apos;t have to rebuild later.
          </p>
          <p style={{ fontSize: "0.95rem", color: "#444", lineHeight: 1.75, maxWidth: "680px", marginBottom: "2.5rem" }}>
            The full AWS path. For teams that have outgrown the Supabase model
            or have enterprise security, multi-region, or compliance
            requirements. Terraform-managed from day one.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                position: "relative",
                padding: "2rem 2rem 2rem 2.5rem",
                border: "1px solid #e9ecef",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  width: "5px",
                  background: "linear-gradient(180deg, #2563eb, #3b82f6)",
                  borderRadius: "10px 0 0 10px",
                }}
              />
              <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#1a1a1a", marginBottom: "1rem" }}>
                Deliverables
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {tier3Deliverables.map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.875rem", color: "#333" }}>
                    <span style={{ color: "#2563eb", fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div
                style={{
                  padding: "1.5rem",
                  background: "#eff6ff",
                  border: "1px solid rgba(37, 99, 235, 0.2)",
                  borderRadius: "10px",
                }}
              >
                <div style={{ fontFamily: "Georgia, serif", fontSize: "1.75rem", fontWeight: 700, color: "#1a1a1a" }}>
                  From $18,000
                </div>
                <div style={{ fontSize: "0.8rem", color: "#888", marginBottom: "0.75rem" }}>
                  Typical range: $18k–$35k
                </div>
                <div style={{ fontSize: "0.8rem", color: "#555", lineHeight: 1.6, marginBottom: "1rem" }}>
                  Scope depends on application complexity, team size, and
                  compliance requirements.
                </div>
                <Button
                  component={Link}
                  href="/book"
                  variant="filled"
                  color="brand"
                  size="sm"
                  radius="md"
                  fullWidth
                >
                  Discuss Scale Plan
                </Button>
              </div>

              <div
                style={{
                  padding: "1.25rem",
                  background: "#fff",
                  border: "1px solid #e9ecef",
                  borderRadius: "10px",
                  fontSize: "0.8rem",
                  color: "#555",
                  lineHeight: 1.6,
                }}
              >
                <strong style={{ color: "#1a1a1a", display: "block", marginBottom: "0.4rem" }}>
                  Not always necessary
                </strong>
                Most early-stage founders are well-served by Tier 1 or 2. We&apos;ll
                tell you honestly where you are.
              </div>

              <div
                style={{
                  padding: "1rem 1.25rem",
                  background: "#eff6ff",
                  border: "1px solid rgba(37, 99, 235, 0.2)",
                  borderRadius: "8px",
                  fontSize: "0.8rem",
                  color: "#444",
                }}
              >
                <strong style={{ color: "#2563eb" }}>Credit:</strong> $2,000 applied
                if Tier 1/2 were completed first.
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Retainers */}
      <section style={{ padding: "5rem 1.5rem", background: "#f8f9fa" }}>
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
            Ongoing Engagement
          </div>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              color: "#1a1a1a",
              marginBottom: "1.75rem",
            }}
          >
            Fractional CTO Retainers
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            {[
              {
                name: "Fractional CTO Lite",
                price: "$1,500/month",
                desc: "Ongoing architectural guidance and technical strategy for teams that don't need a full-time CTO yet.",
                includes: [
                  "Monthly architecture review",
                  "Async Q&A and code review",
                  "Quarterly roadmap input",
                  "Incident response consultation",
                ],
              },
              {
                name: "Fractional CTO",
                price: "$3,500/month",
                desc: "Deep technical leadership for teams actively scaling. Involved in planning, hiring, architectural decisions, and engineering culture.",
                includes: [
                  "Bi-weekly syncs",
                  "Active PR and architecture review",
                  "Hiring pipeline input",
                  "Board/investor technical liaison",
                  "Engineering team mentorship",
                ],
              },
            ].map((r, i) => (
              <div
                key={i}
                style={{
                  position: "relative",
                  padding: "2rem 2rem 2rem 2.5rem",
                  background: "#fff",
                  border: "1px solid #e9ecef",
                  borderRadius: "10px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    width: "5px",
                    background: "linear-gradient(180deg, #2563eb, #3b82f6)",
                    borderRadius: "10px 0 0 10px",
                  }}
                />
                <div
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.75rem" }}
                >
                  <div style={{ fontWeight: 700, fontSize: "1rem", color: "#1a1a1a" }}>{r.name}</div>
                  <div
                    style={{ fontFamily: "Georgia, serif", fontWeight: 700, color: "#2563eb", fontSize: "1.2rem" }}
                  >
                    {r.price}
                  </div>
                </div>
                <p style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                  {r.desc}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {r.includes.map((item, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.875rem", color: "#333" }}>
                      <span style={{ color: "#2563eb", fontWeight: 700, flexShrink: 0 }}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        headline="Not sure which tier is right for you?"
        body="Book a 30-minute strategy call. We'll assess your current setup and give you a direct recommendation — no sales pitch, no commitment required."
        primaryLabel="Book a Strategy Call"
        primaryHref="/book"
      />
    </>
  );
}
