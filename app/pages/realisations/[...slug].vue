<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('realisations').path(route.path).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, message: 'Réalisation introuvable' })
}
</script>

<template>
  <div v-if="page">
    <!-- Hero image -->
    <div class="relative h-[50vh] min-h-[400px]">
      <img
        :src="page.image"
        :alt="page.title"
        class="absolute inset-0 w-full h-full object-cover"
      >
      <div class="absolute inset-0 bg-brown-950/40" />
      <div class="absolute bottom-0 left-0 right-0 p-8">
        <UContainer>
          <span class="text-peach-300 text-sm font-semibold uppercase tracking-wider">
            {{ page.category }}
          </span>
          <h1 class="font-heading text-4xl md:text-6xl text-white mt-2">
            {{ page.title }}
          </h1>
        </UContainer>
      </div>
    </div>

    <!-- Contenu -->
    <section class="py-16">
      <UContainer class="max-w-3xl">
        <div class="prose prose-lg mx-auto">
          <ContentRenderer :value="page" />
        </div>

        <div class="mt-12">
          <UButton
            to="/realisations"
            label="← Retour aux réalisations"
            variant="ghost"
            color="neutral"
          />
        </div>
      </UContainer>
    </section>
  </div>
</template>
