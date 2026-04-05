# Tutulipe

Site vitrine de l'artisan fleuriste **Tutulipe** — Delémont, Suisse.

## Stack

- [Nuxt 4](https://nuxt.com) — Framework Vue.js
- [Nuxt UI](https://ui.nuxt.com) — Composants UI (Tailwind CSS v4)
- [Nuxt Content](https://content.nuxt.com) — Contenu Markdown
- [Sveltia CMS](https://sveltiacms.app) — Interface d'administration

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

- Site : http://localhost:3000
- Admin CMS : http://localhost:3000/admin/ (Chrome requis, "Work with Local Repository")

## Production

```bash
npm run build
node .output/server/index.mjs
```

Déployé automatiquement sur [Vercel](https://tutulipe.vercel.app) à chaque push sur `main`.

## Structure du contenu

Les fichiers Markdown dans `content/` sont éditables via l'interface admin Sveltia CMS :

| Fichier | Page |
|---|---|
| `content/index.md` | Accueil (hero, services, témoignage, CTA) |
| `content/boutique.md` | Boutique |
| `content/realisations/*.md` | Réalisations (portfolio) |
| `content/actualites/*.md` | Articles de blog |

## Souveraineté des données

Aucune ressource externe en production :
- Polices servies depuis `public/fonts/`
- CMS servi depuis `public/admin/sveltia-cms.js`
- Images dans `public/images/`
