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
    subtitle: 'High-speed HDI board for robot inference',
    org: 'Stanford Tambe Lab',
    period: 'In Progress',
    summary:
      'A roughly 16-layer high-speed board in Altium integrating ~50 ICs, including ' +
      'wire-bonded devices, for on-robot inference.',
    links: [
      // { label: 'GitHub', href: 'https://github.com/fwdesai/...' },
    ],
    // Watermarked copy — the clean original is board_v0.webp in the same
    // folder, ready to swap in when the board is no longer a draft.
    cover: '/images/projects/robotics-chip-on-board/board_v0-draft.webp',
    images: [],
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
    subtitle: 'Test platform for a custom accelerator',
    org: 'Stanford Accelerate Lab',
    period: 'May 2026 – Jun 2026',
    summary:
      'A high-speed test board in KiCad for a custom hardware accelerator, with JTAG and ' +
      'peripheral interfaces and clock routing optimized for operation up to 800 MHz.',
    links: [{ label: 'GitHub', href: 'https://github.com/fwdesai/KIRIN-Test-Board' }],

    cover: '/images/projects/accelerator-test-pcb/board.webp',

    images: [
      {
        src: '/images/projects/accelerator-test-pcb/board.webp',
        alt: 'KIRIN test board layout, top side',
      },
    ],
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
    subtitle: 'Dual channel high-res digitizer for radar-based vital signs monitoring',
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
    cover: '/images/projects/mri-quadrature-digitizer/board_v2.webp',

    images: [
      {
        src: '/images/projects/mri-quadrature-digitizer/assembled.webp',
        alt: 'Assembled quadrature digitizer board',
      },
      {
        src: '/images/projects/mri-quadrature-digitizer/block_diagram.webp',
        alt: 'Block diagram of the digitizer signal chain',
      },
    ],

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

  // ---------------------------------------------------------------------
  // TODO(Finley): fill in title, subtitle, summary, and sections.
  // Personal project, so `org` and `period` are left empty on purpose —
  // the meta line is hidden entirely when both are blank.
  // The board silkscreen reads "RF Sense v1.0" if you want that as a title.
  // ---------------------------------------------------------------------
  {
    slug: 'esp32-pcb',
    title: 'ESP32 PCB',
    subtitle: '',
    org: '',
    period: '',
    summary: '',
    links: [
      // { label: 'GitHub', href: 'https://github.com/fwdesai/...' },
    ],
    cover: '/images/projects/esp32-pcb/board_assembled.webp',
    images: [
      {
        src: '/images/projects/esp32-pcb/board_assembled.webp',
        alt: 'Assembled RF Sense v1.0 board with USB-C connector and reset and boot buttons',
        caption: '',
      },
      {
        src: '/images/projects/esp32-pcb/board_virtual.webp',
        alt: '3D render of the RF Sense v1.0 board showing the PCB trace antenna',
        caption: '',
      },
    ],
    sections: [],
  },
];

// Look up a single project by its slug.
export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
