"use strict";(self.webpackChunksupport=self.webpackChunksupport||[]).push([[91],{4061:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var s=i(7462),n=(i(7294),i(3905));i(828);const a={},o="D\xe9veloppement Mobile",l={unversionedId:"standards/mobile",id:"standards/mobile",title:"D\xe9veloppement Mobile",description:"Quelques questions \xe0 se poser avant de lancer un d\xe9veloppement d'applications mobile :",source:"@site/docs/standards/mobile.md",sourceDirName:"standards",slug:"/standards/mobile",permalink:"/support/docs/standards/mobile",draft:!1,editUrl:"https://github.com/socialgouv/support/tree/master/docs/standards/mobile.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tests",permalink:"/support/docs/standards/tests"},next:{title:"Build des images Docker",permalink:"/support/docs/standards/docker"}},r={},u=[{value:"Stack technique",id:"stack-technique",level:3},{value:"SAAS",id:"saas",level:3},{value:"Distribution",id:"distribution",level:3},{value:"Notifications Push",id:"notifications-push",level:3}],p={toc:u};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,s.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"d\xe9veloppement-mobile"},"D\xe9veloppement Mobile"),(0,n.kt)("p",null,"Quelques questions \xe0 se poser avant de lancer un d\xe9veloppement d'applications mobile :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"La pr\xe9sence sur les stores est-elle vraiment n\xe9cessaire ?"),(0,n.kt)("li",{parentName:"ul"},"Une web app / PWA ne pourrait elle pas rendre le m\xeame service ?")),(0,n.kt)("h3",{id:"stack-technique"},"Stack technique"),(0,n.kt)("p",null,"La fabrique recommande l'utilisation de ",(0,n.kt)("a",{parentName:"p",href:"https://reactnative.dev"},"react-native")," pour les d\xe9veloppements mobiles."),(0,n.kt)("h3",{id:"saas"},"SAAS"),(0,n.kt)("p",null,"L'application ne doit pas embarquer de SDK ou tracker qui transmetterait des infos personnelles. Solliciter l'\xe9quipe SRE ou Juridique en cas de doute."),(0,n.kt)("h3",{id:"distribution"},"Distribution"),(0,n.kt)("p",null,"Les applications doivent \xeatre distribu\xe9es via les comptes Apple et Google de la Fabrique num\xe9rique. Demander un acc\xe8s sur ",(0,n.kt)("a",{parentName:"p",href:"https://mattermost.fabrique.social.gouv.fr/default/channels/g-support"},"~/support")),(0,n.kt)("h3",{id:"notifications-push"},"Notifications Push"),(0,n.kt)("p",null,"La fabrique met \xe0 disposition un compte Firebase pour les notifications Push."),(0,n.kt)("p",null,"L\u2019utilisation d\u2019outils propos\xe9s par Google peut poser des questions juridiques et politiques. Juridiquement, les juges europ\xe9ens et les CNIL europ\xe9ennes consid\xe8rent que les transferts de donn\xe9es vers les Etats-Unis sont ill\xe9gaux. Politiquement, la circulaire du Premier ministre de 2021 indique \xe0 l\u2019administration de mesurer son utilisation d\u2019outils qui pourraient m\xe9connaitre le droit europ\xe9en."),(0,n.kt)("p",null,"Nous vous proposons une utilisation encadr\xe9e de l\u2019outil :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Les SE doivent envoyer des notifications ne contenant PAS de donn\xe9es personnelles ;"),(0,n.kt)("li",{parentName:"ul"},"Le contenu des notifications ne doit PAS permettre de personnalisation pouvant identifier les personnes ;"),(0,n.kt)("li",{parentName:"ul"},"Lorsque c\u2019est possible techniquement, de r\xe9initialiser l\u2019ID technique le plus souvent possible.")),(0,n.kt)("p",null,"Quelques exemples d\u2019autres administrations utilisant cet outil :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Minist\xe8re de l\u2019int\xe9rieur"),(0,n.kt)("li",{parentName:"ul"},"Minist\xe8re des solidarit\xe9s et de la sant\xe9 (MonEspaceSant\xe9)")),(0,n.kt)("p",null,"Si votre service num\xe9rique n\xe9cessite la r\xe9alisation d\u2019une analyse d\u2019impact et une rencontre avec la DPO, n\u2019h\xe9sitez pas \xe0 vous rapprocher de l\u2019\xe9quipe RGPD de la Fabrique num\xe9rique (Thomas ou Osiris) via Mattermost."),(0,n.kt)("p",null,"ex de notification: ",(0,n.kt)("inlineCode",{parentName:"p"},"[nom appli]: nouvelle notification re\xe7ue"),". C'est alors l'application elle-m\xeame (ou son API) qui est charg\xe9e de \"resolve\" et afficher le message personnalis\xe9."))}d.isMDXComponent=!0}}]);