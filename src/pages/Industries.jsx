import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Img from '../components/Img.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { industries, home } from '../data/content.js';

export default function Industries() {
  return (
    <>
      <Seo path="/industries" />
      <PageHero eyebrow={industries.eyebrow} title={industries.title} lead={industries.lead} />

      <section className="section" aria-label="Industries">
        <div className="container">
          <ul className="card-grid card-grid--3">
            {industries.items.map((it) => (
              <li key={it.title} className="card">
                <Img image={it.image} className="card__img" />
                <div className="card__body">
                  <h2 className="card__title">{it.title}</h2>
                  <p>{it.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="note">{industries.outro}</p>
        </div>
      </section>

      <CtaBand {...home.cta} />
    </>
  );
}
