const systems = [
  {
    ix: "— 01",
    title: "AI Agents & Workflow Automation",
    desc: "Production-grade agents, retrieval pipelines, and orchestration that move work — not just demos.",
    bullets: ["n8n · Temporal", "OpenAI · Anthropic", "RAG · tool use"],
  },
  {
    ix: "— 02",
    title: "Internal Dashboards & Admin Tools",
    desc: "Operations UIs with real-time data, role-based access, and audit trails your team will actually use daily.",
    bullets: ["Next.js · Retool", "Postgres · ClickHouse", "Auth · SSO · RBAC"],
  },
  {
    ix: "— 03",
    title: "Ecommerce & Marketplace Systems",
    desc: "Storefronts, checkout, multi-region payments, inventory and order workflows that hold up under real load.",
    bullets: ["Shopify · Medusa", "Stripe · Adyen", "Order ops · sync"],
  },
  {
    ix: "— 04",
    title: "Backend APIs & Cloud Infrastructure",
    desc: "Typed APIs, event pipelines, and AWS infrastructure tuned for predictable cost, latency, and on-call sanity.",
    bullets: ["Go · TypeScript", "AWS · Terraform", "RDS · Redis · SQS"],
  },
  {
    ix: "— 05",
    title: "Third-Party Integrations",
    desc: "CRM, payments, Shopify, accounting, identity, and the long tail of vendor APIs — wired up reliably.",
    bullets: ["Stripe · Shopify", "HubSpot · Salesforce", "Webhooks · retries"],
  },
  {
    ix: "— 06",
    title: "Data Sync, Reporting & Ops Tools",
    desc: "ETL, sheets and warehouse syncs, ops dashboards, and the small internal tools that compound team leverage.",
    bullets: ["Airbyte · dbt", "BigQuery · Postgres", "Sheets · Metabase"],
  },
];

export default function Systems() {
  return (
    <section
      id="systems"
      style={{ padding: "96px 0", borderBottom: "1px solid var(--line)" }}
    >
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="eyebrow"><span className="dot"/>Capabilities</span>
            <h2>Systems I build.</h2>
          </div>
          <p className="subnote">
            Six things I build for product teams and operators. End-to-end — architecture, implementation, integration, and operating them in production.
          </p>
        </div>

        <div className="systems">
          {systems.map((s) => (
            <div key={s.ix} className="sys">
              <span className="ix">{s.ix}</span>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
              <div className="bullets">
                {s.bullets.map((b) => <span key={b}>{b}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
