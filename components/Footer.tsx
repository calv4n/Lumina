import type { Language } from "./types";

export function Footer({ language }: { language: Language }) {
  return (
    <footer>
      <div className="wrap footer">
        <a href="#home" className="brand" style={{ color: "#f7f5ef" }}>
          {"lumina"}
          <span>{"."}</span>
        </a>
        <span>{"© 2026 LUMINA · DIGITAL STUDIO"}</span>
        <a href="#home">
          {language === "de" ? "Zurück nach oben ↑" : "Back to top ↑"}
        </a>
      </div>
    </footer>
  );
}
