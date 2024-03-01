"use strict";(self.webpackChunksupport=self.webpackChunksupport||[]).push([[671],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>g});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(g,l(l({ref:t},d),{},{components:n})):a.createElement(g,l({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2634:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(8168),r=(n(6540),n(5680));const i={},l="D\xe9veloppement",o={unversionedId:"standards/developpement",id:"standards/developpement",title:"D\xe9veloppement",description:"L'utilisation de services SAAS tiers doit obligatoirement \xeatre soumise \xe0 l'\xe9quipe #Legal de la fabrique.",source:"@site/docs/standards/developpement.md",sourceDirName:"standards",slug:"/standards/developpement",permalink:"/support/docs/standards/developpement",draft:!1,editUrl:"https://github.com/socialgouv/support/tree/master/docs/standards/developpement.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Accueil des produits",permalink:"/support/docs/init/accueil-produits"},next:{title:"Accessibilit\xe9 num\xe9rique",permalink:"/support/docs/standards/accessibilite"}},s={},p=[{value:"Conventions de la fabrique",id:"conventions-de-la-fabrique",level:2},{value:"Git workflow : <strong>trunk-based</strong>",id:"git-workflow--trunk-based",level:3},{value:"Urls des environnements",id:"urls-des-environnements",level:3},{value:"Conventions de branche",id:"conventions-de-branche",level:3},{value:"Accessibilit\xe9 (A11Y)",id:"accessibilit\xe9-a11y",level:2},{value:"Synth\xe8se des attentes",id:"synth\xe8se-des-attentes",level:4},{value:"Services \xe0 disposition",id:"services-\xe0-disposition",level:2},{value:"Contributions externes",id:"contributions-externes",level:2},{value:"Donn\xe9es",id:"donn\xe9es",level:3},{value:"Authentification",id:"authentification",level:3},{value:"Secrets",id:"secrets",level:3},{value:".env.sample",id:"envsample",level:4},{value:"Serveurs de d\xe9veloppement",id:"serveurs-de-d\xe9veloppement",level:3},{value:"Documentation",id:"documentation",level:3},{value:"Conformit\xe9",id:"conformit\xe9",level:2},{value:"Synth\xe8se des attentes",id:"synth\xe8se-des-attentes-1",level:3}],d={toc:p},u="wrapper";function c(e){let{components:t,...i}=e;return(0,r.yg)(u,(0,a.A)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"d\xe9veloppement"},"D\xe9veloppement"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"L'utilisation de services SAAS tiers doit obligatoirement \xeatre soumise \xe0 l'\xe9quipe #Legal de la fabrique.")),(0,r.yg)("h2",{id:"conventions-de-la-fabrique"},"Conventions de la fabrique"),(0,r.yg)("p",null,"GitHub est utilis\xe9 pour tous nos projets publics et exceptionnellement notre GitLab interne pour les projets plus sensibles."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Utiliser la ",(0,r.yg)("a",{parentName:"li",href:"https://www.numerique.gouv.fr/publications/politique-logiciel-libre/pratique/#aide-au-choix-de-la-licence"},"licence Apache-2.0")," pour les codes sources"),(0,r.yg)("li",{parentName:"ul"},"Standardiser le code avec les ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/SocialGouv/linters"},"linters SocialGouv")," ou ceux de r\xe9f\xe9rence dans la communaut\xe9."),(0,r.yg)("li",{parentName:"ul"},"Maintenir son projet \xe0 jour avec notre config renovate : ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/SocialGouv/renovate-config"},"https://github.com/SocialGouv/renovate-config")," cf ",(0,r.yg)("a",{parentName:"li",href:"/docs/faq#utilisation-de-renovate"},"la FAQ")),(0,r.yg)("li",{parentName:"ul"},"Conventionner les commits GIT : ",(0,r.yg)("a",{parentName:"li",href:"https://conventionalcommits.org/"},"https://conventionalcommits.org/")),(0,r.yg)("li",{parentName:"ul"},"Conventionner le versionning : ",(0,r.yg)("a",{parentName:"li",href:"https://semver.org"},"https://semver.org")),(0,r.yg)("li",{parentName:"ul"},"Conventionner les commentaires : ",(0,r.yg)("a",{parentName:"li",href:"https://conventionalcomments.org/"},"https://conventionalcomments.org/")),(0,r.yg)("li",{parentName:"ul"},"Releaser sur GitHub/npm : avec ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/semantic-release/semantic-release"},"semantic-release")," cf ",(0,r.yg)("a",{parentName:"li",href:"/docs/faq#semantic-release"},"la FAQ")),(0,r.yg)("li",{parentName:"ul"},"R\xe9cup\xe9rer les erreurs applicatives dans ",(0,r.yg)("a",{parentName:"li",href:"https://sentry.fabrique.social.gouv.fr"},"sentry")),(0,r.yg)("li",{parentName:"ul"},"Utiliser ",(0,r.yg)("a",{parentName:"li",href:"https://dashlord.fabrique.social.gouv.fr"},"DashLord")," pour monitorer les bonnes pratiques."),(0,r.yg)("li",{parentName:"ul"},"Le ",(0,r.yg)("a",{parentName:"li",href:"https://gouvfr.atlassian.net/wiki/spaces/DB/overview?homepageId=145359476"},"syst\xe8me de design de l'\xe9tat")," doit \xeatre utilis\xe9 par d\xe9faut. une impl\xe9mentation React existe ici : ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/dataesr/react-dsfr"},"https://github.com/dataesr/react-dsfr"))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\ud83d\udc49 \ud83d\udc49 \ud83d\udc49 Le repository ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/socialgouv/template"},"template")," int\xe8gre toutes ces conventions par d\xe9faut.")),(0,r.yg)("h3",{id:"git-workflow--trunk-based"},"Git workflow : ",(0,r.yg)("strong",{parentName:"h3"},"trunk-based")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"La branche par d\xe9faut est ",(0,r.yg)("inlineCode",{parentName:"li"},"master")," (ou ",(0,r.yg)("inlineCode",{parentName:"li"},"main"),")."),(0,r.yg)("li",{parentName:"ul"},"Chaque ",(0,r.yg)("inlineCode",{parentName:"li"},"pull-request")," permet de d\xe9ployer un environnement de review."),(0,r.yg)("li",{parentName:"ul"},"Chaque merge sur ",(0,r.yg)("inlineCode",{parentName:"li"},"master")," d\xe9clenche une release qui peut \xeatre pouss\xe9e en pr\xe9production puis production.")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://excalidraw.com/#json=C7MTFWdQ53ao453K86doB,SgdphjWpmSiuDMBu-qwKVg"},(0,r.yg)("img",{src:n(2117).A,title:":size=1000x350",width:"2573",height:"750"}))),(0,r.yg)("p",null,"Ce GIT Flow est impl\xe9ment\xe9 dans les ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/SocialGouv/actions"},"GitHub actions @SocialGouv"),", l'\xe9quipe SRE vous aidera \xe0 les mettre en place."),(0,r.yg)("p",null,"\u26a0\ufe0f La release est conditionn\xe9e par la pr\xe9sence d'un commit conventionnel de type ",(0,r.yg)("inlineCode",{parentName:"p"},"fix: some fix")," ou ",(0,r.yg)("inlineCode",{parentName:"p"},"feat: some new feature"),". (cf ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/semantic-release/semantic-release#commit-message-format"},"semantic-relase default commit conventions"),")"),(0,r.yg)("h3",{id:"urls-des-environnements"},"Urls des environnements"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Url"),(0,r.yg)("th",{parentName:"tr",align:null},"Usage"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[PRODUIT]","-feature-x.dev.fabrique.social.gouv.fr"),(0,r.yg)("td",{parentName:"tr",align:null},"feature branches")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[PRODUIT]","-preprod.dev.fabrique.social.gouv.fr"),(0,r.yg)("td",{parentName:"tr",align:null},"preproduction")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[PRODUIT]",".fabrique.social.gouv.fr"),(0,r.yg)("td",{parentName:"tr",align:null},"production")))),(0,r.yg)("h3",{id:"conventions-de-branche"},"Conventions de branche"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Branche"),(0,r.yg)("th",{parentName:"tr",align:null},"Usage"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"fix/*, feat/*")),(0,r.yg)("td",{parentName:"tr",align:null},"d\xe9ploiement auto")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"persist/*")),(0,r.yg)("td",{parentName:"tr",align:null},"branche persistante")))),(0,r.yg)("p",null,"Ces conventions sont d\xe9finies dans vos ",(0,r.yg)("inlineCode",{parentName:"p"},".github/workflows"),"."),(0,r.yg)("h2",{id:"accessibilit\xe9-a11y"},"Accessibilit\xe9 (A11Y)"),(0,r.yg)("p",null,"Voir ",(0,r.yg)("a",{parentName:"p",href:"/docs/standards/accessibilite"},"standards accessibilit\xe9")),(0,r.yg)("h4",{id:"synth\xe8se-des-attentes"},"Synth\xe8se des attentes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Niveau"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Recommandation"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Obligation"),(0,r.yg)("td",{parentName:"tr",align:"left"},"La d\xe9claration d'accessibilit\xe9 doit \xeatre affich\xe9e dans le footer")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Obligation"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Le score d'accessibilit\xe9 doit \xeatre sup\xe9rieur \xe0 ",(0,r.yg)("inlineCode",{parentName:"td"},"75%"))))),(0,r.yg)("h2",{id:"services-\xe0-disposition"},"Services \xe0 disposition"),(0,r.yg)("p",null,"Plusieurs services sont disponibles, ",(0,r.yg)("a",{parentName:"p",href:"/docs/infrastructure/presentation#services-transverses"},"cf infrastucture")),(0,r.yg)("p",null,"L'acc\xe8s \xe0 ces services est \xe0 demander au besoin \xe0 l'\xe9quipe SRE."),(0,r.yg)("h2",{id:"contributions-externes"},"Contributions externes"),(0,r.yg)("p",null,"La Fabrique a plusieurs int\xe9r\xeats \xe0 ce que les projets soient non seulement ",(0,r.yg)("em",{parentName:"p"},"open source")," mais \xe9galement ouverts aux contributions ext\xe9rieures :"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"recevoir l'aide volontaire de personnes hors de l'organisation"),(0,r.yg)("li",{parentName:"ul"},"simplifier l'accueil d'un nouveau membre dans l'\xe9quipe de d\xe9veloppement"),(0,r.yg)("li",{parentName:"ul"},"pouvoir demander des contributions comme exercice de recrutement"),(0,r.yg)("li",{parentName:"ul"},"encourager la maintenabilit\xe9 du code")),(0,r.yg)("p",null,"La contrainte principale \xe0 satisfaire est que n'importe qui puisse mettre en place facilement un environnement fonctionnel de d\xe9veloppement et de test en ayant acc\xe8s seulement au d\xe9p\xf4t public."),(0,r.yg)("h3",{id:"donn\xe9es"},"Donn\xe9es"),(0,r.yg)("p",null,"Si l'application a besoin de donn\xe9es pour fonctionner, cr\xe9er des \xe9chantillons et les laisser \xe0 disposition sur le d\xe9p\xf4t du projet. L'\xe9chantillon doit pouvoir \xeatre ins\xe9r\xe9 dans la base de donn\xe9es simplement."),(0,r.yg)("p",null,"Les donn\xe9es peuvent \xeatre priv\xe9es ou confidentielles. Dans ce cas, il est \xe9videmment important de transformer l'\xe9chantillon pour qu'il ne contienne pas de donn\xe9e sensible."),(0,r.yg)("p",null,"Voir par exemple ",(0,r.yg)("a",{parentName:"p",href:"https://hasura.io/docs/latest/graphql/core/hasura-cli/hasura_seed/"},"https://hasura.io/docs/latest/graphql/core/hasura-cli/hasura_seed/"),"."),(0,r.yg)("h3",{id:"authentification"},"Authentification"),(0,r.yg)("p",null,"S'il existe un syst\xe8me d'authentification qui emp\xeache un contributeur externe d'utiliser normalement le produit, alors l'environnement local de d\xe9veloppement doit permettre de contourner ce syst\xe8me d'authentification."),(0,r.yg)("p",null,"Par exemple, si l'authentification se fait avec un OAuth Github qui v\xe9rifie que la personne est membre de l'organisation Github SocialGouv, alors un d\xe9veloppeur externe sera bloqu\xe9 et ne pourra pas tester l'application. La version locale de l'application doit donc remplacer ou modifier cet OAuth afin de permettre au d\xe9veloppeur de travailler."),(0,r.yg)("p",null,"Si l'authentification est interne, fournir dans les seeds des utilisateurs de test et les documenter."),(0,r.yg)("h3",{id:"secrets"},"Secrets"),(0,r.yg)("p",null,"L'application peut avoir besoin des secrets (notamment issus de fichier ",(0,r.yg)("inlineCode",{parentName:"p"},".env"),") pour fonctionner. On peut distinguer deux types de secrets :"),(0,r.yg)("p",null,"Le premier est un secret c\xf4t\xe9 c\xf4t\xe9 serveur (par exemple une cl\xe9 priv\xe9e servant \xe0 signer un JWT), dans ce cas, il faut s'assurer de fournir une valeur sp\xe9cifique \xe0 l'environnement de d\xe9veloppement local et prendre garde \xe0 ne pas laisser la m\xeame qu'en production, preproduction ou review."),(0,r.yg)("p",null,"Le second est une donn\xe9e connue par le serveur et qui ne peut pas \xeatre transmise aux d\xe9veloppeurs externes (par exemple un token d'acc\xe8s \xe0 un service tiers, une API d'envoi de mail, etc.). Dans ce cas, il faut s'assurer que le produit puisse fonctionner en local en mode d\xe9grad\xe9 m\xeame sans cette valeur. Par exemple, si on ne peut pas donner un certain token permettant de t\xe9l\xe9charger des donn\xe9es mais que l'on fournit \xe0 la place un \xe9chantillon de ces donn\xe9es au d\xe9veloppeur, une fonctionnalit\xe9 a \xe9t\xe9 exclue mais le produit reste fonctionnel."),(0,r.yg)("h4",{id:"envsample"},".env.sample"),(0,r.yg)("p",null,"Une fois la liste des secrets \xe0 fournir en environnement de d\xe9veloppement clairement \xe9tablie, une des mani\xe8res de les fournir sur le d\xe9p\xf4t est des cr\xe9er une fichier ",(0,r.yg)("inlineCode",{parentName:"p"},".env.sample")," que le d\xe9veloppeur pourra copier vers ",(0,r.yg)("inlineCode",{parentName:"p"},".env")," apr\xe8s avoir clon\xe9 le d\xe9p\xf4t."),(0,r.yg)("h3",{id:"serveurs-de-d\xe9veloppement"},"Serveurs de d\xe9veloppement"),(0,r.yg)("p",null,"La mise en place des serveurs de d\xe9veloppement doit aussi \xeatre accessible. Le plus souvent, on pourra utiliser ",(0,r.yg)("inlineCode",{parentName:"p"},"docker-compose")," pour assembler les composants de backend et les bases de donn\xe9es. Parall\xe8lement, on pourra utiliser les serveurs de d\xe9veloppement fournis avec les frameworks (React, Next.js) pour le frontend."),(0,r.yg)("h3",{id:"documentation"},"Documentation"),(0,r.yg)("p",null,"Une fois qu'un environnement de d\xe9veloppement viable et accessible a \xe9t\xe9 con\xe7u, il est primordial de bien documenter comment un d\xe9veloppeur peut le mettre en place facilement. Cela peut par exemple prendre la forme d'une section dans le README du projet qui d\xe9crit la mise place en pr\xe9cisant clairement les pr\xe9requis et l'ordre des \xe9tapes."),(0,r.yg)("p",null,"En plus de la mise en place de l'environnement de d\xe9veloppement, il est important de documenter le fonctionnement du produit, ses diff\xe9rents composants ainsi que leurs APIs afin de faciliter la prise en main de nouveaux d\xe9veloppeurs."),(0,r.yg)("h2",{id:"conformit\xe9"},"Conformit\xe9"),(0,r.yg)("p",null,"La conformit\xe9 aux r\xe9f\xe9rentiels g\xe9neraux qui s'appliquent \xe0 l'administration doivent \xeatre int\xe9gr\xe9s dans le cycle de d\xe9vellement du produit."),(0,r.yg)("h3",{id:"synth\xe8se-des-attentes-1"},"Synth\xe8se des attentes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Niveau"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Recommandation"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Obligation"),(0,r.yg)("td",{parentName:"tr",align:"left"},"La ",(0,r.yg)("inlineCode",{parentName:"td"},"d\xe9claration d'accessibilit\xe9")," doit \xeatre accessible via le chemin : ",(0,r.yg)("inlineCode",{parentName:"td"},"[URL produit]/accessibilite"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Obligation"),(0,r.yg)("td",{parentName:"tr",align:"left"},"La ",(0,r.yg)("inlineCode",{parentName:"td"},"d\xe9claration d'accessibilit\xe9")," doit \xeatre pr\xe9sente et en coh\xe9rente avec le niveau de conformit\xe9 du produit cf ",(0,r.yg)("a",{parentName:"td",href:"https://betagouv.github.io/a11y-generateur-declaration/#create"},"modele"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Obligation"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Les ",(0,r.yg)("inlineCode",{parentName:"td"},"mentions l\xe9gales")," doivent \xeatre accessible via le chemin : ",(0,r.yg)("inlineCode",{parentName:"td"},"[URL produit]/mentions-legales"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Obligation"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Les ",(0,r.yg)("inlineCode",{parentName:"td"},"mentions l\xe9gales")," doivent \xeatre pr\xe9sentes et coh\xe9rentes cf ",(0,r.yg)("a",{parentName:"td",href:"https://template.fabrique.social.gouv.fr/mentions-legales"},"modele"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Obligation"),(0,r.yg)("td",{parentName:"tr",align:"left"},"La ",(0,r.yg)("inlineCode",{parentName:"td"},"politique de confidentialit\xe9")," doit \xeatre accessible via le chemin : ",(0,r.yg)("inlineCode",{parentName:"td"},"[URL produit]/politique-confidentialite"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Obligation"),(0,r.yg)("td",{parentName:"tr",align:"left"},"La ",(0,r.yg)("inlineCode",{parentName:"td"},"politique de confidentialit\xe9")," doit \xeatre pr\xe9sente et en coh\xe9rente cf ",(0,r.yg)("a",{parentName:"td",href:"https://template.fabrique.social.gouv.fr/politique-confidentialite"},"modele"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Obligation"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Les ",(0,r.yg)("inlineCode",{parentName:"td"},"statistiques")," du produit doivent \xeatre accessible via le chemin : ",(0,r.yg)("inlineCode",{parentName:"td"},"[URL produit]/stats"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Obligation"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Les ",(0,r.yg)("inlineCode",{parentName:"td"},"statistiques")," du produit doivent \xeatre pr\xe9sentes et r\xe9guli\xe8rement mises \xe0 jours")))))}c.isMDXComponent=!0},2117:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/git-flow-simple-53504d4107acc6b645853571368fbc84.png"}}]);