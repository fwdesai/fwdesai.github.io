// ---------------------------------------------------------------------------
// Site-wide settings. Edit these and the change flows everywhere:
// the nav, the footer, page titles, and social preview cards.
// ---------------------------------------------------------------------------

export const SITE = {
  name: 'Finley Desai',
  role: 'Electrical Engineering, Stanford',
  email: 'fwdesai@stanford.edu',
  linkedin: 'https://www.linkedin.com/in/finleydesai/',
  github: 'https://github.com/fwdesai',
  description:
    'Finley Desai — B.S./M.S. EE at Stanford. Boards for custom silicon: ' +
    'chip-on-board modules with wire-bonded bare die, ASIC test boards, and ' +
    'mixed-signal front-ends.',

  // Filename of the resume PDF inside public/. Swap this string when you
  // upload a newer version (see README for the one command to regenerate
  // the preview image).
  resumePdf: '/Desai_Resume.pdf',
  resumeImage: '/resume-preview.webp',
};

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Selected Projects' },
  { href: '/publications', label: 'Publications' },
  { href: '/resume', label: 'Resume' },
];
