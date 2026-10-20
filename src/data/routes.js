// Pure JS (no JSX / asset imports) so it can be shared by the React app AND
// the Node pre-render script that writes per-page <title> / meta tags.
export const SITE_NAME = 'AnalytIQ Labs';
export const TAGLINE = 'Intelligence Beyond Numbers.';

export const routes = [
  {
    path: '/',
    label: 'Home',
    title: 'AnalytIQ Labs — Intelligence Beyond Numbers',
    description:
      'Every business generates data. AnalytIQ Labs helps businesses turn scattered information into clear insights, practical strategies and measurable improvements.',
  },
  {
    path: '/about',
    label: 'About Us',
    title: 'About Us | AnalytIQ Labs',
    description:
      'Analytics should be practical, understandable and useful. Learn about the mission, vision and core values of AnalytIQ Labs.',
  },
  {
    path: '/services',
    label: 'Services',
    title: 'Our Services | AnalytIQ Labs',
    description:
      'Services that address the complete journey from raw data to business action: analytics and BI, data science, AI and machine learning, data engineering, consulting and corporate training.',
  },
  {
    path: '/industries',
    label: 'Industries',
    title: 'Industries We Serve | AnalytIQ Labs',
    description:
      'Healthcare, retail, manufacturing, finance, human resources, education and more. Our solutions adapt to the information, processes and objectives of each organisation.',
  },
  {
    path: '/why-choose-us',
    label: 'Why Choose Us',
    title: 'Why Choose AnalytIQ Labs?',
    description:
      'We start with your business, not with a software tool. Practical solutions, clear communication, responsible use of data and AI, flexible engagement and knowledge sharing.',
  },
  {
    path: '/engagement-models',
    label: 'Engagement Models',
    title: 'Our Engagement Models | AnalytIQ Labs',
    description:
      'Project-based, consulting, ongoing analytics support, dedicated resource support and corporate training engagements structured around your budget and priorities.',
  },
  {
    path: '/data-privacy',
    label: 'Data Privacy',
    title: 'Our Commitment to Data Privacy | AnalytIQ Labs',
    description:
      'Business data deserves careful handling. Read our intended working principles for confidentiality, secure handling, data minimisation and documentation.',
  },
  {
    path: '/faq',
    label: 'FAQ',
    title: 'Frequently Asked Questions | AnalytIQ Labs',
    description:
      'Answers about data analytics, dashboards, AI solutions for small and medium-sized businesses, training, pricing and how to start a project with AnalytIQ Labs.',
  },
  {
    path: '/contact',
    label: 'Contact Us',
    title: 'Contact Us | AnalytIQ Labs',
    description:
      "Have a business challenge? Let's talk. Tell us what you are trying to understand, improve or build.",
  },
];

export const getRoute = (path) => routes.find((r) => r.path === path);
