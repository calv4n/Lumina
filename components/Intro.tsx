import { problem } from "../content/home";
export function Intro() {
  return (
    <section
      className="section intro"
      id="statement"
      aria-labelledby="problem-title"
    >
      <div className="col editorial-section scroll-reveal">
        <h2 id="problem-title">{problem.title}</h2>
        <p className="sub">{problem.body}</p>
      </div>
    </section>
  );
}
