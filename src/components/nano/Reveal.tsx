"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Sets data-on="true" while the element overlaps the top band of the viewport
 * (default: top 12%), i.e. once a sticky panel has docked. CSS does the rest.
 */
export function Reveal({
  className,
  children,
  rootMargin = "0px 0px -88% 0px",
}: {
  className?: string;
  children: ReactNode;
  rootMargin?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setOn(entry.isIntersecting), { rootMargin });
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className={className} data-on={on}>
      {children}
    </div>
  );
}
