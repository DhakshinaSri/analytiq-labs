import { Link } from 'react-router-dom';
import { Search, Lightbulb, TrendingUp, Check, ArrowRight } from 'lucide-react';
import Seo from '../components/Seo.jsx';
import Button from '../components/Button.jsx';
import Img from '../components/Img.jsx';
import SectionHead from '../components/SectionHead.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { home, brand } from '../data/content.js';

const icons = { search: Search, lightbulb: Lightbulb, trend: TrendingUp };

export default function Home() {
  const { hero, pillars, whatWeDo, why, approach, cta } = home;
  return (
    <>
      <Seo path="/" />

      <section className="hero" aria-labelledby="page-title">
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="eyebrow">{brand.tagline}</p>
            <h1 id="page-title" className="hero__title">{hero.title}</h1>
            {hero.paragraphs.map((p) => (
              <p key={p} className="lead">{p}</p>
            ))}
            <div className="hero__actions">
              <Button to="/contact">{cta.button}</Button>
              <Button to="/services" variant="secondary" arrow={false}>Our Services</Button>
            </div>
          </div>
          <div className="hero__media">
            <Img image={hero.image} priority className="hero__img" />
          </div>
        </div>
      </section>

      <section className="section section--tint" aria-label="Understand, Innovate, Improve">
        <div className="container">
          <ul className="pillars">
            {pillars.map((p, i) => {
              const Icon = icons[p.icon];
              return (
                <li key={p.title} className="pillar">
                  <span className="pillar__icon"><Icon aria-hidden="true" size={26} /></span>
                  <h2 className="pillar__title">{p.title}</h2>
                  <p>{p.text}</p>
                  <span className="pillar__num" aria-hidden="true">0{i + 1}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="what-we-do">
        <div className="container">
          <SectionHead id="what-we-do" title={whatWeDo.title} center />
          <ul className="card-grid card-grid--4">
            {whatWeDo.items.map((it) => (
              <li key={it.title} className="card">
                <Img image={it.image} className="card__img" />
                <div className="card__body">
                  <h3 className="card__title">{it.title}</h3>
                  <p>{it.text}</p>
                  <Link to={it.to} className="card__link" aria-label={`Learn more about ${it.title}`}>
                    <span>Learn more</span> <ArrowRight aria-hidden="true" size={16} strokeWidth={2.4} />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--grey" aria-labelledby="why-us">
        <div className="container why">
          <SectionHead id="why-us" title={why.title} lead={why.intro} />
          <ul className="why__list">
            {why.items.map((it) => (
              <li key={it.title} className="why__item">
                <span className="why__check"><Check aria-hidden="true" size={18} strokeWidth={3} /></span>
                <div>
                  <h3>{it.title}</h3>
                  <p>{it.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="our-approach">
        <div className="container">
          <SectionHead id="our-approach" title={approach.title} center />
          <ol className="steps">
            {approach.steps.map((s) => (
              <li key={s.n} className="step">
                <span className="step__num" aria-hidden="true">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand title={cta.title} text={cta.text} button={cta.button} />
    </>
  );
}
