/*
 * Risk-check questions and scoring.
 *
 * HONESTY CONSTRAINT. Read this before editing.
 * This does NOT scan anyone's app. It reads back risk *signals* implied by
 * what the visitor tells us, against the published base rates for AI-built
 * apps. Every string here must stay truthful to that: "based on your answers",
 * never "we found". Overclaiming here would be the single fastest way to
 * destroy trust with a technical prospect, and it would be a lie.
 *
 * Base rate cited: Symbiotic Security, June 2026. 1,072 AI-built apps on
 * Supabase backends fully scanned. 98% had at least one vulnerability, 16% had
 * critical flaws, 2% were clean.
 */

export interface RiskOption {
  value: string;
  label: string;
  /** Risk weight. 0 = no signal, 1 = signal, 2 = signal that can be critical. */
  weight: 0 | 1 | 2;
}

export interface RiskQuestion {
  id: string;
  question: string;
  hint?: string;
  options: RiskOption[];
}

export const RISK_QUESTIONS: RiskQuestion[] = [
  {
    id: "platform",
    question: "What did you build it with?",
    options: [
      { value: "Lovable", label: "Lovable", weight: 1 },
      { value: "Replit", label: "Replit", weight: 1 },
      { value: "Bolt", label: "Bolt", weight: 1 },
      { value: "v0", label: "v0", weight: 1 },
      { value: "Other", label: "Something else", weight: 0 },
    ],
  },
  {
    id: "live",
    question: "Is it live, with real people using it?",
    options: [
      { value: "yes", label: "Yes, it's in production", weight: 2 },
      { value: "soon", label: "Not yet, but launching soon", weight: 1 },
      { value: "no", label: "Still just building", weight: 0 },
    ],
  },
  {
    id: "sensitive",
    question: "Does it handle payments or personal data?",
    hint: "Card details, emails, addresses, health or financial information: anything you would hate to see leak.",
    options: [
      { value: "yes", label: "Yes", weight: 2 },
      { value: "unsure", label: "I'm not sure", weight: 2 },
      { value: "no", label: "No, neither", weight: 0 },
    ],
  },
  {
    id: "rls",
    question: "Has anyone checked who's allowed to read your database?",
    hint: "Row-level security, the setting that stops a stranger reading everybody else's records.",
    options: [
      { value: "reviewed", label: "Yes, an engineer has reviewed it", weight: 0 },
      { value: "assumed", label: "I assume the platform handled it", weight: 2 },
      { value: "unknown", label: "I don't know what that is", weight: 2 },
    ],
  },
  {
    id: "keys",
    question: "Have your API keys ever been rotated?",
    hint: "Stripe, OpenAI, database keys, anything secret the app needs in order to run.",
    options: [
      { value: "rotated", label: "Yes, at least once", weight: 0 },
      { value: "never", label: "No, they're the originals", weight: 1 },
      { value: "unsure", label: "I wouldn't know where to look", weight: 2 },
    ],
  },
];

export interface RiskSignal {
  label: string;
  detail: string;
  critical: boolean;
}

export interface RiskResult {
  signals: RiskSignal[];
  criticalCount: number;
  /** Short headline for the result screen. */
  headline: string;
  /** One-paragraph read of the situation. Never overstated. */
  summary: string;
}

export function scoreRiskCheck(answers: Record<string, string>): RiskResult {
  const signals: RiskSignal[] = [];

  const isLive = answers.live === "yes";
  const preLaunch = answers.live === "soon";
  const sensitive = answers.sensitive === "yes";
  const maybeSensitive = answers.sensitive === "unsure";
  const rlsUnchecked = answers.rls === "assumed" || answers.rls === "unknown";
  const keysStale = answers.keys === "never" || answers.keys === "unsure";
  const scannedPlatform = ["Lovable", "Replit", "Bolt", "v0"].includes(answers.platform);

  if (rlsUnchecked) {
    signals.push({
      label: "Database access rules unverified",
      detail:
        "Missing row-level security is the single most common critical flaw in AI-built apps, and it is what CVE-2025-48757 describes: 170+ Lovable apps leaking personal data, payment details and API keys to anyone who asked. It is also, in most cases, a same-day fix once somebody looks.",
      critical: sensitive || maybeSensitive || isLive,
    });
  }

  if (keysStale) {
    signals.push({
      label: "Original API keys still in use",
      detail:
        "AI builders routinely leave keys reachable from the browser bundle. If a key has never been rotated, there is no way to know who has had a copy of it, and rotating one is cheap insurance either way.",
      critical: sensitive && isLive,
    });
  }

  if ((sensitive || maybeSensitive) && isLive) {
    signals.push({
      label: "Sensitive data in production",
      detail:
        "Once a live app is holding payments or personal data, a mistake stops being embarrassing and becomes a notification you have to send your customers. That raises the stakes on everything else in this list.",
      critical: rlsUnchecked,
    });
  }

  if (maybeSensitive) {
    signals.push({
      label: "Unclear what data you're holding",
      detail:
        "Not being certain is itself worth resolving. Knowing exactly what you store, and where it sits, is the first thing any review establishes.",
      critical: false,
    });
  }

  if (scannedPlatform) {
    signals.push({
      label: `Built on ${answers.platform}, inside the scanned population`,
      detail:
        "Symbiotic Security fully scanned 1,072 AI-built apps on Supabase backends in June 2026. 98% had at least one vulnerability, 16% had critical ones, and only 2% were clean. That is the base rate your app starts from, not a finding about your app in particular.",
      critical: false,
    });
  }

  if (preLaunch) {
    signals.push({
      label: "Pre-launch, which is the cheapest possible moment",
      detail:
        "Fixing access rules and rotating keys before real users arrive costs a fraction of doing the same work afterwards, and there is no incident to disclose to anyone.",
      critical: false,
    });
  }

  const criticalCount = signals.filter((s) => s.critical).length;

  let headline: string;
  let summary: string;

  if (criticalCount > 0) {
    headline = `${signals.length} risk ${signals.length === 1 ? "signal" : "signals"} · ${criticalCount} worth acting on now`;
    summary =
      "Based on your answers, there are things here that would go straight to the top of the list on any engineering review. None of this is a scan of your app; it is what your own answers imply about it. The useful part is that the highest-risk items tend to be the fastest ones to fix.";
  } else if (signals.length > 1) {
    headline = `${signals.length} risk signals worth a look`;
    summary =
      "Nothing here says your app is on fire. Based on your answers, there are a few things worth verifying rather than assuming, which puts you ahead of most of the apps I get asked to look at.";
  } else {
    headline = "You're in better shape than most";
    summary =
      "Based on your answers, you have already covered the things that catch most AI-built apps out. A second pair of eyes before you scale would still be worth having, but nothing here is urgent.";
  }

  return { signals, criticalCount, headline, summary };
}
