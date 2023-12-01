"use strict";(self.webpackChunksupport=self.webpackChunksupport||[]).push([[892],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={},i="Images Docker",l={unversionedId:"standards/docker",id:"standards/docker",title:"Images Docker",description:"Les images Docker doivent pouvoir tourner en root-less et tourner avec un uid>0",source:"@site/docs/standards/docker.md",sourceDirName:"standards",slug:"/standards/docker",permalink:"/support/docs/standards/docker",draft:!1,editUrl:"https://github.com/socialgouv/support/tree/master/docs/standards/docker.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"D\xe9veloppement Mobile",permalink:"/support/docs/standards/mobile"},next:{title:"Pr\xe9sentation",permalink:"/support/docs/infrastructure/presentation"}},s={},d=[{value:"Optimisation d&#39;une image Docker pour NodeJS",id:"optimisation-dune-image-docker-pour-nodejs",level:2},{value:"exemple avec Hasura",id:"exemple-avec-hasura",level:2},{value:"exemple avec Strapi",id:"exemple-avec-strapi",level:2},{value:"Synth\xe8se des attentes",id:"synth\xe8se-des-attentes",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"images-docker"},"Images Docker"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Les images Docker doivent pouvoir tourner en ",(0,a.kt)("inlineCode",{parentName:"p"},"root-less")," et tourner avec un uid>0")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Vous devez utiliser uniquement des images Docker officielles et les surcharger \xe9ventuellement")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Vous devez utiliser des ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.dev/fr/about/releases/"},"versions LTS")," maintenues \xe0 jour avec renovate (ou DependaBot).")),(0,a.kt)("h2",{id:"optimisation-dune-image-docker-pour-nodejs"},"Optimisation d'une image Docker pour NodeJS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# If possible, use slim version as it is smaller\nARG NODE_VERSION=16-slim\n\n#--- Build stage\nFROM node:$NODE_VERSION as build # utiliser uniquement des images officielles\n\n# Build a rootless image for security reasons, and use an user id rather than a user name\nUSER 1000\nWORKDIR /app\n\nCOPY package.json yarn.lock ./\n# Don\'t add "--production" here as dev dependencies are usually required to build the app.\n# Use "--frozen-lockfile" to be sure package.json has not been updated without updating yarn.lock too.\nRUN yarn --frozen-lockfile\n\n# Warning: don\'t forget to have a `.dockerignore` file when doing a `COPY . .` to limit docker build context.\nCOPY . .\n\n# Note: re-run "yarn install" with production flag to remove dev dependencies, and then clean for the run stage\nRUN yarn build && yarn install --production && yarn cache clean\n\n\n#--- Run stage\nFROM node:$NODE_VERSION\n\nUSER 1000\nWORKDIR /app\n\nCOPY --from=build /app/ /app/\n\n# Note: Don\'t use "yarn start" as it doesn\'t handle linux signals (graceful shutdown for instance)\nCMD ["node", "dist/app.js"]\n')),(0,a.kt)("p",null,"Il est important d'avoir un ",(0,a.kt)("inlineCode",{parentName:"p"},".dockerignore")," complet, pour limiter la taille de l'image et optimiser le cache et les builds :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"*.md\n.git\n**/dist\n**/build\n**/node_modules\n**/.next\n**/.docz\n**/coverage\nnode_modules\nnpm-debug.log\nyarn-error.log\n.next\n")),(0,a.kt)("h2",{id:"exemple-avec-hasura"},"exemple avec Hasura"),(0,a.kt)("p",null,"Cf ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SocialGouv/template/blob/hasura/hasura/Dockerfile"},"https://github.com/SocialGouv/template/blob/hasura/hasura/Dockerfile")),(0,a.kt)("h2",{id:"exemple-avec-strapi"},"exemple avec Strapi"),(0,a.kt)("p",null,"Cf ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SocialGouv/1000jours/pull/1281/files"},"https://github.com/SocialGouv/1000jours/pull/1281/files")),(0,a.kt)("h2",{id:"synth\xe8se-des-attentes"},"Synth\xe8se des attentes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Niveau"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Recommandation"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Obligation"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Utiliser une des images source contenue dans la ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/SocialGouv/docker"},"liste maintenue par l'\xe9quipe SRE")," ou une ",(0,a.kt)("a",{parentName:"td",href:"https://docs.docker.com/trusted-content/official-images/"},"docker official image"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Obligation"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Un conteneur s'ex\xe9cute sans privil\xe8ges ",(0,a.kt)("inlineCode",{parentName:"td"},"rootless"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Obligation"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Un UID num\xe9rique sup\xe9rieur \xe0 ",(0,a.kt)("inlineCode",{parentName:"td"},"0")," doit \xeatre d\xe9fini num\xe9riquement dans le fichier ",(0,a.kt)("inlineCode",{parentName:"td"},"dockerfile"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Obligation"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Ne pas embarquer de secret ou d'outillage de dev dans les images")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Obligation"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Le composant utilis\xe9 dans l'image utilise la version LTS en cours")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Obligation"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Le fichier ",(0,a.kt)("inlineCode",{parentName:"td"},".dockerignore")," maintenu par l'\xe9quipe SRE doit \xeatre utilis\xe9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Recommandation"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Ne pas utiliser d'images de conteneurs bas\xe9es sur ",(0,a.kt)("inlineCode",{parentName:"td"},"DEBIAN"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"UBUNTU"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Obligation"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Les images de containers doivent r\xe9guli\xe8rement \xeatre mises \xe0 jour")))))}c.isMDXComponent=!0}}]);