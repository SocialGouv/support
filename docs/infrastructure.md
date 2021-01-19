# Infrastructure

> Notre objectif est d'avoir des applications reproductibles qui peuvent tourner dans des containers à destination d'environnements kubernetes.

> Les applications, containers et scripts doivent respecter des standards ouverts pour être portables.

Nous utilisons [notre GitLab interne](https://gitlab.factory.social.gouv.fr/) pour répliquer nos repos GitHub et y faire tourner les pipelines de CI/CD qui déploient les applications sur des **clusters Kubernetes sur Azure**.

Les pipelines et images docker sont autant que possible mutualisés sur nos repos GitHub [gitlab-ci-yml](https://github.com/SocialGouv/gitlab-ci-yml) et [docker](https://github.com/SocialGouv/docker).

## Kubernetes (K8S)

Notre cible de déploiement est Kubernetes.

Vous devez donc containeriser votre application, à minima avec docker-compose.

Voir les [best practices Kubernetes](/kubernetes).

## Bases de données

La fabrique propose des [Postgres managés](https://azure.microsoft.com/fr-fr/services/postgresql/#overview) qui sont backupés automatiquement, à J-7 en "just-in-time" puis via des archives quotidiennes au-delà.

La restauration des données se fait sur demande à l'équipe OPS.

## Stockage object

La fabrique propose du [stockage objet](https://docs.microsoft.com/fr-fr/azure/storage/blobs/storage-blobs-introduction) pour stocker des données dans les nuages.

## Services transverses

| Service                                                | Usage                               |
| ------------------------------------------------------ | ----------------------------------- |
| [Matomo](https://matomo.fabrique.social.gouv.fr)       | Tracking web RGPD-friendly          |
| [Sentry](https://sentry.fabrique.social.gouv.fr)       | Logs d'exceptions applicatives      |
| [Tipimail](https://tipimail.com)                       | Emails transactionnels              |
| [UppTime](https://socialgouv.github.io/upptime)        | Uptime monitoring                   |
| [Grafana](https://grafana.fabrique.social.gouv.fr)     | Monitoring / supervision            |
| [Office365](/outlook-office-365.md)                    | Emails en `fabrique.social.gouv.fr` |
| [NextCloud](https://nextcloud.fabrique.social.gouv.fr) | Drive/Fichiers partagés             |

## On-demand

Si vous avez d'autres besoins, l'équipe SRE est à votre disposition pour en discuter.
