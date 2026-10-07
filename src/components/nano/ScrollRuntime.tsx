"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/**
 * Page-wide scroll driver: Lenis smooth scrolling (as on the source) plus a
 * `--sy` CSS variable on <html> that every parallax transform reads.
 * Reduced motion: no smoothing and no parallax (`--sy` stays 0).
 */
export function ScrollRuntime() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    const lenis = new Lenis({ autoRaf: true, anchors: true });
    const write = () => root.style.setProperty("--sy", String(window.scrollY));
    write();
    // native scroll fires for Lenis-driven, anchor and programmatic scrolling alike
    window.addEventListener("scroll", write, { passive: true });

    return () => {
      window.removeEventListener("scroll", write);
      lenis.destroy();
      root.style.removeProperty("--sy");
    };
  }, []);

  return null;
}
