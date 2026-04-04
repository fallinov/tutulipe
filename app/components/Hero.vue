<script setup lang="ts">
interface HeroProps {
  title: string
  subtitle?: string
  image: string
  cta?: { label: string, to: string }
}

defineProps<HeroProps>()
</script>

<template>
  <section class="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
    <!-- Image de fond -->
    <img
      :src="image"
      :alt="title"
      class="absolute inset-0 w-full h-full object-cover"
    >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-brown-950/50" />

    <!-- Contenu -->
    <UContainer class="relative z-10 text-center text-white">
      <h1 class="font-heading text-5xl md:text-7xl mb-6 drop-shadow-lg">
        {{ title }}
      </h1>
      <p v-if="subtitle" class="text-xl md:text-2xl mb-8 text-lavender-100 max-w-2xl mx-auto">
        {{ subtitle }}
      </p>
      <UButton
        v-if="cta"
        :to="cta.to"
        :label="cta.label"
        size="lg"
        color="primary"
        variant="solid"
        class="shadow-lg"
      />
    </UContainer>
  </section>
</template>
