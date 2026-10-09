# Offene Punkte (Klärung an Gate 2)

| # | Thema | Befund | Vorschlag |
|---|---|---|---|
| 1 | Logo | Kein Logo-File vorhanden. Das Logo ist reiner Text „nd“ (Barlow 900), dazu ein SVG-Favicon (Arial 900). | „nd“ als Text in der Hausschrift weiterführen, Favicon/OG-Bild daraus generieren. Oder du lieferst ein SVG. |
| 2 | Ort in Meta-Description | Live-Meta nennt „Gerolfingen am Bielersee“, Impressum „Orpund“. | **Geklärt:** Orpund ist richtig (User, 2026-10-06). |
| 3 | Über-Nano-Text | Im Original steht „über nano“ innerhalb der Projekt-Sektion. | Eigene Sektion `#ueber-nano`. Den Klon-Bereich „99“ (Counter, Manifest-Texte) dafür umbauen? Ein Zähler braucht eine echte Zahl (z.B. Anzahl Projekte, Jahre). Sonst Counter streichen. |
| 4 | Projekte ohne Link | „hirter finance & accounting“ und „wigglepaws online store“ haben keine URL („mehr auf anfrage“). | So übernehmen. |
| 5 | Projektbilder | Nur 600×400-Screenshots vorhanden. Der Klon nutzt hochformatige Polaroid-Karten (≈400×400) und grosse Service-Bilder. | **Geklärt (Gate 1):** neue hochauflösende Screenshots der verlinkten Projekte erstellen (Plan T2b). |
| 6 | Bilder für Leistungen / Image-Sektion | Live-Seite hat keine Bilder zu den Leistungen und kein Hero-Bild. Der Klon hat Billboard-Vollbild + 3 Service-Bilder. | **Geklärt (Gate 1):** neue Projekt-Screenshots verwenden (Plan T2b). |
| 7 | Leistungen: 6 vs. 3 Panels | Nano hat 6 Leistungen, der Klon 3 Sticky-Panels mit je 2 Listen. | 3 Panels gruppieren (Web: web design + online shops · Brand: logo + print · Content: content creation + ai design). |
| 8 | Preise | „websites ab chf 690.–“, „logos ab chf 250.–“, „online shops auf anfrage“ sowie Hosting-/Monitoring-Text. Aktuell? | Bestätigen. |
| 9 | Telefonnummer / Social Media | Nicht vorhanden. | Weglassen, ausser gewünscht. |
| 10 | Datenschutz | Text sagt „keine Cookies, kein Tracking“. Neu kommen Vercel (Hosting) und je nach Wahl Resend/Formspree (Formular) dazu. | **Erledigt (2026-10-09):** Vercel, Resend, USA-Übermittlung, Rechtsgrundlage, Rate-Limit-IP und Schriften ergänzt. Kein Cookie-Banner nötig. |
| 11 | Sprache/Tonalität | Live-Seite mischt „ich“ (Preise) und „wir“ (Datenschutz), Kontakt duzt („lass uns reden“), Preise siezen („Ihr Auftritt“). | Wortlaut vorerst 1:1 übernehmen. Später vereinheitlichen? |
| 12 | Footer-Copyright | „© 2026 nano web & print design“ vs. Impressum „© 2026 nano design“. | Einheitlich „nano web & print design“? |

## Gate-2-Entscheide (2026-10-06)

- Farben: 1:1 von nano-design.ch (ink, ink-soft, paper, paper-warm, ochre, ochre-muted, white). Ochre als Text nur auf Dunkel.
- Fonts: nur Barlow (Anton und Instrument Serif fliegen raus).
- Kontaktformular: Resend via Route Handler `/api/contact` (User legt Account/API-Key selbst an, verifiziert nano-design.ch).
- Logo: typografisch „nd“ in Barlow 900; Favicon/OG daraus generieren (#1 geklärt).
- Über Nano (#3): Counter und Signatur gestrichen; Headline sticky, Texte + Geisterwörter laufen durch.
- Hero: fallende Herzen gestrichen.
- Preise (#8): 1:1 übernehmen.
- Leistungen (#7): 3 Panels à 2 Leistungen (Empfehlung übernommen).
- Telefon/Social (#9): weglassen.
- Tonalität (#11): du + ich. Seite: „Ihr Auftritt …“ → „Dein Auftritt …“, Footer „über uns“ → „über nano“. „Nano Design gestaltet …“ bleibt. Impressum/Datenschutz in T15 auf du/ich umstellen und zur Freigabe vorlegen (#10).
- Copyright (#12): einheitlich „© 2026 nano web & print design“ (Annahme, Footer-Wortlaut der Live-Seite).
