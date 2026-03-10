"use client";

const TAGS = [
  "#OralSurgery", "#DentalAnatomy", "#ClinicalPrecision", "#MUHS",
  "#PreventiveDentistry", "#PatientCare", "#MaxillofacialSurgery",
  "#BDS2024", "#SurgicalMastery", "#OralHealth",
];
const DBL = [...TAGS, ...TAGS];

export default function MarqueeSection() {
  return (
    <section
      className="py-6 overflow-hidden relative"
      style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
    >
      <div className="absolute left-0 inset-y-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, var(--bg), transparent)" }} />
      <div className="absolute right-0 inset-y-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(-90deg, var(--bg), transparent)" }} />

      <div className="flex overflow-hidden mb-3">
        <div className="mq-track">
          {DBL.map((tag, i) => (
            <span key={`a-${i}`}
              className="flex-shrink-0 px-4 py-1.5 rounded-full font-mono text-xs tracking-widest whitespace-nowrap"
              style={{ border: "1px solid var(--border)", color: "var(--secondary)" }}
            >{tag}</span>
          ))}
        </div>
      </div>

      <div className="flex overflow-hidden">
        <div className="mq-track mq-track-rev">
          {DBL.map((tag, i) => (
            <span key={`b-${i}`}
              className="flex-shrink-0 px-4 py-1.5 rounded-full font-mono text-xs tracking-widest whitespace-nowrap"
              style={{ border: "1px solid var(--border)", color: "var(--tertiary)" }}
            >{tag}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
