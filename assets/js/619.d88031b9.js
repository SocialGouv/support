"use strict";(self.webpackChunksupport=self.webpackChunksupport||[]).push([[619],{619:(e,t,l)=>{l.d(t,{diagram:()=>b});var n=l(5001),a=l(9373),o=l(5625),s=l(44),i=l(2566),r=l(1188);l(7856),l(7484),l(2494),l(9354),l(1898),l(7967);const d=e=>s.e.sanitizeText(e,(0,s.g)());let c={dividerMargin:10,padding:5,textHeight:10,curve:void 0};function g(e){let t;switch(e){case 0:t="aggregation";break;case 1:t="extension";break;case 2:t="composition";break;case 3:t="dependency";break;case 4:t="lollipop";break;default:t="none"}return t}const p={setConf:function(e){c={...c,...e}},draw:function(e,t,l,n){s.l.info("Drawing class - ",t);const p=(0,s.g)().flowchart??(0,s.g)().class,b=(0,s.g)().securityLevel;s.l.info("config:",p);const u=(null==p?void 0:p.nodeSpacing)??50,y=(null==p?void 0:p.rankSpacing)??50,f=new o.k({multigraph:!0,compound:!0}).setGraph({rankdir:n.db.getDirection(),nodesep:u,ranksep:y,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}})),h=n.db.getClasses(),v=n.db.getRelations(),w=n.db.getNotes();let x;s.l.info(v),function(e,t,l,n){const a=Object.keys(e);s.l.info("keys:",a),s.l.info(e),a.forEach((function(l){var a,o;const i=e[l];let r="";i.cssClasses.length>0&&(r=r+" "+i.cssClasses.join(" "));const c="",g="",p=i.label??i.id,b={labelStyle:c,shape:"class_box",labelText:d(p),classData:i,rx:0,ry:0,class:r,style:g,id:i.id,domId:i.domId,tooltip:n.db.getTooltip(i.id)||"",haveCallback:i.haveCallback,link:i.link,width:"group"===i.type?500:void 0,type:i.type,padding:(null==(a=(0,s.g)().flowchart)?void 0:a.padding)??(null==(o=(0,s.g)().class)?void 0:o.padding)};t.setNode(i.id,b),s.l.info("setNode",b)}))}(h,f,0,n),function(e,t){const l=(0,s.g)().flowchart;let n=0;e.forEach((function(e){var o;n++;const i={classes:"relation",pattern:1==e.relation.lineType?"dashed":"solid",id:"id"+n,arrowhead:"arrow_open"===e.type?"none":"normal",startLabelRight:"none"===e.relationTitle1?"":e.relationTitle1,endLabelLeft:"none"===e.relationTitle2?"":e.relationTitle2,arrowTypeStart:g(e.relation.type1),arrowTypeEnd:g(e.relation.type2),style:"fill:none",labelStyle:"",curve:(0,r.o)(null==l?void 0:l.curve,a.c_6)};if(s.l.info(i,e),void 0!==e.style){const t=(0,r.n)(e.style);i.style=t.style,i.labelStyle=t.labelStyle}e.text=e.title,void 0===e.text?void 0!==e.style&&(i.arrowheadStyle="fill: #333"):(i.arrowheadStyle="fill: #333",i.labelpos="c",(null==(o=(0,s.g)().flowchart)?void 0:o.htmlLabels)??(0,s.g)().htmlLabels?(i.labelType="html",i.label='<span class="edgeLabel">'+e.text+"</span>"):(i.labelType="text",i.label=e.text.replace(s.e.lineBreakRegex,"\n"),void 0===e.style&&(i.style=i.style||"stroke: #333; stroke-width: 1.5px;fill:none"),i.labelStyle=i.labelStyle.replace("color:","fill:"))),t.setEdge(e.id1,e.id2,i,n)}))}(v,f),function(e,t,l,n){s.l.info(e),e.forEach((function(e,o){var i,g;const p=e,b="",u="",y=p.text,f={labelStyle:b,shape:"note",labelText:d(y),noteData:p,rx:0,ry:0,class:"",style:u,id:p.id,domId:p.id,tooltip:"",type:"note",padding:(null==(i=(0,s.g)().flowchart)?void 0:i.padding)??(null==(g=(0,s.g)().class)?void 0:g.padding)};if(t.setNode(p.id,f),s.l.info("setNode",f),!p.class||!(p.class in n))return;const h=l+o,v={id:`edgeNote${h}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:(0,r.o)(c.curve,a.c_6)};t.setEdge(p.id,p.class,v,h)}))}(w,f,v.length+1,h),"sandbox"===b&&(x=(0,a.Ys)("#i"+t));const k="sandbox"===b?(0,a.Ys)(x.nodes()[0].contentDocument.body):(0,a.Ys)("body"),m=k.select(`[id="${t}"]`),T=k.select("#"+t+" g");if((0,i.r)(T,f,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",t),r.u.insertTitle(m,"classTitleText",(null==p?void 0:p.titleTopMargin)??5,n.db.getDiagramTitle()),(0,r.s)(f,m,null==p?void 0:p.diagramPadding,null==p?void 0:p.useMaxWidth),!(null==p?void 0:p.htmlLabels)){const e="sandbox"===b?x.nodes()[0].contentDocument:document,l=e.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const t of l){const l=t.getBBox(),n=e.createElementNS("http://www.w3.org/2000/svg","rect");n.setAttribute("rx",0),n.setAttribute("ry",0),n.setAttribute("width",l.width),n.setAttribute("height",l.height),t.insertBefore(n,t.firstChild)}}}},b={parser:n.p,db:n.d,renderer:p,styles:n.s,init:e=>{e.class||(e.class={}),e.class.arrowMarkerAbsolute=e.arrowMarkerAbsolute,n.d.clear()}}}}]);