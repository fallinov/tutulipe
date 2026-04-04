<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <div class="text-center mb-12">
    <h2 class="font-heading text-4xl md:text-5xl text-brown-950 mb-4">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="text-brown-600 text-lg max-w-2xl mx-auto">
      {{ subtitle }}
    </p>
    <div class="mt-4 mx-auto w-24 h-1 bg-peach-300 rounded-full" />
  </div>
</template>
