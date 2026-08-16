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

// NOTE: URLs were pulled out of the link annotations embedded in your resume
// PDF. The titles are still the working titles from the resume — swap in the
// exact published titles when you get a chance.
export const publications = [
  {
    type: 'Paper',
    title: 'Custom High-Resolution Wireless Quadrature Digitizer PCB for MRI Radar Prototyping',
    href: 'https://drive.google.com/file/d/1aab2UVg8FGkZnafTaW_y5S8W_sdfdBil/view',
    related: [],
  },
  {
    type: 'Abstract',
    title: 'Evaluation of Event Positioning Strategies to Optimize Contrast Recovery in a TOFPET Brain Insert for Simultaneous PET/MRI',
    href: 'https://ieeexplore.ieee.org/document/11286259',
    related: [],
  },
  {
    type: 'Abstract',
    title: 'A Novel Inter-Crystal Scattering Positioning Method Based on Energy Ordering and First-Interaction Crystal Correlation',
    href: 'https://ieeexplore.ieee.org/document/11286500',
    related: [],
  },
];
