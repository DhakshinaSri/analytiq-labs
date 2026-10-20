import { Check } from 'lucide-react';
import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Img from '../components/Img.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { services, home } from '../data/content.js';

export default function Services() {
  return (
    <>
      <Seo path="/services" />
      <PageHero eyebrow={services.eyebrow} title={services.title} lead={services.lead} />

      {services.items.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`section service ${i % 2 === 0 ? '' : 'section--tint'}`}
          aria-labelledby={`${s.id}-title`}
        >
          <div className={`container split ${i % 2 === 1 ? 'split--reverse' : ''}`}>
            <div className="split__text">
              <span className="service__num" aria-hidden="true">{i + 1}</span>
              <h2 id={`${s.id}-title`} className="section-title section-title--sm">{s.title}</h2>
              <p className="lead">{s.intro}</p>
              <ul className="checklist">
                {s.list.map((li) => (
                  <li key={li}>
                    <Check aria-hidden="true" size={18} strokeWidth={3} />
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
              <p className="service__outro">{s.outro}</p>
            </div>
            <div className="split__media">
              <Img image={s.image} className="rounded-img" />
            </div>
          </div>
        </section>
      ))}

      <CtaBand {...home.cta} />
    </>
  );
}
