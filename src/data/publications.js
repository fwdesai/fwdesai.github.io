// ---------------------------------------------------------------------------
// PUBLICATIONS — papers, abstracts, and posters.
//
// Drives /publications. Add an entry and it shows up; newest first.
//
// FIELDS
//   title   Required. The exact published title.
//   type    'Paper' | 'Abstract' | 'Poster' | anything else you want shown.
//   venue   Conference or journal. Optional.
//   year    Shown next to the venue. Optional.
//   href    Link to the PDF, DOI, or proceedings page. Optional — leave it
//           empty ('') and the title renders as plain text instead of a dead
//           link, so an entry with no URL yet still looks intentional.
//   note    Optional extra line, e.g. 'Accepted, to appear'.
//
// Order the array however you want them displayed. Nothing sorts it for you.
// ---------------------------------------------------------------------------

export const publications = [
  // NOTE: seeded from your resume. Replace the working titles below with the
  // exact published titles and drop in the proceedings/DOI links.
  {
    title: 'Custom High-Resolution Wireless Quadrature Digitizer PCB for MRI Radar Prototyping',
    type: 'Paper',
    venue: '',
    year: '',
    href: '',
    note: '',
  },
  {
    title: 'Event Positioning',
    type: 'Abstract',
    venue: 'IEEE Nuclear Science Symposium & Medical Imaging Conference (NSS/MIC)',
    year: '',
    href: '',
    note: 'Published in conference proceedings.',
  },
  {
    title: 'Inter-Crystal Scattering',
    type: 'Abstract',
    venue: 'IEEE Nuclear Science Symposium & Medical Imaging Conference (NSS/MIC)',
    year: '',
    href: '',
    note: 'Published in conference proceedings.',
  },
];
