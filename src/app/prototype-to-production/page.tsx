import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@mantine/core";
import { PricingTierCard } from "@/components/PricingTierCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import classes from "./page.module.css";

export const metadata: Metadata = {
  title: "From AI Prototype to Production-Grade SaaS",
  description:
    "Prototype to Production by AI Engineering Partner. A structured upgrade path for AI-built apps — ownership, security, and scalable infrastructure. Often reduces monthly overhead.",
  openGraph: {
    title: "Prototype to Production | AI Engineering Partner",
    description:
      "From AI Prototype to Production-Grade SaaS. Senior engineering optimized for the AI era.",
  },
};

const problems = [
  "Your business lives inside a platform you don't control",
  "Deployments are opaque and hard to reproduce",
  "Security gaps go unnoticed — especially database permissions",
  "Costs creep up as usage grows",
  "You lack staging/production environment discipline",
];

const solutionFeatures = [
  {
    title: "Code Ownership",
    description:
      "Extract your code from managed platforms. You own every line, every deploy, every decision.",
  },
  {
    title: "Professional CI/CD",
    description:
      "GitHub Actions pipelines with environment separation — dev, staging, prod — deployed repeatably.",
  },
  {
    title: "Security Posture",
    description:
      "Row-level security audits, secrets management review, and abuse prevention hardening.",
  },
  {
    title: "AI Velocity Preserved",
    description:
      "Claude Code workflow setup and prompt discipline so you keep shipping fast — just with a real foundation.",
  },
  {
    title: "Cost Clarity",
    description:
      "Cost modeling at 1k, 10k, and 100k users so you understand your economics before you hit scale.",
  },
  {
    title: "Clear Scale Path",
    description:
      "Architecture that grows with you — from Supabase to RDS/Aurora to AWS ECS when you actually need it.",
  },
];

const faqItems = [
  {
    question: "What if I'm happy with Supabase?",
    answer:
      "We're pro-Supabase. Most Tier 1 and Tier 2 engagements keep Supabase in the stack. We help you deploy it properly — with row-level security, real environment separation, and a CI/CD pipeline — instead of running everything through a managed platform's abstraction layer.",
  },
  {
    question: "Will I lose my AI development velocity?",
    answer:
      "No. The entire framework is designed to preserve your vibe-coding speed while adding the infrastructure discipline that protects it. We set up Claude Code workflows and prompt patterns so you can keep shipping fast — just with a real foundation underneath.",
  },
  {
    question: "How long does Tier 1 take?",
    answer:
      "Typically 2–4 weeks, depending on your codebase complexity and responsiveness during the process. The Lean version is faster — usually closer to 2 weeks.",
  },
  {
    question: "Is Tier 3 (AWS) always necessary?",
    answer:
      "Rarely at early stage. Most founders are well-served by Tier 1 or Tier 2. AWS ECS and Terraform become relevant when you're managing significant traffic, have enterprise security requirements, or need multi-region reliability. We'll tell you honestly where you are.",
  },
  {
    question: "What's the difference between Standard and Lean for Tier 1?",
    answer:
      "The Lean version ($5,000) is a faster, focused engagement: single environment, basic CI/CD, minimal observability — good for pre-revenue or pre-launch situations. Standard ($7,500) includes full environment separation (dev/staging/prod), deeper CI/CD work, observability integration points, and two live training sessions.",
  },
  {
    question: "When does the investment pay off?",
    answer:
      "For teams currently spending $700–800+/month on managed platform overhead, meaningful monthly savings can begin immediately after migration. The infrastructure upgrade typically pays for itself within the first year, with improved reliability and security as compounding benefits.",
  },
  {
    question: "What if I'm pre-revenue?",
    answer:
      "The Lean version of Tier 1 ($5,000) is a reasonable pre-revenue investment if you're preparing for a fundraise or a serious launch. Tier 2 and Tier 3 are better suited once you have some revenue or have committed customers.",
  },
  {
    question: "Do you offer ongoing support after the engagement?",
    answer:
      "Yes. Both a Fractional CTO Lite ($1,500/month) and full Fractional CTO ($3,500/month) are available for ongoing technical leadership, strategy, and architectural guidance after the initial engagement.",
  },
];

const differentiators = [
  {
    title: "Pro-AI, not anti-AI",
    body: "We embrace AI-assisted development. We're here to give it a real foundation, not replace it with traditional consulting overhead.",
  },
  {
    title: "Pragmatic scaling",
    body: "No overengineering. We match architecture to your actual stage — not the enterprise architecture someone sold you.",
  },
  {
    title: "Clear deliverables",
    body: "Fixed-scope packages with defined outcomes. No retainer-first discovery loops. You know what you're getting.",
  },
  {
    title: "Built for founders",
    body: "Calm, direct, senior-engineer communication. No bureaucracy. No unnecessary meetings. Just forward progress.",
  },
];

export default function LandingPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className={classes.hero}>
        <div className={classes.heroInner}>
          <span className={classes.heroEyebrow}>
            Prototype to Production · AI Engineering Partner
          </span>
          <h1 className={classes.heroH1}>
            From AI Prototype to<br />Production-Grade SaaS
          </h1>
          <p className={classes.heroSubheadline}>
            A structured upgrade path for AI-built apps that need ownership,
            security, and a scalable foundation.
          </p>
          <p className={classes.heroSupporting}>
            Many teams reduce unnecessary monthly overhead while gaining stronger
            architecture and deployment discipline.
          </p>
          <div className={classes.heroActions}>
            <Button
              component={Link}
              href="/book"
              variant="filled"
              color="brand"
              size="lg"
              radius="md"
            >
              Book a Strategy Call
            </Button>
            <Button
              component={Link}
              href="/prototype-to-production/services"
              variant="outline"
              size="lg"
              radius="md"
              styles={{
                root: {
                  borderColor: "rgba(255,255,255,0.3)",
                  color: "#d0d0d0",
                },
              }}
            >
              View Packages
            </Button>
          </div>
        </div>
      </section>

      {/* ── Problem ────────────────────────────────────────── */}
      <section className={classes.sectionAlt}>
        <div className={classes.sectionInner}>
          <div className={classes.sectionLabel}>The Problem</div>
          <h2 className={classes.sectionH2}>
            Vibe coding ships product.<br />Platforms ship lock-in.
          </h2>
          <p className={classes.sectionBody}>
            Managed development platforms got your product to market fast —
            that&apos;s the point. But as you grow, the tradeoffs become
            real.
          </p>
          <div className={classes.problemGrid}>
            {problems.map((problem, i) => (
              <div key={i} className={classes.problemItem}>
                <span className={classes.problemIcon}>✕</span>
                <span className={classes.problemText}>{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solution ───────────────────────────────────────── */}
      <section className={classes.section}>
        <div className={classes.sectionInner}>
          <div className={classes.sectionLabel}>The Solution</div>
          <h2 className={classes.sectionH2}>
            Keep the speed. Add a real foundation.
          </h2>
          <p className={classes.sectionBody} style={{ marginBottom: "2.5rem" }}>
            Prototype to Production extracts your code, establishes a
            professional workflow (GitHub + CI/CD), and hardens the backend —
            so you can ship confidently.{" "}
            <strong>You don&apos;t lose velocity. You gain ownership and clarity.</strong>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {solutionFeatures.map((feature, i) => (
              <div
                key={i}
                style={{
                  position: "relative",
                  padding: "1.5rem 1.5rem 1.5rem 2.25rem",
                  background: "#ffffff",
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
                  style={{
                    fontWeight: 600,
                    color: "#1a1a1a",
                    marginBottom: "0.4rem",
                    fontSize: "0.95rem",
                  }}
                >
                  {feature.title}
                </div>
                <div style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.6 }}>
                  {feature.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Platform Tax ───────────────────────────────────── */}
      <section className={classes.sectionDark}>
        <div className={classes.sectionInner} style={{ position: "relative" }}>
          <div className={classes.sectionLabel}>Platform Economics</div>
          <h2 className={classes.sectionH2Light}>
            Stop Paying Platform Tax.<br />Start Owning Your Infrastructure.
          </h2>
          <div className={classes.taxGrid}>
            <div>
              <p className={classes.sectionBodyLight} style={{ marginBottom: "1.75rem" }}>
                Many AI-enabled founders are spending $700–$800+ per month on
                managed development platforms. Most early-stage SaaS products
                don&apos;t need that level of abstraction.
              </p>
              <p className={classes.sectionBodyLight} style={{ marginBottom: "1.75rem" }}>
                Prototype to Production removes unnecessary platform layers and
                replaces them with a clean, professional stack.
              </p>
              <ul className={classes.taxBullets}>
                {[
                  "Improved deployment reliability",
                  "Proper environment separation",
                  "Stronger security posture",
                  "Long-term scalability",
                  "You keep AI development velocity",
                  "You gain infrastructure discipline",
                ].map((item, i) => (
                  <li key={i} className={classes.taxBullet}>
                    <span className={classes.taxCheck}>✓</span>
                    <span style={{ color: "#b0c4e8", fontSize: "0.9rem" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className={classes.taxHighlight}>
                <div className={classes.taxHighlightAmount}>$700–800+</div>
                <div className={classes.taxHighlightLabel}>
                  Typical monthly managed platform spend
                </div>
                <div
                  style={{
                    height: "1px",
                    background: "rgba(37, 99, 235, 0.2)",
                    margin: "1.25rem 0",
                  }}
                />
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "#444",
                    lineHeight: 1.7,
                  }}
                >
                  After migration, many teams see meaningful reductions in monthly
                  overhead — while running a more reliable, more secure, more
                  controllable stack.
                </div>
                <div
                  style={{
                    marginTop: "1.25rem",
                    padding: "1rem",
                    background: "rgba(37, 99, 235, 0.06)",
                    borderRadius: "8px",
                    border: "1px solid rgba(37, 99, 235, 0.2)",
                  }}
                >
                  <div
                    style={{ fontWeight: 700, color: "#1a1a1a", fontSize: "0.875rem", marginBottom: "0.25rem" }}
                  >
                    The upgrade often pays for itself in Year 1.
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#666" }}>
                    Platform savings compound monthly. Infrastructure quality
                    compounds long-term.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ROI ────────────────────────────────────────────── */}
      <section className={classes.section}>
        <div className={classes.sectionInner}>
          <div className={classes.sectionLabel}>Return on Investment</div>
          <h2 className={classes.sectionH2}>
            Often pays for itself in year one.
          </h2>
          <p className={classes.sectionBody} style={{ marginBottom: "0" }}>
            For teams overspending on managed platforms, reducing unnecessary
            overhead can meaningfully offset the upgrade cost — while increasing
            control, quality, and long-term scalability.
          </p>
          <div className={classes.roiGrid}>
            <div className={classes.roiCard}>
              <div className={classes.roiNumber}>$700+</div>
              <div className={classes.roiLabel}>
                Typical monthly platform spend before migration
              </div>
            </div>
            <div className={classes.roiCard}>
              <div className={classes.roiNumber}>Year 1</div>
              <div className={classes.roiLabel}>
                When the upgrade typically pays for itself through monthly savings
              </div>
            </div>
            <div className={classes.roiCard}>
              <div className={classes.roiNumber}>3 Paths</div>
              <div className={classes.roiLabel}>
                Structured tiers from independence to full AWS-scale architecture
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ────────────────────────────────────────── */}
      <section className={classes.sectionAlt} id="pricing">
        <div className={classes.sectionInner}>
          <div className={classes.sectionLabel}>Packages</div>
          <h2 className={classes.sectionH2}>
            Three paths to production-ready.
          </h2>
          <p
            className={classes.sectionBody}
            style={{ marginBottom: "2.5rem" }}
          >
            Fixed-scope engagements with defined outcomes. No discovery
            retainers, no open-ended hourly billing.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
              gap: "1.5rem",
              alignItems: "stretch",
            }}
          >
            <PricingTierCard
              name="Independence Package"
              tagline="Own your code. Cut platform tax. Keep shipping fast."
              price="$7,500"
              priceNote="Lean version available at $5,000"
              description="The foundation upgrade. Removes unnecessary abstraction layers and replaces them with clean, professional infrastructure. Often reduces monthly overhead while increasing control."
              bulletPoints={[
                "Code extraction & cleanup",
                "Migration to GitHub",
                "Repository optimized for AI-assisted dev",
                "Claude Code workflow setup",
                "CI/CD via GitHub Actions",
                "Dev / staging / prod environment separation",
                "Supabase production deployment",
                "Basic observability integration",
                "Documentation + 2 training sessions",
              ]}
              ctaLabel="Get Started"
              ctaHref="/book"
            />
            <PricingTierCard
              name="Production Readiness"
              tagline="Find the risks before your customers do."
              price="$3,500"
              priceNote="+ $2,500/week for optional implementation sprint"
              description="A comprehensive architecture and security audit. Delivered as a 10–20 page written report with risk scoring, prioritized roadmap, and effort estimates."
              bulletPoints={[
                "Data model review",
                "Index & performance audit",
                "Auth model analysis",
                "Edge function boundary review",
                "Vendor lock-in assessment",
                "Cost modeling (1k / 10k / 100k users)",
                "Supabase RLS audit",
                "Secrets management review",
                "Abuse prevention checklist",
              ]}
              ctaLabel="Request Audit"
              ctaHref="/book"
              featured
              badge="Most Popular"
            />
            <PricingTierCard
              name="Scale Architecture"
              tagline="Build the system you won't have to rebuild later."
              price="From $18,000"
              priceNote="Typical range $18k–$35k depending on complexity"
              description="Full AWS path. Terraform-managed infrastructure, ECS Fargate, VPC + IAM, RDS/Aurora, multi-environment CI/CD, and monitoring baseline."
              bulletPoints={[
                "Dockerization",
                "AWS ECS Fargate deployment",
                "Terraform-managed infrastructure",
                "VPC + IAM configuration",
                "RDS/Aurora (or hybrid path)",
                "Multi-environment CI/CD",
                "Monitoring + alerting baseline",
                "Optional Next.js migration (+$6k–$15k)",
                "$2,000 credit if Tier 1/2 completed first",
              ]}
              ctaLabel="Discuss Scale Plan"
              ctaHref="/book"
            />
          </div>

          <div
            style={{
              marginTop: "2rem",
              padding: "1.25rem 1.5rem",
              background: "#fff",
              border: "1px solid #e9ecef",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: 1 }}>
              <div
                style={{ fontWeight: 700, fontSize: "0.95rem", color: "#1a1a1a", marginBottom: "0.2rem" }}
              >
                Bundle Incentive
              </div>
              <div style={{ fontSize: "0.875rem", color: "#555" }}>
                Combine Independence Package + Production Readiness and receive a
                $1,000 credit. Add Scale Architecture and receive an additional
                $2,000 credit.
              </div>
            </div>
            <Button
              component={Link}
              href="/prototype-to-production/services"
              variant="light"
              color="brand"
              radius="md"
            >
              See Full Details
            </Button>
          </div>
        </div>
      </section>

      {/* ── Why Different ──────────────────────────────────── */}
      <section className={classes.section}>
        <div className={classes.sectionInner}>
          <div className={classes.sectionLabel}>Why This Is Different</div>
          <h2 className={classes.sectionH2}>
            Senior engineering — optimized for the AI era.
          </h2>
          <p className={classes.sectionBody} style={{ marginBottom: "2.5rem" }}>
            Not anti-AI. Not generic dev agency. Not enterprise bureaucracy.
          </p>
          <div className={classes.differentiatorGrid}>
            {differentiators.map((d, i) => (
              <div key={i} className={classes.differentiator}>
                <div className={classes.differentiatorTitle}>{d.title}</div>
                <div className={classes.differentiatorBody}>{d.body}</div>
              </div>
            ))}
          </div>

          {/* Retainers callout */}
          <div
            style={{
              marginTop: "2rem",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.25rem",
            }}
          >
            {[
              {
                label: "Fractional CTO Lite",
                price: "$1,500/month",
                desc: "Ongoing architecture guidance and technical strategy. Monthly check-ins, async support.",
              },
              {
                label: "Fractional CTO",
                price: "$3,500/month",
                desc: "Deep technical leadership. Active involvement in planning, hiring, architecture decisions, and engineering culture.",
              },
            ].map((r, i) => (
              <div
                key={i}
                style={{
                  padding: "1.5rem",
                  background: "#f8f9fa",
                  border: "1px solid #e9ecef",
                  borderRadius: "10px",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.5rem" }}
                >
                  <span style={{ fontWeight: 700, fontSize: "0.95rem", color: "#1a1a1a" }}>
                    {r.label}
                  </span>
                  <span
                    style={{ fontFamily: "Georgia, serif", fontWeight: 700, color: "#2563eb", fontSize: "1.1rem" }}
                  >
                    {r.price}
                  </span>
                </div>
                <p style={{ fontSize: "0.875rem", color: "#555", margin: 0, lineHeight: 1.6 }}>
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────── */}
      <section className={classes.sectionAlt}>
        <div className={classes.sectionInner}>
          <div className={classes.sectionLabel}>Common Questions</div>
          <h2 className={classes.sectionH2} style={{ marginBottom: "2rem" }}>
            Questions, answered.
          </h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────────── */}
      <CTASection
        headline="Ready to keep shipping — without platform lock-in?"
        body="Book a call and we'll map your fastest path from prototype to production-grade — including a cost forecast and upgrade plan."
        primaryLabel="Book a Strategy Call"
        primaryHref="/book"
        secondaryLabel="View Packages"
        secondaryHref="/prototype-to-production/services"
      />
    </>
  );
}
