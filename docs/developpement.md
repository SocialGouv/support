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
- Récupérer les erreurs applicatives dans notre sentry

Nous encourageons l'utilisation de [semantic-release](/faq?id=installer-semantic-release) pour générer automagiquement les changelogs et releases.

### GIT Flow

[![](_media/git-flow-simple.png ":size=700x280")](https://excalidraw.com/#json=5398147975086080,1ttD0NIStZBZ8mcBLOEOPg)

- La branche par défaut est `master`
- Chaque `pull-request` permet de déployer un environnement de review.
- Le clic sur le job `release` déclenche le déploiement d'un environnement de `pré-production`.
- Le clic sur `trigger prodution` depuis un pipeline de release déclenche une mise en production.

Si vous utilisez le pipeline AutoDevOps fournit par [`@socialgouv/gitlab-ci-yml`](https://github.com/SocialGouv/gitlab-ci-yml/), vous pouvez automatiser certaines étapes :

- `AUTODEVOPS_RELEASE_AUTO` : chaque merge sur master déclenchera le process de release
- `AUTODEVOPS_PRODUCTION_AUTO` : chaque nouvelle release déclenchera une mise en production

### Urls des environnements

| Url                                             | Usage            |
| ----------------------------------------------- | ---------------- |
| feature-x-[PRODUIT].dev.fabrique.social.gouv.fr | feature branches |
| master-[PRODUIT].dev.fabrique.social.gouv.fr    | latest           |
| preprod.dev.fabrique.social.gouv.fr             | releases         |
| [PRODUIT].fabrique.social.gouv.fr               | production       |

## Accessibilité (A11Y)

- [référentiel RGAA](http://references.modernisation.gouv.fr/rgaa-accessibilite/)
- [Guide du développeur RGAA 3](https://github.com/DISIC/guide-developpeur)

## Services à disposition

Plusieurs services sont disponibles, [cf infrastucture](infrastructure?id=services-transverses)

L'accès à ces services est à demander au besoin à l'équipe SRE.
