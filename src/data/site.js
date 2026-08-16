// ---------------------------------------------------------------------------
// Site-wide settings. Edit these and the change flows everywhere:
// the nav, the footer, page titles, and social preview cards.
// ---------------------------------------------------------------------------

export const SITE = {
  name: 'Finley Desai',
  role: 'Electrical Engineering, Stanford',
  email: 'fwdesai@stanford.edu',
  description:
    'Finley Desai — electrical engineering at Stanford. High-speed PCB design, ' +
    'analog front-ends, and embedded systems for research instrumentation.',

  // Filename of the resume PDF inside public/. Swap this string when you
  // upload a newer version (see README for the one command to regenerate
  // the preview image).
  resumePdf: '/Desai_Resume_8_16.pdf',
  resumeImage: '/resume-preview.webp',
  resumeUpdated: 'August 2026',
};

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Selected Projects' },
  { href: '/resume', label: 'Resume' },
];
