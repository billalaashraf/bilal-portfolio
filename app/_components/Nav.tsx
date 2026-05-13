interface NavProps {
  /** Prepended to anchor hrefs — pass "/" when rendering on a sub-page */
  prefix?: string;
}

export default function Nav({ prefix = "" }: NavProps) {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "saturate(140%) blur(14px)",
        WebkitBackdropFilter: "saturate(140%) blur(14px)",
        background: "rgba(10,10,11,0.72)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <a href={prefix || "/"} className="nav-brand">
          <span
            aria-hidden="true"
            style={{
              width: 22, height: 22, borderRadius: 6,
              background: "linear-gradient(135deg, var(--fg) 0 50%, transparent 50% 100%), var(--accent)",
              display: "block", flexShrink: 0,
            }}
          />
          <span>Bilal Ashraf</span>
        </a>

        <div className="nav-links-desktop">
          <a href={`${prefix}#work`} className="nav-link">Work</a>
          <a href={`${prefix}#systems`} className="nav-link">Systems</a>
          <a href={`${prefix}#process`} className="nav-link">Process</a>
          <a href={`${prefix}#contact`} className="nav-link">Contact</a>
        </div>

        <a href="https://calendly.com/billalaashraf/1-1-with-bilal" target="_blank" rel="noopener noreferrer" className="btn sm">
          Book a call <span className="arr">→</span>
        </a>
      </div>

      <style>{`
        .nav-brand { display:flex; align-items:center; gap:10px; font-weight:600; letter-spacing:-0.01em; }
        .nav-links-desktop { display:flex; gap:28px; color:var(--fg-2); font-size:14px; }
        .nav-link { transition:color .15s ease; }
        .nav-link:hover { color:var(--fg); }
        @media (max-width: 780px) { .nav-links-desktop { display: none !important; } }
      `}</style>
    </nav>
  );
}
