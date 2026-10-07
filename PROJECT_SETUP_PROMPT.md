# Master-Prompt: Nano Design Redesign

> Diesen ganzen Block als erste Nachricht in eine **neue Claude-Code-Session** im Ordner
> `/Users/joelgex/Documents/JG/claude/nano-design-cloned` einfügen.

---

Du baust das Redesign von **https://nano-design.ch/** (Schweizer Web- & Printdesign-Agentur, Deutsch, CH-Rechtschreibung: immer „ss“, nie „ß“).

**Basis:** Mit `ai-website-cloner-template` wird **nur https://alovehatestory.com/hate** (dunkle Variante) geklont, **nicht** die Startseite `/`. Der Klon bleibt anfangs sehr nah am Original und wird danach auf Nano Design umgebaut. Individualisiert wird später.

**Zielseite:** ein **One-Pager** mit 6 Sektionen als Anker: `#home`, `#leistungen`, `#projekte`, `#ueber-nano`, `#preise`, `#kontakt`. Dazu die separaten Routen `/impressum` und `/datenschutz` (rechtlich nötig).
**Hosting:** Vercel. **Stack:** so, wie das Template ihn vorgibt (Next.js 16, React 19, Tailwind v4, shadcn/ui, TypeScript strict).

## Arbeitsregeln (gelten durchgehend)

1. **Fortschrittsdatei:** Halte `docs/PROGRESS.md` aktuell (Phase, erledigte Tasks, nächster Schritt). Wenn die Session neu startet, liest du sie zuerst und machst dort weiter.
2. **AskUserQuestion** ist Pflicht, wenn etwas unklar ist, wenn mehrere sinnvolle Optionen bestehen oder wenn Input von mir nötig ist (Zugangsdaten, Geschmacksfragen, rechtliche Inhalte). Gib 2–4 Optionen und markiere eine als „(Recommended)“. Rate nie still.
3. **Drei Gates, sonst autonom:** Nur an diesen Stellen stoppst du für meine Freigabe:
   - **Gate 1:** ECC-Projektplan freigeben
   - **Gate 2:** Design-Richtung (Farben, Logo, Typo, Kontaktformular-Backend)
   - **Gate 3:** Pre-Launch (Production-Deploy auf Vercel)
   Alles andere läuft ohne Rückfrage durch, ausser du bist wirklich blockiert.
4. **Token sparen, klare Rollen:**
   - **graft** (`mcp__graft__*`) nutzt du, um Code zu *finden*: wo etwas liegt, wer es aufruft (gibt `file:line` zurück).
   - **context-mode** (`ctx_*`) nimmst du für *grosse Ausgaben*: Crawls, Build-Logs, HTML-Dumps, Lighthouse-JSON.
   - **Read** nur gezielt auf die Zeilen, die graft genannt hat, und nur zum Editieren.
   - Blockiert ein context-mode-Hook einen nötigen Read vor einem Edit, nimmst du einen engen `offset`/`limit`-Read und umgehst die Sperre nicht.
5. **Git:** Nach jeder abgeschlossenen Task committen (Conventional Commits). Nichts pushen ohne Remote-Freigabe (wird in Phase 0 per AskUserQuestion geklärt).

---

## Phase 0: Projektsetup

1. **Voraussetzungen prüfen:** `node -v` (≥ 24, sonst AskUserQuestion: via `nvm`/`brew` upgraden?), `git`, `claude --version` (≥ 1.0.33), `npx`.
2. **Template holen** (der Ordner enthält schon `graft/`, das bleibt erhalten):
   ```bash
   git clone --depth 1 https://github.com/JCodesMore/ai-website-cloner-template .tmp-cloner
   rsync -a --exclude .git .tmp-cloner/ ./
   rm -rf .tmp-cloner
   echo "graft/" >> .gitignore   # lokaler Code-Index, gehört nicht ins Repo
   git init && npm install && npm run check
   ```
3. **ECC installieren:** Zuerst `npx ecc-universal@2.2.3 setup`. Falls das interaktiv hängt oder fehlschlägt, nimm den CLI-Weg `claude plugin marketplace add https://github.com/affaan-m/ECC` + `claude plugin install ecc@ecc`. Wenn auch das nicht geht: AskUserQuestion, damit ich `/plugin marketplace add https://github.com/affaan-m/ECC` und `/plugin install ecc@ecc` selbst ausführe.
4. **context-mode installieren:** `claude plugin marketplace add mksglu/context-mode` + `claude plugin install context-mode@context-mode` (Fallback wie oben über die `/plugin`-Befehle).
5. **taste-skill:** Prüfe zuerst `ls ~/.claude/skills`. `design-taste-frontend`, `redesign-existing-projects`, `high-end-visual-design` usw. sind dort wahrscheinlich schon global installiert. Nur falls etwas fehlt: `npx skills add https://github.com/Leonxlnx/taste-skill`.
6. **Browser:** Prüfe, ob ein Browser-MCP verfügbar ist (Built-in Browser oder Claude in Chrome). Der Cloner braucht ihn.
7. **Git-Remote:** AskUserQuestion: neues GitHub-Repo anlegen (Name?), bestehendes nutzen oder vorerst nur lokal arbeiten?
8. `docs/PROGRESS.md` anlegen. Dann **mich bitten, die Session neu zu starten** (Plugins und der `/clone-website`-Skill laden erst danach). Nach dem Neustart: `/context-mode:ctx-doctor` ausführen, alle Checks müssen `[x]` zeigen. Danach einen Smoke-Test der Hook-Kombination: ein `graft_repo_map`, ein `ctx_execute` mit `npm run build` und ein Read+Edit auf einer kleinen Datei. Alle drei müssen ohne Hook-Fehler durchlaufen. Wenn nicht: AskUserQuestion mit der Fehlermeldung.

**DoD Phase 0:** `npm run check` grün · `/ecc:plan`, `/clone-website` und ctx-doctor verfügbar · Git initialisiert · PROGRESS.md existiert.

---

## Phase 1: Template mit dem Cloner erstellen

1. `/clone-website https://alovehatestory.com/hate`, **nur diese URL**. Die helle Startseite `/` sowie Links, die dorthin führen, werden ignoriert. Wenn die Seite intern auf weitere Routen verlinkt, die zum dunklen Design gehören: AskUserQuestion, ob diese mitgeklont werden.
2. Ergebnis als Route `/` im Projekt. Desktop (1440) und Mobile (375) müssen visuell nah am Original sein, Interaktionen und Animationen funktionieren.
3. Screenshots Original vs. Klon nach `docs/clone-reference/` (Desktop + Mobile). Sie dienen als Referenz für den späteren Umbau.
4. In `docs/CLONE_INVENTORY.md` alles auflisten, was vom Original stammt: Bilder/Videos, Fonts (mit Lizenzhinweis, falls erkennbar), Texte, SVGs, Domains in Code und Meta-Tags. Diese Liste ist die Grundlage für das Asset-Audit vor dem Launch.
5. Commit: `feat: clone alovehatestory /hate as base template`.

**DoD Phase 1:** Klon läuft mit `npm run dev` · `npm run build` grün · Referenz-Screenshots vorhanden · CLONE_INVENTORY.md vollständig.

---

## Phase 2: Inhalte und Brand von nano-design.ch sichern

Mit dem Browser-MCP (JS-Rendering nötig, die Seite läuft auf Next.js) **alle Sektionen** von https://nano-design.ch/ durchgehen: Home, Leistungen, Projekte, Über Nano, Preise, Kontakt, dazu Impressum/Datenschutz, falls vorhanden.

1. **Texte** → `content/nano/texts.md`, gegliedert nach Sektion (Headlines, Fliesstext, CTAs, Preise mit allen Paketen und Beträgen, Leistungsliste, Kontaktdaten, Footer). Wortlaut 1:1 übernehmen, nichts umschreiben.
2. **Projekte** → `content/nano/projects.json` (Kundenname, Kategorie, Tech wie WordPress/Shopify, URL, Beschreibung, Bildpfade).
3. **Bilder** → `public/nano/` in Originalauflösung (bei Next-Image-URLs die Quell-URL aus dem `url=`-Parameter nehmen, nicht die verkleinerte Variante). Dazu `content/nano/images.json` mit `{ file, sourceUrl, alt, section, width, height }`.
4. **Logo:** In höchster verfügbarer Qualität sichern, SVG bevorzugt (Inline-SVG im DOM, `<img src=*.svg>`, Favicon, OG-Image). Gibt es nur Raster: AskUserQuestion, ob ich eine SVG-Datei liefere oder ob du es vektorisieren sollst.
5. **Farben und Typo ableiten:** Per JS die `getComputedStyle`-Werte der Schlüsselelemente auslesen (Body-BG, Text, Links, Buttons, Akzente, Borders) plus CSS-Custom-Properties aus `:root`. Ergebnis in `content/nano/brand.json`: Farben als Hex **und** oklch, jeweils mit Verwendungsort und Häufigkeit; Fonts mit Familie, Gewichten und Quelle.
6. Unklare oder fehlende Inhalte (z.B. veraltete Preise, fehlende Bilder für Projekte) als offene Punkte in `content/nano/OPEN_QUESTIONS.md` sammeln. Sie werden an Gate 2 gesammelt per AskUserQuestion geklärt.

**DoD Phase 2:** Alle 6 Sektionen textlich erfasst · alle Bilder lokal und im Manifest · Logo gesichert · brand.json mit Farben und Fonts · kein Bild-Link zeigt mehr auf die Live-Domain.

---

## Phase 3: ECC-Projektplan (→ Gate 1)

Rufe `/ecc:plan` mit diesem Brief auf (ergänzt um das, was du in Phase 1–2 gefunden hast):

> Baue den geklonten /hate-Template zum One-Pager von Nano Design um. Sektionen: Home, Leistungen, Projekte, Über Nano, Preise, Kontakt, plus /impressum und /datenschutz. Der Look bleibt zunächst nah am Klon (Layout, Motion, dunkle Stimmung). Farben, Logo und Fonts kommen aus `content/nano/brand.json`, Texte und Bilder aus `content/nano/`. Für Design-Anpassungen gelten die taste-skill-Regeln (`redesign-existing-projects`, `design-taste-frontend`). Deploy auf Vercel.

Der Plan wird als `docs/PLAN.md` gespeichert und muss enthalten:

- **Tasks** klein und einzeln verifizierbar, in Abhängigkeitsreihenfolge. Pro Task: Ziel, betroffene Dateien, **eigene DoD**, Verifikationsbefehl.
- **Mapping-Tabelle:** jede Sektion des Klons → welche Nano-Sektion sie wird (inkl. was wegfällt oder dazukommt).
- **Globale DoD** (gilt für jede Task zusätzlich):
  - `npm run lint`, `npm run typecheck` (bzw. `tsc --noEmit`) und `npm run build` sind grün
  - keine Console-Errors oder Hydration-Warnings
  - Screenshots bei 375 / 768 / 1440 px ohne horizontales Scrollen oder Überlappungen
  - `prefers-reduced-motion` wird respektiert
- **Launch-DoD:**
  - Lighthouse mobile: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95
  - alle Anker-Links und Nav (inkl. Mobile-Menü, Active-State beim Scrollen) funktionieren
  - Kontaktformular sendet nachweislich (Test-Submit)
  - Meta, OG-Image, Favicon, `sitemap.xml`, `robots.txt` und `lang="de-CH"` sind gesetzt
  - Impressum und Datenschutz (revDSG) sind vorhanden
  - durchgehend CH-Rechtschreibung
  - **Asset-Audit bestanden:** Kein Eintrag aus `CLONE_INVENTORY.md` ist mehr im Build. Geprüft per `grep -ri "alovehatestory"` über Code und `public/`, Abgleich der Font-Namen und Bild-Hashes. Fonts mit unklarer Lizenz sind ersetzt.
- **Loop-Strategie:** Abarbeitung mit `/multi-execute` (bzw. der ECC-Execute-Schleife). Jede Task: umsetzen → DoD prüfen → bei Fehlern `/build-fix` → Commit → PROGRESS.md aktualisieren. Nach jeder Sektion ein Review mit `/code-review`, am Ende `/security-scan`. Nach drei erfolglosen Fix-Versuchen an derselben Task: stoppen und AskUserQuestion.

**Gate 1:** Fasse mir den Plan kompakt zusammen (Tasks, Reihenfolge, offene Annahmen) und hole per AskUserQuestion die Freigabe ein: „Freigeben“, „Anpassen“ oder „Abbrechen“.

---

## Phase 4: Design-Richtung (→ Gate 2)

Vor dem Umbau der Sektionen:

1. Aus `brand.json` einen Token-Vorschlag ableiten (Tailwind-v4-Theme in oklch): Hintergrund, Flächen, Text primär/sekundär, Akzent, Border. Für das dunkle Design gilt: Kontrast nach WCAG AA, Akzentfarbe auf dunklem Grund prüfen.
2. Eine **Preview-Seite** `/_brand` bauen, die Farben, Logo (hell/dunkel), Typo-Skala und Buttons im Klon-Stil zeigt. Screenshot an mich.
3. **Gate 2** mit AskUserQuestion, gebündelt:
   - Farbpalette: abgeleitet 1:1 / leicht angepasst für das dunkle Theme / eigene Vorgabe
   - Fonts: Klon-Fonts behalten (nur falls lizenziert) / Nano-Fonts / Vorschlag
   - Kontaktformular-Backend: Resend über Next Route Handler (Recommended) / Formspree / nur mailto
   - offene Punkte aus `OPEN_QUESTIONS.md`

Danach wird `/_brand` gelöscht.

---

## Phase 5: Autonomer Build

ECC arbeitet `docs/PLAN.md` ab, ohne Stopps bis Gate 3. Dabei gilt:

- Inhalte nur aus `content/nano/`. Erfinde keine Texte, Preise oder Referenzen. Fehlt etwas: Platzhalter `[[TODO: …]]` setzen und in OPEN_QUESTIONS.md nachtragen.
- Für Design-Anpassungen die taste-skill-Skills verwenden. Die Struktur des Klons bleibt erhalten, ersetzt werden Farben, Logo, Inhalte und Bilder.
- Bilder über `next/image`, mit korrekten `alt`-Texten aus dem Manifest.
- Nach jeder Sektion: Screenshots 375/1440 nach `docs/progress-shots/` und Abgleich mit der DoD.

---

## Phase 6: Pre-Launch (→ Gate 3)

1. Alle Launch-DoD-Punkte prüfen. Bericht nach `docs/LAUNCH_REPORT.md` (Lighthouse-Werte, Asset-Audit-Ergebnis, offene TODOs).
2. Vercel-Preview-Deploy (`npx vercel`). Ist die CLI nicht eingeloggt: AskUserQuestion, damit ich `vercel login` selbst ausführe. Zugangsdaten gibst du nie selbst ein.
3. **Gate 3** per AskUserQuestion: Preview-URL + Bericht. Optionen: „Production-Deploy“, „Noch anpassen“, „Nur Preview behalten“.
4. Erst nach Freigabe `npx vercel --prod`. Domain-/DNS-Umstellung von nano-design.ch nur nach separater Rückfrage.

**Start jetzt mit Phase 0.**
