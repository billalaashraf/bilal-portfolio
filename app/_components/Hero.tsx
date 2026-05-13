"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease, delay },
});

export default function Hero() {
  const reduced = useReducedMotion();

  const item = (delay: number) =>
    reduced
      ? {}
      : fadeUp(delay);

  return (
    <header
      style={{
        position: "relative",
        padding: "120px 0",
        borderBottom: "1px solid var(--line)",
        overflow: "hidden",
      }}
    >
      {/* Grid background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 70% 55% at 50% 35%, #000 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 55% at 50% 35%, #000 30%, transparent 80%)",
        }}
      />

      <div className="wrap" style={{ position: "relative", zIndex: 1, maxWidth: 980 }}>
        <motion.h1
          {...item(0.06)}
          style={{
            fontSize: "clamp(40px, 6.2vw, 76px)",
            lineHeight: 1.02,
            letterSpacing: "-0.035em",
            fontWeight: 500,
            margin: "24px 0 28px",
            textWrap: "balance" as never,
          }}
        >
          I build AI-powered systems that automate operations{" "}
          <em style={{ fontStyle: "normal", color: "var(--fg-3)", fontWeight: 400 }}>
            and scale business workflows.
          </em>
        </motion.h1>

        <motion.p
          {...item(0.12)}
          style={{
            fontSize: "clamp(16px, 1.4vw, 19px)",
            lineHeight: 1.55,
            color: "var(--fg-2)",
            maxWidth: 680,
            textWrap: "pretty" as never,
            marginBottom: 40,
          }}
        >
          I design and develop production-ready software systems. Internal dashboards,
          AI workflows, ecommerce infrastructure, backend architecture, and
          third-party integrations.
        </motion.p>

        <motion.div {...item(0.18)} style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 64 }}>
          <a href="#work" className="btn primary">
            View case studies <span className="arr">→</span>
          </a>
          <a href="https://calendly.com/billalaashraf/1-1-with-bilal" target="_blank" rel="noopener noreferrer" className="btn">
            Book a call
          </a>
        </motion.div>

        <motion.div
          {...item(0.24)}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            borderTop: "1px solid var(--line)",
            paddingTop: 24,
          }}
          className="proof-grid"
        >
          {[
            ["01", "Full-stack product architecture"],
            ["02", "AI workflow & automation systems"],
            ["03", "AWS infrastructure & optimization"],
            ["04", "Ecommerce & fintech integrations"],
          ].map(([num, label]) => (
            <div
              key={num}
              style={{
                padding: "4px 24px 4px 0",
                display: "flex", flexDirection: "column", gap: 8,
                borderRight: "1px solid var(--line)",
              }}
              className="proof-cell"
            >
              <span style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--fg-4)" }}>{num}</span>
              <span style={{ fontSize: 14, color: "var(--fg)", letterSpacing: "-0.01em" }}>{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .proof-grid { grid-template-columns: repeat(2,1fr) !important; row-gap: 20px; }
          .proof-cell { border-right: 0 !important; padding-right: 0 !important; }
        }
      `}</style>
    </header>
  );
}
