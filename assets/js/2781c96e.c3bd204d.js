"use strict";(self.webpackChunksupport=self.webpackChunksupport||[]).push([[200],{4919:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var r=a(7462),s=(a(7294),a(3905));a(1839);const n={},o="Pr\xe9sentation",i={unversionedId:"infrastructure/presentation",id:"infrastructure/presentation",title:"Pr\xe9sentation",description:"Notre objectif est d'avoir des applications reproductibles qui peuvent tourner dans des containers \xe0 destination d'environnements kubernetes.",source:"@site/docs/infrastructure/presentation.md",sourceDirName:"infrastructure",slug:"/infrastructure/presentation",permalink:"/support/docs/infrastructure/presentation",draft:!1,editUrl:"https://github.com/socialgouv/support/tree/master/docs/infrastructure/presentation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"D\xe9veloppement Mobile",permalink:"/support/docs/standards/mobile"},next:{title:"Plan de reprise et continuit\xe9 des activit\xe9s (PRA / CRA)",permalink:"/support/docs/infrastructure/pra"}},l={},p=[{value:"Kubernetes (K8S)",id:"kubernetes-k8s",level:2},{value:"Bases de donn\xe9es",id:"bases-de-donn\xe9es",level:2},{value:"PostgreSQL",id:"postgresql",level:3},{value:"Elastic Search",id:"elastic-search",level:3},{value:"Stockage object",id:"stockage-object",level:2},{value:"Services transverses",id:"services-transverses",level:2},{value:"On-demand",id:"on-demand",level:2}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"pr\xe9sentation"},"Pr\xe9sentation"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Notre objectif est d'avoir des applications reproductibles qui peuvent tourner dans des containers \xe0 destination d'environnements kubernetes.")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Les applications, containers et scripts doivent respecter des standards ouverts pour \xeatre portables.")),(0,s.kt)("p",null,"L'ensemble des applications utilise des ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/socialgouv/actions"},"GitHub actions @socialgouv")," pour l'automatisation, notamment le build des images docker et leur d\xe9ploiement sur kubernetes."),(0,s.kt)("h2",{id:"kubernetes-k8s"},"Kubernetes (K8S)"),(0,s.kt)("p",null,"Notre cible de d\xe9ploiement est Kubernetes."),(0,s.kt)("p",null,"Vous devez donc containeriser votre application, \xe0 minima avec docker-compose."),(0,s.kt)("p",null,"Voir les ",(0,s.kt)("a",{parentName:"p",href:"/docs/standards/kubernetes"},"best practices Kubernetes"),"."),(0,s.kt)("h2",{id:"bases-de-donn\xe9es"},"Bases de donn\xe9es"),(0,s.kt)("h3",{id:"postgresql"},"PostgreSQL"),(0,s.kt)("p",null,"La fabrique propose des ",(0,s.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/fr-fr/services/postgresql/#overview"},"Postgres manag\xe9s"),' qui sont backup\xe9s automatiquement, \xe0 J-7 en "just-in-time" puis via des archives quotidiennes au-del\xe0.'),(0,s.kt)("p",null,"La restauration des donn\xe9es se fait sur demande \xe0 l'\xe9quipe OPS."),(0,s.kt)("p",null,"Les seuls extensions PG disponibles sont list\xe9es ici : ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/MicrosoftDocs/azure-docs/blob/master/articles/postgresql/concepts-extensions.md"},"https://github.com/MicrosoftDocs/azure-docs/blob/master/articles/postgresql/concepts-extensions.md")),(0,s.kt)("h3",{id:"elastic-search"},"Elastic Search"),(0,s.kt)("p",null,"Nous pouvons mettre \xe0 disposition des clusters Elastic Search pour vos besoin (via ElasticCloud)"),(0,s.kt)("h2",{id:"stockage-object"},"Stockage object"),(0,s.kt)("p",null,"La fabrique propose du ",(0,s.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/fr-fr/azure/storage/blobs/storage-blobs-introduction"},"stockage objet")," pour stocker des donn\xe9es dans les nuages."),(0,s.kt)("h2",{id:"services-transverses"},"Services transverses"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Service"),(0,s.kt)("th",{parentName:"tr",align:null},"Usage"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://matomo.fabrique.social.gouv.fr"},"Matomo")),(0,s.kt)("td",{parentName:"tr",align:null},"Tracking web RGPD-friendly")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://sentry.fabrique.social.gouv.fr"},"Sentry")),(0,s.kt)("td",{parentName:"tr",align:null},"Logs d'exceptions applicatives")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://tipimail.com"},"Tipimail")),(0,s.kt)("td",{parentName:"tr",align:null},"Emails transactionnels")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://grafana.fabrique.social.gouv.fr"},"Grafana")),(0,s.kt)("td",{parentName:"tr",align:null},"Monitoring / supervision")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/infrastructure/emails"},"Emails")),(0,s.kt)("td",{parentName:"tr",align:null},"Emails en ",(0,s.kt)("inlineCode",{parentName:"td"},"fabrique.social.gouv.fr"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://nextcloud.fabrique.social.gouv.fr"},"NextCloud")),(0,s.kt)("td",{parentName:"tr",align:null},"Drive/Fichiers partag\xe9s")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://harbor.fabrique.social.gouv.fr"},"Harbor")),(0,s.kt)("td",{parentName:"tr",align:null},"Registry docker")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://ovh.com/"},"OVH")),(0,s.kt)("td",{parentName:"tr",align:null},"Noms de domaine personnalis\xe9s")))),(0,s.kt)("h2",{id:"on-demand"},"On-demand"),(0,s.kt)("p",null,"Si vous avez d'autres besoins, l'\xe9quipe SRE est \xe0 votre disposition pour en discuter."))}d.isMDXComponent=!0}}]);