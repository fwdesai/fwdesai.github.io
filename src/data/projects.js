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
//             Inline links use [label](url); http(s) links open in a new tab.
// ---------------------------------------------------------------------------

export const projects = [
  {
    slug: 'mri-quadrature-digitizer',
    title: 'Wireless Quadrature Digitizer for MRI Radar',
    subtitle: 'Dual-channel high-res digitizer for radar-based vital signs monitoring',
    org: 'Stanford Magnetic Resonance Systems Research Lab',
    period: null,
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
          'See the [conference paper](https://drive.google.com/file/d/1aab2UVg8FGkZnafTaW_y5S8W_sdfdBil/view) for a more detailed writeup.',
          "A recent trend in MRI technology has been electromagnetic non-contact respiratory/cardiac sensing. For initial research prototyping, network analyzer time sweeps, software-defined"+
          " radios (e.g. Ettus, BladeRF, Pluto) and retail dual-channel digitizers (e.g. Digilent Analog Discovery) greatly accelerate development, but limit dynamic range"+
          " and MRI compatibility. This board serves as a custom quadrature digitizer chain employing high-dynamic-range ADCs, with WiFi/Bluetooth interfacing, and the option"+
          " to employ mm-wave modules or quadrature demodulators for arbitrary frequency sensing."
        ],
      },
      {
        heading: 'Hardware',
        body: [
            "- ADA4940-2: Dual-channel differential amplifier.",
            "- LTC2508: 32-bit differential SAR ADC, one for each channel. Acquisition synced through the interface with the Pico W.",
            "- Raspberry Pi Pico W: Chosen for its programmable I/O (PIO) subsystem which acts as a set of dedicated coprocessors running independently of the main CPU cores."+
            " Interfaces with the ADCs and allows for WiFi/Bluetooth communication."
        ],
      },
      {
        heading: 'Firmware and Signal Processing',
        body: [
          "A custom driver was developed in MicroPython using the Pi Pico’s Programmable I/O (PIO) subsystem to provide a high-speed interface to the ADCs."+
          " PIO programs use a compact instruction set in which each instruction executes in a single clock cycle, allowing FPGA-like timing and speed."+
          " This approach offloads ADC communication from the CPU, allowing it to focus on wireless data transmission.",
          "Singular spectrum analysis was used to isolate respiratory and cardiac motion from the radar signal.",
        ],
      },
    ],
  },

  {
    slug: 'robotics-chip-on-board',
    title: 'Robotics Chip-on-Board Module',
    subtitle: 'High-speed HDI board for robotics',
    org: 'Stanford Tambe Lab',
    period: 'In Progress',
    summary:
      "IN PROGRESS. A 16-layer HDI board integrating custom silicon (designed by a PhD student) for robot inference. HyperBus interface runs at DDR speeds up to 800 MHz.",
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
          'Designing the schematics and layout for a 16-layer HDI board that carries a custom ' +
            'inference chipset — a central hub chip plus 16 spoke chips — designed by a PhD ' +
            'student in the lab. Roughly 50 ICs sit on the board in total.',
        ],
      },
      {
        heading: 'Hardware',
        body: [
          '- Custom silicon designed by a PhD student in the lab: one central hub chip and 16 ' +
            'spoke chips.',
          '- Each spoke chip is paired with its own Infineon flash and RAM.',
          '- The hub connects to the spokes over a HyperBus interface running at DDR speeds up ' +
            'to 800 MHz.',
          '- A 240-pin connector carries board power along with the interfaces that leave the ' +
            'board, including UART.',
        ],
      },
      {
        heading: 'Design Work',
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
    period: null,
    summary:
      "A test board in KiCad for a PhD student's custom hardware accelerator, with JTAG and " +
      "peripheral interfaces and clock routing optimized for operation up to 600 MHz.",
    links: [{ label: 'GitHub', href: 'https://github.com/fwdesai/KIRIN-Test-Board' }],

    cover: '/images/projects/accelerator-test-pcb/board.webp',

    images: [
      {
        src: '/images/projects/accelerator-test-pcb/board.webp',
        alt: 'KIRIN test board layout, top side',
      },
      {
        src: '/images/projects/accelerator-test-pcb/back.webp',
        alt: 'KIRIN test board layout, back side, showing the BGA decoupling capacitors and via field',
      },
    ],
    sections: [
      {
        heading: 'Overview',
        body: [
            "A test board in KiCad for a PhD student's custom hardware accelerator, with JTAG and " +
            "peripheral interfaces and clock routing optimized for operation up to 600 MHz.",
        ],
      },
    ],
  },

  {
    slug: 'esp32-pcb',
    title: 'ESP32 PCB with Integrated Trace Antenna',
    subtitle: '',
    org: '',
    period: '',
    summary: "Inspired by Phil's Lab YouTube channel. ESP32-based PCB with a meandered printed inverted-F antenna.",
    links: [
       { label: 'GitHub', href: 'https://github.com/fwdesai/ESP32-PCB-w-Trace-Antenna' },
            
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
    sections: [
      {
        heading: 'Overview',
        body: [
            "Inspired by Phil's Lab YouTube channel. ESP32-based PCB with a meandered printed inverted-F antenna for communication at 2.4 GHz. Has an IMU connected via an SPI interface." 
        ],
      }
    ],
  },
];

// Look up a single project by its slug.
export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
