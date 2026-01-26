import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    role: z.string().optional(),
    stack: z.array(z.string()).default([]),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    date: z.string().optional(), // keepin it chill fa now
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects };
