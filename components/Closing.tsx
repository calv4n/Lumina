import { Copy, EmailLink } from "./Copy";
import { closing } from "../content/home";

export function Closing() {
  return (
    <section className="section closing" id="abschluss">
      <div className="col">
        <div className="section-head scroll-reveal">
          <h2>
            <Copy text={closing.title} />
          </h2>
          <p className="sub">{closing.sub}</p>
        </div>
        <a className="giant" href="#gratis-demo">
          {closing.cta}
        </a>
        <p className="mail-line">
          oder schreib uns an <EmailLink />
        </p>
      </div>
    </section>
  );
}
