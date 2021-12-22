# Développement

> Les solutions Google sont proscrites par le Ministère du fait de l'utilisation qui est faite des données collectées par Google. L'utilisation de services SAAS tiers doit être soumise à l'équipe #Legal de la fabrique.

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

### GIT Flow

- La branche par défaut est `master`
- Chaque `pull-request` permet de déployer un environnement de review.
- Chaque merge sur `master` déclenche une release qui peut être poussée en préproduction puis production.

[![](_media/git-flow-simple.png ":size=700x280")](https://excalidraw.com/#json=C7MTFWdQ53ao453K86doB,SgdphjWpmSiuDMBu-qwKVg)

Ce GIT Flow est implémenté dans les [GitHub actions @SocialGouv](https://github.com/SocialGouv/actions), l'équipe SRE vous aidera à les mettre en place.

### Urls des environnements

| Url                                             | Usage            |
| ----------------------------------------------- | ---------------- |
| [PRODUIT]-feature-x.dev.fabrique.social.gouv.fr | feature branches |
| [PRODUIT]-preprod.dev.fabrique.social.gouv.fr   | preproduction    |
| [PRODUIT].fabrique.social.gouv.fr               | production       |

## Accessibilité (A11Y)

L'accessibilité des applications mobiles et web doit être intégrée dès le démarrage des projets. L'objectif est d'atteindre minimum 75% de conformité au RGAA.

- [référentiel RGAA](https://design.numerique.gouv.fr/en/outils/audit-complementaire/)
- [Extension browser assistant RGAA](https://design.numerique.gouv.fr/articles/2021-10-06-assistant-rgaa/)

## Services à disposition

Plusieurs services sont disponibles, [cf infrastucture](infrastructure?id=services-transverses)

L'accès à ces services est à demander au besoin à l'équipe SRE.
