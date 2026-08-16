// ---------------------------------------------------------------------------
// PROJECTS
//
// This one file drives both /projects (the grid) and every /projects/<slug>
// detail page. To add a project, copy an entry below and change the fields —
// you do NOT need to create a new page file.
//
// IMAGES
//   Put photos in:  public/images/projects/<slug>/
//   Reference them: '/images/projects/<slug>/filename.jpg'
//   (the leading slash means "from the site root" — public/ is the root)
//
//   `cover`  is the single photo shown on the /projects grid card.
//   `images` is the gallery on the detail page. Leave either empty and the
//            site renders a neutral placeholder instead of breaking.
//
// FIELDS
//   slug      URL segment — /projects/<slug>. Lowercase, hyphens, no spaces.
//   title     Project name.
//   subtitle  One short line under the title.
//   org       Lab, company, or "Personal project".
//   period    Human-readable date range.
//   summary   1–2 sentences. Shown on the grid card and as the page intro.
//   links     [{ label, href }] — GitHub, papers, etc. Omit if none.
//   cover     Path to the card image, or null.
//   images    [{ src, alt, caption }] gallery entries.
//   sections  [{ heading, body: [...] }] — the write-up. Each body string is
//             one paragraph. A string starting with '- ' becomes a bullet.
// ---------------------------------------------------------------------------

export const projects = [
  {
    slug: 'robotics-chip-on-board',
    title: 'Robotics Chip-on-Board Module',
    subtitle: '16-layer high-speed PCB for robot inference',
    org: 'Stanford Tambe Lab',
    period: 'Jun 2026 – Present',
    summary:
      'A roughly 16-layer high-speed board in Altium integrating ~50 ICs, including ' +
      'wire-bonded devices, for on-robot inference.',
    links: [
      // { label: 'GitHub', href: 'https://github.com/fwdesai/...' },
    ],
    cover: null, // e.g. '/images/projects/robotics-chip-on-board/board-top.jpg'
    images: [
      // { src: '/images/projects/robotics-chip-on-board/board-top.jpg',
      //   alt: 'Top side of the assembled module',
      //   caption: 'Assembled board, top side.' },
    ],
    sections: [
      {
        heading: 'Overview',
        body: [
          'Designing schematics and layout for a ~16-layer high-speed PCB in Altium ' +
            'for robot inference, integrating approximately 50 ICs including wire-bonded devices.',
        ],
      },
      {
        heading: 'Design work',
        body: [
          '- Developed the controlled-impedance stackup and the microvia / blind-via architecture.',
          '- Set DDR3-speed routing constraints from pre-layout signal-integrity analysis in ' +
            'MATLAB Parallel Link Designer and Signal Integrity Toolbox.',
          '- Integrated wire-bonded die alongside conventionally packaged parts on the same substrate.',
        ],
      },
    ],
  },

  {
    slug: 'accelerator-test-pcb',
    title: 'Hardware Accelerator Test PCB',
    subtitle: '800 MHz test platform for a custom accelerator',
    org: 'Stanford Accelerate Lab',
    period: 'May 2026 – Jun 2026',
    summary:
      'A high-speed test board in KiCad for a custom hardware accelerator, with JTAG and ' +
      'peripheral interfaces and clock routing optimized for operation up to 800 MHz.',
    links: [{ label: 'GitHub', href: 'https://github.com/fwdesai/KIRIN-Test-Board' }],
    cover: null,
    images: [],
    sections: [
      {
        heading: 'Overview',
        body: [
          'Designed a high-speed test PCB in KiCad for a custom hardware accelerator, ' +
            'integrating JTAG and peripheral interfaces and optimizing clock routing for ' +
            'operation up to 800 MHz.',
        ],
      },
    ],
  },

  {
    slug: 'mri-quadrature-digitizer',
    title: 'Wireless Quadrature Digitizer for MRI Radar',
    subtitle: 'Dual-channel high-resolution digitizer for contactless vital-sign monitoring',
    org: 'Stanford Magnetic Resonance Systems Research Lab',
    period: 'Jun 2025 – Jan 2026',
    summary:
      'A custom dual-channel quadrature digitizer with high-resolution ADCs and an analog ' +
      'front-end for continuous-wave radar vital-sign monitoring inside an MRI bore — about ' +
      '80 dB better dynamic range than the SDR-based approach it replaced.',
    links: [
      {
        label: 'Conference paper',
        href: 'https://drive.google.com/file/d/1aab2UVg8FGkZnafTaW_y5S8W_sdfdBil/view',
      },
      { label: 'GitHub', href: 'https://github.com/fwdesai/iq_radar_digitizer' },
    ],
    cover: null,
    images: [],
    sections: [
      {
        heading: 'Overview',
        body: [
          'Designed a dual-channel quadrature digitizer with high-resolution ADCs and analog ' +
            'front-end circuitry for continuous-wave radar based vital signs monitoring in MRI ' +
            'settings. Measured an approximately 80 dB improvement in dynamic range over the ' +
            'previous SDR-based acquisition.',
        ],
      },
      {
        heading: 'Hardware',
        body: [
          '- Created the schematic and multilayer PCB layout.',
          '- Stuffed and tested the board using oscilloscopes and signal generators.',
        ],
      },
      {
        heading: 'Firmware and signal processing',
        body: [
          '- Developed MicroPython/PIO firmware on a Raspberry Pi Pico W for high-speed ' +
            'synchronized data acquisition and Bluetooth streaming.',
          '- Analyzed radar signal data using singular spectrum analysis to isolate respiratory ' +
            'and cardiac motion.',
        ],
      },
    ],
  },
];

// Look up a single project by its slug.
export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
