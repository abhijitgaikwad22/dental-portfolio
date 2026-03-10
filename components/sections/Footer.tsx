export default function Footer() {
  return (
    <footer className="py-10 px-6" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-playfair italic" style={{ color: "var(--fg)" }}>Gayatri Pandurang Chavan</span>
          <span className="w-1 h-1 rounded-full" style={{ background: "var(--teal)" }} />
          <span className="font-mono text-xs" style={{ color: "var(--tertiary)" }}>BDS · MUHS Nashik</span>
        </div>
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase" style={{ color: "var(--tertiary)" }}>
          © {new Date().getFullYear()} — Precision. Empathy. Science.
        </p>
        <div className="flex items-center gap-6">
          {["about", "academic", "skills", "anatomy", "contact"].map((s) => (
            <a key={s} href={`#${s}`}
              className="font-mono text-[10px] tracking-widest uppercase transition-colors duration-300"
              style={{ color: "var(--tertiary)" }} data-hover>{s}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
