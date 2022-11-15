# Build des images Docker

## Optimisation d'une image Docker pour nodejs



```
# If applicable, use slim version as it is around 300 Mo smaller
ARG NODE_VERSION=16-slim

#--- Build stage
FROM node:$NODE_VERSION as build

USER 1000
WORKDIR /app

COPY package.json yarn.lock ./
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
CMD ["node","dist/app.js","--all"]
```