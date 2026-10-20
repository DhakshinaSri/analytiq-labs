export default function SectionHead({ eyebrow, title, lead, id, center = false, as: Tag = 'h2' }) {
  return (
    <header className={`section-head${center ? ' section-head--center' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Tag id={id} className="section-title">{title}</Tag>
      {lead && <p className="lead">{lead}</p>}
    </header>
  );
}
