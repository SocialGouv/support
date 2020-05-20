# FAQ

## Installer semantic-release

[semantic-release](https://github.com/semantic-release/semantic-release) permet de publier automatiquement votre package npm selon les règles de votre workflow GitHub.

Il publie automatiquement vos changes sur GitHub et npm, et génère un changelog grâce aux [commits conventionnels](https://www.conventionalcommits.org/)

Un exemple de référence est [dispo ici](https://github.com/SocialGouv/kosko-charts) :

- Les règles du workflow GitHub : dans [.github/workflows/main.yml](https://github.com/SocialGouv/kosko-charts/blob/master/.github/workflows/main.yml)
- La config semantic-release dans [.releaserc.yml](https://github.com/SocialGouv/kosko-charts/blob/master/.releaserc.yml)

Le groupe GitHub `SocialGouv` fournit plusieurs `secrets` utilisables dans vos jobs :

- `SOCIALGROOVYBOT_NPM_TOKEN`
- `SOCIALGROOVYBOT_NAME`
- `SOCIALGROOVYBOT_EMAIL`

Ces trois variables vous permettent de commiter et publier sur npm dans le scope `@socialgouv` directement. cf [exemple](https://github.com/SocialGouv/linters/blob/e0d4f43ed2b8999f4e6662604be9695508598851/.github/workflows/ci.yml#L58-L76)

> Les packages npm doivent être publiés en tant que `@socialgouv/package-name`.

## Utiliser la CI GitLab

Pour utiliser GitLab et y faire tourner des jobs de CI/CD, il faut :

- créer un compte sur https://gitlab.factory.social.gouv.fr avec l'auth GitHub
- créer un nouveau projet en choissant "CI/CD pipelines for external repo"
- choisir le projet GitHub source

GitLab synchronisera alors automatiquement le repo à chaque push sur GitHub et executera les jobs définis dans `.gitlab-ci.yml`
