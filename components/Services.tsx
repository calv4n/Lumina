import type { Language } from "./types";

export function Services({ language }: { language: Language }) {
  return (
    <section className="section scroll-reveal" id="leistungen">
      <div className="wrap">
        <p className="eyebrow">
          <span className="dot"></span>
          <span>
            {language === "de" ? "Unsere Leistungen" : "Our services"}
          </span>
        </p>
        <div className="section-head">
          <h2>
            {language === "de"
              ? "Ideen werden digital."
              : "Making ideas digital."}
          </h2>
          <p className="section-intro">
            {language === "de"
              ? "Vom ersten Auftritt bis zum intelligenten Prozess: Wir verbinden Gestaltung und Technologie zu einer Lösung, die zu deinem Unternehmen passt."
              : "From your first digital presence to an intelligent workflow: we bring design and technology together in a solution built for your business."}
          </p>
        </div>
        <div className="cards">
          <article className="card scroll-reveal-item">
            <div className="card-top">
              <span>{"01 / WEB"}</span>
              <span className="icon arrow-icon" aria-hidden="true">
                north_east
              </span>
            </div>
            <h3>
              {language === "de" ? "Websites & Design" : "Websites & design"}
            </h3>
            <p>
              {language === "de"
                ? "Ein professioneller Auftritt, der deine Marke sichtbar macht und Besuchern den nächsten Schritt leicht macht."
                : "A professional online presence that makes your brand visible and helps visitors take the next step."}
            </p>
            <div className="tags">
              <span>{"Web Design"}</span>
              <span>{"Development"}</span>
              <span>{"Responsive"}</span>
            </div>
          </article>
          <article className="card scroll-reveal-item">
            <div className="card-top">
              <span>{"02 / DIGITAL"}</span>
              <span className="icon arrow-icon" aria-hidden="true">
                flare
              </span>
            </div>
            <h3>
              {language === "de" ? "Digitale Lösungen" : "Digital solutions"}
            </h3>
            <p>
              {language === "de"
                ? "Individuelle Anwendungen und Integrationen, die Informationen verbinden und deine täglichen Abläufe vereinfachen."
                : "Custom applications and integrations that connect information and simplify your everyday operations."}
            </p>
            <div className="tags">
              <span>{"Web Apps"}</span>
              <span>{"Integrations"}</span>
              <span>{"Workflows"}</span>
            </div>
          </article>
          <article className="card scroll-reveal-item">
            <div className="card-top">
              <span>{"03 / AI"}</span>
              <span className="icon arrow-icon" aria-hidden="true">
                auto_awesome
              </span>
            </div>
            <h3>{language === "de" ? "KI & Automation" : "AI & automation"}</h3>
            <p>
              {language === "de"
                ? "Smarte Automationen und KI-Integrationen unterstützen wiederkehrende Aufgaben und schaffen Freiraum für Wesentliches."
                : "Smart automations and AI integrations support repetitive tasks and free up time for what matters."}
            </p>
            <div className="tags">
              <span>{"AI Integration"}</span>
              <span>{"Automation"}</span>
              <span>{"Assistants"}</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
