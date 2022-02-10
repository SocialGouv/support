# Tests

## Linters

---

## Tests unitaires en React

La façon la plus répandue de tester des composants en React est d'utiliser [Jest](https://jestjs.io/fr/) accompagné de [testing-library](https://testing-library.com/).

### Jest

`Jest` est préconfiguré dans la plupart des outils (`CRA` et `Next.js`) et fonctionne directement (habituellement, avec la command `yarn test`).

C'est un test runner qui possède un certain nombre de vérifications attendues (`matchers`).

```js
test("la meilleure saveur est le pamplemousse", () => {
  expect(bestLaCroixFlavor()).toBe("grapefruit");
});
```

Des exemples de `matchers` parmi les plus utiles :

- toBeNull()
- toHaveLength(number)
- toHaveBeenCalled()
- toHaveBeenCalledTimes(number)
- toBeFalsy
- toEqual(value)
- toMatch(regexp | string)
- toThrow(error)

Se reporter à [l'API expect](https://jestjs.io/fr/docs/expect) pour avoir la liste complète.

À noter également, `.not`, pour tester l'opposé d'une valeur :

```js
test("la meilleure saveur n'est pas coconut", () => {
  expect(bestLaCroixFlavor()).not.toBe("coconut");
});
```

#### Tests asynchrones

Tester le retour d'une promesse se fait via `resolves` et `rejects`:

```js
async function promisedLemon() {
  return Promise.resolve("lemon");
}

async function throwOctopusError() {
  throw new Error("octopus");
}

test("resolves to lemon", async () => {
  await expect(promisedLemon()).resolves.toBe("lemon");
  await expect(throwOctopusError()).rejects.toThrow("octopus");
});
```

#### Tester avec des mocks

Il est parfois indispensable de simuler des fonctions en test comme une API, une db, etc..
Dans ce cas, on passe par des `mocks` : [https://jestjs.io/docs/mock-function-api](https://jestjs.io/docs/mock-function-api)

Ces `mocks` peuvent avoir une implémentation ou non. On peut vérifier qu'ils ont été appelés, combien de fois et comment.

À noter que mocker une API peut se faire via la librairie [MSW](https://mswjs.io/docs/).

#### Tester avec des snapshots

Jest permet l'utilisation de `snapshot`. Comme son nom l'indique, l'idée est de vérifier que le retour d'une expression est le même que les retours précédents.

En pratique, cela se fait en 2 temps. Le test s'exécute une première fois, évalue l'expression du expect et l'écrit dans le fichier.
Puis, les prochaines exécutions du test vérifierons réellement en comparant avec ce résultat.

```js
// On lance une première fois `yarn test`.
test("add with snapshot", () => {
  expect(add(1, 2)).toMatchInlineSnapshot(); // ou bien toMatchSnapshot() => dans ce cas, le résultat sera stocké dans un fichier à part.
});

// Après l'exécution du test, le fichier a été modifié.
test("add with snapshot", () => {
  expect(add(1, 2)).toMatchInlineSnapshot(`3`);
});
```

Ce style de test n'est pas idéal puisqu'il ne vérifie pas que le résulat est fonctionnellement correct.
Mais il a son utilité pour écrire rapidement des tests et éviter les non régressions du code.

Tip : lancer `yarn test —watchAll` pour lancer les tests en continu et réagir aux modifications.

### Testing library

`Testing library` offre des utilitaires pour tester plus facilement une UI web.
Il ajoute des fonctionnalités à `Jest`, en particulier pour accéder aux noeuds du DOM.

[les 3 types de queries](https://testing-library.com/docs/react-testing-library/cheatsheet#queries) (getBy, findBy, queryBy) ont chacune leur utilité propre :

On utilisera : 
- `getBy*` pour vérifier que quelque chose est rendu.
- `queryBy*` pour vérifier que quelque chose n'est *pas* rendu.
- `findyBy*` pour vérifier que quelque chose est rendu, *au bout d'un moment* (i.e. de façon asynchrone).

```js
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it("should show an error if no email is given", () => {
  render(<ForgotPasswordPage />);

  userEvent.type(screen.getByLabelText(/courriel/i), "");

  userEvent.click(screen.getByRole("button", { name: /envoyer un email/i }));

  expect(screen.getByRole("alert")).toHaveTextContent(
    /Veuillez renseigner le champ Courriel/i
  );
});
```

L'idée est :

1. lancer le "render" du composant React
2. manipuler l'UI via des évènements (optionnel)
3. vérifier l'état du DOM

Chacune des queries (getBy, findBy, queryBy) peut être utilisée avec différents mode de recherches (_By_):

- `screen.getByLabelText` : récupérer un élément par son label dans la page
- `screen.getByRole` : récupérer un élément du DOM par son rôle, tel que `screen.getByRole("button", { name: /envoyer un email/i })`

Plus le mode de recherche sera précis, meilleur il sera. 
Le but étant de se rapprocher de la vision utilisateur et d'ignorer les détails d'implémentation afin que les tests soient aussi pérennes que possibles.

**Référence**

- [testing-playground](https://testing-playground.com/) : trouver un bon sélecteur pour `testing-library`
- [user-event](https://testing-library.com/docs/ecosystem-user-event) : une librairie supplémentaire qui fournit plus d'évènements que la méthode `fireEvent`.
- [jest-dom](https://testing-library.com/docs/ecosystem-jest-dom) : une librairie supplémentaire qui étend les `matchers` de `Jest` (ex: `toBeInTheDocument`, `toBeVisible`, `toBeChecked`, etc.)

#### Exemple de tests asynchrones

```js
it("should show an error if no email is given", async () => {
  render(<ResetPasswordPage />);

  userEvent.type(screen.getByLabelText(/^Mot de passe$/i), "tototiti");
  userEvent.type(
    screen.getByLabelText(/Confirmation mot de passe/i),
    "tototata"
  );

  userEvent.click(screen.getByRole("button", { name: /appliquer/i }));

  // en supposant que la vérification des mdp est asynchrone
  await waitFor(() =>
    expect(
      screen.getByText(/Les mots de passe ne correspondent pas/i)
    ).toBeInTheDocument()
  );
});
```

Pour aller plus loin :

- [exemple de test](https://github.com/kentcdodds/bookshelf/blob/main/src/__tests__/book-screen.js#L51) dans Bookshelf (Kent C. Dodds)
- [faker](https://github.com/marak/Faker.js/) permet de générer des jeux de test (ex: email, téléphone, etc.) et de randomiser ses inputs (best practice)

**Spécifiques à Next.js**

- https://github.com/toomuchdesign/next-page-tester : tester une page Next (avec le data fetching éventuel)
- https://github.com/scottrippey/next-router-mock : mocker le router de Next dans ses tests
- https://nextjs.org/docs/testing : la documentation officielle de Next sur le sujet du test

---

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
