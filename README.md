# creasteph.net

Site portfolio personnel de Stéphane Molano, développeur web sénior basé à Perpignan.

## Stack technique

- **[Astro](https://astro.build/)** - Générateur de site statique
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitaire
- **[DaisyUI](https://daisyui.com/)** - Composants UI pour Tailwind
- **[React](https://react.dev/)** - Pour les composants interactifs

## Prérequis

- Node.js 18+
- npm

## Installation

```bash
npm install
```

## Commandes

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement sur `localhost:4321` |
| `npm run build` | Génère le site statique dans `./dist/` |
| `npm run preview` | Prévisualise le build localement |

## Structure du projet

```
src/
├── assets/           # Images et ressources statiques
├── components/ui/    # Composants Astro (Navbar, Footer, Hero, etc.)
├── content/BlogPosts/# Articles de blog en Markdown
├── data/cv.ts        # Données du CV
├── layouts/          # Layout principal
├── pages/            # Pages du site
│   ├── index.astro
│   ├── cv.astro
│   ├── realisations.astro
│   ├── mentions-legales.astro
│   └── blog/
└── settings.ts       # Configuration du site (profil, réseaux sociaux, SEO)
```

## Configuration

### Paramètres généraux

Le fichier `src/settings.ts` contient la configuration principale :
- Informations de profil
- Liens vers les réseaux sociaux
- Paramètres SEO
- Configuration du thème

### CV

Le fichier `src/data/cv.ts` contient les données du CV structurées par sections (expériences, formations, compétences, langues).

### Articles de blog

Les articles sont des fichiers Markdown dans `src/content/BlogPosts/` avec le frontmatter suivant :

```markdown
---
title: "Titre de l'article"
date: "2024-01-15"
tags: ["Tag1", "Tag2"]
excerpt: "Description courte de l'article"
---

Contenu de l'article...
```

## Thème

Le site utilise un thème personnalisé basé sur la couleur verte `#5a9e2f` avec support du mode sombre. La configuration se trouve dans `tailwind.config.mjs`.

## Déploiement

Le site peut être déployé sur n'importe quelle plateforme supportant les sites statiques (GitHub Pages, Netlify, Vercel, etc.).

```bash
npm run build
```

Le site généré se trouve dans le dossier `dist/`.
