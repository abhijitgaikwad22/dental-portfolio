"use client";

import dynamic from "next/dynamic";
import { useChildReveal } from "@/lib/useScrollReveal";

const ToothViewer = dynamic(() => import("@/components/three/ToothViewer"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 rounded-full animate-spin"
          style={{ border: "1px solid var(--teal)", borderTopColor: "transparent" }} />
        <span className="font-mono text-xs tracking-widest" style={{ color: "var(--secondary)" }}>Loading 3D…</span>
      </div>
    </div>
  ),
});

export default function ToothViewerSection() {
  const ref = useChildReveal();

  return (
    <section id="anatomy" className="relative py-32 px-6" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(26,122,110,0.05) 0%, transparent 70%)", filter: "blur(60px)" }}
        aria-hidden="true" />

      <div className="max-w-7xl mx-auto">
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: "var(--teal-light)" }}>04 — 3D Anatomy Viewer</span>
          <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="reveal font-playfair text-4xl md:text-5xl leading-tight mb-8" style={{ color: "var(--fg)" }}>
              Explore tooth<br /><em className="italic gt-teal">anatomy in 3D</em>
            </h2>
            <p className="reveal d1 leading-relaxed mb-6" style={{ color: "var(--secondary)" }}>
              An interactive cross-sectional model of a human tooth. Click any layer to isolate
              it and explore its anatomical description. Drag to rotate freely.
            </p>
            <div className="reveal d2 space-y-3 mb-10">
              {[
                { dot: "var(--teal-light)", text: "Click a layer button to isolate it" },
                { dot: "var(--gold)",       text: "Drag the model to rotate freely" },
                { dot: "#e8a0a0",           text: "Scroll to zoom in and out" },
              ].map(({ dot, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: dot }} />
                  <span className="text-sm" style={{ color: "var(--secondary)" }}>{text}</span>
                </div>
              ))}
            </div>
            <div className="reveal d3 glass rounded-2xl p-5">
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: "var(--teal-light)" }}>Clinical Notes</p>
              <ul className="space-y-2 text-sm" style={{ color: "var(--secondary)" }}>
                <li>— Enamel hardness: 5 on the Mohs scale</li>
                <li>— Dentin permeability enables pain sensation</li>
                <li>— Pulp contains Aδ and C afferent fibres</li>
                <li>— Cementum thickness increases with age</li>
              </ul>
            </div>
          </div>

          <div className="reveal d2 glass rounded-3xl overflow-hidden" style={{ height: "540px" }}>
            <ToothViewer />
          </div>
        </div>
      </div>
    </section>
  );
}
