# SEO/GEO-Texte – freigegeben 2026-10-09 (umgesetzt in NanoPage.tsx)

Grundlage: `projects.json`, `texts.md` und die Projekte unter `~/Documents/JG/claude` (Next.js-Relaunches für a. hirt bau, büreverein, megaro, hundephysio; WordPress-Sites live). Anrede „du“, Schweizer Rechtschreibung.
**[ ]** = Angabe fehlt, bitte ergänzen oder Satz streichen. Nichts davon ist live, bis du es freigibst.

---

## 1. Leistungen – längere Beschreibungen

Heute steht pro Leistung ein Satz. Vorschlag: Der bestehende Satz bleibt als Lead, darunter 1–2 Sätze mit konkreten Fakten (Technik, Beispiele). So bekommen Google und KI-Antworten Substanz, ohne dass die Karten überladen wirken.

**#01 web design**
Individuelle Websites mit kurzen Ladezeiten – überzeugend, konversionsstark und massgeschneidert für jede Branche.
*Neu:* Je nach Bedarf mit WordPress, damit du Inhalte selbst pflegen kannst, oder mit Next.js für maximale Geschwindigkeit und individuelle Animationen. Jede Seite ist für Smartphone, Tablet und Desktop optimiert und für Suchmaschinen sauber aufgebaut – von der Praxis bis zum Bauunternehmen.

**#02 logo design**
Visuelle Identitäten mit Haltung. Logos und Corporate Design, die im Gedächtnis bleiben.
*Neu:* Du erhältst drei Entwürfe, zwei Korrekturrunden und alle Dateien für Web und Druck.

**#03 print design**
Flyer, Visitenkarten, Plakate – gedruckte Materialien mit klarer, wirkungsvoller Gestaltung.
*Neu:* Abgestimmt auf deine Website und dein Logo, damit dein Auftritt online und auf Papier wie aus einem Guss wirkt. Gedruckt wird ausschliesslich im Digitaldruck – ideal für kleine und mittlere Auflagen.

**#04 online shops**
WooCommerce und Shopify Lösungen. Shops, die verkaufen – nicht nur aussehen.
*Neu:* Vom kleinen Sortiment bis zum Shop für den internationalen Verkauf – wie der englischsprachige Shopify-Store von wigglepaws. Zahlungen wie TWINT und Kreditkarte binde ich über Stripe oder Payrexx ein. Produkte und Versand richte ich so ein, dass du den Shop im Alltag selbst führen kannst.

**#05 content creation**
Texte, die wirken. Sichtbarkeit, die bleibt. Gefunden werden, wo es zählt.
*Neu:* Ich schreibe Website-Texte, die deine Kundschaft anspricht und die Suchmaschinen und KI-Assistenten verstehen – mit sauberer Struktur, passenden Suchbegriffen und strukturierten Daten im Hintergrund.

**#06 ai design**
Visuelle Inhalte der neusten Art. KI-generierte Bilder und Videos für Ads, Social Media und digitale Kommunikation.
*Neu:* Ideal, wenn kein Fotoshooting möglich ist oder schnell viele Varianten gebraucht werden – etwa für Kampagnen auf Instagram oder Facebook. Jedes Motiv wird nachbearbeitet und an deinen Auftritt angepasst.

---

## 2. FAQ – Fragen und Antworten

Kurz, direkt, eine Frage pro Suchabsicht. KI-Assistenten zitieren genau solche Blöcke.

**Was kostet eine Website?**
Ab CHF 690.– erhältst du eine kleine Infoseite. Grössere Projekte mit mehr Seiten, Funktionen wie Buchungen oder Mehrsprachigkeit sind preislich nach oben offen und werden nach Aufwand kalkuliert. Nach einem kurzen Gespräch erhältst du ein transparentes Angebot ohne versteckte Kosten.

**Was kostet ein Logo?**
Logos gibt es ab CHF 250.–. Enthalten sind drei Entwürfe, zwei Korrekturrunden und alle Dateien für Web und Druck. Braucht es mehr Entwürfe oder Korrekturen, wird der Mehraufwand transparent verrechnet.

**Wie lange dauert es, bis meine Website online ist?** *(noch nicht live – Dauer fehlt)*
**[z. B. „Eine einfache Website ist meist in 2–4 Wochen online.“]** Am meisten Zeit spart, wenn Texte und Bilder früh bereitstehen.

**Arbeitest du nur in der Region Biel?**
Nein. Ich arbeite von Orpund bei Biel aus für Kundinnen und Kunden in der ganzen Schweiz. Besprechungen finden bevorzugt online statt, nach Absprache auch vor Ort.

**Kann ich meine Website später selbst bearbeiten?**
Ja. Mit WordPress pflegst du Texte, Bilder und Termine selbst. Bei Websites mit Next.js übernehme ich Änderungen für dich. Welche Lösung passt, klären wir am Anfang.

**Übernimmst du auch Hosting und Domain?**
Ja, auf Wunsch kümmere ich mich nach dem Launch um Webhosting, Domainverwaltung und technisches Monitoring. Die Kosten dafür erhältst du mit der Offerte. Hast du einen Wunsch-Hoster, sag es mir. Gut zu wissen: Nicht jedes Hosting lässt alle technischen Möglichkeiten offen – günstige Angebote unterstützen zum Beispiel oft kein Node.js oder serverseitiges Rendering, wie es moderne Next.js-Websites brauchen.

**Wird meine Website bei Google gefunden?**
Jede Website wird technisch sauber für Suchmaschinen aufgebaut: schnelle Ladezeiten, klare Struktur, Seitentitel und strukturierte Daten. Das ist die Basis. Für bessere Platzierungen braucht es zusätzlich gute Inhalte, dabei unterstütze ich dich mit Content Creation.

**Was brauche ich, um zu starten?**
Eine kurze Nachricht über das Kontaktformular reicht. Gemeinsam klären wir Ziel, Umfang und Budget. Logo, Texte und Bilder sind hilfreich, aber kein Muss – das kann ich auch für dich erstellen.

---

## 3. FAQ – Platzierung und Darstellung

**Platzierung:** zwischen `#preise` und `#kontakt`. Wer die Preise gesehen hat, hat genau diese Fragen, und die Antwort führt direkt ins Formular. Neue Nummerierung: 05 — fragen, Kontakt wird 06.

**Darstellung** (passend zum bestehenden System):
- Eyebrow „05 — fragen“, H2 im Display-Stil, zweizeilig wie die anderen: „gut zu / wissen.“
- Eine Liste mit Trennlinien (Hairlines wie bei den Preisen), jede Frage eine Zeile in Barlow 500 lowercase, rechts ein ochre „+“, das sich beim Öffnen zu „×“ dreht.
- Technik: native `<details>`/`<summary>`, kein JavaScript nötig, per Tastatur bedienbar. Die Antworten stehen trotzdem im HTML und werden von Google und KI-Crawlern gelesen.
- Öffnen per `grid-template-rows`-Übergang, nur hinter `prefers-reduced-motion: no-preference`.
- Desktop: zweispaltig – links Titel (sticky), rechts die Fragen. Tablet/Mobile: einspaltig.
- Dazu `FAQPage`-Schema im JSON-LD mit exakt denselben Texten.

Hinweis: Google zeigt FAQ-Rich-Snippets seit 2023 nur noch bei Behörden- und Gesundheitsseiten. Der Nutzen liegt bei KI-Antworten (ChatGPT, Perplexity, Google AI Overviews) und bei der Relevanz für die Suchbegriffe, nicht bei aufklappbaren Snippets.
