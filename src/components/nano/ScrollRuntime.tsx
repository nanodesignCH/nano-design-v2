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
  // iOS Safari only applies :active (price-row tap highlight) when a touch listener exists
  useEffect(() => {
    const noop = () => {};
    document.addEventListener("touchstart", noop, { passive: true });
    return () => document.removeEventListener("touchstart", noop);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    const lenis = new Lenis({ autoRaf: true, anchors: true });
    const write = () => root.style.setProperty("--sy", String(window.scrollY));
    write();
    // native scroll fires for Lenis-driven, anchor and programmatic scrolling alike
    window.addEventListener("scroll", write, { passive: true });
    const offContact = fixContactAnchor((end) => lenis.scrollTo(end));

    return () => {
      offContact();
      window.removeEventListener("scroll", write);
      lenis.destroy();
      root.style.removeProperty("--sy");
    };
  }, []);

  // reduced motion: no Lenis, but the #kontakt jump needs the same fix
  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    return fixContactAnchor((end) => window.scrollTo(0, end));
  }, []);

  return null;
}

/**
 * While the contact block waits to be revealed it is position: sticky, so its rect (which anchor
 * scrolling uses) points near the top of the page. It is fully revealed at the very end of the
 * page, so links to #kontakt scroll there instead. Registered after Lenis so this scrollTo wins.
 */
function fixContactAnchor(scrollTo: (end: number) => void) {
  const onClick = (e: MouseEvent) => {
    const link = e.target instanceof Element ? e.target.closest('a[href="#kontakt"]') : null;
    const block = document.getElementById("kontakt")?.parentElement;
    if (!link || !block || getComputedStyle(block).position !== "sticky") return;
    e.preventDefault();
    scrollTo(document.documentElement.scrollHeight - window.innerHeight);
    history.replaceState(null, "", "#kontakt");
  };
  window.addEventListener("click", onClick);
  return () => window.removeEventListener("click", onClick);
}
