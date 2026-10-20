export default function PageHero({ eyebrow, title, lead }) {
  return (
    <section className="page-hero" aria-labelledby="page-title">
      <div className="container page-hero__inner">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 id="page-title" className="page-hero__title">{title}</h1>
        {lead && <p className="lead page-hero__lead">{lead}</p>}
      </div>
    </section>
  );
}
