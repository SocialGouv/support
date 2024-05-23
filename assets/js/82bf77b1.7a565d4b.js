"use strict";(self.webpackChunksupport=self.webpackChunksupport||[]).push([[56],{5680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>d});var a=r(6540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=a.createContext({}),i=function(e){var n=a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=i(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,s=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=i(r),m=t,d=c["".concat(p,".").concat(m)]||c[m]||g[m]||s;return r?a.createElement(d,o(o({ref:n},u),{},{components:r})):a.createElement(d,o({ref:n},u))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var s=r.length,o=new Array(s);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:t,o[1]=l;for(var i=2;i<s;i++)o[i]=r[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2955:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var a=r(8168),t=(r(6540),r(5680));const s={},o="Kubernetes from scratch",l={unversionedId:"workshops/kubernetes",id:"workshops/kubernetes",title:"Kubernetes from scratch",description:"Objectifs",source:"@site/docs/workshops/kubernetes.md",sourceDirName:"workshops",slug:"/workshops/kubernetes",permalink:"/support/docs/workshops/kubernetes",draft:!1,editUrl:"https://github.com/socialgouv/support/tree/master/docs/workshops/kubernetes.md",tags:[],version:"current",frontMatter:{}},p={},i=[{value:"Objectifs",id:"objectifs",level:2},{value:"Notes",id:"notes",level:2},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Les outils",id:"les-outils",level:2},{value:"\xc9tapes",id:"\xe9tapes",level:2},{value:"Intro",id:"intro",level:3},{value:"Exemple des manifests d&#39;une app",id:"exemple-des-manifests-dune-app",level:3},{value:"deploy d&#39;un pod nu en pur kubernetes",id:"deploy-dun-pod-nu-en-pur-kubernetes",level:3},{value:"Ajouter un service + ingress",id:"ajouter-un-service--ingress",level:4}],u={toc:i},c="wrapper";function g(e){let{components:n,...r}=e;return(0,t.yg)(c,(0,a.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"kubernetes-from-scratch"},"Kubernetes from scratch"),(0,t.yg)("h2",{id:"objectifs"},"Objectifs"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"intro kube"),(0,t.yg)("li",{parentName:"ul"},"d\xe9ployer des workloads/jobs/cronjobs sur l'infra"),(0,t.yg)("li",{parentName:"ul"},"d\xe9bugger ses workloads")),(0,t.yg)("h2",{id:"notes"},"Notes"),(0,t.yg)("p",null,"La partie CI/CD/github-actions/docker ne sont pas abord\xe9s dans ",(0,t.yg)("em",{parentName:"p"},"ce")," workshop."),(0,t.yg)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"kubectl install\xe9"),(0,t.yg)("li",{parentName:"ul"},"kubeconfig local configur\xe9 pour le cluster ",(0,t.yg)("inlineCode",{parentName:"li"},"dev"),". vous pouvez r\xe9cup\xe9rer votre fichier kubeconfig dans ",(0,t.yg)("a",{parentName:"li",href:"https://rancher.fabrique.social.gouv.fr"},"rancher")," et le placer dans ",(0,t.yg)("inlineCode",{parentName:"li"},"~/.kube/config"),"."),(0,t.yg)("li",{parentName:"ul"},"avoir acc\xe8s via ",(0,t.yg)("a",{parentName:"li",href:"https://rancher.fabrique.social.gouv.fr"},"rancher")," ou ",(0,t.yg)("a",{parentName:"li",href:"https://github.com/derailed/k9s"},"k9s")," au cluster ",(0,t.yg)("inlineCode",{parentName:"li"},"dev")),(0,t.yg)("li",{parentName:"ul"},"avoir acc\xe8s au ",(0,t.yg)("a",{parentName:"li",href:"https://grafana.fabrique.social.gouv.fr"},"grafana")," de la fabrique"),(0,t.yg)("li",{parentName:"ul"},"avoir parcouru ",(0,t.yg)("a",{parentName:"li",href:"https://socialgouv.github.io/support/#/kubernetes"},"https://socialgouv.github.io/support/#/kubernetes")),(0,t.yg)("li",{parentName:"ul"},"lire l'",(0,t.yg)("a",{parentName:"li",href:"https://enix.io/fr/blog/kubernetes-c-est-quoi-definition-k8s/"},"intro Kube d'ENIX"))),(0,t.yg)("p",null,"\u26a0\ufe0f pour lancer k9s : ",(0,t.yg)("inlineCode",{parentName:"p"},"k9s --context dev --namespace mon-namespace"),". Pour connaitre les namespaces auxquels vous avez acc\xe8s, rdv sur rancher"),(0,t.yg)("h2",{id:"les-outils"},"Les outils"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://rancher.fabrique.social.gouv.fr"},"rancher")," : webapp de supervision de cluster"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://github.com/derailed/k9s"},"k9s")," : rancher en CLI"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://grafana.fabrique.social.gouv.fr"},"grafana")," : supervision technique et logs (loki)"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://kubernetes.io/fr/docs/reference/kubectl/cheatsheet/"},"kubectl")," : CLI pour communiquer avec une API kube, configur\xe9 par ",(0,t.yg)("inlineCode",{parentName:"li"},"~/.kube/config")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://k8slens.dev/"},"Lens Desktop")," : un GUI pour superviser des clusters Kube")),(0,t.yg)("h2",{id:"\xe9tapes"},"\xc9tapes"),(0,t.yg)("h3",{id:"intro"},"Intro"),(0,t.yg)("p",null,"Kube c'est un peu comme React, mais pour les d\xe9ploiements : vous d\xe9crivez les ",(0,t.yg)("em",{parentName:"p"},"ressources")," souhait\xe9es (D\xe9ploiements, volumes, cronjobs, jobs...) dans des ",(0,t.yg)("em",{parentName:"p"},"manifests")," (YAML ou JSON) qui respectent l'",(0,t.yg)("a",{parentName:"p",href:"https://dev-k8sref-io.web.app/"},"API kubernetes")," et les ",(0,t.yg)("em",{parentName:"p"},"appliquez"),' sur votre cluster, lequel se chargera de mettre en place vos services et de les maintenir en l\'\xe9tat. Lorsqu\'on met \xe0 jour des manifests, Kube calcule un "diff" sur les ressources et "optimise" leur \xe9ventuel d\xe9ploiement.'),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"kubectl")," est le couteau-suisse standard qui permet d'interragir avec l'API de votre cluster :"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"# afficher les pods de mon namespace\nkubectl --context dev --namespace my-ns get pods\n\n# afficher les ressources d'un namespace\nkubectl --context dev --namespace my-ns get deploy,pod,ingress,sealedsecret,secret,service,configmap\n\n# logs d'un pod\nkubectl --context dev --namespace my-ns logs [pod-name]\n\n# appliquer des manifests\nkubectl apply --context dev --namespace my-ns -f manifests.yaml\n")),(0,t.yg)("p",null,"Chaque ",(0,t.yg)("em",{parentName:"p"},"ressource")," kubernetes est d\xe9finie par un manifeste particulier qu'on peut r\xe9cup\xe9rer en ajoutant ",(0,t.yg)("inlineCode",{parentName:"p"},"-ojson")," ou ",(0,t.yg)("inlineCode",{parentName:"p"},"-oyaml")," \xe0 la commande ",(0,t.yg)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,t.yg)("p",null,"Certains manifests sont charg\xe9s de cr\xe9er d'autres manifests \xe0 la demande de kube. Par exemple, un ",(0,t.yg)("inlineCode",{parentName:"p"},"SealedSecret")," g\xe9n\xe8re un ",(0,t.yg)("inlineCode",{parentName:"p"},"Secret"),", un ",(0,t.yg)("inlineCode",{parentName:"p"},"Deployment")," g\xe9n\xe8re un ou plusieurs ",(0,t.yg)("inlineCode",{parentName:"p"},"Pod"),", et un ",(0,t.yg)("inlineCode",{parentName:"p"},"CronJob")," d\xe9clenche des ",(0,t.yg)("inlineCode",{parentName:"p"},"Job"),"."),(0,t.yg)("p",null,"Pouvoir avoir un endoint HTTP accessible il faut \xe0 minima 3 manifests :"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"Ingress")," : routing HTTP, rate-limit, redirects, SSL..."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"Service")," : expose vos containers sur le r\xe9seau du cluster"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"Deployment")," : d\xe9ploie un ou plusieurs containers sur le cluster")),(0,t.yg)("mermaid",{chart:"graph TD\n\nInternet--\x3eIngress\n\nsubgraph kubernetes\nIngress--\x3eService--\x3eDeployment\nsubgraph deployment\nDeployment--\x3ePod\nDeployment--\x3ePod2\nsubgraph pod\nPod--\x3eContainer1\nPod--\x3eContainer2\nend\nsubgraph pod2\nPod2--\x3eContainer2.1\nPod2--\x3eContainer2.2\nend\nend\n\nsubgraph cronjob\nCronjob--\x3eJob\nsubgraph job\nJob--\x3ePodJob[Pod]\nsubgraph pod-\nPodJob--\x3eContainer11\nPodJob--\x3eContainer22\nend\nend\nend\n\nsubgraph job2\nJob2[Job]--\x3ePodJob2[Pod]\nsubgraph -pod-\nPodJob2--\x3eContainer111\nPodJob2--\x3eContainer222\nend\nend\n\nend"}),(0,t.yg)("h3",{id:"exemple-des-manifests-dune-app"},"Exemple des manifests d'une app"),(0,t.yg)("p",null,(0,t.yg)("img",{parentName:"p",src:"https://i.imgur.com/NYV6X6n.png",alt:null})),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"http://rancher.fabrique.social.gouv.fr/"},"Rancher")," permet d'inspecter le cluster via une web UI et ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/derailed/k9s"},"k9s")," via un CLI."),(0,t.yg)("p",null,"\ud83d\udc49 TODO : Explorer sur les deux clients"),(0,t.yg)("p",null,"\ud83d\udc49 TODO : Analyser les ressources disponibles"),(0,t.yg)("h3",{id:"deploy-dun-pod-nu-en-pur-kubernetes"},"deploy d'un pod nu en pur kubernetes"),(0,t.yg)("p",null,"Avant de pouvoir cr\xe9er un pod, il faut d\xe9j\xe0 un cr\xe9er un namespace sur le cluster :"),(0,t.yg)("p",null,"Il est important de positionner la variable ",(0,t.yg)("inlineCode",{parentName:"p"},"projectId")," en fonction de votre projet Rancher."),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"namespace.yml")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Namespace\nmetadata:\n  name: my-namespace\n  annotations:\n    field.cattle.io/projectId: "c-gjtkk:p-z6nmd" # important pour les droits\n')),(0,t.yg)("p",null,"Le ",(0,t.yg)("inlineCode",{parentName:"p"},"projectId")," correspond \xe0 l'ID de votre projet dans rancher."),(0,t.yg)("p",null,(0,t.yg)("img",{parentName:"p",src:"https://i.imgur.com/GJlziA6.png",alt:null})),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"kubectl --context dev create -f namespace.yml\n")),(0,t.yg)("p",null,"Un pod peut contenir un ou plusieurs ",(0,t.yg)("em",{parentName:"p"},"containers")," et ",(0,t.yg)("em",{parentName:"p"},"initContainers"),"."),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"pod.yml")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: rss-site\n  labels:\n    app: web\nspec:\n  containers:\n    - name: pod1\n      image: nginx\n      ports:\n        - containerPort: 80\n")),(0,t.yg)("p",null,"Ensuite on peut lui envoyer des ressources :"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"kubectl --context dev apply --namespace my-namespace -f pod.yml\n")),(0,t.yg)("h4",{id:"ajouter-un-service--ingress"},"Ajouter un service + ingress"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"service.yml")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  name: my-service\nspec:\n  ports:\n    - name: http\n      port: 80\n      protocol: TCP\n      targetPort: 80\n  selector:\n    app: web\n")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"ingress.yml")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  annotations:\n    kubernetes.io/ingress.class: nginx\n  labels:\n    app: web\n  name: my-ingress\nspec:\n  rules:\n    - host: my-ingress.dev.fabrique.social.gouv.fr\n      http:\n        paths:\n          - backend:\n              service:\n                name: my-service\n                port:\n                  name: http\n            path: /\n            pathType: Prefix\n  tls:\n    - hosts:\n        - my-ingress.dev.fabrique.social.gouv.fr\n      secretName: wildcard-crt\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"kubectl --context dev apply --namespace my-namespace -f service.yml\nkubectl --context dev apply --namespace my-namespace -f ingress.yml\n")),(0,t.yg)("p",null,"=> online sur ",(0,t.yg)("a",{parentName:"p",href:"https://my-ingress.dev.fabrique.social.gouv.fr/"},"https://my-ingress.dev.fabrique.social.gouv.fr/")),(0,t.yg)("p",null,"NB: l'ingress peut recevoir nombre d'annotations (headers, s\xe9cu, rate-limit...) ",(0,t.yg)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/"},"https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/")),(0,t.yg)("p",null,"NB: Dans Kube, un ",(0,t.yg)("inlineCode",{parentName:"p"},"Pod")," doit \xeatre g\xe9r\xe9 par un ",(0,t.yg)("inlineCode",{parentName:"p"},"Deployment")," qui g\xe8re son cycle de vie, replicas..."),(0,t.yg)("p",null,"\ud83d\udc49 TODO : Suivre la cr\xe9ation du namespace"),(0,t.yg)("p",null,"\ud83d\udc49 TODO : Suivre la cr\xe9ation du pod"),(0,t.yg)("p",null,"\ud83d\udc49 TODO : Ouvrir un shell sur le container"),(0,t.yg)("p",null,"\ud83d\udc49 TODO : regarder les logs et la perf dans grafana"))}g.isMDXComponent=!0}}]);