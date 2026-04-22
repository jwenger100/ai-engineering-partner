import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Prototype to Production — AI Engineering Partner",
    default: "Prototype to Production — AI Engineering Partner",
  },
  description:
    "A structured upgrade path for AI-built apps that need ownership, security, and a scalable foundation.",
};

export default function P2PLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
