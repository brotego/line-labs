"use client";

import Lenis from "lenis";
import { useEffect } from "react";

const HEADER_OFFSET = 88;

// Lenis smooth scrolling, plus offset smooth-scrolling for in-page "#" links.
export default function SmoothScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let lenis: Lenis | null = null;
    let rafId = 0;

    if (!reduceMotion) {
      lenis = new Lenis({
        duration: 1.6,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.8,
        touchMultiplier: 1,
      });

      const raf = (time: number) => {
        lenis!.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    }

    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute("href")!.slice(1);
      e.preventDefault();
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;

      if (lenis) {
        lenis.scrollTo(el, { offset: -HEADER_OFFSET, duration: 1.6 });
      } else {
        const targetY = Math.max(el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET, 0);
        window.scrollTo({ top: targetY, behavior: reduceMotion ? "auto" : "smooth" });
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  return null;
}
