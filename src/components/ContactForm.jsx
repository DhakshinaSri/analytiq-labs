import { useState } from 'react';
import { Send } from 'lucide-react';
import { siteConfig } from '../data/siteConfig.js';

export default function ContactForm({ button }) {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error | unconfigured

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!siteConfig.formEndpoint) {
      setStatus('unconfigured');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(siteConfig.formEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error('Request failed');
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  const messages = {
    success: 'Thank you. Your message has been sent.',
    error: 'Something went wrong. Please try again.',
    unconfigured: 'This form is not connected yet. Add your form endpoint in the .env file (see README).',
  };

  return (
    <form className="form" onSubmit={onSubmit} aria-label="Contact form">
      <div className="field">
        <label htmlFor="cf-name">Name</label>
        <input id="cf-name" name="name" type="text" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="cf-email">Email</label>
        <input id="cf-email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="cf-phone">Phone Number</label>
        <input id="cf-phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <div className="field">
        <label htmlFor="cf-message">Message</label>
        <textarea id="cf-message" name="message" rows="5" required />
      </div>
      <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
        <span>{button}</span>
        <Send aria-hidden="true" size={18} strokeWidth={2.4} />
      </button>
      <p className={`form__status form__status--${status}`} role="status" aria-live="polite">
        {messages[status] || ''}
      </p>
    </form>
  );
}