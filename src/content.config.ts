import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Content collections — every entry is a plain Markdown file with
 * frontmatter, so the site stays friendly to git-based CMS editing
 * (Decap / Sveltia / etc.). To add an item, drop a new .md file into
 * the matching folder under src/content/.
 */

const news = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    images: z.array(z.string()).default([]),
  }),
});

const members = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/members" }),
  schema: z.object({
    name: z.string(),
    role: z.enum(["professor", "phd", "msphd", "ms", "undergrad", "alumni"]),
    /** program/track note shown after the position, e.g. "SSIT" */
    track: z.string().optional(),
    image: z.string().optional(),
    interests: z.string().optional(),
    /** rough description of what they're working on right now */
    currentResearch: z.string().optional(),
    /** free-form publication entries shown in the member pop-up */
    publications: z.array(z.string()).default([]),
    email: z.string().optional(),
    links: z
      .object({
        about: z.string().optional(),
        website: z.string().optional(),
        scholar: z.string().optional(),
        orcid: z.string().optional(),
        dblp: z.string().optional(),
        cv: z.string().optional(),
      })
      .default({}),
    /** alumni only */
    formerPosition: z.string().optional(),
    current: z.string().optional(),
    order: z.number().default(99),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/publications" }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    venueShort: z.string().optional(),
    year: z.number(),
    /** true = shown in the Pre-Print section above the year groups */
    preprint: z.boolean().default(false),
    links: z
      .object({
        paper: z.string().optional(),
        code: z.string().optional(),
        project: z.string().optional(),
        doi: z.string().optional(),
      })
      .default({}),
    order: z.number().default(99),
  }),
});

const gallery = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/gallery" }),
  schema: z.object({
    title: z.string(),
    /** main/cover image — shown in the grid and the home carousel */
    image: z.string(),
    /** extra photos for the event: repo uploads */
    images: z.array(z.string()).default([]),
    /** extra photos for the event: external URLs (saves repo storage) */
    imageLinks: z.array(z.string()).default([]),
    category: z.string(),
    date: z.coerce.date(),
    featured: z.boolean().default(false),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/research" }),
  schema: z.object({
    title: z.string(),
    icon: z.string().default("chip"),
    tagline: z.string().optional(),
    order: z.number().default(99),
  }),
});

export const collections = { news, members, publications, gallery, research };
