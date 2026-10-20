// Optional runtime settings. Set VITE_FORM_ENDPOINT in a ".env" file
// (see .env.example) to deliver contact-form submissions (e.g. Formspree).
export const siteConfig = {
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || '',
};
