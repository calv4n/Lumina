import type { Language } from "./types";

export function Approach({ language }: { language: Language }) {
  return (
    <section className="section why" id="ansatz">
      <div className="wrap why-layout">
        <div>
          <p className="eyebrow">
            <span className="dot"></span>
            <span>{language === "de" ? "Unser Ansatz" : "Our approach"}</span>
          </p>
          <h2>
            {language === "de"
              ? "Weniger kompliziert. Mehr möglich."
              : "Less complexity. More possibility."}
          </h2>
          <p className="why-copy">
            {language === "de"
              ? "Wir verstehen deine Ziele und entwickeln digitale Lösungen, die zu deinem Unternehmen passen und langfristig funktionieren."
              : "We understand your goals and develop digital solutions that fit your business and work for the long term."}
          </p>
          <a className="button secondary" href="#ablauf">
            <span>{language === "de" ? "So arbeiten wir" : "How we work"}</span>
            <span className="arrow-icon" aria-hidden="true">
              north_east
            </span>
          </a>
        </div>
        <div>
          <div className="principle">
            <span className="num">{"01 /"}</span>
            <div>
              <strong>
                {language === "de" ? "Klar im Auftritt" : "Clear by design"}
              </strong>
              <p>
                {language === "de"
                  ? "Eine verständliche Nutzerführung und ein Design, das zu deiner Marke passt."
                  : "Intuitive navigation and design that feels true to your brand."}
              </p>
            </div>
          </div>
          <div className="principle">
            <span className="num">{"02 /"}</span>
            <div>
              <strong>
                {language === "de"
                  ? "Passend für dein Unternehmen"
                  : "Built around your business"}
              </strong>
              <p>
                {language === "de"
                  ? "Wir betrachten deine Anforderungen und wählen die passende Lösung für dein Projekt."
                  : "We consider your needs and choose the right solution for your project."}
              </p>
            </div>
          </div>
          <div className="principle">
            <span className="num">{"03 /"}</span>
            <div>
              <strong>
                {language === "de"
                  ? "Bereit für den nächsten Schritt"
                  : "Ready for what's next"}
              </strong>
              <p>
                {language === "de"
                  ? "Eine durchdachte Grundlage, die sich mit deinen Ideen weiterentwickeln lässt."
                  : "A thoughtful foundation that can evolve along with your ideas."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
