# FAQ

## Installer semantic-release pour publier sur npm

> Les packages npm doivent être publiés en tant que `@socialgouv/package-name`. 
> Le champ author doit être positionné à `Fabrique numérique des Ministères Sociaux <contact@fabrique.social.gouv.fr> (https://fabrique.social.gouv.fr)`

[semantic-release](https://github.com/semantic-release/semantic-release) permet de publier automatiquement votre package npm selon les règles de votre workflow GitHub.

Il publie automatiquement vos changes sur GitHub et npm, et génère un changelog grâce aux [commits conventionnels](https://www.conventionalcommits.org/)

Un exemple de référence est [dispo ici](https://github.com/SocialGouv/kosko-charts) :

- Les règles du workflow GitHub : dans [.github/workflows/main.yml](https://github.com/SocialGouv/kosko-charts/blob/master/.github/workflows/main.yml)
- La config semantic-release dans [.releaserc.yml](https://github.com/SocialGouv/kosko-charts/blob/master/.releaserc.yml)
- Le champ `"publishConfig": { "access": "public" }` doit être renseigné dans le `package.json`

Une fois le workflow implémenté, l'équipe SRE vous fournit un `NPM_TOKEN` pour la publication npm


## Utiliser la CI GitLab

Pour utiliser GitLab et y faire tourner des jobs de CI/CD, il faut :

 - créer un compte sur https://gitlab.factory.social.gouv.fr avec l'auth GitHub
 - créer un nouveau projet en choissant "CI/CD pipelines for external repo"
 - choisir le projet GitHub source

GitLab synchronisera alors automatiquement le repo à chaque push sur GitHub et executera les jobs définis dans `.gitlab-ci.yml`
