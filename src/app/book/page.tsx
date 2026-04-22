import type { Metadata } from "next";
import { Container } from "@mantine/core";

export const metadata: Metadata = {
  title: "Book a Discovery Call | AI Engineering Partner",
  description:
    "Schedule a 30-minute discovery call. We'll assess your team's AI usage, identify the highest-ROI opportunities, and give you a practical plan — no commitment required.",
};

export default function BookPage() {
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
            background: "radial-gradient(ellipse at 50% 60%, rgba(37,99,235,0.12) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <Container size="md" style={{ position: "relative", textAlign: "center" }}>
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
              marginBottom: "1.25rem",
            }}
          >
            Ready to Explore a Partnership?
          </h1>
          <p
            style={{
              color: "#b0c4e8",
              fontSize: "1.05rem",
              maxWidth: "540px",
              lineHeight: 1.75,
              margin: "0 auto",
            }}
          >
            Book a 30-minute discovery call. We&apos;ll assess your team&apos;s AI usage, identify the
            highest-ROI opportunities, and give you a practical plan — no commitment required.
          </p>
        </Container>
      </section>

      {/* What to expect */}
      <section style={{ padding: "4rem 1.5rem", background: "#fff" }}>
        <Container size="lg">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
            {/* What happens on the call */}
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
                What to Expect
              </div>
              <h2
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(1.4rem, 2.5vw, 1.75rem)",
                  fontWeight: 700,
                  color: "#1a1a1a",
                  marginBottom: "1.5rem",
                }}
              >
                A direct, 30-minute conversation.
              </h2>
              {[
                {
                  step: "01",
                  title: "Your current setup",
                  desc: "We'll talk through your team size, tools, current AI usage, and what's working or not. No judgment.",
                },
                {
                  step: "02",
                  title: "Your goals",
                  desc: "What does good AI adoption look like for your team? Productivity? Consistency? Custom tooling? We'll align on what matters.",
                },
                {
                  step: "03",
                  title: "Honest recommendation",
                  desc: "We'll tell you what kind of engagement makes sense, what the tradeoffs are, and whether now is the right time. If it's not, we'll say so.",
                },
                {
                  step: "04",
                  title: "Clear next steps",
                  desc: "If there's a fit, we'll outline what an engagement looks like, what it costs, and what outcomes you can expect.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "1.25rem",
                    marginBottom: "1.5rem",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "rgba(37, 99, 235, 0.1)",
                      border: "1px solid rgba(37, 99, 235, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: "#2563eb",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#1a1a1a", marginBottom: "0.25rem" }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.6 }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick details */}
            <div>
              <div
                style={{
                  padding: "2rem",
                  background: "#f8f9fa",
                  border: "1px solid #e9ecef",
                  borderRadius: "12px",
                  marginBottom: "1.25rem",
                }}
              >
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    color: "#555",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "1.25rem",
                  }}
                >
                  Call Details
                </div>
                {[
                  { label: "Duration", value: "30 minutes" },
                  { label: "Format", value: "Video call (Zoom or Google Meet)" },
                  { label: "Cost", value: "Free — no commitment required" },
                  { label: "Availability", value: "Usually within 2–4 business days" },
                ].map((detail, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      padding: "0.75rem 0",
                      borderBottom: i < 3 ? "1px solid #e9ecef" : "none",
                    }}
                  >
                    <span style={{ fontSize: "0.875rem", color: "#888" }}>{detail.label}</span>
                    <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "#1a1a1a" }}>
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  padding: "1.25rem",
                  background: "#eff6ff",
                  border: "1px solid rgba(37, 99, 235, 0.2)",
                  borderRadius: "10px",
                }}
              >
                <div style={{ fontSize: "0.875rem", color: "#444", lineHeight: 1.65 }}>
                  Come prepared to describe your team size, the AI tools you&apos;re currently using or
                  evaluating, and what outcomes you&apos;re hoping to achieve. The more context you can
                  share, the more useful the call will be.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Calendar Embed Section */}
      <section style={{ padding: "4rem 1.5rem 6rem", background: "#f8f9fa" }}>
        <Container size="md">
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#2563eb",
              marginBottom: "0.5rem",
              textAlign: "center",
            }}
          >
            Schedule
          </div>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.4rem, 2.5vw, 1.75rem)",
              fontWeight: 700,
              color: "#1a1a1a",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            Pick a time that works for you.
          </h2>

          {/*
           * CALENDAR EMBED
           *
           * Replace the placeholder below with your Calendly or Cal.com inline embed.
           *
           * Calendly inline embed example:
           * ─────────────────────────────
           * 1. Add the Calendly script to your layout.tsx <head> section:
           *    <script src="https://assets.calendly.com/assets/external/widget.js" async />
           *
           * 2. Replace the placeholder div below with:
           *    <div
           *      className="calendly-inline-widget"
           *      data-url="https://calendly.com/YOUR_USERNAME/30min"
           *      style={{ minWidth: "320px", height: "700px" }}
           *    />
           *
           * Cal.com embed example:
           * ──────────────────────
           * Use Cal.com's embed snippet (https://cal.com/docs/enterprise-features/embed)
           * or their React component: @calcom/embed-react
           *
           * Example with iframe:
           *    <iframe
           *      src="https://cal.com/YOUR_USERNAME/30min?embed=true"
           *      style={{ width: "100%", height: "700px", border: "none" }}
           *    />
           */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #e9ecef",
              borderRadius: "12px",
              minHeight: "500px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "3rem",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>📅</div>
            <div
              style={{ fontFamily: "Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#1a1a1a", marginBottom: "0.5rem" }}
            >
              Calendar booking coming soon.
            </div>
            <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: 1.6, maxWidth: "380px" }}>
              In the meantime, reach out directly at{" "}
              <a
                href="mailto:aiengineeringpartner1@gmail.com"
                style={{ color: "#2563eb", fontWeight: 600, textDecoration: "none" }}
              >
                aiengineeringpartner1@gmail.com
              </a>{" "}
              to schedule a discovery call.
            </p>
          </div>
        </Container>
      </section>

      {/* Reassurance */}
      <section
        style={{
          background: "linear-gradient(135deg, #060a1f 0%, #091020 60%, #0d1433 100%)",
          padding: "4rem 1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at center, rgba(37,99,235,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <Container size="md" style={{ position: "relative", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.4rem, 2.5vw, 1.75rem)",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "0.75rem",
            }}
          >
            No commitment. No sales pitch.
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#b0c4e8", lineHeight: 1.7, maxWidth: "480px", margin: "0 auto" }}>
            The discovery call is a genuine assessment. If there&apos;s not a fit, we&apos;ll say so
            and point you toward the right resources. If there is a fit, we&apos;ll discuss
            next steps at your pace.
          </p>
        </Container>
      </section>
    </>
  );
}
