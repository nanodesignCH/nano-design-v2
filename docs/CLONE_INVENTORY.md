# Clone-Inventar: alovehatestory.com/hate

Alles hier stammt vom Original und muss vor dem Launch ersetzt oder entfernt sein (Asset-Audit, siehe Launch-DoD in `docs/PLAN.md`).
Quelle: https://alovehatestory.com/hate (Framer), geklont am 2026-10-06.

## Prüfbefehle für das Audit

```bash
grep -rniE "alovehatestory|alovestory|a hate story|a love story|ALS 2O25|17369951003|framerusercontent" src public content
```

```bash
ls public/sites/alovehatestory
```

Die Ordner `public/sites/alovehatestory/` und `src/components/sites/alovehatestory/` müssen beim Launch leer sein oder fehlen. Bild-Hashes unten zum Abgleich (`shasum -a 256`, erste 16 Zeichen).

## Bilder, GIFs, SVGs (`public/sites/alovehatestory/`)

| Datei | SHA-256 (16) | Grösse | Quelle (framerusercontent.com) | Verwendung |
|---|---|---|---|---|
| `svaDxG3fFk0BEdzMFMeX2APWFc.png` | f2b6fd89b790f8be | 4.7 MB, 4000×3000 | `/images/svaDx…png` | IMAGE-Sektion (Billboard JOYE, „Latest Project“-Badge ist eingebrannt) |
| `pAaBFZBhoa49VkRKJj6UJC2q8g.png` | b0ac73aee8e43b32 | 990×1041 | `/images/pAaB…png` | Service 1 (Smartphone grün) |
| `BqtNneCIh2GdWYRzFNbtHOBcbA.png` | 3e9f1554d1f53da8 | 990×1041 | `/images/BqtN…png` | Service 2 (Laptop) |
| `1TCIKqIJkpalXcfDToC7IArkfrk.png` | 15ad180f93e96035 | 990×1041 | `/images/1TCI…png` | Service 3 (Magazin) |
| `kfpNxYAgIoGuSCcHrnd0ehxa4M.png` | 4e0eb7aa201b87c5 | 1125×1182 | `/images/kfpN…png` | Projektkarte JOYE |
| `OmORdfg1Nn8eND8FbTHyvlX8.png` | 0b037cbfc4dc88bb | 4680×2698 | `/images/OmOR…png` | Projektkarte CYBE |
| `P0vWaDIfBO7PSlTU9NIjCoOc.png` | 5b725e762ad5691e | 2732×1536 | `/images/P0vW…png` | Projektkarte AR |
| `W0aPumwTc4XTZ5QY000ceXUd2LU.gif` | 7008ec6b2de239d0 | 1.5 MB, 768×768 | `/images/W0aP…gif` | Menü „Latest Projct“-Thumbnail |
| `0y9q6EdkOFvf91r8otU0RkkBolo.gif` | 5156836522db2b2b | 200×200 | `/images/0y9q…gif` | Intro, Herz über „A HATE STORY“ |
| `d7yrpwpndPfgUi1UY1VyB7ZH8U.svg` | 9fdb12ae3c1a4757 | 202×172 | `/images/d7yr…svg` | Fallende Broken-Hearts (Hero) |
| `0JWuUU8txv97bzGFGh4fMbGBTw.svg` | 66bd8ad074348c85 | 189×181 | `/images/0JWu…svg` | Fallende Broken-Hearts (Hero) |
| `E7rokSUx2RVX1nPrToKDshS5vTY.svg` | f7bf3e8a71ef5312 | 171×173 | `/images/E7ro…svg` | Fallende Broken-Hearts (Hero) |
| `signature.svg` | 252e011c4c1d76cd | 74 KB, viewBox 352×102 | Inline-Data-URI im DOM | Signatur „A hate Story“ (99-Sektion) |
| `switch-heart.svg` | 1da4cd53f1421c38 | 22.5² | CSS-Data-URI | Switcher Love-Icon |
| `switch-burst.svg` | 01ace5318b7165dd | 28×26 | CSS-Data-URI | Switcher Hate-Icon |
| `eeevWo2HKWg0FtbyKKJtsuvpSRI.png` | 58673fede7fd58a4 | 64×64 | `/images/eeev…png` | Favicon (hell) |
| `iw5mFUFA5RwniNVdlifLvdLcmQ.png` | 0999d31f0af9d5cc | 64×64 | `/images/iw5m…png` | Favicon (dunkel) |
| `og-an3RvCMewFfLFm6gnRxdp3YqzS8.png` | 40c7b8344cf1ee3a | 1200×630 | `/assets/an3R…png` | OG-/Twitter-Bild |

Nicht übernommen: `nie6Q1jPYrfq3q60tIn9hVCubCY.png` (JOYE-Tasche, im SSR-HTML referenziert, aber in keinem sichtbaren Zustand von /hate verwendet). Keine Videos auf der Seite.

## Fonts

| Font | Quelle im Original | Im Klon | Lizenz |
|---|---|---|---|
| Anton 400 | Fontshare-Mirror auf framerusercontent | `next/font/google` (self-hosted im Build) | SIL OFL 1.1, frei nutzbar |
| Instrument Serif 400 + italic | Google Fonts | `next/font/google` | SIL OFL 1.1, frei nutzbar |
| Inter | Framer-Default (nur Fallback-Links) | nicht übernommen | SIL OFL 1.1 |

Die Fonts sind lizenzrechtlich unkritisch. Ob sie bleiben, ist eine Designfrage (Gate 2).

## Texte (alle Italienisch, Marke „A Hate Story / A Love Story“)

Vollständiger Wortlaut: `docs/research/alovehatestory/texts-desktop.md`. Im Code: `src/components/sites/alovehatestory/HatePage.tsx`, `Header.tsx`.

- Intro: „A HATE STORY“, „Disruptive Branding 'n Consulting“
- Hero: „Ogni brand merita una storia d’amore. / Noi sappiamo scriverla.“, „A HATE STORY“, „DISRUPTIVE BRANDING & CONSULTING AGENCY“, „Somewhere in the world“, „EST.2025©“
- Vision/Mission: „( OUR MISSION )“ und 2 Absätze, „( OUR VISION )“ und 1 Absatz
- Services: 3 Titel (DISRUPTIVE BRⓐNDING, CORPORATE WEⓑSITE, ADVERTISING 'N ⓒONSULTING) mit je 2 Listen
- Projekte: PROJECTS / Branding / Consulting / LATEST / 2025©; Karten JOYE, CYBE, AR mit Tags und „©ALS 2O25“ (Schreibweise mit „O“ wie im Original)
- 99-Sektion: „( 99% CHOICE )“, „( 1% WORKS )“, „( ABOUT US )“ mit Fliesstexten; Geisterwörter OUR / VISION / FOR / BRANDS
- Footer: „P.IVA 17369951003“ (italienische Steuernummer), „alovestory.agency@gmail.com“, „MADE WITH HATE“, „EST 2025©“, „A HATE STORY“ (Mobile: „A LOVE STORY“, Original-Eigenheit)
- Menü: HOME, SERVICES, PROJECT, ABOUT, CONTACT, „Latest Projct“ (Tippfehler im Original), „JOYE“

## Domains und Links im Code

| Wert | Datei | Zweck |
|---|---|---|
| `https://alovehatestory.com/` | `Header.tsx` (Switcher-Herz) | Love-Seite, out of scope |
| `https://alovehatestory.com/joye-h` | `Header.tsx`, `HatePage.tsx` | Menü-Latest und Projektkarte |
| `https://alovehatestory.com/cybe-h`, `/ar-elettro-empire-h` | `HatePage.tsx` | Projektkarten |
| `https://mail.google.com/mail/?view=cm&…to=alovestory.agency@gmail.com…` | `HatePage.tsx` (Footer) | Kontakt-Link |
| Anker `#home-h`, `#services-h`, `#projects-h`, `#about-h`, `#contact-h` | `HatePage.tsx`, `Header.tsx` | Menü-Navigation (werden zu den Nano-Ankern) |

## Meta-Tags (`src/app/layout.tsx`)

- `title`: „A Hate Story | Disruptive Branding & Consulting Agency“
- `description` (og/twitter identisch): „A Hate Story rappresenta l’altra voce di A Love Story, …“
- `og:image` / `twitter:image`: `og-an3R…png`
- Favicons hell/dunkel (siehe oben)
- `<html lang="it">` (Zielwert: `de-CH`)

## Code mit Klon-Bezug

- `src/components/sites/alovehatestory/` (HatePage, Header, Reveal, Counter, Grain, ScrollRuntime, hate.module.css)
- `src/app/page.tsx` importiert `HatePage`
- Abhängigkeit `lenis` (MIT, bleibt für das Smooth-Scrolling)

## Audit-Ergebnis (2026-10-07, Plan T17)

- Text-Audit über `src public content`: keine Treffer
- `public/sites/` entfernt; Hash-Abgleich aller Dateien in `public/` und `src/` gegen die Tabelle oben: keine Treffer
- Fonts: Anton und Instrument Serif entfernt, nur noch Barlow (OFL)
- Meta: Titel, Description, Favicons und OG-Bild ersetzt; `lang="de-CH"`
- Verbleibend aus dem Klon: Layout-/Motion-Code (eigene Umsetzung) und die Abhängigkeit `lenis` (MIT)
