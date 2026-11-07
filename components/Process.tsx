import { approach } from "../content/home";
import { FloatingToolIcons } from "./FloatingToolIcons";
export function Process() {
  return (
    <section
      className="section approach"
      id="ablauf"
      aria-labelledby="approach-title"
    >
      <div className="col">
        <FloatingToolIcons variant="approach" />
        <div className="editorial-section scroll-reveal">
          <h2 id="approach-title">{approach.title}</h2>
          <p className="sub">{approach.body}</p>
        </div>
        <ol className="approach-steps stagger">
          {approach.steps.map((step) => (
            <li className="scroll-reveal-item" key={step.title}>
              <h3>{step.title}</h3>
              <p className="sub">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
