// ── Personal website content: edit ONLY this file ──────────────────
// Each field maps to a section on the page. An empty list hides its section.
export default {
  // Shared lab identity
  lab: {
    name: 'EIC Lab',
    fullName: 'Efficient & Intelligent Computing Lab',
    href: 'https://eic-skku.github.io/',
    university: 'Sungkyunkwan University',
    logo: 'assets/images/eic-logo.svg',
  },

  name: 'Kyoungho Min',
  role: 'MS–PhD Student @ EIC Lab',
  affiliation: 'Efficient & Intelligent Computing Lab, Sungkyunkwan University',
  tagline: 'Working on efficient AI for multimodal and generative models.',
  photo: 'assets/images/profile.jpg',
  // Email is split to keep it out of scraper reach
  emailUser: 'kyohmin',
  emailDomain: 'g.skku.edu',

  links: [
    { label: 'GitHub', href: 'https://github.com/kyounghomin' },
    // More links get icons automatically by label — e.g.:
    // { label: 'Scholar', href: 'https://scholar.google.com/citations?user=...' },
    // { label: 'LinkedIn', href: 'https://www.linkedin.com/in/...' },
    // { label: 'ORCID', href: 'https://orcid.org/...' },
  ],
  // Points at the exported PDF; cv.html is the editable source it's printed from
  cv: { file: 'cv.pdf' },

  focus: {
    blurb: 'I work on efficient AI for multimodal and generative models. My current research modifies the initial noise of flow-based text-to-image models to enhance image quality.',
    tags: ['Efficient AI', 'Multimodal Models', 'Image Generation (T2I)', 'Flow Models'],
  },

  // The News section stays hidden while this list is empty. Example:
  // { date: 'May 2026', text: 'Our paper was accepted to ...' },
  news: [],

  // The Publications section stays hidden while this list is empty.
  // badge: short venue tag shown above the title (e.g. 'ICML 2026', 'Preprint'). Example:
  // {
  //   year: 2026, badge: 'Preprint',
  //   title: 'Paper Title',
  //   authors: 'Kyoungho Min, Co Author',
  //   venue: 'arXiv preprint arXiv:...',
  //   paper: 'https://arxiv.org/abs/...', code: 'https://github.com/...',
  //   bib: '@article{...}',
  // },
  publications: [],

  education: [
    // TODO: add the start year (period: '2025 – Present') and a B.S. entry.
    { period: '', degree: 'MS–PhD Combined Program', detail: 'Department of Electrical and Computer Engineering, Sungkyunkwan University', extra: 'Advisor: Prof. Yulhwa Kim' },
  ],

  // TODO: add internships / TA positions here; the section stays hidden while empty.
  // { org: 'Company', role: 'Research Intern', period: '2026', bullets: ['What you did'] },
  experience: [],

  lastUpdated: 'August 2026',
};
