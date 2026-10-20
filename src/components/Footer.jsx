import { Link } from 'react-router-dom';
import { logo, brand } from '../data/content.js';
import { routes } from '../data/routes.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <Link to="/" aria-label="AnalytIQ Labs - Home">
            <img src={logo} width="644" height="161" alt="AnalytIQ Labs" loading="lazy" />
          </Link>
          <p>{brand.tagline}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="site-footer__links">
            {routes.map((r) => (
              <li key={r.path}>
                <Link to={r.path}>{r.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="container site-footer__bottom">
        <p>{brand.footerLine}</p>
      </div>
    </footer>
  );
}
