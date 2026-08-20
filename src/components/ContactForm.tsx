"use client";

import { useState } from "react";
import Link from "next/link";
import { TextInput, Select, Textarea, Button, Alert } from "@mantine/core";
import { submitLead } from "@/lib/leads";
import { track } from "@/lib/tracking";
import { site } from "@/config/site";
import classes from "./ContactForm.module.css";

/*
 * Deliberately four fields.
 *
 * Every field is friction, and this form exists for people who want to say
 * something without booking a call. Qualification happens inside the Calendly
 * booking flow instead, after the visitor has already committed, where it
 * costs nothing. Asking it here would cost us the submission.
 */

const PLATFORMS = [
  { value: "Lovable", label: "Lovable" },
  { value: "Replit", label: "Replit" },
  { value: "Bolt", label: "Bolt" },
  { value: "v0", label: "v0" },
  { value: "Other", label: "Something else" },
  { value: "Not sure", label: "Not sure" },
];

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [platform, setPlatform] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [botcheck, setBotcheck] = useState("");

  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus("sending");
    setError(null);

    const result = await submitLead({
      source: "contact",
      name,
      email,
      platform: platform ?? "",
      message,
      botcheck,
    });

    if (result.ok) {
      track("contact_form_submitted", { platform: platform ?? "unspecified" });
      setStatus("sent");
    } else {
      setError(result.error);
      setStatus("idle");
    }
  }

  if (status === "sent") {
    return (
      <div className={classes.success}>
        <div className={classes.successIcon}>✓</div>
        <h3 className={classes.successTitle}>Got it. Thank you.</h3>
        <p className={classes.successBody}>
          Everything that comes in gets read, and you&apos;ll have a reply inside one business
          day. If it is urgent, book a time directly and skip the queue.
        </p>
        <div style={{ marginTop: "1.5rem" }}>
          <Button component={Link} href="/book" variant="filled" color="brand" radius="md">
            Book a call instead
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      {error && (
        <Alert color="red" variant="light" radius="md">
          {error}{" "}
          <a href={`mailto:${site.email}`} style={{ fontWeight: 600 }}>
            {site.email}
          </a>
        </Alert>
      )}

      <div className={classes.row}>
        <TextInput
          label="Name"
          placeholder="Your name"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          classNames={{ root: classes.field }}
        />
        <TextInput
          label="Email"
          placeholder="you@example.com"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          classNames={{ root: classes.field }}
        />
      </div>

      <Select
        label="What did you build it with?"
        placeholder="Pick one"
        data={PLATFORMS}
        value={platform}
        onChange={setPlatform}
        classNames={{ root: classes.field }}
      />

      <Textarea
        label="What's going on?"
        placeholder="A sentence or two is plenty. What's the app, and what's the problem?"
        required
        minRows={4}
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
        classNames={{ root: classes.field }}
      />

      {/* Honeypot: hidden from people, irresistible to bots. */}
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

      <div className={classes.actions}>
        <Button
          type="submit"
          variant="filled"
          color="brand"
          size="lg"
          radius="md"
          loading={status === "sending"}
        >
          Send message
        </Button>
        <p className={classes.note}>You&apos;ll have a reply inside one business day.</p>
      </div>
    </form>
  );
}
