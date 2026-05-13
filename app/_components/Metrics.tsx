interface Tile {
  label: string;
  trend: string;
  trendFlat?: boolean;
  value: string;
  unit: string;
  accent?: boolean;
  barWidth: string;
  barGood: boolean;
  ctx: string;
}

const tiles: Tile[] = [
  {
    label: "Queue reliability",
    trend: "↑ 0.04",
    value: "99.94",
    unit: "%",
    barWidth: "96%",
    barGood: true,
    ctx: "DLQ swept daily · 0 manual replays this week",
  },
  {
    label: "Retry recovery time",
    trend: "↓ 2.1s",
    value: "4.2",
    unit: "s · p95",
    barWidth: "42%",
    barGood: false,
    ctx: "jittered backoff · 3 attempts max",
  },
  {
    label: "Sync accuracy",
    trend: "↑ 0.02",
    value: "99.97",
    unit: "%",
    barWidth: "97%",
    barGood: true,
    ctx: "reconciled hourly · drift below 5s",
  },
  {
    label: "Deployment stability",
    trend: "→ stable",
    trendFlat: true,
    value: "98.6",
    unit: "%",
    barWidth: "86%",
    barGood: false,
    ctx: "canary 10% · auto-rollback on p95 drift",
  },
  {
    label: "Infrastructure efficiency",
    trend: "↓ 9.4",
    value: "−41",
    unit: "% mo/mo",
    accent: true,
    barWidth: "62%",
    barGood: false,
    ctx: "right-sized · replica routing landed",
  },
  {
    label: "Workflow throughput",
    trend: "↑ 4.2",
    value: "13.8k",
    unit: " req/min",
    barWidth: "78%",
    barGood: true,
    ctx: "peak 14.2k · SLO budget unused",
  },
];

export default function Metrics() {
  return (
    <section
      id="metrics"
      style={{ padding: "96px 0", borderBottom: "1px solid var(--line)" }}
    >
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="eyebrow"><span className="dot" />Operational surface</span>
            <h2>What the platforms I run look like at the panel.</h2>
          </div>
          <p className="subnote">
            Aggregate from a recent normal week across systems currently under retainer. Treated as targets, not trophies. Per-engagement figures available on request.
          </p>
        </div>

        <div className="ops-snap">
          <div className="ohead">
            <span className="ttl">operational surface · aggregate</span>
            <span className="spc" />
            <span className="rng">
              <span>24h</span>
              <span className="on">7d</span>
              <span>30d</span>
            </span>
            <span className="live">Live</span>
          </div>

          <div className="ops-snap-grid">
            {tiles.map((t) => (
              <div key={t.label} className="ops-snap-tile">
                <div className="lbl">
                  <span>{t.label}</span>
                  <span className={`trend${t.trendFlat ? " flat" : ""}`}>{t.trend}</span>
                </div>
                <div className={`v${t.accent ? " acc" : ""}`}>
                  {t.value}
                  <span className="u">{t.unit}</span>
                </div>
                <div className={`bar${t.barGood ? " good" : ""}`}>
                  <i style={{ width: t.barWidth }} />
                </div>
                <span className="ctx">{t.ctx}</span>
              </div>
            ))}
          </div>

          <div className="ofoot">
            <span className="note">
              Figures aggregated across systems under retainer. Representative of a recent normal week, not a launch.
            </span>
            <span>updated 2026-05-12 09:14 UTC</span>
          </div>
        </div>
      </div>
    </section>
  );
}
