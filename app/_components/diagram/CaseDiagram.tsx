/* All five diagram variants. aria-hidden on parent; aria-label on the .ph wrapper. */

export type DiagramVariant = "dotshop" | "clinic" | "webshop" | "scrively" | "monkeytilt";

export default function CaseDiagram({ variant }: { variant: DiagramVariant }) {
  switch (variant) {
    case "dotshop":    return <DotShop />;
    case "clinic":     return <Clinic />;
    case "webshop":    return <WebShop />;
    case "scrively":   return <Scrively />;
    case "monkeytilt": return <MonkeyTilt />;
  }
}

/* ── 01 DotShop.ai ───────────────────────────────────────── */
function DotShop() {
  return (
    <div className="dgm">
      <div className="dgm-bar">
        <span className="dots"><i/><i/><i/></span>
        <span className="ttl">dotshop.ai / admin</span>
        <span className="spc"/>
        <span className="pill ok">Shopify · Synced</span>
        <span className="pill">Stripe</span>
      </div>
      <div className="dgm-body" style={{ padding: 12, gap: 10 }}>
        <div className="dgm-side">
          <i className="on"/><i/><i/><i/><i/>
        </div>
        <div className="dgm-col dgm-grow" style={{ gap: 10 }}>
          <div className="dgm-row" style={{ gap: 8 }}>
            <div className="dgm-stat"><span className="k">Today · GMV</span><span className="v">$48,260</span><span className="d">↑ 12.4%</span></div>
            <div className="dgm-stat"><span className="k">Orders</span><span className="v">312</span><span className="d">↑ 8 vs avg</span></div>
            <div className="dgm-stat"><span className="k">Sync lag</span><span className="v">0.6s</span><span className="d">live</span></div>
          </div>
          <div className="dgm-grid4">
            <div className="dgm-prod"><div className="sw a"/><div className="meta"><b>SKU 14</b><span>$128</span></div></div>
            <div className="dgm-prod"><div className="sw b"/><div className="meta"><b>SKU 22</b><span>$84</span></div></div>
            <div className="dgm-prod"><div className="sw c"/><div className="meta"><b>SKU 31</b><span>$210</span></div></div>
            <div className="dgm-prod"><div className="sw"/><div className="meta"><b>SKU 47</b><span>$96</span></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── 02 Clinic Dashboard ─────────────────────────────────── */
function Clinic() {
  return (
    <div className="dgm">
      <div className="dgm-bar">
        <span className="dots"><i/><i/><i/></span>
        <span className="ttl">Clinic Ops · Today</span>
        <span className="spc"/>
        <span className="pill">n8n</span>
        <span className="pill ok">Sheets</span>
      </div>
      <div className="dgm-body" style={{ flexDirection: "column", gap: 8 }}>
        <div className="dgm-row">
          <div className="dgm-stat" style={{ padding: "7px 10px" }}><span className="k">Revenue at risk</span><span className="v">$24,680</span><span className="d neg">↑ 4 patients</span></div>
          <div className="dgm-stat" style={{ padding: "7px 10px" }}><span className="k">Active patients</span><span className="v">38</span><span className="d">today</span></div>
          <div className="dgm-stat" style={{ padding: "7px 10px" }}><span className="k">Follow-ups due</span><span className="v">12</span><span className="d">3 overdue</span></div>
        </div>
        <div className="dgm-box dgm-grow" style={{ display: "flex", flexDirection: "column", padding: "6px 12px 2px" }}>
          <div className="h" style={{ marginBottom: 2 }}>Action queue · auto-routed</div>
          <div className="dgm-line"><span className="name">Maya P.</span><span className="badge warn">2nd reminder</span><span className="badge dim">SMS · 2d</span><span className="act">Send →</span></div>
          <div className="dgm-line"><span className="name">Daniel R.</span><span className="badge">Booking lapse</span><span className="badge dim">21d cold</span><span className="act">Reactivate →</span></div>
          <div className="dgm-line"><span className="name">Aisha O.</span><span className="badge warn">Invoice 14d</span><span className="badge dim">$640</span><span className="act">Chase →</span></div>
        </div>
      </div>
    </div>
  );
}

/* ── 03 Web Shop Manager ─────────────────────────────────── */
function WebShop() {
  return (
    <div className="dgm">
      <div className="dgm-bar">
        <span className="dots"><i/><i/><i/></span>
        <span className="ttl">AWS · us-east-1 / infra</span>
        <span className="spc"/>
        <span className="pill">Terraform</span>
        <span className="pill ok">Healthy</span>
      </div>
      <div className="dgm-body" style={{ flexDirection: "column", gap: 10, padding: "14px 16px" }}>
        <div className="dgm-row" style={{ justifyContent: "center", gap: 6 }}>
          <span className="dgm-node dim"><i className="sq"/>Client</span>
          <span className="dgm-arrow">──▶</span>
          <span className="dgm-node dim"><i className="sq"/>CloudFront</span>
          <span className="dgm-arrow">──▶</span>
          <span className="dgm-node accent"><i className="sq" style={{ background: "var(--accent)" }}/>API · Go</span>
        </div>
        <div className="dgm-row" style={{ justifyContent: "center", gap: 24 }}>
          <div className="dgm-vline" style={{ height: 16 }}/>
          <div className="dgm-vline" style={{ height: 16 }}/>
        </div>
        <div className="dgm-row" style={{ justifyContent: "center", gap: 14 }}>
          <span className="dgm-node dim"><i className="sq"/>Postgres · RDS</span>
          <span className="dgm-node dim"><i className="sq"/>Redis</span>
          <span className="dgm-node dim"><i className="sq"/>SQS</span>
        </div>
        <div className="dgm-row" style={{ gap: 10, marginTop: "auto" }}>
          <div className="dgm-box dgm-grow" style={{ padding: "8px 10px" }}>
            <div className="dgm-cmp">
              <div className="lab"><span>p95 latency</span><span style={{ color: "var(--fg)" }}>280ms → 96ms</span></div>
              <div className="bar"><i style={{ width: "34%" }}/></div>
              <div className="bar acc"><i style={{ width: "88%" }}/></div>
            </div>
          </div>
          <div className="dgm-box dgm-grow" style={{ padding: "8px 10px" }}>
            <div className="dgm-cmp">
              <div className="lab"><span>RDS / mo</span><span style={{ color: "var(--fg)" }}>−41%</span></div>
              <div className="bar"><i style={{ width: "30%" }}/></div>
              <div className="bar acc"><i style={{ width: "71%" }}/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── 04 Scrively ─────────────────────────────────────────── */
function Scrively() {
  return (
    <div className="dgm">
      <div className="dgm-bar">
        <span className="dots"><i/><i/><i/></span>
        <span className="ttl">scrively / engine.render_step</span>
        <span className="spc"/>
        <span className="pill live">Streaming</span>
      </div>
      <div className="dgm-body" style={{ flexDirection: "column", gap: 12, padding: "14px 16px" }}>
        <div className="dgm-stages">
          <div className="dgm-stage"><span className="n">01</span><span className="l">Prompt</span></div>
          <span className="dgm-arrow">→</span>
          <div className="dgm-stage"><span className="n">02</span><span className="l">Parse</span></div>
          <span className="dgm-arrow">→</span>
          <div className="dgm-stage on"><span className="n">03</span><span className="l">Render</span></div>
          <span className="dgm-arrow">→</span>
          <div className="dgm-stage"><span className="n">04</span><span className="l">State</span></div>
        </div>
        <div className="dgm-box" style={{ padding: "8px 12px" }}>
          <div className="h" style={{ marginBottom: 6 }}>State transition</div>
          <div className="dgm-row" style={{ gap: 6, flexWrap: "wrap" }}>
            <span className="dgm-chip">idle</span>
            <span className="dgm-arrow">→</span>
            <span className="dgm-chip">streaming</span>
            <span className="dgm-arrow">→</span>
            <span className="dgm-chip" style={{ color: "var(--accent)", borderColor: "rgba(217,164,99,0.35)" }}>rendering</span>
            <span className="dgm-arrow">→</span>
            <span className="dgm-chip" style={{ color: "var(--fg-3)" }}>settled</span>
          </div>
        </div>
        <div className="dgm-msg" style={{ marginTop: "auto" }}>
          <span className="av"/>
          <span>Generating step 3 of 5 · adaptive layout<span className="dgm-cursor"/></span>
        </div>
      </div>
    </div>
  );
}

/* ── 05 MonkeyTilt ───────────────────────────────────────── */
function MonkeyTilt() {
  return (
    <div className="dgm">
      <div className="dgm-bar">
        <span className="dots"><i/><i/><i/></span>
        <span className="ttl">monkeytilt / backend.performance</span>
        <span className="spc"/>
        <span className="pill">us-east</span>
        <span className="pill live">Live</span>
      </div>
      <div className="dgm-body" style={{ gap: 14, padding: "14px 18px" }}>
        {/* Left: stat tiles */}
        <div className="dgm-col" style={{ gap: 10, flex: "0 0 260px" }}>
          <div className="dgm-row" style={{ gap: 8 }}>
            <div className="dgm-stat">
              <span className="k">p50 query</span>
              <span className="v">12<span style={{ fontSize: 11, color: "var(--fg-3)" }}> ms</span></span>
              <span className="d">↓ 64%</span>
            </div>
            <div className="dgm-stat">
              <span className="k">p95 query</span>
              <span className="v">48<span style={{ fontSize: 11, color: "var(--fg-3)" }}> ms</span></span>
              <span className="d">↓ 71%</span>
            </div>
          </div>
          <div className="dgm-row" style={{ gap: 8 }}>
            <div className="dgm-stat">
              <span className="k">Throughput</span>
              <span className="v">18.4k<span style={{ fontSize: 11, color: "var(--fg-3)" }}> rps</span></span>
              <span className="d">peak 22.1k</span>
            </div>
            <div className="dgm-stat">
              <span className="k">Error rate</span>
              <span className="v">0.04<span style={{ fontSize: 11, color: "var(--fg-3)" }}> %</span></span>
              <span className="d">SLO ✓</span>
            </div>
          </div>
        </div>

        {/* Center: sparkline */}
        <div className="dgm-box dgm-grow" style={{ display: "flex", flexDirection: "column", padding: "10px 12px", minWidth: 0 }}>
          <div className="dgm-row" style={{ justifyContent: "space-between" }}>
            <div className="h" style={{ margin: 0 }}>Query latency · last 24h</div>
            <div className="dgm-row" style={{ gap: 10, fontSize: 9.5, color: "var(--fg-3)" }}>
              <span className="dgm-row" style={{ gap: 4 }}>
                <i style={{ width: 8, height: 2, background: "var(--accent)", display: "inline-block", borderRadius: 1 }}/>after
              </span>
              <span className="dgm-row" style={{ gap: 4 }}>
                <i style={{ width: 8, height: 2, background: "#33333A", display: "inline-block", borderRadius: 1 }}/>before
              </span>
            </div>
          </div>
          <div className="dgm-spark" style={{ flex: 1, marginTop: 6 }}>
            <svg viewBox="0 0 300 80" preserveAspectRatio="none">
              <defs>
                <linearGradient id="g-acc" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.78 0.13 70)" stopOpacity="0.25"/>
                  <stop offset="100%" stopColor="oklch(0.78 0.13 70)" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <line x1="0" y1="20" x2="300" y2="20" stroke="#1A1A1F" strokeDasharray="2 4"/>
              <line x1="0" y1="40" x2="300" y2="40" stroke="#1A1A1F" strokeDasharray="2 4"/>
              <line x1="0" y1="60" x2="300" y2="60" stroke="#1A1A1F" strokeDasharray="2 4"/>
              <path d="M0,22 L20,18 L40,28 L60,16 L80,24 L100,20 L120,30 L140,14 L160,22 L180,26 L200,18 L220,24 L240,20 L260,28 L280,22 L300,26" fill="none" stroke="#3A3A42" strokeWidth="1.4"/>
              <path d="M0,62 L20,58 L40,64 L60,56 L80,60 L100,54 L120,58 L140,52 L160,60 L180,56 L200,62 L220,54 L240,58 L260,56 L280,60 L300,58 L300,80 L0,80 Z" fill="url(#g-acc)"/>
              <path d="M0,62 L20,58 L40,64 L60,56 L80,60 L100,54 L120,58 L140,52 L160,60 L180,56 L200,62 L220,54 L240,58 L260,56 L280,60 L300,58" fill="none" stroke="oklch(0.78 0.13 70)" strokeWidth="1.6"/>
            </svg>
          </div>
        </div>

        {/* Right: deploy pipeline */}
        <div className="dgm-box" style={{ flex: "0 0 200px", display: "flex", flexDirection: "column", padding: "10px 12px", gap: 8 }}>
          <div className="h" style={{ margin: 0 }}>Deploy pipeline · v2.41</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <div className="dgm-row" style={{ gap: 6, fontSize: 10 }}>
              <span className="dgm-dots"><i className="ok"/></span>
              <span style={{ color: "var(--fg)" }}>Build</span>
              <span style={{ marginLeft: "auto", color: "var(--fg-4)" }}>42s</span>
            </div>
            <div className="dgm-row" style={{ gap: 6, fontSize: 10 }}>
              <span className="dgm-dots"><i className="ok"/></span>
              <span style={{ color: "var(--fg)" }}>Test</span>
              <span style={{ marginLeft: "auto", color: "var(--fg-4)" }}>1m 08s</span>
            </div>
            <div className="dgm-row" style={{ gap: 6, fontSize: 10 }}>
              <span className="dgm-dots"><i className="run"/></span>
              <span style={{ color: "var(--accent)" }}>Canary 10%</span>
              <span style={{ marginLeft: "auto", color: "var(--fg-4)" }}>2m 14s</span>
            </div>
            <div className="dgm-row" style={{ gap: 6, fontSize: 10 }}>
              <span className="dgm-dots"><i/></span>
              <span style={{ color: "var(--fg-3)" }}>Rollout</span>
              <span style={{ marginLeft: "auto", color: "var(--fg-4)" }}>queued</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
