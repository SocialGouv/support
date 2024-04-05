# Teleport sur OVH

## Scission des environnement de dev et de prod

Sur OVH, deux teleport sont accessibles.
- Le premier servant à se connecter à l'environnement de dev et se situant à l'adresse suivante: https://teleport-hp.fabrique.social.gouv.fr/
- Le second servant à se connecter à l'environnement de prod et se situant à l'adresse suivante: https://teleport-prod.fabrique.social.gouv.fr/

## Connection à une base de donnée

### Pré-requis
Installation de Teleport v14 (que l'on peut télécharger [ici](https://goteleport.com/download/#install-links) ou à partir du terminal) et un client postgres.

### Utilisation

Vous disposez maintenant de tous les outils nécessaires pour vous connecter à votre base de données.
Une fois Teleport installé vous allez pouvoir accéder au cli nommé `tsh` dans votre terminal.

La première chose à faire est de vous connecter au cluster à partir de ce dernier, pour cela utilisez une des commandes suivantes en fonction de l'environnement souhaité:

Pour la prod:

```
tsh login --proxy=teleport-prod.fabrique.social.gouv.fr:443 teleport-prod.fabrique.social.gouv.fr --auth=github
```

Pour le dev:

```
tsh login --proxy=teleport-hp.fabrique.social.gouv.fr:443 teleport-hp.fabrique.social.gouv.fr --auth=github
```

Ensuite listez les bases de données qui vous sont accessibles avec la commande suivante:

```
tsh app ls
```

Ensuite vous devez créer un tunnel vers cette application avec les deux commandes suivantes:
```
tsh apps login <Nom de votre db>
tsh proxy app <Nom de votre db>
```

Il ne vous reste plus ensuite à vous connecter à l'aide de votre cli psql sur le port indiqué par la commande de proxy.
Ps: il faudra vous munir du mot de passe de votre utilisateur admin
```
psql -U <AdminUsername> -h localhost -p <ProxyPort> <db-name>
```

Vous pouvez vous connecter à une autre db en changeant postgres par le nom correspondant.

Ps: vous pouvez aussi vous connecter avec PgAdmin en renseignant les mêmes champs que pour psql
