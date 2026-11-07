import { Copy, EmailLink } from "./Copy";
import { pricing } from "../content/home";

export function Pricing() {
  return (
    <section className="section" id="preise">
      <div className="col">
        <div className="section-head scroll-reveal">
          <h2>{pricing.title}</h2>
          <p className="sub">
            <Copy text={pricing.sub} />
          </p>
        </div>
        <div className="price-grid stagger">
          {pricing.plans.map((plan) => (
            <article
              className={`price surface-${plan.tone} scroll-reveal-item`}
              key={plan.name}
            >
              {plan.badge ? (
                <span className="badge badge-hot">{plan.badge}</span>
              ) : (
                <span />
              )}
              <div className="price-top">
                <p className="plan-name">{plan.name}</p>
                <p className="plan-price">{plan.price}</p>
                <p className="plan-period">{plan.period}</p>
                <a
                  className={
                    plan.tone === "paper" ? "btn btn-yellow" : "btn btn-inverse"
                  }
                  href="#gratis-demo"
                >
                  Gratis-Demo sichern
                </a>
              </div>
              <ul>
                {plan.bullets.map((bullet) => (
                  <li key={bullet}>
                    <span className="bullet" aria-hidden="true" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <p className="price-foot">{plan.foot}</p>
            </article>
          ))}
        </div>
        <article className="signature surface-ink scroll-reveal">
          <div>
            <h3>{pricing.signature.title}</h3>
            <p>{pricing.signature.text}</p>
          </div>
          <div className="signature-actions">
            <a className="btn btn-inverse" href="#gratis-demo">
              Gratis-Demo sichern
            </a>
            <p>
              oder schreib uns an <EmailLink />
            </p>
          </div>
        </article>
        <p className="terms">{pricing.terms}</p>
        <p className="terms">
          <span className="ph">{pricing.responseNote}</span>
        </p>
      </div>
    </section>
  );
}
