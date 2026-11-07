import { services } from "../content/home";
import { FloatingToolIcons } from "./FloatingToolIcons";
export function Services() {
  return (
    <section
      className="section services"
      id="leistungen"
      aria-labelledby="services-title"
    >
      <div className="col">
        <FloatingToolIcons variant="services" />
        <div className="section-head scroll-reveal">
          <h2 id="services-title">{services.title}</h2>
        </div>
        <div className="services-grid stagger">
          {services.items.map((item, index) => (
            <article className="service scroll-reveal-item" key={item.title}>
              <span className="svc-num" aria-hidden="true">
                0{index + 1}
              </span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
