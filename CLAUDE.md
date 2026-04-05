# Tutulipe — Guide Claude Code

## Stack

- **Framework** : Nuxt 4.4 (structure `app/`)
- **UI** : Nuxt UI v3 (Tailwind CSS v4 + Reka UI)
- **Contenu** : Nuxt Content v3 (collections typées Zod, fichiers Markdown)
- **CMS** : Sveltia CMS (admin à `/admin`, config dans `public/admin/config.yml`)
- **Polices** : Dancing Script (titres) + Open Sans (corps) — locales dans `public/fonts/`
- **Icônes** : Lucide (via Nuxt Icon)
- **Déploiement** : Vercel (SSR, auto-deploy sur push)

## Commandes

```bash
npm run dev       # Serveur dev (http://localhost:3000)
npm run build     # Build production
npm run generate  # Build SSG
npm run preview   # Preview du build
```

## Structure

```
app/                    # Code source Vue (srcDir Nuxt 4)
  components/           # Hero, ProjectCard, SectionTitle
  layouts/default.vue   # Header (logo + nav) + Footer
  pages/                # Routes (index, boutique, réalisations, actualités)
content/                # Fichiers Markdown (édités via Sveltia CMS)
  index.md              # Accueil (frontmatter riche : hero, services, témoignage, CTA)
  boutique.md           # Page boutique
  realisations/         # Collection : projets floraux
  actualites/           # Collection : articles de blog
content.config.ts       # Schéma des collections (Zod)
public/
  admin/                # Sveltia CMS (index.html + config.yml + sveltia-cms.js)
  fonts/                # Polices locales (woff2)
  images/               # Logo + photos
```

## Palette de couleurs

| Nom | HEX | Usage |
|---|---|---|
| lavender | #9BB3DB | Primary (boutons, liens) |
| olive | #6D7400 | Secondary (témoignage) |
| peach | #F5AC6D | Accent (décorations) |
| terracotta | #D67057 | CTA, prix |
| brown | #3B2523 | Neutral (texte, footer) |

Définies dans `app/assets/css/main.css` via `@theme`.

## Conventions

- **Code** : anglais (variables, composants)
- **Commits** : français, prefix `feat:`, `fix:`, `docs:`, `chore:`
- **Zéro CDN** : tout est servi localement (polices, JS Sveltia, images)
- **Contenu éditable** : les données affichées sur les pages viennent du frontmatter Markdown, pas de valeurs en dur dans les composants Vue

## CMS — Sveltia

- Admin accessible à `/admin` (fichier statique, zéro backend)
- En dev local : "Work with Local Repository" (nécessite Chrome + File System Access API)
- En prod : authentification GitHub OAuth
- Config : `public/admin/config.yml` (collections, champs, widgets)
- Le JS Sveltia est téléchargé localement dans `public/admin/sveltia-cms.js`

## Content — Architecture

Les pages utilisent `queryCollection()` + `<ContentRenderer />` (Nuxt Content v3).
La page d'accueil lit le frontmatter de `content/index.md` pour alimenter les composants Vue (Hero, Services, Témoignage, CTA). Le client modifie ces champs via Sveltia CMS.

## Références

- Repo : https://github.com/fallinov/tutulipe
- Production : https://tutulipe.vercel.app
- Sveltia CMS docs : https://sveltiacms.app/en/docs/
