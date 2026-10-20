import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Img from '../components/Img.jsx';
import SectionHead from '../components/SectionHead.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { about, home } from '../data/content.js';
import { Target, Telescope } from 'lucide-react';

export default function About() {
  return (
    <>
      <Seo path="/about" />
      <PageHero eyebrow={about.eyebrow} title={about.title} lead={about.lead} />

      <section className="section" aria-label="About AnalytIQ Labs">
        <div className="container split">
          <div className="split__text prose">
            {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
            <blockquote className="pullquote">{about.quote}</blockquote>
          </div>
          <div className="split__media">
            <Img image={about.image} className="rounded-img" />
          </div>
        </div>
      </section>

      <section className="section section--tint" aria-label="Mission and vision">
        <div className="container two-col">
          <article className="panel">
            <span className="panel__icon"><Target aria-hidden="true" size={28} /></span>
            <h2>{about.mission.title}</h2>
            <p>{about.mission.text}</p>
          </article>
          <article className="panel">
            <span className="panel__icon"><Telescope aria-hidden="true" size={28} /></span>
            <h2>{about.vision.title}</h2>
            <p>{about.vision.text}</p>
          </article>
        </div>
      </section>

      <section className="section" aria-labelledby="core-values">
        <div className="container">
          <SectionHead id="core-values" title={about.values.title} center />
          <ul className="card-grid card-grid--5 values">
            {about.values.items.map((v, i) => (
              <li key={v.title} className="value">
                <span className="value__num" aria-hidden="true">0{i + 1}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand {...home.cta} />
    </>
  );
}
