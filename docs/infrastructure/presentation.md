# Présentation

> Notre objectif est d'avoir des applications reproductibles qui peuvent tourner dans des containers à destination d'environnements kubernetes.

> Les applications, containers et scripts doivent respecter des standards ouverts pour être portables.

L'ensemble des applications utilise une CI/CD interne pour l'automatisation, notamment le build des images docker et leur déploiement sur kubernetes.

## Kubernetes (K8S)

Notre cible de déploiement est Kubernetes.

Vous devez donc containeriser votre application, à minima avec docker-compose.

Voir les best practices [Docker](/docs/standards/docker) et [Kubernetes](/docs/standards/kubernetes).

## Bases de données

### PostgreSQL

La fabrique propose des PostgreSQL backupés automatiquement, à J-7 en "just-in-time" puis via des archives quotidiennes au-delà.

La restauration des données se fait sur demande à l'équipe SRE.

Voir aussi les [bonnes pratiques liées aux BDD](/docs/standards/databases) et [comment accéder à ses instances de base de données](https://socialgouv.github.io/support/docs/faq#bases-de-donn%C3%A9es-postgresql-cnpg).

### Elastic Search

Nous pouvons mettre à disposition des clusters Elastic Search pour vos besoin (via ElasticCloud)

## Stockage object

La fabrique propose du stockage S3 pour stocker des données dans les nuages.

## Services transverses

| Service                                                  | Usage                               |
| -------------------------------------------------------- | ----------------------------------- |
| [Matomo](https://matomo.fabrique.social.gouv.fr)         | Tracking web RGPD-friendly          |
| [Sentry](https://sentry.fabrique.social.gouv.fr)         | Logs d'exceptions applicatives      |
| [Tipimail](https://tipimail.com)                         | Emails transactionnels              |
| [Grafana](https://grafana.fabrique.social.gouv.fr)       | Monitoring / supervision            |
| [Emails](/docs/infrastructure/emails)                    | Emails en `fabrique.social.gouv.fr` |
| [NextCloud](https://nextcloud.fabrique.social.gouv.fr)   | Drive/Fichiers partagés             |
| [Harbor](https://harbor.fabrique.social.gouv.fr)         | Registry docker                     |
| [OVH](https://ovh.com/)                                  | Noms de domaine personnalisés       |
| [VaultWarden](https://bitwarden.fabrique.social.gouv.fr) | Gestion des mots de passe           |

## On-demand

Si vous avez d'autres besoins, l'équipe SRE est à votre disposition pour en discuter.
