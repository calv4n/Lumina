"use client";

import { useEffect, useState } from "react";
import { nav } from "../content/home";

export function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    setTheme(
      document.documentElement.dataset.theme === "light" ? "light" : "dark",
    );
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (next === "light") document.documentElement.dataset.theme = "light";
    else delete document.documentElement.dataset.theme;
    try {
      localStorage.setItem("lumina-theme", next);
    } catch {
      /* Preference is optional. */
    }
  }

  const themeLabel =
    theme === "dark"
      ? "Auf helles Farbschema wechseln"
      : "Auf dunkles Farbschema wechseln";

  return (
    <header className="site-header">
      <a className="brand pill" href="/#top">
        lumina<span className="brand-dot">.</span>
      </a>
      <button
        className="icon-btn theme-btn"
        type="button"
        onClick={toggleTheme}
        aria-label={themeLabel}
        suppressHydrationWarning
      >
        <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
      </button>
      <nav className="nav-cluster pill" aria-label="Hauptnavigation">
        {nav.map((item) => (
          <a key={item.href} href={`/${item.href}`}>
            {item.label}
          </a>
        ))}
        <a className="btn btn-yellow nav-cta" href="/#kontakt">
          Projekt besprechen
        </a>
      </nav>
      <div className="nav-mobile pill">
        <button
          className="icon-btn menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Menü schliessen" : "Menü öffnen"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className={open ? "burger is-open" : "burger"} />
        </button>
        <a
          className="btn btn-yellow nav-cta"
          href="/#kontakt"
          onClick={() => setOpen(false)}
        >
          Anfragen
        </a>
      </div>
      {open ? (
        <div className="nav-panel" id="mobile-nav">
          <nav aria-label="Mobilnavigation" onClick={() => setOpen(false)}>
            {nav.map((item) => (
              <a key={item.href} href={`/${item.href}`}>
                {item.label}
              </a>
            ))}
            <a className="btn btn-yellow" href="/#kontakt">
              Projekt besprechen
            </a>
          </nav>
          <button
            className="text-link theme-link"
            type="button"
            onClick={toggleTheme}
          >
            {themeLabel}
          </button>
        </div>
      ) : null}
    </header>
  );
}
