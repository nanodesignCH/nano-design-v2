"use client";

import { useEffect, useState, useSyncExternalStore, type ComponentType } from "react";
import type { TechTextProps } from "./TechText";
import s from "./nano.module.css";

const FINE_POINTER = "(hover: hover) and (pointer: fine)";

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(FINE_POINTER);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

// settings as chosen on reactbits.dev; font, size and colour come from the heading itself
const SHARED: TechTextProps = {
  fontSize: 0,
  fit: false,
  inset: 0.3,
  decorative: true,
  accentColor: "#c9a84c",
  reveal: "letter",
  dashLength: 6,
  dashGap: 2,
  specks: 15,
  reach: 200,
  softness: 0.7,
  strokeWidth: 1.5,
  speed: 0.7,
  lineStyle: "dashed",
  selection: true,
  labels: true,
  sweep: true,
};

/**
 * "nano design." stays real, server-rendered text (fast LCP, read by search engines and
 * screen readers). TechText loads afterwards and draws the same words on top; the DOM
 * text only turns transparent once both canvases show the real font.
 */
export function HeroTitle() {
  const finePointer = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(FINE_POINTER).matches,
    () => false,
  );
  const [Tech, setTech] = useState<ComponentType<TechTextProps> | null>(null);
  const [ready, setReady] = useState(0);

  useEffect(() => {
    void import("./TechText").then((m) => setTech(() => m.default));
  }, []);

  const overlay = (props: TechTextProps) =>
    Tech && (
      <Tech
        {...SHARED}
        {...props}
        className={s.heroTech}
        // dragging letters would fight scrolling on touch screens
        draggable={finePointer}
        onReady={() => setReady((n) => n + 1)}
      />
    );

  return (
    <h1 className={`${s.display} ${s.heroTitle}`} data-tech={ready >= 2 || undefined}>
      <span className={s.heroWord}>
        nano
        {overlay({ text: "nano", fontWeight: 900, letterSpacing: -0.04, color: "#ffffff" })}
      </span>{" "}
      <span className={`${s.heroWord} ${s.heroTitleLight}`}>
        design.
        {overlay({
          text: "design.",
          fontWeight: 300,
          fontStyle: "italic",
          letterSpacing: -0.01,
          color: "rgba(255, 255, 255, 0.88)",
        })}
      </span>
    </h1>
  );
}
