import type { Language } from "./types";

export function Contact({ language }: { language: Language }) {
  return (
    <section className="contact" id="kontakt">
      <div className="wrap contact-grid">
        <div>
          <p className="eyebrow">{"LUMINA / LET'S TALK"}</p>
          <h2>
            {language === "de"
              ? "Deine Idee. Unser nächster Schritt."
              : "Your idea. Our next step."}
          </h2>
        </div>
        <div>
          <p>
            {language === "de"
              ? "Du hast ein Projekt im Kopf oder möchtest eine Möglichkeit besprechen? Wir freuen uns, von dir zu hören."
              : "Have a project in mind or want to explore an idea? We'd love to hear from you."}
          </p>
          <a
            className="button"
            href="mailto:contact@calvinpfrender.dev?subject=Lumina%20%E2%80%94%20Projektanfrage"
          >
            <span>
              {language === "de" ? "Nachricht schreiben" : "Send a message"}
            </span>
            <span className="arrow-icon" aria-hidden="true">
              north_east
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
