import { useEffect } from 'react';
import PageHero from '../components/PageHero.jsx';
import Button from '../components/Button.jsx';

export default function NotFound() {
  useEffect(() => { document.title = 'Page not found | AnalytIQ Labs'; }, []);
  return (
    <>
      <PageHero eyebrow="404" title="Page not found" lead="The page you are looking for does not exist." />
      <section className="section">
        <div className="container"><Button to="/">Back to Home</Button></div>
      </section>
    </>
  );
}
