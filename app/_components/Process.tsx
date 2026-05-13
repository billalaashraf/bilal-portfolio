const steps = [
  {
    n: "01", key: "DISCOVER", title: "Discover",
    desc: "Working sessions to map the system, users, constraints, and the actual business problem.",
  },
  {
    n: "02", key: "ARCHITECT", title: "Architect",
    desc: "Data model, service boundaries, integration map. Trade-offs written down — not implied.",
  },
  {
    n: "03", key: "BUILD", title: "Build",
    desc: "Two-week loops with shipped previews. I'm in the codebase from day one — no handoff layer.",
  },
  {
    n: "04", key: "INTEGRATE", title: "Integrate",
    desc: "Payments, CRMs, Shopify, internal services — wired with retries, idempotency, and observability.",
  },
  {
    n: "05", key: "LAUNCH", title: "Launch",
    desc: "Production cutover with rollback, runbooks, and an on-call window I sit through with you.",
  },
  {
    n: "06", key: "OPTIMIZE", title: "Optimize",
    desc: "Cost, latency, and reliability after launch. Most clients keep me on a small retainer.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      style={{ padding: "96px 0", borderBottom: "1px solid var(--line)" }}
    >
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="eyebrow"><span className="dot"/>How I work</span>
            <h2>From the first call to live in production.</h2>
          </div>
          <p className="subnote">
            Short loops, clear artifacts at each step. You work with me directly — no account managers, no proxies, no handoff layer.
          </p>
        </div>

        <div className="process">
          {steps.map((s) => (
            <div key={s.n} className="step">
              <div className="glyph">{s.n}</div>
              <span className="ix">{s.key}</span>
              <h5>{s.title}</h5>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
