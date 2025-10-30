import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'post',
	title: 'Blog Post',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: { source: 'title', maxLength: 96 },
		}),
		defineField({
			name: 'mainImage',
			title: 'Cover Image',
			type: 'image',
			options: { hotspot: true },
		}),
		defineField({
			name: 'body',
			title: 'Content',
			type: 'blockContent',
		}),
		defineField({
			name: 'publishedAt',
			title: 'Published At',
			type: 'datetime',
		}),
		defineField({
			name: 'excerpt',
			title: 'Excerpt',
			type: 'text',
			description: 'Short summary for SEO and previews.',
		}),
		defineField({
			name: 'categories',
			title: 'Categories',
			type: 'array',
			of: [{ type: 'reference', to: [{ type: 'category' }] }],
		}),
		defineField({
			name: 'tags',
			title: 'Tags',
			type: 'array',
			of: [{ type: 'reference', to: [{ type: 'tag' }] }],
		}),
	],
})