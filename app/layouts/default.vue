<script setup lang="ts">
const navigation = [
  [
    { label: 'Accueil', to: '/', icon: 'i-lucide-home' },
    { label: 'Réalisations', to: '/realisations', icon: 'i-lucide-image' },
    { label: 'Actualités', to: '/actualites', icon: 'i-lucide-newspaper' },
    { label: 'Boutique', to: '/boutique', icon: 'i-lucide-shopping-bag' },
  ],
]

const mobileMenuOpen = ref(false)
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-brown-100">
      <UContainer>
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center gap-3">
            <img
              src="/images/logo_tutulipe.png"
              alt="Tutulipe"
              class="h-12 w-auto"
            >
            <span class="font-heading text-2xl text-brown-950 hidden sm:block">
              Tutulipe
            </span>
          </NuxtLink>

          <!-- Navigation desktop -->
          <nav class="hidden md:block">
            <UNavigationMenu :items="navigation" />
          </nav>

          <!-- Menu mobile -->
          <UButton
            class="md:hidden"
            icon="i-lucide-menu"
            variant="ghost"
            color="neutral"
            @click="mobileMenuOpen = !mobileMenuOpen"
          />
        </div>

        <!-- Navigation mobile -->
        <nav v-if="mobileMenuOpen" class="md:hidden pb-4">
          <UNavigationMenu
            :items="navigation"
            orientation="vertical"
            class="w-full"
          />
        </nav>
      </UContainer>
    </header>

    <!-- Contenu -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-brown-950 text-brown-100 py-12">
      <UContainer>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-2xl text-white mb-4">Tutulipe</h3>
            <p class="text-brown-300">
              L'art floral au naturel. Compositions uniques pour tous vos événements.
            </p>
          </div>

          <div>
            <h4 class="font-semibold text-white mb-4">Navigation</h4>
            <ul class="space-y-2">
              <li><NuxtLink to="/" class="hover:text-peach-300 transition-colors">Accueil</NuxtLink></li>
              <li><NuxtLink to="/realisations" class="hover:text-peach-300 transition-colors">Réalisations</NuxtLink></li>
              <li><NuxtLink to="/actualites" class="hover:text-peach-300 transition-colors">Actualités</NuxtLink></li>
              <li><NuxtLink to="/boutique" class="hover:text-peach-300 transition-colors">Boutique</NuxtLink></li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold text-white mb-4">Contact</h4>
            <ul class="space-y-2 text-brown-300">
              <li class="flex items-center gap-2">
                <UIcon name="i-lucide-map-pin" />
                Rue des Fleurs 12, 2800 Delémont
              </li>
              <li class="flex items-center gap-2">
                <UIcon name="i-lucide-phone" />
                032 422 00 00
              </li>
              <li class="flex items-center gap-2">
                <UIcon name="i-lucide-mail" />
                info@tutulipe.ch
              </li>
            </ul>
          </div>
        </div>

        <USeparator class="my-8" />

        <p class="text-center text-sm text-brown-400">
          &copy; {{ new Date().getFullYear() }} Tutulipe. Tous droits réservés.
        </p>
      </UContainer>
    </footer>
  </div>
</template>
