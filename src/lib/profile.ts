import resumePdf from '@/assets/Eric_Njiraini_Resume.pdf';

// Single source for contact details used across the header, hero, contact and footer.
export const profile = {
  name: 'Eric Njiraini',
  role: 'Data Analytics Manager',
  location: 'Nairobi, Kenya',
  email: 'menjiraini@gmail.com',
  phone: { display: '+254 700 463 660', href: 'tel:+254700463660' },
  github: 'https://github.com/EricNjiraini',
  linkedin: 'https://www.linkedin.com/in/eric-njiraini/',
  resume: resumePdf,
};

export const siteUrl = 'https://ericnjiraini.com';

// Keep in sync with the <title> in index.html, which the prerendered home page uses.
export const homeTitle = 'Eric Njiraini — Data Analytics Manager | Data & AI Strategy, MLOps, AWS';
export const pageTitle = (title: string) => `${title} | Eric Njiraini`;

export const navSections = ['about', 'experience', 'skills', 'insights', 'contact'] as const;

export const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};
