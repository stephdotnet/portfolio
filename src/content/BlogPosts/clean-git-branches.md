---
title: "Nettoyer vos branches Git locales"
date: "2024-02-27"
tags: ["Git", "GitHub", "Shell"]
excerpt: "Un workflow efficace pour supprimer les branches Git locales obsolètes après la fusion des pull requests."
---

# Nettoyer vos branches Git locales

Lorsqu'on collabore avec Git et des dépôts distants, on accumule souvent des branches locales qui deviennent obsolètes. Voici un workflow pour nettoyer efficacement.

## Prérequis

Cet article suppose que vos dépôts GitHub sont configurés pour supprimer automatiquement les branches après la fusion des pull requests. Ce paramètre aide à identifier les branches obsolètes.

## Processus étape par étape

### 1. Élaguer les références distantes

```bash
git remote prune origin
```

Cette commande supprime les références aux branches distantes supprimées de votre dépôt local.

### 2. Identifier les branches orphelines

```bash
git branch -vv
```

Affiche les informations de suivi des branches. Les branches dont le distant a été supprimé affichent un marqueur "gone".

Pour filtrer uniquement ces branches :

```bash
git branch -vv | grep "gone" | awk '{print $1}'
```

### 3. Supprimer les branches

La suppression initiale avec `xargs git branch --delete` peut échouer pour les branches avec des commits non poussés.

## La commande finale

Voici la commande à mettre en alias si vous avez activé la suppression des branches à la fusion sur GitHub :

```bash
git branch -vv | grep "gone" | awk '{print $1}' | xargs git branch --delete --force
```

Cette ligne combine l'élagage, l'identification et la suppression forcée en une seule opération pour une maintenance efficace du dépôt.

## Créer un alias

Ajoutez cette ligne à votre `~/.bashrc` ou `~/.zshrc` :

```bash
alias git-clean='git remote prune origin && git branch -vv | grep "gone" | awk '\''{print $1}'\'' | xargs git branch --delete --force'
```

Ensuite, utilisez simplement `git-clean` pour nettoyer vos branches locales !
