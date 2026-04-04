<script setup lang="ts">
const { data: actualites } = await useAsyncData('actualites', () => {
  return queryCollection('actualites').all()
})
</script>

<template>
  <div>
    <Hero
      title="Actualités"
      subtitle="Les dernières nouvelles de notre atelier"
      image="/images/ornella-binni-148189.jpg"
    />

    <section class="py-20">
      <UContainer class="max-w-4xl">
        <div v-if="actualites?.length" class="space-y-8">
          <UCard
            v-for="article in actualites"
            :key="article.path"
            as="NuxtLink"
            :to="article.path"
            variant="outline"
            class="group hover:shadow-lg transition-all duration-300"
          >
            <div class="flex flex-col md:flex-row gap-6">
              <img
                :src="article.image"
                :alt="article.title"
                class="w-full md:w-64 h-48 object-cover rounded-lg"
              >
              <div class="flex-1">
                <p class="text-sm text-peach-600 mb-2">{{ article.date }}</p>
                <h2 class="font-heading text-3xl text-brown-950 mb-3 group-hover:text-lavender-600 transition-colors">
                  {{ article.title }}
                </h2>
                <p class="text-brown-600">{{ article.description }}</p>
                <span class="inline-block mt-4 text-lavender-500 font-semibold text-sm">
                  Lire la suite →
                </span>
              </div>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>
  </div>
</template>
