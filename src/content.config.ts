import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroLight: image().optional(),
			heroDark: image().optional(),
			tags: z.array(z.string()).optional().default([]),
			readingTime: z.string().optional(), // Add this line
		}),
});

export const collections = { blog };
