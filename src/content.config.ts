import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    date: z.coerce.date(),
    type: z.string().default('note'),
    summary: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { notes };
