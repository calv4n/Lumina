import { Audiences } from "../components/Audiences";
import { Closing } from "../components/Closing";
import { DemoForm } from "../components/DemoForm";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";
import { Founder } from "../components/Founder";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Intro } from "../components/Intro";
import { Portfolio } from "../components/Portfolio";
import { Pricing } from "../components/Pricing";
import { Process } from "../components/Process";
import { ScrollReveal } from "../components/ScrollReveal";
import { Services } from "../components/Services";
import { WhyFree } from "../components/WhyFree";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <a className="skip" href="#main">
        Zum Inhalt springen
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Intro />
        <Process />
        <Services />
        <Audiences />
        <WhyFree />
        <Pricing />
        <Portfolio />
        <Founder />
        <FAQ />
        <Closing />
        <DemoForm />
      </main>
      <Footer />
    </>
  );
}
