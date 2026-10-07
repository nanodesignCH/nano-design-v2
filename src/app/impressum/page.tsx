import { LegalPage, legalMetadata } from "@/components/nano/LegalPage";

export const metadata = legalMetadata(
  "/impressum",
  "impressum – nano design",
  "Impressum von Nano Design, Joël Gex, Hauptstrasse 91, 2552 Orpund.",
);

export default function Impressum() {
  return (
    <LegalPage title="impressum">
      <section>
        <h2>unternehmen</h2>
        <p>
          Nano Design
          <br />
          Hauptstrasse 91
          <br />
          2552 Orpund
          <br />
          Schweiz
        </p>
      </section>
      <section>
        <h2>kontakt</h2>
        <p>
          E-Mail: <a href="mailto:info@nano-design.ch">info@nano-design.ch</a>
          <br />
          Web: nano-design.ch
        </p>
      </section>
      <section>
        <h2>verantwortlich für den inhalt</h2>
        <p>Joël Gex, Nano Design</p>
      </section>
      <section>
        <h2>haftungsausschluss</h2>
        <p>
          Die Inhalte dieser Website habe ich mit grösster Sorgfalt erstellt.
          Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
          übernehme ich jedoch keine Gewähr. Für eigene Inhalte auf diesen
          Seiten bin ich nach den allgemeinen Gesetzen verantwortlich.
        </p>
      </section>
      <section>
        <h2>urheberrecht</h2>
        <p>
          Die von mir erstellten Inhalte und Werke auf dieser Website
          unterliegen dem schweizerischen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der
          Grenzen des Urheberrechts brauchen die schriftliche Zustimmung von
          Nano Design.
        </p>
      </section>
      <section>
        <h2>portfolio</h2>
        <p>
          Die Screenshots im Portfolio zeigen Websites, die ich für Kundinnen
          und Kunden umgesetzt habe. Die Rechte an Inhalten und Bildern der
          jeweiligen Websites liegen bei deren Betreiberinnen und Betreibern.
        </p>
      </section>
    </LegalPage>
  );
}
