# Développement

> Les solutions Google sont proscrites par le Ministère du fait de l'utilisation qui est faite des données collectées par Google.

> L'utilisation de services SAAS tiers doit être soumise à l'équipe #Legal

## Conventions de la fabrique

Nous utilisons GitHub pour tous nos projets publics et exceptionnellement notre GitLab interne pour les projets plus sensibles.

- Utiliser la [licence Apache-2.0](https://www.numerique.gouv.fr/publications/politique-logiciel-libre/pratique/#aide-au-choix-de-la-licence) pour les codes sources
- Standardiser le code avec nos linters : https://github.com/SocialGouv/linters
- Maintenir son projet à jour avec notre config renovate : https://github.com/SocialGouv/renovate-config
- Conventionner les commits GIT : https://conventionalcommits.org/
- Conventionner le versionning : https://semver.org

Nous encourageons l'utilisation de [semantic-release](https://github.com/semantic-release/semantic-release) pour générer automagiquement les changelogs et releases.

### GIT Flow

> les `releases` sont déclenchées via un Job manuel du pipeline et executent `semantic-release`

#### Phase de lancement

Lors du démarrage du projet, il est d'usage d'adopter un workflow simple qui permet d'itérer très rapidement sur les premiers prototypes.

- branche par défaut : `dev`
- les `pull-requests` permettent de déployer des environnements de review. `[SHA].dev.[PRODUIT].fabrique.social.gouv.fr`
- **[TODO]** la branche `dev` permet de recevoir toutes les PRs dans un environnement `latest` avec une URL stable : `latest.dev.[PRODUIT].fabrique.social.gouv.fr`
- le merge de `dev` vers `master` permet d'envoyer directement en `production` : `[PRODUIT].fabrique.social.gouv.fr`

#### Lancement MVP

Une fois le premier MVP réalisé :

- la branche `master` est protégée par des code reviews.
- chaque `release` déploie dans un environnement de préprod : `[VERSION].preprod.[PRODUIT].fabrique.social.gouv.fr`
- le déploiement en `production` se fait depuis un Job manuel du pipeline de la release vers `[PRODUIT].fabrique.social.gouv.fr`

## Accessibilité (A11Y)

- [référentiel RGAA](http://references.modernisation.gouv.fr/rgaa-accessibilite/)
- [Guide du développeur RGAA 3](https://github.com/DISIC/guide-developpeur)

## Services à disposition

- Web analytics : https://matomo.fabrique.social.gouv.fr
- Suivi des exceptions : https://sentry.fabrique.social.gouv.fr
- SMTP : https://tipimail.com

L'accès à ces services est à demander au besoin à l'équipe SRE.
