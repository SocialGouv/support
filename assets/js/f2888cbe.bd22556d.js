"use strict";(self.webpackChunksupport=self.webpackChunksupport||[]).push([[156],{8486:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>u,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var s=t(7462),a=(t(7294),t(3905));t(1839);const n={},u="Disaster reccovery",o={unversionedId:"infrastructure/disaster-recovery",id:"infrastructure/disaster-recovery",title:"Disaster reccovery",description:"PostgreSQL",source:"@site/docs/infrastructure/disaster-recovery.md",sourceDirName:"infrastructure",slug:"/infrastructure/disaster-recovery",permalink:"/docs/infrastructure/disaster-recovery",draft:!1,editUrl:"https://github.com/socialgouv/support/tree/main/docs/infrastructure/disaster-recovery.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Plan de reprise et continuit\xe9 des activit\xe9s (PRA / CRA)",permalink:"/docs/infrastructure/pra"},next:{title:"Comptes emails",permalink:"/docs/infrastructure/emails"}},i={},p=[{value:"PostgreSQL",id:"postgresql",level:2},{value:"Depuis un backup quotidien",id:"depuis-un-backup-quotidien",level:3},{value:"Avec la fonction &quot;Restaurer&quot; du portail Azure",id:"avec-la-fonction-restaurer-du-portail-azure",level:3}],l={toc:p};function c(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,s.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"disaster-reccovery"},"Disaster reccovery"),(0,a.kt)("h2",{id:"postgresql"},"PostgreSQL"),(0,a.kt)("p",null,"Deux options pour restaurer une base de donn\xe9es :"),(0,a.kt)("h3",{id:"depuis-un-backup-quotidien"},"Depuis un backup quotidien"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"r\xe9cup\xe9rer un ",(0,a.kt)("inlineCode",{parentName:"li"},"pg_dump")," quotidien dans le compte de storage Azure ",(0,a.kt)("inlineCode",{parentName:"li"},"[project]prodbackups")),(0,a.kt)("li",{parentName:"ul"},"restaurer le dump via une connexion au bastion")),(0,a.kt)("p",null,"Exemple :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Connexion bastion\nssh -L 1111:[app]devserver.postgres.database.azure.com:5432 [user]@40.89.139.58\n\n# Dans un autre shell :\n\n# Pour dumper une base cf https://docs.postgresql.fr/10/app-pgdump.html\nPGDATABASE="postgres://[user]%40[app]devserver:[password]@127.0.0.1:1111/[DBNAME_SOURCE]?sslmode=require"\npg_dump --clean --if-exists --quote-all-identifiers \\\n  -U postgres \\\n  --format=custom \\\n  -f /path/to/backup.psql;\n\n# Pour restaurer la base cf https://docs.postgresql.fr/10/app-pgrestore.html\nPGDATABASE="postgres://[user]%40[app]devserver:[password]@127.0.0.1:1111/[DBNAME_DESTINATION]?sslmode=require"\npg_restore \\\n  --clean --if-exists \\\n  --no-owner --no-acl \\\n  --role username \\\n  --verbose \\\n  /path/to/backup.psql\n')),(0,a.kt)("p",null,"\u26a0\ufe0f Attention a toujours fermer une connexion bastion existante avant d'en ouvrir une autre poue \xe9viter les erreurs."),(0,a.kt)("p",null,"Voir aussi ",(0,a.kt)("a",{parentName:"p",href:"/docs/faq#acc%C3%A8s-aux-serveurs-pg-de-dev"},"Connexion via bastion")),(0,a.kt)("h3",{id:"avec-la-fonction-restaurer-du-portail-azure"},'Avec la fonction "Restaurer" du portail Azure'),(0,a.kt)("p",null,'La fonction "Restaurer" accessible sur la page du serveur Postgres sur le Portail Azure permet de restaurer \xe0 J-30 avec une granularit\xe9 de 5minutes.'),(0,a.kt)("p",null,"Cette fonction cr\xe9\xe9 un nouveau serveur PG avec de nouveau credentials \xe0 mettre \xe0 jour dans votre application."),(0,a.kt)("p",null,"Voir aussi ",(0,a.kt)("a",{parentName:"p",href:"/docs/standards/kubernetes#sceller-un-secret-dans-kubernetes"},"Cr\xe9er un secret pour kubernetes")))}c.isMDXComponent=!0}}]);