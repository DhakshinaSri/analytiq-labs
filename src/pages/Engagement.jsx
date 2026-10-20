import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { engagement, home } from '../data/content.js';

export default function Engagement() {
  return (
    <>
      <Seo path="/engagement-models" />
      <PageHero eyebrow={engagement.eyebrow} title={engagement.title} lead={engagement.lead} />

      <section className="section" aria-label="Engagement models">
        <div className="container">
          <ol className="model-list">
            {engagement.items.map((it, i) => (
              <li key={it.title} className="model">
                <span className="model__num" aria-hidden="true">0{i + 1}</span>
                <div>
                  <h2 className="model__title">{it.title}</h2>
                  <p>{it.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="note">{engagement.outro}</p>
        </div>
      </section>

      <CtaBand {...home.cta} />
    </>
  );
}
