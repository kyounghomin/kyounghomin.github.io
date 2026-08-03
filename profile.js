// ── Personal website content: edit ONLY this file ──────────────────
// Each field maps to a section on the page. An empty list hides its
// section, and deleting an optional field entirely also works.
// NOTE: currently filled with EXAMPLE data (Gildong Hong) for template review.
export default {
  // Shared lab identity
  lab: {
    name: 'EIC Lab',
    fullName: 'Efficient & Intelligent Computing Lab',
    href: 'https://eic-skku.github.io/',
    university: 'Sungkyunkwan University',
    logo: 'assets/images/eic-logo.svg',
  },

  name: 'Gildong Hong',
  role: 'MS–PhD Student @ EIC Lab',
  affiliation: 'Efficient & Intelligent Computing Lab, Sungkyunkwan University',
  tagline: 'Studying how large models learn, generalize, and fail.',
  photo: 'assets/images/profile-placeholder.svg',
  // Email is split to keep it out of scraper reach
  emailUser: 'gildong.hong',
  emailDomain: 'g.skku.edu',

  // Links get icons automatically by label: GitHub, Scholar, LinkedIn, ORCID, X
  links: [
    { label: 'GitHub', href: 'https://github.com/gildonghong' },
    { label: 'Scholar', href: 'https://scholar.google.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
  ],
  cv: { file: 'cv.pdf' },

  focus: {
    blurb: 'My research focuses on the science of large language models — training dynamics, interpretability, and rigorous evaluation — with the goal of making foundation models more reliable and better understood.',
    tags: ['LLM Training Dynamics', 'Interpretability', 'Robust Evaluation', 'Foundation Models'],
  },


  // badge: short venue tag shown above the title (e.g. 'ICML 2026', 'Preprint')
  publications: [
    {
      year: 2026, badge: 'ICML 2026',
      title: 'Understanding Emergent Abilities Through the Lens of Training Dynamics',
      authors: 'Gildong Hong*, Cheolsu Kim*, Younghee Lee',
      note: '*Equal contribution',
      venue: 'The 43rd International Conference on Machine Learning (ICML 2026) — Oral',
      paper: 'https://arxiv.org', code: 'https://github.com',
      bib: '@inproceedings{hong2026emergent,\n  title={Understanding Emergent Abilities Through the Lens of Training Dynamics},\n  author={Hong, Gildong and Kim, Cheolsu and Lee, Younghee},\n  booktitle={ICML},\n  year={2026}\n}',
    },
    {
      year: 2026, badge: 'Preprint',
      title: 'Probing Factual Recall in Multimodal Language Models at Scale',
      authors: 'Gildong Hong, Younghee Lee',
      venue: 'arXiv preprint arXiv:2604.01234',
      paper: 'https://arxiv.org',
      bib: '@article{hong2026probing,\n  title={Probing Factual Recall in Multimodal Language Models at Scale},\n  author={Hong, Gildong and Lee, Younghee},\n  journal={arXiv preprint arXiv:2604.01234},\n  year={2026}\n}',
    },
    {
      year: 2025, badge: 'NeurIPS 2025',
      title: 'On the Robustness of Instruction-Tuned Models to Distribution Shift',
      authors: 'Gildong Hong, Cheolsu Kim',
      venue: 'The 39th Annual Conference on Neural Information Processing Systems (NeurIPS 2025)',
      paper: 'https://arxiv.org', code: 'https://github.com',
      bib: '@inproceedings{hong2025robustness,\n  title={On the Robustness of Instruction-Tuned Models to Distribution Shift},\n  author={Hong, Gildong and Kim, Cheolsu},\n  booktitle={NeurIPS},\n  year={2025}\n}',
    },
    {
      year: 2024, badge: 'EMNLP 2024',
      title: 'A Simple Baseline for Probing Factual Knowledge in Language Models',
      authors: 'Gildong Hong, Younghee Lee',
      venue: 'Empirical Methods in Natural Language Processing (EMNLP 2024)',
      paper: 'https://arxiv.org', code: 'https://github.com',
      bib: '@inproceedings{hong2024probing,\n  title={A Simple Baseline for Probing Factual Knowledge in Language Models},\n  author={Hong, Gildong and Lee, Younghee},\n  booktitle={EMNLP},\n  year={2024}\n}',
    },
  ],

  education: [
    { period: '2024 – Present', degree: 'MS–PhD Combined Program', detail: 'Artificial Intelligence, Sungkyunkwan University', extra: 'Advisor: Prof. Yulhwa Kim' },
    { period: '2020 – 2024', degree: 'Bachelor of Science', detail: 'Computer Science, Sungkyunkwan University', extra: 'Summa Cum Laude' },
  ],

  experience: [
    { org: 'Industry AI Lab', role: 'Research Intern', period: '2026', bullets: ['Efficient inference for long-context language models'] },
    { org: 'EIC Lab, SKKU', role: 'Undergraduate Researcher', period: '2023 – 2024', bullets: ['LLM evaluation benchmarks', 'Interpretability tooling for transformer models'] },
    { org: 'Sungkyunkwan University', role: 'Teaching Assistant', period: '2025 Spring', bullets: ['Introduction to Machine Learning'] },
  ],

  lastUpdated: 'August 2026',
};
