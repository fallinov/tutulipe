<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('actualites').path(route.path).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, message: 'Article introuvable' })
}
</script>

<template>
  <div v-if="page">
    <div class="relative h-[40vh] min-h-[300px]">
      <img
        :src="page.image"
        :alt="page.title"
        class="absolute inset-0 w-full h-full object-cover"
      >
      <div class="absolute inset-0 bg-brown-950/40" />
    </div>

    <section class="py-16">
      <UContainer class="max-w-3xl">
        <p class="text-peach-600 text-sm mb-2">{{ page.date }}</p>
        <h1 class="font-heading text-4xl md:text-5xl text-brown-950 mb-8">
          {{ page.title }}
        </h1>

        <div class="prose prose-lg mx-auto">
          <ContentRenderer :value="page" />
        </div>

        <div class="mt-12">
          <UButton
            to="/actualites"
            label="← Retour aux actualités"
            variant="ghost"
            color="neutral"
          />
        </div>
      </UContainer>
    </section>
  </div>
</template>
