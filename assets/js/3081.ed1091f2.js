"use strict";(self.webpackChunksupport=self.webpackChunksupport||[]).push([[3081],{3349:(e,t,r)=>{r.d(t,{a:()=>l});var n=r(6225);function l(e,t){var r=e.append("foreignObject").attr("width","100000"),l=r.append("xhtml:div");l.attr("xmlns","http://www.w3.org/1999/xhtml");var o=t.label;switch(typeof o){case"function":l.insert(o);break;case"object":l.insert((function(){return o}));break;default:l.html(o)}n.bg(l,t.labelStyle),l.style("display","inline-block"),l.style("white-space","nowrap");var a=l.node().getBoundingClientRect();return r.attr("width",a.width).attr("height",a.height),r}},6225:(e,t,r)=>{r.d(t,{$p:()=>d,O1:()=>a,WR:()=>p,bF:()=>o,bg:()=>c});var n=r(7514),l=r(3234);function o(e,t){return!!e.children(t).length}function a(e){return i(e.v)+":"+i(e.w)+":"+i(e.name)}var s=/:/g;function i(e){return e?String(e).replace(s,"\\:"):""}function c(e,t){t&&e.attr("style",t)}function d(e,t,r){t&&e.attr("class",t).attr("class",r+" "+e.attr("class"))}function p(e,t){var r=t.graph();if(n.Z(r)){var o=r.transition;if(l.Z(o))return o(e)}return e}},3081:(e,t,r)=>{r.d(t,{diagram:()=>a});var n=r(1813),l=r(4272),o=r(1581);r(8077),r(5625),r(1644),r(9354),r(7484),r(7967),r(7856);const a={parser:n.p,db:n.f,renderer:l.f,styles:l.a,init:e=>{e.flowchart||(e.flowchart={}),e.flowchart.arrowMarkerAbsolute=e.arrowMarkerAbsolute,(0,o.q)({flowchart:{arrowMarkerAbsolute:e.arrowMarkerAbsolute}}),l.f.setConf(e.flowchart),n.f.clear(),n.f.setGen("gen-2")}}},4272:(e,t,r)=>{r.d(t,{a:()=>h,f:()=>u});var n=r(5625),l=r(8077),o=r(1581),a=r(6476),s=r(3349),i=r(1691),c=r(1610);const d=(e,t)=>i.Z.lang.round(c.Z.parse(e)[t]);var p=r(1117);const b={},w=function(e,t,r,n,l,a){const i=n.select(`[id="${r}"]`);Object.keys(e).forEach((function(r){const n=e[r];let c="default";n.classes.length>0&&(c=n.classes.join(" ")),c+=" flowchart-label";const d=(0,o.k)(n.styles);let p,b=void 0!==n.text?n.text:n.id;if(o.l.info("vertex",n,n.labelType),"markdown"===n.labelType)o.l.info("vertex",n,n.labelType);else if((0,o.n)((0,o.c)().flowchart.htmlLabels)){const e={label:b.replace(/fa[blrs]?:fa-[\w-]+/g,(e=>`<i class='${e.replace(":"," ")}'></i>`))};p=(0,s.a)(i,e).node(),p.parentNode.removeChild(p)}else{const e=l.createElementNS("http://www.w3.org/2000/svg","text");e.setAttribute("style",d.labelStyle.replace("color:","fill:"));const t=b.split(o.e.lineBreakRegex);for(const r of t){const t=l.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.setAttribute("dy","1em"),t.setAttribute("x","1"),t.textContent=r,e.appendChild(t)}p=e}let w=0,f="";switch(n.type){case"round":w=5,f="rect";break;case"square":case"group":default:f="rect";break;case"diamond":f="question";break;case"hexagon":f="hexagon";break;case"odd":case"odd_right":f="rect_left_inv_arrow";break;case"lean_right":f="lean_right";break;case"lean_left":f="lean_left";break;case"trapezoid":f="trapezoid";break;case"inv_trapezoid":f="inv_trapezoid";break;case"circle":f="circle";break;case"ellipse":f="ellipse";break;case"stadium":f="stadium";break;case"subroutine":f="subroutine";break;case"cylinder":f="cylinder";break;case"doublecircle":f="doublecircle"}t.setNode(n.id,{labelStyle:d.labelStyle,shape:f,labelText:b,labelType:n.labelType,rx:w,ry:w,class:c,style:d.style,id:n.id,link:n.link,linkTarget:n.linkTarget,tooltip:a.db.getTooltip(n.id)||"",domId:a.db.lookUpDomId(n.id),haveCallback:n.haveCallback,width:"group"===n.type?500:void 0,dir:n.dir,type:n.type,props:n.props,padding:(0,o.c)().flowchart.padding}),o.l.info("setNode",{labelStyle:d.labelStyle,labelType:n.labelType,shape:f,labelText:b,rx:w,ry:w,class:c,style:d.style,id:n.id,domId:a.db.lookUpDomId(n.id),width:"group"===n.type?500:void 0,type:n.type,dir:n.dir,props:n.props,padding:(0,o.c)().flowchart.padding})}))},f=function(e,t,r){o.l.info("abc78 edges = ",e);let n,a,s=0,i={};if(void 0!==e.defaultStyle){const t=(0,o.k)(e.defaultStyle);n=t.style,a=t.labelStyle}e.forEach((function(r){s++;const c="L-"+r.start+"-"+r.end;void 0===i[c]?(i[c]=0,o.l.info("abc78 new entry",c,i[c])):(i[c]++,o.l.info("abc78 new entry",c,i[c]));let d=c+"-"+i[c];o.l.info("abc78 new link id to be used is",c,d,i[c]);const p="LS-"+r.start,w="LE-"+r.end,f={style:"",labelStyle:""};switch(f.minlen=r.length||1,"arrow_open"===r.type?f.arrowhead="none":f.arrowhead="normal",f.arrowTypeStart="arrow_open",f.arrowTypeEnd="arrow_open",r.type){case"double_arrow_cross":f.arrowTypeStart="arrow_cross";case"arrow_cross":f.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":f.arrowTypeStart="arrow_point";case"arrow_point":f.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":f.arrowTypeStart="arrow_circle";case"arrow_circle":f.arrowTypeEnd="arrow_circle"}let u="",h="";switch(r.stroke){case"normal":u="fill:none;",void 0!==n&&(u=n),void 0!==a&&(h=a),f.thickness="normal",f.pattern="solid";break;case"dotted":f.thickness="normal",f.pattern="dotted",f.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":f.thickness="thick",f.pattern="solid",f.style="stroke-width: 3.5px;fill:none;";break;case"invisible":f.thickness="invisible",f.pattern="solid",f.style="stroke-width: 0;fill:none;"}if(void 0!==r.style){const e=(0,o.k)(r.style);u=e.style,h=e.labelStyle}f.style=f.style+=u,f.labelStyle=f.labelStyle+=h,void 0!==r.interpolate?f.curve=(0,o.o)(r.interpolate,l.c_6):void 0!==e.defaultInterpolate?f.curve=(0,o.o)(e.defaultInterpolate,l.c_6):f.curve=(0,o.o)(b.curve,l.c_6),void 0===r.text?void 0!==r.style&&(f.arrowheadStyle="fill: #333"):(f.arrowheadStyle="fill: #333",f.labelpos="c"),f.labelType=r.labelType,f.label=r.text.replace(o.e.lineBreakRegex,"\n"),void 0===r.style&&(f.style=f.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),f.labelStyle=f.labelStyle.replace("color:","fill:"),f.id=d,f.classes="flowchart-link "+p+" "+w,t.setEdge(r.start,r.end,f,s)}))},u={setConf:function(e){const t=Object.keys(e);for(const r of t)b[r]=e[r]},addVertices:w,addEdges:f,getClasses:function(e,t){return t.db.getClasses()},draw:async function(e,t,r,s){o.l.info("Drawing flowchart");let i=s.db.getDirection();void 0===i&&(i="TD");const{securityLevel:c,flowchart:d}=(0,o.c)(),p=d.nodeSpacing||50,b=d.rankSpacing||50;let u;"sandbox"===c&&(u=(0,l.Ys)("#i"+t));const h="sandbox"===c?(0,l.Ys)(u.nodes()[0].contentDocument.body):(0,l.Ys)("body"),g="sandbox"===c?u.nodes()[0].contentDocument:document,y=new n.k({multigraph:!0,compound:!0}).setGraph({rankdir:i,nodesep:p,ranksep:b,marginx:0,marginy:0}).setDefaultEdgeLabel((function(){return{}}));let k;const x=s.db.getSubGraphs();o.l.info("Subgraphs - ",x);for(let n=x.length-1;n>=0;n--)k=x[n],o.l.info("Subgraph - ",k),s.db.addVertex(k.id,{text:k.title,type:k.labelType},"group",void 0,k.classes,k.dir);const v=s.db.getVertices(),m=s.db.getEdges();o.l.info("Edges",m);let S=0;for(S=x.length-1;S>=0;S--){k=x[S],(0,l.td_)("cluster").append("text");for(let e=0;e<k.nodes.length;e++)o.l.info("Setting up subgraphs",k.nodes[e],k.id),y.setParent(k.nodes[e],k.id)}w(v,y,t,h,g,s),f(m,y);const T=h.select(`[id="${t}"]`),_=h.select("#"+t+" g");if(await(0,a.r)(_,y,["point","circle","cross"],"flowchart",t),o.u.insertTitle(T,"flowchartTitleText",d.titleTopMargin,s.db.getDiagramTitle()),(0,o.p)(y,T,d.diagramPadding,d.useMaxWidth),s.db.indexNodes("subGraph"+S),!d.htmlLabels){const e=g.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const t of e){const e=t.getBBox(),r=g.createElementNS("http://www.w3.org/2000/svg","rect");r.setAttribute("rx",0),r.setAttribute("ry",0),r.setAttribute("width",e.width),r.setAttribute("height",e.height),t.insertBefore(r,t.firstChild)}}Object.keys(v).forEach((function(e){const r=v[e];if(r.link){const n=(0,l.Ys)("#"+t+' [id="'+e+'"]');if(n){const e=g.createElementNS("http://www.w3.org/2000/svg","a");e.setAttributeNS("http://www.w3.org/2000/svg","class",r.classes.join(" ")),e.setAttributeNS("http://www.w3.org/2000/svg","href",r.link),e.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===c?e.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):r.linkTarget&&e.setAttributeNS("http://www.w3.org/2000/svg","target",r.linkTarget);const t=n.insert((function(){return e}),":first-child"),l=n.select(".label-container");l&&t.append((function(){return l.node()}));const o=n.select(".label");o&&t.append((function(){return o.node()}))}}}))}},h=e=>`.label {\n    font-family: ${e.fontFamily};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n  .cluster-label text {\n    fill: ${e.titleColor};\n  }\n  .cluster-label span,p {\n    color: ${e.titleColor};\n  }\n\n  .label text,span,p {\n    fill: ${e.nodeTextColor||e.textColor};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${e.mainBkg};\n    stroke: ${e.nodeBorder};\n    stroke-width: 1px;\n  }\n  .flowchart-label text {\n    text-anchor: middle;\n  }\n  // .flowchart-label .text-outer-tspan {\n  //   text-anchor: middle;\n  // }\n  // .flowchart-label .text-inner-tspan {\n  //   text-anchor: start;\n  // }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ${e.arrowheadColor};\n  }\n\n  .edgePath .path {\n    stroke: ${e.lineColor};\n    stroke-width: 2.0px;\n  }\n\n  .flowchart-link {\n    stroke: ${e.lineColor};\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ${e.edgeLabelBackground};\n    rect {\n      opacity: 0.5;\n      background-color: ${e.edgeLabelBackground};\n      fill: ${e.edgeLabelBackground};\n    }\n    text-align: center;\n  }\n\n  /* For html labels only */\n  .labelBkg {\n    background-color: ${((e,t)=>{const r=d,n=r(e,"r"),l=r(e,"g"),o=r(e,"b");return p.Z(n,l,o,t)})(e.edgeLabelBackground,.5)};\n    // background-color: \n  }\n\n  .cluster rect {\n    fill: ${e.clusterBkg};\n    stroke: ${e.clusterBorder};\n    stroke-width: 1px;\n  }\n\n  .cluster text {\n    fill: ${e.titleColor};\n  }\n\n  .cluster span,p {\n    color: ${e.titleColor};\n  }\n  /* .cluster div {\n    color: ${e.titleColor};\n  } */\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: ${e.fontFamily};\n    font-size: 12px;\n    background: ${e.tertiaryColor};\n    border: 1px solid ${e.border2};\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .flowchartTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${e.textColor};\n  }\n`}}]);