// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/fonts',
  ],

  // Désactiver les appels externes Google Fonts
  fonts: {
    providers: {
      google: false,
    },
  },

  css: ['~/assets/css/main.css'],

  // SEO de base
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: 'Tutulipe — L\'art floral au naturel',
      meta: [
        { name: 'description', content: 'Tutulipe, artisan fleuriste. Compositions florales pour mariages, deuils et décorations.' },
      ],
    },
  },
})
