---
title: 'Release sémantique automatique avec GitHub Actions'
date: '2023-05-22'
tags: ['GitHub', 'CI/CD', 'Tutorial']
excerpt: 'Comment automatiser la création de versions et releases avec le versioning sémantique et GitHub Actions.'
---

# Release sémantique automatique avec GitHub Actions

## Objectif

Automatiser :

- La création de tags de version basés sur les changements du dépôt
- La publication de releases déclenchée par des événements spécifiques

## Le versioning sémantique

Le versioning sémantique suit le format **X.Y.Z** où :

- **X** = Changements cassants (breaking changes)
- **Y** = Changements mineurs ou mises à jour rétrocompatibles
- **Z** = Correctifs ou patches

Cette convention permet aux utilisateurs de gérer leurs dépendances en toute sécurité.

## Pourquoi automatiser ?

Le tagging manuel via `git tag X.Y.Z && git push --tags` fonctionne mais manque de cohérence. L'automatisation nécessite une convention de nommage des commits standardisée.

## Conventional Commits

Une convention qui aide à identifier le type de changements introduits ([conventionalcommits.org](https://www.conventionalcommits.org/)). Les préfixes clés :

- `fix:` ou `refactor:` → bump de version patch/Z
- `feat:` → bump de version minor/Y
- `feat!:` → changement cassant/bump de version X

## Outil recommandé

**Better Commits** ([GitHub](https://github.com/Everduin94/better-commits)) fournit des prompts CLI pour écrire des messages de commit conventionnels.

## Implémentation : Workflow GitHub Actions

Créez le fichier `.github/workflows/semantic-release.yml` :

```yaml
name: Semantic Release

on:
  push:
    branches:
      - main

concurrency:
  group: ${{ github.ref }}
  cancel-in-progress: true

jobs:
  release:
    permissions:
      contents: write

    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v2

      - name: Get Next Version
        id: semver
        uses: ietf-tools/semver-action@v1
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          branch: main
          noVersionBumpBehavior: 'silent'

      - name: Create Release
        if: steps.semver.outputs.nextStrict != ''
        uses: ncipollo/release-action@v1.12.0
        with:
          allowUpdates: true
          draft: false
          makeLatest: true
          tag: ${{ steps.semver.outputs.nextStrict }}
          name: ${{ steps.semver.outputs.nextStrict }}
          generateReleaseNotes: true
          token: ${{ secrets.GITHUB_TOKEN }}
```

### Composants du workflow

- **`on`** : Déclenché sur les pushs vers main
- **`concurrency`** : Empêche les workflows simultanés
- **`checkout`** : Récupère le code du dépôt
- **`get next version`** : Analyse les commits depuis le dernier tag
- **`create release`** : Génère une release GitHub avec notes auto-générées

### Configuration initiale

Créez le premier tag manuellement :

```bash
git checkout origin/main && git tag 0.1.0 && git push --tags
```

## Notes de release automatiques

L'option `generateReleaseNotes: true` crée des résumés basés sur les pull requests fusionnées, fonctionnant comme un changelog automatique.

## Conclusion

GitHub Actions permet une automatisation gratuite et simple du versioning sémantique et des releases avec une configuration minimale.
