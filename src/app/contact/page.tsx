import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@mantine/core";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | AI Engineering Partner",
  description:
    "Tell us about your team. We'll review your message and respond within one business day.",
};

export default function ContactPage() {
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
            Contact Us
          </h1>
          <p style={{ color: "#b0c4e8", fontSize: "1.05rem", maxWidth: "520px", lineHeight: 1.7 }}>
            Tell us about your team. We&apos;ll review your message and respond within one business day.
          </p>
        </Container>
      </section>

      {/* What happens next + sidebar */}
      <section style={{ padding: "5rem 1.5rem", background: "#fff" }}>
        <Container size="lg">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
            {/* What happens next */}
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
                What Happens Next
              </div>
              <h2
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(1.4rem, 2.5vw, 1.75rem)",
                  fontWeight: 700,
                  color: "#1a1a1a",
                  marginBottom: "1.75rem",
                }}
              >
                A direct response within one business day.
              </h2>
              {[
                { step: "01", title: "Submit the form below", desc: "Tell us about your team, your current AI usage, and what you're hoping to achieve." },
                { step: "02", title: "We review your context", desc: "We read every message carefully. We'll understand your team size, goals, and where you are with AI adoption." },
                { step: "03", title: "We reach out directly", desc: "We'll respond with questions, a scheduling link, or a direct recommendation depending on what fits best." },
                { step: "04", title: "We give you a recommendation", desc: "Whether it's a proposal, a discovery call, or just a pointer to the right resources — we'll give you something useful." },
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
                    <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#1a1a1a", marginBottom: "0.25rem" }}>{item.title}</div>
                    <div style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div
                style={{
                  padding: "2rem",
                  background: "#f8f9fa",
                  border: "1px solid #e9ecef",
                  borderRadius: "12px",
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
                  Contact Details
                </div>
                {[
                  { label: "Response time", value: "Within 1 business day" },
                  { label: "Preferred contact", value: "Work email" },
                  { label: "Availability", value: "US time zones (ET/CT/MT/PT)" },
                  { label: "Email", value: "aiengineeringpartner1@gmail.com" },
                ].map((detail, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      padding: "0.75rem 0",
                      borderBottom: i < 3 ? "1px solid #e9ecef" : "none",
                      gap: "1rem",
                    }}
                  >
                    <span style={{ fontSize: "0.875rem", color: "#888", flexShrink: 0 }}>{detail.label}</span>
                    <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "#1a1a1a", textAlign: "right" }}>{detail.value}</span>
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
                <div style={{ fontSize: "0.875rem", color: "#444", lineHeight: 1.65 }}>
                  Prefer to book directly?{" "}
                  <Link href="/book" style={{ color: "#2563eb", fontWeight: 600, textDecoration: "none" }}>
                    Book a 30-minute discovery call →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact form */}
      <section style={{ padding: "5rem 1.5rem", background: "#f8f9fa" }}>
        <Container size="md">
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
            Send a Message
          </div>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.4rem, 2.5vw, 1.75rem)",
              fontWeight: 700,
              color: "#1a1a1a",
              marginBottom: "2rem",
            }}
          >
            Tell us about your team.
          </h2>
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e9ecef",
              borderRadius: "12px",
              padding: "2.5rem",
            }}
          >
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
