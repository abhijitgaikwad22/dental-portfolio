"use client";

import { useChildReveal } from "@/lib/useScrollReveal";
import { GraduationCap, MapPin, Calendar, Star } from "lucide-react";

const STATS = [
  { label: "Degree",     value: "Bachelor of Dental Surgery", sub: "BDS — 5 Year Programme",                    icon: GraduationCap },
  { label: "University", value: "MUHS",                       sub: "Maharashtra University of Health Sciences", icon: Star },
  { label: "Location",   value: "Nashik, India",              sub: "Maharashtra",                              icon: MapPin },
  { label: "Year",       value: "First Year",                 sub: "2024 — Present",                           icon: Calendar },
];

const SPEC_TAGS = ["Dentoalveolar Surgery", "Oral Pathology", "Local Anaesthesia", "Surgical Anatomy", "Implantology"];

export default function AcademicSection() {
  const ref = useChildReveal();

  return (
    <section id="academic" className="relative py-32 px-6" ref={ref}>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(184,154,74,0.06) 0%, transparent 70%)", filter: "blur(60px)" }}
        aria-hidden="true" />

      <div className="max-w-7xl mx-auto">
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: "var(--teal-light)" }}>02 — Academic Profile</span>
          <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
        </div>

        <h2 className="reveal font-playfair text-4xl md:text-5xl leading-tight mb-6 max-w-2xl" style={{ color: "var(--fg)" }}>
          Building the foundation<br /><em className="italic gt-gold">one discipline at a time.</em>
        </h2>
        <p className="reveal d1 max-w-xl leading-relaxed mb-16" style={{ color: "var(--secondary)" }}>
          Every lecture, laboratory session, and clinical observation is a step toward surgical expertise.
          The BDS curriculum at MUHS provides a rigorous blend of biological sciences, preclinical skills,
          and patient management.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {STATS.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className={`reveal d${i + 1} glass rounded-2xl p-6 transition-all duration-500`} data-hover>
                <div className="flex items-center gap-2 mb-4">
                  <Icon size={13} style={{ color: "var(--gold)" }} />
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase" style={{ color: "var(--tertiary)" }}>{s.label}</span>
                </div>
                <p className="font-playfair text-xl leading-tight mb-1" style={{ color: "var(--fg)" }}>{s.value}</p>
                <p className="text-xs" style={{ color: "var(--secondary)" }}>{s.sub}</p>
              </div>
            );
          })}
        </div>

        <div className="reveal d3">
          <div className="relative overflow-hidden rounded-3xl p-10 md:p-14"
            style={{ background: "linear-gradient(135deg, rgba(26,122,110,0.08) 0%, rgba(10,10,10,0) 60%, rgba(184,154,74,0.05) 100%)", border: "1px solid rgba(26,122,110,0.2)" }}>
            <div className="absolute top-0 left-0 w-full h-px"
              style={{ background: "linear-gradient(90deg, transparent, var(--teal), transparent)", opacity: 0.4 }} />
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <div>
                <p className="font-mono text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--teal-light)" }}>Specialisation Interest</p>
                <h3 className="font-playfair text-3xl md:text-5xl leading-tight" style={{ color: "var(--fg)" }}>
                  Oral &amp; <em className="italic gt-teal">Maxillofacial Surgery</em>
                </h3>
              </div>
              <div className="flex flex-col gap-3 text-sm md:text-right max-w-xs" style={{ color: "var(--secondary)" }}>
                <p>The intersection of surgical precision, 3-dimensional anatomy, and reconstructive artistry.</p>
                <p>Focused on mastering biological and clinical foundations for advanced oral surgical practice.</p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {SPEC_TAGS.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full font-mono text-[10px] tracking-widest uppercase"
                  style={{ border: "1px solid var(--border)", color: "var(--secondary)" }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
