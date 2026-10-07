"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import s from "./nano.module.css";

const LINKS = [
  { label: "home", id: "home" },
  { label: "leistungen", id: "leistungen" },
  { label: "projekte", id: "projekte" },
  { label: "über nano", id: "ueber-nano" },
  { label: "preise", id: "preise" },
  { label: "kontakt", id: "kontakt" },
];

/** Tracks which section crosses the viewport's middle line. */
function useActiveSection() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    for (const { id } of LINKS) {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, []);

  return active;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <a href="#home" className={s.logo} aria-label="nd – nano design, startseite">
        <span className={s.logoMark}>nd</span>
      </a>

      <div className={s.menu} data-open={open}>
        <button
          type="button"
          className={s.menuToggle}
          aria-expanded={open}
          aria-controls="nano-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={s.menuIcon} aria-hidden>
            <span />
            <span />
            <span />
          </span>
          <span className={`${s.display} ${s.menuLabel}`}>{open ? "schliessen" : "menü"}</span>
        </button>

        <nav id="nano-menu" aria-label="Hauptnavigation" hidden={!open}>
          <div className={s.menuLinks}>
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`${s.display} ${s.menuLink}`}
                aria-current={active === l.id ? "true" : undefined}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </div>
          <a href="#projekte" className={s.menuLatest} onClick={() => setOpen(false)}>
            <Image
              src="/nano/projects/hundephysio-seeland-mobile.png"
              alt=""
              width={36}
              height={36}
              className={s.menuLatestThumb}
            />
            <span>
              <span className={`${s.text} ${s.menuLatestKicker}`}>02 — portfolio</span>
              <span className={`${s.display} ${s.menuLatestName}`}>alle projekte ansehen →</span>
            </span>
          </a>
        </nav>
      </div>
    </>
  );
}
