import type { Metadata } from "next";
import { LegalPage } from "@/components/nano/LegalPage";

export const metadata: Metadata = {
  title: "datenschutz – nano design",
  description: "Datenschutzerklärung von Nano Design gemäss Schweizer Datenschutzgesetz (DSG).",
  alternates: { canonical: "/datenschutz" },
};

export default function Datenschutz() {
  return (
    <LegalPage title="datenschutz">
      <section>
        <h2>verantwortliche stelle</h2>
        <p>
          Nano Design – Joël Gex, Hauptstrasse 91, 2552 Orpund
          <br />
          E-Mail: <a href="mailto:info@nano-design.ch">info@nano-design.ch</a>
        </p>
      </section>
      <section>
        <h2>grundsatz</h2>
        <p>
          Der Schutz deiner persönlichen Daten ist mir wichtig. Ich bearbeite deine Daten im Einklang mit dem Schweizer
          Datenschutzgesetz (DSG) sowie, soweit anwendbar, der europäischen Datenschutz-Grundverordnung (DSGVO).
        </p>
      </section>
      <section>
        <h2>datenerfassung auf dieser website</h2>
        <p>Diese Website verwendet keine Cookies, kein Web-Analytics-Tool und kein Tracking.</p>
      </section>
      <section>
        <h2>hosting</h2>
        <p>
          Diese Website wird bei Vercel Inc. (USA) gehostet. Beim Aufruf der Website werden technisch notwendige Daten wie
          IP-Adresse, Datum und Uhrzeit, aufgerufene Seite und Browsertyp in Server-Logfiles bearbeitet, damit die Website
          sicher und stabil ausgeliefert werden kann. Vercel kann diese Daten in den USA bearbeiten. Die Übermittlung stützt
          sich auf geeignete Garantien (Swiss-U.S. Data Privacy Framework bzw. Standardvertragsklauseln).
        </p>
      </section>
      <section>
        <h2>kontaktformular</h2>
        <p>
          Wenn du mir über das Kontaktformular schreibst, werden deine Angaben (Name, E-Mail-Adresse, optional
          Telefonnummer, Nachricht) ausschliesslich zur Bearbeitung deiner Anfrage verwendet. Für die Zustellung der
          Nachricht an mich nutze ich den E-Mail-Dienst Resend (Resend Inc., USA) als Auftragsbearbeiter. Die Daten werden
          nicht an weitere Dritte weitergegeben und nach Abschluss der Kommunikation gelöscht, sofern keine gesetzliche
          Aufbewahrungspflicht besteht. Rechtsgrundlage ist deine Einwilligung gemäss Art. 6 Abs. 1 lit. a DSGVO (soweit
          anwendbar) sowie Art. 31 DSG.
        </p>
      </section>
      <section>
        <h2>e-mail-kontakt</h2>
        <p>
          Wenn du mich per E-Mail kontaktierst, speichere ich deine Angaben inklusive deiner Kontaktdaten zur Bearbeitung
          deiner Anfrage. Diese Daten gebe ich nicht ohne deine Einwilligung weiter.
        </p>
      </section>
      <section>
        <h2>deine rechte</h2>
        <p>Du hast das Recht auf:</p>
        <ul>
          <li>Auskunft über die bei mir gespeicherten Daten</li>
          <li>Berichtigung unrichtiger Daten</li>
          <li>Löschung deiner Daten</li>
          <li>Einschränkung der Datenbearbeitung</li>
          <li>Datenübertragbarkeit</li>
          <li>Widerruf einer erteilten Einwilligung</li>
        </ul>
        <p>
          Für die Geltendmachung dieser Rechte wende dich bitte an:{" "}
          <a href="mailto:info@nano-design.ch">info@nano-design.ch</a>. Du kannst dich zudem beim Eidgenössischen
          Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB) beschweren.
        </p>
      </section>
      <section>
        <h2>externe links</h2>
        <p>
          Diese Website enthält Links zu externen Websites, etwa zu Projekten im Portfolio. Für deren Inhalte und
          Datenschutzpraktiken bin ich nicht verantwortlich.
        </p>
      </section>
      <section>
        <h2>änderungen dieser datenschutzerklärung</h2>
        <p>
          Ich behalte mir vor, diese Datenschutzerklärung bei Bedarf anzupassen. Die jeweils aktuelle Version ist auf dieser
          Seite abrufbar.
        </p>
        <p>Stand: Oktober 2026</p>
      </section>
    </LegalPage>
  );
}
