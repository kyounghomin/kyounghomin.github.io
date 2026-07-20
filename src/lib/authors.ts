import type { CollectionEntry } from "astro:content";
import { slugify } from "./slug";

export interface MatchedMember {
  slug: string;
  image?: string;
  role: string;
}

export const normalizeAuthorName = (name: string) =>
  name
    .replace(/[*⁺]+$/, "") // equal-contribution / corresponding-author marks
    .replace(/\s*\(Example\)$/, "")
    .trim()
    .toLowerCase();

export const isAuthorSeparator = (part: string) =>
  /^,?\s*(and)?\s*$/i.test(part.trim());

/** split an author string into names + separators (", " / " and ") */
export const splitAuthors = (authors: string) =>
  authors.split(/(,\s*and\s+|,\s*|\s+and\s+)/);

/** turn an ordered name list into the same name/separator shape splitAuthors
    produces ("A", " and ", "B" / "A", ", ", "B", ", and ", "C"), so the same
    matched-vs-plain rendering logic works for both */
export const formatNameList = (names: string[]): string[] => {
  if (names.length <= 1) return [...names];
  if (names.length === 2) return [names[0], " and ", names[1]];
  const parts: string[] = [];
  names.slice(0, -1).forEach((name, i) => {
    parts.push(name);
    parts.push(i === names.length - 2 ? ", and " : ", ");
  });
  parts.push(names[names.length - 1]);
  return parts;
};

/** looked up by normalized name — lets pages tell lab members apart from
    external names and link/avatar the former. if two members share the
    exact same name, there's no way to tell from plain text which one is
    meant, so both are left out — safer unlinked than confidently wrong. */
export const buildMemberMaps = (allMembers: CollectionEntry<"members">[]) => {
  const nameCounts = new Map<string, number>();
  for (const m of allMembers) {
    const key = normalizeAuthorName(m.data.name);
    nameCounts.set(key, (nameCounts.get(key) ?? 0) + 1);
  }

  const membersByName = new Map<string, MatchedMember>();
  const membersBySlug = new Map<string, CollectionEntry<"members">>();
  for (const m of allMembers) {
    const key = normalizeAuthorName(m.data.name);
    const slug = slugify(m.data.name);
    membersBySlug.set(slug, m);
    if ((nameCounts.get(key) ?? 0) > 1) continue;
    membersByName.set(key, { slug, image: m.data.image, role: m.data.role });
  }

  return { membersByName, membersBySlug };
};
