import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { whyChoose, home } from '../data/content.js';
import { ShieldCheck, Layers, Eye, Scale, Users } from 'lucide-react';

const icons = [Layers, Eye, ShieldCheck, Scale, Users];

export default function WhyChoose() {
  return (
    <>
      <Seo path="/why-choose-us" />
      <PageHero eyebrow={whyChoose.eyebrow} title={whyChoose.title} />

      <section className="section" aria-labelledby="statement">
        <div className="container">
          <div className="statement">
            <h2 id="statement" className="statement__title">{whyChoose.statement}</h2>
            <p className="lead">{whyChoose.text}</p>
          </div>
          <ul className="card-grid card-grid--3 feature-grid">
            {whyChoose.items.map((it, i) => {
              const Icon = icons[i];
              return (
                <li key={it.title} className="feature">
                  <span className="feature__icon"><Icon aria-hidden="true" size={26} /></span>
                  <h3>{it.title}</h3>
                  <p>{it.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <CtaBand {...home.cta} />
    </>
  );
}
