import type { Language } from "./types";

export function FAQ({ language }: { language: Language }) {
  return (
    <section className="section faq scroll-reveal" id="faq">
      <div className="wrap faq-layout">
        <div>
          <p className="eyebrow">
            <span className="dot"></span>
            {"FAQ"}
          </p>
          <h2>{language === "de" ? "Noch Fragen?" : "Questions?"}</h2>
          <p className="why-copy">
            {language === "de"
              ? "Ein paar Antworten für deinen ersten Schritt."
              : "A few answers to help you get started."}
          </p>
        </div>
        <div className="faq-list">
          <details>
            <summary>
              {language === "de"
                ? "Für welche Projekte kann ich mich melden?"
                : "What kind of projects can I get in touch about?"}
            </summary>
            <p>
              {language === "de"
                ? "Ob neue Website, eine digitale Anwendung oder eine Idee für eine Automation: Erzähl uns, was du vorhast. Gemeinsam finden wir heraus, wie wir helfen können."
                : "Whether it's a new website, a digital application or an idea for automation, tell us what you have in mind. Together we'll see how we can help."}
            </p>
          </details>
          <details>
            <summary>
              {language === "de"
                ? "Muss ich bereits ein fertiges Konzept haben?"
                : "Do I need a complete plan already?"}
            </summary>
            <p>
              {language === "de"
                ? "Nein. Eine grobe Idee oder eine Herausforderung reicht als Ausgangspunkt. Die Details erarbeiten wir gemeinsam."
                : "No. A rough idea or a challenge is enough to get started. We'll work out the details together."}
            </p>
          </details>
          <details>
            <summary>
              {language === "de"
                ? "Wie starten wir?"
                : "How do we get started?"}
            </summary>
            <p>
              {language === "de"
                ? "Schreib uns eine kurze Nachricht über dein Vorhaben. Danach besprechen wir deine Ziele und mögliche nächste Schritte."
                : "Send us a short message about your project. We'll then discuss your goals and possible next steps."}
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
