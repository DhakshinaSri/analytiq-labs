// All website copy lives here and comes directly from the AnalytIQ Labs Word document.
import logo from '../assets/logo.png';
import wwdAnalytics from '../assets/images/wwd-analytics.jpg';
import wwdAi from '../assets/images/wwd-ai.jpg';
import wwdEngineering from '../assets/images/wwd-engineering.jpg';
import wwdConsulting from '../assets/images/wwd-consulting.jpg';
import aboutTeam from '../assets/images/about-team.jpg';
import svcAnalytics from '../assets/images/svc-analytics.jpg';
import svcDataScience from '../assets/images/svc-data-science.jpg';
import svcAi from '../assets/images/svc-ai.jpg';
import svcEngineering from '../assets/images/svc-engineering.jpg';
import svcConsulting from '../assets/images/svc-consulting.jpg';
import svcTraining from '../assets/images/svc-training.jpg';
import indHealthcare from '../assets/images/ind-healthcare.jpg';
import indRetail from '../assets/images/ind-retail.jpg';
import indManufacturing from '../assets/images/ind-manufacturing.jpg';
import indBanking from '../assets/images/ind-banking.jpg';
import indHr from '../assets/images/ind-hr.jpg';
import indEducation from '../assets/images/ind-education.jpg';
import contactTeam from '../assets/images/contact-team.jpg';

export { logo };

export const brand = {
  name: 'AnalytIQ Labs',
  tagline: 'Intelligence Beyond Numbers.',
  footerLine: 'AnalytIQ Labs — Intelligence Beyond Numbers.',
};

/* ------------------------------ 1. HOME ------------------------------ */
export const home = {
  hero: {
    title: 'Make Your Data Work for Your Business.',
    paragraphs: [
      'Every business generates data. Sales figures, customer interactions, operational reports, financial records and performance metrics all tell a story. The challenge is knowing what that story means and what to do next.',
      'At AnalytIQ Labs, we help businesses turn scattered information into clear insights, practical strategies and measurable improvements. Through data analytics, business intelligence and artificial intelligence, we work with organisations to make better decisions, improve processes and move forward with confidence.',
    ],
    image: { src: svcAnalytics, width: 1000, height: 750, alt: 'A business dashboard with charts and key metrics displayed on a desktop monitor' },
  },
  pillars: [
    { title: 'Understand', text: 'Discover what your data reveals about your business.', icon: 'search' },
    { title: 'Innovate', text: 'Apply analytics and AI to solve real-world challenges.', icon: 'lightbulb' },
    { title: 'Improve', text: 'Turn informed decisions into meaningful business outcomes.', icon: 'trend' },
  ],
  whatWeDo: {
    title: 'What we do',
    items: [
      {
        title: 'Data Analytics & Business Intelligence',
        text: 'We organise business data, identify meaningful patterns and create dashboards that help decision-makers understand performance without spending hours working through spreadsheets.',
        image: { src: wwdAnalytics, width: 1000, height: 667, alt: 'A colleague reviewing a sales performance dashboard on a large monitor' },
        to: '/services#data-analytics-business-intelligence',
      },
      {
        title: 'AI & Machine Learning',
        text: 'We develop practical, data-driven solutions that help businesses forecast trends, identify opportunities, automate selected tasks and make informed decisions.',
        image: { src: wwdAi, width: 1000, height: 1000, alt: 'A professional working on a laptop in front of screens showing data and analytics' },
        to: '/services#artificial-intelligence-machine-learning',
      },
      {
        title: 'Data Engineering & Integration',
        text: 'We help bring information from different systems together, improve data quality and build dependable foundations for reporting and advanced analytics.',
        image: { src: wwdEngineering, width: 853, height: 569, alt: 'Analysts at workstations connected to cloud and data systems' },
        to: '/services#data-engineering-management',
      },
      {
        title: 'Analytics Consulting & Training',
        text: 'We work with teams to identify the right problems, choose suitable tools and build the skills required to use data effectively in everyday business.',
        image: { src: wwdConsulting, width: 1000, height: 655, alt: 'A team in a meeting discussing charts shown on a wall display' },
        to: '/services#analytics-consulting',
      },
    ],
  },
  why: {
    title: 'Why AnalytIQ Labs?',
    intro:
      'Technology is useful only when it addresses a genuine need. We begin by understanding your business, your challenges and the decisions you need to make.',
    items: [
      { title: 'Business-first thinking', text: 'We focus on the problem before recommending a tool.' },
      { title: 'Clear and practical insights', text: 'We make complex information easier to understand and act upon.' },
      { title: 'Solutions built around your needs', text: 'We consider your objectives, existing systems, data readiness and budget.' },
      { title: 'A focus on measurable value', text: 'We define relevant outcomes and help you evaluate progress.' },
      { title: 'A collaborative approach', text: 'We work with your team, keeping communication clear throughout the engagement.' },
    ],
  },
  approach: {
    title: 'Our approach',
    steps: [
      { n: '01', title: 'Understand the challenge', text: 'We discuss your goals, existing processes and the questions you want your data to answer.' },
      { n: '02', title: 'Explore the data', text: 'We examine data sources, quality, gaps and opportunities to establish a reliable starting point.' },
      { n: '03', title: 'Develop the solution', text: 'We build the relevant dashboards, analytical models, data pipelines or AI applications.' },
      { n: '04', title: 'Turn findings into action', text: 'We explain the results, support implementation and help assess the value delivered.' },
    ],
  },
  cta: {
    title: "Let's start with a conversation.",
    text: 'You do not need to have a fully defined analytics strategy to get started. If you have a business challenge, a reporting problem or an idea worth exploring, we would be happy to discuss it.',
    button: 'Start a Conversation',
  },
};

/* ------------------------------ 2. ABOUT ------------------------------ */
export const about = {
  eyebrow: 'About Us',
  title: 'Numbers tell you what happened. Understanding them helps you decide what comes next.',
  lead: 'At AnalytIQ Labs, we believe that good decisions begin with the right questions.',
  image: { src: aboutTeam, width: 1000, height: 750, alt: 'A team collaborating around a table with dashboards displayed on screens behind them' },
  paragraphs: [
    'Businesses today have access to more information than ever before. Yet many organisations still struggle to bring their data together, understand changing trends and identify what needs attention. Reports may show the numbers, but the real value lies in understanding what those numbers mean for the business.',
    'We work at that intersection of data, technology and business understanding.',
    'AnalytIQ Labs is being built around a simple idea: analytics should be practical, understandable and useful. We combine analytical thinking, technical expertise and an understanding of business requirements to help organisations make better use of their information.',
    'Whether a business needs a reliable reporting system, a consolidated dashboard, a predictive model or a more structured approach to data, our focus remains the same—understand the requirement first and build a solution that serves a clear purpose.',
  ],
  quote: 'We believe successful technology is not measured by how complicated it looks. It is measured by how well it solves the problem it was built for.',
  mission: {
    title: 'Our Mission',
    text: 'To help organisations make informed decisions by transforming business data into meaningful insights, practical analytics solutions and intelligent applications that support sustainable growth.',
  },
  vision: {
    title: 'Our Vision',
    text: 'To become a trusted analytics and technology partner for businesses seeking clarity, efficiency and long-term value through data, artificial intelligence and continuous innovation.',
  },
  values: {
    title: 'Our Core Values',
    items: [
      { title: 'Integrity and trust', text: 'We value honest communication, responsible data handling and transparent working relationships.' },
      { title: 'Curiosity and problem-solving', text: 'We ask questions, explore alternatives and look beyond the obvious to find meaningful answers.' },
      { title: 'Purposeful innovation', text: 'We adopt technology when it adds genuine value, not simply because it is new.' },
      { title: 'Collaboration', text: 'We believe the best solutions emerge when technical teams and business users work together.' },
      { title: 'Continuous learning', text: 'We keep learning, refining our methods and adapting to the changing needs of businesses.' },
    ],
  },
};

/* ------------------------------ 3. SERVICES ------------------------------ */
export const services = {
  eyebrow: 'Our Services',
  title: 'Our Services',
  lead: 'At AnalytIQ Labs, we offer services that address the complete journey from raw data to business action. Engagements can be tailored to a specific requirement or developed as part of a broader analytics strategy.',
  items: [
    {
      id: 'data-analytics-business-intelligence',
      title: 'Data Analytics & Business Intelligence',
      intro: 'We help businesses understand their performance through accurate reporting, meaningful analysis and interactive visualisation.',
      list: [
        'Business performance and KPI dashboards',
        'Power BI and interactive reporting solutions',
        'Sales, finance, HR and operational analytics',
        'Trend analysis and performance comparisons',
        'Management reports and executive dashboards',
        'Automated reporting and spreadsheet optimisation',
      ],
      outro: 'The goal: less time compiling reports and more time understanding what they reveal.',
      image: { src: svcAnalytics, width: 1000, height: 750, alt: 'A business intelligence dashboard with charts, maps and KPIs on a monitor' },
    },
    {
      id: 'data-science-predictive-analytics',
      title: 'Data Science & Predictive Analytics',
      intro: 'Historical data can help organisations prepare for what may happen next. We use statistical analysis and machine learning to explore trends and estimate future outcomes.',
      list: [
        'Demand and sales forecasting',
        'Customer behaviour and segmentation',
        'Customer retention and churn analysis',
        'Anomaly and outlier detection',
        'Statistical modelling and hypothesis testing',
        'Predictive model development and evaluation',
      ],
      outro: 'Every model is developed with attention to data quality, validation and the business context in which it will be used.',
      image: { src: svcDataScience, width: 1000, height: 753, alt: 'A data scientist examining colourful visual analytics on a large screen' },
    },
    {
      id: 'artificial-intelligence-machine-learning',
      title: 'Artificial Intelligence & Machine Learning',
      intro: 'We explore how AI can be applied to everyday business challenges, helping teams reduce repetitive work, identify patterns and support better decisions.',
      list: [
        'Custom machine learning applications',
        'AI-assisted business workflows',
        'Natural language processing solutions',
        'Document classification and information extraction',
        'Intelligent decision-support applications',
        'Generative AI and knowledge-assistant solutions',
      ],
      outro: 'Our approach is to identify a suitable use case first and then determine whether AI is the right solution.',
      image: { src: svcAi, width: 1000, height: 667, alt: 'Colleagues discussing a machine learning model displayed on a computer screen' },
    },
    {
      id: 'data-engineering-management',
      title: 'Data Engineering & Management',
      intro: 'Reliable analytics begins with reliable data. We help organisations connect information from different sources and prepare it for consistent reporting and analysis.',
      list: [
        'Data collection and integration',
        'Data cleaning and transformation',
        'SQL database development and optimisation',
        'ETL and ELT pipeline development',
        'Data warehouse and reporting architecture',
        'Data validation and quality checks',
      ],
      outro: 'We help create a dependable data foundation that can grow with the business.',
      image: { src: svcEngineering, width: 1000, height: 1000, alt: 'An engineer working at a desk with data pipeline diagrams on two monitors' },
    },
    {
      id: 'analytics-consulting',
      title: 'Analytics Consulting',
      intro: 'Not every organisation needs a large analytics platform. Sometimes, the right starting point is identifying the problem, reviewing existing reports and deciding what deserves attention first.',
      list: [
        'Data and reporting assessments',
        'KPI definition and measurement frameworks',
        'Analytics strategy and project roadmaps',
        'Business process and performance analysis',
        'Tool selection and solution planning',
        'Analytics implementation guidance',
      ],
      outro: 'We help businesses focus on the questions that matter before investing in technology.',
      image: { src: svcConsulting, width: 1000, height: 1000, alt: 'A consulting session in a bright meeting room with a dashboard on a wall screen' },
    },
    {
      id: 'corporate-training-skill-development',
      title: 'Corporate Training & Skill Development',
      intro: 'Tools become more valuable when people know how to use them. Our proposed training programmes focus on practical learning, guided exercises and real-world applications.',
      list: [
        'Power BI and dashboard development',
        'Excel, SQL and data analysis',
        'Python for data science',
        'Statistics and exploratory data analysis',
        'Machine learning fundamentals',
        'Applied AI and business analytics',
      ],
      outro: 'Programmes can be tailored to the existing skill level and learning objectives of the participants.',
      image: { src: svcTraining, width: 1000, height: 750, alt: 'A trainer presenting analytics charts to a group of learners taking notes' },
    },
  ],
};

/* ------------------------------ 4. INDUSTRIES ------------------------------ */
export const industries = {
  eyebrow: 'Industries We Serve',
  title: 'Industries We Serve',
  lead: 'Different industries face different challenges, but the need to understand data is common to all of them. Our solutions can be adapted to the information, processes and objectives of each organisation.',
  items: [
    {
      title: 'Healthcare & Life Sciences',
      text: 'Operational reporting, resource utilisation, healthcare process analytics and research data analysis, with appropriate safeguards for sensitive information.',
      image: { src: indHealthcare, width: 1000, height: 667, alt: 'Healthcare professionals reviewing operational dashboards in a hospital setting' },
    },
    {
      title: 'Retail & E-commerce',
      text: 'Sales trends, customer purchasing patterns, inventory analysis and campaign performance.',
      image: { src: indRetail, width: 1000, height: 667, alt: 'A retail analyst reviewing sales dashboards with a store in the background' },
    },
    {
      title: 'Manufacturing & Engineering',
      text: 'Production performance, quality analysis, downtime trends and operational efficiency.',
      image: { src: indManufacturing, width: 1000, height: 800, alt: 'Factory engineers in hard hats reviewing production performance on a display' },
    },
    {
      title: 'Banking, Finance & Professional Services',
      text: 'Financial reporting, portfolio and business performance analysis, risk indicators and process monitoring, subject to applicable requirements.',
      image: { src: indBanking, width: 1000, height: 563, alt: 'A finance professional reviewing financial reports and charts on screens' },
    },
    {
      title: 'Human Resources & Recruitment',
      text: 'Workforce trends, recruitment funnel analysis, employee metrics and resource planning.',
      image: { src: indHr, width: 568, height: 378, alt: 'An HR team discussing a recruitment funnel chart on a large display' },
    },
    {
      title: 'Education & Research',
      text: 'Student performance analysis, enrolment trends, academic reporting and research data support.',
      image: { src: indEducation, width: 1000, height: 563, alt: 'An education analyst reviewing student performance dashboards at a desk' },
    },
  ],
  outro: 'We also welcome opportunities to work with startups, SMEs, technology companies, logistics providers and other organisations that want to make better use of their data.',
};

/* ------------------------------ 5. WHY CHOOSE ------------------------------ */
export const whyChoose = {
  eyebrow: 'Why Choose AnalytIQ Labs?',
  title: 'Why Choose AnalytIQ Labs?',
  statement: 'We start with your business, not with a software tool.',
  text: 'We take time to understand what you want to achieve, the difficulties your team faces and the information available to support the work. This helps us recommend a solution that fits the requirement rather than forcing the requirement to fit a particular technology.',
  items: [
    { title: 'Practical solutions over unnecessary complexity', text: 'We aim to keep our solutions understandable, maintainable and relevant to the people who will use them.' },
    { title: 'Clarity throughout the engagement', text: 'We explain the scope, assumptions, deliverables and limitations before work begins. You should know what is being developed and how progress will be assessed.' },
    { title: 'Responsible use of data and AI', text: 'We recognise the importance of confidentiality, appropriate access, data quality and human oversight. We consider these factors as part of solution design.' },
    { title: 'Flexible engagement', text: 'Whether you need help with a single dashboard, a defined analytics project, specialist support or a training programme, the scope can be planned around your needs.' },
    { title: 'Knowledge sharing', text: 'We aim to help your team understand the solution, interpret its results and manage the work more confidently after handover.' },
  ],
};

/* ------------------------------ 6. ENGAGEMENT ------------------------------ */
export const engagement = {
  eyebrow: 'Our Engagement Models',
  title: 'Our Engagement Models',
  lead: 'We understand that businesses have different budgets, priorities and internal capabilities. Depending on the requirement, we can structure engagements in the following ways.',
  items: [
    { title: 'Project-based engagement', text: 'A defined scope, agreed deliverables and milestones.' },
    { title: 'Consulting engagement', text: 'Expert guidance on analytics strategy, reporting and implementation decisions.' },
    { title: 'Ongoing analytics support', text: 'Continued assistance with reports, data pipelines, improvements and maintenance.' },
    { title: 'Dedicated resource support', text: 'Analytics or data professionals supporting agreed project requirements.' },
    { title: 'Corporate training', text: 'Structured learning programmes for teams and organisations.' },
  ],
  outro: 'The engagement model, timelines and commercials will be discussed and agreed before the project begins.',
};

/* ------------------------------ 7. PRIVACY ------------------------------ */
export const privacy = {
  eyebrow: 'Data Privacy',
  title: 'Our Commitment to Data Privacy',
  lead: 'Business data deserves careful handling. We recognise that analytics projects may involve commercially confidential information, employee records or sensitive customer data.',
  listTitle: 'Our intended working principles include:',
  list: [
    'Access to data based on project requirements and authorised permissions.',
    'Appropriate confidentiality arrangements.',
    'Secure transfer and handling procedures agreed with the client.',
    'Data minimisation and retention practices appropriate to the engagement.',
    'Documentation of relevant assumptions, limitations and responsibilities.',
  ],
  outro: 'Specific safeguards and contractual commitments will be established according to the nature of each project and applicable law.',
};

/* ------------------------------ 8. FAQ ------------------------------ */
export const faq = {
  eyebrow: 'FAQ',
  title: 'Frequently Asked Questions',
  items: [
    { q: 'What does AnalytIQ Labs do?', a: 'AnalytIQ Labs focuses on data analytics, business intelligence, data science, AI and machine learning, data engineering, consulting and skill development.' },
    { q: 'Can you help us if our data is spread across multiple Excel files and systems?', a: 'Yes. The first step is to understand the available data sources, their formats and quality. Based on the assessment, we can propose ways to consolidate, clean and organise the information for analysis and reporting.' },
    { q: 'Do we need a large amount of data to get started?', a: 'Not necessarily. A focused reporting or analytics project may begin with a small dataset. The appropriate approach depends on the question being investigated and whether the available information is sufficient to answer it reliably.' },
    { q: 'Can you build customised dashboards?', a: 'Yes. Dashboard requirements can be tailored to specific teams, reporting needs, KPIs and available data sources.' },
    { q: 'Do you provide AI solutions for small and medium-sized businesses?', a: 'We can assess AI use cases for businesses of different sizes. The recommendation will depend on the business problem, feasibility, data readiness, cost and expected value.' },
    { q: 'Do you provide training for college students and working professionals?', a: "Training programmes can be designed for students, graduates, working professionals and corporate teams, with content adjusted to the audience's experience and objectives." },
    { q: 'How much do your services cost?', a: 'Pricing depends on the scope, data complexity, tools, integrations, delivery schedule and support required. We discuss the requirement and provide a proposal before proceeding.' },
    { q: 'How do we start a project?', a: 'Contact us with a brief description of your challenge. We can arrange an initial discussion to understand your objectives and determine the appropriate next steps.' },
  ],
};

/* ------------------------------ 9. CONTACT ------------------------------ */
export const contact = {
  eyebrow: 'Contact Us',
  title: "Have a Business Challenge? Let's Talk.",
  lead: 'Sometimes the first step towards better decisions is simply asking the right question.',
  text: 'Tell us what you are trying to understand, improve or build. We would be glad to explore how data analytics and technology might help.',
  button: 'Start a Conversation',
  image: { src: contactTeam, width: 1000, height: 558, alt: 'A bright modern workspace with a laptop showing analytics and colleagues collaborating' },
};
