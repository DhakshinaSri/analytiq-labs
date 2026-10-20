import { useEffect } from 'react';
import { getRoute } from '../data/routes.js';

/** Updates <title> and meta description for the current page (SPA-friendly). */
export default function Seo({ path }) {
  const r = getRoute(path);
  useEffect(() => {
    if (!r) return;
    document.title = r.title;
    const setMeta = (sel, attr, value) => {
      const el = document.head.querySelector(sel);
      if (el) el.setAttribute(attr, value);
    };
    setMeta('meta[name="description"]', 'content', r.description);
    setMeta('meta[property="og:title"]', 'content', r.title);
    setMeta('meta[property="og:description"]', 'content', r.description);
  }, [r]);
  return null;
}
