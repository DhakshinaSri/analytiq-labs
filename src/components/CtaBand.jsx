import Button from './Button.jsx';
import { brand } from '../data/content.js';

export default function CtaBand({ title, text, button }) {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="container cta__inner">
        <h2 id="cta-title" className="cta__title">{title}</h2>
        <p className="cta__text">{text}</p>
        <div className="cta__actions">
          <Button to="/contact">{button}</Button>
        </div>
        <p className="cta__tagline">{brand.footerLine}</p>
      </div>
    </section>
  );
}
