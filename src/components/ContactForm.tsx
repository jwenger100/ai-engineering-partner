"use client";

import { useState } from "react";
import { TextInput, Select, Textarea, Button } from "@mantine/core";
import classes from "./ContactForm.module.css";

/*
 * FORM SUBMISSION — STATIC EXPORT NOTE
 *
 * This site uses `output: "export"` which disables API routes.
 * The current implementation opens a mailto: link on submit.
 *
 * To wire up a real form backend:
 *
 * Option A — Formspree (https://formspree.io):
 *   Replace the handleSubmit body with:
 *   await fetch("https://formspree.io/f/YOUR_FORM_ID", {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json" },
 *     body: JSON.stringify(formData),
 *   });
 *
 * Option B — Netlify Forms:
 *   Add `data-netlify="true"` to the <form> element and a hidden
 *   input with name="form-name" value="contact".
 */

interface FormData {
  name: string;
  email: string;
  company: string;
  teamSize: string;
  message: string;
}

export function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    teamSize: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `AI Engineering Partner Inquiry — ${form.company || form.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nTeam Size: ${form.teamSize}\n\nWhat help do you need?\n${form.message}`
    );
    window.location.href = `mailto:aiengineeringpartner1@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={classes.success}>
        <div className={classes.successIcon}>✓</div>
        <h3 className={classes.successTitle}>Opening your email client…</h3>
        <p className={classes.successBody}>
          Your email client should open with your message pre-filled. Send it to reach us
          at aiengineeringpartner1@gmail.com.
        </p>
      </div>
    );
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.row}>
        <TextInput
          label="Name"
          placeholder="Your name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.currentTarget.value })}
          classNames={{ root: classes.field }}
        />
        <TextInput
          label="Work Email"
          placeholder="you@company.com"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.currentTarget.value })}
          classNames={{ root: classes.field }}
        />
      </div>
      <div className={classes.row}>
        <TextInput
          label="Company"
          placeholder="Company name"
          required
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.currentTarget.value })}
          classNames={{ root: classes.field }}
        />
        <Select
          label="Team Size"
          placeholder="Select team size"
          required
          data={[
            { value: "1-10", label: "1–10 engineers" },
            { value: "11-50", label: "11–50 engineers" },
            { value: "51-200", label: "51–200 engineers" },
            { value: "201-500", label: "201–500 engineers" },
            { value: "500+", label: "500+ engineers" },
          ]}
          value={form.teamSize}
          onChange={(v) => setForm({ ...form, teamSize: v ?? "" })}
          classNames={{ root: classes.field }}
        />
      </div>
      <Textarea
        label="What help do you need?"
        placeholder="Tell us about your team, your current AI usage, and what you're hoping to achieve."
        required
        minRows={5}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.currentTarget.value })}
        classNames={{ root: classes.field }}
      />
      <div className={classes.actions}>
        <Button
          type="submit"
          variant="filled"
          color="brand"
          size="lg"
          radius="md"
        >
          Send Message
        </Button>
        <p className={classes.note}>
          We respond within one business day.
        </p>
      </div>
    </form>
  );
}
