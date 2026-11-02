import type { Metadata } from "next";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { footer } from "../../content/home";

export const metadata: Metadata = {
  title: "Datenschutz – Lumina",
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main className="section legal" id="main">
        <div className="col">
          <h1>Datenschutz</h1>
          <p className="ph-block">{footer.privacy}</p>
          <p>
            <a className="text-link" href="/">
              Zurück zur Startseite
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
