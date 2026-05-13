import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case studies · Bilal Ashraf",
  description:
    "Five production systems I've architected, shipped, and operated. Spanning ecommerce, internal tooling, backend optimization, AI workflow infrastructure, and real-time platforms.",
};

const cases = [
  {
    num: "01",
    href: "/case-studies/dotshop-ai",
    title: "DotShop.ai",
    tail: "Multi-Region Ecommerce Platform",
    summary:
      "From zero to production: Next.js storefront, REST backend, idempotent orders and payments, real-time Shopify sync, and a two-region AWS footprint.",
    tags: ["Next.js", "AWS", "Shopify"],
  },
  {
    num: "02",
    href: "/case-studies/clinic-dashboard",
    title: "Clinic Dashboard",
    tail: "Automation & Patient Follow-Up",
    summary:
      "Ranked action queue, n8n-driven reminder pipelines, audited contact log, and a revenue-at-risk metric, built on top of the team's existing Google Sheets.",
    tags: ["n8n", "Sheets", "Postgres"],
  },
  {
    num: "03",
    href: "/case-studies/web-shop-manager",
    title: "Web Shop Manager",
    tail: "Backend & Cloud Optimization",
    summary:
      "Strangler pattern in Go and TypeScript, query and cache pass on RDS, right-sized AWS footprint. No rewrite, no freeze, lower bill.",
    tags: ["Go", "TypeScript", "RDS"],
  },
  {
    num: "04",
    href: "/case-studies/scrively",
    title: "Scrively",
    tail: "AI Workflow Rendering Engine",
    summary:
      "Schema-bounded component vocabulary, explicit XState workflow runtime, in-place streaming renderer, and a provider-agnostic LLM layer.",
    tags: ["XState", "OpenAI", "Anthropic"],
  },
  {
    num: "05",
    href: "/case-studies/monkeytilt",
    title: "MonkeyTilt",
    tail: "Gaming Platform Performance Optimization",
    summary:
      "Latency baselining, wallet hot-row redesign, cached projections, and latency-gated canary deploys for a real-time gaming backend.",
    tags: ["Postgres", "Redis", "Canary"],
  },
] as const;

export default function CaseStudiesIndex() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <header className="cs-hero">
        <div className="grid-bg" aria-hidden="true" />
        <div className="wrap inner">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="/">Bilal Ashraf</a>
            <span className="sep">/</span>
            <span className="current">Case studies</span>
          </nav>
          <span className="cs-num">Index · 05 case studies</span>
          <h1 className="cs-title">
            Selected work, <span className="co">in detail.</span>
          </h1>
          <p className="cs-outcome">
            Five production systems I&apos;ve architected, shipped, and operated. Spanning
            ecommerce, internal tooling, backend optimization, AI workflow infrastructure,
            and real-time platforms.
          </p>
        </div>
      </header>

      {/* ── Case list ──────────────────────────────────────── */}
      <section className="cs-block">
        <div className="wrap">
          <div className="cs-list">
            {cases.map((c) => (
              <a key={c.num} href={c.href}>
                <span className="cs-num-cell">{c.num}</span>

                <div className="cs-body">
                  <h3>
                    {c.title}{" "}
                    <span className="co">, {c.tail}</span>
                  </h3>
                  <p>{c.summary}</p>
                </div>

                <div className="cs-tags">
                  {c.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>

                <span className="arrow-r" aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section
        id="contact"
        style={{ padding: "0 var(--pad-x)" }}
      >
        <div className="cs-cta">
          <div className="cta-l">
            <span className="eyebrow">
              <span className="dot" />
              Next engagement
            </span>
            <h2>Have a similar system to build or optimize?</h2>
            <p className="subnote" style={{ marginTop: 18 }}>
              Send a few sentences about what you&apos;re working on. You&apos;ll hear back
              from me directly within one business day.
            </p>
          </div>
          <div className="cta-r">
            <span className="avail">
              <span className="dot" />
              Q3 2026 · taking 1–2 new engagements
            </span>
            <a
              href="https://calendly.com/billalaashraf/1-1-with-bilal"
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary"
            >
              Book a call <span className="arr">→</span>
            </a>
            <span
              style={{
                fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.02em",
                textTransform: "uppercase", color: "var(--fg-4)",
              }}
            >
              bilalasharf@gmail.com
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
