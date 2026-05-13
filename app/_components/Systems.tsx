const domains = [
  { ix: "01", label: "Workflow Automation" },
  { ix: "02", label: "Queue Processing" },
  { ix: "03", label: "Inventory Sync" },
  { ix: "04", label: "Real-time Operations" },
  { ix: "05", label: "Payments" },
  { ix: "06", label: "Infrastructure" },
  { ix: "07", label: "Retry-safe Systems" },
  { ix: "08", label: "Operational Dashboards" },
];

const nodes = [
  { label: "API", accent: true },
  { label: "Queue Workers", accent: false },
  { label: "Retry Logic", accent: false },
  { label: "Webhooks", accent: false },
  { label: "Database", accent: true },
  { label: "Third-party", accent: false },
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
            <span className="eyebrow"><span className="dot" />Operational systems</span>
            <h2>The shape of the systems I run.</h2>
          </div>
          <p className="subnote">
            Systems designed for operational reliability, visibility, and long-term maintainability.
          </p>
        </div>

        <div className="opsys">
          {/* Animated architecture diagram */}
          <div
            className="arch"
            role="img"
            aria-label="Reference topology: API to queue workers, retry logic, webhooks, database, and third-party services, with an observability spine"
          >
            <span className="topcap">Reference topology</span>
            <span className="topcap-r">production</span>

            <div className="arch-row">
              {nodes.map((node, i) => (
                <>
                  <span key={node.label} className={`anode${node.accent ? " acc" : ""}`}>
                    {node.label}
                  </span>
                  {i < nodes.length - 1 && (
                    <span key={`line-${i}`} className="aline">
                      <span className="pkt" style={{ animationDelay: `${i * 0.8}s` }} />
                    </span>
                  )}
                </>
              ))}
            </div>

            <div className="arch-spine">
              <span className="lbl">Observability</span>
              <span className="ticks">
                {Array.from({ length: 13 }, (_, i) => (
                  <i key={i} className={i % 2 === 0 ? "on" : ""} />
                ))}
              </span>
              <span className="pr">traces · metrics · logs</span>
            </div>
          </div>

          {/* Domains strip */}
          <div className="doms">
            {domains.map((d) => (
              <div key={d.ix} className="dom">
                <span className="ix">{d.ix}</span>
                {d.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
