# Kubernetes (K8S)

![big picture](_media/kubernetes-big-picture.png ":size=800x400")

## Best practices : 12 factors apps

> Il s'agit de 12 principes d'architecture généraux et de processus utiles pour faire tourner une application dans un environnement _cloud_. Ça s'applique donc directement aux applications qui doivent tourner dans _K8s_. Voir aussi https://12factor.net/fr/

Le code applicatif qui à terme sera déployé sur un cluster Kubernetes se doit de respecter un certain nombre de règles.

Les principales recommandations sont:

- Versionnement du code (GIT)
- **Exposition d’une _URL_ de _healthcheck_** sur `/health`
- **Application _stateless_**
- **Configuration par variables d’environnement**
- **La sortie des logs sur la sortie standard ou la sortie d’erreur**
- Gestion du mode dégradé.
- **Gestion des arrêts/relances de manière propre.**

Pour aller plus loin : https://blog.octo.com/applications-node-js-a-12-facteurs-partie-1-une-base-de-code-saine/

### _Liveness_ et _Readyness probes_

_Kubernetes_ met à disposisiton deux outils pour permettant aux application de lui signifier leur état de santé (OK / KO) ainsi que leur capacité à traiter des requêtes ou non (Ready / Not Ready).

Il est important que bien exposer une _URL_ de _healthcheck_ et de paramétrer ces deux _probes_ pour ne pas subir les fonctions de _K8S_, et au contraire en tirer partie (_self-healing_, _rolling upgrade_, etc.)

Tout est expliqué ici : https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-probes/

### Bien logger dans _Docker_ et donc _K8s_

_Long story short_ :

- tous les logs doivent être envoyés sur `STDOUT` ou `STDERR`
- Dès que c'est possible, utiliser le format de format de sortie `JSON` pour vos logs, et en `single-line`. Ils seront plus facilement indexables dans _Elasticsearch_, et donc plus faciles à exploiter.

### Exposer les métriques de mon application

Pour faire du profiling comme pour faire de l'analyse sur des données métier, vous pouver exposer un endpoint `/metrics` (ou avec un autre nom mais c'est un standard d'usage) qui sera scrappé par _Prometheus_, la brique de collecte du cluster K8s.

Le format des données exposées sur `/metrics` doit être en _Open Metrics_, et c'est généralement dispo dans les _libs_ & _frameworks_ que vous utilisez déjà. Un exemple de ce que l'on peut faire avec NodeJS : https://blog.risingstack.com/node-js-performance-monitoring-with-prometheus/

## Les outils pour utiliser kubernetes

L'équipe SRE vous accompagne pour créer les [pipelines de déploiement](https://github.com/SocialGouv/gitlab-ci-yml) de vos applications vers k8s.

Le [CLI k9s](https://k9scli.io/) est l'outil ultime pour monitorer ses déploiements, consulter les logs, se connecter en shell à vos containers... [Rancher](https://rancher.com) est un équivalent en interface web.

Pour accéder à votre cluster :

- installer `kubectl` et `k9s`
- récupérer votre fichier `kubeconfig` depuis Rancher et le positionner dans `~/.kube/config`
- lancer `k9s -A` pour accéder au cluster et toutes vos ressources. enjoy :)

Plus de détails sur l'administration kube avec k9s sur [cet article](https://opensource.com/article/20/5/kubernetes-administration).

Une sonde [sentry-kubernetes](https://github.com/getsentry/sentry-kubernetes) est installée sur le cluster et permet de remonter toutes les erreurs : CronJob failed, probes... C'est une source d'information préciseuse quand quelque chose ne fonctionne pas dans vos déploiements. L'accès doit être demandé à la team SRE.

## Variable d'environnement dans Kubernetes

On vous recommande de récupérer vos variables d'environnement dans vos containers avec `envFrom`. Ceci permet de récupérer directement toutes les variables contenues dans une ConfigMap et/ou un Sealed-Secret. 

```yaml
# [...]
  envFrom:
    - configMapRef:
        name: app-env
    - secretRef:
        name: app-env
```

### ConfigMap : Variables de configuration

Les variables qui configurent le projet dans l'environnement déployé. Ces variables sont prédictibles et non-chiffrées. Example : `NODE_ENV=PRODUCTION`

Il est recommandé d'utiliser une [_ConfigMap_ par container](https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/#configure-all-key-value-pairs-in-a-configmap-as-container-environment-variables) et par environnement.

```yaml
# .k8s/environements/dev/app-env.configmap.yaml
kind: ConfigMap
apiVersion: v1
metadata:
  name: app-env
data:
  NODE_ENV: "production"
  GRAPHQL_ENDPOINT: "http://hasura/v1/graphql"
  ACCOUNT_MAIL_SENDER: "contact@fabrique.social.gouv.fr"
  FRONTEND_PORT: "${PORT}"
  PRODUCTION: "false"
```

### Variables secrets

Les variables de configuration secretes qui doivent être chiffrées. Example : `JWT_SECRET=xxxxxxx`

Il est recommandé d'utiliser un [_SealedSecret_ par container](https://github.com/bitnami-labs/sealed-secrets) et par environnement.

L'équipe SRE est en charge de la gestion des valeurs dans le _SealedSecret_ utilisés par notre projet en dev comme en prod. Les valeurs de dev sont consultables par les développeurs de la startup en récupérant le _Secret_ du même nom.

```yaml
# .k8s/environements/dev/hasura-env.configmap.yaml
kind: SealedSecret
apiVersion: bitnami.com/v1alpha1
metadata:
  name: hasura-env
  creationTimestamp:
  annotations:
    sealedsecrets.bitnami.com/cluster-wide: 'true'
spec:
  template:
    metadata:
      name: hasura-env
      creationTimestamp:
      annotations:
        sealedsecrets.bitnami.com/cluster-wide: 'true'
    type: Opaque
  encryptedData:
    ACCOUNT_EMAIL_SECRET: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx==
    HASURA_GRAPHQL_ADMIN_SECRET: yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy==
    HASURA_GRAPHQL_JWT_SECRET: zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz==
```

## Sceller un secret dans Kubernetes

Nous utilisons [_SealedSecret_](https://github.com/bitnami-labs/sealed-secrets) pour sceller les secrets.

```sh
# Pour consulter les logs du sealed-secrets
$ kubectl -n sealed-secrets-system logs $(kubectl -n sealed-secrets-system get pod --no-headers -o custom-columns=":metadata.name")
```

### Sceller un secret du projet

Les secrets générés par le code pour sécuriser des communications entre services par exemple.

```sh
# Assurez vous de communiquer avec le bon cluster
$ export KUBECONFIG=~/.kube/config-dev2
# Assurez vous d'avoir le certificat correspondant au cluster
$ export SEALED_SECRETS_CERT=https://kubeseal.dev2.fabrique.social.gouv.fr/v1/cert.pem
# Scelle le secret jwt d'hasura par example
$ printf '{"type":"HS256","key": "'$(gpg --gen-random --armor 1 512)'"}' \
  | kubectl create secret generic app-env -o yaml --dry-run=client --from-file=HASURA_GRAPHQL_JWT_SECRET=/dev/stdin \
  | kubeseal -o yaml --merge-into .k8s/environements/prod/hasura-env.sealed-secret.yaml
# Scelle le mot de passe admin d'hasura par example
$ gpg --gen-random --armor 1 128 \
  | kubectl create secret generic app-env -o yaml --dry-run=client --from-file=HASURA_GRAPHQL_ADMIN_SECRET=/dev/stdin \
  | kubeseal -o yaml --scope cluster-wide --merge-into .k8s/environements/dev/hasura-env.sealed-secret.yaml
```

### Sceller un secret d'infra

Les secrets générés par l'infra pour accéder à des services comme une base de données managée par exemple.

```sh
# Assurez vous de communiquer avec le bon cluster
$ export KUBECONFIG=~/.kube/config-dev2
# Assurez vous d'avoir le certificat correspondant au cluster
$ export SEALED_SECRETS_CERT=https://kubeseal.dev2.fabrique.social.gouv.fr/v1/cert.pem
# Les secrets générées par l'infra sont disponibles dans le namespace "<projet_name>-secret"
$ kubectl -n sample-next-app-secret get secret azure-pg-admin-user -o json | kubeseal | jq ".spec.encryptedData.PGHOST"
"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx=="
```
