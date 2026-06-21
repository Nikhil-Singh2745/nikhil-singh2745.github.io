import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const dumps = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/dumps" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    summary: z.string(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

export const collections = { dumps };
