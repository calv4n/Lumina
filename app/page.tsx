"use client";

import { useEffect, useState } from "react";
import type { Language } from "../components/types";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Approach } from "../components/Approach";
import { Process } from "../components/Process";
import { FAQ } from "../components/FAQ";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function Home() {
  const [language, setLanguage] = useState<Language>("de");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem("lumina-language") === "en") setLanguage("en");
    } catch {
      /* The default remains available if storage is disabled. */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  function toggleLanguage() {
    const next = language === "de" ? "en" : "de";
    setLanguage(next);
    try {
      localStorage.setItem("lumina-language", next);
    } catch {
      /* Optional preference. */
    }
  }

  return (
    <>
      <a className="skip" href="#main">
        {language === "de" ? "Zum Inhalt springen" : "Skip to content"}
      </a>
      <Header
        language={language}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        toggleLanguage={toggleLanguage}
      />
      <main id="main">
        <Hero language={language} />
        <Services language={language} />
        <Approach language={language} />
        <Process language={language} />
        <FAQ language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </>
  );
}
