"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Lenis 1.3+ supports autoRaf — no manual requestAnimationFrame loop needed
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.3,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}
