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
            Send a few sentences about what you&apos;re working on. I&apos;ll respond personally within one business day.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 14, position: "relative" }}>
          <a href="https://calendly.com/billalaashraf/1-1-with-bilal" target="_blank" rel="noopener noreferrer" className="btn primary">Book a call</a>
          <span style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.02em", textTransform: "uppercase", color: "var(--fg-4)" }}>
            bilalasharf@gmail.com
          </span>
        </div>
      </div>
    </section>
  );
}
