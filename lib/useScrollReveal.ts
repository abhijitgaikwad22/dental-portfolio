"use client";

import { useEffect, useRef } from "react";

export function useChildReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const els = container.querySelectorAll<HTMLElement>(".reveal, .reveal-blur");

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [threshold]);

  return ref;
}
