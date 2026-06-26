import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const dumps = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/dumps" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.coerce.date(),
    section: z.enum(["project", "tinkering", "writing"]),
    tags: z.array(z.string()).default([]),
    summary: z.string(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    sourceUrl: z.string().url().optional(),
    sourceLabel: z.string().optional(),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/research" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    summary: z.string(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    sourceUrl: z.string().url().optional(),
    sourceLabel: z.string().optional(),
  }),
});

export const collections = { dumps, research };
