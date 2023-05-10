# Plan de reprise et continuité des activités (PRA / CRA)

## Disaster recovery

En cas d'incident majeur sur notre plateforme technique une équipe est disponible pour intervenir dans les meilleurs délais.

Cette équipe est composée de 3 profils "OPS" dédiés à l'infrastructure et 3 profils "SRE" dédiés au support des applications.

Ces équipes soit joignables 5 jours sur 7, de 9h à 18h.

| Action                    | Indisponibilité max |
| ------------------------- | ------------------- |
| Mise à jour               | 30 minutes          |
| Maintenance trimestrielle | 1h                  |
| Désastre majeur           | 48h                 |

Nous garantissons un taux de disponibilité des applications de 95%.

## Prévention

Plusieurs mesures de prévention sont mises en place pour garantir la continuité de service.

- Sauvegardes quotidiennes des données
- Versionning du code et de la configuration des applications

En amont, l'équipe SRE de la fabrique audite et intervient en continu sur les produits pour assurer fiabiliité, résilience et sécurité des données.

## Monitoring

Tous les services et applications sont monitorés :

- disponibilité
- espace disque
- usage CPU/mémoire

Les équipes sont notifiées en temps réel en cas de détéction d'anomalie.

## Tracabilité

Tous les services passent par un WaF (web application firewall) qui permet de collecter et bloquer les tentatives d'intrusion.

Un Anti-DDOS est également en place pour prévenir les attaques en deni de service.
