"use strict";(self.webpackChunksupport=self.webpackChunksupport||[]).push([[4200],{4919:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));a(8209);const s={},i="Pr\xe9sentation",o={unversionedId:"infrastructure/presentation",id:"infrastructure/presentation",title:"Pr\xe9sentation",description:"Notre objectif est d'avoir des applications reproductibles qui peuvent tourner dans des containers \xe0 destination d'environnements kubernetes.",source:"@site/docs/infrastructure/presentation.md",sourceDirName:"infrastructure",slug:"/infrastructure/presentation",permalink:"/support/docs/infrastructure/presentation",draft:!1,editUrl:"https://github.com/socialgouv/support/tree/master/docs/infrastructure/presentation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Images Docker",permalink:"/support/docs/standards/docker"},next:{title:"Plan de reprise et continuit\xe9 des activit\xe9s (PRA / CRA)",permalink:"/support/docs/infrastructure/pra"}},l={},d=[{value:"Kubernetes (K8S)",id:"kubernetes-k8s",level:2},{value:"Bases de donn\xe9es",id:"bases-de-donn\xe9es",level:2},{value:"PostgreSQL",id:"postgresql",level:3},{value:"Elastic Search",id:"elastic-search",level:3},{value:"Stockage object",id:"stockage-object",level:2},{value:"Services transverses",id:"services-transverses",level:2},{value:"On-demand",id:"on-demand",level:2}],u={toc:d},p="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"pr\xe9sentation"},"Pr\xe9sentation"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Notre objectif est d'avoir des applications reproductibles qui peuvent tourner dans des containers \xe0 destination d'environnements kubernetes.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Les applications, containers et scripts doivent respecter des standards ouverts pour \xeatre portables.")),(0,n.kt)("p",null,"L'ensemble des applications utilise une CI/CD interne pour l'automatisation, notamment le build des images docker et leur d\xe9ploiement sur kubernetes."),(0,n.kt)("h2",{id:"kubernetes-k8s"},"Kubernetes (K8S)"),(0,n.kt)("p",null,"Notre cible de d\xe9ploiement est Kubernetes."),(0,n.kt)("p",null,"Vous devez donc containeriser votre application, \xe0 minima avec docker-compose."),(0,n.kt)("p",null,"Voir les best practices ",(0,n.kt)("a",{parentName:"p",href:"/docs/standards/docker"},"Docker")," et ",(0,n.kt)("a",{parentName:"p",href:"/docs/standards/kubernetes"},"Kubernetes"),"."),(0,n.kt)("h2",{id:"bases-de-donn\xe9es"},"Bases de donn\xe9es"),(0,n.kt)("h3",{id:"postgresql"},"PostgreSQL"),(0,n.kt)("p",null,'La fabrique propose des PostgreSQL backup\xe9s automatiquement, \xe0 J-7 en "just-in-time" puis via des archives quotidiennes au-del\xe0.'),(0,n.kt)("p",null,"La restauration des donn\xe9es se fait sur demande \xe0 l'\xe9quipe SRE."),(0,n.kt)("p",null,"Voir aussi les ",(0,n.kt)("a",{parentName:"p",href:"/docs/standards/databases"},"bonnes pratiques li\xe9es aux BDD")," et ",(0,n.kt)("a",{parentName:"p",href:"https://socialgouv.github.io/support/docs/faq#bases-de-donn%C3%A9es-postgresql-cnpg"},"comment acc\xe9der \xe0 ses instances de base de donn\xe9es"),"."),(0,n.kt)("h3",{id:"elastic-search"},"Elastic Search"),(0,n.kt)("p",null,"Nous pouvons mettre \xe0 disposition des clusters Elastic Search pour vos besoin (via ElasticCloud)"),(0,n.kt)("h2",{id:"stockage-object"},"Stockage object"),(0,n.kt)("p",null,"La fabrique propose du stockage S3 pour stocker des donn\xe9es dans les nuages."),(0,n.kt)("h2",{id:"services-transverses"},"Services transverses"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Service"),(0,n.kt)("th",{parentName:"tr",align:null},"Usage"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://matomo.fabrique.social.gouv.fr"},"Matomo")),(0,n.kt)("td",{parentName:"tr",align:null},"Tracking web RGPD-friendly")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://sentry.fabrique.social.gouv.fr"},"Sentry")),(0,n.kt)("td",{parentName:"tr",align:null},"Logs d'exceptions applicatives")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://tipimail.com"},"Tipimail")),(0,n.kt)("td",{parentName:"tr",align:null},"Emails transactionnels")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://grafana.fabrique.social.gouv.fr"},"Grafana")),(0,n.kt)("td",{parentName:"tr",align:null},"Monitoring / supervision")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/infrastructure/emails"},"Emails")),(0,n.kt)("td",{parentName:"tr",align:null},"Emails en ",(0,n.kt)("inlineCode",{parentName:"td"},"fabrique.social.gouv.fr"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://nextcloud.fabrique.social.gouv.fr"},"NextCloud")),(0,n.kt)("td",{parentName:"tr",align:null},"Drive/Fichiers partag\xe9s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://harbor.fabrique.social.gouv.fr"},"Harbor")),(0,n.kt)("td",{parentName:"tr",align:null},"Registry docker")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://ovh.com/"},"OVH")),(0,n.kt)("td",{parentName:"tr",align:null},"Noms de domaine personnalis\xe9s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://bitwarden.fabrique.social.gouv.fr"},"VaultWarden")),(0,n.kt)("td",{parentName:"tr",align:null},"Gestion des mots de passe")))),(0,n.kt)("h2",{id:"on-demand"},"On-demand"),(0,n.kt)("p",null,"Si vous avez d'autres besoins, l'\xe9quipe SRE est \xe0 votre disposition pour en discuter."))}c.isMDXComponent=!0}}]);