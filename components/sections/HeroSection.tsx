"use client";

import { useEffect, useRef } from "react";
// framer-motion v12 is now "motion" — import from "motion/react"
import { motion } from "motion/react";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.5 } },
};
const fadeUp = {
  hidden: { y: 60, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const } },
};
const waveDraw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 3.5, delay: i * 0.5, ease: "easeInOut" as const },
      opacity: { duration: 0.6, delay: i * 0.5 },
    },
  }),
};

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    type P = { x: number; y: number; vx: number; vy: number; r: number; a: number };
    const pts: P[] = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.1 + 0.3,
      a: Math.random() * 0.22 + 0.04,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(26,122,110,${p.a})`;
        ctx.fill();
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" aria-hidden="true" />

      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(26,122,110,0.07) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* SVG waveforms */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
        <svg viewBox="0 0 1200 200" className="w-full absolute" style={{ top: "40%", fill: "none" }}>
          <motion.path
            d="M0,100 L60,100 L90,30 L100,140 L110,80 L120,100 L200,100 L240,45 L250,135 L260,85 L270,100 L400,100 L420,50 L430,138 L440,85 L450,100 L580,100 L600,38 L610,148 L620,82 L630,100 L760,100 L780,48 L790,142 L800,84 L810,100 L960,42 L970,140 L980,82 L990,100 L1200,100"
            stroke="#24A898" strokeWidth="1.4"
            variants={waveDraw} initial="hidden" animate="visible" custom={0}
          />
          <motion.path
            d="M0,140 Q150,100 300,140 Q450,180 600,140 Q750,100 900,140 Q1050,180 1200,140"
            stroke="#B89A4A" strokeWidth="0.7" opacity={0.45}
            variants={waveDraw} initial="hidden" animate="visible" custom={1}
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-3 mb-8"
        >
          <span className="w-8 h-px" style={{ background: "var(--teal)" }} />
          <span className="font-mono text-xs tracking-[0.25em] uppercase" style={{ color: "var(--teal-light)" }}>
            BDS · First Year · MUHS Nashik
          </span>
          <span className="w-8 h-px" style={{ background: "var(--teal)" }} />
        </motion.div>

        {/* Headline */}
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.h1 variants={fadeUp} className="font-playfair font-medium text-5xl md:text-7xl lg:text-[82px] leading-[1.04] mb-3" style={{ color: "var(--fg)" }}>
            We are passionate
          </motion.h1>
          <motion.h1 variants={fadeUp} className="font-playfair italic text-5xl md:text-7xl lg:text-[82px] leading-[1.04] mb-3 gt-teal">
            by science,
          </motion.h1>
          <motion.h1 variants={fadeUp} className="font-playfair font-medium text-5xl md:text-7xl lg:text-[82px] leading-[1.04]" style={{ color: "var(--fg)" }}>
            but above all,{" "}
            <span className="font-playfair italic gt-gold">we love dentistry.</span>
          </motion.h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
          style={{ color: "var(--secondary)" }}
        >
          Gayatri Pandurang Chavan — combining surgical precision, anatomical mastery,
          and patient-centred care in every aspect of clinical dentistry.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#about"
            className="px-8 py-3.5 rounded-full font-mono text-sm tracking-widest uppercase text-white transition-colors duration-300"
            style={{ background: "var(--teal)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--teal-light)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--teal)")}
            data-hover
          >
            View Journey
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full font-mono text-sm tracking-widest uppercase border transition-all duration-300"
            style={{ border: "1px solid rgba(232,227,219,0.2)", color: "var(--fg)" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold-light)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(232,227,219,0.2)"; e.currentTarget.style.color = "var(--fg)"; }}
            data-hover
          >
            Contact
          </a>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: "var(--tertiary)" }}>Scroll</span>
          <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, var(--teal), transparent)" }} />
        </motion.div>
      </div>
    </section>
  );
}
