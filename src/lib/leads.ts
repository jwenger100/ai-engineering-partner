/*
 * Lead submission.
 *
 * THE TWO DESTINATIONS ARE INDEPENDENT, ON PURPOSE:
 *   - Web3Forms   is awaited, emails you, and decides what the visitor sees.
 *   - Apps Script is fired in parallel, and appends to the Google Sheet.
 *
 * They used to be sequential, with the sheet write gated behind a successful
 * Web3Forms call. That meant an outage or block at Web3Forms lost the lead from
 * the sheet as well, losing it in both places at once, when the sheet is
 * meant to be the durable record. Firing them in parallel means either can
 * fail without taking the other down.
 *
 * The visitor's success state still follows Web3Forms alone: if we cannot email
 * you, we tell them and show the mailto fallback rather than claiming success.
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
  /** Honeypot: must be empty. Bots fill hidden fields. */
  botcheck?: string;
}

export type LeadResult = { ok: true } | { ok: false; error: string };

export async function submitLead(payload: LeadPayload): Promise<LeadResult> {
  if (payload.botcheck) {
    // Silently succeed for bots, since telling them they were caught invites retries.
    return { ok: true };
  }

  const attribution = readAttribution();

  /*
   * Fired first and never awaited, so it is already in flight regardless of
   * what Web3Forms does. text/plain with no custom headers keeps it a "simple"
   * request, so the browser skips a CORS preflight Apps Script cannot answer.
   */
  if (leadSheet.isConfigured) {
    void fetch(leadSheet.endpoint, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ ...flatten(payload), ...attribution }),
    }).catch(() => {
      /* best-effort by design; never surfaced to the visitor */
    });
  }

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

  return { ok: true };
}

function subjectFor(payload: LeadPayload): string {
  const who = payload.name || payload.email;
  return payload.source === "risk-check"
    ? `Risk check completed: ${who} (${payload.riskScore ?? "no score"})`
    : `Website enquiry: ${who}`;
}

function flatten(payload: LeadPayload) {
  const { botcheck: _botcheck, riskAnswers, ...rest } = payload;
  return {
    ...rest,
    ...(riskAnswers ? { riskAnswers: JSON.stringify(riskAnswers) } : {}),
  };
}
