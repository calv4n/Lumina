import { Copy } from "./Copy";
import { IconDomain, IconHelp, IconPay, IconSee, Starburst } from "./Icons";
import { benefits, process } from "../content/home";

const icons = {
  see: IconSee,
  pay: IconPay,
  domain: IconDomain,
  help: IconHelp,
};

export function Process() {
  return (
    <section className="section" id="ablauf">
      <div className="col">
        <div className="section-head scroll-reveal">
          <h2>{process.title}</h2>
        </div>
        <div className="process-grid stagger">
          {process.steps.map((step) => (
            <article
              className={`step surface-${step.tone} scroll-reveal-item${step.tall ? " step-tall" : ""}`}
              key={step.badge}
            >
              <span className="badge">{step.badge}</span>
              {step.tall ? <Starburst /> : <span />}
              <div>
                <h3>{step.title}</h3>
                <p>
                  <Copy text={step.body} />
                </p>
              </div>
            </article>
          ))}
        </div>
        <ul className="benefits">
          {benefits.map((item) => {
            const Icon = icons[item.icon];
            return (
              <li className="scroll-reveal-item" key={item.text}>
                <Icon />
                <p>
                  <Copy text={item.text} />
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
