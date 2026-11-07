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
            {hero.headline.map((line, index) => (
              <span
                className={
                  index === 2 ? "hero-line mark" : "hero-line line-mask"
                }
                key={line}
              >
                {line}
                {index < hero.headline.length - 1 ? " " : ""}
              </span>
            ))}
          </h1>
          <p className="hero-sub rise rise-2">{hero.sub}</p>
          <div className="hero-actions rise rise-3">
            <a className="btn btn-yellow" href="#kontakt">
              {hero.primary}
            </a>
            <a className="link-quiet" href="#leistungen">
              {hero.secondary}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
