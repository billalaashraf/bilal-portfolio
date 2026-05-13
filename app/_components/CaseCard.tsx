"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import CaseDiagram, { DiagramVariant } from "./diagram/CaseDiagram";

interface CaseCardProps {
  num: string;
  href: string;
  title: string;
  tail: string;
  summary: string;
  tags: readonly string[];
  meta: string;
  variant: DiagramVariant;
  wide?: boolean;
  index: number;
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function CaseCard({ num, href, title, tail, summary, tags, meta, variant, wide, index }: CaseCardProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduced = useReducedMotion();

  return (
    <motion.article
      ref={ref}
      initial={reduced ? {} : { opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease, delay: index * 0.08 }}
      style={{
        position: "relative", display: "flex", flexDirection: "column",
        background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: 14,
        overflow: "hidden", gridColumn: wide ? "span 2" : undefined,
        transition: "border-color .2s ease, background .2s ease",
      }}
      whileHover={{ borderColor: "#2E2E35" }}
      className="case-card"
    >
      {/* Diagram preview */}
      <div
        role="img"
        aria-label={`Mock diagram for ${title}`}
        style={{
          aspectRatio: wide ? "32/9" : "16/9",
          borderBottom: "1px solid var(--line)",
          position: "relative", overflow: "hidden",
          background:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.018) 0 1px, transparent 1px 12px), #0E0E10",
        }}
      >
        <div aria-hidden="true" style={{ position: "absolute", inset: 0 }}>
          <CaseDiagram variant={variant} />
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "24px 24px 22px", display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
        <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--fg-4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Case Study · {num}
        </span>
        <h3 style={{ margin: 0, fontSize: 22, letterSpacing: "-0.02em", fontWeight: 500, lineHeight: 1.2 }}>
          {title}{" "}
          <span style={{ color: "var(--fg-3)", fontWeight: 400 }}>, {tail}</span>
        </h3>
        <p style={{ margin: 0, color: "var(--fg-2)", fontSize: 14.5, lineHeight: 1.55 }}>{summary}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 2 }}>
          {tags.map((t) => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>

      {/* Footer */}
      <div style={{
        borderTop: "1px solid var(--line)", padding: "14px 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        color: "var(--fg-2)", fontSize: 13.5,
      }}>
        <a
          href={href}
          style={{ display: "inline-flex", alignItems: "center", gap: 10 }}
          className="case-view"
        >
          View case study
        </a>
        <span style={{ color: "var(--fg-4)", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.04em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
          {meta}
        </span>
      </div>

      <style>{`
        @media (max-width: 900px) { .case-card[style*="span 2"] { grid-column: span 1 !important; } }
      `}</style>
    </motion.article>
  );
}
