<script setup lang="ts">
const { data: realisations } = await useAsyncData('realisations', () => {
  return queryCollection('realisations').all()
})
</script>

<template>
  <div>
    <!-- Hero -->
    <Hero
      title="Nos réalisations"
      subtitle="Chaque composition raconte une histoire unique"
      image="/images/sasha-zvereva-134405.jpg"
    />

    <!-- Grille Bento -->
    <section class="py-20">
      <UContainer>
        <SectionTitle
          title="Portfolio"
          subtitle="Explorez nos créations par catégorie"
        />

        <div v-if="realisations?.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          <div
            v-for="(projet, index) in realisations"
            :key="projet.path"
            :class="[
              index === 0 ? 'md:col-span-2 md:row-span-2' : '',
            ]"
          >
            <NuxtLink :to="projet.path" class="group block h-full">
              <div class="relative h-full min-h-[280px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <img
                  :src="projet.image"
                  :alt="projet.title"
                  class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-brown-950/70 via-transparent to-transparent" />
                <div class="absolute bottom-0 left-0 right-0 p-6">
                  <span class="text-xs font-semibold text-peach-300 uppercase tracking-wider">
                    {{ projet.category }}
                  </span>
                  <h3 class="font-heading text-2xl md:text-3xl text-white mt-1">
                    {{ projet.title }}
                  </h3>
                  <p class="text-brown-200 text-sm mt-2 line-clamp-2">
                    {{ projet.description }}
                  </p>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>
