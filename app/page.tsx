import { Closing } from "../components/Closing";
import { DemoForm } from "../components/DemoForm";
import { Footer } from "../components/Footer";
import { Founder } from "../components/Founder";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Intro } from "../components/Intro";
import { Process } from "../components/Process";
import { ScrollReveal } from "../components/ScrollReveal";
import { Services } from "../components/Services";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <a className="skip" href="#main">
        Zum Inhalt springen
      </a>
      <Header />
      <main id="main" className="home-page">
        <Hero />
        <Intro />
        <Services />
        <Founder />
        <Process />
        <DemoForm />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
