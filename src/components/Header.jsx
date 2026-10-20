import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { logo } from '../data/content.js';
import { routes } from '../data/routes.js';

const navItems = routes.filter((r) => r.path !== '/' && r.path !== '/contact');

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="container site-header__bar">
        <Link to="/" className="brand" aria-label="AnalytIQ Labs - Home">
          <img src={logo} width="644" height="161" alt="AnalytIQ Labs" />
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>

        <nav id="primary-nav" className={`nav${open ? ' is-open' : ''}`} aria-label="Primary">
          <ul className="nav__list">
            {navItems.map((r) => (
              <li key={r.path}>
                <NavLink to={r.path} className="nav__link">{r.label}</NavLink>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn btn--primary btn--sm nav__cta">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}
