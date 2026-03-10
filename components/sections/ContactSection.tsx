"use client";

import { useState } from "react";
import { useChildReveal } from "@/lib/useScrollReveal";
import { Mail, Linkedin, ArrowRight, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const ref = useChildReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Connect your form to Formspree / EmailJS / Next.js API route here
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-32 px-6" ref={ref}>
      <div className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(184,154,74,0.06) 0%, transparent 70%)", filter: "blur(60px)" }}
        aria-hidden="true" />

      <div className="max-w-7xl mx-auto">
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: "var(--teal-light)" }}>05 — Contact</span>
          <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="reveal font-playfair text-4xl md:text-5xl leading-tight mb-6" style={{ color: "var(--fg)" }}>
              Let's connect<br /><em className="italic gt-gold">and collaborate.</em>
            </h2>
            <p className="reveal d1 leading-relaxed mb-10 max-w-sm" style={{ color: "var(--secondary)" }}>
              Whether you're a fellow dental student, clinician, or academic professional — I'm always
              open to meaningful conversations about dentistry and science.
            </p>
            <div className="reveal d2 space-y-4">
              {[
                { Icon: Mail,     label: "gayatri@example.com", href: "mailto:gayatri@example.com" },
                { Icon: Linkedin, label: "LinkedIn Profile",    href: "https://linkedin.com" },
              ].map(({ Icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 group" data-hover>
                  <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                    <Icon size={15} style={{ color: "var(--secondary)" }} />
                  </div>
                  <span className="text-sm" style={{ color: "var(--secondary)" }}>{label}</span>
                  <ArrowRight size={12} style={{ color: "var(--tertiary)" }}
                    className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              ))}
            </div>
          </div>

          <div className="reveal d2">
            {sent ? (
              <div className="glass rounded-2xl p-10 flex flex-col items-center justify-center gap-4 min-h-[320px]">
                <CheckCircle size={36} style={{ color: "var(--teal-light)" }} />
                <p className="font-playfair text-xl" style={{ color: "var(--fg)" }}>Message received.</p>
                <p className="text-sm text-center" style={{ color: "var(--secondary)" }}>
                  Thank you for reaching out. I'll respond as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="glass rounded-2xl p-8 space-y-5">
                {(["name", "email"] as const).map((field) => (
                  <div key={field}>
                    <label className="block font-mono text-[10px] tracking-[0.25em] uppercase mb-2"
                      style={{ color: "var(--secondary)" }}>
                      {field === "name" ? "Your Name" : "Email Address"}
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field} value={form[field]} onChange={onChange} required
                      className="w-full bg-transparent border-b py-2 text-sm outline-none transition-colors duration-300"
                      style={{ borderColor: "var(--border)", color: "var(--fg)" }}
                      placeholder={field === "name" ? "Enter your name" : "Enter email address"}
                    />
                  </div>
                ))}
                <div>
                  <label className="block font-mono text-[10px] tracking-[0.25em] uppercase mb-2"
                    style={{ color: "var(--secondary)" }}>Message</label>
                  <textarea name="message" value={form.message} onChange={onChange} required rows={4}
                    className="w-full bg-transparent border-b py-2 text-sm outline-none resize-none transition-colors duration-300"
                    style={{ borderColor: "var(--border)", color: "var(--fg)" }}
                    placeholder="Your message..." />
                </div>
                <button type="submit"
                  className="w-full mt-2 py-3.5 rounded-full font-mono text-xs tracking-widest uppercase text-white flex items-center justify-center gap-2 group transition-colors duration-300"
                  style={{ background: "var(--teal)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--teal-light)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "var(--teal)")}
                  data-hover>
                  Send Message
                  <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
