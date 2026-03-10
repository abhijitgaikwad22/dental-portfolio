"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "About",    href: "#about" },
  { label: "Academic", href: "#academic" },
  { label: "Skills",   href: "#skills" },
  { label: "Anatomy",  href: "#anatomy" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "py-4 backdrop-blur-xl border-b" : "py-6"
      )}
      style={scrolled ? { background: "rgba(10,10,10,0.85)", borderColor: "var(--border)" } : {}}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-playfair italic text-lg" style={{ color: "var(--fg)" }} data-hover>
          G.P.Chavan
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs tracking-widest uppercase transition-colors duration-300"
                style={{ color: "var(--secondary)" }}
                data-hover
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:flex px-5 py-2 rounded-full font-mono text-xs tracking-widest uppercase border transition-all duration-300"
          style={{ border: "1px solid var(--teal)", color: "var(--teal-light)" }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "var(--teal)"; e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--teal-light)"; }}
          data-hover
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
