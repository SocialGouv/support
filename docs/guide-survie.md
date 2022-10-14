# Guide de survie de la PR

## Introduction

Chaque produit possède plusieurs environnements.

Les environnements de `preprod` et de `prod` ont des URLs et des bases de données statiques.

Les environnements de `review` sont créés lors de la créations des *pull requests* sur Github.

Toute création d'une *pull request* entraine la création d'un environnement dédié complet (containers, routes, DNS, base de données, jobs...).

#### Exemple

Si une *pull request* est créée à partir d'une branche nomée `feature-x`, l'URL principale du nouvel environnement créé sera:
```
https://[PRODUIT]-feature-x.dev.fabrique.social.gouv.fr
```

#### Tableau récapitulatif

| URL                                             | Usage         |
|-------------------------------------------------|---------------|
| [PRODUIT]-feature-x.dev.fabrique.social.gouv.fr | review        |
| [PRODUIT]-preprod.dev.fabrique.social.gouv.fr   | preproduction |
| [PRODUIT].fabrique.social.gouv.fr               | production    |


## Les checks

A chaque push sur une branche une série de checks est executée.

Un check représente l'execution d'une [action Github](https://github.com/features/actions) sur la branche courante.

Les actions peuvent avoir deux origines:
    - une applications Github effectuant des vérifications automatiques
    - des actions déclarées dans le repository à l'emplacement suivant: `.github/workflows/**.yaml`

### La liste des checks

- sécurité
    - socket security *(par défaut)*
    - gitguardian *(par défaut)*
- qualité
    - tests
    - sonarcloud *(par défaut)*
    - semantic PR *(par défaut)*
- déploiement
    - kontinuous

### L'execution des actions

Le merge d'une PR peut etre conditionnée par le résultat d'un check, autrement dit de l'execution d'une action.

Les checks en erreur peuvent impliquer des correctifs du code source necessitant un nouveau `push` sur la branche qui relancera automatiquement l'ensemble des checks.

Des checks en erreur dû à des dysfonctionnements aléatoires du système de CI/CD peuvent être relancés à la main, individuellement, depuis l'interface Github.

- accéder aux logs
- gestion des erreurs
    - erreur dans le code
    - erreur dans la CI/CD
- relancer une action
    - toujours relancer une action qui échoue
- remonter une erreur
    - à l'équipe de dev *(channel: `s/<produit>/dev`)*
    - à l'équipe SRE *(channel: `g/support`)*
    - inclure la ligne dans l'url

## Les déploiements

### Kubernetes et le *Cloud Ready*

#### Étapes du déploiement:
1. Build des images: Docker, Kaniko, BuildX
1. Enregistrement des images: local, DockerHub, GHCR, Harbor
1. Run des images: Docker, Docker Compose, Kubernetes


![](https://i.imgur.com/xGRhNU3.jpg)

#### Pré-requis techniques:
- gestion du context (prod | preprod | review): variables d'env ou CI/CD, secrets (build & run)
- stateless (replication, load-balancing)
- container ready
    - Dockerfile
    - pas de process `root`

#### Exemple de Dockerfile:
- [Dockerfile NextJS](https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile)

### Accés aux clusters (dev | prod)

- Accéder à Rancher
    - https://rancher.fabrique.social.gouv.fr/dashboard
- Récupérer son profil kubernetes
- Se connecter au cluster (k9s, lens)

:warning: Seuls les membres de la team admin du repository du produit dans Github ont les permissions suffisantes pour visualiser les ressources relatives à leur produit dans les clusters Kubernetes de `dev` et de `prod`.

### Accès aux déploiements

- xray
- les déploiements, namespaces
- les pods
- les logs
- ouvrir un shell
    - lister les variables d'env
- les secrets
    - afficher les secrets chiffrés
    - afficher les secrets déchiffrés

### Accès à Postgres

- créer une paire de clés pub/priv
```
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
- enregistrer sa clé ssh publique
    - demander à un membre de l'équipe **SRE**
    - https://gitlab.fabrique.social.gouv.fr/infra/azure-secure-vm/-/blob/master/group_vars/rg_manageddb_stack/vars.yml
- accéder à bastion
```
ssh my_login@40.89.139.58
```
- ouvrir un tunnel ssh
```
ssh -L 1111:[app]devserver.postgres.database.azure.com:5432 [user]@40.89.139.58
```
- accéder à la base de données
```
psql --host=127.0.0.1 --database=postgres --user=postgres
```

### Gestion des secrets

- les secrets utilisés par le produit
    - secrets auto-générés (BDD)
    - secrets créés manuellement
- localiser des secrets dans le repository
```
<produit>/.kontinuous/env/<dev|preprod|prod>/templates/**.sealed-secret.yaml
```
- créer/remplacer un secret
    - https://socialgouv.github.io/sre-tools/
    - pour les environnements de `dev` et de `preprod`
    - pour l'environnement de `prod`

## Merge

- le merge d'une PR sur la branche `master` met à jour l'environnement `preprod`
- le merge d'une PR sur les branches `masters`, `alpha`, `beta` et `next` déclenche la création d'un **tag**
- la création d'un tag déclenche une mise en production conditionnée par une validation manuelle

## Extras

- nettoyage des environnements & BDD
    - fermeture de la PR
    - nettoyage automatique apres 7 jours (Janitor)
- documentation
    - https://socialgouv.github.io/support
