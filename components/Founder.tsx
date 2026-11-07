import Image from "next/image";
import { team } from "../content/home";

export function Founder() {
  return (
    <section
      className="section team"
      id="ueber-uns"
      aria-labelledby="team-title"
    >
      <div className="col">
        <div className="section-head scroll-reveal">
          <h2 id="team-title">{team.title}</h2>
          <p className="sub">{team.sub}</p>
        </div>
        <div className="team-list stagger">
          {team.members.map((member, index) => (
            <article
              className="founder team-member scroll-reveal-item"
              key={index}
            >
              <div className="portrait team-portrait">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={`Porträt von ${member.name}`}
                    fill
                    sizes="(max-width: 800px) calc(100vw - 48px), 420px"
                    unoptimized
                  />
                ) : (
                  <div
                    className="team-photo-placeholder"
                    role="img"
                    aria-label={`Porträt von ${member.name} folgt`}
                  >
                    <svg viewBox="0 0 240 260" fill="none" aria-hidden="true">
                      <circle cx="120" cy="88" r="42" />
                      <path d="M36 242v-20a84 84 0 0 1 168 0v20" />
                    </svg>
                    <span>Porträt folgt</span>
                  </div>
                )}
              </div>
              <div className="founder-copy team-member-copy">
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
