import type { Metadata } from "next";
import { Container } from "@mantine/core";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Architecture Comparison",
  description:
    "Compare the three infrastructure paths: Lovable/Replit + Supabase, GitHub + CI/CD + Supabase, and AWS ECS + Terraform. Understand the tradeoffs and when each is appropriate.",
};

const comparisonRows = [
  {
    attribute: "Infrastructure Control",
    lovable:
      "Managed by platform. Limited visibility into what runs where. Hard to customize.",
    github:
      "Full control. Your GitHub repo, your pipelines, your Supabase project. You own the stack.",
    aws: "Complete infrastructure ownership. IaC via Terraform. Every resource is versioned and auditable.",
  },
  {
    attribute: "Deployment Process",
    lovable:
      "Click-to-deploy through platform UI. Opaque. Hard to reproduce locally or debug failures.",
    github:
      "GitHub Actions CI/CD. Pull request → automated tests → staging → prod. Reproducible and observable.",
    aws: "ECS task definitions, ECR image registry, blue/green deploys. Enterprise-grade release process.",
  },
  {
    attribute: "Monthly Cost",
    lovable:
      "$700–800+ at growing usage. Platform pricing scales aggressively with team size and features.",
    github:
      "GitHub Actions (often free or ~$4/mo). Supabase Pro ($25/mo). Hosting at cost. ~$50–150/mo typical.",
    aws: "Higher baseline (~$200–500/mo minimum for ECS), but predictable and controllable at scale.",
  },
  {
    attribute: "Environment Separation",
    lovable:
      "Often none or minimal. Dev and prod share configuration. Dangerous at scale.",
    github:
      "Full dev / staging / prod separation with environment-specific secrets and deployment gates.",
    aws: "Multiple AWS accounts or VPCs per environment. Enterprise-standard isolation.",
  },
  {
    attribute: "Security Posture",
    lovable:
      "Depends on platform defaults. RLS may be misconfigured. Secrets in environment variables without audit trail.",
    github:
      "Proper RLS enforcement. GitHub Secrets management. Clear dependency audit trail. Significantly stronger baseline.",
    aws: "IAM roles, VPC network segmentation, AWS Secrets Manager, CloudTrail audit logging. Enterprise-ready.",
  },
  {
    attribute: "AI Development Workflow",
    lovable:
      "Often tightly coupled to platform-specific editor. Prompt patterns tied to platform UI.",
    github:
      "Full Claude Code integration. Clean repository structure. Prompt discipline and testing patterns established.",
    aws: "Same Claude Code workflow plus infrastructure-as-code patterns for AI-assisted Terraform.",
  },
  {
    attribute: "Scalability Ceiling",
    lovable:
      "Hits friction early. Platform limits, cost spikes, and opaque bottlenecks appear before you expect them.",
    github:
      "Handles early and mid-stage growth well. Supabase scales to millions of rows. Real ceiling is at high-concurrency workloads.",
    aws: "No practical ceiling for most SaaS products. Auto-scaling ECS, Aurora Serverless, multi-AZ. Enterprise-proven.",
  },
  {
    attribute: "Vendor Lock-in",
    lovable:
      "High. Code may use platform-specific APIs. Extraction is painful and requires professional help.",
    github:
      "Low. Standard Git workflow. Supabase is Postgres — portable. Can migrate to AWS later with minimal friction.",
    aws: "Moderate AWS dependency, fully mitigated by Terraform IaC. Stack can be reproduced or migrated.",
  },
  {
    attribute: "When to Choose",
    lovable:
      "Building the initial prototype. Validating the idea. Speed is the only priority. Do not stay here long.",
    github:
      "You have early revenue or committed users. You want ownership. Supabase is working. You're pre-series A.",
    aws: "You've outgrown Supabase's model, have enterprise customers, compliance requirements, or significant traffic.",
  },
];

export default function ArchitecturePage() {
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
            Architecture Comparison
          </h1>
          <p style={{ color: "#b8d0f0", fontSize: "1.05rem", maxWidth: "620px", lineHeight: 1.7 }}>
            Three infrastructure paths — from managed prototype to
            production-grade independence to AWS-scale infrastructure. Understand
            the tradeoffs before you decide.
          </p>
        </Container>
      </section>

      {/* Comparison Table */}
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
            Side-by-side comparison
          </div>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              color: "#1a1a1a",
              marginBottom: "0.75rem",
            }}
          >
            Three paths, three very different outcomes.
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#555", lineHeight: 1.75, maxWidth: "680px", marginBottom: "2.5rem" }}>
            Most founders start at column one. The goal is to move to column two
            — and only move to column three when you actually need it.
          </p>
          <ComparisonTable rows={comparisonRows} />
        </Container>
      </section>

      {/* When to choose each */}
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
            Decision Framework
          </div>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              color: "#1a1a1a",
              marginBottom: "2rem",
            }}
          >
            Which path is right for you?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {[
              {
                title: "Stay on Lovable/Replit if...",
                color: "#f59e0b",
                points: [
                  "You're still validating the idea",
                  "You have fewer than 10 paying customers",
                  "Speed of shipping is your only constraint",
                  "You don't yet have early revenue",
                ],
                note: "But plan your exit strategy now.",
              },
              {
                title: "Move to GitHub + CI/CD + Supabase if...",
                color: "#2563eb",
                points: [
                  "You have early revenue or committed users",
                  "You're paying $700+/month in platform costs",
                  "You're preparing for a fundraise",
                  "You want to use Claude Code professionally",
                  "Supabase is meeting your data needs",
                ],
                note: "This is the right upgrade for most founders.",
              },
              {
                title: "Move to AWS ECS + Terraform if...",
                color: "#1e40af",
                points: [
                  "You have enterprise customers with security requirements",
                  "You need SOC 2 or HIPAA compliance",
                  "You're at significant traffic and Supabase has limits",
                  "You need multi-region reliability",
                  "You're post-series A with an engineering team",
                ],
                note: "Rarely necessary pre-series A.",
              },
            ].map((card, i) => (
              <div
                key={i}
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
                    background: card.color,
                    borderRadius: "10px 0 0 10px",
                  }}
                />
                <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#1a1a1a", marginBottom: "1rem" }}>
                  {card.title}
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {card.points.map((p, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.875rem", color: "#333" }}>
                      <span style={{ color: card.color, fontWeight: 700, flexShrink: 0 }}>→</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#777",
                    fontStyle: "italic",
                    borderTop: "1px solid #f0f0f0",
                    paddingTop: "0.75rem",
                  }}
                >
                  {card.note}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Technical overview */}
      <section style={{ padding: "5rem 1.5rem", background: "#fff" }}>
        <Container size="lg">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
            <div>
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
                Our Philosophy
              </div>
              <h2
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(1.4rem, 2.5vw, 1.75rem)",
                  fontWeight: 700,
                  color: "#1a1a1a",
                  marginBottom: "1rem",
                }}
              >
                Architecture should match your stage.
              </h2>
              <p style={{ fontSize: "0.95rem", color: "#555", lineHeight: 1.75, marginBottom: "1rem" }}>
                We&apos;re not here to sell you AWS if Supabase is working. We&apos;re
                here to help you stop paying for abstraction layers you don&apos;t
                need, while making sure you own what you&apos;re building.
              </p>
              <p style={{ fontSize: "0.95rem", color: "#555", lineHeight: 1.75 }}>
                The right architecture at the wrong stage creates complexity
                that slows you down. The right architecture at the right stage
                accelerates everything.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                {
                  label: "We're pro-Supabase",
                  desc: "Supabase is an excellent production database for most SaaS apps at early and mid stage. We help you use it properly.",
                },
                {
                  label: "We're pro-AI",
                  desc: "Claude Code and AI-assisted development are the right choice for most teams. We build workflows that support it.",
                },
                {
                  label: "No overengineering",
                  desc: "We will not put you on AWS ECS if you don't need it. That would be expensive, slow, and wrong for your stage.",
                },
                {
                  label: "Clear upgrade paths",
                  desc: "Every tier is designed to make the next tier easier, not harder. Tier 1 work directly reduces Tier 3 complexity.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: "1.1rem 1.25rem",
                    background: "#f8f9fa",
                    borderRadius: "8px",
                    border: "1px solid #e9ecef",
                  }}
                >
                  <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "#1a1a1a", marginBottom: "0.3rem" }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.5 }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        headline="Not sure which path is right?"
        body="Book a 30-minute strategy call. We'll assess your current architecture and tell you exactly where you are and what your fastest path forward looks like."
        primaryLabel="Book a Strategy Call"
        primaryHref="/book"
        secondaryLabel="View Packages"
        secondaryHref="/prototype-to-production/services"
      />
    </>
  );
}
