import { ChevronDown } from 'lucide-react';
import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { faq, home } from '../data/content.js';

export default function Faq() {
  return (
    <>
      <Seo path="/faq" />
      <PageHero eyebrow={faq.eyebrow} title={faq.title} />

      <section className="section" aria-label="Questions and answers">
        <div className="container container--narrow">
          <div className="faq">
            {faq.items.map((it) => (
              <details key={it.q} className="faq__item">
                <summary>
                  <span>{it.q}</span>
                  <ChevronDown aria-hidden="true" size={22} strokeWidth={2.4} />
                </summary>
                <p>{it.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand {...home.cta} />
    </>
  );
}
