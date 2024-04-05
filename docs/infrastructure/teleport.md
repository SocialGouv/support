# Teleport sur OVH

## Scission des environnement de dev et de prod

Sur OVH, deux teleport sont accessible. 
Le premier servant a se connecter à l'envirronement de dev et se situant à l'addresse suivante: https://teleport-hp.fabrique.social.gouv.fr/


Le second servant a se connecter à l'envirronement de prod et se situant à l'addresse suivante: https://teleport-prod.fabrique.social.gouv.fr/


## Connection à une base de donnée

### Pré-requis
Installation de teleport v14 (que l'on peut télécharger [ici](https://goteleport.com/download/#install-links) ou a partir du terminal) et un client postgres.

### Utilisation

Vous disposez maintenant de tout les outils nécessaire pour vous connecter à votre base de donnée.
Une fois Teleport installé vous allez pouvoir acceder à leur cli nommé tsh sur votre terminal.

La première chose à faire est de vous connectez au cluster à partir de ce dernier, pour cela utilisé une des commandes suivant en fonction de l'envirronnement souhaité:

Pour la prod:

```
tsh login --proxy=teleport-prod.fabrique.social.gouv.fr:443 teleport-prod --auth=github
```

ou

Pour le dev:

```
tsh login --proxy=teleport-hp.fabrique.social.gouv.fr:443 teleport-dev --auth=github
```

Ensuite listé les base de données qui vous sont accessible avec la commande suivante :

```
tsh app ls
```

Ensuite vous devez créer un tunnel vers cette application avec les deux commandes suivantes:
```
tsh apps login <Nom de votre db>
tsh proxy app <Nom de votre db>
```

Il ne vous reste plus ensuite à vous connecté à l'aide de votre cli psql sur le port indiqué par la commande de proxy.
Ps: il faudra vous munir du mot de passe de votre utilisateur admin
```
psql -U <AdminUsername> -h localhost -p <ProxyPort> <db-name>
```

Vous pouvez vous connecté a une autre db en changeant postgres par le nom correspondant.

Ps: vous pouvez aussi vous connectez avec PgAdmin en renseignant les mêmes champs que pour psql
