import type { Metadata } from "next";
import { Container } from "@mantine/core";
import { RiskCheck } from "@/components/RiskCheck";
import classes from "./page.module.css";

export const metadata: Metadata = {
  title: "Check your app",
  description:
    "Five questions, about a minute. Find out which risk signals your AI-built app is showing — no call, no install, no sign-up.",
  alternates: { canonical: "/risk-check" },
};

export default function RiskCheckPage() {
  return (
    <>
      <section className={classes.header}>
        <Container size="sm" className={classes.headerInner}>
          <span className={classes.eyebrow}>Free · about a minute</span>
          <h1 className={classes.h1}>How safe is your AI-built app?</h1>
          <p className={classes.sub}>
            Five questions. You get a straight answer at the end — no sign-up wall, no call
            required, and nothing to install.
          </p>
        </Container>
      </section>

      <section className={classes.body}>
        <Container size="sm">
          <RiskCheck />
          <p className={classes.disclaimer}>
            This reads back the risk signals implied by your answers against published research
            on AI-built apps. It does not scan your application. Only a proper review of your
            code and database can tell you what is actually true of yours.
          </p>
        </Container>
      </section>
    </>
  );
}
