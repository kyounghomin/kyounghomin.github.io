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
    blurb: 'I work on efficient AI for multimodal and generative models — reducing the inference cost of vision-language models, and improving flow-based text-to-image generation. My current research modifies the initial noise of flow models to enhance image quality.',
    tags: ['Efficient AI', 'Multimodal Models', 'Image Generation (T2I)', 'Flow Models'],
  },

  news: [
    { date: 'May 2026', text: 'ERASE, our adaptive two-stage vision token pruning framework for VLMs, is now on arXiv.' },
  ],

  // badge: short venue tag shown above the title (e.g. 'ICML 2026', 'Preprint')
  publications: [
    {
      year: 2026, badge: 'Preprint',
      title: 'ERASE: Eliminating Redundant Visual Tokens via Adaptive Two-Stage Token Pruning',
      authors: 'Yuna Lee, Kyoungho Min, Yulhwa Kim',
      venue: 'arXiv preprint arXiv:2605.09982',
      paper: 'https://arxiv.org/abs/2605.09982', code: 'https://github.com/Tuna-Luna/ERASE',
      bib: '@article{lee2026erase,\n  title={ERASE: Eliminating Redundant Visual Tokens via Adaptive Two-Stage Token Pruning},\n  author={Lee, Yuna and Min, Kyoungho and Kim, Yulhwa},\n  journal={arXiv preprint arXiv:2605.09982},\n  year={2026}\n}',
    },
  ],

  education: [
    // TODO: add the start year (period: '2025 – Present') and a B.S. entry.
    { period: '', degree: 'MS–PhD Combined Program', detail: 'Department of Electrical and Computer Engineering, Sungkyunkwan University', extra: 'Advisor: Prof. Yulhwa Kim' },
  ],

  // TODO: add internships / TA positions here; the section stays hidden while empty.
  // { org: 'Company', role: 'Research Intern', period: '2026', bullets: ['What you did'] },
  experience: [],

  lastUpdated: 'August 2026',
};
