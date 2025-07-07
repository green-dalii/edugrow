import { z, defineCollection, reference } from 'astro:content'
import { glob } from 'astro/loaders'

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.date(),
			image: image(),
			author: z.string(),
			tags: z.array(z.string()),
			relatedPosts: z.array(reference('blog')).optional()
		})
})

export const collections = {
	blog
}
