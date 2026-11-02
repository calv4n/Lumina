import { EmailLink } from "./Copy";
import { founder } from "../content/home";

export function Founder() {
  return (
    <section className="section" id="ueber-mich">
      <div className="col">
        <div className="section-head scroll-reveal">
          <h2>{founder.title}</h2>
          <p className="sub">{founder.sub}</p>
        </div>
        <div className="founder scroll-reveal">
          <div
            className="portrait ph-block"
            role="img"
            aria-label={founder.photo}
          >
            <span>{founder.photo}</span>
          </div>
          <div className="founder-copy">
            <h3>{founder.name}</h3>
            <p className="role">{founder.role}</p>
            <p className="ph-block bio">{founder.bio}</p>
            <p>
              <span className="ph">{founder.optional}</span>
            </p>
            <p className="founder-links">
              <EmailLink />
              <span className="ph">{founder.linkedin}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
