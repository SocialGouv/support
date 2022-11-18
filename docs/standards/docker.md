# Build des images Docker

## Optimisation d'une image Docker pour nodejs



```
# If applicable, use slim version as it is around 300 Mo smaller
ARG NODE_VERSION=16-slim

#--- Build stage
FROM node:$NODE_VERSION as build # utiliser uniquement des images officielles

# Build a rootless image for security reasons, and use an user id rather than a user name
USER 1000
WORKDIR /app

COPY package.json yarn.lock ./
# Don't add "--production" here as dev dependencies are usually required to build the app
RUN yarn install

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