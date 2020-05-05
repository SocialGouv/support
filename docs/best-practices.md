# Best practices

> Les best practices présentent les exigences en terme de développement et permettent d'aligner les équipes sur des standards communs.

> C'est une documentation vivante, qui évolue avec les technologies et la communauté de la fabrique.

?> _TODO_ corriger les liens dans l'issue d'onboarding vers la nouvelle doc

?> _TODO_ mettre à jour le wiki de l'incub avec des liens vers la nouvelle doc

A lire, la [politique de contribution open-source de l'état](https://github.com/DISIC/politique-de-contribution-open-source)

## Développement

> Les solutions Google sont proscrites par le Ministère du fait de l'utilisation qui est faite des données collectées par Google.

> L'utilisation de services SAAS tiers doit être soumise à l'équipe #Legal

### Conventions de la fabrique

- Linters : https://github.com/SocialGouv/linters
- GIT messages : https://conventionalcommits.org/
- Versionning : https://semver.org
- Config renovate : https://github.com/SocialGouv/renovate-config

#### Workflow dev

- Une fois le premier MVP réalisé, la branche master est protégée par des reviews
- Une PR peut être imparfaite, charge à l'auteur de communiquer sur la dette et créer les issues techniques afférentes

### Outils

- Analytics : https://matomo.fabrique.social.gouv.fr
- Exceptions : https://sentry.fabrique.social.gouv.fr

## Kubernetes

### 12 factors apps

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

#### _Liveness_ et _Readyness probes_

_Kubernetes_ met à disposisiton deux outils pour permettant aux application de lui signifier leur état de santé (OK / KO) ainsi que leur capacité à traiter des requêtes ou non (Ready / Not Ready).

Il est important que bien exposer une _URL_ de _healthcheck_ et de paramétrer ces deux _probs_ pour ne pas subire les fonctions de _K8S_, et au contraire en tirer partie (_self-healing_, _rolling upgrade_, etc.)

Tout est expliqué ici : https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-probes/

#### Bien logger dans _Docker_ et donc _K8s_

_Long story short_ :

- tous les logs doivent être envoyés sur `STDOUT` ou `STDERR`
- Dès que c'est possible, utiliser le format de format de sortie `JSON` pour vos logs, et en `single-line`. Ils seront plus facilement indexables dans _Elasticsearch_, et donc plus faciles à retrouver..

#### Exposer les métriques de mon application

Pour faire du profiling comme pour faire de l'analyse sur des données métier, vous pouver exposer un endpoint `/metrics` (ou avec un autre nom mais c'est un standard d'usage) qui sera scrappé par _Prometheus_, la brique de collecte du cluster K8s.

Le format des données exposées sur `/metrics` doit être en _Open Metrics_, et c'est généralement dispo dans les _libs_ & _frameworks_ que vous utilisez déjà. Un exemple de ce que l'on peut faire avec NodeJS : https://blog.risingstack.com/node-js-performance-monitoring-with-prometheus/

## Sécurité

> Tous les accès aux outils doivent être sécurisés par authentification double facteurs

> Les variables d'environnement doivent être utilisées pour tout ce qui est secrets, tokens, logins, urls, hostnames... Ces données ne doivent en aucun cas être versionnées.

### Outils

- Tests sécu HTTP & SSL : https://observatory.mozilla.org/analyze/code.travail.gouv.fr
- Scan containers et dépendances : [trivy](https://github.com/aquasecurity/trivy)
- DAST Dynamic application security test : [Za proxy](https://www.zaproxy.org/) et [tutorial](https://github.com/rezen/zap-tutorial)

### General

- [guide ANSSI de la sécurité agile](https://www.ssi.gouv.fr/uploads/2018/11/guide-securite-numerique-agile-anssi-pa-v1.pdf)
- https://www2.owasp.org/www-project-secure-coding-practices-quick-reference-guide/migrated_content
- https://www.ssi.gouv.fr/guide/mot-de-passe/
- Reset password best practices : https://www.troyhunt.com/everything-you-ever-wanted-to-know/

### NodeJS

- https://www.sqreen.com/checklists/nodejs-security-handbook
- https://github.com/goldbergyoni/nodebestpractices#6-security-best-practices

### Docker

- https://docs.docker.com/develop/develop-images/dockerfile_best-practices/
- https://github.com/docker/docker-bench-security
- https://github.com/OWASP/Docker-Security
- https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Docker_Security_Cheat_Sheet.md

### Docker + Node

- https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md
- https://github.com/BretFisher/node-docker-good-defaults
