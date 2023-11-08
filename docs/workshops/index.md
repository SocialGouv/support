# Workshops proposés

> N'hésitez pas à proposer d'autres sujets

## Onboarding : 1h

- Equipe fabrique
- Standards tech de la fabrique, présentation de la doc
- CI/CD
- Offre plateforme (services, support, kube...)
- pub template : CSP, robots, workflows, docker, talisman, testing, DSFR...

👉 [Slides templates](https://docs.google.com/presentation/d/1DQMVxy87BEQ-VDF1tJ03jpPBbQnZtTfcDucfoMwVSM0/edit#slide=id.p)

👉 [Guide de survie de la PR](https://docs.google.com/presentation/d/1x9H2-SHsF6mXuByijX7u3gTC5CeT4nmbpI1z-NOtyUE/edit#slide=id.g19cdb22e463_0_136)

👉 [Documentation support](https://socialgouv.github.io/support)

## PostgreSQL : 30 mins

- Promo des features et CNPG
- Tooling dev : port-forward, pgcli...
- CI
- CNPG/Grafana...
- Analyse perfs sentry

👉 [Doc base de données](https://socialgouv.github.io/support/docs/standards/databases)

## Hygiène sécu : 30 mins

- Poste de travail
  - nettoyer ses downloads
  - chiffrer son disque dur
  - talisman
- Applicatif
  - pratiques de code
  - sealed-secrets
  - clamav
  - chiffrement de fichier
  - maintenance issues sécurité GitHub

👉 [Doc sécurité](https://socialgouv.github.io/support/docs/standards/securite)

## Dockerfile++ : 30 mins et +

- tips'n'tricks for faster builds
- docker & kube security

👉 [Doc images docker](https://socialgouv.github.io/support/docs/standards/docker)

## Prendre en main la plateforme de déploiement : 1h

Prérequis: docker, docker-compose

Init + déploiement d'un projet from scratch (basic NodeJS app)

- Dockerfile
- Workflows GitHub
- kontinuous init et build
- découverte tooling supervision (grafana, loki)
- rancher / lens / k9s
- kube:
  - probes et resources
  - gestion des configs, secrets, envs

👉 [Guide de survie de la PR](https://docs.google.com/presentation/d/1x9H2-SHsF6mXuByijX7u3gTC5CeT4nmbpI1z-NOtyUE/edit#slide=id.g19cdb22e463_0_136)

👉 [Doc images docker](https://socialgouv.github.io/support/docs/standards/docker)

## kubernetes++ : 2h et +

Prérequis: docker, docker-compose, workshop #1

Déployer et debugger des composants additionnels

- kontinuous
  - deploy
  - config
  - values
- Jobs et CronJobs
- autoscaling
- CNPG
- hasura
- pods de debug
- minikube

👉 [Guide de survie de la PR](https://docs.google.com/presentation/d/1x9H2-SHsF6mXuByijX7u3gTC5CeT4nmbpI1z-NOtyUE/edit#slide=id.g19cdb22e463_0_136)

👉 [Doc kontinuous](https://socialgouv.github.io/kontinuous)
