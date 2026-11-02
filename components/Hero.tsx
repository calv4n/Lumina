import { ArrowDown } from "./Icons";
import { hero } from "../content/home";

export function Hero() {
  return (
    <div className="hero-stack" id="top">
      <div className="hero-layer layer-a" aria-hidden="true" />
      <div className="hero-layer layer-b" aria-hidden="true" />
      <div className="hero-layer layer-c" aria-hidden="true" />
      <section className="hero-card" aria-labelledby="hero-title">
        <div className="col hero-inner">
          <h1 id="hero-title" className="rise">
            <span className="hero-line line-mask">
              Deine<span className="desk-only"> Kunden</span>
            </span>
            <span className="hero-line line-mask mob-only">Kunden</span>
            <span className="hero-line line-mask line-tight">suchen dich.</span>
            <span className="hero-line">
              Finden
              <span className="mob-break" />
              <span className="mark">andere.</span>
            </span>
          </h1>
          <p className="hero-sub rise rise-2">{hero.sub}</p>
          <div className="hero-actions rise rise-3">
            <a className="btn btn-yellow" href="#gratis-demo">
              {hero.primary}
            </a>
            <a className="link-quiet" href="#preise">
              {hero.secondary}
            </a>
            <span className="hero-rule" aria-hidden="true" />
            <ul className="hero-facts">
              {hero.badges.map((badge) => (
                <li key={badge}>
                  <span className="badge">{badge}</span>
                </li>
              ))}
            </ul>
            <a
              className="icon-btn down-btn"
              href="#statement"
              aria-label="Weiter nach unten"
            >
              <ArrowDown />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
