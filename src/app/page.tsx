import type { Metadata } from "next";
import Link from "next/link";
import { Button, Container } from "@mantine/core";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessStep } from "@/components/ProcessStep";
import { FeatureList } from "@/components/FeatureList";
import classes from "./page.module.css";

export const metadata: Metadata = {
  title: "AI Engineering Partner | Hands-On AI Training for Engineering Teams",
  description:
    "Hands-on AI workshops, custom AI tools, and workflow automation for software engineering teams. Train your team to use AI effectively and see real productivity ROI.",
};

const services = [
  {
    icon: "🎯",
    title: "Team Workshops",
    description:
      "Hands-on live training built around your team's actual tools, codebase, and workflows. In-person or remote. Not theory — practical use.",
    features: [
      "Cursor and GitHub Copilot enablement",
      "Prompting for engineers",
      "AI in code review and PR workflows",
      "Risk-aware adoption patterns",
    ],
  },
  {
    icon: "🔧",
    title: "Custom AI Tools",
    description:
      "Internal AI tools built for your specific engineering workflows. Coding copilots, review assistants, documentation helpers, and dev productivity tools.",
    features: [
      "Internal copilot prototypes",
      "Review and triage assistants",
      "Documentation helpers",
      "Knowledge retrieval tools",
    ],
  },
  {
    icon: "⚡",
    title: "Workflow Automation",
    description:
      "Automate repeatable engineering and operational workflows using AI. PR summaries, release notes, ticket triage, and more.",
    features: [
      "PR summary automation",
      "Release notes generation",
      "Ticket triage workflows",
      "Internal knowledge extraction",
    ],
  },
  {
    icon: "🤝",
    title: "Ongoing Support",
    description:
      "Post-workshop support so adoption actually sticks. Weekly office hours, async Q&A, retainer advisory, or follow-up sessions.",
    features: [
      "Weekly office hours",
      "Slack/Teams support",
      "Retainer-based advisory",
      "Follow-up enablement sessions",
    ],
  },
];

const whyItMatters = [
  {
    title: "Code Generation",
    description:
      "AI writes real working code — not just snippets. Teams that learn to direct it well 10x their output on known patterns and boilerplate.",
  },
  {
    title: "Debugging",
    description:
      "AI can explain error stacks, suggest root causes, and walk through fixes faster than a Stack Overflow search. Training teams to use it right matters.",
  },
  {
    title: "Code Review",
    description:
      "AI-assisted review catches more issues and moves faster. But it requires new PR workflow patterns to avoid false confidence.",
  },
  {
    title: "Collaboration",
    description:
      "Documentation, knowledge sharing, and onboarding change fundamentally when AI can summarize and explain code in seconds.",
  },
];

const riskFeatures = [
  {
    title: "Hallucinations",
    description:
      "AI generates plausible-sounding but incorrect code. We teach teams how to validate AI output before it ships.",
  },
  {
    title: "Security",
    description:
      "AI can introduce vulnerabilities. We cover secure coding patterns, dependency risks, and what to watch for in AI-generated code.",
  },
  {
    title: "Data Privacy",
    description:
      "Many AI tools send code to third-party servers. We help teams understand what leaves the environment and how to set policy.",
  },
  {
    title: "Licensing / IP",
    description:
      "AI-generated code can have ambiguous origins. We address copyright, attribution, and enterprise IP policy considerations.",
  },
  {
    title: "Code Quality",
    description:
      "AI produces overconfident code. We build review habits and testing patterns that catch quality issues before they reach production.",
  },
  {
    title: "Compliance",
    description:
      "Regulated environments need special handling. We address HIPAA, SOC 2, and other compliance-sensitive AI adoption scenarios.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Team Assessment",
    description:
      "We start by understanding your team, tools, codebase, and current AI usage. No assumptions — a real assessment of where you are and where the gaps are.",
  },
  {
    step: "02",
    title: "Tailored Workshop or Enablement Plan",
    description:
      "Based on the discovery, we design a training and enablement plan specific to your team's workflows, tools, and goals. Not a generic workshop template.",
  },
  {
    step: "03",
    title: "Live Training & Implementation",
    description:
      "Hands-on sessions in your actual environment. Engineers leave with new skills and patterns they can apply immediately — not slides to read later.",
  },
  {
    step: "04",
    title: "Ongoing Support & Iteration",
    description:
      "Post-training support keeps adoption on track. Office hours, async Q&A, retainer advisory, or follow-up sessions — whatever fits your team's rhythm.",
  },
];

const faqItems = [
  {
    question: "What kinds of companies do you work with?",
    answer:
      "Small to mid-sized software companies — typically between 5 and 200 engineers. The ideal customer has engineering teams actively using or evaluating AI coding tools and wants to move from ad-hoc experimentation to consistent, measurable adoption. We work with remote-first and hybrid teams across the US.",
  },
  {
    question: "Are workshops delivered in person or remotely?",
    answer:
      "Both. Workshops can be delivered in person at your office or fully remote over Zoom. Most teams choose remote for convenience, but in-person sessions tend to drive higher engagement and faster behavior change. We'll recommend the right format based on your goals.",
  },
  {
    question: "Do you train teams in their actual codebase?",
    answer:
      "Yes — that's a core part of how we work. Generic AI demos don't stick. When training happens inside the team's real environment, with their actual tools and code, the skills transfer immediately to daily work.",
  },
  {
    question: "Can you help us choose between Cursor, Copilot, ChatGPT, and Claude?",
    answer:
      "Yes. We have hands-on experience with all major AI coding tools and help teams evaluate which combination fits their workflow, security requirements, and budget. We don't have a vendor affiliation — we recommend what actually works.",
  },
  {
    question: "Do you build custom internal AI tools?",
    answer:
      "Yes. Beyond workshops, we build custom AI tools tailored to your team's workflows — internal copilots, review assistants, documentation helpers, knowledge retrieval tools, and dev workflow automations. These are practical tools built for your specific environment.",
  },
  {
    question: "How do you handle AI security, privacy, and hallucination risks?",
    answer:
      "Risk-aware adoption is a core part of every engagement. We cover hallucination patterns, code quality risks, data privacy considerations, licensing and IP concerns, and secure coding with AI tools. Teams leave with practical guardrails, not just enthusiasm.",
  },
  {
    question: "Do you offer support after the workshop?",
    answer:
      "Yes. We offer weekly office hours, async Slack/Teams support, retainer-based advisory, and follow-up enablement sessions. Adoption sticks better with continued support, and we make it easy to keep momentum after the initial training.",
  },
  {
    question: "How quickly can a team start seeing value?",
    answer:
      "Most teams report measurable improvements in their first week of applying the training. The fastest gains are on repetitive tasks — boilerplate, documentation, PR summaries, and test writing. The deeper gains in code architecture and review workflows take 3–6 weeks to fully develop.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1 — Hero */}
      <section className={classes.hero}>
        <div className={classes.heroInner}>
          <div className={classes.heroEyebrow}>AI Engineering Partner</div>
          <h1 className={classes.heroH1}>
            Train Your Engineering Team to Use AI Effectively
          </h1>
          <p className={classes.heroSubheadline}>
            Hands-on workshops, custom AI tools, and workflow automation for software companies. In-person or remote.
          </p>
          <p className={classes.heroSupporting}>
            Move from AI experimentation to operational engineering productivity.
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
              Book a Discovery Call
            </Button>
            <Button
              component={Link}
              href="/services"
              variant="outline"
              color="gray"
              size="lg"
              radius="md"
              styles={{ root: { borderColor: "rgba(255,255,255,0.3)", color: "#ccc" } }}
            >
              Get a Workshop Plan
            </Button>
          </div>
        </div>
      </section>

      {/* 2 — Credibility */}
      <section className={classes.sectionAlt}>
        <div className={classes.sectionInner}>
          <div className={classes.sectionLabel}>Trusted By Engineering Teams</div>
          <h2 className={classes.sectionH2}>
            Built for engineering leaders who need real results.
          </h2>
          <p className={classes.sectionBody}>
            Workshops and engagements across software teams at growth-stage companies. Client logos and testimonials coming soon.
          </p>
          <div className={classes.credibilityGrid}>
            <div className={classes.credStat}>
              <div className={classes.credNumber}>50%+</div>
              <div className={classes.credLabel}>Estimated reduction in time spent on repetitive engineering tasks</div>
            </div>
            <div className={classes.credStat}>
              <div className={classes.credNumber}>2x</div>
              <div className={classes.credLabel}>Faster onboarding to AI tools across the engineering team</div>
            </div>
            <div className={classes.credStat}>
              <div className={classes.credNumber}>Week 1</div>
              <div className={classes.credLabel}>When engineers typically start seeing measurable productivity gains</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — What We Do */}
      <section className={classes.section}>
        <div className={classes.sectionInner}>
          <div className={classes.sectionLabel}>What We Do</div>
          <h2 className={classes.sectionH2}>
            Four ways we accelerate your team&apos;s AI adoption.
          </h2>
          <p className={classes.sectionBody}>
            Workshops, custom tools, workflow automation, and ongoing support — designed for software engineering teams that want real productivity gains, not generic AI overviews.
          </p>
          <div className={classes.serviceGrid}>
            {services.map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Why AI Changes Software Development (dark) */}
      <section className={classes.sectionDark}>
        <div className={classes.sectionInner} style={{ position: "relative" }}>
          <div className={classes.sectionLabelLight}>Why This Matters</div>
          <h2 className={classes.sectionH2Light}>
            AI doesn&apos;t just speed up coding. It changes the entire engineering workflow.
          </h2>
          <p className={classes.sectionBodyLight} style={{ marginBottom: "2.5rem" }}>
            Most teams are still treating AI like a search engine or autocomplete. The real leverage is in changing how code is written, reviewed, debugged, and shipped.
          </p>
          <FeatureList features={whyItMatters} columns={2} dark />
        </div>
      </section>

      {/* 5 — Service Offering Detail */}
      <section className={classes.sectionAlt}>
        <div className={classes.sectionInner}>
          <div className={classes.sectionLabel}>Our Engagements</div>
          <h2 className={classes.sectionH2}>
            Practical. Fast-moving. Tied to your actual work.
          </h2>
          <p className={classes.sectionBody} style={{ marginBottom: "2.5rem" }}>
            Workshops are designed around your team&apos;s real tools and codebases — not generic demos. Every engagement includes a tailored plan, live training, and follow-on support.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {[
              {
                title: "Team Workshops",
                body: "Live workshops — in-person or remote — built around your real codebase, tools, and workflows. Engineers leave with practical skills they can apply that day.",
              },
              {
                title: "Custom AI Tools",
                body: "We design and build internal AI tools tailored to your specific engineering workflows. Not off-the-shelf — tools that actually fit how your team works.",
              },
              {
                title: "Workflow Automation",
                body: "We identify and automate your highest-ROI engineering workflows using AI. Fast turnaround, measurable time savings, built to work in your real environment.",
              },
              {
                title: "Ongoing Support",
                body: "Post-workshop and post-implementation support keeps adoption on track. Office hours, async Q&A, retainer advisory, or follow-up sessions — whatever fits.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "1.5rem",
                  background: "#fff",
                  border: "1px solid #e9ecef",
                  borderRadius: "10px",
                  borderTop: "3px solid #2563eb",
                }}
              >
                <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#1a1a1a", marginBottom: "0.5rem" }}>
                  {item.title}
                </div>
                <div style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.65 }}>
                  {item.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5b — Productized Offering: Prototype to Production */}
      <section className={classes.sectionDark}>
        <Container size="lg" style={{ position: "relative" }}>
          <div className={classes.sectionLabelLight}>Productized Offering</div>
          <h2 className={classes.sectionH2Light}>
            Prototype to Production.
          </h2>
          <p className={classes.sectionBodyLight} style={{ marginBottom: "2rem", maxWidth: "720px" }}>
            A structured upgrade path for AI-built apps (Lovable, Replit, and
            similar) that need ownership, security, and a scalable foundation.
            Fixed-scope engagements from code independence to full
            AWS-scale architecture.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
              marginBottom: "2.5rem",
            }}
          >
            {[
              { title: "Code ownership + CI/CD", body: "Extract your code from managed platforms. Professional GitHub Actions pipelines with real environment separation." },
              { title: "Security & RLS hardening", body: "Supabase row-level security audits, secrets management review, and abuse prevention baselines." },
              { title: "Cut the platform tax", body: "Stop paying $700–800+/month in abstraction-layer overhead. The upgrade often pays for itself in Year 1." },
              { title: "Clear path to scale", body: "Three tiers — Independence ($7.5k), Production Readiness ($3.5k), and Scale Architecture (from $18k)." },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "1.25rem",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(37, 99, 235, 0.2)",
                  borderRadius: "10px",
                }}
              >
                <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#ffffff", marginBottom: "0.4rem" }}>
                  {item.title}
                </div>
                <div style={{ fontSize: "0.85rem", color: "#b0c4e8", lineHeight: 1.6 }}>
                  {item.body}
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Button
              component={Link}
              href="/prototype-to-production"
              variant="filled"
              color="brand"
              size="md"
              radius="md"
            >
              Explore Prototype to Production
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
        </Container>
      </section>

      {/* 6 — ROI / Outcomes */}
      <section className={classes.section}>
        <div className={classes.sectionInner}>
          <div className={classes.sectionLabel}>Return on Investment</div>
          <h2 className={classes.sectionH2}>
            Engineering productivity gains happen fast when training is real.
          </h2>
          <p className={classes.sectionBody}>
            The fastest gains come from training tied to actual daily work — not theoretical AI concepts. Teams report meaningful improvements in their first week.
          </p>
          <div className={classes.roiGrid}>
            <div className={classes.roiCard}>
              <div className={classes.roiNumber}>40–60%</div>
              <div className={classes.roiLabel}>Estimated time reduction on routine coding and documentation tasks</div>
            </div>
            <div className={classes.roiCard}>
              <div className={classes.roiNumber}>Week 1</div>
              <div className={classes.roiLabel}>When most teams begin seeing measurable productivity improvements</div>
            </div>
            <div className={classes.roiCard}>
              <div className={classes.roiNumber}>4</div>
              <div className={classes.roiLabel}>Engagement types: workshops, custom tools, workflow automation, ongoing support</div>
            </div>
          </div>
          <div className={classes.outcomesGrid} style={{ marginTop: "3rem" }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "#333", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                What teams gain
              </div>
              <ul className={classes.outcomesBullets}>
                {[
                  "Faster feature delivery",
                  "Less time on boilerplate and repetitive code",
                  "Improved PR quality and review speed",
                  "More consistent AI usage across the team",
                  "Reduction in knowledge silos through AI-assisted documentation",
                  "Better onboarding through AI-readable codebases",
                ].map((item, i) => (
                  <li key={i} className={classes.outcomesBullet}>
                    <span className={classes.outcomesCheck}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              style={{
                padding: "2rem",
                background: "linear-gradient(135deg, #eff6ff, #dbeafe)",
                border: "1px solid rgba(37, 99, 235, 0.25)",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "2.5rem",
                  fontWeight: 700,
                  color: "#2563eb",
                  lineHeight: 1,
                  marginBottom: "0.25rem",
                }}
              >
                Real ROI
              </div>
              <div style={{ fontSize: "0.875rem", color: "#555", marginBottom: "1.25rem" }}>
                from hands-on AI adoption
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
      </section>

      {/* 7 — Risk-Aware Adoption */}
      <section className={classes.sectionAlt}>
        <div className={classes.sectionInner}>
          <div className={classes.sectionLabel}>Risk-Aware Adoption</div>
          <h2 className={classes.sectionH2}>
            Good AI adoption includes the risks, not just the wins.
          </h2>
          <p className={classes.sectionBody} style={{ marginBottom: "2.5rem" }}>
            We train teams on what AI does well — and where it fails. A team that understands hallucinations, licensing limits, and privacy risks adopts AI more confidently and sustainably.
          </p>
          <FeatureList features={riskFeatures} columns={3} />
        </div>
      </section>

      {/* 8 — How Engagements Work */}
      <section className={classes.section}>
        <div className={classes.sectionInner}>
          <div className={classes.sectionLabel}>How It Works</div>
          <h2 className={classes.sectionH2}>
            Four steps from first contact to operational AI adoption.
          </h2>
          <p className={classes.sectionBody} style={{ marginBottom: "2.5rem" }}>
            Every engagement starts with a real assessment and ends with ongoing support. No generic playbooks, no hand-wavy timelines.
          </p>
          <div className={classes.processGrid}>
            {processSteps.map((step, i) => (
              <ProcessStep key={i} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* 9 — FAQ */}
      <section className={classes.sectionAlt}>
        <div className={classes.sectionInner}>
          <div className={classes.sectionLabel}>Frequently Asked Questions</div>
          <h2 className={classes.sectionH2} style={{ marginBottom: "2rem" }}>
            Common questions from engineering leaders.
          </h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* 10 — CTA */}
      <CTASection
        headline="Ready to take your engineering team's AI adoption seriously?"
        body="Book a discovery call. We'll assess where your team is, identify the highest-ROI opportunities, and give you a practical plan — no commitment required."
        primaryLabel="Book a Discovery Call"
        primaryHref="/book"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
