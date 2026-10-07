# Launch-Report: nano-design.ch (Redesign)

Stand: 2026-10-07 · Branch `main` (lokal) · Next.js 16.3.8 · Prüfungen auf dem lokalen Production-Build (`next build && next start`)

## Launch-DoD

| Punkt | Status | Nachweis |
|---|---|---|
| Lighthouse mobile ≥ 90 / 95 / 95 / 95 | ✅ lokal: **98 / 100 / 100 / 100** | `docs/lighthouse/mobile-local.json`; LCP 2.3 s, TBT 10 ms, CLS 0. Auf der Vercel-Preview erneut messen |
| Anker-Links & Navigation inkl. Mobile-Menü, Active-State | ✅ | Browser-Test bei 768 px: alle 6 Anker landen bei Sektionsanfang 0 px, `aria-current` wechselt, Menü schliesst nach Klick, Esc schliesst |
| Kontaktformular sendet nachweislich | ⏳ **offen** | Endpunkt `/api/contact` getestet: ungültig → 400, Honeypot → 200 ohne Versand, gültig → 500 „nicht verfügbar“, weil `RESEND_API_KEY` noch fehlt. Test-Submit nach Setzen des Keys auf der Preview |
| Meta, OG-Image, Favicon, sitemap.xml, robots.txt, `lang="de-CH"` | ✅ | Titel/Description (Orpund), `metadataBase` nano-design.ch, `/opengraph-image` (1200×630, Barlow), `/icon.svg`, `/sitemap.xml`, `/robots.txt`, JSON-LD `ProfessionalService` |
| Impressum + Datenschutz (revDSG) | ✅ | `/impressum`, `/datenschutz`; Wortlaut freigegeben (du/ich, Vercel, Resend, EDÖB). Anwaltliche Prüfung empfohlen |
| CH-Rechtschreibung | ✅ | `grep -rn "ß" src content` leer |
| Asset-Audit | ✅ | Kein Treffer für Klon-Domains/-Texte, `public/sites/` entfernt, kein Bild-Hash aus `CLONE_INVENTORY.md`, Anton/Instrument Serif entfernt |

## Globale DoD

- `npm run check` (lint, typecheck, build) grün
- Keine Console-Errors oder Hydration-Warnings (Desktop + Mobile geprüft)
- 375 / 768 / 1440 px ohne horizontales Scrollen (`scrollWidth === clientWidth`); Screenshots unter `docs/progress-shots/`
- `prefers-reduced-motion: reduce`: Intro aus, Lenis aus, Parallaxe aus (alle `--sy`-Regeln hinter `no-preference`), Karten-/Menü-Transitions aus. Per Code-Review geprüft; der DevTools-MCP kann die Media-Query nicht emulieren

## Sicherheit

- `/code-review` (medium): 2 Befunde (Rate-Limit-Map ohne Eviction, Steuerzeichen im Namen → Mail-Betreff), beide behoben
- `npm audit --omit=dev`: **0** Schwachstellen (vorher u.a. kritische RCE in `next/og` → Next 16.3.8; `shadcn` zu devDependencies verschoben)
- AgentShield (`/security-scan`): Grade D. 697 der 699 „critical“ sind Fehlalarme in `package-lock.json`, der Rest betrifft Prompt-Hygiene in `CLAUDE.md` bzw. fehlende Permissions in `.claude/settings.json` (Agent-Konfiguration, nicht die Website)
- Kontakt-Endpunkt: Validierung, Honeypot, Rate-Limit (5 / 10 min pro IP, pro Instanz), Secrets nur via Env, keine Provider-Details in Fehlermeldungen
- Keine Cookies, kein Tracking (deckt sich mit der Datenschutzerklärung)

## Offene TODOs vor Production

1. **Vercel-Login** (`vercel login`) durch dich, dann Preview-Deploy
2. **Resend:** Account, API-Key als Vercel-Env `RESEND_API_KEY`, Domain nano-design.ch verifizieren (SPF/DKIM), danach `CONTACT_FROM` auf eine nano-design.ch-Adresse
3. **Test-Submit** auf der Preview und Empfang in info@nano-design.ch bestätigen
4. Lighthouse auf der Preview-URL wiederholen
5. Git-Remote (optional, für Vercel-Git-Integration)
6. DNS-Umstellung nano-design.ch: nur nach separater Rückfrage

## Bekannte Einschränkungen

- Rate-Limit ist pro Server-Instanz (Kommentar `ponytail:` in `route.ts`)
- Datenschutz-Abschnitt zu Vercel/Resend ist ein Entwurf ohne anwaltliche Prüfung
- Leistungs-Panels wiederholen die Leistungsnamen als grosse Deko-Titel (aria-hidden) und als Listenüberschrift
