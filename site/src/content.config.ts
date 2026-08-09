import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One JSON file per project in src/content/projects/. To add a project:
// copy an existing file, change the fields, drop its photos in
// src/assets/photos/, done. Only name, sector, thumb, alt and order are
// required — cards render cleanly with any of the rest missing.
const projects = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      sector: z.enum(['Residential', 'Commercial', 'Industrial']),
      location: z.string().optional(),
      size: z.string().optional(),      // e.g. "±550 m²"
      value: z.string().optional(),     // e.g. "R9 M"
      year: z.string().optional(),
      thumb: image(),
      alt: z.string(),
      order: z.number(),
      caseStudy: z
        .object({
          kicker: z.string(),           // e.g. "RESIDENTIAL · ROYALSTON …"
          heading: z.string(),          // narrative h2
          narrative: z.array(z.string()),
          architect: z.string().optional(),
          valueLong: z.string().optional(), // e.g. "R9 million"
          gallery: z.array(z.object({ src: image(), alt: z.string() })),
        })
        .optional(),
    }),
});

export const collections = { projects };
