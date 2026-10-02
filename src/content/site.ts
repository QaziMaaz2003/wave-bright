/**
 * ALL site copy lives here.
 *
 * WordPress mapping: each export below becomes either a Page's block content,
 * a Customizer / Site Editor global (siteInfo, nav), or a reusable block pattern.
 * Factual claims (since 1995, nationwide, service lists, address, phone) come from
 * the live site wavcomm.com — anything not on the live site is design copy only.
 */

import type { IconName } from '../components/ui/Icon';
import type { GalleryItem } from '../components/ui/Gallery';

export const img = (name: string) => `/images/${name}.jpg`;

/* ── Global (→ Site Editor: Site Title, Tagline, header/footer template parts) ── */
export const siteInfo = {
  name: 'Wavcomm, Inc.',
  tagline: 'Licensed general contractor specializing in telecommunications infrastructure and wireless tower construction — nationwide since 1995.',
  since: 1995,
  contact: {
    person: 'Kevin Crayne',
    role: 'Operations Manager, Western Region',
    addressLines: ['1429 S. Cucamonga Ave.', 'Ontario, CA 91761'],
    phone: '909-923-0852',
    phoneHref: 'tel:+19099230852',
    fax: '909-923-0854',
    mapQuery: '1429 S. Cucamonga Ave, Ontario, CA 91761',
  },
};

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Contact Us', to: '/contact' },
];

export const footerColumns = [
  {
    title: 'Services',
    links: [
      { label: 'Tower Construction & Erection', to: '/services#tower' },
      { label: 'Civil Site Development', to: '/services#civil' },
      { label: 'Antenna & Line Installation', to: '/services#antenna-line' },
      { label: 'Advanced RF & PIM Testing', to: '/services#testing' },
      { label: 'Maintenance & Upgrades', to: '/services#maintenance' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Home', to: '/' },
      { label: 'Contact Us', to: '/contact' },
      { label: 'Request a bid', to: '/contact#bid' },
    ],
  },
];

/* ── Reusable lists (→ core/list blocks, or a "Service" custom post type) ── */
export const constructionServices = [
  'Antenna and Line installation',
  'Co-locates',
  'Roof Top Installation',
  'Waveguide bridges',
  'In Service Antenna Change Outs and Hot Cuts',
  'Equipment Upgrades',
  'Precision Path Alignment',
  'Troubleshooting',
  'System Inspection and Maintenance',
  'Site Inventories',
  'Site Civil Work',
];

export const testingServices = [
  'PIM Testing',
  'Fiber/OTDR Testing',
  'System Return Loss Testing and Plots',
  'In or Out of Service Testing',
  'Path Alignment',
  'Receive Signal Level Measurement',
  'Antenna and Circular Waveguide XPD',
  'Insertion Loss Testing',
  'Path Loss Calculations',
  'Separate Transmission Line Evaluation',
  'Document Packages',
];

/* ── Home ─────────────────────────────────────────────────────────────────── */
export const home = {
  hero: {
    eyebrow: 'Nationwide Telecommunications Construction Since 1995',
    title: 'We build the infrastructure that carries the signal.',
    text: 'Licensed general contractor specializing in telecommunications infrastructure and wireless tower construction — the installation, modification and testing of cellular and communication towers, delivered on time at a competitive price.',
    image: img('hero-tower-sunset'),
    imageAlt: 'Steel communications tower silhouetted against an orange and purple sunset',
    primary: { label: 'Request a bid', to: '/contact#bid' },
    secondary: { label: 'Our services', to: '/services' },
  },
  stats: [
    { to: 1995, label: 'Licensed contractor since' },
    { to: 30, suffix: '+', label: 'Years of experience' },
    { to: constructionServices.length, label: 'Construction services' },
    { to: testingServices.length, label: 'Test & documentation items' },
  ],
  capabilities: {
    eyebrow: 'Capabilities',
    title: 'Everything from the ground up to the antenna.',
    intro:
      'Our installation crews and technicians are experienced and equipped to install a variety of antenna systems — and to prove they perform once the job is done.',
    items: [
      {
        icon: 'tower',
        title: 'Tower Construction & Erection',
        text: 'Complete installation services for tower erections and buildings, built to spec.',
        to: '/services#tower',
      },
      {
        icon: 'hardhat',
        title: 'Civil Site Development',
        text: 'Site roads, clearing and excavations — the groundwork every reliable site starts with.',
        to: '/services#civil',
      },
      {
        icon: 'antenna',
        title: 'Antenna & Line Installation',
        text: 'Antenna and transmission line installation, waveguide bridges and precision path alignment.',
        to: '/services#antenna-line',
      },
      {
        icon: 'gauge',
        title: 'Advanced RF & PIM Testing',
        text: 'PIM, fiber/OTDR, return loss and more — closed out with a full document package.',
        to: '/services#testing',
      },
      {
        icon: 'swap',
        title: 'Maintenance & Upgrades',
        text: 'In-service change outs, hot cuts, equipment upgrades, troubleshooting and system inspection.',
        to: '/services#maintenance',
      },
      {
        icon: 'building',
        title: 'Rooftop & Co-locates',
        text: 'Rooftop installations and co-locates on existing structures, managed end to end.',
        to: '/services#tower',
      },
    ] as { icon: IconName; title: string; text: string; to?: string }[],
  },
  anatomy: {
    eyebrow: 'Anatomy of a site',
    title: 'One contractor for every layer of the site.',
    intro:
      'From the foundation to the last antenna, Wavcomm’s crews cover the pieces that make a wireless site work — and test the result.',
    items: [
      { title: 'Antenna systems', text: 'Antenna and line installation, precision path alignment and in-service change outs.' },
      { title: 'Tower erections', text: 'Complete installation services for tower erections.' },
      { title: 'Waveguide bridges', text: 'Carry the signal from the tower to the equipment building.' },
      { title: 'Equipment buildings', text: 'Building installation and equipment upgrades.' },
      { title: 'Site civil work', text: 'Site roads, clearing and excavations.' },
      { title: 'Transmission line testing', text: 'Return loss, insertion loss, PIM and fiber/OTDR — documented in a package.' },
    ],
  },
  safety: {
    eyebrow: 'Safety',
    title: 'Safety is built into every project.',
    intro:
      'Working at height and around heavy equipment leaves no room for shortcuts. Safe work is planned into every job, from the first scope review to final close-out.',
    items: [
      {
        icon: 'clipboard',
        title: 'Planned before we mobilize',
        text: 'A seasoned manager builds the plan, crew and equipment list before work begins.',
      },
      {
        icon: 'hardhat',
        title: 'Experienced, equipped crews',
        text: 'Installation crews and technicians experienced and equipped for towers, rooftops and ground work.',
      },
      {
        icon: 'shield',
        title: 'Verified at close-out',
        text: 'Each antenna / transmission line system is tested and documented before hand-over.',
      },
    ] as { icon: IconName; title: string; text: string }[],
    /** Add real certifications / memberships here (e.g. OSHA training, NATE) — shown as badges when present. */
    credentials: [] as string[],
  },
  gallery: {
    eyebrow: 'In the field',
    title: 'Steel, sky and a lot of groundwork.',
    intro: 'A look at the kind of work our crews do — towers, antennas, heavy equipment and site civil.',
    items: [
      {
        src: img('tower-night-stars'),
        alt: 'Communications tower with red lights against a star-filled night sky',
        label: 'Tower erections',
        shape: 'tall',
      },
      {
        src: img('construction-site'),
        alt: 'Building site with a tower crane under dramatic clouds',
        label: 'Site preparation',
        shape: 'wide',
      },
      {
        src: img('excavator-bucket'),
        alt: 'Excavator digging soil on a construction site',
        label: 'Excavations',
      },
      {
        src: img('crane-yellow'),
        alt: 'Yellow crane over a busy construction site',
        label: 'Crane work',
      },
      {
        src: img('antenna-array'),
        alt: 'Microwave dishes and antennas on a tower against a blue sky',
        label: 'Antenna systems',
      },
      {
        src: img('tower-night-sutro'),
        alt: 'Illuminated broadcast tower above city lights at night',
        label: 'Tower sites',
      },
    ] as GalleryItem[],
  },
  about: {
    eyebrow: 'Welcome to Wavcomm',
    title: 'Seasoned managers on every single project.',
    text: [
      'Wavcomm, Inc. is a licensed general contractor specializing in telecommunications infrastructure and wireless tower construction, providing construction services nationwide since 1995. Our focus is the physical installation, modification and testing of cellular and communication towers.',
      'All projects are handled by seasoned managers to ensure the highest quality of workmanship and efficiency of performance. We guarantee high quality workmanship performed on-time at a competitive price.',
    ],
    bullets: [
      'Licensed general contractor since 1995',
      'Nationwide telecommunications construction',
      'Experienced installation crews and technicians',
      'Every project led by a seasoned manager',
    ],
    image: img('crew-aerial-site'),
    imageAlt: 'Construction crew in hard hats and safety vests surveying a large job site',
    cta: { label: 'Talk to our team', to: '/contact' },
  },
  process: {
    id: 'process',
    eyebrow: 'How we work',
    title: 'Six phases. One accountable team.',
    intro: 'A clear path from first call to final document package.',
    steps: [
      { title: 'Scope', text: 'We review the site, the drawings and your schedule to define the work.' },
      { title: 'Plan', text: 'A seasoned manager builds the plan, crew and equipment list.' },
      { title: 'Mobilize', text: 'Crews, materials and equipment are scheduled to arrive when needed.' },
      { title: 'Build', text: 'Tower, line, antenna and civil work performed to specification.' },
      { title: 'Test', text: 'Each antenna / transmission line system is tested after installation.' },
      { title: 'Close out', text: 'Results are delivered in a complete document package.' },
    ],
  },
  split: {
    construction: {
      id: 'construction',
      eyebrow: 'Construction',
      title: 'Wavcomm performs all aspects of site construction.',
      image: img('tower-climber'),
      imageAlt: 'Technician climbing a steel tower high above the coastline',
    },
    testing: {
      id: 'testing',
      eyebrow: 'Testing',
      title: 'After installation, every system is tested.',
      text: 'Tests are performed on each antenna / transmission line system, so you know it performs as designed.',
      image: img('microwave-dishes'),
      imageAlt: 'Microwave dish antennas mounted on a lattice tower against a blue sky',
    },
  },
  pillars: {
    eyebrow: 'Why Wavcomm',
    title: 'Built to spec. Delivered on time.',
    items: [
      {
        icon: 'shield',
        title: 'High-quality workmanship',
        text: 'Experienced crews and technicians, led by seasoned managers on every project.',
      },
      {
        icon: 'clock',
        title: 'On-time performance',
        text: 'Efficient planning and mobilization so your site goes live when you need it.',
      },
      {
        icon: 'tag',
        title: 'Competitive pricing',
        text: 'Complete installation services at a competitive price, with no surprises.',
      },
    ] as { icon: IconName; title: string; text: string }[],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions, answered.',
    items: [
      {
        q: 'What kind of company is Wavcomm?',
        a: 'Wavcomm, Inc. is a licensed general contractor specializing in telecommunications infrastructure and wireless tower construction — the installation, modification and testing of cellular and communication towers.',
      },
      {
        q: 'Where do you work?',
        a: 'Wavcomm has been a licensed contractor since 1995 and provides construction services nationwide.',
      },
      {
        q: 'What do you build and install?',
        a: 'Tower erections, buildings, site roads, clearing and excavations, plus antenna and line installation, co-locates, rooftop installations and waveguide bridges.',
      },
      {
        q: 'Do you test the systems you install?',
        a: 'Yes. After installation, tests are performed on each antenna / transmission line system — including PIM, fiber/OTDR, return loss, path alignment and more — and delivered as a document package.',
      },
      {
        q: 'Can you work on live, in-service sites?',
        a: 'Yes. Our services include in-service antenna change outs and hot cuts, as well as in or out of service testing.',
      },
      {
        q: 'Who manages my project?',
        a: 'All projects are handled by seasoned managers to ensure the highest quality of workmanship and efficiency of performance.',
      },
    ],
  },
  cta: {
    title: 'Got a tower that needs building?',
    text: 'Call our Ontario, CA office or send us the details and we will get back to you with a bid.',
    image: img('hero-tower-sunset'),
  },
};

/* ── Services page ────────────────────────────────────────────────────────── */
export const servicesPage = {
  hero: {
    eyebrow: 'Services',
    title: 'Construction and testing, under one roof.',
    text: 'From site civil work to final document packages, Wavcomm delivers the full scope of telecommunications tower construction — five service areas, one accountable contractor.',
    image: img('antenna-array'),
    chips: [
      { label: 'Tower & Erection', href: '#tower' },
      { label: 'Civil Site', href: '#civil' },
      { label: 'Antenna & Line', href: '#antenna-line' },
      { label: 'RF & PIM Testing', href: '#testing' },
      { label: 'Maintenance', href: '#maintenance' },
      { label: 'Tests explained', href: '#tests-explained' },
      { label: 'Site anatomy', href: '#anatomy' },
    ],
  },
  stats: [
    { to: 5, label: 'Service areas' },
    { to: constructionServices.length, label: 'Construction services' },
    { to: testingServices.length, label: 'Testing & documentation items' },
    { to: 30, suffix: '+', label: 'Years of experience' },
  ] as { to: number; suffix?: string; label: string }[],
  testsExplained: {
    id: 'tests-explained',
    eyebrow: 'Testing, explained',
    title: 'What each test tells you.',
    intro:
      'Every antenna / transmission line system is tested after installation. Here is what the main tests verify — and why they matter to your network.',
    items: [
      {
        icon: 'pulse',
        title: 'PIM testing',
        text: 'Passive intermodulation testing finds loose, corroded or poor-quality connections that generate interference and degrade receiver performance.',
      },
      {
        icon: 'wave',
        title: 'Fiber / OTDR',
        text: 'An optical time-domain reflectometer sends light pulses down the fiber to measure loss and locate splices, connectors and faults along its length.',
      },
      {
        icon: 'gauge',
        title: 'Return loss',
        text: 'Measures how much signal is reflected back by the antenna and line. Plots across the band show how well the whole system is matched.',
      },
      {
        icon: 'crosshair',
        title: 'Path alignment & RSL',
        text: 'Precision alignment of microwave antennas, confirmed by measuring receive signal level against the link design.',
      },
      {
        icon: 'cross',
        title: 'Antenna & waveguide XPD',
        text: 'Cross-polarization discrimination checks the isolation between polarizations on antennas and circular waveguide.',
      },
      {
        icon: 'sliders',
        title: 'Insertion loss & path loss',
        text: 'Quantifies signal lost through the transmission line, and feeds the path loss calculations that prove a link will perform.',
      },
    ] as { icon: IconName; title: string; text: string }[],
    packageTitle: 'Every job closes with a document package.',
    packageText:
      'Results — including system return loss plots — are compiled into a document package, so you have a clear record of how each system performed.',
  },
  gallery: {
    eyebrow: 'On the job',
    title: 'Built from the ground up.',
    items: [
      {
        src: img('tower-climber'),
        alt: 'Technician climbing a steel tower high above the coastline',
        label: 'Tower work',
        shape: 'tall',
      },
      {
        src: img('crew-aerial-site'),
        alt: 'Construction crew in hard hats and safety vests surveying a large job site',
        label: 'Seasoned crews',
        shape: 'wide',
      },
      {
        src: img('crane-yellow'),
        alt: 'Yellow crane over a busy construction site',
        label: 'Crane work',
      },
      {
        src: img('excavator-civil'),
        alt: 'Yellow excavator working on open ground',
        label: 'Site civil work',
      },
      {
        src: img('microwave-dishes'),
        alt: 'Microwave dish antennas mounted on a lattice tower',
        label: 'Path alignment',
      },
      {
        src: img('rooftop-tower'),
        alt: 'Antenna tower mounted on a rooftop beneath a cloudy sky',
        label: 'Rooftop installation',
      },
    ] as GalleryItem[],
  },
  categories: [
    {
      id: 'tower',
      eyebrow: '01 — Tower Construction & Erection',
      title: 'Towers and buildings, erected to spec.',
      text: 'Wavcomm offers complete installation services for tower erections and buildings, and installs on rooftops and existing structures. Every project is handled by a seasoned manager.',
      list: ['Tower erections', 'Buildings', 'Roof Top Installation', 'Co-locates'],
      image: img('tower-climber'),
      imageAlt: 'Technician climbing a steel tower high above the coastline',
    },
    {
      id: 'civil',
      eyebrow: '02 — Civil Site Development',
      title: 'The groundwork every reliable site starts with.',
      text: 'From clearing to finished access, Wavcomm performs the site civil work that tower and building construction depends on.',
      list: ['Site Civil Work', 'Site roads', 'Clearing', 'Excavations'],
      image: img('excavator-civil'),
      imageAlt: 'Yellow excavator working on open ground at a construction site',
    },
    {
      id: 'antenna-line',
      eyebrow: '03 — Antenna & Line Installation',
      title: 'Equipped for a variety of antenna systems.',
      text: 'Our installation crews and technicians are experienced and equipped to install a variety of antenna systems and the transmission lines that serve them.',
      list: ['Antenna and Line installation', 'Waveguide bridges', 'Precision Path Alignment'],
      image: img('antenna-array'),
      imageAlt: 'Microwave dishes and antennas on a tower against a blue sky',
    },
    {
      id: 'testing',
      eyebrow: '04 — Advanced RF & PIM Testing',
      title: 'After installation, every system is tested.',
      text: 'After installation is completed, tests are performed on each antenna / transmission line system. Our team tests for:',
      list: testingServices,
      image: img('microwave-dishes'),
      imageAlt: 'Microwave dish antennas mounted on a lattice tower',
    },
    {
      id: 'maintenance',
      eyebrow: '05 — Maintenance & Upgrades',
      title: 'Keep in-service sites performing.',
      text: 'Wavcomm works on live, in-service sites — upgrading equipment, changing out antennas and keeping systems inspected and documented.',
      list: [
        'Equipment Upgrades',
        'In Service Antenna Change Outs and Hot Cuts',
        'Troubleshooting',
        'System Inspection and Maintenance',
        'Site Inventories',
      ],
      image: img('rooftop-tower'),
      imageAlt: 'Antenna tower mounted on a rooftop beneath a cloudy sky',
    },
  ],
};

/* ── Contact page ─────────────────────────────────────────────────────────── */
export const contactPage = {
  hero: {
    eyebrow: 'Contact Us',
    title: 'Request a bid or ask a question.',
    text: 'Tell us about your site and schedule — our Western Region operations team will get back to you.',
    image: img('tower-night-stars'),
  },
  quick: [
    {
      icon: 'phone',
      title: 'Call the office',
      text: 'Speak with our Ontario, CA team directly.',
      action: { label: siteInfo.contact.phone, href: siteInfo.contact.phoneHref },
    },
    {
      icon: 'clipboard',
      title: 'Request a bid',
      text: 'Send the scope and schedule using the form.',
      action: { label: 'Go to the form', href: '#bid' },
    },
    {
      icon: 'pin',
      title: 'Visit us',
      text: siteInfo.contact.addressLines.join(', '),
      action: { label: 'See the map', href: '#map' },
    },
  ] as { icon: IconName; title: string; text: string; action: { label: string; href: string } }[],
  form: {
    id: 'bid',
    title: 'Send us the details',
    text: 'Share a few project details and we will follow up.',
  },
  include: {
    eyebrow: 'Before you write',
    title: 'What to include in your request.',
    text: 'The more we know up front, the faster we can respond with an accurate bid.',
    list: [
      'Site location and type (tower, rooftop, existing co-locate)',
      'Scope of work — construction, installation and/or testing',
      'Antenna systems and transmission line involved',
      'Target start date and schedule constraints',
      'Drawings, specifications or site photos, if you have them',
    ],
    image: img('excavator-bucket'),
    imageAlt: 'Excavator working on open ground at a construction site',
  },
  next: {
    eyebrow: 'What happens next',
    title: 'From your message to a bid.',
    steps: [
      { title: 'We review', text: 'Our Western Region operations team reads your scope and schedule.' },
      { title: 'We follow up', text: 'We contact you to clarify details and answer questions.' },
      { title: 'You get a bid', text: 'A seasoned manager puts together the plan and a competitive price.' },
    ],
  },
};
