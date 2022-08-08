# Développement Mobile

Quelques questions à se poser avant de lancer un développement d'applications mobile :

 - La présence sur les stores est-elle vraiment nécessaire ?
 - Une web app / PWA ne pourrait elle pas rendre le même service ?

### Stack technique

La fabrique recommande l'utilisation de [react-native](https://reactnative.dev) pour les développements mobiles.

### SAAS

L'application ne doit pas embarquer de SDK ou tracker qui transmetterait des infos personnelles. Solliciter l'équipe SRE ou Juridique en cas de doute.

### Distribution

Les applications doivent être distribuées via les comptes Apple et Google de la Fabrique numérique. Demander un accès sur [~/support](https://mattermost.fabrique.social.gouv.fr/default/channels/g-support)

### Notifications Push

La fabrique met à disposition un compte Firebase pour les notifications Push.

L’utilisation d’outils proposés par Google peut poser des questions juridiques et politiques. Juridiquement, les juges européens et les CNIL européennes considèrent que les transferts de données vers les Etats-Unis sont illégaux. Politiquement, la circulaire du Premier ministre de 2021 indique à l’administration de mesurer son utilisation d’outils qui pourraient méconnaitre le droit européen.

Nous vous proposons une utilisation encadrée de l’outil :

- Les SE doivent envoyer des notifications ne contenant PAS de données personnelles ;
- Le contenu des notifications ne doit PAS permettre de personnalisation pouvant identifier les personnes ;
- Lorsque c’est possible techniquement, de réinitialiser l’ID technique le plus souvent possible.

Quelques exemples d’autres administrations utilisant cet outil :

- Ministère de l’intérieur
- Ministère des solidarités et de la santé (MonEspaceSanté)

Si votre service numérique nécessite la réalisation d’une analyse d’impact et une rencontre avec la DPO, n’hésitez pas à vous rapprocher de l’équipe RGPD de la Fabrique numérique (Thomas ou Osiris) via Mattermost.

ex de notification: `[nom appli]: nouvelle notification reçue`. C'est alors l'application elle-même (ou son API) qui est chargée de "resolve" et afficher le message personnalisé.
