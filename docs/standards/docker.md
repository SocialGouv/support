# Images Docker

> Les images Docker doivent pouvoir tourner en `root-less` et tourner avec un uid>0

> Vous devez utiliser uniquement des images Docker officielles et les surcharger éventuellement

> Vous devez utiliser des [versions LTS](https://nodejs.dev/fr/about/releases/) maintenues à jour avec renovate (ou DependaBot).

## Optimisation d'une image Docker pour NodeJS

```
# If possible, use slim version as it is smaller
ARG NODE_VERSION=16-slim

#--- Build stage
FROM node:$NODE_VERSION as build # utiliser uniquement des images officielles

# Build a rootless image for security reasons, and use an user id rather than a user name
USER 1000
WORKDIR /app

COPY package.json yarn.lock ./
# Don't add "--production" here as dev dependencies are usually required to build the app.
# Use "--frozen-lockfile" to be sure package.json has not been updated without updating yarn.lock too.
RUN yarn --frozen-lockfile

# Warning: don't forget to have a `.dockerignore` file when doing a `COPY . .` to limit docker build context.
COPY . .

# Note: re-run "yarn install" with production flag to remove dev dependencies, and then clean for the run stage
RUN yarn build && yarn install --production && yarn cache clean


#--- Run stage
FROM node:$NODE_VERSION

USER 1000
WORKDIR /app

COPY --from=build /app/ /app/

# Note: Don't use "yarn start" as it doesn't handle linux signals (graceful shutdown for instance)
CMD ["node", "dist/app.js"]
```

Il est important d'avoir un `.dockerignore` complet, pour limiter la taille de l'image et optimiser le cache et les builds :

```
*.md
.git
**/dist
**/build
**/node_modules
**/.next
**/.docz
**/coverage
node_modules
npm-debug.log
yarn-error.log
.next
```

## exemple avec Hasura

Cf https://github.com/SocialGouv/template/blob/hasura/hasura/Dockerfile

## exemple avec Strapi

Cf https://github.com/SocialGouv/1000jours/pull/1281/files

## Synthèse des attentes

|     Niveau     | Recommandation                                                                       |
|:-------------- |:-------------------------------------------------------------------------------------|
|   Obligation   | Utiliser une des images source contenue dans la [liste maintenue par l'équipe SRE](https://github.com/SocialGouv/docker) ou une [docker official image](https://docs.docker.com/trusted-content/official-images/)     |
|   Obligation   | Un conteneur s'exécute sans privilèges `rootless`                                    |
|   Obligation   | Un UID numérique supérieur à `0` doit être défini numériquement dans le fichier `dockerfile`       |
|   Obligation   | Ne pas embarquer de secret ou d'outillage de dev dans les images       |
|   Obligation   | Le composant utilisé dans l'image utilise la version LTS en cours                    |
|   Obligation   | Le fichier `.dockerignore` maintenu par l'équipe SRE doit être utilisé               |
| Recommandation | Ne pas utiliser d'images de conteneurs basées sur `DEBIAN`, `UBUNTU`                 |
|   Obligation   | Les images de containers doivent régulièrement être mises à jour                     |
