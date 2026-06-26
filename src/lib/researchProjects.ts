import type { CollectionEntry } from "astro:content";

export type ResearchEntry = CollectionEntry<"research">;

export interface ResearchProject {
  slug: string;
  title: string;
  entries: ResearchEntry[];
  latest: ResearchEntry;
  tags: string[];
}

export function titleFromResearchSlug(slug: string) {
  return slug
    .replace(/^\d+[-_]/, "")
    .split(/[-_]/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getResearchProjects(entries: ResearchEntry[]) {
  const projects = new Map<string, ResearchEntry[]>();

  for (const entry of entries) {
    const [projectSlug, postSlug] = entry.id.split("/");
    if (!projectSlug || !postSlug) continue;

    projects.set(projectSlug, [...(projects.get(projectSlug) ?? []), entry]);
  }

  return Array.from(projects.entries())
    .map(([slug, projectEntries]): ResearchProject => {
      const sortedEntries = [...projectEntries].sort((a, b) =>
        a.id.localeCompare(b.id, undefined, { numeric: true }),
      );
      const latest = [...projectEntries].sort(
        (a, b) => b.data.date.getTime() - a.data.date.getTime(),
      )[0];
      const tags = Array.from(
        new Set(sortedEntries.flatMap((entry) => entry.data.tags)),
      );

      return {
        slug,
        title: titleFromResearchSlug(slug),
        entries: sortedEntries,
        latest,
        tags,
      };
    })
    .sort((a, b) => {
      if (a.latest.data.featured && !b.latest.data.featured) return -1;
      if (!a.latest.data.featured && b.latest.data.featured) return 1;
      return b.latest.data.date.getTime() - a.latest.data.date.getTime();
    });
}
