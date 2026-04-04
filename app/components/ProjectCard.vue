<script setup lang="ts">
interface ProjectCardProps {
  title: string
  description: string
  image: string
  to: string
  category?: string
}

defineProps<ProjectCardProps>()
</script>

<template>
  <UCard
    as="NuxtLink"
    :to="to"
    variant="outline"
    class="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
  >
    <template #header>
      <div class="relative overflow-hidden aspect-[4/3]">
        <img
          :src="image"
          :alt="title"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        >
        <span
          v-if="category"
          class="absolute top-3 right-3 bg-olive-600 text-white text-xs font-semibold px-3 py-1 rounded-full"
        >
          {{ category }}
        </span>
      </div>
    </template>

    <h3 class="font-heading text-2xl text-brown-950 mb-2">
      {{ title }}
    </h3>
    <p class="text-brown-700 text-sm line-clamp-2">
      {{ description }}
    </p>

    <template #footer>
      <span class="text-lavender-500 text-sm font-semibold group-hover:text-lavender-700 transition-colors">
        Découvrir →
      </span>
    </template>
  </UCard>
</template>
