import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const references = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/references' }),
  schema: z.object({
    name: z.string(),
    family: z.string(),
    tags: z.array(z.string()).default([]),
    palette: z.array(z.string()).default([]),
    fonts: z
      .object({
        heading: z.string().default(''),
        body: z.string().default(''),
      })
      .default({ heading: '', body: '' }),
    texture: z.string().optional(),
    notes: z.string().default(''),
    preview: z.string().optional(),
    card: z.string().optional(),
    prompts: z
      .array(
        z.object({
          label: z.string(),
          text: z.string(),
        })
      )
      .default([]),
    source: z.string().optional(),
  }),
});

export const collections = { references };
