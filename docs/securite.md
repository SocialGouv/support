# Sécurité

> Tous les accès aux outils doivent être sécurisés par authentification double-facteurs (2FA)

> Les variables d'environnement doivent être utilisées pour tout ce qui est secrets, tokens, logins, urls, hostnames... Ces données ne doivent en aucun cas être versionnées.

> La gestion des secrets Kubernetes est assurée par [sealed-secrets](https://github.com/bitnami-labs/sealed-secrets)

## Outils

- Tests sécu HTTP & SSL : https://observatory.mozilla.org/analyze/code.travail.gouv.fr
- Scan containers et dépendances : [trivy](https://github.com/aquasecurity/trivy)
- DAST Dynamic application security test : [Za proxy](https://www.zaproxy.org/) et [tutorial](https://github.com/rezen/zap-tutorial)

## Best practices

Les [cheat sheets OWASP](https://cheatsheetseries.owasp.org/) sont une très bonne référence.

### Third-parties

De manière générale il est déconseillé de référencer des scripts externes dans ses applications, comme des scripts ou CSS via CDN, google fonts ou autres services tiers; Privilégier l'utilisation de librairies dédiées que vous pouvez embarquer dans l'application elle-même.

### Maintenance des dépendances

Les packages utilisés dans les applications doivent être maintenus à jour et scannés régulièrement, idéalement dans la CI.

Les packages non utilisés ou obsolètes doivent être supprimés.

### Contrôles d'accès

La mise en place d'un middleware de RBAC par lequel toutes les requêtes entrantes passent permet de rejeter au plus tôt les requêtes illégitimes et de mettre en place une liste blanche de pages ou endpoints non protégés (le comportement par défaut étant "protégé" pour éviter l'introduction de défauts de contrôle d'accès au fur et à mesure des développements).

Ex : https://github.com/nyambati/express-acl

Mettre en place une **matrice des rôles** qui associe à chaque type de donnée des permissions de type lecture/écriture par rôle.

### Leak d'informations techniques

Les informations techniques ne doivent pas être exposées au runtime. Les serveurs et applications ne doivent pas fournir de header ou signature permettant de les identifier. (ex: header `Served-by`)

### Sécurité navigateurs

- Définir une **content security policy (CSP) stricte**, comme par exemple : en-tête HTTP Content-Security-Policy: default-src 'self'; frame-ancestors 'self'; Utiliser un outil comme [Laboratory](https://github.com/april/laboratory) pour profiler votre application et vérifier les headers CSP.
- Définir l'attribut "integrity" sur l'ensemble des ressources link et script de la page (**SubResource Integrity**).
- Gestion des **cookies** : utiliser les attributs de cookie **HttpOnly, Secure et SameSite**. Ne pas mettre SameSite à "None".
- Auto-héberger l'ensemble des ressources de la page. Pour celles qui ne peuvent pas l'être et pour les traitements de moindre confiance, utiliser un WebWorker ou une iFrame avec l'attribut "sandbox".
- Les verbes HTTP doivent être respectés, les opérations `GET` ne doivent pas modifier de données.
- En cas d'utilisation de sessions, les opérations qui impactent des données doivent être protégées des [attaques de type CSRF](https://www.cert.ssi.gouv.fr/information/CERTA-2008-INF-003/) avec un système de jeton.

Ex: https://github.com/helmetjs/helmet

### Sessions

- Les sessions des utilisateurs authentifiés doivent expirer automatiquement et pouvoir être fermées par l'utilisateur (cette action doit effectivement supprimer la session côte serveur).
- Les sessions doivent pouvoir être fermées par des administrateurs
- Durée : Le délai doit être adapté à la durée d'utilisation légitime prévue (pour les utilisateurs authentifiés) et à la sensibilité des données. Ex: 6h pour une sécurité moyenne

### Mots de passe

#### Robustesse

Les empreintes de mot de passe doivent être stockées de façon sécurisée, en s'en remettant à une implémentation proposée par le framework ou langage utilisé, après avoir vérifié qu'il implémente correctement une fonction adéquate pour le stockage des empreintes, telle que PBKDF2, Bcrypt, Scrypt ou Argon2, avec des contraintes temps/mémoire adaptées.

**Forcer la complexité du mot de passe** à : minimum 12 chars, 1 majuscule, 1 minuscule, 1 chiffre, 1 caractère spécial

Proposer à l'utilisateur de lui générer.

#### Procédure de changement de mot de passe

Avertir par email l'utilisateur en cas de changement de mot passe.

#### Procédure de reset de mot passe

Voir références [OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html) et [building a secure password reset feature](https://www.troyhunt.com/everything-you-ever-wanted-to-know/)

Avertir par email l'utilisateur en cas de changement de mot passe.

Voir aussi cet article sur les [forms de logins et passwords managers](https://hiddedevries.nl/en/blog/2018-01-13-making-password-managers-play-ball-with-your-login-form)

### DDOS

Les mesures de prévention anti-DDOS et Waf doivent être mis en place en amont de l'application (côté infra/reverse-proxy)

Côté applicatif, l'utilisation de fonctions synchrones trop gourmandes en CPU (exemples : `readFileSync`, `jwt.verify` sans callback, `bcrypt.hashSync`, `bcrypt.genSaltSync`) présente deux types de risques :

- **côté serveur** : vulnérabilité augmentée au déni de service (DOS), l'attaquant pouvant cibler les pages qui mettent en oeuvre ce type de fonctions côté serveur pour diminuer le coût de l'attaque.

- **côté client** : le blocage du fil d'exécution principal se traduit en un "freeze" désagréable de la page

Il est recommandé de faire appel à la version asynchrone de ces fonctions, ou de les wrapper dans un thread ou web worker si elles n'ont pas d'implémentation asynchrone disponible.

### Logging

Journaliser explicitement les erreurs issues de la logique de l'application, qui sont inconnues du runtime. par exemple à l'aide de sentry. La remontée d'exceptions dans sentry doit veiller à ne pas remonter de données sensibles (ex: cookies).

L'application doit logger en JSON (cf [12 factors apps](/kubernetes.md))

Côté base de données, un audit log peut être nécessaire. Ex: https://github.com/hasura/audit-trigger

### Upload de fichiers

#### Risques

- **perte d'intégrité comportement/contenu** : remplacement de code applicatif au moyen d'un fichier uploadé / hébergement de contenu illicite (exécution non maîtrisée ou mésinterprétation du contenu)
- **perte de confidentialité** : fuite de documents (défaut de contrôle d'accès)
- **perte de disponibilité** : déni de service de l'application (défaut de limitation en ressources)

#### Mesures

- **Upload** :
  - Limiter la taille du fichier
  - Vérifier type mime envoyé par le client et le comparer à une liste blanche pré-établie, le stocker, puis refléter la même valeur lors du download du fichier par un utilisateur
  - Si un traitement doit être réalisé, le déporter sur un webservice dédié
- **Stockage** :
  - Stocker les fichiers dans un emplacement imposé, hors du document root, dans une partition dédiée, ou en base de données
  - Ne pas utiliser le nom fourni dans les en-têtes HTTP pour le stockage direct du fichier (exemple : utiliser un `sha-256` salé sur le nom ou encore un jeton d'accès aléatoire avec lequel la correspondance sera faite en base - ne pas conserver l'extension)
- **Download** :
  - Utilisation un contrôleur qui induit un niveau d'abstraction entre la façon de récupérer le fichier et la situation réelle côté serveur. (exemple : GET `/download?[random_token]` VS GET `/static/mnt/volume/fichier.pdf`)
  - Utiliser l'en-tête `Content-Disposition: attachement` afin de forcer le téléchargement
  - Utiliser l'en-tête `Content-Type` avec la valeur émise lors de l'upload
  - Utiliser l'en-tête `X-Content-Type-Options: nosniff` afin d'empêcher le navigateur d'inférer le type du fichier et de lui demander de respecter le Content-Type que l'on aura positionné.

## Références

### Général

- [guide ANSSI de la sécurité agile](https://www.ssi.gouv.fr/uploads/2018/11/guide-securite-numerique-agile-anssi-pa-v1.pdf)
- https://cheatsheetseries.owasp.org/
- https://www.ssi.gouv.fr/guide/mot-de-passe/
- Reset password best practices : https://www.troyhunt.com/everything-you-ever-wanted-to-know/

### NodeJS

- https://www.sqreen.com/checklists/nodejs-security-handbook
- https://github.com/goldbergyoni/nodebestpractices#6-security-best-practices
- https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md

### Docker

- https://www.ssi.gouv.fr/administration/publication/recommandations-de-securite-relatives-au-deploiement-de-conteneurs-docker/
- https://docs.docker.com/develop/develop-images/dockerfile_best-practices/
- https://snyk.io/blog/10-docker-image-security-best-practices/
- https://github.com/OWASP/Docker-Security
- https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Docker_Security_Cheat_Sheet.md
