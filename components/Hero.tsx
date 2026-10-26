import type { Language } from "./types";

export function Hero({ language }: { language: Language }) {
  return (
    <section className="hero" id="home">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">
              <span className="dot"></span>
              <span>
                {language === "de"
                  ? "Schweizer Agentur"
                  : "Swiss Agency"}
              </span>
            </p>
            <h1>
              {language === "de"
                ? "Dein Unternehmen. Digitaler. Intelligenter. Zukunftsbereit."
                : "Your business. More digital. Smarter. Ready for the future."}
            </h1>
            <p className="hero-copy">
              {language === "de"
                ? "Dein Unternehmen hat Zukunft. Wir gestalten sie mit modernen Websites, intelligenter KI und Automationen."
                : "Your business has a future. We shape it with modern websites, intelligent AI, and automations."}
            </p>
            <div className="buttons">
              <a className="button" href="#kontakt">
                <span>
                  {language === "de"
                    ? "Projekt besprechen"
                    : "Discuss your project"}
                </span>
                <span>{"↗"}</span>
              </a>
              <a className="button secondary" href="#leistungen">
                <span>
                  {language === "de"
                    ? "Leistungen entdecken"
                    : "Explore services"}
                </span>
                {" ↓"}
              </a>
            </div>
          </div>
          <div className="visual" aria-hidden="true">
            <div className="visual-top">
              <span>{"Lumina / Digital Studio"}</span>
              <span>{"01 — 03"}</span>
            </div>
            <div className="orb">
              <i></i>
            </div>
            <div className="visual-bottom">
              <span>{"Design · Technology · AI"}</span>
              <span>{"✳"}</span>
            </div>
          </div>
        </div>
        <div className="hero-foot">
          <span>
            {language === "de"
              ? "Websites / Digitalisierung / KI"
              : "Websites / Digitalisation / AI"}
          </span>
          <span>
            {language === "de"
              ? "Für Ideen, die weitergehen."
              : "For ideas that go further."}
          </span>
          <a href="#leistungen">
            {language === "de" ? "Entdecken ↓" : "Explore ↓"}
          </a>
        </div>
      </div>
    </section>
  );
}
