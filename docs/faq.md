# FAQ

## Installer semantic-release pour publier sur npm

> Les packages npm doivent être publiés en tant que `@socialgouv/package-name`.
> Le champ author doit être positionné à `Fabrique numérique des Ministères Sociaux <contact@fabrique.social.gouv.fr> (https://fabrique.social.gouv.fr)`
> La licence pas défaut doit-être Apache-2.0

[semantic-release](https://github.com/semantic-release/semantic-release) permet de publier automatiquement votre package npm selon les règles de votre workflow GitHub.

Il publie automatiquement vos changes sur GitHub et npm, et génère un changelog grâce aux [commits conventionnels](https://www.conventionalcommits.org/)

Un exemple de référence est [dispo ici](https://github.com/SocialGouv/kosko-charts) :

- Les règles du workflow GitHub : dans [.github/workflows/main.yml](https://github.com/SocialGouv/kosko-charts/blob/master/.github/workflows/main.yml)
- La config semantic-release dans [.releaserc.yml](https://github.com/SocialGouv/kosko-charts/blob/master/.releaserc.yml)
- Le champ `"publishConfig": { "access": "public" }` doit être renseigné dans le `package.json`

Le groupe GitHub `SocialGouv` fournit plusieurs `secrets` utilisables dans vos jobs :

- `SOCIALGROOVYBOT_NPM_TOKEN`
- `SOCIALGROOVYBOT_NAME`
- `SOCIALGROOVYBOT_EMAIL`

Ces trois variables vous permettent de commiter et publier sur npm dans le scope `@socialgouv` directement. cf [exemple](https://github.com/SocialGouv/linters/blob/e0d4f43ed2b8999f4e6662604be9695508598851/.github/workflows/ci.yml#L58-L76)

## Utilisation de renovate

Le bot `renovate` permet d'automatiser la maintenance des dépendances de votre projet.

Vous devez ajouter un fichier `.github/renovate.json` dans votre projet avec la config souhaitée

Nous proposons deux `presets` de base :

### Config standard

Pour une maintenance quotidienne de votre projet

```js
{
  "enabled": true,
  "extends": ["github>SocialGouv/renovate-config"]
}
```

### Config light

Pour une maintenance raisonnée de votre projet

- patchs appliqués en groupe toutes les lundi matin automagiquement
- mineurs tous les 1er du mois via une PR groupée
- majors séparées tous les 1er du mois via des PR distinctes

```js
{
  "enabled": true,
  "extends": ["github>SocialGouv/renovate-config:light"]
}
```

#### Customisation

renovate propose de [nombreuses options](https://docs.renovatebot.com/) pour étendre ces `presets` et les adapter à vos besoins.

Il est possible de consulter les logs des jobs renovate ici : <https://app.renovatebot.com/dashboard>

## Utiliser la CI GitLab

Pour utiliser GitLab et y faire tourner des jobs de CI/CD, il faut :

- créer un compte sur <https://gitlab.factory.social.gouv.fr> avec l'auth GitHub
- créer un nouveau projet en choissant "CI/CD pipelines for external repo"
- pour le token, utiliser un token `SocialGroovyBot` en se connectant via le compte GitLab du bot
- choisir le projet GitHub source

GitLab synchronisera alors automatiquement le repo à chaque push sur GitHub et executera les jobs définis dans `.gitlab-ci.yml`

### `> ENOSPC: no space left on device, write` while running `docker build`

Ceci peut se produire lorsqu'il n'y a pas assez de mémoire pour le build docker dans un runner GitLab.

Augmentez la mémoire dans les arguments de build docker `--shm-size 768M` (`DOCKER_BUILD_ARGS` dans l'autodevops)

### Créer un secret pour accéder à un registre GitLab privé

1. Dans le projet GitLab, "Settings/Repository/Deploy Tokens", créer un nouveau token avec les droits `read_registry`

2. Créez le sealed-secret

```sh
#!/bin/sh
gitlab_project=some_gitlab_project_name
gitlab_user=gitlab+deploy-token-xxx
gitlab_token=somepass

sre-seal --name regcred "dockerconfigjson={\"auths\":{\"registry.gitlab.factory.social.gouv.fr/socialgouv/$gitlab_project\":{\"auth\":\"`echo -n \"$gitlab_user:$gitlab_token\"|base64`\",\"password\":\"$gitlab_token\",\"username\":\"$gitlab_user\"}}}"
```

Dans le YAML généré, modifier le type de `Opaque` à `kubernetes.io/dockerconfigjson`

> NB : ajouter `--cluster prod2 --namespace [app-namespace] --name regcred` pour un secret de production

3. Référencez ce secret dans votre deploiement

```yaml
spec:
  imagePullSecrets:
    - name: regcred
```

## Grafana

### Dashoards

Vous pouvez créer vos propres dashboards et vos propres groupes de dashboards qui regroupent les métriques techniques issues de l'infrastructure (réseau, storage, bases de donnés), du service (cpu, mem, hits...) ou de l'application si [vous exposez des métriques OpenMetrics](/kubernetes?id=exposer-les-métriques-de-mon-application)

### Logs Loki

Vous pouvez interroger vos logs applicatifs dans la section `Explore` de [Grafana](https://grafana.fabrique.social.gouv.fr/explore) avec [LogQL](https://grafana.com/docs/loki/latest/logql/).

Les logs applicatifs doivent respecter les [bonnes pratiques de logging](/kubernetes?id=bien-logger-dans-docker-et-donc-k8s)

#### Exemples

##### Logs de vos containers : `{cluster="dev2", namespace=~"myapp.*"} |= "webhook"`

Affiche les logs applicatifs qui contiennent `webhook` dans les namespaces `myapp*` du cluster `dev2`.

##### Logs Ingress : `{cluster="dev2", namespace="ingress-basic"} | json | vhost=myapp.dev2.fabrique.social.gouv.fr status=403`

Affiche les logs en erreur `403` du front nginx de votre application (ingress)

## Next.js

### Variables d'environnement côté frontend

La [methode actuellement recommandée](https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration) est d'utiliser des variables au build time en les prefixant par `NEXT_PUBLIC_` et en les ajoutant dans les settings/variables de votre projet GitLab. Vous pouvez alors les récupérer avec un simple `process.env` dans le code client ou serveur.

À noter que toute variable `NEXT_PUBLIC_*` définie lors du build (dans un .env ou via une variable d'env) sera remplacée dans le build par sa valeur et ne pourra plus être surchargée à l'éxécution.

## Azure Postgres

### `ERROR: cannot execute xxx in a read-only transaction`

Si le serveur est trop plein, il se met automatiquement en "read-only". Pour pouvoir faire le ménage, executer `SET SESSION CHARACTERISTICS AS TRANSACTION READ WRITE;` pour reactiver la mode "writeable".

Voir aussi la doc [Microsoft](https://docs.microsoft.com/fr-fr/azure/postgresql/concepts-pricing-tiers?WT.mc_id=Portal-Microsoft_Azure_Support#reaching-the-storage-limit).

### `Too many failed login attempts`

Par défaut, le `connection_throttling` est activé sur les logins PG. Il peut se désactiver via la console Azure PG / Server parameters puis désactiver `connection_throttling`.

### `remaining connection slots are reserved for non-replication superuser connections`

Les serveurs PG avec 1 core sont limités à 50 connections simultannées.

Se connecter au serveur PG en admin et :

```sql
SELECT pg_terminate_backend(pid)
    FROM pg_stat_activity
    WHERE state = 'idle'
      AND state_change < current_timestamp - INTERVAL '30' MINUTE;
 ```

See also [Limits in Azure Database for PostgreSQL](https://github.com/MicrosoftDocs/azure-docs/blob/master/articles/postgresql/concepts-limits.md#limits-in-azure-database-for-postgresql---single-server)

### Accès aux serveurs PG de dev

- Demander à l'équipe OPS d'ajouter votre clé publique sur le _bastion_
- Récupérer le secret `azure-pg-admin-user` de dev sur votre projet rancher
- Ouvrir un port local (ex: 1111) sur le serveur PG via le bastion : `ssh -L 1111:[app]dev.postgres.database.azure.com:5432 factory@40.89.139.58`
- Utiliser psql directement : `psql posgres://[app]admin%40[app]dev:[password]@127.0.0.1:1111?sslmode=require`

Voir la [procédure détaillée](https://gitlab.factory.social.gouv.fr/infra/documentation/-/blob/master/exploitation/databases/connexion_via_bastion.md)

### Restauration de backup

Les backups fournis par la team OPS sont issus de pg_dump.

Exemple de commande pour restaurer un tel fichier : 

```sh
docker cp /path/to/backup.psql.gz [container]:/tmp/backup.psql.gz
docker exec -ti [container] pg_restore -U [username] -d [dbname] --clean --no-owner --no-acl --verbose /tmp/backup.psql.gz
```
## Hasura

### JWK_KEY

Il vaut mieux utiliser une `JWK_KEY` statique plutôt qu'une `JWK_URL` qui nécessite que l'url soit disponible au démarrage d'hasura.

## Kubernetes

### comment débugger

Utiliser rancher ou k9s pour aller dans votre namespace puis votre pod et inspecter les logs et events.

Consulter les logs dans [Grafana](#grafana)

### requests/limits

Pour optimiser ces valeurs, scruter les graphs de grafana. Les `requests` sont les ressources minimales requises pour démarrer un pod. Les `limits` vont capper le CPU, et si la mémoire utilisée excède la limite définie, le pod sera tué et redémarré.

Il est important d'ajuster finement ces valeurs pour optimiser les ressources sur le cluster et pouvoir aller vers de la scalabilité.

### Lancer un job de backup de la BDD

Des jobs de backup des BDDs sont executés quotidiennement. Pour forcer un nouveau backup pour l'appli `xxx`, lancer `kubectl --context prod2 --namespace xxx create job --from=cronjob/backup-db-xxx my-backup`.

### IPs de sortie

| Nom            | IP            |
| -------------- | ------------- |
| Runners Gitlab | 51.11.226.128 |
| Cluster prod2  | 51.11.228.254 |

## Mattermost

### Mattermost Github integration

Se connecter en utilisant le client Web (semble ne pas fonctionner sinon): <https://mattermost.fabrique.social.gouv.fr>

Dans n'importe quel canal, taper:

```bash
/github connect
```

Puis cliquer sur le lien qui apparait pour autoriser l'accès à votre compte github.

Commandes utiles:

```bash
# activer les notifications
/github settings notifications on

# s'abonner à un repo (pulls,issues,creates,deletes)
/github subscriptions add SocialGouv/domifa

# liste ses abonnements:
/github subscriptions list
```

Source du plugin: <https://github.com/softdevteam/mattermost-github-integration>

### Mattermost Gitlab integration

Se connecter en utilisant le client Web (semble ne pas fonctionner sinon): <https://mattermost.fabrique.social.gouv.fr>

Dans n'importe quel canal, taper:

```bash
/gitlab connect
```

Puis cliquer sur le lien qui apparait pour autoriser l'accès à votre compte gitlab.

Commandes utiles:

```bash
# activer les notifications
/gitlab settings notifications on

# s'abonner à un repo (merges,issues,tag)
/gitlab subscriptions add SocialGouv/domifa

# si le plugin le demande, créer le webhook correspondant:
/gitlab webhook add SocialGouv/domifa

# liste ses abonnements:
/gitlab subscriptions list
```

Source du plugin: <https://github.com/NotSqrt/mattermost-integration-gitlab>

### Mattermost Gitlab-CI integration

Se rendre sur <https://mattermost.fabrique.social.gouv.fr/default/integrations/incoming_webhooks/add> et créer un webhook en sélectionant le canal sur lequel on souhaite publier les notifications. Récupérer l'url du webhook qui contiendra le token. Se rendre sur la page de configuration CI/CD du projet sur GitLab, example: https://gitlab.factory.social.gouv.fr/SocialGouv/emjpm/-/settings/ci_cd (remplacer emjpm par le nom du projet), et ajouter une variable intitulée `MATTERMOST_WEBHOOK` dans la sections `variables` et qui contiendra l'url du webhook.

Dans le fichier `.gitlab-ci` à la racine du projet

```yaml
Ma notification mattermost:
  image: registry.gitlab.factory.social.gouv.fr/devthejo/bash-curl:1.2.0
  only:
    refs:
      - tags
  script:
    - |
      echo '{"text":"🦊 release ready for production at '${CI_ENVIRONMENT_URL}'"}' \
        | curl -H 'Content-Type: application/json' ${MATTERMOST_WEBHOOK} -d @-
```

Pour échapper un texte multiline, l'envoyer sur `sed -z 's/\n/\\n/g'`:

```bash
NOTIF_MSG=$(./scripts/gitops/get-release-note | sed -z 's/\n/\\n/g')
echo '{"text":"'${NOTIF_MSG}'"}' \
  | curl -H 'Content-Type: application/json' ${MATTERMOST_WEBHOOK} -d @-
```

## Office 365

Cf [page dédiée](outlook-office-365.md)
