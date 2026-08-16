// ---------------------------------------------------------------------------
// PUBLICATIONS — papers, abstracts, and posters.
//
// Drives /publications. Each entry shows three things: the category, the
// title, and the link itself as visible clickable text.
//
// FIELDS
//   type     'Paper' | 'Abstract' | 'Poster' — free text, shown as typed.
//   title    The exact published title.
//   href     Full URL. Leave it '' and the entry renders without a link line
//            instead of showing a dead one.
//   related  Optional. Other items about the SAME work — e.g. the poster that
//            goes with a paper. They render grouped underneath, indented and
//            joined by a rule, so it reads as one piece of work rather than
//            three separate publications. Same fields as above, minus
//            `related` (grouping is one level deep).
//
// Array order is display order; nothing sorts it for you.
//
// GROUPING EXAMPLE
//   {
//     type: 'Paper',
//     title: 'A Custom Quadrature Digitizer for MRI Radar',
//     href: 'https://doi.org/10.1234/example',
//     related: [
//       { type: 'Poster', title: 'Same work, poster version', href: 'https://…' },
//       { type: 'Abstract', title: 'Extended abstract', href: 'https://…' },
//     ],
//   }
// ---------------------------------------------------------------------------

export const publications = [
  // NOTE: seeded from your resume. Replace these working titles with the
  // exact published titles and drop in the proceedings/DOI links.
  {
    type: 'Paper',
    title: 'Custom High-Resolution Wireless Quadrature Digitizer PCB for MRI Radar Prototyping',
    href: '',
    related: [],
  },
  {
    type: 'Abstract',
    title: 'Event Positioning',
    href: '',
    related: [],
  },
  {
    type: 'Abstract',
    title: 'Inter-Crystal Scattering',
    href: '',
    related: [],
  },
];
