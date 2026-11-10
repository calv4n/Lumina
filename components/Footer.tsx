import { Copy } from "./Copy";
import { EmailLink } from "./Copy";
import { footer, nav } from "../content/home";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="col">
        <div className="footer-top">
          <div>
            <a className="brand" href="/#top">
              lumina<span className="brand-dot">.</span>
            </a>
            <p className="claim">
              <Copy text={footer.claim} />
            </p>
            <p className="footer-copy">{footer.copy}</p>
          </div>
          <nav aria-label="Footer">
            {nav.map((item) => (
              <a key={item.href} href={`/${item.href}`}>
                {item.label}
              </a>
            ))}
            <a href="/impressum">Impressum</a>
            <a href="/datenschutz">Datenschutz</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>
            <EmailLink />
            <span aria-hidden="true"> · </span>
            <a href="https://lumina.calvinpfrender.dev">
              lumina.calvinpfrender.dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
