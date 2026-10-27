import type { Language } from "./types";

type HeaderProps = {
  language: Language;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  toggleLanguage: () => void;
};

export function Header({
  language,
  menuOpen,
  setMenuOpen,
  toggleLanguage,
}: HeaderProps) {
  return (
    <header>
      <div className="wrap nav">
        <a href="#home" className="brand" aria-label="Lumina Home">
          {"lumina"}
          <span>{"."}</span>
        </a>
        <nav
          id="navigation"
          aria-label="Hauptnavigation"
          className={menuOpen ? "navlinks open" : "navlinks"}
          onClick={() => setMenuOpen(false)}
        >
          <a href="#leistungen">
            {language === "de" ? "Leistungen" : "Services"}
          </a>
          <a href="#ansatz">
            {language === "de" ? "Unser Ansatz" : "Our approach"}
          </a>
          <a href="#ablauf">
            {language === "de" ? "Zusammenarbeit" : "How we work"}
          </a>
          <a href="#faq">{"FAQ"}</a>
        </nav>
        <div className="navright">
          <button
            className="lang"
            type="button"
            onClick={toggleLanguage}
            aria-label={
              language === "de"
                ? "Switch language to English"
                : "Sprache auf Deutsch wechseln"
            }
          >
            <span className={language === "de" ? "de" : "de inactive"}>DE</span>{" "}
            /{" "}
            <span className={language === "en" ? "en" : "en inactive"}>EN</span>
          </button>
          <a className="navcta" href="#kontakt">
            <span>
              {language === "de" ? "Projekt besprechen" : "Let's talk"}
            </span>
            <span className="arrow-icon" aria-hidden="true">
              north_east
            </span>
          </a>
          <button
            className="menu"
            aria-controls="navigation"
            type="button"
            aria-expanded={menuOpen}
            aria-label={
              language === "de"
                ? menuOpen
                  ? "Menü schliessen"
                  : "Menü öffnen"
                : menuOpen
                  ? "Close menu"
                  : "Open menu"
            }
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}
