import CaseCard from "./CaseCard";

const cases = [
  {
    num: "01",
    href: "/case-studies/dotshop",
    title: "DotShop.ai",
    tail: "Multi-Region Ecommerce Platform",
    summary: "Architected and developed a curated fashion, beauty, and jewelry ecommerce platform with Next.js frontend, REST backend, relational database, AWS infrastructure, fintech payment APIs, and real-time Shopify sync.",
    tags: ["Next.js","AWS","Shopify API","Payments","Ecommerce","Backend Architecture"],
    meta: "Architecture · 8 mo",
    variant: "dotshop" as const,
  },
  {
    num: "02",
    href: "/case-studies/clinic-dashboard",
    title: "Clinic Dashboard",
    tail: "Automation & Patient Follow-Up",
    summary: "Built a live clinic operations dashboard with Google Sheets sync, n8n automations, reminder tracking, action queue, revenue-at-risk metrics, and patient workflow management.",
    tags: ["Next.js","n8n","Google Sheets","Automation","Dashboard","CRM"],
    meta: "Build · 4 mo",
    variant: "clinic" as const,
  },
  {
    num: "03",
    href: "/case-studies/web-shop-manager",
    title: "Web Shop Manager",
    tail: "Backend & Cloud Optimization",
    summary: "Optimized backend infrastructure, reduced AWS/RDS overhead, and modernized legacy PHP architecture toward a scalable Go + TypeScript-based backend system.",
    tags: ["AWS","RDS","Go","TypeScript","Backend Optimization"],
    meta: "Ongoing · retainer",
    variant: "webshop" as const,
  },
  {
    num: "04",
    href: "/case-studies/scrively",
    title: "Scrively",
    tail: "AI Workflow Rendering Engine",
    summary: "Developed core rendering engine architecture for dynamic AI-driven workflows, structured interactions, state transitions, and adaptive user experiences.",
    tags: ["AI Workflows","Rendering Engine","Frontend Architecture"],
    meta: "Build · 6 mo",
    variant: "scrively" as const,
  },
  {
    num: "05",
    href: "/case-studies/monkeytilt",
    title: "MonkeyTilt",
    tail: "Gaming Platform Performance Optimization",
    summary: "Optimized database queries, improved gaming and business logic layers, and automated infrastructure deployment workflows for a real-time gaming platform.",
    tags: ["Database Optimization","Infrastructure Automation","Backend Performance","Real-time"],
    meta: "Engagement · 5 mo",
    variant: "monkeytilt" as const,
    wide: true,
  },
] as const;

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      style={{ padding: "96px 0", borderBottom: "1px solid var(--line)" }}
    >
      <div className="wrap">
        <div className="sec-head">
          <div>
            <h2>Production systems I&apos;ve architected, shipped, and operated.</h2>
          </div>
          <div className="meta">
            <span style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.02em", textTransform: "uppercase", color: "var(--fg-3)" }}>
              05 case studies
            </span>
            <a href="/case-studies" className="btn ghost sm">All projects <span className="arr">→</span></a>
          </div>
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
          className="cases-grid"
        >
          {cases.map((c, i) => (
            <CaseCard key={c.num} {...c} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cases-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
