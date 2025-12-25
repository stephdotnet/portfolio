---
title: 'Mettre à jour vos dépendances npm et package.json en une fois'
date: '2023-02-20'
tags: ['NPM', 'JavaScript', 'Webdev']
excerpt: 'Découvrez npm-check-updates pour synchroniser vos dépendances npm avec votre package.json efficacement.'
---

# Mettre à jour vos dépendances npm et package.json en une fois

## Le problème avec NPM

Contrairement à Composer (PHP) qui a introduit une fonctionnalité "bump" en juin 2022, NPM n'a pas de mécanisme intégré pour mettre à jour simultanément les dépendances et documenter ces changements dans package.json.

## Pourquoi le contrôle de version est important

Trois raisons clés pour maintenir un versioning clair :

- **Capacité de rollback** vers des versions précédentes du code
- **Support de collaboration** et gestion des conflits de merge
- **Documentation historique** montrant quand les changements ont été faits

## La solution : npm-check-updates (NCU)

L'outil recommandé est [npm-check-updates](https://www.npmjs.com/package/npm-check-updates), créé par Raine Revere. Il offre :

- Liste toutes les mises à jour de dépendances disponibles
- Sélection interactive des mises à jour
- Mise à jour automatique du package.json

### Installation

```bash
npm install -g npm-check-updates
```

### Utilisation

Pour voir les mises à jour disponibles :

```bash
ncu
```

Pour mettre à jour le package.json :

```bash
ncu -u
```

Ensuite, exécutez `npm install` pour appliquer les changements et régénérer le package-lock.json.

## Avantage

Cette approche produit des diffs Git propres et traçables lors du commit des mises à jour de dépendances. Vous pouvez ainsi voir exactement quelles dépendances ont été mises à jour et quand.

## Astuce bonus

Utilisez `ncu -i` pour le mode interactif qui vous permet de sélectionner individuellement les packages à mettre à jour :

```bash
ncu -i
```

Cela affiche une liste avec des cases à cocher pour choisir précisément ce que vous voulez mettre à jour.
