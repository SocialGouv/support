# Sécurité

🔒 Tous les accès aux outils doivent être sécurisés par authentificationà deux
facteurs (2FA).

🌐 Les variables d'environnement doivent être utilisées pour tout ce qui est
secrets, tokens, logins, urls, hostnames, etc.

🛡️ La gestion des secrets est assurée par des
[sealed-secrets](https://github.com/bitnami-labs/sealed-secrets) qui versionnent
les secrets chiffrés dans GIT.

## Outils

### DashLord : dashboard de sécurité et accessibilté

Accessible ici (se connecter pour voir plus d'informations) :
<https://dashlord.fabrique.social.gouv.fr>.

Voir aussi :
<https://doc.incubateur.net/communaute/travailler-a-beta-gouv/jutilise-les-outils-de-la-communaute/dashlord>.

### SonarCloud : analyseur statique de code

Les produits de l'organisation sont tous scannés et les résultats sont
accessibles ici : <https://sonarcloud.io/organizations/socialgouv>.

### Talisman : prévention de publication de secrets

Publier involontairement un secret (par exemple un jeton d'accès) sur un dépôt
public peut avoir beaucoup de conséquences indésirables. Une manière efficace
d'éviter cela est d'exécuter
[un détecteur de secrets comme `talisman`](https://github.com/thoughtworks/talisman/)
sur le hook `pre-commit` de git.

```bash
yarn add -D husky is-ci node-talisman

# installer husky seulement si hors environnement de CI
npm pkg set scripts.postinstall="is-ci || husky install"

# installation de husky grâce au script de postinstall
yarn

# exécuter node-talisman sur le hook de pre-commit
# on détecte ici si l'interaction via un terminal est possible afin de ne pas
# crash quand le pre-commit est lancé par une application comme VSCode
mkdir .husky
echo "if sh -c ': >/dev/tty' >/dev/null 2>/dev/null; then exec </dev/tty; yarn node-talisman --githook pre-commit -i; else yarn node-talisman --githook pre-commit; fi" >  .husky/pre-commit

# informe Talisman que le repo est en JS/TS
# permet d'éviter de scanner yarn.lock par exemple
echo "scopeconfig:\n  - scope: node" > .talismanrc
```

On utilise `husky` pour gérer simplement le hook. Si vous utilisez déjà un
gestionnaire de hooks, vous pouvez y ajouter `node-talisman` de manière
similaire.

On pourra observer des cas de faux positif de talisman, par exemple sur des
migrations SQL ou des données en base64. Dans ce cas, on lit attentivement le
rapport, et on ajuste
[le fichier `.talismanrc`](https://github.com/thoughtworks/talisman/#ignoring-files)
en fonction.

## Best practices

Les [cheat sheets OWASP](https://cheatsheetseries.owasp.org/) sont une très
bonne référence.

### CODEOWNERS

Les workflows d'intégration et déploiements continus des repositories SocialGouv
sont protégés par la convention
[CODEOWNERS](https://github.blog/2017-07-06-introducing-code-owners/) : tout
changement impactant potentiellement l'infrastructure doit être revue par une
personne de l'équipe OPS ou SRE. Ils seront automatiquement assignés aux issues
qui touchent aux fichiers de CI lors d'une pull-request.

### Third-parties

De manière générale il est déconseillé de référencer des scripts externes dans
ses applications, comme des scripts ou CSS via CDN, google fonts ou autres
services tiers; Privilégier l'utilisation de librairies dédiées que vous pouvez
embarquer dans l'application elle-même.

### Maintenance des dépendances

Les packages utilisés dans les applications doivent être maintenus à jour et
scannés régulièrement, idéalement dans la CI.

Les packages non utilisés ou obsolètes doivent être supprimés.

Utilisez [renovate](https://github.com/SocialGouv/renovate-config) pour
maintenir votre application à jour et prévoyez le temps nécessaire dans les
sprints.

### Contrôles d'accès

La mise en place d'un middleware de RBAC par lequel toutes les requêtes
entrantes passent permet de rejeter au plus tôt les requêtes illégitimes et de
mettre en place une liste blanche de pages ou endpoints non protégés (le
comportement par défaut étant "protégé" pour éviter l'introduction de défauts de
contrôle d'accès au fur et à mesure des développements).

Ex : <https://github.com/nyambati/express-acl>

Mettre en place une **matrice des rôles** qui associe à chaque type de donnée
des permissions de type lecture/écriture par rôle.

### Leak d'informations

Les informations techniques ne doivent pas être exposées au runtime. Les
serveurs et applications ne doivent pas fournir de header ou signature
permettant de les identifier. (ex: header `Served-by`)

Les données de développement (GIT et bases de données) doivent être considérées
comme publiques et ne pas utiliser de données sensibles ou personnelles.

Les développeur(se)s ne doivent en aucun cas recevoir de données de production
sur leur poste de travail. Les équipes de dev doivent mettre en oeuvre des
mécanismes de `seeds` pour travailler avec des volumes de données réalistes.

Les applications ne doivent jamais logger d'information confidentielle ou de
credentials sur la console. En effet ces informations pourraient remonter sur
les outils de logging tels Sentry ou grafana.

### Sécurité navigateurs

- Définir une **content security policy (CSP) stricte**, comme par exemple :
  en-tête HTTP Content-Security-Policy: default-src 'self'; frame-ancestors
  'self'; Utiliser un outil comme
  [Laboratory](https://github.com/april/laboratory) pour profiler votre
  application et vérifier les headers CSP.
- Définir l'attribut "integrity" sur l'ensemble des ressources link et script de
  la page (**SubResource Integrity**).
- Gestion des **cookies** : utiliser les attributs de cookie **HttpOnly, Secure
  et SameSite**. Ne pas mettre SameSite à "None".
- Auto-héberger l'ensemble des ressources de la page. Pour celles qui ne peuvent
  pas l'être et pour les traitements de moindre confiance, utiliser un WebWorker
  ou une iFrame avec l'attribut "sandbox".
- Les verbes HTTP doivent être respectés, les opérations `GET` ne doivent pas
  modifier de données.
- En cas d'utilisation de sessions, les opérations qui impactent des données
  doivent être protégées des
  [attaques de type CSRF](https://www.cert.ssi.gouv.fr/information/CERTA-2008-INF-003/)
  avec un système de jeton.

Ex: <https://github.com/helmetjs/helmet>

### Sessions

- Les sessions des utilisateurs authentifiés doivent expirer automatiquement et
  pouvoir être fermées par l'utilisateur (cette action doit effectivement
  supprimer la session côte serveur).
- Les sessions doivent pouvoir être fermées par des administrateurs
- Durée : Le délai doit être adapté à la durée d'utilisation légitime prévue
  (pour les utilisateurs authentifiés) et à la sensibilité des données. Ex: 6h
  pour une sécurité moyenne

### Mots de passe

#### Robustesse

Les empreintes de mot de passe doivent être stockées de façon sécurisée, en s'en
remettant à une implémentation proposée par le framework ou langage utilisé,
après avoir vérifié qu'il implémente correctement une fonction adéquate pour le
stockage des empreintes, telle que PBKDF2, Bcrypt, Scrypt ou Argon2, avec des
contraintes temps/mémoire adaptées.

**Forcer la complexité du mot de passe** à : minimum 12 chars, 1 majuscule, 1
minuscule, 1 chiffre, 1 caractère spécial

Proposer à l'utilisateur de lui générer.

#### Procédure de changement de mot de passe

Avertir par email l'utilisateur en cas de changement de mot passe.

#### Procédure de reset de mot passe

Voir références
[OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html)
et
[building a secure password reset feature](https://www.troyhunt.com/everything-you-ever-wanted-to-know/)

Avertir par email l'utilisateur en cas de changement de mot passe.

Voir aussi cet article sur les
[forms de logins et passwords managers](https://hiddedevries.nl/en/blog/2018-01-13-making-password-managers-play-ball-with-your-login-form)

### DDOS

Les mesures de prévention anti-DDOS et Waf doivent être mis en place en amont de
l'application (côté infra/reverse-proxy)

Côté applicatif, l'utilisation de fonctions synchrones trop gourmandes en CPU
(exemples : `readFileSync`, `jwt.verify` sans callback, `bcrypt.hashSync`,
`bcrypt.genSaltSync`) présente deux types de risques :

- **côté serveur** : vulnérabilité augmentée au déni de service (DOS),
  l'attaquant pouvant cibler les pages qui mettent en oeuvre ce type de
  fonctions côté serveur pour diminuer le coût de l'attaque.

- **côté client** : le blocage du fil d'exécution principal se traduit en un
  "freeze" désagréable de la page

Il est recommandé de faire appel à la version asynchrone de ces fonctions, ou de
les wrapper dans un thread ou web worker si elles n'ont pas d'implémentation
asynchrone disponible.

### Logging

#### Exceptions

Journaliser explicitement les erreurs issues de la logique de l'application, qui
sont inconnues du runtime. par exemple à l'aide de [sentry](https://sentry.fabrique.social.gouv.fr). La remontée
d'exceptions dans sentry doit veiller à ne pas remonter de données sensibles ou personnelles
(ex: cookies).

#### Logs applicatifs

- L'application doit logger en JSON (cf [12 factors apps](/standards/kubernetes.md))
- L'application ne doit logger **QUE** les données nécessaires au bon fonctionnement du service
- Les utilisateurs de l'application doivent être informés de cette journalisation
- Ces données techniques ne doivent **PAS** contenir de données permettant d'identifier un individu
- Les logs peuvent être conservés jusqu'à 12 mois si nécessaire

##### Position de la CNIL

> “De ce point de vue, l’enregistrement de ces données de journalisation ne rend pas le traitement plus intrusif, sous réserve que leur existence ne mène pas à un dépassement de la durée de conservation des données. De plus, cette mesure peut apporter des garanties importantes pour la sécurité de ces données.”

##### Actions à logger

Certains actions peuvent être utiles à logger pour de l'audit de sécurité

- actions destructives (suppression de données/fichiers)
- auth: tentatives de login, logout, changement/reset de pwd
- auth: erreurs 401/403
- upload/download Téléchargement de document
- exports de données

Côté base de données, un audit log peut être nécessaire. Ex:
<https://github.com/hasura/audit-trigger> ou [pgaudit](https://www.pgaudit.org)

### Upload de fichiers

#### Risques

- **perte d'intégrité comportement/contenu** : remplacement de code applicatif
  au moyen d'un fichier uploadé / hébergement de contenu illicite (exécution non
  maîtrisée ou mésinterprétation du contenu)
- **perte de confidentialité** : fuite de documents (défaut de contrôle d'accès)
- **perte de disponibilité** : déni de service de l'application (défaut de
  limitation en ressources)

#### Mesures

- **Upload** :
  - Limiter la taille du fichier
  - Vérifier type mime envoyé par le client et le comparer à une liste blanche
    pré-établie, le stocker, puis refléter la même valeur lors du download du
    fichier par un utilisateur
  - Si un traitement doit être réalisé, le déporter sur un webservice dédié
- **Stockage** :
  - Stocker les fichiers dans un emplacement imposé, hors du document root, dans
    une partition dédiée, ou en base de données
  - Ne pas utiliser le nom fourni dans les en-têtes HTTP pour le stockage direct
    du fichier (exemple : utiliser un `sha-256` salé sur le nom ou encore un
    jeton d'accès aléatoire avec lequel la correspondance sera faite en base -
    ne pas conserver l'extension)
- **Download** :
  - Utilisation un contrôleur qui induit un niveau d'abstraction entre la façon
    de récupérer le fichier et la situation réelle côté serveur. (exemple : GET
    `/download?[random_token]` VS GET `/static/mnt/volume/fichier.pdf`)
  - Utiliser l'en-tête `Content-Disposition: attachement` afin de forcer le
    téléchargement
  - Utiliser l'en-tête `Content-Type` avec la valeur émise lors de l'upload
  - Utiliser l'en-tête `X-Content-Type-Options: nosniff` afin d'empêcher le
    navigateur d'inférer le type du fichier et de lui demander de respecter le
    Content-Type que l'on aura positionné.

## FAQ

### Mettre à jour les headers HTTP de mes applications

Inspectez les headers HTTP de votre frontend avec
[Mozilla HTTP Observatory](https://observatory.mozilla.org/). Vous pouvez
également les retrouver sur
[DashLord](https://dashlord-full.fabrique.social.gouv.fr/).

Plusieurs possibilités pour corriger vos headers :

#### Directement via l'Ingress

Il est possible d'ajouter des annotations pour forcer les headers directement
sur la route de votre application.

Exemple avec kontinuous ou kube-workflow, dans le `values.yaml` de votre
application :

```yaml
app:
  ingress:
    annotations:
      nginx.ingress.kubernetes.io/configuration-snippet: |
        more_set_headers "Content-Security-Policy: default-src 'none'; connect-src 'self' https://*.gouv.fr; font-src 'self'; img-src 'self'; prefetch-src 'self' https://*.gouv.fr; script-src 'self' https://*.gouv.fr; frame-src 'self' https://*.gouv.fr; style-src 'self' 'unsafe-inline'";
        more_set_headers "X-Frame-Options: deny";
        more_set_headers "X-XSS-Protection: 1; mode=block";
        more_set_headers "X-Content-Type-Options: nosniff";
```

La CSP est à adapter selon vos scripts externes; vous pouvez la définir
manuellement ou avec l'extension
[CSP laboratory](https://github.com/april/laboratory).

Le repo [template](https://github.com/SocialGouv/template) présente
l'intégration dans un Next.js statique (branche `main`) ou avec un serveur
(branche `hasura`).

#### Côté applicatif

Il est possible d'ajouter les headers côté applicatif, par exemple avec
[helmet](https://github.com/helmetjs/helmet).

### Chiffrer des fichiers

Si vous souhaitez chiffrer des fichiers côté serveur, vous pouvez utiliser le
module
[streaming-file-encryption](https://github.com/SocialGouv/streaming-file-encryption).

La sécurité de ce module repose sur la connaissance nécessaire de 3 informations
disctinctes pour pouvoir déchiffrer un fichier :

- Le `mainSecret` à définir en tant que variable d'environnement côté applicatif
- Le `context` à stocker dans votre base de données et lié à votre fichier
- Le `ciphertext` à stocker sur un volume disque persistant

:warning: il est essentiel de stocker ces données dans des espaces isolés.

Les fichiers chiffrés répondent aux propriétés cryptographiques suivantes :

- Résistance à la falsification (modification des données)
- Résistance à la troncature (suppression des données à chaque extrémité ou au
  milieu)
- Résistance à l'extension (ajout de données à chaque extrémité ou au milieu)
- Résistance à la réorganisation (échange de pages de données)

## Références

### Général

- [guide ANSSI de la sécurité agile](https://www.ssi.gouv.fr/uploads/2018/11/guide-securite-numerique-agile-anssi-pa-v1.pdf)
- <https://cheatsheetseries.owasp.org/>
- <https://www.ssi.gouv.fr/guide/mot-de-passe/>
- Reset password best practices :
  <https://www.troyhunt.com/everything-you-ever-wanted-to-know/>

### NodeJS

- <https://www.sqreen.com/checklists/nodejs-security-handbook>
- <https://github.com/goldbergyoni/nodebestpractices#6-security-best-practices>
- <https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md>

### Docker

- <https://www.ssi.gouv.fr/administration/publication/recommandations-de-securite-relatives-au-deploiement-de-conteneurs-docker/>
- <https://docs.docker.com/develop/develop-images/dockerfile_best-practices/>
- <https://snyk.io/blog/10-docker-image-security-best-practices/>
- <https://github.com/OWASP/Docker-Security>
- <https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Docker_Security_Cheat_Sheet.md>
