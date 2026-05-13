interface FooterProps {
  /** Prepended to anchor hrefs. Pass "/" when rendering on a sub-page. */
  prefix?: string;
}

export default function Footer({ prefix = "" }: FooterProps) {
  return (
    <footer style={{ borderTop: "1px solid var(--line)", padding: "48px 0 56px", color: "var(--fg-3)", fontSize: 13.5 }}>
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 32, flexWrap: "wrap" }}>

          {/* Brand — text only, no mark */}
          <div>
            <a
              href={prefix || "/"}
              style={{ display: "flex", flexDirection: "column", gap: 4, textDecoration: "none" }}
            >
              <span style={{ fontWeight: 600, fontSize: 15, letterSpacing: "-0.01em", color: "var(--fg)", lineHeight: 1 }}>
                Bilal Ashraf
              </span>
              <span style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.06em", color: "var(--fg-4)", textTransform: "uppercase", lineHeight: 1 }}>
                AI Systems Engineer
              </span>
            </a>
            <p className="subnote" style={{ marginTop: 16, maxWidth: 360 }}>
              Senior full-stack engineer building AI-powered systems, automation, internal tooling, and the backend infrastructure underneath them.
            </p>
          </div>

          <div style={{ display: "flex", gap: 64, flexWrap: "wrap" }}>
            <FooterCol title="Index" links={[
              { label: "Work",    href: `${prefix}#case-studies` },
              { label: "Systems", href: `${prefix}#systems` },
              { label: "Process", href: `${prefix}#process` },
              { label: "Contact", href: `${prefix}#contact` },
            ]} />
            <FooterCol title="Elsewhere" links={[
              { label: "GitHub",   href: "https://github.com/billalaashraf",    external: true },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/bashraf", external: true },
            ]} />
            <FooterCol title="Contact" links={[
              { label: "bilalasharf@gmail.com", href: "mailto:bilalasharf@gmail.com" },
              { label: "Book a call", href: "https://calendly.com/billalaashraf/1-1-with-bilal", external: true },
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
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string; external?: boolean }[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.1em", color: "var(--fg-4)", textTransform: "uppercase", marginBottom: 6 }}>
        {title}
      </span>
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          className="footer-link"
          {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}
