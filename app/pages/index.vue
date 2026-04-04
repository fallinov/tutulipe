<script setup lang="ts">
const { data: realisations } = await useAsyncData('realisations-home', () => {
  return queryCollection('realisations').limit(3).all()
})

const { data: actualites } = await useAsyncData('actualites-home', () => {
  return queryCollection('actualites').limit(2).all()
})

const services = [
  {
    icon: 'i-lucide-heart',
    title: 'Mariages',
    description: 'Bouquets de mariée, décorations de cérémonie et centres de table pour votre jour unique.',
  },
  {
    icon: 'i-lucide-flower-2',
    title: 'Décorations',
    description: 'Compositions florales pour vos événements, réceptions et espaces professionnels.',
  },
  {
    icon: 'i-lucide-flame',
    title: 'Deuil',
    description: 'Arrangements funéraires élégants et sobres pour accompagner vos moments de recueillement.',
  },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <Hero
      title="L'art floral au naturel"
      subtitle="Compositions uniques et créations sur mesure pour sublimer chaque instant de votre vie."
      image="/images/annie-spratt-150175.jpg"
      :cta="{ label: 'Nos réalisations', to: '/realisations' }"
    />

    <!-- Services -->
    <section class="py-20 bg-lavender-50">
      <UContainer>
        <SectionTitle
          title="Nos services"
          subtitle="Un savoir-faire artisanal au service de vos émotions"
        />

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <UCard v-for="service in services" :key="service.title" variant="subtle" class="text-center">
            <div class="flex flex-col items-center gap-4">
              <div class="w-16 h-16 rounded-full bg-peach-100 flex items-center justify-center">
                <UIcon :name="service.icon" class="text-2xl text-terracotta-500" />
              </div>
              <h3 class="font-heading text-2xl text-brown-950">{{ service.title }}</h3>
              <p class="text-brown-600">{{ service.description }}</p>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Réalisations -->
    <section class="py-20">
      <UContainer>
        <SectionTitle
          title="Nos réalisations"
          subtitle="Découvrez nos dernières créations florales"
        />

        <div v-if="realisations?.length" class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProjectCard
            v-for="projet in realisations"
            :key="projet.path"
            :title="projet.title"
            :description="projet.description"
            :image="projet.image"
            :to="projet.path"
            :category="projet.category"
          />
        </div>

        <div class="text-center mt-12">
          <UButton
            to="/realisations"
            label="Toutes nos réalisations"
            variant="outline"
            color="primary"
            size="lg"
          />
        </div>
      </UContainer>
    </section>

    <!-- Témoignage -->
    <section class="py-20 bg-olive-600 text-white">
      <UContainer class="text-center max-w-3xl">
        <UIcon name="i-lucide-quote" class="text-4xl text-olive-300 mb-6" />
        <blockquote class="text-xl md:text-2xl italic mb-6 leading-relaxed">
          &laquo; Tutulipe a transformé notre mariage en un véritable jardin enchanté.
          Chaque composition était une œuvre d'art. Merci infiniment ! &raquo;
        </blockquote>
        <p class="text-olive-200 font-semibold">— Marie & Pierre, Mariage été 2024</p>
      </UContainer>
    </section>

    <!-- Actualités -->
    <section v-if="actualites?.length" class="py-20 bg-brown-50">
      <UContainer>
        <SectionTitle
          title="Actualités"
          subtitle="Les dernières nouvelles de notre atelier"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <UCard
            v-for="article in actualites"
            :key="article.path"
            as="NuxtLink"
            :to="article.path"
            variant="outline"
            class="group hover:shadow-lg transition-all duration-300"
          >
            <template #header>
              <img
                :src="article.image"
                :alt="article.title"
                class="w-full h-48 object-cover"
              >
            </template>

            <p class="text-sm text-peach-600 mb-2">{{ article.date }}</p>
            <h3 class="font-heading text-2xl text-brown-950 mb-2 group-hover:text-lavender-600 transition-colors">
              {{ article.title }}
            </h3>
            <p class="text-brown-600 text-sm">{{ article.description }}</p>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- CTA Contact -->
    <section class="py-20 bg-terracotta-500 text-white">
      <UContainer class="text-center">
        <h2 class="font-heading text-4xl md:text-5xl mb-6">Envie d'une création sur mesure ?</h2>
        <p class="text-xl text-terracotta-100 mb-8 max-w-2xl mx-auto">
          Contactez-nous pour discuter de votre projet. Nous serons ravis de donner vie à vos envies florales.
        </p>
        <UButton
          label="Nous contacter"
          icon="i-lucide-mail"
          size="xl"
          variant="solid"
          color="neutral"
          class="shadow-lg"
        />
      </UContainer>
    </section>
  </div>
</template>
