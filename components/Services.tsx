import { Copy } from "./Copy";
import { Glyph } from "./Icons";
import { Parallax } from "./Parallax";
import { services } from "../content/home";

const floats = [
  { kind: 0, speed: 70, rotate: -14, className: "float f1" },
  { kind: 1, speed: 110, rotate: 8, className: "float f2" },
  { kind: 2, speed: 50, rotate: 12, className: "float f3" },
  { kind: 3, speed: 90, rotate: -8, className: "float f4" },
];

export function Services() {
  return (
    <section className="section services" id="leistungen">
      <Parallax className="float-stage">
        {floats.map((item) => (
          <span
            aria-hidden="true"
            className={item.className}
            data-rotate={item.rotate}
            data-speed={item.speed}
            key={item.className}
            style={{ transform: `rotate(${item.rotate}deg)` }}
          >
            <Glyph kind={item.kind} />
          </span>
        ))}
        <div className="col">
          <div className="section-head scroll-reveal">
            <h2>{services.title}</h2>
            <p className="sub">{services.sub}</p>
          </div>
          <div className="services-grid stagger">
            {services.items.map((item, index) => (
              <article className="service scroll-reveal-item" key={item.title}>
                <span className="svc-num">{index + 1}</span>
                <h3>
                  <Copy text={item.title} />
                </h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <p className="tools-note">
            <span className="ph">{services.toolsNote}</span>
          </p>
        </div>
      </Parallax>
    </section>
  );
}
