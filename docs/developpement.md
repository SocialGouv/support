# Développement

> L'utilisation de services SAAS tiers doit obligatoirement être soumise à l'équipe #Legal de la fabrique.

## Conventions de la fabrique

GitHub est utilisé pour tous nos projets publics et exceptionnellement notre GitLab interne pour les projets plus sensibles.

- Utiliser la [licence Apache-2.0](https://www.numerique.gouv.fr/publications/politique-logiciel-libre/pratique/#aide-au-choix-de-la-licence) pour les codes sources
- Standardiser le code avec nos linters : https://github.com/SocialGouv/linters
- Maintenir son projet à jour avec notre config renovate : https://github.com/SocialGouv/renovate-config cf [la FAQ](/faq?id=utilisation-de-renovate)
- Conventionner les commits GIT : https://conventionalcommits.org/
- Conventionner le versionning : https://semver.org
- Conventionner les commentaires : https://conventionalcomments.org/
- Releaser sur GitHub/npm : avec [semantic-release](https://github.com/semantic-release/semantic-release) cf [la FAQ](/faq?id=installer-semantic-release)
- Récupérer les erreurs applicatives dans notre [sentry](https://sentry.fabrique.social.gouv.fr)
- Utiliser [DashLord](https://dashlord.fabrique.social.gouv.fr) pour monitorer les bonnes pratiques.
- Le [système de design de l'état](https://gouvfr.atlassian.net/wiki/spaces/DB/overview?homepageId=145359476) doit être utilisé par défaut. une implémentation React existe ici : https://github.com/dataesr/react-dsfr

> 👉 👉 👉 Le repository [template](https://github.com/socialgouv/template) intègre toutes ces conventions par défaut.

### Git flow : **trunk-based**

- La branche par défaut est `master`.
- Chaque `pull-request` permet de déployer un environnement de review.
- Chaque merge sur `master` déclenche une release qui peut être poussée en préproduction puis production.

[![](_media/git-flow-simple.png ":size=1000x350")](https://excalidraw.com/#json=C7MTFWdQ53ao453K86doB,SgdphjWpmSiuDMBu-qwKVg)

Ce GIT Flow est implémenté dans les [GitHub actions @SocialGouv](https://github.com/SocialGouv/actions), l'équipe SRE vous aidera à les mettre en place.

:warning: La release est conditionnée par la présence d'un commit conventionnel de type `fix: some fix` ou `feat: some new feature`. (cf [semantic-relase default commit conventions](https://github.com/semantic-release/semantic-release#commit-message-format))

### Urls des environnements

| Url                                             | Usage            |
| ----------------------------------------------- | ---------------- |
| [PRODUIT]-feature-x.dev.fabrique.social.gouv.fr | feature branches |
| [PRODUIT]-preprod.dev.fabrique.social.gouv.fr   | preproduction    |
| [PRODUIT].fabrique.social.gouv.fr               | production       |

## Accessibilité (A11Y)

L'accessibilité des applications mobiles et web doit être intégrée dès le démarrage des projets. L'objectif est d'atteindre minimum 75% de conformité au RGAA.

Pour un audit rapide, la DINUM propose l'audit flash : https://design.numerique.gouv.fr/outils/diagnostic-flash/

- [référentiel RGAA](https://design.numerique.gouv.fr/en/outils/audit-complementaire/)
- [Extension browser assistant RGAA](https://design.numerique.gouv.fr/articles/2021-10-06-assistant-rgaa/)

## Services à disposition

Plusieurs services sont disponibles, [cf infrastucture](infrastructure?id=services-transverses)

L'accès à ces services est à demander au besoin à l'équipe SRE.

## Contributions externes

La Fabrique a plusieurs intérêts à ce que les projets soient non seulement _open source_ mais également ouverts aux contributions extérieures :

- recevoir l'aide volontaire de personnes hors de l'organisation
- simplifier l'accueil d'un nouveau membre dans l'équipe de développement
- pouvoir demander des contributions comme exercice de recrutement
- encourager la maintenabilité du code

La contrainte principale à satisfaire est que n'importe qui puisse mettre en place facilement un environnement fonctionnel de développement et de test en ayant accès seulement au dépôt public.

### Données

Si l'application a besoin de données pour fonctionner, créer des échantillons et les laisser à disposition sur le dépôt du projet. L'échantillon doit pouvoir être inséré dans la base de données simplement.

Les données peuvent être privées ou confidentielles. Dans ce cas, il est évidemment important de transformer l'échantillon pour qu'il ne contienne que des données non sensibles.

Voir par exemple https://hasura.io/docs/latest/graphql/core/hasura-cli/hasura_seed/.

### Authentification

S'il existe un système d'authentification qui empêche un contributeur externe d'utiliser normalement le produit, alors l'environnement local de développement doit permettre de contourner ce système d'authentification.

Par exemple, si l'authentification se fait avec un OAuth Github qui vérifie que la personne est membre de l'organisation Github SocialGouv, alors un développeur externe sera bloqué et ne pourra pas tester l'application. La version locale de l'application doit donc remplacer ou modifier cet OAuth afin de permettre au développeur de travailler.

### Secrets

L'application peut avoir besoin des secrets (notamment issus de fichier `.env`) pour fonctionner. On peut distinguer deux types de secrets :

Le premier est une donnée connue par le serveur et qui ne doit pas être connue par le client (par exemple une clé privée servant à signer un JWT). Dans ce cas, le secret pourra être donné au développeur externe. Il faut seulement s'assurer que la valeur du secret fournie dans l'environnement de développement n'est pas la même que dans certaines versions déployées du produit. Dans notre exemple, cela signifie générer une nouvelle clé privée pour l'environnement de développement et prendre garde à ne pas laisser la même qu'en production, preproduction ou review.

Le second est une donnée connue par le serveur et qui doit être connue seulement des administrateurs du produit (par exemple un token d'accès à un service tiers, une API d'envoi de mail, etc.). Dans ce cas, le secret ne pourra pas être donné aux autres développeurs, même avec une valeur de remplacement. Il faut alors identifier quelles fonctions du produit ne pourront pas être laissées dans l'environnement de développement local. Par exemple, si on ne peut pas donner un certain token permettant de télécharger des données mais que l'on fournit à la place un échantillon de ces données au développeur, une fonctionnalité a été exclue mais le produit reste fonctionnel.

#### .env.sample

Une fois la liste des secrets à fournir en environnement de développement clairement établie, une des manières de les fournir sur le dépôt est des créer une fichier `.env.sample` que le développeur pourra copier vers `.env` après avoir cloné le dépôt.

### Serveurs de développement

La mise en place des serveurs de développement doit aussi être accessible. Le plus souvent, on pourra utiliser `docker-compose` pour assembler les composants de backend et les bases de données. Parallèlement, on pourra utiliser les serveurs de développement fournis avec les frameworks (React, Next.js) pour le frontend.

### Documentation

Une fois qu'un environnement de développement viable et accessible a été conçu, il est primordial de bien documenter comment un développeur peut le mettre en place facilement. Cela peut par exemple prendre la forme d'une section dans le README du projet qui décrit la mise place en précisant clairement les prérequis et l'ordre des étapes.

En plus de la mise en place de l'environnement de développement, il est important de documenter le fonctionnement du produit, ses différents composants ainsi que leurs APIs afin de faciliter la prise en main de nouveaux développeurs.
