"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

/*
 * Static export cannot issue a 301, so retired URLs get a client-side redirect
 * plus a visible link. Old inbound links keep working instead of hitting a 404.
 */
export function RedirectNotice({ to, label }: { to: string; label: string }) {
  const router = useRouter();

  useEffect(() => {
    router.replace(to);
  }, [router, to]);

  return (
    <div
      style={{
        maxWidth: 520,
        margin: "0 auto",
        padding: "6rem 1.5rem",
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: "0.95rem", color: "#6c757d", marginBottom: "1rem" }}>
        This page has moved.
      </p>
      <Link
        href={to}
        style={{ fontSize: "1.05rem", fontWeight: 600, color: "#2563eb", textDecoration: "none" }}
      >
        Continue to {label} →
      </Link>
    </div>
  );
}
