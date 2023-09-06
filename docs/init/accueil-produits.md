# Accueil des produits

### Hébergement

La Fabrique met à votre disposition :

- Des ressources de type:
  - Machines virtuelles, Clusters kubernetes
  - Serveurs PostgreSQL
  - Service de stockage (block et objet)
- Des services techniques
  - Github (Hébergement de code source)
  - Github (registry d'image)
  - Github (actions et déploiements)
  - GitLab
  - DNS
  - SSL
  - Monitoring`*`, Alerting
  - Matomo
  - Sentry
  - Asqatasun
  - SMTP/API email
  - Messagerie email
- Une équipe Ops et support (SRE)

`*` limité sur l'hébergement sur VM

Pour un démarrage rapide des déploiements vous pouvez commencer la mise en place des services sur des machines virtuelles (ou Scalingo), l'équipe de la fabrique mettra en place pour vous la configuration nécessaire pour un déploiement sur [Kubernetes](https://kubernetes.io/fr/) en temps voulu.

💡 Les équipes de la Fabrique sont à votre disposition dans toutes ces phases.

### Référentiels généraux et sécurité

Dès le début de la conception les produits devront intégrer les bonnes pratiques des Référentiels de l'état (RGAA 4.1 et RGS). L'objectif est d'atteindre un minimum de 75% du RGAA et des bonnes pratiques OWASP dès les premiers déploiements officiels.

### Développement

Les languages supportés à la Fabrique des ministères sociaux sont JavaScript, TypeScript et Python, en privilégiant les outils standards de ces écosystèmes.

Les startups doivent mettre en place sur GitHub actions les workflows de tests, build et release nécessaires puis publier leurs images Docker sur le registry GitHub ghcr.io.

Les équipes de développement doivent mettent en oeuvre la maintenance continue des dépendances techniques avec [renovatebot](https://github.com/renovatebot/renovate) présent sur notre organisation GitHub `SocialGouv`.

Nous recommandons la mise en place de [semantic-release](https://github.com/semantic-release/semantic-release) pour conventionner et automatiser le cycle de vie des applications et des [linters SocialGouv](https://github.com/SocialGouv/linters) pour les projets compatibles.

Vos applications doivent être containerisées et respecter les bonnes pratiques [des 12 facteurs](https://12factor.net/fr/).

Les scripts externes/API intégrés aux applications doivent être soumis à approbation de l'équipe Juridique/RGPD.

Plus de détails sur le [guide des pratiques tech en vigueur à SocialGouv](/docs/standards/developpement).

### Noms de domaine

L'url officielle des startups est `[startup].fabrique.social.gouv.fr`

### GitHub

**TOUT** le code produit par les SE doit être ouvert. Les startups doivent déposer leur code sur l'organisation GitHub [SocialGouv](https://github.com/SocialGouv).

### Contacts

- **Support/SRE** : julien.bouquillon@sg.social.gouv.fr
- **Infra** : igor.renquin@sg.social.gouv.fr

