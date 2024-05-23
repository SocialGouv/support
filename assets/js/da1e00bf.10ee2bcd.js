"use strict";(self.webpackChunksupport=self.webpackChunksupport||[]).push([[856],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var r=n(6540);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=s,g=c["".concat(o,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:s,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(8168),s=(n(6540),n(5680));const a={},l="Tests",i={unversionedId:"standards/tests",id:"standards/tests",title:"Tests",description:"Linters",source:"@site/docs/standards/tests.md",sourceDirName:"standards",slug:"/standards/tests",permalink:"/support/docs/standards/tests",draft:!1,editUrl:"https://github.com/socialgouv/support/tree/master/docs/standards/tests.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kubernetes (K8S)",permalink:"/support/docs/standards/kubernetes"},next:{title:"D\xe9veloppement Mobile",permalink:"/support/docs/standards/mobile"}},o={},p=[{value:"Linters",id:"linters",level:2},{value:"Tests unitaires en React",id:"tests-unitaires-en-react",level:2},{value:"Jest",id:"jest",level:3},{value:"Tests asynchrones",id:"tests-asynchrones",level:4},{value:"Tester avec des mocks",id:"tester-avec-des-mocks",level:4},{value:"Tester avec des snapshots",id:"tester-avec-des-snapshots",level:4},{value:"Testing library",id:"testing-library",level:3},{value:"Exemple de tests asynchrones",id:"exemple-de-tests-asynchrones",level:4},{value:"Tests end-to-end avec Gherkin",id:"tests-end-to-end-avec-gherkin",level:2},{value:"Mise en oeuvre",id:"mise-en-oeuvre",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,s.yg)(c,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("h1",{id:"tests"},"Tests"),(0,s.yg)("h2",{id:"linters"},"Linters"),(0,s.yg)("hr",null),(0,s.yg)("h2",{id:"tests-unitaires-en-react"},"Tests unitaires en React"),(0,s.yg)("p",null,"La fa\xe7on la plus r\xe9pandue de tester des composants en React est d'utiliser ",(0,s.yg)("a",{parentName:"p",href:"https://jestjs.io/fr/"},"Jest")," accompagn\xe9 de ",(0,s.yg)("a",{parentName:"p",href:"https://testing-library.com/"},"testing-library"),"."),(0,s.yg)("h3",{id:"jest"},"Jest"),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"Jest")," est pr\xe9configur\xe9 dans la plupart des outils (",(0,s.yg)("inlineCode",{parentName:"p"},"CRA")," et ",(0,s.yg)("inlineCode",{parentName:"p"},"Next.js"),") et fonctionne directement (habituellement, avec la command ",(0,s.yg)("inlineCode",{parentName:"p"},"yarn test"),")."),(0,s.yg)("p",null,"C'est un test runner qui poss\xe8de un certain nombre de v\xe9rifications attendues (",(0,s.yg)("inlineCode",{parentName:"p"},"matchers"),")."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-js"},'test("la meilleure saveur est le pamplemousse", () => {\n  expect(bestLaCroixFlavor()).toBe("grapefruit");\n});\n')),(0,s.yg)("p",null,"Des exemples de ",(0,s.yg)("inlineCode",{parentName:"p"},"matchers")," parmi les plus utiles :"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"toBeNull()"),(0,s.yg)("li",{parentName:"ul"},"toHaveLength(number)"),(0,s.yg)("li",{parentName:"ul"},"toHaveBeenCalled()"),(0,s.yg)("li",{parentName:"ul"},"toHaveBeenCalledTimes(number)"),(0,s.yg)("li",{parentName:"ul"},"toBeFalsy"),(0,s.yg)("li",{parentName:"ul"},"toEqual(value)"),(0,s.yg)("li",{parentName:"ul"},"toMatch(regexp | string)"),(0,s.yg)("li",{parentName:"ul"},"toThrow(error)")),(0,s.yg)("p",null,"Se reporter \xe0 ",(0,s.yg)("a",{parentName:"p",href:"https://jestjs.io/fr/docs/expect"},"l'API expect")," pour avoir la liste compl\xe8te."),(0,s.yg)("p",null,"\xc0 noter \xe9galement, ",(0,s.yg)("inlineCode",{parentName:"p"},".not"),", pour tester l'oppos\xe9 d'une valeur :"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-js"},'test("la meilleure saveur n\'est pas coconut", () => {\n  expect(bestLaCroixFlavor()).not.toBe("coconut");\n});\n')),(0,s.yg)("h4",{id:"tests-asynchrones"},"Tests asynchrones"),(0,s.yg)("p",null,"Tester le retour d'une promesse se fait via ",(0,s.yg)("inlineCode",{parentName:"p"},"resolves")," et ",(0,s.yg)("inlineCode",{parentName:"p"},"rejects"),":"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-js"},'async function promisedLemon() {\n  return Promise.resolve("lemon");\n}\n\nasync function throwOctopusError() {\n  throw new Error("octopus");\n}\n\ntest("resolves to lemon", async () => {\n  await expect(promisedLemon()).resolves.toBe("lemon");\n  await expect(throwOctopusError()).rejects.toThrow("octopus");\n});\n')),(0,s.yg)("h4",{id:"tester-avec-des-mocks"},"Tester avec des mocks"),(0,s.yg)("p",null,"Il est parfois indispensable de simuler des fonctions en test comme une API, une db, etc..\nDans ce cas, on passe par des ",(0,s.yg)("inlineCode",{parentName:"p"},"mocks")," : ",(0,s.yg)("a",{parentName:"p",href:"https://jestjs.io/docs/mock-function-api"},"https://jestjs.io/docs/mock-function-api")),(0,s.yg)("p",null,"Ces ",(0,s.yg)("inlineCode",{parentName:"p"},"mocks")," peuvent avoir une impl\xe9mentation ou non. On peut v\xe9rifier qu'ils ont \xe9t\xe9 appel\xe9s, combien de fois et comment."),(0,s.yg)("p",null,"\xc0 noter que mocker une API peut se faire via la librairie ",(0,s.yg)("a",{parentName:"p",href:"https://mswjs.io/docs/"},"MSW"),"."),(0,s.yg)("h4",{id:"tester-avec-des-snapshots"},"Tester avec des snapshots"),(0,s.yg)("p",null,"Jest permet l'utilisation de ",(0,s.yg)("inlineCode",{parentName:"p"},"snapshot"),". Comme son nom l'indique, l'id\xe9e est de v\xe9rifier que le retour d'une expression est le m\xeame que les retours pr\xe9c\xe9dents."),(0,s.yg)("p",null,"En pratique, cela se fait en 2 temps. Le test s'ex\xe9cute une premi\xe8re fois, \xe9value l'expression du expect et l'\xe9crit dans le fichier.\nPuis, les prochaines ex\xe9cutions du test v\xe9rifierons r\xe9ellement en comparant avec ce r\xe9sultat."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-js"},'// On lance une premi\xe8re fois `yarn test`.\ntest("add with snapshot", () => {\n  expect(add(1, 2)).toMatchInlineSnapshot(); // ou bien toMatchSnapshot() => dans ce cas, le r\xe9sultat sera stock\xe9 dans un fichier \xe0 part.\n});\n\n// Apr\xe8s l\'ex\xe9cution du test, le fichier a \xe9t\xe9 modifi\xe9.\ntest("add with snapshot", () => {\n  expect(add(1, 2)).toMatchInlineSnapshot(`3`);\n});\n')),(0,s.yg)("p",null,"Ce style de test n'est pas id\xe9al puisqu'il ne v\xe9rifie pas que le r\xe9sulat est fonctionnellement correct.\nMais il a son utilit\xe9 pour \xe9crire rapidement des tests et \xe9viter les non r\xe9gressions du code."),(0,s.yg)("p",null,"Tip : lancer ",(0,s.yg)("inlineCode",{parentName:"p"},"yarn test \u2014watchAll")," pour lancer les tests en continu et r\xe9agir aux modifications."),(0,s.yg)("h3",{id:"testing-library"},"Testing library"),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"Testing library")," offre des utilitaires pour tester plus facilement une UI web.\nIl ajoute des fonctionnalit\xe9s \xe0 ",(0,s.yg)("inlineCode",{parentName:"p"},"Jest"),", en particulier pour acc\xe9der aux noeuds du DOM."),(0,s.yg)("p",null,(0,s.yg)("a",{parentName:"p",href:"https://testing-library.com/docs/react-testing-library/cheatsheet#queries"},"les 3 types de queries")," (getBy, findBy, queryBy) ont chacune leur utilit\xe9 propre :"),(0,s.yg)("p",null,"On utilisera : "),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"getBy*")," pour v\xe9rifier que quelque chose est rendu."),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"queryBy*")," pour v\xe9rifier que quelque chose n'est ",(0,s.yg)("em",{parentName:"li"},"pas")," rendu."),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"findyBy*")," pour v\xe9rifier que quelque chose est rendu, ",(0,s.yg)("em",{parentName:"li"},"au bout d'un moment")," (i.e. de fa\xe7on asynchrone).")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-js"},'import { render, screen, waitFor } from "@testing-library/react";\nimport userEvent from "@testing-library/user-event";\n\nit("should show an error if no email is given", () => {\n  render(<ForgotPasswordPage />);\n\n  userEvent.type(screen.getByLabelText(/courriel/i), "");\n\n  userEvent.click(screen.getByRole("button", { name: /envoyer un email/i }));\n\n  expect(screen.getByRole("alert")).toHaveTextContent(\n    /Veuillez renseigner le champ Courriel/i\n  );\n});\n')),(0,s.yg)("p",null,"L'id\xe9e est :"),(0,s.yg)("ol",null,(0,s.yg)("li",{parentName:"ol"},'lancer le "render" du composant React'),(0,s.yg)("li",{parentName:"ol"},"manipuler l'UI via des \xe9v\xe8nements (optionnel)"),(0,s.yg)("li",{parentName:"ol"},"v\xe9rifier l'\xe9tat du DOM")),(0,s.yg)("p",null,"Chacune des queries (getBy, findBy, queryBy) peut \xeatre utilis\xe9e avec diff\xe9rents mode de recherches (",(0,s.yg)("em",{parentName:"p"},"By"),"):"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"screen.getByLabelText")," : r\xe9cup\xe9rer un \xe9l\xe9ment par son label dans la page"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"screen.getByRole")," : r\xe9cup\xe9rer un \xe9l\xe9ment du DOM par son r\xf4le, tel que ",(0,s.yg)("inlineCode",{parentName:"li"},'screen.getByRole("button", { name: /envoyer un email/i })'))),(0,s.yg)("p",null,"Plus le mode de recherche sera pr\xe9cis, meilleur il sera.\nLe but \xe9tant de se rapprocher de la vision utilisateur et d'ignorer les d\xe9tails d'impl\xe9mentation afin que les tests soient aussi p\xe9rennes que possibles."),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"R\xe9f\xe9rence")),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://testing-playground.com/"},"testing-playground")," : trouver un bon s\xe9lecteur pour ",(0,s.yg)("inlineCode",{parentName:"li"},"testing-library")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://testing-library.com/docs/ecosystem-user-event"},"user-event")," : une librairie suppl\xe9mentaire qui fournit plus d'\xe9v\xe8nements que la m\xe9thode ",(0,s.yg)("inlineCode",{parentName:"li"},"fireEvent"),"."),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://testing-library.com/docs/ecosystem-jest-dom"},"jest-dom")," : une librairie suppl\xe9mentaire qui \xe9tend les ",(0,s.yg)("inlineCode",{parentName:"li"},"matchers")," de ",(0,s.yg)("inlineCode",{parentName:"li"},"Jest")," (ex: ",(0,s.yg)("inlineCode",{parentName:"li"},"toBeInTheDocument"),", ",(0,s.yg)("inlineCode",{parentName:"li"},"toBeVisible"),", ",(0,s.yg)("inlineCode",{parentName:"li"},"toBeChecked"),", etc.)")),(0,s.yg)("h4",{id:"exemple-de-tests-asynchrones"},"Exemple de tests asynchrones"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-js"},'it("should show an error if no email is given", async () => {\n  render(<ResetPasswordPage />);\n\n  userEvent.type(screen.getByLabelText(/^Mot de passe$/i), "tototiti");\n  userEvent.type(\n    screen.getByLabelText(/Confirmation mot de passe/i),\n    "tototata"\n  );\n\n  userEvent.click(screen.getByRole("button", { name: /appliquer/i }));\n\n  // en supposant que la v\xe9rification des mdp est asynchrone\n  await waitFor(() =>\n    expect(\n      screen.getByText(/Les mots de passe ne correspondent pas/i)\n    ).toBeInTheDocument()\n  );\n});\n')),(0,s.yg)("p",null,"Pour aller plus loin :"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://github.com/kentcdodds/bookshelf/blob/main/src/__tests__/book-screen.js#L51"},"exemple de test")," dans Bookshelf (Kent C. Dodds)"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://github.com/marak/Faker.js/"},"faker")," permet de g\xe9n\xe9rer des jeux de test (ex: email, t\xe9l\xe9phone, etc.) et de randomiser ses inputs (best practice)")),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Sp\xe9cifiques \xe0 Next.js")),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://github.com/toomuchdesign/next-page-tester"},"https://github.com/toomuchdesign/next-page-tester")," : tester une page Next (avec le data fetching \xe9ventuel)"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://github.com/scottrippey/next-router-mock"},"https://github.com/scottrippey/next-router-mock")," : mocker le router de Next dans ses tests"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://nextjs.org/docs/testing"},"https://nextjs.org/docs/testing")," : la documentation officielle de Next sur le sujet du test")),(0,s.yg)("hr",null),(0,s.yg)("h2",{id:"tests-end-to-end-avec-gherkin"},"Tests end-to-end avec Gherkin"),(0,s.yg)("p",null,"Tester des sc\xe9narios de navigation sur ses applications webs :"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"Syntaxe Gherkin en \ud83c\uddeb\ud83c\uddf7"),(0,s.yg)("li",{parentName:"ul"},"API ",(0,s.yg)("a",{parentName:"li",href:"https://codecept.io/"},"Codecept")," pour piloter n'importe quel navigateur"),(0,s.yg)("li",{parentName:"ul"},"Rend les UI plus accessibles (techniquement)"),(0,s.yg)("li",{parentName:"ul"},"Utilisable localement"),(0,s.yg)("li",{parentName:"ul"},"Automatisable dans la CI")),(0,s.yg)("p",null,"Repo de d\xe9mo : ",(0,s.yg)("a",{parentName:"p",href:"https://github.com/socialgouv/sample-next-app"},"https://github.com/socialgouv/sample-next-app")),(0,s.yg)("p",null,"Les tests sont \xe0 \xe9crire avec la ",(0,s.yg)("a",{parentName:"p",href:"https://codecept.io/bdd/#gherkin"},"syntaxe Gherkin")," dans ",(0,s.yg)("inlineCode",{parentName:"p"},"e2e/features/**/*.feature")," :"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},'@liste-services-public\nFonctionnalit\xe9: Liste des services publics\n  Pour pouvoir trouver un service public\n  En tant que visiteur\n  Je veux pouvoir filtrer les services public\n\nSc\xe9nario:\n  Soit un navigateur web sur la page /services\n  Alors je vois 8 services\n  Quand je coche la case "CE"\n  Alors je vois "exemple avec mention CE 1"\n  Alors je vois "exemple avec mention CE et CEE"\n  Alors je ne vois pas "exemple avec ention CEE"\n  Alors je vois 2 services\n  Quand je d\xe9coche la case "CE"\n  Quand je coche la case "CEE"\n  Alors je ne vois pas "exemple avec mention CE 1"\n  Alors je vois "exemple avec mention CE et CEE"\n  Alors je vois "exemple avec ention CEE"\n  Alors je vois 2 services\n')),(0,s.yg)("p",null,"Chaque expression de ce sc\xe9nario doit matcher une rule dans ",(0,s.yg)("inlineCode",{parentName:"p"},"runners/*/step_definitions/global.js")," en utilisant ",(0,s.yg)("a",{parentName:"p",href:"https://codecept.io/helpers/Puppeteer/#methods"},"les APIs de Codecept.js")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-js"},'Alors("je vois {string}", (text) => {\n  I.see(text);\n});\n')),(0,s.yg)("h3",{id:"mise-en-oeuvre"},"Mise en oeuvre"),(0,s.yg)("p",null,"R\xe9cup\xe9rer le code ",(0,s.yg)("inlineCode",{parentName:"p"},"optional/e2e")," du ",(0,s.yg)("a",{parentName:"p",href:"https://github.com/socialgouv/sample-next-app"},"r\xe9po de demo")," et modifier ",(0,s.yg)("inlineCode",{parentName:"p"},"codecept.conf.js")," et les sc\xe9narios dans ",(0,s.yg)("inlineCode",{parentName:"p"},"e2e/features"),"."),(0,s.yg)("p",null,"Dans le ",(0,s.yg)("inlineCode",{parentName:"p"},"package.json")," principal du projet ajouter un script ",(0,s.yg)("inlineCode",{parentName:"p"},'"e2e": "yarn --cwd=./optional/e2e/runners/puppeteer"'),"."),(0,s.yg)("p",null,"Puis lancer en local ",(0,s.yg)("inlineCode",{parentName:"p"},"CODECEPT_BASEURL=http://path/to/app yarn e2e test --steps")," pour lancer les tests."),(0,s.yg)("p",null,"Lire les ",(0,s.yg)("a",{parentName:"p",href:"https://codecept.io/best"},"best practices et exemples Codecept"),"."))}d.isMDXComponent=!0}}]);