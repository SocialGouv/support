# Déployer en production from scratch

## TL;DR

Pour avoir une app déployée en production en 2 minutes sans lire la doc, c'est par ici :

&#10145;&#65039; [template d'application SocialGouv](https://github.com/SocialGouv/template)

## Intro

### Point de départ et prérequis

Plusieurs possibilités :

- soit partir d'un **code existant**
- soit générer une application from scratch, par exemple en suivant le [tutorial Next.js](https://nextjs.org/docs/getting-started)

Dans tous les cas, il faut :

- créer un dépôt github de [l'organisation SocialGouv](https://github.com/socialgouv) et y publier le code.
- ajouter une route de health check (vue simple qui renvoie un HTTP 200) sur la route `/healthz`.
  Par exemple avec Next.js, créer un fichier `pages/healthz.js` qui contient :

```javascript
const Page = () => <div>It Works!</div>;
export default Page;
```

### Ajouter une pipeline de test

- prérequis : avoir une commande qui lance un test. Avec une nouvelle app Next.js : `yarn lint`.
- créer un workflow github de test en ajoutant un fichier `.github/workflows/test.yaml` avec par exemple :

```yaml
name: Tests

on:
  push:
    branches:
      - "**"
    tags-ignore:
      - v*

concurrency:
  cancel-in-progress: true
  group: tests-${{ github.ref }}

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Node setup
        uses: actions/setup-node@v2
        with:
          node-version: "16"

      - name: Yarn cache setup
        uses: c-hive/gha-yarn-cache@v2

      - name: Install dependencies
        run: yarn --frozen-lockfile --prefer-offline

      - name: Run linter
        run: yarn lint
```

## Déployer une review branch

Le déploiement d'une review branch se fait en deux étapes :

- vous devez d'abord publier les images docker de vos applications sur le registry GitHub
- puis déployer votre application à partir de ces images.

### Build docker et vérifications en local

WARNING: Cette section est actuellement rédigée uniquement pour une app Next.js. Pour un autre cas, il faut au minimum
un fichier Dockerfile qui build un service web écoutant sur le port 3000.

- copier les fichiers [Dockerfile](/assets/Dockerfile.txt) et
  [.dockerignore](/assets/.dockerignore.txt) dans votre projet
- ajouter l'option suivante dans le fichier `next.config.js` :

```javascript
experimental: {
  outputStandalone: true;
}
```

Exemple de fichier [next.config.js](/assets/next.config.js) complet.

- Build de l'image en local :

```sh
docker build -t nextjs-docker .
```

- Exécuter en local et vérifier sur http://localhost:3000 :

```sh
docker run -p 3000:3000 nextjs-docker
```

?> **Note pour une application existante :** les containers doivent tourner sur des users non-privilégiés (UID > 0), et pour que ce soit vérifiable il faut identifier
un utilisateur par son UID chiffré dans la directive docker du `Dockerfile` (ex `USER 101`).


### Build et enregistrement de l'image docker au push

Dans un nouveau workflow github `review.yaml` (i.e. dans un fichier `.github/workflows/review.yaml`), ajouter un job qui utilise l'action toute prête `SocialGouv/actions/autodevops-build-register`:

```yaml
register-app:
  name: Build & Register app
  runs-on: ubuntu-latest
  steps:
    - name: Use autodevops build and register
      uses: SocialGouv/actions/autodevops-build-register@v1
      with:
        environment: dev
        imagePackage: app
        token: ${{ secrets.GITHUB_TOKEN }}
```

Ce job build l'image avec le Dockerfile par défaut à la racine et sauve l'image dans le registre github associé au dépôt.

?> A ce stade, le fichier `review.yaml` complet est : [review.yaml](/assets/review_1.yaml).

!> Pour vérifier que l'image docker est buildée et accessible, aller dans l'onglet "Packages" de Github et lancer en local un `docker pull ...` du package tel qu'indiqué par github.

### Déploiement de la preview

Afin de déployer la review branch dans l'environnement de dev de SocialGouv, il faut ajouter deux choses :

- un deuxième job dans le fichier existant `review.yaml` qui va utiliser l'action de déploiement `SocialGouv/kube-workflow`
- un dossier `.kube-workflow` à la racine du dépôt

Le **job de déploiement** à ajouter dans le fichier `.github/workflows/review.yaml` est :

```yaml
deploy:
  name: Deploy review branch
  runs-on: ubuntu-latest
  needs: [register-app]
  steps:
    - name: Use kube-workflow deployment
      uses: SocialGouv/kube-workflow@v1
      with:
        environment: dev
        token: ${{ secrets.GITHUB_TOKEN }}
        kubeconfig: ${{ secrets.KUBECONFIG }}
        rancherProjectId: ${{ secrets.RANCHER_PROJECT_ID }}
        rancherProjectName: ${{ secrets.RANCHER_PROJECT_NAME }}
```

?> A ce stade, le fichier `review.yaml` complet est : [review.yaml](/assets/review_2.yaml).

Ensuite il faut créer **un dossier `.kube-workflow`**, qui contiendra la configuration de votre déploiement (format HELM), avec l'arborescence générale suivante :

    .kube-workflow/
        common/
          values.yaml
        env/
          dev/
            templates/
              ...
            values.yaml
          preprod/
            ...
          prod/
            ...

Pour l'instant, nous nous intéressons seulement au fichier `common/values.yaml`.

Le fichier `common/values.yaml` minimaliste déclare notre composant unique (`app`), le nom du
package et la route de health check. Il contient :

```yaml
app:
  enabled: true
  imagePackage: app
  probesPath: /api/healthz
  replicas: 1
```


!> Pour que le déploiement fonctionne, il faut avoir réglé plusieurs variables d'environnement dans le dépôt (`KUBECONFIG`, `RANCHER_PROJECT_ID` et `RANCHER_PROJECT_NAME`). Cette étape est effectuée par l'équipe SRE.

?> Plus de détail sur la configuration sur-mesure de [kube-workflow](https://github.com/SocialGouv/kube-workflow).

## Bonnes pratiques

### Nettoyer les environnements de review

A chaque fois qu'une PR est fermée, c'est une bonne habitude de supprimer toutes les ressources qui ont été créées pour déployer la review branch.

Pour ça, il faut ajouter un nouveau workflow `.github/workflows/deactivate.yaml` qui se charge de tout nettoyer.

Exemple de fichier complet : [deactivate.yaml](/assets/deactivate.yaml)

?> Dans tous les cas, un [janitor](https://codeberg.org/hjacobs/kube-janitor) s'occupe de supprimer tous les ressources de review qui n'ont pas eu d'activité [depuis 1 semaine](https://socialgouv.github.io/support/#/faq?id=nettoyage-des-environnements-kube-de-dev). Il
ne faut donc pas s'étonner que le déploiement d'une review branch ait disparu à son retour de vacances...

### Détection des vulnérabilités

Github propose des outils pour scanner le code automatiquement à la recherche de vulnérabilités. Pour l'activer, il suffit de :

- aller dans l'onglet `Security` du dépôt github
- dans la partie `Security Overview`, cliquer sur le bouton `Set up code scanning` puis `Configure CodeQL alerts`.

Github propose alors de créer un nouveau workflow `.github/workflows/codeql-analysis.yml`. Il suffit de committer les changements proposés.

### Mettre à jour les dépendances

[Renovate](https://github.com/renovatebot/renovate) est un outil qui permet de suivre les dépendances d'un projet et de soumettre automatiquent des PR quand des mises à jour des paquets sont dispos.

Cet outil est configuré à l'échelle de l'organisation SocialGouv, donc il va automatiquement proposer une première PR sur votre dépôt pour ajouter la configuration requise. Il suffit de la merger pour démarrer !

Plus de détails dans la [FAQ renovate](https://socialgouv.github.io/support/#/faq?id=utilisation-de-renovate)

## Déployer en preprod

Cette étape est très proche de la review branch. Il suffit de créer un fichier `.github/workflows/preproduction.yaml` qui contient :

```yaml
name: Preproduction

on:
  push:
    branches:
      - "master"
    tags-ignore:
      - v*

concurrency:
  cancel-in-progress: true
  group: preproduction

jobs:
  register-app:
    name: Build & Register app
    runs-on: ubuntu-latest
    steps:
      - name: Use autodevops build and register
        uses: SocialGouv/actions/autodevops-build-register@v1
        with:
          environment: preprod
          imagePackage: app
          token: ${{ secrets.GITHUB_TOKEN }}

  deploy:
    name: Deploy preproduction
    runs-on: ubuntu-latest
    needs: [register-app]
    environment:
      name: preproduction
      url: https://PROJECT_NAME-preprod.dev.fabrique.social.gouv.fr/
    steps:
      - name: Use kube-workflow deployment
        uses: SocialGouv/kube-workflow@v1
        with:
          environment: preprod
          token: ${{ secrets.GITHUB_TOKEN }}
          kubeconfig: ${{ secrets.KUBECONFIG }}
          rancherProjectId: ${{ secrets.RANCHER_PROJECT_ID }}
          rancherProjectName: ${{ secrets.RANCHER_PROJECT_NAME }}
```

Les changements viennent :

- dans les conditions du `on:` : on déploie tous les commits de master sauf les tags.
- de `environment=preprod`
- de l'ajout d'une clause `environnement` avec nom et url pour spécifier à Github de ranger ce déploiement dans l'environnement de preproduction.
`
!> Il faut penser à remplacer `PROJECT_NAME` par le nom du projet, qui est en général le nom du dépôt github.

## Faire une release

Les releases sont faites automatiquement avec [semantic-release](https://github.com/semantic-release/semantic-release).

Il faut créer un fichier `.github/workflows/release.yaml` qui contient :

```yaml
name: Release

on:
  workflow_dispatch:
  push:
    branches: [master, alpha, beta, next]

jobs:
  release:
    name: Release
    runs-on: ubuntu-latest
    steps:
      - uses: SocialGouv/actions/autodevops-release@v1
        with:
          author-name: ${{ secrets.SOCIALGROOVYBOT_NAME }}
          author-email: ${{ secrets.SOCIALGROOVYBOT_EMAIL }}
          github-token: ${{ secrets.SOCIALGROOVYBOT_BOTO_PAT }}
```


Plus de détails dans la [FAQ semantic-release](https://socialgouv.github.io/support/#/faq?id=semantic-release)

## Déployer en production

Le déploiement en production est très proche de la préproduction. Il faut ajouter un fichier `.github/workflows/production.yaml` qui contient :

```yaml
name: Production

on:
  push:
    tags:
      - v*
      
concurrency:
  cancel-in-progress: true
  group: production

jobs:
  register-app:
    name: Build & Register app
    runs-on: ubuntu-latest
    steps:
      - name: Use autodevops build and register
        uses: SocialGouv/actions/autodevops-build-register@v1
        with:
          environment: prod
          imagePackage: app
          token: ${{ secrets.GITHUB_TOKEN }}

  deploy:
    name: Deploy production
    runs-on: ubuntu-latest
    needs: [register-app]
    environment:
      name: production
      url: https://PROJECT_NAME.fabrique.social.gouv.fr/
    steps:
      - name: Use kube-workflow deployment
        uses: SocialGouv/kube-workflow@v1
        with:
          environment: prod
          token: ${{ secrets.GITHUB_TOKEN }}
          kubeconfig: ${{ secrets.KUBECONFIG }}
          rancherProjectId: ${{ secrets.RANCHER_PROJECT_ID }}
          rancherProjectName: ${{ secrets.RANCHER_PROJECT_NAME }}
```

Ce qui change principalement par rapport à la preprod est qu'on ne déploie que les tags.

!> Il faut penser à remplacer `PROJECT_NAME` par le nom du projet, qui est en général le nom du dépôt github.

!> Les variables d'environnement du dépôt github doivent être mises à jour pour la prod (notamment `KUBECONFIG`). C'est géré par l'équipe SRE.

## Prochains sujets - soon

- Les variables d'environnement
  - front/back
  - run/build
  - sealed/configmap
- App dynamique avec une DB
- Monitoring/dashboards/logs


