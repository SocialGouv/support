# FAQ

## Semantic-release

[Semantic-release](https://github.com/semantic-release/semantic-release) est utilisé pour créer des releases automatiques lors d'un merge sur la branche principale et `alpha, beta, next`.

La release est conditionnée par la présence d'un commit conventionnel de type `fix: some fix` ou `feat: some new feature` ([semantic-relase default commit conventions](https://github.com/semantic-release/semantic-release#commit-message-format))

Ajoutez un fichier [`.github/workflows/release.yml`](https://github.com/SocialGouv/standup/blob/8b130400ef80835f3d6fa0a8a56e98986a20e2f7/.github/workflows/release.yml) à votre repo.

### Déployer un hotfix

Si votre branche `master` a évolué, mais que vous souhaitez déployer un hotfix en préprod ou prod, créez une nouvelle branche `beta` ou `alpha` à partir de la derniere release et commitez un `fix:`.

`semantic-release` déclenchera alors une release `alpha` ou `beta` puis le workflow `production` vous proposera de la déployer.

### Pour publier sur npm

> Les packages npm doivent être publiés en tant que `@socialgouv/package-name`.

> Le champ author doit être positionné à `Fabrique numérique des Ministères Sociaux <contact@fabrique.social.gouv.fr> (https://fabrique.social.gouv.fr)`

> dans package.json, ajouter `"publishConfig":{"access": "public"}`

Pour publier sur npm, il vous faudra un fichier `release.yml` particulier, [exemple](https://github.com/SocialGouv/react-departements/blob/4e60cecc7a65f0c41255b4747d1dba9f065b3c2c/.github/workflows/release.yml)

Le groupe GitHub `SocialGouv` fournit plusieurs `secrets` utilisables dans vos jobs :

- `secrets.SOCIALGROOVYBOT_NPM_TOKEN`
- `secrets.SOCIALGROOVYBOT_NAME`
- `secrets.SOCIALGROOVYBOT_EMAIL`

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

> NB : ajouter `--cluster prod --namespace [app-namespace] --name regcred` pour un secret de production

3. Référencez ce secret dans votre deploiement

```yaml
spec:
  imagePullSecrets:
    - name: regcred
```

## Grafana

### Dashoards

Vous pouvez créer vos propres dashboards et vos propres groupes de dashboards qui regroupent les métriques techniques issues de l'infrastructure (réseau, storage, bases de donnés), du service (cpu, mem, hits...) ou de l'application si [vous exposez des métriques OpenMetrics](/docs/standards/kubernetes#exposer-les-métriques-de-mon-application). Pour interroger [Prometheus](https://prometheus.io/) qui expose les métriques, il faut utiliser le language PromQL. Exemples : https://timber.io/blog/promql-for-humans

### Logs Loki

Vous pouvez interroger vos logs applicatifs dans la section `Explore` de [Grafana](https://grafana.fabrique.social.gouv.fr/explore) avec [LogQL](https://grafana.com/docs/loki/latest/logql/).

Les logs applicatifs doivent respecter les [bonnes pratiques de logging](/docs/standards/kubernetes#bien-logger-dans-docker-et-donc-k8s)

#### Exemples

##### Logs de vos containers : `{cluster="dev2", namespace=~"myapp.*"} |= "webhook"`

Affiche les logs applicatifs qui contiennent `webhook` dans les namespaces `myapp*` du cluster `dev2`.

##### Logs Ingress : `{cluster="dev2", namespace="ingress-basic"} | json | vhost=myapp.dev2.fabrique.social.gouv.fr status=403`

Affiche les logs en erreur `403` du front nginx de votre application (ingress)

Cf cheat sheet LOKI : https://megamorf.gitlab.io/cheat-sheets/loki/

## Next.js

### Variables d'environnement côté frontend

Voir l'implémentation de [template](https://github.com/SocialGouv/template)

## Bases de données Azure Postgres

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

### Accès aux serveurs de bases de données PG de dev

**Notez bien que vous devez faire partie de la team `Admins` de votre startup sur GitHub pour pouvoir accéder à la db**

Vous pouvez vous connecter à vos instances PostgreSQL via Teleport.

- Téléchargez et installez le [GUI Teleport **Connect**](https://goteleport.com/download/) (c'est l'application **Teleport** qui est sélectionnée par défaut sur la page, il faut sélectionner **Teleport Connect**)
- Lancez l'application Teleport Connect
- Renseignez l'addresse suivante quand elle vous est demandée: **teleport.fabrique.social.gouv.fr** et authentifiez vous **avec Github**.
- Naviguez dans l'onglet "Databases"
- Choisissez votre serveur Postgres et cliquez sur "Connect" (avec le user `PostgresAdmins`) puis renseignez le nom de la db postgres que vous souhaitez accéder et cliquer sur run. (ex: `preprod`)

** :warning: De plus vous accéderez à la base de donnée en administrateur, vous êtes responsable de vos actions.**

#### Alternative via le CLI teleport `tsh`

- Téléchargez et installez le [CLI Teleport](https://goteleport.com/download/)
- Localement, se logger sur teleport avec : `tsh login --proxy=teleport.fabrique.social.gouv.fr teleport.fabrique.social.gouv.fr --auth=github`
- Se connecter à une DB avec psql : `tsh db connect --db-user=PostgresAdmins --db-name=postgres [DBNAME]`
  - Pour ouvrir seulement un tunnel SSH et pouvoir connecter l'outil de votre choix (par exemple `pg_dump`) : `tsh proxy db --db-user=PostgresAdmins --db-name=postgres --tunnel [DBNAME]`

💡 Pour configurer un client Postgres avec teleport, cf https://goteleport.com/docs/connect-your-client/gui-clients/

## Azure Storage

### Hebergement vidéo

Un stockage azure peut être utilisé pour stocker des vidéos hors de GIT. Il faut placer les videos dans un "blob container" public, et jouer la commande suivante pour autoriser le "seek" (headers content-range) : `az storage account blob-service-properties update --account-name xxxxx --default-service-version '2020-10-02'`

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

Des jobs de backup des BDDs sont executés quotidiennement. Pour forcer un nouveau backup pour l'appli `xxx`, lancer `kubectl --context prod --namespace xxx create job --from=cronjob/backup-db-xxx my-backup`.

### IPs du cluster

| Nom               | IP            |
| ----------------- | ------------- |
| Ingress PROD      | 20.74.14.77   |
| Ingress DEV       | 51.103.10.142 |
| IP de sortie PROD | 20.74.10.146  |
| IP de sortie DEV  | 20.74.14.116  |
| Runner SCW1       | 51.15.230.115 |
| Runner SCW2       | 51.158.120.34 |

### Noms de domaines externes

Adresses des serveurs DNS à configurer sur votre nom de domaine (à confirmer):

- Name server 1: `ns1-04.azure-dns.com.`
- Name server 2: `ns2-04.azure-dns.net.`
- Name server 3: `ns3-04.azure-dns.org.`
- Name server 4: `ns4-04.azure-dns.info`

La fabrique peut gérer votre nom de domaine sur son compte OVH.

### Nginx : request entity too large

Si vous **devez** envoyer de gros fichiers, vous pouvez être limité à l'envoi avec cette erreur côté serveur; dans ce cas, ajoutez les [annotations ingress nginx](https://docs.nginx.com/nginx-ingress-controller/configuration/ingress-resources/advanced-configuration-with-annotations/) suivantes dans votre `values.yaml` :

```yaml
my-component:
  ingress:
    annotations:
      nginx.ingress.kubernetes.io/proxy-body-size: 512m
```

### Nginx : custom headers

Vous pouvez facilement ajouter des headers customs sur votre "ingress" nginx :

```yaml
app:
  ingress:
    annotations:
      nginx.ingress.kubernetes.io/server-snippet: |
        add_header Cache-Control 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0';
```

## Mattermost

### Mattermost reminder bot

Reminder récurrent avec lien de meeting sur channel public:

```bash
/remind ~s-domifa-dev "
# DOMIFA WEEKLY MEETING :stopwatch:
:video_camera:  https://whereby.com/teamdomifa
" every wednesday at 11:00AM
```

Autres exemples: <https://github.com/scottleedavis/mattermost-plugin-remind/wiki/Usage>
Documentation: <https://github.com/scottleedavis/mattermost-plugin-remind>

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

## Nettoyage des environnements Kube de dev

Les ressources de dev sont régulièrement nettoyées par Janitor :

| Ressource          | Durée de vie |
| ------------------ | ------------ |
| dev/\*             | 7j           |
| dev/renovate\*     | 24h          |
| dev/jobs/complete  | 24h          |
| dev/jobs/failed    | 7j           |
| prod/jobs/complete | 24h          |
| prod/jobs/failed   | 7j           |
