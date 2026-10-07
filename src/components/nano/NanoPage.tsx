import Image from "next/image";
import type { CSSProperties } from "react";
import projectsData from "../../../content/nano/projects.json";
import { ContactForm } from "./ContactForm";
import { Header } from "./Header";
import { Reveal } from "./Reveal";
import { ScrollRuntime } from "./ScrollRuntime";
import s from "./nano.module.css";

type Vars = CSSProperties & Record<`--${string}`, string | number>;

type Project = {
  slug: string;
  name: string;
  category: string;
  tech: string | null;
  url: string | null;
  linkLabel?: string;
  description: string;
  images: string[];
};

const PROJECTS = projectsData as Project[];
const EMAIL = "info@nano-design.ch";

// structured data from the imprint (content/nano/texts.md)
const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Nano Design",
  alternateName: "nano web & print design",
  url: "https://nano-design.ch",
  email: EMAIL,
  founder: { "@type": "Person", name: "Joël Gex" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hauptstrasse 91",
    postalCode: "2552",
    addressLocality: "Orpund",
    addressCountry: "CH",
  },
  areaServed: "CH",
  knowsAbout: ["Webdesign", "Logodesign", "Print Design", "Online-Shops", "Content Creation", "AI Design"],
};

/* ───────────── Building blocks ───────────── */

function Divisor({ h, hm, l, r, kl = 0, kr = 0 }: { h: string; hm?: string; l: string; r: string; kl?: number; kr?: number }) {
  return (
    <div className={s.divisor} aria-hidden style={{ "--h": h, ...(hm && { "--hm": hm }) } as Vars}>
      <div className={`${s.divisorHalf} ${s.px}`} style={{ "--c": l, "--k": kl } as Vars} />
      <div className={`${s.divisorHalf} ${s.px}`} style={{ "--c": r, "--k": kr } as Vars} />
    </div>
  );
}

function Eyebrow({ children, className = "" }: { children: string; className?: string }) {
  return <p className={`${s.eyebrow} ${className}`}>{children}</p>;
}

/* ───────────── Leistungen: 6 services in 3 sticky panels ───────────── */

type Service = { nr: string; title: string; text: string };

type Panel = {
  bg: string;
  card: string;
  title: [string, string];
  r0: string;
  rk: number;
  tilt: string;
  k: number;
  image: string;
  alt: string;
  services: [Service, Service];
};

const PANELS: Panel[] = [
  {
    bg: "var(--color-paper)",
    card: "var(--color-ochre)",
    title: ["web design", "online shops"],
    r0: "4deg",
    rk: -0.001665,
    tilt: "2deg",
    k: -0.03,
    image: "/nano/projects/asevatec-desktop.png",
    alt: "Startseite asevatec gmbh (Desktop)",
    services: [
      {
        nr: "#01",
        title: "web design",
        text: "Individuelle Websites mit kurzen Ladezeiten – überzeugend, konversionsstark und massgeschneidert für jede Branche.",
      },
      {
        nr: "#04",
        title: "online shops",
        text: "WooCommerce und Shopify Lösungen. Shops, die verkaufen – nicht nur aussehen.",
      },
    ],
  },
  {
    bg: "var(--color-paper-warm)",
    card: "var(--color-ochre)",
    title: ["logo design", "print design"],
    r0: "4deg",
    rk: -0.001665,
    tilt: "-2deg",
    k: -0.02,
    image: "/nano/hirter_prtscr.png",
    alt: "hirter finance & accounting",
    services: [
      {
        nr: "#02",
        title: "logo design",
        text: "Visuelle Identitäten mit Haltung. Logos und Corporate Design, die im Gedächtnis bleiben.",
      },
      {
        nr: "#03",
        title: "print design",
        text: "Flyer, Visitenkarten, Plakate – gedruckte Materialien mit klarer, wirkungsvoller Gestaltung.",
      },
    ],
  },
  {
    bg: "#fff",
    card: "var(--color-ink)",
    title: ["content creation", "ai design"],
    r0: "-2deg",
    rk: 0.000952,
    tilt: "-2deg",
    k: -0.01,
    image: "/nano/projects/gesundheitspraxis-megaro-desktop.png",
    alt: "Startseite gesundheitspraxis megaro (Desktop)",
    services: [
      {
        nr: "#05",
        title: "content creation",
        text: "Texte, die wirken. Sichtbarkeit, die bleibt. Gefunden werden, wo es zählt.",
      },
      {
        nr: "#06",
        title: "ai design",
        text: "Visuelle Inhalte der neusten Art. KI-generierte Bilder und Videos für Ads, Social Media und digitale Kommunikation.",
      },
    ],
  },
];

function ServiceItem({ sv }: { sv: Service }) {
  return (
    <div className={s.svcItem}>
      <p className={s.eyebrowDark}>{sv.nr}</p>
      <h3 className={`${s.display} ${s.svcItemTitle}`}>{sv.title}</h3>
      <p className={`${s.text} ${s.svcItemText}`}>{sv.text}</p>
    </div>
  );
}

function ServicePanel({ p }: { p: Panel }) {
  return (
    <div className={s.panel} style={{ "--bg": p.bg } as Vars}>
      <Reveal className={s.panelInner}>
        <p className={`${s.display} ${s.svcTitle}`} aria-hidden style={{ "--r0": p.r0, "--rk": p.rk } as Vars}>
          <span>{p.title[0]}</span>
          <span>{p.title[1]}</span>
        </p>
        <div className={`${s.svcMedia} ${s.px}`} style={{ "--k": p.k } as Vars}>
          <div className={s.svcCard} style={{ "--card": p.card, "--tilt": p.tilt } as Vars}>
            <Image src={p.image} alt={p.alt} fill sizes="(max-width: 809px) 80vw, 460px" className="object-cover object-top" />
          </div>
        </div>
        <div className={s.svcLists}>
          <div className={`${s.svcList} ${s.px}`} style={{ "--k": -0.047 } as Vars}>
            <ServiceItem sv={p.services[0]} />
          </div>
          <div className={`${s.svcList} ${s.svcListRight} ${s.px}`} style={{ "--k": -0.016 } as Vars}>
            <ServiceItem sv={p.services[1]} />
          </div>
        </div>
      </Reveal>
    </div>
  );
}

/* ───────────── Projekte ───────────── */

const CARD_TILT = ["1deg", "0deg", "-1deg"];
const CARD_K = [0, -0.02, -0.01];

function ProjectCard({ p, i }: { p: Project; i: number }) {
  // portrait (mobile) screenshot reads best in the polaroid; fall back to the 3:2 one
  const image = p.images.find((src) => src.endsWith("-mobile.png")) ?? p.images[0];
  const meta = [p.category, p.tech && `cms: ${p.tech.toLowerCase()}`].filter(Boolean).join(" · ");
  const body = (
    <>
      <div className={s.cardImage}>
        <Image src={image} alt={`Startseite ${p.name}`} fill sizes="(max-width: 809px) 302px, 400px" className="object-cover object-top" />
      </div>
      <div className={s.cardFoot}>
        <h3 className={`${s.display} ${s.cardName}`}>{p.name}</h3>
        <p className={`${s.text} ${s.cardMeta}`}>{meta}</p>
        <p className={`${s.text} ${s.cardDesc}`}>{p.description}</p>
        <p className={s.cardCta}>{p.url ? "projekt ansehen →" : (p.linkLabel ?? "mehr auf anfrage")}</p>
      </div>
    </>
  );
  const style = { "--rot": CARD_TILT[i % 3] } as Vars;

  return (
    <div className={`${s.cardSlot} ${s.px}`} style={{ "--k": CARD_K[i % 3] } as Vars}>
      {p.url ? (
        <a href={p.url} target="_blank" rel="noopener noreferrer" className={`${s.card} ${s.cardLink}`} style={style}>
          <span className={`${s.display} ${s.explore}`} aria-hidden>
            ansehen ↗
          </span>
          {body}
        </a>
      ) : (
        <article className={s.card} style={style}>
          {body}
        </article>
      )}
    </div>
  );
}

/* ───────────── Page ───────────── */

export function NanoPage() {
  return (
    <div className={s.page}>
      <a href="#main" className={s.skip}>
        zum inhalt springen
      </a>
      <ScrollRuntime />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />

      <div className={s.intro} aria-hidden>
        <div className={s.introTop}>
          <p className={`${s.display} ${s.introTitle}`}>nano design</p>
        </div>
        <div className={s.introBottom}>
          <p className={`${s.text} ${s.introSub}`}>web · print · digital</p>
        </div>
      </div>

      <Header />

      <main id="main">
        {/* Home */}
        <section id="home" className={s.hero}>
          <p className={`${s.text} ${s.tagline}`}>web · print · digital</p>
          <h1 className={`${s.display} ${s.heroTitle}`}>
            <span>nano</span>
            <span className={s.heroTitleLight}>design.</span>
          </h1>
          <a href="#kontakt" className={`${s.button} ${s.heroCta}`}>
            jetzt anfragen →
          </a>
        </section>

        <div className={s.info} aria-hidden>
          <p className={`${s.text} ${s.infoPlace}`}>
            orpund
            <br />
            schweiz
          </p>
          <p className={`${s.text} ${s.infoPlace} ${s.infoPlaceMobile}`}>orpund, schweiz</p>
          <p className={`${s.display} ${s.infoEst}`}>scroll</p>
        </div>

        <Divisor h="150px" hm="100px" l="var(--color-ink)" r="var(--color-ink)" kl={-0.03} />

        {/* Leistungen */}
        <section id="leistungen" aria-labelledby="leistungen-title">
          <div className={s.vision}>
            <div className={s.visionCol}>
              <Eyebrow>01 — leistungen</Eyebrow>
              <h2 id="leistungen-title" className={`${s.display} ${s.sectionTitle}`}>
                von web
                <span className={s.titleLight}>bis print.</span>
              </h2>
            </div>
            <div className={s.visionCol}>
              <ol className={s.serviceIndex}>
                {PANELS.flatMap((p) => p.services)
                  .sort((a, b) => a.nr.localeCompare(b.nr))
                  .map((sv) => (
                    <li key={sv.nr}>
                      <span className={s.serviceIndexNr}>{sv.nr}</span>
                      {sv.title}
                    </li>
                  ))}
              </ol>
            </div>
          </div>

          <Divisor h="60px" hm="20px" l="var(--color-ink)" r="var(--color-paper)" kl={-0.02} />

          <div className={s.services}>
            <ServicePanel p={PANELS[0]} />
            <Divisor h="30px" hm="20px" l="var(--color-paper-warm)" r="transparent" kr={-0.02} />
            <ServicePanel p={PANELS[1]} />
            <Divisor h="30px" hm="20px" l="transparent" r="#fff" />
            <ServicePanel p={PANELS[2]} />
            <div className={s.servicesTail} />
          </div>
        </section>

        <Divisor h="50px" hm="20px" l="transparent" r="#fff" kl={-0.01} />

        {/* Projekte */}
        <section id="projekte" aria-labelledby="projekte-title">
          <div className={s.projHead}>
            <Eyebrow className={s.projHeadLatest}>02 — portfolio</Eyebrow>
            <p className={`${s.text} ${s.projHeadTag} ${s.projHeadTagLeft}`}>
              <span className={`${s.px} block`} style={{ "--k": 0.005 } as Vars}>
                web design
              </span>
            </p>
            <h2 id="projekte-title" className={`${s.display} ${s.projHeadTitle} ${s.px}`} style={{ "--k": 0.01 } as Vars}>
              ausgewählte <span className={s.titleLight}>arbeiten.</span>
            </h2>
            <p className={`${s.text} ${s.projHeadTag} ${s.projHeadTagRight}`}>
              <span className={`${s.px} block`} style={{ "--k": 0.005 } as Vars}>
                logo design
              </span>
            </p>
            <p className={`${s.text} ${s.projHeadYear}`}>ein auszug realisierter projekte.</p>
          </div>
          <div className={s.projects}>
            {PROJECTS.map((p, i) => (
              <ProjectCard key={p.slug} p={p} i={i} />
            ))}
          </div>
        </section>

        {/* Über Nano */}
        <section id="ueber-nano" className={s.nn} aria-labelledby="ueber-nano-title">
          {/* switches the section to ochre once ~2/3 of the pinned scroll has passed */}
          <Reveal className={s.nnTrigger} rootMargin="0px 0px -99% 0px">
            {null}
          </Reveal>
          <div className={s.nnSticky}>
            <h2 id="ueber-nano-title" className={`${s.display} ${s.nnTitle}`}>
              gutes design
              <span className={s.titleLight}>das wirkt.</span>
            </h2>
          </div>

          <div className={s.nnInfo}>
            <p className={`${s.display} ${s.ghost} ${s.ghostOur}`} aria-hidden>
              web
            </p>
            <p className={`${s.display} ${s.ghost} ${s.ghostVision} ${s.px}`} style={{ "--k": -0.04 } as Vars} aria-hidden>
              print
            </p>
            <p className={`${s.display} ${s.ghost} ${s.ghostFor} ${s.px}`} style={{ "--k": 0.01 } as Vars} aria-hidden>
              digital
            </p>

            <div className={`${s.nnBlock} ${s.nnBlock1} ${s.px}`} style={{ "--k": 0.0253 } as Vars}>
              <Eyebrow>03 — über nano</Eyebrow>
              <p className={`${s.text} ${s.nnText} ${s.nnLead}`}>
                Nano Design gestaltet digitale und gedruckte Auftritte, die funktionieren – und die man nicht vergisst.
              </p>
            </div>
            <div className={`${s.nnBlock} ${s.nnBlock2} ${s.px}`} style={{ "--k": 0.0073 } as Vars}>
              <p className={`${s.text} ${s.nnText}`}>
                Von der Website über den Online-Shop bis zum Logo: Jedes Projekt wird sauber umgesetzt und auf das
                Wesentliche reduziert. Durch den gezielten Einsatz bewährter Tools und Systeme entstehen professionelle
                Ergebnisse – effizient und zum fairen Preis.
              </p>
            </div>
            <div className={`${s.nnBlock} ${s.nnBlock3} ${s.px}`} style={{ "--k": 0.003 } as Vars}>
              <p className={`${s.text} ${s.nnText}`}>
                Der Fokus liegt auf klarer Kommunikation, durchdachter Benutzerführung und einem Auftritt, der dauerhaft
                überzeugt.
              </p>
            </div>
          </div>
        </section>

        <Divisor h="60px" hm="20px" l="var(--color-paper)" r="var(--color-ink)" kl={-0.01} />

        {/* Preise */}
        <section id="preise" className={s.prices} aria-labelledby="preise-title">
          <div className={s.pricesHead}>
            <Eyebrow className={s.eyebrowOnLight}>04 — preise</Eyebrow>
            <h2 id="preise-title" className={`${s.display} ${s.sectionTitle}`}>
              jedes design
              <span className={s.titleLight}>ein unikat.</span>
            </h2>
            <p className={`${s.text} ${s.pricesLead}`}>
              Keine Pauschallösungen, keine versteckten Kosten. Der Preis richtet sich nach Umfang und Aufwand – transparent
              und fair kalkuliert.
            </p>
          </div>
          <dl className={s.priceList}>
            {[
              ["websites", "ab chf 690.–"],
              ["logos", "ab chf 250.–"],
              ["online shops", "auf anfrage"],
            ].map(([name, price]) => (
              <div key={name} className={s.priceRow}>
                <dt className={`${s.display} ${s.priceName}`}>{name}</dt>
                <dd className={`${s.text} ${s.priceValue}`}>{price}</dd>
              </div>
            ))}
          </dl>
          <div className={s.pricesFoot}>
            <p className={`${s.text} ${s.pricesNote}`}>
              Damit die Website nach dem Launch nicht zur Blackbox wird, übernehme ich auf Wunsch auch Webhosting,
              Domainverwaltung und technisches Monitoring. Dein Auftritt bleibt erreichbar, aktuell und in guten Händen.
            </p>
            <a href="#kontakt" className={`${s.button} ${s.buttonDark}`}>
              jetzt unverbindliches angebot anfordern →
            </a>
          </div>
        </section>

        <Divisor h="60px" hm="20px" l="var(--color-ink)" r="var(--color-paper)" kr={-0.01} />

        {/* Kontakt */}
        <section id="kontakt" className={s.contact} aria-labelledby="kontakt-title">
          <div className={s.contactHead}>
            <Eyebrow>05 — kontakt</Eyebrow>
            <h2 id="kontakt-title" className={`${s.display} ${s.sectionTitle}`}>
              lass uns
              <span className={s.titleLight}>reden.</span>
            </h2>
            <p className={`${s.text} ${s.contactLead}`}>
              Jetzt Kontakt aufnehmen – per Mail an{" "}
              <a href={`mailto:${EMAIL}`} className={s.inlineLink}>
                {EMAIL}
              </a>{" "}
              oder über das Kontaktformular.
            </p>
          </div>
          <ContactForm />
        </section>
      </main>

      <footer className={s.footer}>
        <div className={s.footRow}>
          <nav aria-label="Seiten" className={s.footNav}>
            <p className={s.footLabel}>seiten</p>
            {[
              ["home", "#home"],
              ["leistungen", "#leistungen"],
              ["projekte", "#projekte"],
              ["über nano", "#ueber-nano"],
              ["preise", "#preise"],
              ["kontakt", "#kontakt"],
            ].map(([label, href]) => (
              <a key={href} href={href} className={s.footLink}>
                {label}
              </a>
            ))}
          </nav>
          <a className={`${s.text} ${s.footMail}`} href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          <div className={s.footLegal}>
            <p className={s.footLabel}>© 2026 nano web &amp; print design</p>
            <a href="/impressum" className={s.footLink}>
              impressum
            </a>
            <a href="/datenschutz" className={s.footLink}>
              datenschutz
            </a>
          </div>
        </div>
        <p className={`${s.display} ${s.footEst}`} data-text="web & print" aria-hidden />
        <p className={`${s.display} ${s.footBrand}`} aria-hidden>
          nano design
        </p>
      </footer>
    </div>
  );
}
