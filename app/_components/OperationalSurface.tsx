const tiles = [
  {
    key: "Queue reliability",
    value: "99.94",
    unit: "%",
    ctx: "DLQ swept daily · 0 manual replays this week",
    good: true,
    barWidth: "96%",
  },
  {
    key: "Sync accuracy",
    value: "99.97",
    unit: "%",
    ctx: "Reconciled hourly · drift below 5s",
    good: true,
    barWidth: "97%",
  },
  {
    key: "Infrastructure efficiency",
    value: "−41",
    unit: "% mo/mo",
    ctx: "Right-sized · replica routing landed",
    good: false,
    barWidth: "62%",
    accent: true,
  },
  {
    key: "Workflow throughput",
    value: "13.8k",
    unit: "req/min",
    ctx: "Peak 14.2k · SLO budget unused",
    good: true,
    barWidth: "78%",
  },
];

export default function OperationalSurface() {
  return (
    <section
      style={{ padding: "96px 0", borderBottom: "1px solid var(--line)" }}
    >
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="eyebrow"><span className="dot" />Operational surface</span>
            <h2>What the platforms I run look like at the panel.</h2>
          </div>
          <p className="subnote">
            Aggregate from a recent normal week across systems under retainer.
          </p>
        </div>

        <div className="ops-grid">
          {tiles.map((t) => (
            <div key={t.key} className="ops-tile">
              <span className="ops-k">{t.key}</span>
              <div className={`ops-v${t.accent ? " acc" : ""}`}>
                {t.value}
                <span className="ops-u">{t.unit}</span>
              </div>
              <div className={`ops-bar${t.good ? " good" : ""}`}>
                <i style={{ width: t.barWidth }} />
              </div>
              <span className="ops-ctx">{t.ctx}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
