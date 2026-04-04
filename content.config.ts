import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '*.md',
    }),
    realisations: defineCollection({
      type: 'page',
      source: 'realisations/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        category: z.string(),
        date: z.string().optional(),
      }),
    }),
    actualites: defineCollection({
      type: 'page',
      source: 'actualites/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        date: z.string(),
        author: z.string().optional(),
      }),
    }),
  },
})
