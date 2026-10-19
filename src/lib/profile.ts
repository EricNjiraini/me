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

export const navSections = ['about', 'experience', 'skills', 'projects', 'contact'] as const;

export const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};
