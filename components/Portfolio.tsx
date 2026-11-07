import { PageArt } from "./Icons";
import { portfolio } from "../content/home";

export function Portfolio() {
  return (
    <section className="section" id="deine-firma">
      <div className="col">
        <div className="section-head scroll-reveal">
          <h2>{portfolio.title}</h2>
          <p className="sub">{portfolio.sub}</p>
        </div>
        <div className="cases stagger">
          {portfolio.cards.map((card) => (
            <article
              className={`case surface-${card.tone} scroll-reveal-item`}
              key={card.name}
            >
              <div className="case-copy">
                <div>
                  <h3>{card.name}</h3>
                  <p>{card.text}</p>
                </div>
                <div className="case-metric">
                  {card.metric ? <p className="metric">{card.metric}</p> : null}
                  <p className="metric-label">{card.label}</p>
                </div>
              </div>
              <PageArt />
            </article>
          ))}
        </div>
        <p className="center-cta">
          <a className="btn btn-yellow" href="#gratis-demo">
            Gratis-Demo sichern
          </a>
        </p>
      </div>
    </section>
  );
}
