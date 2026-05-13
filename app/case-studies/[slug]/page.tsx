import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCaseStudy, getAllSlugs } from "./data";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: `${cs.title}: ${cs.subtitle} · Bilal Ashraf`,
    description: cs.outcome,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <header className="cs-hero">
        <div className="grid-bg" aria-hidden="true" />
        <div className="wrap inner">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="/">Bilal Ashraf</a>
            <span className="sep">/</span>
            <a href="/case-studies">Work</a>
            <span className="sep">/</span>
            <span className="current">{cs.title}</span>
          </nav>
          <span className="cs-num">Case Study · {cs.num}</span>
          <h1 className="cs-title">
            {cs.title}{" "}
            <span className="co">, {cs.subtitle}</span>
          </h1>
          <p className="cs-outcome">{cs.outcome}</p>

          <div className="cs-meta">
            <div className="cell">
              <span className="k">Role</span>
              <span className="v">{cs.role}</span>
            </div>
            <div className="cell">
              <span className="k">Focus areas</span>
              <span className="v">{cs.focus}</span>
            </div>
            <div className="cell">
              <span className="k">Engagement</span>
              <span className="v">{cs.engagement}</span>
            </div>
            <div className="cell">
              <span className="k">Stack</span>
              <div className="chips">
                {cs.stack.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Context + Problem ──────────────────────────────── */}
      <section className="cs-block" style={{ borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="cs-2col">
            <div>
              <div className="col-head">
                <span className="col-num">01</span>
                <h3>Context</h3>
              </div>
              <p className="lede">{cs.context.lede}</p>
              {cs.context.body.map((p, i) => (
                <p key={i} className="body">{p}</p>
              ))}
            </div>
            <div>
              <div className="col-head">
                <span className="col-num">02</span>
                <h3>Problem</h3>
              </div>
              <p className="lede">{cs.problem.lede}</p>
              {cs.problem.body.map((p, i) => (
                <p key={i} className="body">{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why it needed to be done ───────────────────────── */}
      <section className="cs-block" style={{ padding: "56px 0", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow"><span className="dot" />Why it needed to be done</span>
              <h2>{cs.whyNeeded.heading}</h2>
            </div>
          </div>
          <div className="risk-panel">
            <div className="l">
              <span className="eyebrow"><span className="dot" />Risk surface</span>
              <h3>{cs.whyNeeded.heading}</h3>
              <p>{cs.whyNeeded.intro}</p>
            </div>
            <div className="risk-list">
              {cs.whyNeeded.risks.map((r, i) => (
                <div key={i} className="risk-row">
                  <div className="icon">{r.icon}</div>
                  <div>
                    <p className="t">{r.title}</p>
                    <p className="d">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Solution ───────────────────────────────────────── */}
      <section className="cs-block" style={{ borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow"><span className="dot" />Solution</span>
              <h2>What was built and how it fits together.</h2>
            </div>
          </div>
          <div className="solution-stack">
            {cs.solution.map((s) => (
              <div key={s.num} className="solution-row">
                <div className="l">
                  <span className="num">— {s.num}</span>
                  <span className="t">{s.title}</span>
                </div>
                <div className="r">{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key technical work ─────────────────────────────── */}
      <section className="cs-block" style={{ borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow"><span className="dot" />Key technical work</span>
              <h2>The pieces of the build that mattered most.</h2>
            </div>
          </div>
          <div className="work-grid">
            {cs.techWork.map((w) => (
              <div key={w.num} className="work-card">
                <div className="head">
                  <span className="ix">{w.num}</span>
                  <h4>{w.title}</h4>
                </div>
                <p>{w.body}</p>
                <div className="tags">
                  {w.tags.map((t) => (
                    <span key={t} className="tag-sm">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Business impact ────────────────────────────────── */}
      <section className="cs-block" style={{ borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow" style={{ fontFamily: "var(--mono)", fontSize: 11 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--good)", boxShadow: "0 0 0 4px rgba(126,217,159,0.12)", display: "inline-block", flexShrink: 0 }} />
                Business impact
              </span>
              <h2>What came out of it.</h2>
            </div>
          </div>
          <div className="impact-grid">
            {cs.impact.map((item, i) => (
              <div key={i} className="impact-cell">
                <span className="placeholder-flag">placeholder</span>
                <span className="k">{item.key}</span>
                <span className="v acc">
                  {item.value}
                  {item.unit && <span className="unit">{item.unit}</span>}
                </span>
                <span className="d">{item.desc}</span>
              </div>
            ))}
          </div>
          <p className="impact-note">
            Values marked <strong style={{ color: "var(--fg-2)", fontWeight: 500 }}>placeholder</strong> are representative — replace with measured numbers from the live system once available.
          </p>
        </div>
      </section>

      {/* ── Final result ───────────────────────────────────── */}
      <section className="cs-block" style={{ borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="result-panel">
            <div>
              <span className="eyebrow"><span className="dot" />Final result</span>
              <h3>{cs.resultTitle}</h3>
              <p>{cs.resultBody}</p>
            </div>
            <div className="result-side">
              {cs.resultChecks.map((c) => (
                <div key={c} className="item">
                  <span className="check">✓</span>
                  <span className="t">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section id="contact" style={{ padding: "0 var(--pad-x)" }}>
        <div className="cs-cta">
          <div className="cta-l">
            <span className="eyebrow"><span className="dot" />Next engagement</span>
            <h2>Have a similar system to build or optimize?</h2>
            <p className="subnote" style={{ marginTop: 18 }}>{cs.ctaNote}</p>
          </div>
          <div className="cta-r">
            <a
              href="https://calendly.com/billalaashraf/1-1-with-bilal"
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary"
            >
              Book a call
            </a>
            <span style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.02em", textTransform: "uppercase", color: "var(--fg-4)" }}>
              bilalasharf@gmail.com
            </span>
          </div>
        </div>
      </section>

      {/* ── Prev / Next ────────────────────────────────────── */}
      <nav className="cs-nav" aria-label="Case study navigation">
        {cs.prev ? (
          <a href={cs.prev.href}>
            <span className="dir"><span className="arr">←</span> Previous</span>
            <span className="cs-nav-title">{cs.prev.label}</span>
          </a>
        ) : (
          <a href="/case-studies">
            <span className="dir"><span className="arr">←</span> Back</span>
            <span className="cs-nav-title">All case studies</span>
          </a>
        )}
        {cs.next ? (
          <a href={cs.next.href}>
            <span className="dir">Next case · {String(parseInt(cs.num) + 1).padStart(2, "0")}</span>
            <span className="cs-nav-title">{cs.next.label} <span className="arr">→</span></span>
          </a>
        ) : (
          <a href="/case-studies">
            <span className="dir">Done</span>
            <span className="cs-nav-title">All case studies <span className="arr">→</span></span>
          </a>
        )}
      </nav>
    </>
  );
}
