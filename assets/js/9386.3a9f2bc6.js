"use strict";(self.webpackChunksupport=self.webpackChunksupport||[]).push([[9386],{9386:(e,t,l)=>{l.d(t,{diagram:()=>u});var n=l(2970),a=l(9373),o=l(5625),s=l(1851),i=l(2335);l(9421),l(7967),l(7856),l(2494),l(9354);const d=e=>s.e.sanitizeText(e,(0,s.c)());let r={dividerMargin:10,padding:5,textHeight:10,curve:void 0};const c=function(e,t,l,n,a){const o=Object.keys(e);s.l.info("keys:",o),s.l.info(e),o.forEach((function(l){var o,i;const r=e[l];let c="";r.cssClasses.length>0&&(c=c+" "+r.cssClasses.join(" "));const p="",b="",u=r.label??r.id,f={labelStyle:p,shape:"class_box",labelText:d(u),classData:r,rx:0,ry:0,class:c,style:b,id:r.id,domId:r.domId,tooltip:n.db.getTooltip(r.id,a)||"",haveCallback:r.haveCallback,link:r.link,width:"group"===r.type?500:void 0,type:r.type,padding:(null==(o=(0,s.c)().flowchart)?void 0:o.padding)??(null==(i=(0,s.c)().class)?void 0:i.padding)};t.setNode(r.id,f),a&&t.setParent(r.id,a),s.l.info("setNode",f)}))};function p(e){let t;switch(e){case 0:t="aggregation";break;case 1:t="extension";break;case 2:t="composition";break;case 3:t="dependency";break;case 4:t="lollipop";break;default:t="none"}return t}const b={setConf:function(e){r={...r,...e}},draw:async function(e,t,l,n){s.l.info("Drawing class - ",t);const b=(0,s.c)().flowchart??(0,s.c)().class,u=(0,s.c)().securityLevel;s.l.info("config:",b);const f=(null==b?void 0:b.nodeSpacing)??50,g=(null==b?void 0:b.rankSpacing)??50,y=new o.k({multigraph:!0,compound:!0}).setGraph({rankdir:n.db.getDirection(),nodesep:f,ranksep:g,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}})),h=n.db.getNamespaces(),v=n.db.getClasses(),w=n.db.getRelations(),k=n.db.getNotes();let x;s.l.info(w),function(e,t,l,n){const a=Object.keys(e);s.l.info("keys:",a),s.l.info(e),a.forEach((function(a){var o,i;const r=e[a],p={shape:"rect",id:r.id,domId:r.domId,labelText:d(r.id),labelStyle:"",style:"fill: none; stroke: black",padding:(null==(o=(0,s.c)().flowchart)?void 0:o.padding)??(null==(i=(0,s.c)().class)?void 0:i.padding)};t.setNode(r.id,p),c(r.classes,t,l,n,r.id),s.l.info("setNode",p)}))}(h,y,t,n),c(v,y,t,n),function(e,t){const l=(0,s.c)().flowchart;let n=0;e.forEach((function(e){var o;n++;const i={classes:"relation",pattern:1==e.relation.lineType?"dashed":"solid",id:"id"+n,arrowhead:"arrow_open"===e.type?"none":"normal",startLabelRight:"none"===e.relationTitle1?"":e.relationTitle1,endLabelLeft:"none"===e.relationTitle2?"":e.relationTitle2,arrowTypeStart:p(e.relation.type1),arrowTypeEnd:p(e.relation.type2),style:"fill:none",labelStyle:"",curve:(0,s.o)(null==l?void 0:l.curve,a.c_6)};if(s.l.info(i,e),void 0!==e.style){const t=(0,s.k)(e.style);i.style=t.style,i.labelStyle=t.labelStyle}e.text=e.title,void 0===e.text?void 0!==e.style&&(i.arrowheadStyle="fill: #333"):(i.arrowheadStyle="fill: #333",i.labelpos="c",(null==(o=(0,s.c)().flowchart)?void 0:o.htmlLabels)??(0,s.c)().htmlLabels?(i.labelType="html",i.label='<span class="edgeLabel">'+e.text+"</span>"):(i.labelType="text",i.label=e.text.replace(s.e.lineBreakRegex,"\n"),void 0===e.style&&(i.style=i.style||"stroke: #333; stroke-width: 1.5px;fill:none"),i.labelStyle=i.labelStyle.replace("color:","fill:"))),t.setEdge(e.id1,e.id2,i,n)}))}(w,y),function(e,t,l,n){s.l.info(e),e.forEach((function(e,o){var i,c;const p=e,b="",u="",f=p.text,g={labelStyle:b,shape:"note",labelText:d(f),noteData:p,rx:0,ry:0,class:"",style:u,id:p.id,domId:p.id,tooltip:"",type:"note",padding:(null==(i=(0,s.c)().flowchart)?void 0:i.padding)??(null==(c=(0,s.c)().class)?void 0:c.padding)};if(t.setNode(p.id,g),s.l.info("setNode",g),!p.class||!(p.class in n))return;const y=l+o,h={id:`edgeNote${y}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:(0,s.o)(r.curve,a.c_6)};t.setEdge(p.id,p.class,h,y)}))}(k,y,w.length+1,v),"sandbox"===u&&(x=(0,a.Ys)("#i"+t));const m="sandbox"===u?(0,a.Ys)(x.nodes()[0].contentDocument.body):(0,a.Ys)("body"),T=m.select(`[id="${t}"]`),S=m.select("#"+t+" g");if(await(0,i.r)(S,y,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",t),s.u.insertTitle(T,"classTitleText",(null==b?void 0:b.titleTopMargin)??5,n.db.getDiagramTitle()),(0,s.p)(y,T,null==b?void 0:b.diagramPadding,null==b?void 0:b.useMaxWidth),!(null==b?void 0:b.htmlLabels)){const e="sandbox"===u?x.nodes()[0].contentDocument:document,l=e.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const t of l){const l=t.getBBox(),n=e.createElementNS("http://www.w3.org/2000/svg","rect");n.setAttribute("rx",0),n.setAttribute("ry",0),n.setAttribute("width",l.width),n.setAttribute("height",l.height),t.insertBefore(n,t.firstChild)}}}},u={parser:n.p,db:n.d,renderer:b,styles:n.s,init:e=>{e.class||(e.class={}),e.class.arrowMarkerAbsolute=e.arrowMarkerAbsolute,n.d.clear()}}}}]);