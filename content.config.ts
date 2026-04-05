import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

const serviceSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.string(),
})

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '*.md',
      schema: z.object({
        // Hero
        hero_title: z.string().optional(),
        hero_subtitle: z.string().optional(),
        hero_image: z.string().optional(),
        hero_cta_label: z.string().optional(),
        hero_cta_link: z.string().optional(),
        // Services
        services_title: z.string().optional(),
        services_subtitle: z.string().optional(),
        services: z.array(serviceSchema).optional(),
        // Témoignage
        testimonial_quote: z.string().optional(),
        testimonial_author: z.string().optional(),
        // CTA
        cta_title: z.string().optional(),
        cta_text: z.string().optional(),
        cta_button_label: z.string().optional(),
      }),
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
