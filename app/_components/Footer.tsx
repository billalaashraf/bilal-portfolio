export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--line)", padding: "48px 0 56px", color: "var(--fg-3)", fontSize: 13.5 }}>
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 32, flexWrap: "wrap" }}>
          <div>
            <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 600, letterSpacing: "-0.01em", color: "var(--fg)" }}>
              <span
                aria-hidden="true"
                style={{
                  width: 22, height: 22, borderRadius: 6,
                  background: "linear-gradient(135deg, var(--fg) 0 50%, transparent 50% 100%), var(--accent)",
                  display: "block", flexShrink: 0,
                }}
              />
              Bilal Ashraf
            </a>
            <p className="subnote" style={{ marginTop: 14, maxWidth: 360 }}>
              Senior full-stack engineer building AI-powered systems, automation, internal tooling, and the backend infrastructure underneath them.
            </p>
          </div>

          <div style={{ display: "flex", gap: 64, flexWrap: "wrap" }}>
            <FooterCol title="Index" links={[
              { label: "Work", href: "#work" },
              { label: "Systems", href: "#systems" },
              { label: "Process", href: "#process" },
              { label: "Contact", href: "#contact" },
            ]} />
            <FooterCol title="Elsewhere" links={[
              { label: "GitHub", href: "#" },
              { label: "LinkedIn", href: "#" },
              { label: "X / Twitter", href: "#" },
              { label: "Read.cv", href: "#" },
            ]} />
            <FooterCol title="Contact" links={[
              { label: "hello@bilalashraf.dev", href: "mailto:hello@bilalashraf.dev" },
              { label: "Book a call", href: "#" },
            ]} />
          </div>
        </div>

        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          marginTop: 48, paddingTop: 24, borderTop: "1px solid var(--line)",
          flexWrap: "wrap", gap: 12,
        }}>
          <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.04em", color: "var(--fg-4)", textTransform: "uppercase" }}>
            © 2026 Bilal Ashraf · All rights reserved
          </span>
          <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.04em", color: "var(--fg-4)", textTransform: "uppercase" }}>
            v 2.6 · Hand-built
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.1em", color: "var(--fg-4)", textTransform: "uppercase", marginBottom: 6 }}>
        {title}
      </span>
      {links.map((l) => (
        <a key={l.label} href={l.href} className="footer-link">
          {l.label}
        </a>
      ))}
    </div>
  );
}
