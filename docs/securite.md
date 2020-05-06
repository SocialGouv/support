# Sécurité

> Tous les accès aux outils doivent être sécurisés par authentification double-facteurs (2FA)

> Les variables d'environnement doivent être utilisées pour tout ce qui est secrets, tokens, logins, urls, hostnames... Ces données ne doivent en aucun cas être versionnées.

> La gestion des secrets Kubernetes est assurée par [sealed-secrets](https://github.com/bitnami-labs/sealed-secrets)

## Outils

- Tests sécu HTTP & SSL : https://observatory.mozilla.org/analyze/code.travail.gouv.fr
- Scan containers et dépendances : [trivy](https://github.com/aquasecurity/trivy)
- DAST Dynamic application security test : [Za proxy](https://www.zaproxy.org/) et [tutorial](https://github.com/rezen/zap-tutorial)

## Général

- [guide ANSSI de la sécurité agile](https://www.ssi.gouv.fr/uploads/2018/11/guide-securite-numerique-agile-anssi-pa-v1.pdf)
- https://www2.owasp.org/www-project-secure-coding-practices-quick-reference-guide/migrated_content
- https://www.ssi.gouv.fr/guide/mot-de-passe/
- Reset password best practices : https://www.troyhunt.com/everything-you-ever-wanted-to-know/

## NodeJS

- https://www.sqreen.com/checklists/nodejs-security-handbook
- https://github.com/goldbergyoni/nodebestpractices#6-security-best-practices

## Docker

- https://docs.docker.com/develop/develop-images/dockerfile_best-practices/
- https://snyk.io/blog/10-docker-image-security-best-practices/
- https://github.com/OWASP/Docker-Security
- https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Docker_Security_Cheat_Sheet.md

## Docker + Node

- https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md
- https://github.com/BretFisher/node-docker-good-defaults
