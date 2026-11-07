import { Glyph, SketchCircle } from "./Icons";
import { Parallax } from "./Parallax";
import { audiences } from "../content/home";

export function Audiences() {
  return (
    <section className="section audiences" id="fuer-wen">
      <Parallax className="float-stage">
        <span
          aria-hidden="true"
          className="float f5"
          data-rotate="-10"
          data-speed="80"
          style={{ transform: "rotate(-10deg)" }}
        >
          <Glyph kind={0} />
        </span>
        <span
          aria-hidden="true"
          className="float f6"
          data-rotate="14"
          data-speed="120"
          style={{ transform: "rotate(14deg)" }}
        >
          <Glyph kind={2} />
        </span>
        <div className="col audience-layout">
          <div className="audience-intro scroll-reveal">
            <h2>{audiences.title}</h2>
            <p className="sub">{audiences.sub}</p>
          </div>
          <div className="audience-cards">
            {audiences.cards.map((card) => (
              <article
                className={`audience-card surface-${card.tone} scroll-reveal-item`}
                key={card.name}
              >
                <h3>{card.name}</h3>
                <SketchCircle />
                <div>
                  <p className="offer">{card.offer}</p>
                  <p>{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Parallax>
    </section>
  );
}
