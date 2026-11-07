import { whyFree } from "../content/home";

export function WhyFree() {
  return (
    <section className="section" id="warum-gratis">
      <div className="col">
        <div className="section-head scroll-reveal">
          <h2>{whyFree.title}</h2>
          <p className="sub">{whyFree.sub}</p>
        </div>
        <div className="dialogs stagger">
          {whyFree.cards.map((card) => (
            <article
              className={`dialog surface-${card.tone} scroll-reveal-item`}
              key={card.q}
            >
              <div className="bubbles">
                <div className="bubble bubble-q">
                  <span>Frage</span>
                  <p>{card.q}</p>
                </div>
                <div className="bubble bubble-a">
                  <span>Lumina</span>
                  <p>{card.a}</p>
                </div>
              </div>
              <p className="dialog-foot">
                <strong>lumina.</strong>
                <span>{whyFree.foot}</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
