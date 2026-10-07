# nano-design.ch – Texte (Wortlaut 1:1)

Quelle: https://nano-design.ch/ (Stand 2026-10-06), `lang="de-CH"`. Gross-/Kleinschreibung wie im DOM. Die Live-Seite setzt fast alles per CSS `text-transform: lowercase`, die Formularlabels per `uppercase`. Fliesstexte stehen im DOM in normaler Schreibung und werden nur angezeigt wie unten vermerkt.

Original-Anker: `#hero`, `#leistungen`, `#projekte`, `#ueber-uns` (Navigationslabel „über nano“), `#preise`, `#kontakt`.

## Navigation

- Logo: „nd“ (aria-label: „nano design – startseite“)
- home · leistungen · projekte · über nano · preise · kontakt

## Home (`#hero`)

- H1: nano
- design.
- web · print · digital
- CTA: jetzt anfragen →
- Scroll-Hinweis: scroll

## Leistungen (`#leistungen`)

- Eyebrow: 01 — leistungen
- H2: von web
- bis print.

| Nr. | Titel | Text |
|---|---|---|
| #01 | web design | Individuelle Websites mit kurzen Ladezeiten – überzeugend, konversionsstark und massgeschneidert für jede Branche. |
| #02 | logo design | Visuelle Identitäten mit Haltung. Logos und Corporate Design, die im Gedächtnis bleiben. |
| #03 | print design | Flyer, Visitenkarten, Plakate – gedruckte Materialien mit klarer, wirkungsvoller Gestaltung. |
| #04 | online shops | WooCommerce und Shopify Lösungen. Shops, die verkaufen – nicht nur aussehen. |
| #05 | content creation | Texte, die wirken. Sichtbarkeit, die bleibt. Gefunden werden, wo es zählt. |
| #06 | ai design | Visuelle Inhalte der neusten Art. KI-generierte Bilder und Videos für Ads, Social Media und digitale Kommunikation. |

Jede Karte endet mit „→“.

## Projekte (`#projekte`)

- Eyebrow: 02 — portfolio
- H2: ausgewählte
- arbeiten.
- ein auszug realisierter projekte.
- Link: alle projekte ansehen →
- Pro Projekt: Titel, Kategorie, Beschreibung, Link „projekt ansehen →“ oder Hinweis „mehr auf anfrage“ (Details in `projects.json`)
- Button (horizontaler Scroll-Bereich): überspringen →

## Über Nano (`#ueber-uns`, im Original innerhalb von `#projekte`)

- Eyebrow: 03 — über nano
- H3: gutes design
- das wirkt.
- Nano Design gestaltet digitale und gedruckte Auftritte, die funktionieren – und die man nicht vergisst.
- Von der Website über den Online-Shop bis zum Logo: Jedes Projekt wird sauber umgesetzt und auf das Wesentliche reduziert. Durch den gezielten Einsatz bewährter Tools und Systeme entstehen professionelle Ergebnisse – effizient und zum fairen Preis.
- Der Fokus liegt auf klarer Kommunikation, durchdachter Benutzerführung und einem Auftritt, der dauerhaft überzeugt.

## Preise (`#preise`)

- Eyebrow: 04 — preise
- H2: jedes design
- ein unikat.
- Keine Pauschallösungen, keine versteckten Kosten. Der Preis richtet sich nach Umfang und Aufwand – transparent und fair kalkuliert.

| Paket | Preis |
|---|---|
| websites | ab chf 690.– |
| logos | ab chf 250.– |
| online shops | auf anfrage |

- Damit die Website nach dem Launch nicht zur Blackbox wird, übernehme ich auf Wunsch auch Webhosting, Domainverwaltung und technisches Monitoring. Ihr Auftritt bleibt erreichbar, aktuell und in guten Händen.
- CTA: jetzt unverbindliches angebot anfordern →

## Kontakt (`#kontakt`)

- Eyebrow: 05 — kontakt
- H2: lass uns
- reden.
- Jetzt Kontakt aufnehmen – per Mail an info@nano-design.ch oder über das Kontaktformular.
- Formularfelder (Label, Pflicht):
  - NAME (Pflicht, `type=text`)
  - E-MAIL (Pflicht, `type=email`)
  - TELEFON (OPTIONAL) (`type=tel`)
  - NACHRICHT (Pflicht, `textarea`)
  - website (Honeypot, versteckt, `name=website`)
- Submit: nachricht senden →

## Footer

- Logo: nd
- Spalte „seiten“: home · leistungen · projekte · über uns · preise · kontakt
- Spalte „kontakt“: Button „kontaktformular →“
- © 2026 nano web & print design
- impressum · datenschutz

## Kontaktdaten

- Nano Design, Joël Gex
- Hauptstrasse 91, 2552 Orpund, Schweiz (vom User bestätigt; „Gerolfingen am Bielersee“ in der alten Meta-Description ist veraltet)
- E-Mail: info@nano-design.ch
- Web: nano-design.ch
- Keine Telefonnummer und keine Social-Media-Links auf der Seite

## Meta

- `<title>`: nano design – web & print design
- `description`: Schweizer Design-Agentur für Webdesign, Logodesign, Print Design und Online-Shops. Nano Web & Print Design, Gerolfingen am Bielersee. (Ort veraltet, siehe oben)
- `canonical`: https://nano-design.ch
- Kein OG-Bild vorhanden

## Impressum (`/impressum`)

- ← zurück
- rechtliches
- impressum
- unternehmen: Nano Design, Hauptstrasse 91, 2552 Orpund, Schweiz
- kontakt: E-Mail: info@nano-design.ch, Web: nano-design.ch
- verantwortlich für den inhalt: Joël Gex, Nano Design
- haftungsausschluss: Die Inhalte dieser Website wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird jedoch keine Gewähr übernommen. Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
- urheberrecht: Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem schweizerischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung der Nano Design.
- © 2026 nano design

## Datenschutz (`/datenschutz`)

- ← zurück
- rechtliches
- datenschutz
- verantwortliche stelle: Nano Design – Joël Gex, Hauptstrasse 91, 2552 Orpund, E-Mail: info@nano-design.ch
- grundsatz: Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir verarbeiten Ihre Daten im Einklang mit dem Schweizer Datenschutzgesetz (DSG) sowie, soweit anwendbar, der europäischen Datenschutz-Grundverordnung (DSGVO).
- datenerfassung auf dieser website: Diese Website verwendet keine Cookies, kein Web-Analytics-Tool und kein Tracking. Es werden keine Nutzungsdaten automatisch gesammelt oder gespeichert.
- kontaktformular: Wenn Sie uns über das Kontaktformular eine Nachricht senden, werden die von Ihnen eingegebenen Daten (Name, E-Mail-Adresse, optional Telefonnummer, Nachricht) ausschliesslich zur Bearbeitung Ihrer Anfrage verwendet. Die Daten werden nicht an Dritte weitergegeben und nach Abschluss der Kommunikation gelöscht, sofern keine gesetzliche Aufbewahrungspflicht besteht. Rechtsgrundlage für die Verarbeitung ist Ihr Einverständnis gemäss Art. 6 Abs. 1 lit. a DSGVO (soweit anwendbar) sowie Art. 31 DSG.
- e-mail-kontakt: Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben inklusive der von Ihnen angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
- ihre rechte: Sie haben das Recht auf: Auskunft über die bei uns gespeicherten Daten · Berichtigung unrichtiger Daten · Löschung Ihrer Daten · Einschränkung der Datenverarbeitung · Datenübertragbarkeit · Widerruf einer erteilten Einwilligung. Für die Geltendmachung dieser Rechte wenden Sie sich bitte an: info@nano-design.ch
- externe links: Unsere Website kann Links zu externen Webseiten enthalten. Für deren Inhalte und Datenschutzpraktiken sind wir nicht verantwortlich.
- änderungen dieser datenschutzerklärung: Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen. Die jeweils aktuelle Version ist auf dieser Seite abrufbar.
- Stand: April 2026
- © 2026 nano design
