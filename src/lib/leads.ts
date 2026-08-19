/*
 * Lead submission.
 *
 * DELIVERY ORDER IS DELIBERATE:
 *   1. Web3Forms  — awaited. This is the one that must succeed; it emails you.
 *   2. Apps Script — fire-and-forget. Appends to the Google Sheet.
 *
 * If the sheet is down, misconfigured, or slow, the lead is already emailed and
 * the visitor still sees success. If Web3Forms fails, the visitor is told and
 * given the mailto fallback so the lead is never silently dropped.
 */

import { web3forms, leadSheet, site } from "@/config/site";
import { readAttribution } from "./tracking";

export interface LeadPayload {
  source: "contact" | "risk-check";
  name?: string;
  email: string;
  platform?: string;
  message?: string;
  riskScore?: string;
  riskAnswers?: Record<string, string>;
  /** Honeypot — must be empty. Bots fill hidden fields. */
  botcheck?: string;
}

export type LeadResult = { ok: true } | { ok: false; error: string };

export async function submitLead(payload: LeadPayload): Promise<LeadResult> {
  if (payload.botcheck) {
    // Silently succeed for bots — telling them they were caught invites retries.
    return { ok: true };
  }

  const attribution = readAttribution();

  if (!web3forms.isConfigured) {
    // Visitor-facing copy: never expose configuration state to a real person.
    // The mailto fallback is rendered alongside this, so the lead is not lost.
    return {
      ok: false,
      error: "We couldn't send that just now. Email us instead and we'll pick it up:",
    };
  }

  try {
    const response = await fetch(web3forms.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: web3forms.accessKey,
        subject: subjectFor(payload),
        from_name: `${site.name} website`,
        ...flatten(payload),
        ...attribution,
      }),
    });

    if (!response.ok) {
      return { ok: false, error: "We could not send that. Please email us directly." };
    }
  } catch {
    return { ok: false, error: "Network error. Please check your connection or email us directly." };
  }

  // Fire-and-forget: never awaited, never surfaced. text/plain keeps the
  // request "simple" so the browser skips a CORS preflight that Apps Script
  // cannot answer.
  if (leadSheet.isConfigured) {
    void fetch(leadSheet.endpoint, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ ...flatten(payload), ...attribution }),
    }).catch(() => {
      /* sheet is best-effort by design */
    });
  }

  return { ok: true };
}

function subjectFor(payload: LeadPayload): string {
  const who = payload.name || payload.email;
  return payload.source === "risk-check"
    ? `Risk check completed — ${who} (${payload.riskScore ?? "no score"})`
    : `Website enquiry — ${who}`;
}

function flatten(payload: LeadPayload) {
  const { botcheck: _botcheck, riskAnswers, ...rest } = payload;
  return {
    ...rest,
    ...(riskAnswers ? { riskAnswers: JSON.stringify(riskAnswers) } : {}),
  };
}
