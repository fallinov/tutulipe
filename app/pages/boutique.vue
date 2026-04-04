<script setup lang="ts">
const { data: page } = await useAsyncData('boutique', () => {
  return queryCollection('content').path('/boutique').first()
})

const products = [
  {
    name: 'Bouquet du Printemps',
    description: 'Tulipes, renoncules et pivoines dans un camaïeu de roses.',
    price: 'CHF 45.–',
    image: '/images/fleur-rose.jpg',
  },
  {
    name: 'Composition Champêtre',
    description: 'Fleurs des champs, graminées et feuillages sauvages.',
    price: 'CHF 55.–',
    image: '/images/bouquet-nature.jpg',
  },
  {
    name: 'Bouquet Soleil',
    description: 'Tournesols, dahlias et solidagos aux tons chauds.',
    price: 'CHF 50.–',
    image: '/images/annie-spratt-70918.jpg',
  },
  {
    name: 'Couronne de Saison',
    description: 'Couronne murale en fleurs séchées et feuillages naturels.',
    price: 'CHF 65.–',
    image: '/images/brooke-lark-186697.jpg',
  },
]
</script>

<template>
  <div>
    <Hero
      title="Boutique"
      subtitle="Nos compositions florales de saison"
      image="/images/annie-spratt-138434.jpg"
    />

    <section class="py-20">
      <UContainer>
        <SectionTitle
          title="Fleurs de saison"
          subtitle="Compositions disponibles sur commande"
        />

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <UCard
            v-for="product in products"
            :key="product.name"
            variant="outline"
            class="group hover:shadow-lg transition-all duration-300"
          >
            <template #header>
              <img
                :src="product.image"
                :alt="product.name"
                class="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              >
            </template>

            <h3 class="font-heading text-xl text-brown-950 mb-1">{{ product.name }}</h3>
            <p class="text-brown-600 text-sm mb-3">{{ product.description }}</p>
            <p class="text-terracotta-500 font-bold text-lg">{{ product.price }}</p>

            <template #footer>
              <UButton
                label="Commander"
                icon="i-lucide-shopping-bag"
                color="primary"
                variant="soft"
                block
              />
            </template>
          </UCard>
        </div>

        <!-- Contenu markdown additionnel -->
        <div v-if="page" class="mt-16 prose prose-lg mx-auto max-w-3xl">
          <ContentRenderer :value="page" />
        </div>
      </UContainer>
    </section>
  </div>
</template>
