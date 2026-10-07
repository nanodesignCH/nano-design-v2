# Fortschritt: Nano Design Redesign

Master-Prompt: `PROJECT_SETUP_PROMPT.md`. Nach einem Session-Neustart diese Datei zuerst lesen.

## Aktuelle Phase

**Phase 6: Pre-Launch (→ Gate 3).** Block B (T4–T18) abgeschlossen; Bericht in `docs/LAUNCH_REPORT.md`.

## Entscheidungen

- Node 24 via nvm (`nvm alias default 24`). Bash-Shells des Agents brauchen `source ~/.nvm/nvm.sh && nvm use 24`, weil der PATH dort noch v22 hat.
- Git: Remote `origin` = github.com/nanodesignCH/nano-design-v2 (öffentlich). **Arbeitsbranch `publish` → `origin/main`** (bereinigter Stand ohne Klon-Assets). `master` = lokales Archiv mit voller Klon-Historie, nie pushen. `docs/research/alovehatestory/` und `docs/clone-reference/` sind gitignored (nur lokal).
- ECC: `npx ecc-universal setup` verlangt ein TTY, darum per CLI installiert (`ecc@ecc`, user scope, Hook-Profil `standard`).
- context-mode: `context-mode@context-mode` (user scope).
- taste-skills: global in `~/.claude/skills` vorhanden, nichts nachinstalliert.
- Browser: Built-in Browser (`mcp__Claude_Browser__*`).
- GateGuard abschwächen: User legt `.claude/settings.json` selbst an (Agent darf Settings nicht ändern): `GATEGUARD_BASH_ROUTINE_DISABLED=1`, `GATEGUARD_EXEMPT_GLOBS=src/**,docs/**,content/**,public/**,scripts/**`.

## Phase 0

- [x] Voraussetzungen (node 24.21, git 2.50, claude 2.1.241, npx 10.9)
- [x] Template geholt, `graft/` bleibt in `.gitignore`
- [x] `git init`, `npm install`, `npm run check` grün
- [x] ECC installiert
- [x] context-mode installiert
- [x] taste-skills vorhanden
- [x] Browser-MCP verfügbar
- [x] Git-Remote geklärt (nur lokal)
- [x] Session-Neustart
- [x] `/context-mode:ctx-doctor` alle Checks OK (einzige Warnung: Bun fehlt, optional)
- [x] Smoke-Test: `graft_repo_map`, `ctx_execute npm run build`, Read+Edit laufen. ECC-GateGuard verlangt beim ersten Bash/Edit pro Datei Fakten, Abschwächung durch User beschlossen (siehe Entscheidungen)

## Phase 1

- [x] Nur `/hate` geklont (User-Entscheid: Projekt-Unterseiten `/joye-h`, `/cybe-h`, `/ar-elettro-empire-h` nicht klonen, Links zeigen aufs Original)
- [x] Route `/` = Klon (`src/components/sites/alovehatestory/`), Lenis-Smooth-Scroll, Grain, Intro, fallende Herzen, Sticky-Service-Panels, Parallaxe über `--sy`, 99-Counter, Menü
- [x] Vergleich Original/Klon bei 1440 und 375 (plus 1024): Seitenhöhe Desktop 9315 = 9315, Mobile 10090 vs. 10124
- [x] Referenz-Screenshots: `docs/clone-reference/original/` und `docs/clone-reference/clone/`
- [x] `docs/CLONE_INVENTORY.md`, Page-Brief `docs/research/alovehatestory/PAGE_BRIEF.md`
- [x] `npm run check` grün, keine Console-Errors/Hydration-Warnings

Bekannte Restabweichungen: Mobile-Counter zählt anders als das Original (Original nutzt dort eine andere Fortschrittskurve), Tablet nur grob angeglichen, Service-Bild-„Appear“ als CSS-Transition statt Framer-Spring, „EXPLORE“-Text in Panel 2 nicht nachgebaut (im Original unsichtbar), `prefers-reduced-motion` schaltet Intro, Herzen, Grain-Animation, Smooth-Scroll und Parallaxe ab.

Hinweis Dev-Server: `preview_start` startet den Prozess in dieser Umgebung nicht. Stattdessen `npx next dev -p 3000` im Hintergrund (Node 24).

## Phase 2

- [x] `content/nano/texts.md`: alle Sektionen + Impressum/Datenschutz im Wortlaut
- [x] `content/nano/projects.json`: 8 Projekte (6 mit URL, 2 „mehr auf anfrage“)
- [x] `public/nano/`: 8 Projekt-Screenshots (600×400, Originalgrösse) + `icon.svg`; Manifest `content/nano/images.json`
- [x] Logo: typografisch „nd“ (Barlow 900), Vektor nur als Favicon-SVG → offener Punkt #1
- [x] `content/nano/brand.json`: 7 Farben (Hex + oklch, Verwendung, Häufigkeit, Kontraste), Barlow 300–900, Typo-Skala
- [x] `content/nano/OPEN_QUESTIONS.md`: 12 Punkte (Ort Orpund bereits geklärt)
- [x] Referenz-Screenshots der Live-Seite: `docs/research/nano/shot-1440-*.jpeg`
- Entscheid User: Adresse Orpund ist korrekt (Gerolfingen in Meta veraltet).

## Nächster Schritt

T19: User importiert das Repo in Vercel (Git-Integration) → Preview-URL; Resend später (User). Danach Lighthouse auf Preview, Gate 3.

## Phase 5 (Block B)

- [x] T4 Layout & Meta (de-CH, Orpund, metadataBase, Barlow only)
- [x] T5–T12, T14 Sektionen: Logo/Nav mit Active-State, Hero, Showcase, Leistungen (3 Panels/6 Leistungen), 8 Projektkarten, Über Nano, Preise, Kontakt-UI, Footer
- [x] T13 Kontakt-Backend `/api/contact` (Resend via fetch, Validierung `src/lib/contact.ts`, Check `node --no-warnings scripts/check-contact.mts`)
- [x] T15 `/impressum`, `/datenschutz` (Wortlaut freigegeben, `content/nano/legal-draft.md`)
- [x] T16 sitemap, robots, OG-Bild, JSON-LD, 404
- [x] T17 Asset-Audit bestanden
- [x] T18 Lighthouse lokal 98/100/100/100, Code-Review (2 Fixes), npm audit prod 0, AgentShield ausgewertet
- Hinweis: `npm audit fix --omit=dev` entfernt devDependencies aus node_modules → danach `npm install`.
- Abweichung vom Plan: T5–T12/T14 als ein Commit (`650d757`) statt einzeln, weil die Sektionen eine gemeinsame CSS-Datei teilen.
