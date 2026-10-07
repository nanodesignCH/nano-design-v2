# Plan: Nano Design One-Pager auf Basis des /hate-Klons

**Quelle:** Master-Prompt (`PROJECT_SETUP_PROMPT.md`), Phase 3 · **Revision 2** (Gate-1-Feedback: Grain weg, neue Screenshots) · **Komplexität:** Large · **Stand:** 2026-10-06

## Zusammenfassung

Der Klon von alovehatestory.com/hate (`src/components/sites/alovehatestory/`) wird zum One-Pager von Nano Design umgebaut. Struktur und Motion des Klons bleiben erhalten (Lenis, Intro, Sticky-Panels, Parallaxe über `--sy`, dunkle Stimmung). Der Grain-Canvas fällt weg (User-Entscheid Gate 1). Ersetzt werden Marke, Farben, Fonts, Texte und Bilder aus `content/nano/`. Neu hinzu kommen Preise, Kontakt mit funktionierendem Formular, `/impressum`, `/datenschutz` sowie SEO-Grundlagen. Am Ende darf kein Asset aus `docs/CLONE_INVENTORY.md` mehr im Build sein.

## Anforderungen (restated)

- One-Pager mit Ankern `#home`, `#leistungen`, `#projekte`, `#ueber-nano`, `#preise`, `#kontakt`; Routen `/impressum`, `/datenschutz`
- Inhalte nur aus `content/nano/`. Keine erfundenen Texte, Preise oder Referenzen; Lücken als `[[TODO: …]]` + Eintrag in `OPEN_QUESTIONS.md`
- Brand aus `content/nano/brand.json` (Barlow, ink/paper/ochre, Logo „nd“), Feinschliff an Gate 2
- `lang="de-CH"`, durchgehend CH-Rechtschreibung (ss, nie ß)
- Kontaktformular mit Backend (Entscheid Gate 2; Empfehlung Resend via Route Handler), Honeypot wie im Original
- Hosting Vercel; Production-Deploy erst nach Gate 3

## Patterns to Mirror

| Kategorie | Quelle | Muster |
|---|---|---|
| Naming | `src/components/sites/alovehatestory/HatePage.tsx:1` | Named Exports, PascalCase-Komponenten, Daten als typisierte Konstanten (`SERVICES`, `PROJECTS`) direkt neben der Komponente |
| Styling | `src/components/sites/alovehatestory/hate.module.css:1` | Ein CSS-Modul pro Site, Desktop-Werte als Default, Overrides `@media (810–1199.98px)` / `(max-width: 809.98px)`, Parallaxe nur in `prefers-reduced-motion: no-preference` |
| Client/Server | `Reveal.tsx`, `Counter.tsx`, `Header.tsx` | Server-Komponenten als Default; kleine Client-Inseln (`"use client"`) nur für Zustand, Observer, Events |
| Motion | `ScrollRuntime.tsx:12` | Ein globaler Scroll-Treiber schreibt `--sy`; CSS rechnet `translate: 0 calc(var(--sy) * var(--k) * 1px)` |
| Bilder | `HatePage.tsx` (ProjectCard) | `next/image` mit `fill` + `sizes`, kleine SVG/GIF mit `unoptimized` |
| Fehlerbehandlung | — | **Kein bestehendes Muster** (bisher kein I/O). Wird mit dem Route Handler eingeführt: Validierung am Eingang, strukturierte JSON-Fehler `{ ok: false, error }`, kein Leak von Provider-Details |
| Logging | — | Kein Muster. Nur `console.error` serverseitig im Route Handler |
| Tests | — | **Keine Test-Infrastruktur.** Verifikation über `npm run check`, Browser-Checks (Chrome-DevTools-MCP) und einen Assert-Check für die Formularvalidierung (siehe T13) |

## Mapping: Klon-Sektion → Nano-Sektion

| Klon (/hate) | Nano | Umbau | Fällt weg / kommt dazu |
|---|---|---|---|
| Intro (weisse Bänder, „A HATE STORY“, Love-GIF) | Intro | Titel „nano design“, Untertitel „web · print · digital“, Bänder in Paper `#f5f0eb` | GIF fällt weg (ggf. „nd“-Marke) |
| Grain-Canvas | — | entfernen (User-Entscheid Gate 1) | Grain fällt weg |
| Switcher (Love/Hate) | Logo „nd“ | Kachel → typografisches Logo, Link `#home` | Love/Hate-Switcher fällt weg |
| Menü-Dropdown | Navigation | 6 Anker (home · leistungen · projekte · über nano · preise · kontakt), Active-State beim Scrollen, Mobile-Variante, „Latest Project“ → neuestes Projekt aus `projects.json` | Active-State kommt dazu |
| Hero „A HATE STORY“ + Tagline + INFO-Zeile | `#home` | „nano / design.“, „web · print · digital“, CTA „jetzt anfragen →“ (→ `#kontakt`), INFO-Zeile: Ort (Orpund) | fallende Herzen: Gate 2 (ersetzen/streichen) |
| Divisor-Treppen | Divisor | bleiben, Farben aus Brand-Tokens | — |
| IMAGE (Billboard-Vollbild) | `#home`-Abschluss / Showcase | neuer hochauflösender Projekt-Screenshot (T2b) | Billboard-Bild fällt weg |
| VISION AND MISSION (2 Spalten) | `#leistungen`-Intro | „01 — leistungen“ / „von web bis print.“ | — |
| 3 Sticky-Service-Panels | `#leistungen` | 6 Leistungen in 3 Panels gruppiert (Web: web design + online shops · Marke: logo design + print design · Content: content creation + ai design); Titel als Panel-Headline, Listen = die zwei Leistungs-Texte mit #-Nummern; Panel-Bilder = neue Projekt-Screenshots (T2b) | Kreisbuchstaben ⓐⓑⓒ → Gate 2 |
| TITOLO PROJECT + 3 Polaroid-Karten | `#projekte` | „02 — portfolio“ / „ausgewählte arbeiten.“, 8 Karten aus `projects.json` (Desktop 3-3-2, Mobile Sticky-Stack), Hover „projekt ansehen →“, „mehr auf anfrage“ ohne Link | 5 Karten kommen dazu |
| 99-SECTION (Counter, Manifest, Geisterwörter, Signatur) | `#ueber-nano` | „03 — über nano“ / „gutes design das wirkt.“ + 3 Absätze; Geisterwörter aus der Headline | Counter + Signatur: Gate 2 (echte Zahl oder streichen) |
| — | `#preise` | **neu** im Klon-Stil: „04 — preise“ / „jedes design ein unikat.“, 3 Pakete, Hosting-Text, CTA | kommt dazu |
| — | `#kontakt` | **neu**: „05 — kontakt“ / „lass uns reden.“, Formular (Name, E-Mail, Telefon optional, Nachricht, Honeypot) | kommt dazu |
| FOOTER (P.IVA, E-Mail, Fit-Text) | Footer | Seiten-Links, E-Mail info@nano-design.ch, „© 2026 nano web & print design“, Impressum/Datenschutz, Fit-Text „nano design“ | P.IVA fällt weg |
| — | `/impressum`, `/datenschutz` | **neu**, Texte aus `texts.md`; Datenschutz um Vercel + Formular-Provider ergänzt (Freigabe Gate 2) | kommt dazu |

## Globale DoD (jede Task zusätzlich)

1. `npm run lint`, `npm run typecheck`, `npm run build` grün (`npm run check`)
2. Keine Console-Errors oder Hydration-Warnings (Chrome-DevTools `list_console_messages` auf `/`)
3. Screenshots 375 / 768 / 1440 px: kein horizontales Scrollen (`scrollWidth === clientWidth`), keine Überlappungen
4. `prefers-reduced-motion: reduce` respektiert (Intro aus, keine Parallaxe/Endlosanimation, Lenis aus)

## Launch-DoD

- Lighthouse mobile: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95
- Alle Anker-Links und Navigation funktionieren (inkl. Mobile-Menü, Active-State beim Scrollen)
- Kontaktformular sendet nachweislich (Test-Submit, Mail angekommen)
- Meta, OG-Image, Favicon, `sitemap.xml`, `robots.txt`, `lang="de-CH"` gesetzt
- Impressum und Datenschutz (revDSG) vorhanden
- Durchgehend CH-Rechtschreibung (`grep -rn "ß" src content` leer)
- **Asset-Audit bestanden:** `grep -rniE "alovehatestory|alovestory|a hate story|a love story|ALS 2O25|17369951003|framerusercontent" src public content` leer; `public/sites/` entfernt; keine Datei in `public/` mit einem SHA-256-Präfix aus `CLONE_INVENTORY.md`; Font-Namen geprüft (Anton/Instrument Serif nur noch, wenn an Gate 2 bewusst behalten — beide OFL)

## Tasks (Abhängigkeitsreihenfolge)

Jede Task: umsetzen → Task-DoD + globale DoD → Commit (Conventional Commit) → `docs/PROGRESS.md` aktualisieren.

### Block A: Fundament (vor Gate 2)

**T1 – Site-Ordner umziehen**
- Ziel: Klon-Code unter neutralem Namen weiterführen, damit das Audit später greift.
- Dateien: `git mv src/components/sites/alovehatestory src/components/nano`; Datei-/Komponentennamen (`HatePage` → `NanoPage`, `hate.module.css` → `nano.module.css`); `src/app/page.tsx`
- DoD: Seite rendert unverändert; `grep -rn "alovehatestory" src` trifft nur noch Asset-Pfade
- Verifikation: `npm run check && grep -rn "HatePage\|hate.module" src` (leer)

**T2 – Brand-Tokens als Tailwind-v4-Theme**
- Ziel: Tokens aus `brand.json` in `src/app/globals.css` (`@theme`, oklch): ink, ink-soft, paper, paper-warm, ochre, ochre-muted, white + Alpha-Stufen; Barlow via `next/font/google` (300/400/500/700/900) in `layout.tsx`
- DoD: Tokens als Utilities nutzbar (`bg-ink`, `text-ochre`); Kontraste dokumentiert (ochre nur auf Dunkel als Text)
- Verifikation: `npm run check`; Seite rendert mit Barlow neben den alten Fonts

**T2b – Hochauflösende Projekt-Screenshots (User-Entscheid Gate 1)**
- Ziel: die 6 verlinkten Projekt-Websites öffnen und neue Screenshots erstellen: Desktop 1440×900 @2x und Mobile 390×844 @2x, Cookie-Banner nur schliessen (ablehnen), Intro/Lazy-Load abwarten. Projekte ohne Link (hirter finance, wigglepaws) behalten den 600×400-Screenshot.
- Dateien: `public/nano/projects/<slug>-desktop.png`, `<slug>-mobile.png`; `content/nano/images.json` und `projects.json` ergänzen (Quelle = Projekt-URL, Aufnahmedatum)
- DoD: 12 neue Bilder, Masse im Manifest, keine Bannerreste
- Verifikation: `file public/nano/projects/*.png` (2880×1800 bzw. 780×1688)

**T3 – Preview-Seite `/_brand` (Gate 2)**
- Ziel: Farben, Logo „nd“ hell/dunkel, Typo-Skala, Buttons und Formularfeld im Klon-Stil zeigen; Varianten für die Gate-2-Fragen (Herzen-Ersatz, Kreisbuchstaben, Counter)
- Dateien: `src/app/%5Fbrand/page.tsx` (Ordner `%5F` = Literal `_`, da `_`-Ordner in Next privat sind), `robots`-noindex
- DoD: `/_brand` erreichbar, Screenshot an User
- Verifikation: `curl -s -o /dev/null -w "%{http_code}" localhost:3000/_brand` → 200

**→ GATE 2:** Farbpalette · Fonts (Barlow / Klon-Fonts / Mix) · Formular-Backend (Resend / Formspree / mailto) · `OPEN_QUESTIONS.md`. Danach `/_brand` löschen.

### Block B: Sektionsumbau (nach Gate 2, autonom)

**T3b – Grain entfernen**
- Ziel: `Grain.tsx` und Einbindung löschen
- Verifikation: `grep -rn "Grain" src` leer; `npm run check`

**T4 – Layout & Meta**
- Dateien: `src/app/layout.tsx`
- Ziel: `lang="de-CH"`, Titel/Description aus `texts.md` (Ort Orpund), `metadataBase` `https://nano-design.ch`, Favicon aus `nd`, alte Favicons/OG raus
- DoD: `<html lang="de-CH">`; keine Klon-Meta mehr
- Verifikation: `curl -s localhost:3000 | grep -o 'lang="[^"]*"\|<title>[^<]*'`

**T5 – Navigation & Logo**
- Dateien: `src/components/nano/Header.tsx`, `nano.module.css`
- Ziel: Logo „nd“ statt Switcher; Menü mit 6 Ankern; Active-State (IntersectionObserver auf Sektionen); Mobile-Variante; Esc/Fokus-Handling bleibt
- DoD: jeder Link springt zur Sektion; aktiver Eintrag markiert; Tastatur bedienbar
- Verifikation: Browser-Check: Klick auf alle 6 Links, `aria-current` wechselt beim Scrollen

**T6 – Intro & Hero (`#home`)**
- Ziel: Intro-Texte, Hero „nano / design.“, „web · print · digital“, CTA → `#kontakt`, INFO-Zeile; Herzen gemäss Gate 2
- DoD: keine Klon-Texte/-Bilder im Hero; CTA scrollt zu Kontakt
- Verifikation: Screenshots 375/768/1440

**T7 – Showcase (ehem. IMAGE)**
- Ziel: Vollbild gemäss Gate-2-Entscheid (Projekt-Screenshot / gelieferte Grafik / streichen)
- Verifikation: Screenshot 1440; kein `svaDx…png` mehr referenziert

**T8 – Leistungen (`#leistungen`)**
- Ziel: Intro (ehem. Vision) + 3 Sticky-Panels mit 6 Leistungen; Panel-Bilder gemäss Gate 2
- DoD: alle 6 Texte 1:1 aus `texts.md`; Sticky-Stacking und Appear wie im Klon
- Verifikation: Screenshots je Panel; `/code-review`

**T9 – Projekte (`#projekte`)**
- Ziel: Kopf + 8 Karten aus `projects.json` (Desktop 3-3-2 mit Parallaxe, Tablet 2-spaltig, Mobile Sticky-Stack); externe Links `target=_blank rel=noopener`; „mehr auf anfrage“ ohne Link
- DoD: alle 8 Projekte, Alt-Texte aus `images.json`
- Verifikation: Screenshots; Links prüfen (`curl -sI` auf die 6 URLs); `/code-review`

**T10 – Über Nano (`#ueber-nano`)**
- Ziel: ehem. 99-Sektion mit „über nano“-Texten; Counter/Signatur gemäss Gate 2
- Verifikation: Screenshots; `/code-review`

**T11 – Preise (`#preise`)**
- Ziel: neue Sektion im Klon-Stil, 3 Pakete + Hosting-Text + CTA → `#kontakt`
- DoD: Beträge exakt („ab chf 690.–“, „ab chf 250.–“, „auf anfrage“)
- Verifikation: Screenshots; `/code-review`

**T12 – Kontakt UI (`#kontakt`)**
- Ziel: Formular (Labels, Pflichtfelder, Honeypot `website`, Fehler-/Erfolgszustand, `aria-live`)
- Verifikation: Tastatur-Durchlauf, leere Pflichtfelder zeigen Fehler

**T13 – Kontakt Backend**
- Ziel: gemäss Gate 2, Empfehlung `src/app/api/contact/route.ts` mit Resend; Validierung (Länge, E-Mail-Format), Honeypot verwirft still, einfaches Rate-Limit pro IP, Secrets nur via Env (`RESEND_API_KEY`, `CONTACT_TO`); `.env.example`
- DoD: Test-Submit kommt an; ungültige Eingaben → 400; Honeypot → 200 ohne Versand
- Verifikation: `curl -X POST localhost:3000/api/contact -d …` (gültig/ungültig/Honeypot) + Assert-Script `scripts/check-contact.mjs`

**T14 – Footer**
- Ziel: Seiten-Links, E-Mail, ©-Zeile, Impressum/Datenschutz, Fit-Text „nano design“
- Verifikation: Screenshots 375/1440

**T15 – `/impressum` und `/datenschutz`**
- Ziel: Routen mit Texten aus `texts.md`; Datenschutz ergänzt um Vercel-Hosting und Formular-Provider (Text vorab per AskUserQuestion freigeben, da rechtlich)
- Verifikation: beide Routen 200; Links aus Footer funktionieren

**T16 – SEO-Dateien & OG**
- Ziel: `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/opengraph-image.tsx` (generiert, „nd“ + Claim), JSON-LD `LocalBusiness` (Daten aus Impressum)
- Verifikation: `curl localhost:3000/sitemap.xml`, `/robots.txt`, `/opengraph-image`

**T17 – Asset-Audit & Aufräumen**
- Ziel: `public/sites/alovehatestory/` löschen, unbenutzte Fonts/Komponenten entfernen, `CLONE_INVENTORY.md` abhaken
- Verifikation: Audit-Befehle aus der Launch-DoD

**T18 – Qualitätsrunde**
- `/code-review` (gesamt), `/security-scan`, Lighthouse mobile, Reduced-Motion-Check, 375/768/1440-Screenshots nach `docs/progress-shots/`

### Block C: Launch

**T19 – Launch-Report & Preview-Deploy** → `docs/LAUNCH_REPORT.md`, `npx vercel` (Login durch User), Git-Remote klären
**→ GATE 3:** Production-Deploy / noch anpassen / nur Preview. Danach ggf. `npx vercel --prod`; DNS nur nach separater Rückfrage.

## Loop-Strategie

- Abarbeitung sequenziell nach Task-Nummer mit der ECC-Execute-Schleife: umsetzen → Task-DoD + globale DoD → bei Fehlern `/build-fix` → Commit → `PROGRESS.md`
- Nach jeder Sektion (T8–T14) `/code-review`; am Ende `/security-scan`
- Nach drei erfolglosen Fix-Versuchen an derselben Task: stoppen und AskUserQuestion mit Fehlermeldung
- Screenshots je Sektion (375/1440) nach `docs/progress-shots/`

## Risiken

| Risiko | Wahrscheinlichkeit | Gegenmassnahme |
|---|---|---|
| Lighthouse-Performance < 90 wegen Lenis, grossen Bildern, Intro | mittel | Grain entfällt; Intro blockiert LCP nicht (Text bleibt im DOM); `next/image` mit `sizes` und AVIF/WebP |
| Bildmaterial nur aus Website-Screenshots (wirkt ggf. eintönig) | mittel | Desktop- und Mobile-Aufnahmen mischen, Polaroid-/Device-Rahmung im Klon-Stil; Gate 2 zeigt die Wirkung |
| 6 Leistungen passen nicht 1:1 in 3 Panels | mittel | Gruppierung 2 pro Panel (Mapping oben), Gate 2 |
| Formular-Zustellung (SPF/DKIM für nano-design.ch bei Resend) | mittel | Domain bei Resend verifizieren; bis dahin Absender `onboarding@resend.dev` für Tests |
| Rechtstexte (revDSG) unvollständig für neue Auftragsbearbeiter | mittel | Ergänzung per AskUserQuestion freigeben lassen |
| Lowercase-Stil + Anton/Barlow-Wechsel verändert Fit-Text-Geometrie | mittel | Fit-Text über `cqw` neu kalibrieren, Screenshots je Breakpoint |
| `/_brand`: `_`-Ordner sind in Next privat | sicher | Ordner `%5Fbrand` |
| Kein Git-Remote → Vercel-Deploy ohne Git-Integration | mittel | Vor T19 AskUserQuestion (Repo anlegen oder CLI-Deploy) |

## Offene Annahmen

1. Die Klon-Struktur bleibt. Neue Sektionen (Preise, Kontakt) werden im Klon-Stil gestaltet, nicht aus nano-design.ch übernommen.
2. Die Wortlaute bleiben vorerst 1:1, inklusive gemischtem du/Sie und „ich“/„wir“ (OPEN_QUESTIONS #11).
3. Barlow wird Hausschrift. Ob Anton/Instrument Serif als Akzentschriften bleiben, entscheidet Gate 2.
4. Keine Analytics/Cookies, damit der Datenschutzsatz „kein Tracking“ wahr bleibt.
