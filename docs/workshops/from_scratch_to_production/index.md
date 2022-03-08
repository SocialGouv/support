# Getting started

# Intro

## Prérequis 

- soit partir d'un **code existant** et le publier dans un dépôt github de [l'organisation SocialGouv](https://github.com/socialgouv)
- soit cloner le [template d'application de SocialGouv](https://github.com/socialgouv/template)

!> En partant d'une app existante, il faut penser à ajouter une route de health check (vue simple qui renvoie un HTTP 200) sur la route `/healthz`.

## Ajouter une pipeline de test

- prérequis : avoir une commande qui lance un test. Avec une nouvelle app Next.js : `yarn lint`.
        
- créer un workflow github de test en ajoutant un fichier `.github/workflows/test.yml` avec par exemple :


```yaml
name: Tests

on:
  pull_request:
    branches:
      - '**'

concurrency:
  cancel-in-progress: true
  group: ${{ github.head_ref }}


jobs:
  test:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Node setup
      uses: actions/setup-node@v2
      with:
        node-version: '16'

    - name: Yarn cache setup
      uses: c-hive/gha-yarn-cache@v2

    - name: Install dependencies
      run: yarn --frozen-lockfile --prefer-offline

    - name: Run lint
      run: yarn lint
```


# Déployer une review branch

## Build docker et vérifications en local

- Copier les fichiers `Dockerfile` et `.dockerignore` du [template SocialGouv](https://github.com/socialgouv/template).
- Build de l'image en local : 
 
        docker build -t nextjs-docker .

- Exécuter en local et vérifier sur http://localhost:3000 :

        docker run -p 3000:3000 nextjs-docker

?> **Note pour une application existante :** les containers doivent tourner sur des users non-privilégiés (UID > 0), et pour que ce soit vérifiable il faut identifier
un utilisateur par son UID chiffré dans la directive docker du `Dockerfile` (ex `USER 101`).

## Build et enregistrement de l'image docker au push

Dans un nouveau workflow github `review.yml` (i.e. dans un fichier `.github/workflows/review.yml`), ajouter un job qui utilise l'action toute prête `SocialGouv/actions/autodevops-build-register`:

```yaml
register-app:
  name: Build & Register app
  runs-on: ubuntu-latest
  steps:
    - name: Use autodevops build and register
      uses: SocialGouv/actions/autodevops-build-register@v1
      with:
        imageName: doc-demo-app/app
        token: ${{ secrets.GITHUB_TOKEN }}
        dockerbuildargs: |
          GITHUB_SHA=${{ env.GITHUB_SHA }}
```

Ce job build l'image avec le Dockerfile par défaut à la racine et sauve l'image dans le registre github associé au dépôt.

Exemple de fichier : [`review.yml`](https://github.com/SocialGouv/doc-demo-app/blob/master/.github/workflows/review.yml)


**Attention :** dans la configuration de l'action, le paramètre
`imageName` doit correspondre au nom du dépôt et au nom du service. Au départ il y a un seul service principal `app`, donc `imageName` est `doc-demo-app/app`.


**Vérification :** pour valider que l'image docker est buildée et accessible, aller dans l'onglet "Packages" de Github et lancer en local un `docker pull ...` du package tel qu'indiqué par github.


## Déploiement de la preview

Afin de déployer la review branch dans l'environnement de dev de SocialGouv, il faut ajouter deux choses : 

- un deuxième job dans le fichier existant `review.yml` qui va utiliser l'action de déploiement `SocialGouv/actions/autodevops-helm-deploy``
- un dossier `.socialgouv` à la racine du dépôt 

Le **job de déploiement** à ajouter dans le fichier `.github/workflows/review.yml`  est :

```yaml
deploy:
  name: Deploy review branch
  runs-on: ubuntu-latest
  needs: [register-app]
  steps:
    - name: Use autodevops deployment
      uses: SocialGouv/actions/autodevops-helm-deploy@v1
      with:
        environment: "dev"
        token: ${{ secrets.GITHUB_TOKEN }}
        kubeconfig: ${{ secrets.KUBECONFIG }}
        rancherId: ${{ secrets.RANCHER_PROJECT_ID }}
        socialgouvBaseDomain: ${{ secrets.SOCIALGOUV_BASE_DOMAIN }}
```

Ensuite il faut créer **un dossier `.socialgouv`**, avec l'arborescence suivante :

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



# Déployer en preprod

# Faire une release

# Déployer en production


# Variables d'environnement

- front/back
- run/build
- sealed/configmap
