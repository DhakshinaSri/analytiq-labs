import { Check } from 'lucide-react';
import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { privacy, home } from '../data/content.js';

export default function Privacy() {
  return (
    <>
      <Seo path="/data-privacy" />
      <PageHero eyebrow={privacy.eyebrow} title={privacy.title} lead={privacy.lead} />

      <section className="section" aria-labelledby="principles">
        <div className="container container--narrow">
          <h2 id="principles" className="section-title section-title--sm">{privacy.listTitle}</h2>
          <ul className="principles">
            {privacy.list.map((li) => (
              <li key={li}>
                <span className="why__check"><Check aria-hidden="true" size={18} strokeWidth={3} /></span>
                <span>{li}</span>
              </li>
            ))}
          </ul>
          <p className="note">{privacy.outro}</p>
        </div>
      </section>

      <CtaBand {...home.cta} />
    </>
  );
}
