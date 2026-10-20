import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Img from '../components/Img.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { contact } from '../data/content.js';

export default function Contact() {
  return (
    <>
      <Seo path="/contact" />
      <PageHero eyebrow={contact.eyebrow} title={contact.title} lead={contact.lead} />

      <section className="section" aria-label="Contact">
        <div className="container split split--top">
          <div className="split__text">
            <p className="lead">{contact.text}</p>
            <ContactForm button={contact.button} />
          </div>
          <div className="split__media">
            <Img image={contact.image} className="rounded-img" />
          </div>
        </div>
      </section>
    </>
  );
}
