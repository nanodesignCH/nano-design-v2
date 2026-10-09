"use client";

import { useEffect, useState, useSyncExternalStore, type ComponentType } from "react";
import type { GlowCursorProps } from "./GlowCursor";
import s from "./nano.module.css";

const QUERY = "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

/** Ochre cursor trail behind the hero content (settings as chosen on reactbits.dev). */
export function HeroGlow() {
  const enabled = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false,
  );
  // WebGL + ogl are fetched only where a mouse can drive the glow, never on touch devices
  const [Glow, setGlow] = useState<ComponentType<GlowCursorProps> | null>(null);
  useEffect(() => {
    if (enabled && !Glow) void import("./GlowCursor").then((m) => setGlow(() => m.default));
  }, [enabled, Glow]);

  if (!enabled || !Glow) return null;

  return (
    <Glow
      className={s.heroGlow}
      color="#c9a84c"
      secondaryColor="#e2d1a1"
      trailLength={40}
      trailWidth={8}
      trailTaper={1}
      followSpeed={0.16}
      glowIntensity={1.9}
      glowSpread={1.2}
      hotspot={0.65}
      brightness={1.25}
      opacity={1}
      pulseSpeed={1.1}
      noiseStrength={0.035}
      idleFade
      idleTimeout={700}
      fadeDuration={900}
      blendMode="screen"
    />
  );
}
