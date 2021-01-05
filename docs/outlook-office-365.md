# Outlook Office 365

## Comment utiliser une adresse e-mail partagée dans mon logiciel de messagerie

Sur Outlook 365 Web, il est possible d'ouvrir un compte partagé en ouvrant sa boite personnelle, puis en cliquant sur "Ouvrir une autre boite aux lettres" dans le menu en haut à droite.

Pour y accéder depuis une messagerie, voici les paramètres à renseigner, si :

- votre adresse personnelle est "pierre.dupont@fabrique.social.gouv.fr"
- l'adresse partagée est "mon-adresse-partagee@fabrique.social.gouv.fr"

Paramètres généraux:

- Nom: Pierre DUPONT
- Addresse e-mail du compte: `mon-adresse-partagee@fabrique.social.gouv.fr`

IMAP:

- serveur: outlook.office365.com
- port: 993
- securité: SSL/TLS
- normal password
- username: `pierre.dupont@fabrique.social.gouv.fr`**`\mon-adresse-partagee`**
- password: (mon mot de passe personnel)

SMTP:

- serveur: smtp.office365.com
- port: 587
- securité: STARTTLS
- normal password
- username: `pierre.dupont@fabrique.social.gouv.fr`
- password: (mon mot de passe personnel)

**Attention**, seule le champ "IMAP username" contient le suffixe de l'adresse partagée

Source: <https://social.technet.microsoft.com/Forums/en-US/336e02ee-6767-4810-90a0-1352bd7cc9e9/office-365-how-to-access-a-shared-mailbox-using-imap-client>
