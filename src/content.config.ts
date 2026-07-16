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
  }),
});

const members = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/members" }),
  schema: z.object({
    name: z.string(),
    role: z.enum(["professor", "phd", "ms", "undergrad", "alumni"]),
    image: z.string().optional(),
    interests: z.string().optional(),
    email: z.string().optional(),
    links: z
      .object({
        about: z.string().optional(),
        website: z.string().optional(),
        scholar: z.string().optional(),
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
    image: z.string(),
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
