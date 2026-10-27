import type { Language } from "./types";

export function Process({ language }: { language: Language }) {
  return (
    <section className="section scroll-reveal" id="ablauf">
      <div className="wrap">
        <p className="eyebrow">
          <span className="dot"></span>
          <span>
            {language === "de" ? "Zusammenarbeit" : "Working together"}
          </span>
        </p>
        <div className="section-head">
          <h2>
            {language === "de"
              ? "Ein guter Anfang. Ein klarer Weg."
              : "A good start. A clear path."}
          </h2>
          <p className="section-intro">
            {language === "de"
              ? "Von der ersten Frage bis zum fertigen Ergebnis: transparent, persönlich und auf dein Projekt abgestimmt."
              : "From the first question to the finished result: transparent, personal and tailored to your project."}
          </p>
        </div>
        <div className="steps">
          <div className="step scroll-reveal-item">
            <span className="num">{"01 / DISCOVER"}</span>
            <h3>{language === "de" ? "Kennenlernen" : "Discover"}</h3>
            <p>
              {language === "de"
                ? "Wir sprechen über deine Idee, deine Ziele und die Herausforderungen, die wir lösen können."
                : "We talk about your idea, your goals and the challenges we can solve together."}
            </p>
          </div>
          <div className="step scroll-reveal-item">
            <span className="num">{"02 / CREATE"}</span>
            <h3>
              {language === "de"
                ? "Konzipieren & entwickeln"
                : "Design & develop"}
            </h3>
            <p>
              {language === "de"
                ? "Aus den Anforderungen entsteht ein Konzept und daraus Schritt für Schritt deine digitale Lösung."
                : "We turn your requirements into a concept and build your digital solution step by step."}
            </p>
          </div>
          <div className="step scroll-reveal-item">
            <span className="num">{"03 / LAUNCH"}</span>
            <h3>
              {language === "de" ? "Starten & weiterdenken" : "Launch & evolve"}
            </h3>
            <p>
              {language === "de"
                ? "Wir bringen dein Projekt an den Start und besprechen, wie es sich langfristig weiterentwickeln kann."
                : "We launch your project and discuss how it can continue to evolve over time."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
