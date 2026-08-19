"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, TextInput, Alert } from "@mantine/core";
import { RISK_QUESTIONS, scoreRiskCheck, type RiskResult } from "@/content/riskCheck";
import { submitLead } from "@/lib/leads";
import { track } from "@/lib/tracking";
import { site } from "@/config/site";
import classes from "./RiskCheck.module.css";

/*
 * Five questions, one tap each, auto-advancing — five taps to a result on a
 * phone with no scrolling and no submit button.
 *
 * The result is shown BEFORE the email ask. Gating the answer behind an email
 * would be the obvious growth-hack move and it is the wrong one here: the
 * whole promise is "no reading, no commitment", and a bait-and-switch at the
 * payoff would poison the first impression with exactly the technical, sceptical
 * buyer we want. The email buys the written version, not the answer.
 */
export function RiskCheck() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<RiskResult | null>(null);

  const [email, setEmail] = useState("");
  const [botcheck, setBotcheck] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);

  function choose(questionId: string, value: string) {
    const next = { ...answers, [questionId]: value };
    setAnswers(next);

    if (step === 0) track("risk_check_started");

    if (step < RISK_QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      const scored = scoreRiskCheck(next);
      setResult(scored);
      track("risk_check_completed", {
        signals: scored.signals.length,
        critical: scored.criticalCount,
        platform: next.platform,
      });
    }
  }

  function back() {
    if (step > 0) setStep(step - 1);
  }

  async function sendReport(event: React.FormEvent) {
    event.preventDefault();
    setStatus("sending");
    setError(null);

    const outcome = await submitLead({
      source: "risk-check",
      email,
      platform: answers.platform,
      riskScore: result ? `${result.signals.length} signals, ${result.criticalCount} critical` : "",
      riskAnswers: answers,
      botcheck,
    });

    if (outcome.ok) {
      track("report_email_captured");
      setStatus("sent");
    } else {
      setError(outcome.error);
      setStatus("idle");
    }
  }

  /* ── Result ─────────────────────────────────────────────── */
  if (result) {
    return (
      <div className={classes.result}>
        <div className={classes.resultHead}>
          <div className={classes.resultLabel}>Based on your answers</div>
          <h2 className={classes.resultHeadline}>{result.headline}</h2>
          <p className={classes.resultSummary}>{result.summary}</p>
        </div>

        <ul className={classes.signals}>
          {result.signals.map((signal) => (
            <li
              key={signal.label}
              className={`${classes.signal} ${signal.critical ? classes.signalCritical : ""}`}
            >
              <div className={classes.signalTop}>
                <span className={classes.signalLabel}>{signal.label}</span>
                {signal.critical && <span className={classes.criticalTag}>Act on this</span>}
              </div>
              <p className={classes.signalDetail}>{signal.detail}</p>
            </li>
          ))}
        </ul>

        <div className={classes.resultCta}>
          <h3 className={classes.resultCtaTitle}>Want to talk it through?</h3>
          <p className={classes.resultCtaBody}>
            Fifteen minutes, free, with the engineer who&apos;d do the work. We&apos;ll tell you
            honestly if you don&apos;t need us yet — that happens often.
          </p>
          <div className={classes.resultActions}>
            <Button
              component={Link}
              href="/book"
              variant="filled"
              color="brand"
              size="lg"
              radius="md"
              onClick={() => track("cta_click", { placement: "risk_result", target: "book" })}
            >
              Book a free 15-min call
            </Button>
          </div>

          {status === "sent" ? (
            <Alert color="green" variant="light" radius="md" mt="lg">
              Sent — check your inbox. We&apos;ll follow up within one business day.
            </Alert>
          ) : (
            <form className={classes.emailForm} onSubmit={sendReport}>
              <div className={classes.emailLabel}>Or have the written version emailed to you</div>
              {error && (
                <Alert color="red" variant="light" radius="md" mb="sm">
                  {error}{" "}
                  <a href={`mailto:${site.email}`} style={{ fontWeight: 600 }}>
                    {site.email}
                  </a>
                </Alert>
              )}
              <div className={classes.emailRow}>
                <TextInput
                  placeholder="you@example.com"
                  type="email"
                  required
                  autoComplete="email"
                  aria-label="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  classNames={{ root: classes.emailInput }}
                />
                <input
                  type="checkbox"
                  name="botcheck"
                  className={classes.honeypot}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  checked={Boolean(botcheck)}
                  onChange={(e) => setBotcheck(e.currentTarget.checked ? "1" : "")}
                />
                <Button
                  type="submit"
                  variant="outline"
                  color="brand"
                  radius="md"
                  loading={status === "sending"}
                >
                  Email it
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    );
  }

  /* ── Questions ──────────────────────────────────────────── */
  const question = RISK_QUESTIONS[step];
  const progress = ((step + 1) / RISK_QUESTIONS.length) * 100;

  return (
    <div className={classes.quiz}>
      <div className={classes.progressRow}>
        <div className={classes.progressTrack}>
          <div className={classes.progressFill} style={{ width: `${progress}%` }} />
        </div>
        <span className={classes.progressText}>
          {step + 1} of {RISK_QUESTIONS.length}
        </span>
      </div>

      <h2 className={classes.question}>{question.question}</h2>
      {question.hint && <p className={classes.hint}>{question.hint}</p>}

      <div className={classes.options}>
        {question.options.map((option) => (
          <button
            key={option.value}
            type="button"
            className={`${classes.option} ${
              answers[question.id] === option.value ? classes.optionActive : ""
            }`}
            onClick={() => choose(question.id, option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>

      {step > 0 && (
        <button type="button" className={classes.back} onClick={back}>
          ← Back
        </button>
      )}
    </div>
  );
}
