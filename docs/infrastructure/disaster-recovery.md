# Disaster recovery

## PostgreSQL

Deux options pour restaurer une base de données :

### Depuis un backup quotidien

- récupérer un `pg_dump` quotidien dans le compte de storage Azure `[project]prodbackups`
- restaurer le dump via une connexion au bastion

Exemple :

```bash
# Connexion bastion
ssh -L 1111:[app]devserver.postgres.database.azure.com:5432 [user]@40.89.139.58

# Dans un autre shell :

# Pour dumper une base cf https://docs.postgresql.fr/10/app-pgdump.html
export PGDATABASE=DB_SOURCE
export PGHOST=127.0.0.1
export PGPORT=1111
export PGUSER=user@appdevserver
export PGPASSWORD=xxx
export PGSSLMODE=require
pg_dump --clean --if-exists --quote-all-identifiers \
  -U postgres \
  --format=custom \
  -f /path/to/backup.psql;

# Pour restaurer la base cf https://docs.postgresql.fr/10/app-pgrestore.html
export PGDATABASE=DB_DESTINATION
export PGHOST=127.0.0.1
export PGPORT=1111
export PGUSER=user@appdevserver
export PGPASSWORD=xxx
export PGSSLMODE=require
  --clean --if-exists \
  --no-owner --no-acl \
  --role username \
  --verbose \
  /path/to/backup.psql
```

:warning: Attention a toujours fermer une connexion bastion existante avant d'en ouvrir une autre poue éviter les erreurs.

Voir aussi [Connexion via bastion](/docs/faq#accès-aux-serveurs-pg-de-dev)

### Avec la fonction "Restaurer" du portail Azure

La fonction "Restaurer" accessible sur la page du serveur Postgres sur le Portail Azure permet de restaurer à J-30 avec une granularité de 5minutes.

Cette fonction créé un nouveau serveur PG avec de nouveau credentials à mettre à jour dans votre application.

Voir aussi [Créer un secret pour kubernetes](/docs/standards/kubernetes#sceller-un-secret-dans-kubernetes)
