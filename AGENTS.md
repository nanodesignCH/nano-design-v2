<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# nano design

One-Pager für nano-design.ch (nano web & print design, Orpund). Gehostet auf Vercel.

## Tech Stack
- Next.js 16 (App Router, React 19, TypeScript strict), Tailwind CSS v4 (oklch-Tokens in `src/app/globals.css`)
- Barlow via `next/font`, Lenis für Smooth Scroll
- Kontaktformular: Route Handler `src/app/api/contact/route.ts` → Resend (REST)

## Commands
- `npm run dev` — Dev-Server
- `npm run check` — Lint + Typecheck + Build
- `node --no-warnings scripts/check-contact.mts` — Prüfung der Formular-Validierung

## Struktur
```
src/app/                 Routen (/, /impressum, /datenschutz, api/contact), Meta, OG-Bild, sitemap, robots
src/components/nano/     Seite (NanoPage), Header, ContactForm, Scroll-/Reveal-Logik, nano.module.css
src/lib/contact.ts       Validierung des Formulars
content/nano/            Inhalte (Texte, Projekte, Marke) – einzige Quelle für Texte
public/nano/             Bilder und Screenshots
docs/                    Plan, Fortschritt, Launch-Report
```

## Regeln
- Schweizer Rechtschreibung (immer „ss“, nie „ß“), Ansprache „du“
- Texte nur aus `content/nano/`, keine erfundenen Inhalte
- Breakpoints: Desktop ≥1200, Tablet 810–1199.98, Mobile <810
- Bewegung immer hinter `prefers-reduced-motion: no-preference`
- Env: `RESEND_API_KEY`, `CONTACT_FROM`, `CONTACT_TO` (siehe `.env.example`), nur in Vercel bzw. `.env.local`
