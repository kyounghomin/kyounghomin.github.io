# EIC Lab Website

The official website of **EIC Lab** (Efficient & Intelligent Computing Laboratory) at Sungkyunkwan University, built with [Astro](https://astro.build) and deployed to GitHub Pages at [www.kyounghomin.com](https://www.kyounghomin.com).

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start local dev server at `localhost:4321`   |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the production build locally         |

## Editing content

Pages CMS provides the visual content editor. Open
[`www.kyounghomin.com/admin/`](https://www.kyounghomin.com/admin/) and use an
authorized GitHub account. The editor is configured by `.pages.yml`; setup,
publishing, media, access, and recovery instructions are in
[`docs/CMS.md`](docs/CMS.md).

All site content remains in `src/content/` as plain Markdown files with
frontmatter, one file per item. To edit manually, add, update, or remove the
matching `.md` file. CMS saves create normal Git commits and trigger the same
GitHub Pages deployment workflow.

### News — `src/content/news/`

Shown on the home page (5 most recent).

```yaml
---
title: "Paper accepted to ICCAD 2026"
date: 2026-07-02
description: "One or two sentences shown under the title."
---
```

### Members — `src/content/members/`

```yaml
---
name: "Minjun Park"
role: phd            # professor | phd | ms | undergrad | alumni
image: "/images/members/minjun-park.svg"
interests: "LLM quantization, efficient inference systems"
links:               # shown on hover (desktop) / as buttons (mobile)
  about: "#"
  website: "#"
  scholar: "#"
order: 1             # sort position within the role section
---
```

Alumni entries skip `image`/`links` and use these instead:

```yaml
role: alumni
formerPosition: "M.S. Student (2023–2025)"
current: "Engineer, Samsung Electronics — Memory Division"
```

The professor's Markdown body (below the frontmatter) is rendered as a short bio.

### Publications — `src/content/publications/`

Grouped by `year` (newest first), sorted by `order` within a year.

```yaml
---
title: "Paper title"
authors: "First Author, Second Author, and Yulwha Kim"
venue: "Design Automation Conference"
venueShort: "DAC"    # small tag next to the venue
year: 2026
links:               # all optional — omit any you don't have
  paper: "#"
  code: "#"
  project: "#"
  doi: "#"
order: 1
---
```

### Gallery — `src/content/gallery/`

```yaml
---
title: "Spring Group Photo 2026"
image: "/images/gallery/group-photo-2026.svg"
category: "Group Photo"   # free text; filters are generated automatically
date: 2026-04-10
featured: true            # featured photos appear in the home page carousel
---
```

### Research teams — `src/content/research/`

The Markdown body is the team description (currently Lorem Ipsum placeholder).

```yaml
---
title: "Large Language Models"
icon: llm            # llm | vision | eda | arch
tagline: "One-line summary shown on cards."
order: 1
---
```

## Images

Static images live in `public/images/` (`members/`, `gallery/`). Current images are generated SVG placeholders — replace them with real photos (any format) and update the `image:` paths. Member photos display square (1:1); gallery photos display 4:3.

## Design

Colors, fonts, spacing, and shared styles are defined as CSS custom properties in [`src/styles/global.css`](src/styles/global.css). The palette derives from the lab logo (`public/logo.svg`): navy `#00265F` + charcoal `#303438`. Typography: Newsreader (headings) + Inter (body), self-hosted via Fontsource.

Placeholder details to update when known: footer/contact email, phone, and room number.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages.

**One-time setup:** in the GitHub repo, go to *Settings → Pages* and set **Source** to **GitHub Actions**. The custom domain is set by `public/CNAME` (`www.kyounghomin.com`).
