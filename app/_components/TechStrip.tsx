"use client";

import { motion, useReducedMotion } from "framer-motion";

const TOKENS = [
  "Next.js","TypeScript","Go","Node","PostgreSQL","AWS","RDS",
  "n8n","Shopify API","Stripe","OpenAI","Anthropic","Redis","Terraform",
];

export default function TechStrip() {
  const reduced = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      style={{
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        padding: "18px 0",
        background: "#0C0C0E",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          flexShrink: 0,
          padding: "0 var(--pad-x)",
          color: "var(--fg-4)",
          fontFamily: "var(--mono)",
          fontSize: 11,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          borderRight: "1px solid var(--line)",
          whiteSpace: "nowrap",
        }}
      >
        Stack
      </div>

      <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
        <motion.div
          style={{ display: "flex", gap: 48, whiteSpace: "nowrap" }}
          animate={reduced ? {} : { x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[...TOKENS, ...TOKENS].map((token, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                color: "var(--fg-2)",
                fontFamily: "var(--mono)",
                fontSize: 13,
                letterSpacing: "0.02em",
              }}
            >
              <span
                style={{
                  width: 4, height: 4, borderRadius: "50%",
                  background: "var(--fg-4)", display: "inline-block", flexShrink: 0,
                }}
              />
              {token}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
