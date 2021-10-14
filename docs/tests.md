# Tests

## Linters

---

## Tests unitaires en React

La façon la plus répandue de tester des composants en React est d'utiliser [Jest](https://jestjs.io/fr/) accompagnée de [testing-library](https://testing-library.com/).

### Jest

Jest est préconfiguré dans la plupart des outils (CRA et Next.js) et fonctionne out of the box (habituellement, avec la command `yarn test`).

C'est un test runner qui possède un certain nombre de vérifications attendues.

```jsx
test('la meilleure saveur est le pamplemousse', () => {
  expect(bestLaCroixFlavor()).toBe('grapefruit');
});
```

Des exemples d'expect parmi les plus utiles : 

- toBeNull()
- toHaveLength(number)
- toHaveBeenCalled()
- toHaveBeenCalledTimes(number)
- toBeFalsy
- toEqual(value)
- toMatch(regexp | string)
- toThrow(error)

Se reporter à [l'API d'expect](https://jestjs.io/fr/docs/expect) pour avoir la liste complète

À noter également : 

.not permet de tester l'opposé d'un expect : 

```jsx
test('la meilleure saveur n\'est pas coconut', () => {
  expect(bestLaCroixFlavor()).not.toBe('coconut');
});
```

#### Tests asynchrones

Tester le retour d'une promesse avec `resolves` et `rejects`: 

```jsx
async function promisedLemon() {
  return Promise.resolve("lemon")
}

async function throwOctopusError() {
  throw new Error("octopus")
}

test("resolves to lemon", async () => {
  await expect(promisedLemon()).resolves.toBe("lemon")
  await expect(throwOctopusError()).rejects.toThrow("octopus")
})
```

#### Tester avec des mocks

Il est parfois indispensable de simuler des fonctions en test comme une API, une db, etc..

Dans ce cas, on passe par des mocks : [https://jestjs.io/docs/mock-function-api](https://jestjs.io/docs/mock-function-api)

Ces mocks peuvent avoir une implémentation ou non. Et on peut vérifier qu'ils ont été appelés, combien de fois et comment. 

À noter que mocker une API peut se faire via la librairie [MSW](https://mswjs.io/docs/). 

#### Tester avec des snapshots

À minima, on peut tester avec des snapshots. Cela veut dire qu'on lancer une première fois le test, qui va exécuter l'implémentation du test et l'écrire dans le test.

```jsx
// On lance une première fois
test("add with snapshot", () => {
  expect(add(1, 2)).toMatchInlineSnapshot()
})

// Ensuite, le résultat de add(1, 2) est remplacé dans le fichier de test
test("add with snapshot", () => {
  expect(add(1, 2)).toMatchInlineSnapshot(`3`)
})
```

Ceci peut être utile pour faire des tests rapides et éviter les non régressions. 

Tip : lancer `yarn test —watchAll` pour  lancer les tests en continu et réagir aux modifications.

### Testing library

Testing library offre des utilitaires pour tester plus facilement une UI web. Il ajoute des fonctionnalités à Jest, en particulier pour accéder à tel noeud du DOM

Avant de l'utiliser, il est conseillé de comprendre [les 3 types de queries](https://testing-library.com/docs/react-testing-library/cheatsheet#queries), getBy, findBy, queryBy. Chacun a son utilité, en fonction du mode synchrone/asynchrone, du fait que retrouver un élément est attendu ou bien une erreur, etc..

```jsx
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

it("should show an error if no email is given", () => {
  render(<ForgotPasswordPage />)

  userEvent.type(screen.getByLabelText(/courriel/i), "")

  userEvent.click(screen.getByRole("button", { name: /envoyer un email/i }))

  expect(screen.getByRole("alert")).toHaveTextContent(/Veuillez renseigner le champ Courriel/i)
})
```

L'idée est de render le composant React. Puis de manipuler et/ou de tester des éléments du DOM.

Chacune des queries (getBy, findBy, queryBy) peuvent être utilisée avec différents types de recherches : 

- screen.getByLabelText : récupérer un élément label dans la page
- screen.getByRole : récupérer un élément du DOM par son rôle comme `screen.getByRole("button", { name: /envoyer un email/i })`

Plus le type de recherche sera précis et proche de la vision utilisateur, meilleur il sera.

**Référence**  

- trouver un sélecteur pour testing-library : [testing-playground](https://testing-playground.com/)
- [user-event](https://testing-library.com/docs/ecosystem-user-event) (recommandé) : une librairie supplémentaire qui fournit plus d'évènements que la méthode fireEvent.
- [jest-dom](https://testing-library.com/docs/ecosystem-jest-dom) (recommandé) : une librairie supplémentaire qui étend les expect de Jest (ex: toBeInTheDocument, toBeVisible, toBeChecked, etc.)

#### Tests asynchrones

```jsx
it("should show an error if no email is given", async () => {
  render(<ResetPasswordPage />)

  userEvent.type(screen.getByLabelText(/^Mot de passe$/i), "tototiti")
  userEvent.type(screen.getByLabelText(/Confirmation mot de passe/i), "tototata")

  userEvent.click(screen.getByRole("button", { name: /appliquer/i }))

  await waitFor(() => expect(screen.getByText(/Les mots de passe ne correspondent pas/i)).toBeInTheDocument())
})
```

Pour aller plus loin : 

- [exemple de test](https://github.com/kentcdodds/bookshelf/blob/main/src/__tests__/book-screen.js#L51) dans Bookshelf (de Kent C Dodds)
- [faker](https://github.com/marak/Faker.js/) permet de générer des jeux de test (ex: email, téléphone, etc.) et de randomiser ses inputs (best practice)

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

#### GitLab

Un job exemple est dispo sur le [répo de demo](https://github.com/socialgouv/sample-next-app).

Ce job doit s'executer après les éventuels migrate/seed de votre base de données.
