# Tests

## Linters

## TU

## Tests end-to-end avec Gherkin

Tester des scénarios de navigation sur ses applications webs :

- Syntaxe Gherkin en 🇫🇷
- API [Codecept](https://codecept.io/) pour piloter n'importe quel navigateur
- Rend les UI plus accessibles (techniquement)
- Utilisable localement
- Automatisable dans la CI

Repo de démo : https://github.com/socialgouv/sample-next-app

Les tests sont à écrire avec la [syntaxe Gherkin](https://codecept.io/bdd/#gherkin) dans `e2e/features/**/*.feature` :

```
@liste-services-public
Fonctionnalité: Liste des services publics
  Pour pouvoir trouver un service public
  En tant que visiteur
  Je veux pouvoir filtrer les services public

Scénario:
  Soit un navigateur web sur la page /services
  Alors je vois 8 services
  Quand je coche la case "CE"
  Alors je vois "exemple avec mention CE 1"
  Alors je vois "exemple avec mention CE et CEE"
  Alors je ne vois pas "exemple avec ention CEE"
  Alors je vois 2 services
  Quand je décoche la case "CE"
  Quand je coche la case "CEE"
  Alors je ne vois pas "exemple avec mention CE 1"
  Alors je vois "exemple avec mention CE et CEE"
  Alors je vois "exemple avec ention CEE"
  Alors je vois 2 services
```

Chaque expression de ce scénario doit matcher une rule dans `runners/*/step_definitions/global.js` en utilisant [les APIs de Codecept.js](https://codecept.io/helpers/Puppeteer/#methods)

```js
Alors("je vois {string}", (text) => {
  I.see(text);
});
```

### Mise en oeuvre

Récupérer le code `optional/e2e` du [répo de demo](https://github.com/socialgouv/sample-next-app) et modifier `codecept.conf.js` et les scénarios dans `e2e/features`.

Dans le `package.json` principal du projet ajouter un script `"e2e": "yarn --cwd=./optional/e2e/runners/puppeteer"`.

Puis lancer en local `CODECEPT_BASEURL=http://path/to/app yarn e2e test --steps` pour lancer les tests.

Lire les [best practices et exemples Codecept](https://codecept.io/best).

#### GitLab

Un job exemple est dispo sur le [répo de demo](https://github.com/socialgouv/sample-next-app).

Ce job doit s'executer après les éventuels migrate/seed de votre base de données.
