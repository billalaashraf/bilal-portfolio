export default function CTA() {
  return (
    <section id="contact" style={{ padding: "0 var(--pad-x)" }}>
      <div
        style={{
          margin: "96px auto",
          maxWidth: "var(--maxw)",
          padding: "64px clamp(20px, 4vw, 56px)",
          border: "1px solid var(--line)",
          borderRadius: 18,
          background:
            "radial-gradient(ellipse 60% 80% at 100% 0%, rgba(255,255,255,0.025), transparent 60%), var(--bg-card)",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 32,
          flexWrap: "wrap",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle grid in top-right */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 50% 70% at 100% 100%, #000 10%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse 50% 70% at 100% 100%, #000 10%, transparent 70%)",
          }}
        />

        <div style={{ maxWidth: 640, position: "relative" }}>
          <span className="eyebrow"><span className="dot"/>Get in touch</span>
          <h2 style={{
            margin: "14px 0 0",
            fontSize: "clamp(28px, 3.4vw, 42px)",
            lineHeight: 1.05,
            letterSpacing: "-0.028em",
            fontWeight: 500,
            textWrap: "balance" as never,
          }}>
            Have a system that needs to be built, fixed, or automated?
          </h2>
          <p className="subnote" style={{ marginTop: 18 }}>
            Send a few sentences about what you&apos;re working on. You&apos;ll hear back from me directly — not a sales rep — within one business day.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 14, position: "relative" }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.1em",
            color: "var(--fg-2)", textTransform: "uppercase",
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "var(--good)",
              boxShadow: "0 0 0 4px rgba(126,217,159,0.12)",
              flexShrink: 0,
            }}/>
            Q3 2026 · taking 1–2 new engagements
          </span>
          <a href="https://calendly.com/billalaashraf/1-1-with-bilal" target="_blank" rel="noopener noreferrer" className="btn primary">Book a call <span className="arr">→</span></a>
          <span style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.02em", textTransform: "uppercase", color: "var(--fg-4)" }}>
            hello@bilalashraf.dev
          </span>
        </div>
      </div>
    </section>
  );
}
