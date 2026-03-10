"use client";

import { useChildReveal } from "@/lib/useScrollReveal";
import { Heart, Zap, Eye, MessageCircle } from "lucide-react";

const VALUES = [
  { icon: Heart,          label: "Empathy",        desc: "Understanding each patient's fears and concerns before the first incision." },
  { icon: Eye,            label: "Precision",       desc: "Surgical accuracy down to the millimetre, guided by anatomical mastery." },
  { icon: Zap,            label: "Patience",        desc: "Every procedure deserves the time it takes — never rushed, always thorough." },
  { icon: MessageCircle,  label: "Communication",   desc: "Translating complex diagnoses into language patients can trust." },
];

export default function AboutSection() {
  const ref = useChildReveal();

  return (
    <section id="about" className="relative py-32 px-6" ref={ref}>
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(26,122,110,0.08) 0%, transparent 70%)", filter: "blur(40px)" }}
        aria-hidden="true" />

      <div className="max-w-7xl mx-auto">
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: "var(--teal-light)" }}>01 — About</span>
          <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <h2 className="reveal font-playfair text-4xl md:text-5xl leading-tight mb-8" style={{ color: "var(--fg)" }}>
              Science meets <em className="italic gt-teal">craft</em><br />in every procedure.
            </h2>
            <p className="reveal d1 leading-relaxed mb-6" style={{ color: "var(--secondary)" }}>
              Dentistry uniquely combines science, technical precision, and hands-on clinical skill.
              It requires exceptional manual dexterity and meticulous attention to detail — qualities
              I've cultivated throughout my academic journey.
            </p>
            <p className="reveal d2 leading-relaxed mb-6" style={{ color: "var(--secondary)" }}>
              My particular fascination lies in{" "}
              <span style={{ color: "var(--teal-light)" }}>Oral Surgery</span> — a discipline that
              combines surgical precision, anatomical mastery, and profoundly patient-centred care.
              Each case is both a clinical challenge and a human story.
            </p>
            <p className="reveal d3 leading-relaxed" style={{ color: "var(--secondary)" }}>
              As a first-year BDS student at MUHS, I am building the scientific foundation that will
              one day support complex maxillofacial procedures — driven by curiosity, rigour, and
              genuine care for every patient.
            </p>
            <div className="reveal d4 mt-10 flex items-center gap-4">
              <div className="w-10 h-px" style={{ background: "var(--gold)" }} />
              <span className="font-playfair italic text-sm" style={{ color: "var(--gold-light)" }}>Gayatri Pandurang Chavan</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={v.label} className={`reveal d${i + 1} glass rounded-2xl p-6 group transition-all duration-500`} data-hover>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300"
                      style={{ background: "rgba(26,122,110,0.15)" }}>
                      <Icon size={14} style={{ color: "var(--teal-light)" }} />
                    </div>
                    <h3 className="font-playfair text-lg" style={{ color: "var(--fg)" }}>{v.label}</h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--secondary)" }}>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
