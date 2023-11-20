"use strict";(self.webpackChunksupport=self.webpackChunksupport||[]).push([[836],{3584:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));a(8209);const s={},o="FAQ",l={unversionedId:"faq",id:"faq",title:"FAQ",description:"Semantic-release",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/support/docs/faq",draft:!1,editUrl:"https://github.com/socialgouv/support/tree/master/docs/faq.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Comptes emails",permalink:"/support/docs/infrastructure/emails"},next:{title:"Workshops propos\xe9s",permalink:"/support/docs/workshops/"}},i={},u=[{value:"Semantic-release",id:"semantic-release",level:2},{value:"D\xe9ployer un hotfix",id:"d\xe9ployer-un-hotfix",level:3},{value:"Pour publier sur npm",id:"pour-publier-sur-npm",level:3},{value:"Utilisation de renovate",id:"utilisation-de-renovate",level:2},{value:"Config standard",id:"config-standard",level:3},{value:"Config light",id:"config-light",level:3},{value:"Customisation",id:"customisation",level:4},{value:"Cr\xe9er un secret pour acc\xe9der \xe0 un registre GitLab priv\xe9",id:"cr\xe9er-un-secret-pour-acc\xe9der-\xe0-un-registre-gitlab-priv\xe9",level:3},{value:"Grafana",id:"grafana",level:2},{value:"Dashoards",id:"dashoards",level:3},{value:"Logs Loki",id:"logs-loki",level:3},{value:"Exemples",id:"exemples",level:4},{value:"Logs de vos containers : <code>{cluster=&quot;dev2&quot;, namespace=~&quot;myapp.*&quot;} |= &quot;webhook&quot;</code>",id:"logs-de-vos-containers--clusterdev2-namespacemyapp--webhook",level:5},{value:"Logs Ingress : <code>{cluster=&quot;dev2&quot;, namespace=&quot;ingress-basic&quot;} | json | vhost=myapp.dev2.fabrique.social.gouv.fr status=403</code>",id:"logs-ingress--clusterdev2-namespaceingress-basic--json--vhostmyappdev2fabriquesocialgouvfr-status403",level:5},{value:"Next.js",id:"nextjs",level:2},{value:"Variables d&#39;environnement c\xf4t\xe9 frontend",id:"variables-denvironnement-c\xf4t\xe9-frontend",level:3},{value:"Bases de donn\xe9es",id:"bases-de-donn\xe9es",level:2},{value:"Bases de donn\xe9es  PostgreSQL CNPG",id:"bases-de-donn\xe9es--postgresql-cnpg",level:3},{value:"Se connecter \xe0 la base via psql",id:"se-connecter-\xe0-la-base-via-psql",level:4},{value:"R\xe9cup\xe9ration d&#39;un dump",id:"r\xe9cup\xe9ration-dun-dump",level:4},{value:"Bases de donn\xe9es Azure Postgres",id:"bases-de-donn\xe9es-azure-postgres",level:3},{value:"<code>ERROR: cannot execute xxx in a read-only transaction</code>",id:"error-cannot-execute-xxx-in-a-read-only-transaction",level:4},{value:"<code>Too many failed login attempts</code>",id:"too-many-failed-login-attempts",level:4},{value:"<code>remaining connection slots are reserved for non-replication superuser connections</code>",id:"remaining-connection-slots-are-reserved-for-non-replication-superuser-connections",level:4},{value:"Acc\xe8s aux serveurs de bases de donn\xe9es PG de dev (Azure manag\xe9)",id:"acc\xe8s-aux-serveurs-de-bases-de-donn\xe9es-pg-de-dev-azure-manag\xe9",level:4},{value:"Alternative via le CLI teleport <code>tsh</code>",id:"alternative-via-le-cli-teleport-tsh",level:4},{value:"Azure Storage",id:"azure-storage",level:2},{value:"Hebergement vid\xe9o",id:"hebergement-vid\xe9o",level:3},{value:"Hasura",id:"hasura",level:2},{value:"JWK_KEY",id:"jwk_key",level:3},{value:"Kubernetes",id:"kubernetes",level:2},{value:"comment d\xe9bugger",id:"comment-d\xe9bugger",level:3},{value:"requests/limits",id:"requestslimits",level:3},{value:"Lancer un job de backup de la BDD",id:"lancer-un-job-de-backup-de-la-bdd",level:3},{value:"IPs du cluster",id:"ips-du-cluster",level:3},{value:"Noms de domaines externes",id:"noms-de-domaines-externes",level:3},{value:"Nginx : request entity too large",id:"nginx--request-entity-too-large",level:3},{value:"Nginx : custom headers",id:"nginx--custom-headers",level:3},{value:"Mattermost",id:"mattermost",level:2},{value:"Mattermost reminder bot",id:"mattermost-reminder-bot",level:3},{value:"Mattermost Github integration",id:"mattermost-github-integration",level:3},{value:"Nettoyage des environnements Kube de dev",id:"nettoyage-des-environnements-kube-de-dev",level:2}],p={toc:u},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"faq"},"FAQ"),(0,r.kt)("h2",{id:"semantic-release"},"Semantic-release"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/semantic-release/semantic-release"},"Semantic-release")," est utilis\xe9 pour cr\xe9er des releases automatiques lors d'un merge sur la branche principale et ",(0,r.kt)("inlineCode",{parentName:"p"},"alpha, beta, next"),"."),(0,r.kt)("p",null,"La release est conditionn\xe9e par la pr\xe9sence d'un commit conventionnel de type ",(0,r.kt)("inlineCode",{parentName:"p"},"fix: some fix")," ou ",(0,r.kt)("inlineCode",{parentName:"p"},"feat: some new feature")," (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/semantic-release/semantic-release#commit-message-format"},"semantic-relase default commit conventions"),")"),(0,r.kt)("p",null,"Ajoutez un fichier ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SocialGouv/standup/blob/8b130400ef80835f3d6fa0a8a56e98986a20e2f7/.github/workflows/release.yml"},(0,r.kt)("inlineCode",{parentName:"a"},".github/workflows/release.yml"))," \xe0 votre repo."),(0,r.kt)("h3",{id:"d\xe9ployer-un-hotfix"},"D\xe9ployer un hotfix"),(0,r.kt)("p",null,"Si votre branche ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," a \xe9volu\xe9, mais que vous souhaitez d\xe9ployer un hotfix en pr\xe9prod ou prod, cr\xe9ez une nouvelle branche ",(0,r.kt)("inlineCode",{parentName:"p"},"beta")," ou ",(0,r.kt)("inlineCode",{parentName:"p"},"alpha")," \xe0 partir de la derniere release et commitez un ",(0,r.kt)("inlineCode",{parentName:"p"},"fix:"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"semantic-release")," d\xe9clenchera alors une release ",(0,r.kt)("inlineCode",{parentName:"p"},"alpha")," ou ",(0,r.kt)("inlineCode",{parentName:"p"},"beta")," puis le workflow ",(0,r.kt)("inlineCode",{parentName:"p"},"production")," vous proposera de la d\xe9ployer."),(0,r.kt)("h3",{id:"pour-publier-sur-npm"},"Pour publier sur npm"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Les packages npm doivent \xeatre publi\xe9s en tant que ",(0,r.kt)("inlineCode",{parentName:"p"},"@socialgouv/package-name"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Le champ author doit \xeatre positionn\xe9 \xe0 ",(0,r.kt)("inlineCode",{parentName:"p"},"Fabrique num\xe9rique des Minist\xe8res Sociaux <contact@fabrique.social.gouv.fr> (https://fabrique.social.gouv.fr)"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"dans package.json, ajouter ",(0,r.kt)("inlineCode",{parentName:"p"},'"publishConfig":{"access": "public"}'))),(0,r.kt)("p",null,"Pour publier sur npm, il vous faudra un fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"release.yml")," particulier, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SocialGouv/react-departements/blob/4e60cecc7a65f0c41255b4747d1dba9f065b3c2c/.github/workflows/release.yml"},"exemple")),(0,r.kt)("p",null,"Le groupe GitHub ",(0,r.kt)("inlineCode",{parentName:"p"},"SocialGouv")," fournit plusieurs ",(0,r.kt)("inlineCode",{parentName:"p"},"secrets")," utilisables dans vos jobs :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"secrets.SOCIALGROOVYBOT_NPM_TOKEN")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"secrets.SOCIALGROOVYBOT_NAME")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"secrets.SOCIALGROOVYBOT_EMAIL"))),(0,r.kt)("h2",{id:"utilisation-de-renovate"},"Utilisation de renovate"),(0,r.kt)("p",null,"Le bot ",(0,r.kt)("inlineCode",{parentName:"p"},"renovate")," permet d'automatiser la maintenance des d\xe9pendances de votre projet."),(0,r.kt)("p",null,"Vous devez ajouter un fichier ",(0,r.kt)("inlineCode",{parentName:"p"},".github/renovate.json")," dans votre projet avec la config souhait\xe9e"),(0,r.kt)("p",null,"Nous proposons deux ",(0,r.kt)("inlineCode",{parentName:"p"},"presets")," de base :"),(0,r.kt)("h3",{id:"config-standard"},"Config standard"),(0,r.kt)("p",null,"Pour une maintenance quotidienne de votre projet"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "enabled": true,\n  "extends": ["github>SocialGouv/renovate-config"]\n}\n')),(0,r.kt)("h3",{id:"config-light"},"Config light"),(0,r.kt)("p",null,"Pour une maintenance raisonn\xe9e de votre projet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"patchs appliqu\xe9s en groupe toutes les lundi matin automagiquement"),(0,r.kt)("li",{parentName:"ul"},"mineurs tous les 1er du mois via une PR group\xe9e"),(0,r.kt)("li",{parentName:"ul"},"majors s\xe9par\xe9es tous les 1er du mois via des PR distinctes")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "enabled": true,\n  "extends": ["github>SocialGouv/renovate-config:light"]\n}\n')),(0,r.kt)("h4",{id:"customisation"},"Customisation"),(0,r.kt)("p",null,"renovate propose de ",(0,r.kt)("a",{parentName:"p",href:"https://docs.renovatebot.com/"},"nombreuses options")," pour \xe9tendre ces ",(0,r.kt)("inlineCode",{parentName:"p"},"presets")," et les adapter \xe0 vos besoins."),(0,r.kt)("p",null,"Il est possible de consulter les logs des jobs renovate ici : ",(0,r.kt)("a",{parentName:"p",href:"https://app.renovatebot.com/dashboard"},"https://app.renovatebot.com/dashboard")),(0,r.kt)("h3",{id:"cr\xe9er-un-secret-pour-acc\xe9der-\xe0-un-registre-gitlab-priv\xe9"},"Cr\xe9er un secret pour acc\xe9der \xe0 un registre GitLab priv\xe9"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Dans le projet GitLab, "Settings/Repository/Deploy Tokens", cr\xe9er un nouveau token avec les droits ',(0,r.kt)("inlineCode",{parentName:"p"},"read_registry"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Cr\xe9ez le sealed-secret"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'#!/bin/sh\ngitlab_project=some_gitlab_project_name\ngitlab_user=gitlab+deploy-token-xxx\ngitlab_token=somepass\n\nsre-seal --name regcred "dockerconfigjson={\\"auths\\":{\\"registry.gitlab.factory.social.gouv.fr/socialgouv/$gitlab_project\\":{\\"auth\\":\\"`echo -n \\"$gitlab_user:$gitlab_token\\"|base64`\\",\\"password\\":\\"$gitlab_token\\",\\"username\\":\\"$gitlab_user\\"}}}"\n')),(0,r.kt)("p",null,"Dans le YAML g\xe9n\xe9r\xe9, modifier le type de ",(0,r.kt)("inlineCode",{parentName:"p"},"Opaque")," \xe0 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubernetes.io/dockerconfigjson")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NB : ajouter ",(0,r.kt)("inlineCode",{parentName:"p"},"--cluster prod --namespace [app-namespace] --name regcred")," pour un secret de production")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"R\xe9f\xe9rencez ce secret dans votre deploiement")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  imagePullSecrets:\n    - name: regcred\n")),(0,r.kt)("h2",{id:"grafana"},"Grafana"),(0,r.kt)("h3",{id:"dashoards"},"Dashoards"),(0,r.kt)("p",null,"Vous pouvez cr\xe9er vos propres dashboards et vos propres groupes de dashboards qui regroupent les m\xe9triques techniques issues de l'infrastructure (r\xe9seau, storage, bases de donn\xe9s), du service (cpu, mem, hits...) ou de l'application si ",(0,r.kt)("a",{parentName:"p",href:"/docs/standards/kubernetes#exposer-les-m%C3%A9triques-de-mon-application"},"vous exposez des m\xe9triques OpenMetrics"),". Pour interroger ",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus")," qui expose les m\xe9triques, il faut utiliser le language PromQL. Exemples : ",(0,r.kt)("a",{parentName:"p",href:"https://timber.io/blog/promql-for-humans"},"https://timber.io/blog/promql-for-humans")),(0,r.kt)("h3",{id:"logs-loki"},"Logs Loki"),(0,r.kt)("p",null,"Vous pouvez interroger vos logs applicatifs dans la section ",(0,r.kt)("inlineCode",{parentName:"p"},"Explore")," de ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.fabrique.social.gouv.fr/explore"},"Grafana")," avec ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/loki/latest/logql/"},"LogQL"),"."),(0,r.kt)("p",null,"Les logs applicatifs doivent respecter les ",(0,r.kt)("a",{parentName:"p",href:"/docs/standards/kubernetes#bien-logger-dans-docker-et-donc-k8s"},"bonnes pratiques de logging")),(0,r.kt)("h4",{id:"exemples"},"Exemples"),(0,r.kt)("h5",{id:"logs-de-vos-containers--clusterdev2-namespacemyapp--webhook"},"Logs de vos containers : ",(0,r.kt)("inlineCode",{parentName:"h5"},'{cluster="dev2", namespace=~"myapp.*"} |= "webhook"')),(0,r.kt)("p",null,"Affiche les logs applicatifs qui contiennent ",(0,r.kt)("inlineCode",{parentName:"p"},"webhook")," dans les namespaces ",(0,r.kt)("inlineCode",{parentName:"p"},"myapp*")," du cluster ",(0,r.kt)("inlineCode",{parentName:"p"},"dev2"),"."),(0,r.kt)("h5",{id:"logs-ingress--clusterdev2-namespaceingress-basic--json--vhostmyappdev2fabriquesocialgouvfr-status403"},"Logs Ingress : ",(0,r.kt)("inlineCode",{parentName:"h5"},'{cluster="dev2", namespace="ingress-basic"} | json | vhost=myapp.dev2.fabrique.social.gouv.fr status=403')),(0,r.kt)("p",null,"Affiche les logs en erreur ",(0,r.kt)("inlineCode",{parentName:"p"},"403")," du front nginx de votre application (ingress)"),(0,r.kt)("p",null,"Cf cheat sheet LOKI : ",(0,r.kt)("a",{parentName:"p",href:"https://megamorf.gitlab.io/cheat-sheets/loki/"},"https://megamorf.gitlab.io/cheat-sheets/loki/")),(0,r.kt)("h2",{id:"nextjs"},"Next.js"),(0,r.kt)("h3",{id:"variables-denvironnement-c\xf4t\xe9-frontend"},"Variables d'environnement c\xf4t\xe9 frontend"),(0,r.kt)("p",null,"Voir l'impl\xe9mentation de ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SocialGouv/template"},"template")),(0,r.kt)("h2",{id:"bases-de-donn\xe9es"},"Bases de donn\xe9es"),(0,r.kt)("h3",{id:"bases-de-donn\xe9es--postgresql-cnpg"},"Bases de donn\xe9es  PostgreSQL CNPG"),(0,r.kt)("h4",{id:"se-connecter-\xe0-la-base-via-psql"},"Se connecter \xe0 la base via psql"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"avec kubectl : ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl exec -ti -n [NAMESPACE] [POD] psql"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"avec un client Postgres:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"r\xe9cup\xe9rer le secret ",(0,r.kt)("inlineCode",{parentName:"li"},"pg-app")," dans le namespace de la base de donn\xe9es"),(0,r.kt)("li",{parentName:"ul"},"ouvrir un port-forward : ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl port-forward -n [NAMESPACE] [POD] 5435:5432")),(0,r.kt)("li",{parentName:"ul"},"se connecter \xe0 ",(0,r.kt)("inlineCode",{parentName:"li"},"postgres://[USER]:[PASS]@127.0.0.1:5435/app?sslmode=disable"))),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"CNPG utilise des certificats SSL self-sign\xe9s, il faut d\xe9sactiver le SSL selon les clients")))),(0,r.kt)("h4",{id:"r\xe9cup\xe9ration-dun-dump"},"R\xe9cup\xe9ration d'un dump"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"via un client S3 : en r\xe9cup\xe9rant le secret ",(0,r.kt)("inlineCode",{parentName:"li"},"backups")," pr\xe9sent dans le namespace de la base de donn\xe9es"),(0,r.kt)("li",{parentName:"ul"},"ou via kubectl : ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl exec -n[NAMESPACE] pg-2 -c postgres -- pg_dump -Fc -d [DATABASE] > backup.dump"))),(0,r.kt)("p",null,"Voir aussi : ",(0,r.kt)("a",{parentName:"p",href:"https://cloudnative-pg.io/documentation/current/troubleshooting/#emergency-backup"},"https://cloudnative-pg.io/documentation/current/troubleshooting/#emergency-backup")),(0,r.kt)("h3",{id:"bases-de-donn\xe9es-azure-postgres"},"Bases de donn\xe9es Azure Postgres"),(0,r.kt)("h4",{id:"error-cannot-execute-xxx-in-a-read-only-transaction"},(0,r.kt)("inlineCode",{parentName:"h4"},"ERROR: cannot execute xxx in a read-only transaction")),(0,r.kt)("p",null,'Si le serveur est trop plein, il se met automatiquement en "read-only". Pour pouvoir faire le m\xe9nage, executer ',(0,r.kt)("inlineCode",{parentName:"p"},"SET SESSION CHARACTERISTICS AS TRANSACTION READ WRITE;"),' pour reactiver la mode "writeable".'),(0,r.kt)("p",null,"Voir aussi la doc ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/fr-fr/azure/postgresql/concepts-pricing-tiers?WT.mc_id=Portal-Microsoft_Azure_Support#reaching-the-storage-limit"},"Microsoft"),"."),(0,r.kt)("h4",{id:"too-many-failed-login-attempts"},(0,r.kt)("inlineCode",{parentName:"h4"},"Too many failed login attempts")),(0,r.kt)("p",null,"Par d\xe9faut, le ",(0,r.kt)("inlineCode",{parentName:"p"},"connection_throttling")," est activ\xe9 sur les logins PG. Il peut se d\xe9sactiver via la console Azure PG / Server parameters puis d\xe9sactiver ",(0,r.kt)("inlineCode",{parentName:"p"},"connection_throttling"),"."),(0,r.kt)("h4",{id:"remaining-connection-slots-are-reserved-for-non-replication-superuser-connections"},(0,r.kt)("inlineCode",{parentName:"h4"},"remaining connection slots are reserved for non-replication superuser connections")),(0,r.kt)("p",null,"Les serveurs PG avec 1 core sont limit\xe9s \xe0 50 connections simultann\xe9es."),(0,r.kt)("p",null,"Se connecter au serveur PG en admin et :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT pg_terminate_backend(pid)\n    FROM pg_stat_activity\n    WHERE state = 'idle'\n      AND state_change < current_timestamp - INTERVAL '30' MINUTE;\n")),(0,r.kt)("p",null,"See also ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MicrosoftDocs/azure-docs/blob/master/articles/postgresql/concepts-limits.md#limits-in-azure-database-for-postgresql---single-server"},"Limits in Azure Database for PostgreSQL")),(0,r.kt)("h4",{id:"acc\xe8s-aux-serveurs-de-bases-de-donn\xe9es-pg-de-dev-azure-manag\xe9"},"Acc\xe8s aux serveurs de bases de donn\xe9es PG de dev (Azure manag\xe9)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notez bien que vous devez faire partie de la team ",(0,r.kt)("inlineCode",{parentName:"strong"},"Admins")," de votre startup sur GitHub pour pouvoir acc\xe9der \xe0 la db")),(0,r.kt)("p",null,"Vous pouvez vous connecter \xe0 vos instances PostgreSQL via Teleport."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"T\xe9l\xe9chargez et installez le ",(0,r.kt)("a",{parentName:"li",href:"https://goteleport.com/download/"},"GUI Teleport ",(0,r.kt)("strong",{parentName:"a"},"Connect"))," (c'est l'application ",(0,r.kt)("strong",{parentName:"li"},"Teleport")," qui est s\xe9lectionn\xe9e par d\xe9faut sur la page, il faut s\xe9lectionner ",(0,r.kt)("strong",{parentName:"li"},"Teleport Connect"),")"),(0,r.kt)("li",{parentName:"ul"},"Lancez l'application Teleport Connect"),(0,r.kt)("li",{parentName:"ul"},"Renseignez l'addresse suivante quand elle vous est demand\xe9e: ",(0,r.kt)("strong",{parentName:"li"},"teleport.fabrique.social.gouv.fr")," et authentifiez vous ",(0,r.kt)("strong",{parentName:"li"},"avec Github"),"."),(0,r.kt)("li",{parentName:"ul"},'Naviguez dans l\'onglet "Databases"'),(0,r.kt)("li",{parentName:"ul"},'Choisissez votre serveur Postgres et cliquez sur "Connect" (avec le user ',(0,r.kt)("inlineCode",{parentName:"li"},"PostgresAdmins"),") puis renseignez le nom de la db postgres que vous souhaitez acc\xe9der et cliquer sur run. (ex: ",(0,r.kt)("inlineCode",{parentName:"li"},"preprod"),")")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," \u26a0\ufe0f De plus vous acc\xe9derez \xe0 la base de donn\xe9e en administrateur, vous \xeates responsable de vos actions.")),(0,r.kt)("h4",{id:"alternative-via-le-cli-teleport-tsh"},"Alternative via le CLI teleport ",(0,r.kt)("inlineCode",{parentName:"h4"},"tsh")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"T\xe9l\xe9chargez et installez le ",(0,r.kt)("a",{parentName:"li",href:"https://goteleport.com/download/"},"CLI Teleport")),(0,r.kt)("li",{parentName:"ul"},"Localement, se logger sur teleport avec : ",(0,r.kt)("inlineCode",{parentName:"li"},"tsh login --proxy=teleport.fabrique.social.gouv.fr teleport.fabrique.social.gouv.fr --auth=github")),(0,r.kt)("li",{parentName:"ul"},"Se connecter \xe0 une DB avec psql : ",(0,r.kt)("inlineCode",{parentName:"li"},"tsh db connect --db-user=PostgresAdmins --db-name=postgres [DBNAME]"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Pour ouvrir seulement un tunnel SSH et pouvoir connecter l'outil de votre choix (par exemple ",(0,r.kt)("inlineCode",{parentName:"li"},"pg_dump"),") : ",(0,r.kt)("inlineCode",{parentName:"li"},"tsh proxy db --db-user=PostgresAdmins --db-name=postgres --tunnel [DBNAME]"))))),(0,r.kt)("p",null,"\ud83d\udca1 Pour configurer un client Postgres avec teleport, cf ",(0,r.kt)("a",{parentName:"p",href:"https://goteleport.com/docs/connect-your-client/gui-clients/"},"https://goteleport.com/docs/connect-your-client/gui-clients/")),(0,r.kt)("h2",{id:"azure-storage"},"Azure Storage"),(0,r.kt)("h3",{id:"hebergement-vid\xe9o"},"Hebergement vid\xe9o"),(0,r.kt)("p",null,'Un stockage azure peut \xeatre utilis\xe9 pour stocker des vid\xe9os hors de GIT. Il faut placer les videos dans un "blob container" public, et jouer la commande suivante pour autoriser le "seek" (headers content-range) : ',(0,r.kt)("inlineCode",{parentName:"p"},"az storage account blob-service-properties update --account-name xxxxx --default-service-version '2020-10-02'")),(0,r.kt)("h2",{id:"hasura"},"Hasura"),(0,r.kt)("h3",{id:"jwk_key"},"JWK_KEY"),(0,r.kt)("p",null,"Il vaut mieux utiliser une ",(0,r.kt)("inlineCode",{parentName:"p"},"JWK_KEY")," statique plut\xf4t qu'une ",(0,r.kt)("inlineCode",{parentName:"p"},"JWK_URL")," qui n\xe9cessite que l'url soit disponible au d\xe9marrage d'hasura."),(0,r.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,r.kt)("h3",{id:"comment-d\xe9bugger"},"comment d\xe9bugger"),(0,r.kt)("p",null,"Utiliser rancher ou k9s pour aller dans votre namespace puis votre pod et inspecter les logs et events."),(0,r.kt)("p",null,"Consulter les logs dans ",(0,r.kt)("a",{parentName:"p",href:"#grafana"},"Grafana")),(0,r.kt)("h3",{id:"requestslimits"},"requests/limits"),(0,r.kt)("p",null,"Pour optimiser ces valeurs, scruter les graphs de grafana. Les ",(0,r.kt)("inlineCode",{parentName:"p"},"requests")," sont les ressources minimales requises pour d\xe9marrer un pod. Les ",(0,r.kt)("inlineCode",{parentName:"p"},"limits")," vont capper le CPU, et si la m\xe9moire utilis\xe9e exc\xe8de la limite d\xe9finie, le pod sera tu\xe9 et red\xe9marr\xe9."),(0,r.kt)("p",null,"Il est important d'ajuster finement ces valeurs pour optimiser les ressources sur le cluster et pouvoir aller vers de la scalabilit\xe9."),(0,r.kt)("h3",{id:"lancer-un-job-de-backup-de-la-bdd"},"Lancer un job de backup de la BDD"),(0,r.kt)("p",null,"Des jobs de backup des BDDs sont execut\xe9s quotidiennement. Pour forcer un nouveau backup pour l'appli ",(0,r.kt)("inlineCode",{parentName:"p"},"xxx"),", lancer ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl --context prod --namespace xxx create job --from=cronjob/backup-db-xxx my-backup"),"."),(0,r.kt)("h3",{id:"ips-du-cluster"},"IPs du cluster"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nom"),(0,r.kt)("th",{parentName:"tr",align:null},"IP"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ingress PROD"),(0,r.kt)("td",{parentName:"tr",align:null},"20.74.14.77")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ingress DEV"),(0,r.kt)("td",{parentName:"tr",align:null},"51.103.10.142")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IP de sortie PROD"),(0,r.kt)("td",{parentName:"tr",align:null},"20.74.10.146")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IP de sortie DEV"),(0,r.kt)("td",{parentName:"tr",align:null},"20.74.14.116")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Runner SCW1"),(0,r.kt)("td",{parentName:"tr",align:null},"51.15.230.115")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Runner SCW2"),(0,r.kt)("td",{parentName:"tr",align:null},"51.158.120.34")))),(0,r.kt)("h3",{id:"noms-de-domaines-externes"},"Noms de domaines externes"),(0,r.kt)("p",null,"Adresses des serveurs DNS \xe0 configurer sur votre nom de domaine (\xe0 confirmer):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Name server 1: ",(0,r.kt)("inlineCode",{parentName:"li"},"ns1-04.azure-dns.com.")),(0,r.kt)("li",{parentName:"ul"},"Name server 2: ",(0,r.kt)("inlineCode",{parentName:"li"},"ns2-04.azure-dns.net.")),(0,r.kt)("li",{parentName:"ul"},"Name server 3: ",(0,r.kt)("inlineCode",{parentName:"li"},"ns3-04.azure-dns.org.")),(0,r.kt)("li",{parentName:"ul"},"Name server 4: ",(0,r.kt)("inlineCode",{parentName:"li"},"ns4-04.azure-dns.info"))),(0,r.kt)("p",null,"La fabrique peut g\xe9rer votre nom de domaine sur son compte OVH."),(0,r.kt)("h3",{id:"nginx--request-entity-too-large"},"Nginx : request entity too large"),(0,r.kt)("p",null,"Si vous ",(0,r.kt)("strong",{parentName:"p"},"devez")," envoyer de gros fichiers, vous pouvez \xeatre limit\xe9 \xe0 l'envoi avec cette erreur c\xf4t\xe9 serveur; dans ce cas, ajoutez les ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nginx.com/nginx-ingress-controller/configuration/ingress-resources/advanced-configuration-with-annotations/"},"annotations ingress nginx")," suivantes dans votre ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"my-component:\n  ingress:\n    annotations:\n      nginx.ingress.kubernetes.io/proxy-body-size: 512m\n")),(0,r.kt)("h3",{id:"nginx--custom-headers"},"Nginx : custom headers"),(0,r.kt)("p",null,'Vous pouvez facilement ajouter des headers customs sur votre "ingress" nginx :'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"app:\n  ingress:\n    annotations:\n      nginx.ingress.kubernetes.io/server-snippet: |\n        add_header Cache-Control 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0';\n")),(0,r.kt)("h2",{id:"mattermost"},"Mattermost"),(0,r.kt)("h3",{id:"mattermost-reminder-bot"},"Mattermost reminder bot"),(0,r.kt)("p",null,"Reminder r\xe9current avec lien de meeting sur channel public:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'/remind ~s-domifa-dev "\n# DOMIFA WEEKLY MEETING :stopwatch:\n:video_camera:  https://whereby.com/teamdomifa\n" every wednesday at 11:00AM\n')),(0,r.kt)("p",null,"Autres exemples: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/scottleedavis/mattermost-plugin-remind/wiki/Usage"},"https://github.com/scottleedavis/mattermost-plugin-remind/wiki/Usage"),"\nDocumentation: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/scottleedavis/mattermost-plugin-remind"},"https://github.com/scottleedavis/mattermost-plugin-remind")),(0,r.kt)("h3",{id:"mattermost-github-integration"},"Mattermost Github integration"),(0,r.kt)("p",null,"Se connecter en utilisant le client Web (semble ne pas fonctionner sinon): ",(0,r.kt)("a",{parentName:"p",href:"https://mattermost.fabrique.social.gouv.fr"},"https://mattermost.fabrique.social.gouv.fr")),(0,r.kt)("p",null,"Dans n'importe quel canal, taper:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/github connect\n")),(0,r.kt)("p",null,"Puis cliquer sur le lien qui apparait pour autoriser l'acc\xe8s \xe0 votre compte github."),(0,r.kt)("p",null,"Commandes utiles:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# activer les notifications\n/github settings notifications on\n\n# s'abonner \xe0 un repo (pulls,issues,creates,deletes)\n/github subscriptions add SocialGouv/domifa\n\n# liste ses abonnements:\n/github subscriptions list\n")),(0,r.kt)("p",null,"Source du plugin: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/softdevteam/mattermost-github-integration"},"https://github.com/softdevteam/mattermost-github-integration")),(0,r.kt)("h2",{id:"nettoyage-des-environnements-kube-de-dev"},"Nettoyage des environnements Kube de dev"),(0,r.kt)("p",null,"Les ressources de dev sont r\xe9guli\xe8rement nettoy\xe9es par Janitor :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Ressource"),(0,r.kt)("th",{parentName:"tr",align:null},"Dur\xe9e de vie"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dev/","*"),(0,r.kt)("td",{parentName:"tr",align:null},"7j")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dev/renovate","*"),(0,r.kt)("td",{parentName:"tr",align:null},"24h")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dev/jobs/complete"),(0,r.kt)("td",{parentName:"tr",align:null},"24h")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dev/jobs/failed"),(0,r.kt)("td",{parentName:"tr",align:null},"7j")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"prod/jobs/complete"),(0,r.kt)("td",{parentName:"tr",align:null},"24h")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"prod/jobs/failed"),(0,r.kt)("td",{parentName:"tr",align:null},"7j")))))}m.isMDXComponent=!0}}]);