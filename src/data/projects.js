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
//   tags      Short keywords shown as pills.
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
    tags: ['Altium', 'High-speed digital', 'DDR3', 'Signal integrity', 'Chip-on-board'],
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
    tags: ['KiCad', 'High-speed digital', 'JTAG', 'Clock routing'],
    links: [
      // { label: 'GitHub', href: 'https://github.com/fwdesai/...' },
    ],
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
    tags: ['PCB design', 'Analog front-end', 'ADC', 'MicroPython', 'RP2040 PIO', 'DSP'],
    links: [
      // { label: 'Conference paper', href: '...' },
      // { label: 'GitHub', href: 'https://github.com/fwdesai/...' },
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

  {
    slug: 'pet-monte-carlo',
    title: 'PET Imaging Monte Carlo Simulations',
    subtitle: 'Inter-crystal scatter correction and event positioning',
    org: 'Stanford Molecular Imaging Instrumentation Laboratory',
    period: 'Mar 2024 – Jun 2025',
    summary:
      'Custom Monte Carlo physics simulations analyzing large datasets to design and validate ' +
      'inter-crystal scatter correction algorithms and event-positioning strategies for PET imaging.',
    tags: ['Monte Carlo', 'Medical imaging', 'Python', 'Data analysis'],
    links: [
      // { label: 'Event Positioning (IEEE NSS/MIC)', href: '...' },
      // { label: 'Inter-Crystal Scattering (IEEE NSS/MIC)', href: '...' },
    ],
    cover: null,
    images: [],
    sections: [
      {
        heading: 'Overview',
        body: [
          'Developed and executed custom Monte Carlo physics simulations, analyzing large ' +
            'datasets to design and validate inter-crystal scatter correction algorithms and ' +
            'event-positioning strategies for PET imaging.',
        ],
      },
      {
        heading: 'Publications',
        body: [
          'Two conference papers accepted for presentation at the IEEE Nuclear Science ' +
            'Symposium & Medical Imaging Conference (NSS/MIC), with abstracts published in the ' +
            'conference proceedings: Event Positioning, and Inter-Crystal Scattering.',
        ],
      },
    ],
  },

  {
    slug: 'riscv-bare-metal',
    title: 'Bare-metal Systems Programming',
    subtitle: 'C libraries and drivers on a Mango Pi RISC-V board',
    org: 'Personal project',
    period: '2025',
    summary:
      'Bare-metal C libraries and drivers written from scratch for a Mango Pi RISC-V board — ' +
      'I/O, memory management, interrupts, keyboard input, graphics, printf, and a terminal interface.',
    tags: ['C', 'RISC-V', 'Bare metal', 'Drivers'],
    links: [
      // { label: 'GitHub', href: 'https://github.com/fwdesai/...' },
    ],
    cover: null,
    images: [],
    sections: [
      {
        heading: 'Overview',
        body: [
          'Implemented bare-metal C libraries and drivers for I/O, memory management, ' +
            'interrupts, keyboard input, graphics, printf, and a terminal interface on a ' +
            'Mango Pi RISC-V board.',
        ],
      },
    ],
  },
];

// Look up a single project by its slug.
export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
