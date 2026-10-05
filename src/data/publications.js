// ---------------------------------------------------------------------------
// PUBLICATIONS — papers, abstracts, and posters.
//
// Drives /publications. Each entry shows the category, the title, the author
// list, the venue, and a short labelled link.
//
// FIELDS
//   type       'Paper' | 'Abstract' | 'Poster' — free text, shown as typed.
//   title      The exact published title.
//   authors    Optional. Array of names in published order. Any name matching
//              SELF_NAMES below is emphasized. Omit and the line is skipped.
//   venue      Optional. Conference or journal, shown on its own line. Omit
//              and the line is skipped.
//   href       Full URL. Leave it '' and the entry renders without a link line
//              instead of showing a dead one.
//   linkLabel  Optional. Short visible link text, e.g. 'PDF' or 'IEEE Xplore'.
//              Falls back to 'Link' when missing. The raw URL is never shown.
//   related    Optional. Other items about the SAME work — e.g. the poster that
//              goes with a paper. They render grouped underneath, indented and
//              joined by a rule, so it reads as one piece of work rather than
//              three separate publications. Same fields as above, minus
//              `related` (grouping is one level deep).
//
// Array order is display order; nothing sorts it for you.
//
// GROUPING EXAMPLE
//   {
//     type: 'Paper',
//     title: 'A Custom Quadrature Digitizer for MRI Radar',
//     authors: ['Finley Desai', 'A. Coauthor'],
//     venue: 'Some Conference 2026',
//     href: 'https://doi.org/10.1234/example',
//     linkLabel: 'DOI',
//     related: [
//       { type: 'Poster', title: 'Same work, poster version', href: 'https://…' },
//       { type: 'Abstract', title: 'Extended abstract', href: 'https://…' },
//     ],
//   }
// ---------------------------------------------------------------------------

// Name variants to emphasize in author lists. Initials vary between papers,
// so each spelling that appears needs its own entry.
export const SELF_NAMES = ['Finley Desai', 'F. Desai'];

export const publications = [
  {
    type: 'Conference Paper',
    title: 'High-Res Wireless Quadrature Digitizer for MRI Radar Prototyping',
    authors: [
      'Finley Desai',
      'Fraser Robb',
      'Miti Shah',
      'Shreyas Vasanawala',
      'John Pauly',
      'Greig Scott',
    ],
    venue: 'International Society for Magnetic Resonance in Medicine (ISMRM)',
    href: 'https://drive.google.com/file/d/1aab2UVg8FGkZnafTaW_y5S8W_sdfdBil/view',
    linkLabel: 'PDF',
    related: [],
  },
  {
    type: 'Abstract',
    title: 'Evaluation of Event Positioning Strategies to Optimize Contrast Recovery in a TOFPET Brain Insert for Simultaneous PET/MRI',
    authors: ['F. Desai', 'M.N. Ullah', 'J. Fisher', 'C. S. Levin'],
    venue: 'IEEE NSS/MIC 2025',
    href: 'https://ieeexplore.ieee.org/document/11286259',
    linkLabel: 'IEEE Xplore',
    related: [],
  },
  {
    type: 'Abstract',
    title: 'A Novel Inter-Crystal Scattering Positioning Method Based on Energy Ordering and First-Interaction Crystal Correlation',
    authors: ['H.S. Shim', 'F. Desai', 'M. N. Ullah', 'C. S. Levin', 'M.S. Lee', 'J.S. Lee'],
    venue: 'IEEE NSS/MIC 2025',
    href: 'https://ieeexplore.ieee.org/document/11286500',
    linkLabel: 'IEEE Xplore',
    related: [],
  },
];
