"use strict";(self.webpackChunksupport=self.webpackChunksupport||[]).push([[9147],{6411:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>n,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(7462),s=(a(7294),a(3905));a(8209);const l={},n="Bases de donn\xe9es",i={unversionedId:"standards/databases",id:"standards/databases",title:"Bases de donn\xe9es",description:"Nous utilisons principalement PostgreSQL comme moteur de BDD relationnelle.",source:"@site/docs/standards/databases.md",sourceDirName:"standards",slug:"/standards/databases",permalink:"/support/docs/standards/databases",draft:!1,editUrl:"https://github.com/socialgouv/support/tree/master/docs/standards/databases.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"D\xe9veloppement",permalink:"/support/docs/standards/developpement"},next:{title:"S\xe9curit\xe9",permalink:"/support/docs/standards/securite"}},o={},p=[{value:"Recommandations",id:"recommandations",level:2},{value:"Debug",id:"debug",level:3},{value:"PgHero",id:"pghero",level:4},{value:"Hasura",id:"hasura",level:3},{value:"Conventions",id:"conventions",level:2},{value:"Chiffrement",id:"chiffrement",level:2},{value:"Skill up",id:"skill-up",level:2},{value:"Related",id:"related",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...l}=e;return(0,s.kt)(d,(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"bases-de-donn\xe9es"},"Bases de donn\xe9es"),(0,s.kt)("p",null,"Nous utilisons principalement PostgreSQL comme moteur de BDD relationnelle."),(0,s.kt)("p",null,"La qualit\xe9 du mod\xe8le de donn\xe9es est cruciale dans le d\xe9veloppement :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"simplification des applications qui vont exploiter ces donn\xe9es"),(0,s.kt)("li",{parentName:"ul"},"communication avec le reste de l'\xe9quipe (une s\xe9mantique commune)"),(0,s.kt)("li",{parentName:"ul"},"performance des requ\xeates"),(0,s.kt)("li",{parentName:"ul"},"int\xe9grit\xe9 des donn\xe9es"),(0,s.kt)("li",{parentName:"ul"},"s\xe9curit\xe9...")),(0,s.kt)("p",null,"Il est important de prendre le temps de concevoir un mod\xe8le de donn\xe9es coh\xe9rent et scalable que vous pourrez partager facilement avec les product owners (m\xe9tier) et faire \xe9voluer ensemble."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"L'\xe9quipe SRE est \xe0 votre disposition pour vous aider dans cette d\xe9marche.")),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(9217).Z,title:":size=1000x450",width:"1840",height:"883"})),(0,s.kt)("h2",{id:"recommandations"},"Recommandations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Les ",(0,s.kt)("a",{parentName:"li",href:"https://www.base-de-donnees.com/orm/"},"ORMs")," ne sont ",(0,s.kt)("em",{parentName:"li"},"pas")," recommand\xe9s, y pr\xe9f\xe9rrer des ",(0,s.kt)("inlineCode",{parentName:"li"},"query builders"),"."),(0,s.kt)("li",{parentName:"ul"},"En JS/TS, utiliser la lib ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/porsager/postgres"},"Postgres.js")," si possible"),(0,s.kt)("li",{parentName:"ul"},"Utiliser un linter de tag SQL ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/devthejo/eslint-plugin-sql-pretty"},"eslint-plugin-sql-pretty")),(0,s.kt)("li",{parentName:"ul"},"Utiliser un outil qui g\xe8re les migrations (ex: ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/porsager/postgres-shift"},"postgres-shift"),", ",(0,s.kt)("a",{parentName:"li",href:"https://hasura.io/docs/latest/graphql/core/migrations/migrations-setup/"},"hasura"),")"),(0,s.kt)("li",{parentName:"ul"},"Cr\xe9er des fichiers de seed pour vos environnements de test/review"),(0,s.kt)("li",{parentName:"ul"},"Maintenir un diagramme du mod\xe8le dans le repo, quelque outils:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://draw.io"},"draw.io")," language standard ouvert, bien pour d\xe9marrer la r\xe9flexion from sratch sur le mod\xe8le de donn\xe9es au d\xe9marrage du projet avant m\xeame de commencer \xe0 coder"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://dbeaver.io/download/"},"DBeaver")," outil d'administration complet de base de donn\xe9es, permettant d'exporter un ER mod\xe8le depuis une base de donn\xe9es existante pour pouvoir facilement retravailler dessus"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.yworks.com/products/yed"},"yEd")," g\xe8re le format de diagram export\xe9 par DBeaver"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/qweeze/pg_diagram"},"pg_diagram"))))),(0,s.kt)("h3",{id:"debug"},"Debug"),(0,s.kt)("h4",{id:"pghero"},"PgHero"),(0,s.kt)("p",null,"Vous pouvez lancer localement ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ankane/pghero"},"PGHero")," et le connecter \xe0 votre base de donn\xe9es:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Ouvrir un port localement avec un ",(0,s.kt)("inlineCode",{parentName:"li"},"port-forward")," ou ",(0,s.kt)("inlineCode",{parentName:"li"},"teleport")),(0,s.kt)("li",{parentName:"ul"},"R\xe9cup\xe9rer le secret ",(0,s.kt)("inlineCode",{parentName:"li"},"pg-app")," dans votre namespace"),(0,s.kt)("li",{parentName:"ul"},"Lancer PGHero avec Docker : ")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -ti -e DATABASE_URL='postgresql://XXXX?sslmode=disable' -p 8080:8080 --net=host ankane/pghero\n")),(0,s.kt)("p",null,"Puis ouvrir ",(0,s.kt)("a",{parentName:"p",href:"http://127.0.0.1:8080"},"http://127.0.0.1:8080")),(0,s.kt)("h3",{id:"hasura"},"Hasura"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://hasura.io/"},"hasura")," est un composant battle-test\xe9 \xe0 la fabrique, qui se branche facilement sur votre base PostgreSQL."),(0,s.kt)("p",null,"Il permet d'exposer rapidement (low-code) une ",(0,s.kt)("a",{parentName:"p",href:"https://hasura.io/opensource/#features"},"API GraphQL avec des mod\xe8les, migrations, souscriptions, RBAC...")),(0,s.kt)("h2",{id:"conventions"},"Conventions"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.sqlstyle.guide/"},"SQL Style guide")),(0,s.kt)("li",{parentName:"ul"},"Positionner le diagramme dans ",(0,s.kt)("inlineCode",{parentName:"li"},"docs/db-model.png")," sur votre repo"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"yarn seed")," pour executer les seeds")),(0,s.kt)("h2",{id:"chiffrement"},"Chiffrement"),(0,s.kt)("p",null,"[todo]"),(0,s.kt)("h2",{id:"skill-up"},"Skill up"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\ud83c\uddeb\ud83c\uddf7 \ud83d\udc99 ",(0,s.kt)("a",{parentName:"li",href:"https://public.dalibo.com/exports/marketing/livres_blancs/dlb04-modeliser_avec_postgresql/DLB04_Modeliser_avec_PostgreSQL.pdf"},"Livre blanc ")," de ",(0,s.kt)("a",{parentName:"li",href:"https://www.dalibo.com/"},"Dalibo")," : Bonnes pratiques de mod\xe9lisation"),(0,s.kt)("li",{parentName:"ul"},"\ud83c\uddeb\ud83c\uddf7 \ud83d\udc99 ",(0,s.kt)("a",{parentName:"li",href:"https://www.youtube.com/playlist?list=PLn6POgpklwWonHjoGXXSIXJWYzPSy2FeJ"},"Vid\xe9os PostgreSQL de xavki")," : 34 vid\xe9os sur PostgreSQL et ses internals"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/dhamaniasad/awesome-postgres"},"awesome-postgres")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tapoueh.org/blog/2018/03/database-modelization-anti-patterns/"},"DB Modelization anti-patterns")),(0,s.kt)("li",{parentName:"ul"},"\ud83c\uddeb\ud83c\uddf7 \ud83d\udc99 ",(0,s.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=bo5j9xgiF48"},'Vid\xe9o Devoxx "Ce que les d\xe9veloppeurs doivent savoir sur les index"')),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://sqlfordevs.com/tips"},"Tips & ebook SQLforDevs.com"))),(0,s.kt)("h2",{id:"related"},"Related"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.pgcli.com/"},"pgcli : psql on stero\xefds")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://explain.depesz.com/s/6Pkc"},"Visual EXPLAIN")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://quickref.me/postgres"},"PostgreSQL cheatsheet")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/hasura/audit-trigger"},"PG audit log")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://prql-lang.org/"},"https://prql-lang.org/")),(0,s.kt)("li",{parentName:"ul"},"fun: ",(0,s.kt)("a",{parentName:"li",href:"https://oguimbal.github.io/pg-mem-playground/"},"Postgres in JS"))))}m.isMDXComponent=!0},9217:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/db-model-15221879bbb029fa0156377f7ea00223.png"}}]);