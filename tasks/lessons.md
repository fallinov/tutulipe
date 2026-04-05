# Lessons Learned

## 2026-04-05 — Nuxt Studio alpha inutilisable en local

**Contexte** : intégration de nuxt-studio pour l'édition visuelle du contenu
**Erreur** : OAuth cassé (cookies Brave, port mismatch, module alpha bugué), plus d'une heure de debug
**Correction** : remplacé par Sveltia CMS (fichier HTML statique + config.yml)
**Règle** : ne pas utiliser de module en alpha pour un workflow critique. Sveltia CMS est stable et fonctionne en 5 minutes.

## 2026-04-05 — Variables d'env Vercel avec newline

**Contexte** : ajout des identifiants OAuth GitHub sur Vercel via `echo | vercel env add`
**Erreur** : `echo` ajoute un `\n` à la fin de la valeur → GitHub reçoit `client_id=xxx%0A` → 404
**Correction** : utiliser `printf` au lieu de `echo` pour éviter le newline trailing
**Règle** : toujours utiliser `printf "valeur"` (sans newline) quand on pipe vers `vercel env add`

## 2026-04-05 — Icône Lucide inexistante

**Contexte** : utilisation de `i-lucide-candle` dans la section services
**Erreur** : l'icône `candle` n'existe pas dans Lucide → warning console
**Correction** : remplacé par `i-lucide-flame`
**Règle** : vérifier l'existence des icônes sur https://lucide.dev/icons avant utilisation

## 2026-04-05 — Polices Google Fonts — mauvaises URLs

**Contexte** : téléchargement local des polices Open Sans
**Erreur** : URLs hardcodées obsolètes → fichiers de 1.6 KB (pages d'erreur)
**Correction** : récupérer les URLs via l'API CSS de Google Fonts avec le bon User-Agent Chrome
**Règle** : pour télécharger des polices Google Fonts, faire `curl -sLH "User-Agent: Mozilla/5.0 ..." "https://fonts.googleapis.com/css2?family=..."` puis extraire les URLs du CSS retourné
