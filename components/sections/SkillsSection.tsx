"use client";

import { useEffect, useRef } from "react";

const SKILLS = [
  { label: "Dental Anatomy",               pct: 88, color: "var(--teal-light)" },
  { label: "Oral Biology",                  pct: 82, color: "var(--teal)" },
  { label: "Preclinical Techniques",        pct: 78, color: "var(--teal-light)" },
  { label: "Patient Communication",         pct: 92, color: "var(--gold)" },
  { label: "Surgical Instrument Knowledge", pct: 74, color: "var(--teal)" },
  { label: "Radiographic Interpretation",   pct: 70, color: "var(--gold-light)" },
];

const COURSES = [
  "General Anatomy & Histology",
  "Dental Pharmacology",
  "Oral Physiology",
  "Pathology & Microbiology",
  "Preclinical Conservative Dentistry",
  "Dental Materials Science",
  "Biochemistry",
  "Community Dentistry",
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const barRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const textEls = section.querySelectorAll<HTMLElement>(".reveal, .reveal-blur");
    const tObs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); tObs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    textEls.forEach((el) => tObs.observe(el));

    const bObs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          barRefs.current.forEach((bar, i) => {
            if (bar) setTimeout(() => { bar.style.width = bar.dataset.pct + "%"; }, i * 80);
          });
          bObs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    bObs.observe(section);

    return () => { tObs.disconnect(); bObs.disconnect(); };
  }, []);

  return (
    <section id="skills" className="relative py-32 px-6" ref={sectionRef}>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-60 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(26,122,110,0.06) 0%, transparent 70%)", filter: "blur(40px)" }}
        aria-hidden="true" />

      <div className="max-w-7xl mx-auto">
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: "var(--teal-light)" }}>03 — Clinical Skills</span>
          <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="reveal font-playfair text-3xl md:text-4xl leading-tight mb-10" style={{ color: "var(--fg)" }}>
              Developing <em className="italic gt-teal">clinical mastery</em><br />through rigorous study.
            </h2>
            <div className="space-y-7">
              {SKILLS.map((s, i) => (
                <div key={s.label} className={`reveal d${(i % 5) + 1}`}>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-sm" style={{ color: "var(--fg)" }}>{s.label}</span>
                    <span className="font-mono text-xs" style={{ color: "var(--secondary)" }}>{s.pct}%</span>
                  </div>
                  <div className="h-px rounded-full overflow-hidden" style={{ background: "var(--border)" }}>
                    <div
                      ref={(el) => { barRefs.current[i] = el; }}
                      data-pct={s.pct}
                      className="skill-fill"
                      style={{ background: `linear-gradient(90deg, ${s.color}, ${s.color}bb)` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="reveal font-playfair text-3xl md:text-4xl leading-tight mb-10" style={{ color: "var(--fg)" }}>
              Current <em className="italic gt-gold">curriculum</em>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {COURSES.map((c, i) => (
                <div key={c} className={`reveal d${(i % 4) + 1} glass rounded-xl px-4 py-3.5 group transition-all duration-300`} data-hover>
                  <div className="flex items-center gap-2.5">
                    <div className="w-1 h-1 rounded-full flex-shrink-0 transition-transform duration-300 group-hover:scale-150"
                      style={{ background: "var(--teal)" }} />
                    <span className="text-sm transition-colors duration-300" style={{ color: "var(--secondary)" }}>{c}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
