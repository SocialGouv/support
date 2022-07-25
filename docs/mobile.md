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

Cette solution peut être implémentée seulement à condition de n'envoyer QUE des notifications génériques, et en aucun cas des données personnelles. ex: `[nom appli]: nouvelle notification reçue`.
