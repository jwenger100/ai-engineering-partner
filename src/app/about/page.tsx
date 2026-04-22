import type { Metadata } from "next";
import Link from "next/link";
import { Button, Container } from "@mantine/core";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About | AI Engineering Partner",
  description:
    "A practical, founder-led consulting practice helping software teams adopt AI in ways that improve output, reduce risk, and actually stick.",
};

const values = [
  {
    title: "Senior engineering, not generic AI training",
    desc: "You work with someone who has deep software engineering experience — not a marketer who learned to prompt. Every workshop and recommendation is grounded in real engineering judgment.",
  },
  {
    title: "Practical, not theoretical",
    desc: "Every workshop and engagement is designed around real work. We train teams in their actual codebases and workflows. If it doesn't translate to daily work, it doesn't belong in the training.",
  },
  {
    title: "Risk-aware, not reckless",
    desc: "Good AI adoption includes understanding the limits. We train teams to use AI confidently — with appropriate guardrails for hallucinations, security, privacy, and licensing.",
  },
  {
    title: "Adoption that sticks",
    desc: "Workshops without follow-on support rarely produce lasting change. Our engagements include post-training support so skills compound over time rather than fading after week two.",
  },
];

const expertise = [
  "AI-assisted coding workflows (Cursor, Copilot, Claude)",
  "Engineering workflow automation",
  "Custom internal AI tool development",
  "PR and code review adaptation",
  "Prompt engineering for engineers",
  "AI risk and security awareness",
  "Hallucination patterns and mitigation",
  "Developer productivity measurement",
  "Hands-on training and enablement",
  "Remote and in-person delivery",
];

export default function AboutPage() {
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
            About
          </h1>
          <p style={{ color: "#b0c4e8", fontSize: "1.05rem", maxWidth: "580px", lineHeight: 1.7 }}>
            A practical, founder-led consulting practice helping software teams adopt AI in ways that improve output, reduce risk, and actually stick.
          </p>
        </Container>
      </section>

      {/* Main section */}
      <section style={{ padding: "5rem 1.5rem", background: "#fff" }}>
        <Container size="lg">
          <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: "4rem", alignItems: "start" }}>
            <div>
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
                The Practice
              </div>
              <h2
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 700,
                  color: "#1a1a1a",
                  marginBottom: "1.5rem",
                }}
              >
                Built on the belief that AI adoption requires real engineering judgment, not hype.
              </h2>
              <p style={{ fontSize: "0.95rem", color: "#444", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                AI Engineering Partner is a founder-led practice focused on helping software companies move from AI experimentation to real engineering productivity. We work with CTOs, engineering managers, and technical founders who know AI matters but haven&apos;t fully operationalized it.
              </p>
              <p style={{ fontSize: "0.95rem", color: "#444", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                AI coding tools like Cursor, GitHub Copilot, and Claude have genuinely changed how software gets built. But realizing the productivity gains requires more than access to the tools — it requires training, workflow changes, and the right guardrails in place.
              </p>
              <p style={{ fontSize: "0.95rem", color: "#444", lineHeight: 1.8 }}>
                We combine hands-on workshops, custom tooling, and ongoing support to help engineering teams get real, measurable ROI from AI — not just a few people using it inconsistently while the rest of the team waits to see if it&apos;s worth the effort.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div
                style={{
                  padding: "2rem",
                  background: "#f8f9fa",
                  border: "1px solid #e9ecef",
                  borderRadius: "10px",
                }}
              >
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    color: "#555",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "1rem",
                  }}
                >
                  Areas of Expertise
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                  {expertise.map((item, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "#333" }}>
                      <span style={{ color: "#2563eb", fontWeight: 700, flexShrink: 0 }}>→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                style={{
                  padding: "1.5rem",
                  background: "#eff6ff",
                  border: "1px solid rgba(37, 99, 235, 0.2)",
                  borderRadius: "10px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontFamily: "Georgia, serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a1a1a", marginBottom: "0.5rem" }}>
                  Remote-first.
                </div>
                <div style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                  Working with software teams across the US. In-person available for workshops.
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
                  Book a Discovery Call
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
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
            How We Work
          </div>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              color: "#1a1a1a",
              marginBottom: "2.5rem",
            }}
          >
            What you can expect.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {values.map((v, i) => (
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
                    background: "linear-gradient(180deg, #2563eb, #3b82f6)",
                    borderRadius: "10px 0 0 10px",
                  }}
                />
                <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#1a1a1a", marginBottom: "0.5rem" }}>
                  {v.title}
                </div>
                <div style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.65 }}>
                  {v.desc}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What we are / What we're not */}
      <section style={{ padding: "5rem 1.5rem", background: "#fff" }}>
        <Container size="lg">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
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
                What We Are
              </div>
              <h3
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "#1a1a1a",
                  marginBottom: "1.25rem",
                }}
              >
                AI Engineering Partner is:
              </h3>
              {[
                "Hands-on AI enablement for engineering teams",
                "Practical, codebase-specific training",
                "Custom AI tool development",
                "Workflow automation specialists",
                "Risk-aware adoption advocates",
                "Fast, high-signal engagements",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.9rem", color: "#333", marginBottom: "0.5rem" }}>
                  <span style={{ color: "#2563eb", fontWeight: 700 }}>✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div>
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#888",
                  marginBottom: "0.5rem",
                }}
              >
                What We&apos;re Not
              </div>
              <h3
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "#1a1a1a",
                  marginBottom: "1.25rem",
                }}
              >
                It is NOT:
              </h3>
              {[
                "Generic AI hype consulting",
                "Course platform or LMS provider",
                "No-code automation agency",
                "Anti-AI or anti-tool vendor",
                "Enterprise bureaucracy",
                "Open-ended hourly billing",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.9rem", color: "#555", marginBottom: "0.5rem" }}>
                  <span style={{ color: "#aaa", fontWeight: 700 }}>✕</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        headline="Ready to work together?"
        body="Book a 30-minute discovery call. We'll discuss your team's current AI usage, goals, and where we can help the most."
        primaryLabel="Book a Discovery Call"
        primaryHref="/book"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
