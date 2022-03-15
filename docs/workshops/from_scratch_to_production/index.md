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
- créer un workflow github de test en ajoutant un fichier `.github/workflows/test.yml` avec par exemple :

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

- copier les fichiers [Dockerfile](_media/workshop_from_scratch_to_production/Dockerfile ":ignore") et
  [.dockerignore](_media/workshop_from_scratch_to_production/dockerignore ":ignore") dans votre projet
- ajouter l'option suivante dans le fichier `next.config.js` :

```javascript
experimental: {
  outputStandalone: true;
}
```

Exemple de fichier [next.config.js](_media/workshop_from_scratch_to_production/next.config.js ":ignore") complet.

- Build de l'image en local :

        docker build -t nextjs-docker .

- Exécuter en local et vérifier sur http://localhost:3000 :

        docker run -p 3000:3000 nextjs-docker

?> **Note pour une application existante :** les containers doivent tourner sur des users non-privilégiés (UID > 0), et pour que ce soit vérifiable il faut identifier
un utilisateur par son UID chiffré dans la directive docker du `Dockerfile` (ex `USER 101`).

### Build et enregistrement de l'image docker au push

Dans un nouveau workflow github `review.yml` (i.e. dans un fichier `.github/workflows/review.yml`), ajouter un job qui utilise l'action toute prête `SocialGouv/actions/autodevops-build-register`:

```yaml
register-app:
  name: Build & Register app
  runs-on: ubuntu-latest
  steps:
    - name: Use autodevops build and register
      uses: SocialGouv/actions/autodevops-build-register@v1
      with:
        environment: dev
        imageName: GITHUB_REPO_NAME/app
        token: ${{ secrets.GITHUB_TOKEN }}
```

Ce job build l'image avec le Dockerfile par défaut à la racine et sauve l'image dans le registre github associé au dépôt.

?> A ce stade, le fichier `review.yml` complet est : [review.yml](_media/workshop_from_scratch_to_production/review_1.yml ":ignore").

!> Dans la configuration de l'action, le paramètre
`imageName` doit correspondre au nom du dépôt et au nom du service. Au départ il y a un seul service principal `app`, donc `imageName` est `GITHUB_REPO_NAME/app`,
où il faut remplacer `GITHUB_REPO_NAME` par le nom de votre dépôt.

!> Pour vérifier que l'image docker est buildée et accessible, aller dans l'onglet "Packages" de Github et lancer en local un `docker pull ...` du package tel qu'indiqué par github.

### Déploiement de la preview

Afin de déployer la review branch dans l'environnement de dev de SocialGouv, il faut ajouter deux choses :

- un deuxième job dans le fichier existant `review.yml` qui va utiliser l'action de déploiement `SocialGouv/actions/autodevops-helm-deploy`
- un dossier `.socialgouv` à la racine du dépôt

Le **job de déploiement** à ajouter dans le fichier `.github/workflows/review.yml` est :

```yaml
deploy:
  name: Deploy review branch
  runs-on: ubuntu-latest
  needs: [register-app]
  steps:
    - name: Use autodevops deployment
      uses: SocialGouv/actions/autodevops-helm-deploy@v1
      with:
        environment: dev
        token: ${{ secrets.GITHUB_TOKEN }}
        kubeconfig: ${{ secrets.KUBECONFIG }}
        rancherId: ${{ secrets.RANCHER_PROJECT_ID }}
        socialgouvBaseDomain: ${{ secrets.SOCIALGOUV_BASE_DOMAIN }}
```

?> A ce stade, le fichier `review.yml` complet est : [review.yml](_media/workshop_from_scratch_to_production/review_2.yml ":ignore").

Ensuite il faut créer **un dossier `.socialgouv`**, qui contiendra la configuration de votre déploiement (format HELM), avec l'arborescence suivante :

    .socialgouv/
        chart/
          values.project.yaml
          values.dev.yaml

Le fichier `values.project.yaml` minimaliste déclare notre composant unique (`app`), le nom du
package et la route de health check. Il contient :

```yaml
components:
  app: true

app:
  imagePackage: app
  probesPath: /healthz
```

Le fichier `values.dev.yaml` minimaliste contient seulement :

```yaml
app:
  replicas: 1
```

!> Pour que le déploiement fonctionne, il faut avoir réglé plusieurs variables d'environnement dans le dépôt (`KUBECONFIG`, `RANCHER_PROJECT_ID` et `SOCIALGOUV_BASE_DOMAIN`). Cette étape est effectuée par l'équipe SRE.

## Bonnes pratiques

### Nettoyer les environnements de review

A chaque fois qu'une PR est fermée, c'est une bonne habitude de supprimer toutes les ressources qui ont été créées pour déployer la review branch.

Pour ça, il faut ajouter un nouveau workflow `.github/workflows/deactivate.yml` qui se charge de tout nettoyer.

Exemple de fichier complet : [deactivate.yml](_media/workshop_from_scratch_to_production/deactivate.yml ":ignore")

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

Cette étape est très proche de la review branch. Il suffit de créer un fichier `.github/workflows/preproduction.yml` qui contient :

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
          imageName: GITHUB_REPO_NAME/app
          token: ${{ secrets.GITHUB_TOKEN }}

  deploy:
    name: Deploy preproduction
    runs-on: ubuntu-latest
    needs: [register-app]
    steps:
      - name: Use autodevops deployment
        uses: SocialGouv/actions/autodevops-helm-deploy@v1
        with:
          environment: preprod
          token: ${{ secrets.GITHUB_TOKEN }}
          kubeconfig: ${{ secrets.KUBECONFIG }}
          rancherId: ${{ secrets.RANCHER_PROJECT_ID }}
          socialgouvBaseDomain: ${{ secrets.SOCIALGOUV_BASE_DOMAIN }}
```

Les changements viennent :

- dans les`conditions du `on` : on déploie tous les commits de master sauf les tags.
- de `environment=preprod`

?> Il faut toujours remplacer `GITHUB_REPO_NAME` par le nom de votre dépôt.

## Faire une release

## Déployer en production

## Prochains sujets - soon

- Les variables d'environnement
  - front/back
  - run/build
  - sealed/configmap
- App dynamique avec une DB
- Monitoring/dashboards/logs
