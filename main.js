(()=>{"use strict";var e={978:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),i=n.n(o),r=n(645),a=n.n(r)()(i());a.push([e.id,"div#canvas{display:flex;flex-direction:column;height:100%;width:100%}div#canvas text.users{font-size:.9rem}div#canvas div#lines{height:100%;width:100%;overflow:scroll}div#canvas div#lines svg#mainSvg{height:1000px;overflow:scroll}",""]);const c=a},402:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),i=n.n(o),r=n(645),a=n.n(r)()(i());a.push([e.id,'@media screen and (min-width: 400px){html{height:100%;box-sizing:border-box}html body{display:flex;flex-direction:column;height:100%;overflow:hidden}html body header{display:flex;background-color:rgba(213,183,178,.4705882353);min-height:8vh;justify-content:space-between;align-items:center;padding:0 4em}html body header h1{display:flex;height:100%;justify-content:center;align-items:center;font-size:2.5em}html body header menu{display:flex;height:80%;justify-content:center}html body header menu span#mobileMenu{display:none}html body header menu span#desktopMenu,html body header menu span#extendedData{display:flex;height:100%;justify-content:center;padding:0vh .5vh;align-items:center;font-size:1.5em;border:solid 2px #000}html body main{height:100%;display:grid;gap:3px;grid-template-columns:repeat(2, 1fr);grid-template-rows:auto auto repeat(3, minmax(0, 1fr));grid-template-areas:"extend extend" "drop drop" "seq data" "seq cong-win" "automaton automaton"}html body main section#extendedDataSpace{display:none;grid-area:extend}html body main section#extendedDataSpace div#extendedDataContent{display:grid;grid-template-columns:repeat(3, 1fr);grid-template-rows:repeat(2, 1fr);background-color:rgba(232,232,228,.5882352941);height:30vh}html body main section#extendedDataSpace div#extendedDataContent form{font-size:1em;display:flex;justify-content:center;align-items:center;pointer-events:none}html body main section#extendedDataSpace div#extendedDataContent form fieldset{padding:1vh;height:80%;width:80%}html body main section#extendedDataSpace div#extendedDataContent form fieldset input{font-size:1em}html body main section#dropdownSpace{display:none;grid-area:drop}html body main section#dropdownSpace div#dropdownContent{display:grid;grid-template-columns:repeat(4, 1fr);grid-template-rows:repeat(2, 1fr);background-color:rgba(232,232,228,.5882352941);height:30vh}html body main section#dropdownSpace div#dropdownContent form{font-size:1em;display:flex;justify-content:center;align-items:center}html body main section#dropdownSpace div#dropdownContent form fieldset{padding:1vh;height:80%;width:80%}html body main section#dropdownSpace div#dropdownContent form fieldset input{font-size:1em}html body main section#seqSpace{grid-area:seq;background-color:rgba(232,232,228,.5882352941)}html body main section#seqSpace div#seqContent{display:flex;height:100%;font-size:.15em}html body main section#dataSpace{grid-area:data;background-color:rgba(216,226,220,.5607843137)}html body main section#dataSpace div#dataContent{display:grid;height:100%;grid-template-columns:repeat(2, 1fr);grid-template-rows:repeat(4, 1fr);grid-template-areas:"tcp cc" "congWin unack" "thresh event" "press press"}html body main section#dataSpace div#dataContent form{border:solid 1px #fff;display:flex;justify-content:space-evenly;align-items:center;font-size:1em}html body main section#dataSpace div#dataContent form#tcpStateForm{grid-area:tcp}html body main section#dataSpace div#dataContent form#ccStateForm{grid-area:cc}html body main section#dataSpace div#dataContent form#congWinForm{grid-area:congWin;justify-content:center}html body main section#dataSpace div#dataContent form#unack{grid-area:unack}html body main section#dataSpace div#dataContent form#threshForm{grind-area:thresh}html body main section#dataSpace div#dataContent form#press{grid-area:press}html body main section#dataSpace div#dataContent form#event{grid-area:event}html body main section#dataSpace div#dataContent form input[type=number]{font-size:1em;width:40%;justify-content:center;padding:2% 5%;pointer-events:none}html body main section#dataSpace div#dataContent form input[type=text]{font-size:1em;width:60%;padding:2% 5%;pointer-events:none}html body main section#dataSpace div#dataContent form input[type=button]{width:80%;height:60%;font-size:1em}html body main section#congwinSpace{grid-area:cong-win;background-color:rgba(236,228,219,.5215686275)}html body main section#congwinSpace div#congwinContent{display:block;height:100%}html body main section#congwinSpace div#congwinContent #diagramSvg{font-size:3px}html body main section#autoSpace{grid-area:automaton;background-color:rgba(255,229,217,.3490196078)}html body nav{display:none}*{margin:0;padding:0;text-decoration:none;list-style-type:none;font-family:"Helvetica",sans-serif;font-weight:lighter;box-sizing:inherit}*:before,*:after{box-sizing:inherit}}',""]);const c=a},507:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),i=n.n(o),r=n(645),a=n.n(r)()(i());a.push([e.id,'@media screen and (max-width: 399px){html{height:100%;box-sizing:border-box;border:solid 5px #fff}html body{display:flex;flex-direction:column;height:100%;overflow:hidden}html body header{display:flex;min-height:10%;background-color:rgba(213,183,178,.4705882353);justify-content:center;align-items:center;justify-content:space-between;align-items:center;padding:0 4em}html body header h1{display:flex;height:100%;justify-content:center;align-items:center;font-size:2.5em}html body header menu{display:flex;height:100%;justify-content:center;align-items:center}html body header menu span#mobileMenu{display:block;font-size:8vh}html body header menu span#desktopMenu{display:none}html body header menu span#extendedData{display:none}html body main{height:80%;flex:0 0 auto}html body main section{justify-content:center;align-items:center;display:none;height:100%}html body main section#extendedDataSpace{display:none}html body main section#dropdownSpace div#dropdownContent{height:100%;display:grid;background-color:rgba(213,183,178,.4705882353);grid-border:3px;grid-template-columns:repeat(2, 1fr);grid-template-rows:repeat(4, 1fr)}html body main section#dropdownSpace div#dropdownContent form{display:flex;justify-content:center;align-items:center;font-size:2.5em}html body main section#dropdownSpace div#dropdownContent form fieldset{padding:1vh 2vh;height:100%;width:100%}html body main section#dropdownSpace div#dropdownContent form fieldset input[type=number]{font-size:2.5em;width:60%}html body main section#dropdownSpace div#dropdownContent form fieldset input[type=radio]{height:35px;width:35px}html body main section#seqSpace{background-color:rgba(232,232,228,.5882352941);height:80%;display:block}html body main section#seqSpace div#seqContent{display:flex;height:100%;font-size:.15rem}html body main section#dataSpace{background-color:rgba(216,226,220,.5607843137);height:20%;display:block}html body main section#dataSpace div#dataContent{display:grid;height:100%;grid-template-columns:repeat(2, 1fr);grid-template-rows:repeat(4, 1fr);grid-template-areas:"tcp cc" "thresh unack" "event event" "press press"}html body main section#dataSpace div#dataContent form{border:solid 1px #fff;display:flex;justify-content:space-evenly;align-items:center;font-size:1.5em}html body main section#dataSpace div#dataContent form#tcpState{grid-area:tcp}html body main section#dataSpace div#dataContent form#ccState{grid-area:cc}html body main section#dataSpace div#dataContent form#thresh{grid-area:thresh}html body main section#dataSpace div#dataContent form#unack{grid-area:unack}html body main section#dataSpace div#dataContent form#event{grid-area:event}html body main section#dataSpace div#dataContent form#press{grid-area:press}html body main section#dataSpace div#dataContent form input[type=number]{font-size:1.5em;width:50%;padding:1% 5%;pointer-events:none}html body main section#dataSpace div#dataContent form input[type=text]{font-size:1.5em;width:60%;padding:1% 5%;pointer-events:none}html body main section#dataSpace div#dataContent form input[type=button]{width:80%;height:60%;font-size:1.5em}html body main section#congwinSpace{height:80%;background-color:rgba(236,228,219,.5215686275)}html body main section#congwinSpace div#congwinContent{display:flex;height:100%}html body main section#autoSpace{height:80%;background-color:rgba(255,229,217,.3490196078)}html body main section#autoSpace div#autoContent{display:flex;height:100%}html body nav{background-color:rgba(236,228,219,.5215686275);height:10%;font-size:.5em;bottom:0}html body nav ul{display:flex;height:100%;flex-direction:row;align-items:center}html body nav ul li{flex:1 1 0;display:flex;height:100%;padding:.5em;text-align:center;align-items:center;justify-content:center;font-size:2.5em;border:solid 1px #fff}html body nav ul li a{-webkit-tap-highlight-color:rgba(0,0,0,0);color:#000}*{margin:0;padding:0;text-decoration:none;list-style-type:none;font-family:"Helvetica",sans-serif;font-weight:lighter;box-sizing:inherit}*:before,*:after{box-sizing:inherit}}',""]);const c=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&a[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},a=[],c=0;c<e.length;c++){var s=e[c],d=o.base?s[0]+o.base:s[0],l=r[d]||0,m="".concat(d," ").concat(l);r[d]=l+1;var u=n(m),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var S=i(p,o);o.byIndex=c,t.splice(c,0,{identifier:m,updater:S,references:1})}a.push(m)}return a}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var r=o(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var c=n(r[a]);t[c].references--}for(var s=o(e,i),d=0;d<r.length;d++){var l=n(r[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}r=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,i&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),i=n.n(o),r=n(569),a=n.n(r),c=n(565),s=n.n(c),d=n(216),l=n.n(d),m=n(589),u=n.n(m),p=n(507),S={};S.styleTagTransform=u(),S.setAttributes=s(),S.insert=a().bind(null,"head"),S.domAPI=i(),S.insertStyleElement=l(),t()(p.Z,S),p.Z&&p.Z.locals&&p.Z.locals;var h=n(978),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=l(),t()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;var g=n(402),y={};y.styleTagTransform=u(),y.setAttributes=s(),y.insert=a().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=l(),t()(g.Z,y),g.Z&&g.Z.locals&&g.Z.locals;const b=10,v="http://www.w3.org/2000/svg";function T(){switch(G("tcpState")){case w.CLOSED:H({tcpState:w.LISTEN}),Y({lastEvent:q.START_SERVER});break;case w.LISTEN:!function(){const e=Q("clockMS"),t=P("roundTripTimeMS"),n={sender:N.CLIENT,flag:k.SYN,startMS:e,endMS:e+t/2,ackNum:0};V.push(n),C(t/2)}(),H({tcpState:w.SYN_RECEIVED}),Y({lastEvent:q.SYN});break;case w.SYN_RECEIVED:0===G("currentTraffic")?(function(){const e=Q("clockMS"),t=P("roundTripTimeMS"),n={sender:N.SERVER,flag:k.SYN_ACK,startMS:e,endMS:e+t/2,ackNum:1};V.push(n),C(t/2)}(),H({currentTraffic:1,seqNum:1}),Y({lastEvent:q.SYN_ACK})):(function(){const e=Q("clockMS"),t=P("roundTripTimeMS"),n={sender:N.CLIENT,flag:k.ACK,startMS:e,endMS:e+t/2,ackNum:1};C(t/2),V.push(n)}(),H({tcpState:w.ESTABLISHED,currentTraffic:0,congWin:1}),Y({lastEvent:q.ACK}),A(),E())}(function(){if(0==V.length)return;const e=O(V).sender,t=O(V).startMS/b,n=O(V).endMS/b,o=O(V).flag;e==N.CLIENT?function(e,t,n){if(0==V.length)return;const o=P("ratio1pxToMS"),i=document.createElementNS(v,"path");i.setAttribute("stroke","black"),i.setAttribute("stroke-width","0.1"),i.setAttribute("d","M10 "+e*o+" L90 "+t*o),i.setAttribute("id",n);const r=document.createElementNS(v,"textPath");r.setAttribute("href","#"+n),r.setAttribute("startOffset","45%"),r.innerHTML=n;const a=document.createElementNS(v,"text");a.append(r),document.querySelector("#tcpMetaMessages").append(i),document.querySelector("#tcpMetaMessages").append(a)}(t,n,o):function(e,t,n){const o=P("ratio1pxToMS"),i=document.createElementNS(v,"path");i.setAttribute("d","M10 "+t*o+"L90 "+e*o),i.setAttribute("stroke","black"),i.setAttribute("stroke-width","0.1"),i.setAttribute("id",n);const r=document.createElementNS(v,"textPath");r.setAttribute("href","#"+n),r.setAttribute("startOffset","45%"),r.innerHTML=n;const a=document.createElementNS(v,"text");a.append(r),document.querySelector("#tcpMetaMessages").append(i),document.querySelector("#tcpMetaMessages").append(a)}(t,n,o)})(),$()}const E=()=>{document.querySelector("#startButton").setAttribute("disabled","")},A=()=>{document.querySelectorAll("#press input").forEach((e=>{e.removeAttribute("disabled")}))};function C(e){Y({clockMS:Q("clockMS")+e})}const x=-1,M={SLOW_START:"SLOW_START",FAST_RECOVERY:"FAST_RECOVERY",CONGESTION_AVOIDANCE:"CONGESTION_AVOIDANCE",TIMEOUT:"TIMEOUT_TRANS",DUP_3:"DUPLICATE_TRANS"},k={SYN:"SYN",ACK:"ACK",SYN_ACK:"SYN-ACK"},N={CLIENT:"CLIENT",SERVER:"SERVER"},w={CLOSED:"CLOSED",LISTEN:"LISTEN",SYN_RECEIVED:"SYN-RECEIVED",ESTABLISHED:"ESTABLISHED"},q={START_SERVER:"start server",SYN:"SYN",ACK:"ACK",SYN_ACK:"SYN ACK",SEG:"segment send",NEW_ACK:"ACK",SEG_LOSS:"segment loss",ACK_LOSS:"ACK loss",DUP_ACK:"dupplicate ACK",TIMEOUT:"timeout",DUP_3:"3 duplicates",THRESHOLD_REACHED:"threshold",RETRANSMISSION:"retrans",RETRANSMIT_LOSS:"retrans loss"},L=[{version:"tahoe",roundTripTimeMS:200,seqSizeByte:500,transrateKBytePerSecond:20,initialThreshold:10,lang:"en",ratio1pxToMS:1,timeoutSpan:3}],O=e=>e.at(-1),R={tcpState:w.CLOSED,ccState:M.SLOW_START,seqNum:0,confirmedReceived:0,currentTraffic:0,threshold:O(L).initialThreshold,congWin:0,congWinFractions:0,firstUnackedSegmentNum:0,duplicateAcks:0,timestampFirstUnacked:0},I={BytesReceivedInOrder:1};let D=[{...R}],_=[{...I}],W=[{lastEvent:"",clockMS:0}],z=[],U=[],B=new Set,F=[],V=[];function j(){D=[{...R}],_=[{...I}],z=[],U=[],F=[],V=[],$(),document.querySelectorAll("#mainSvg g").forEach((e=>{e.innerHTML=""})),document.querySelectorAll("#press input").forEach((e=>{e.setAttribute("disabled","")})),document.querySelector("#startButton").removeAttribute("disabled"),document.querySelector("#mainSvg").viewBox.baseVal.height=100,document.querySelector("#mainSvg").style.height="100%"}function H(e){const t={...O(D)};for(const[n,o]of Object.entries(e))t[n]=o;D.push(t)}function K(e){const t={...O(_)};for(const[n,o]of Object.entries(e))t[n]=o;_.push(t)}function Y(e){const t={...O(W)};for(const[n,o]of Object.entries(e))t[n]=o;W.push(t)}function P(e){return O(L)[e]}function Z(e,t){const n={...O(L)};n[e]=t,L.push(n)}function G(e){return O(D)[e]}function J(e){return O(_)[e]}function Q(e){return O(W)[e]}function X(e){return O(z)[e]}function $(){document.querySelectorAll(".data").forEach((e=>{if("congWin"==e.id){const t=G("congWin"),n=G("congWinFractions");e.value=0==!n?t+" "+n+"/"+t:t}else e.value=G(e.id)})),document.querySelectorAll(".sessionData").forEach((e=>{e.value=O(W)[e.id]}))}function ee(){const e=X("startMS")/b,t=X("endMS")/b,n=P("ratio1pxToMS"),o=P("roundTripTimeMS")/b,i=X("seqNum"),r=X("isDelivered"),a=document.querySelector("#mainSvg").viewBox.baseVal.height;if(t>.8*a){const e=document.querySelector("#mainSvg");e.style.height=a+o+"%",e.viewBox.baseVal.height=a+o,document.querySelector("#lines").scrollTop=document.querySelector("#lines").scrollHeight}const c=X("retransmitted")?"pink":"none",s=X("retransmitted")?"pink":"black";if(r){const r=document.createElementNS(v,"path");r.setAttribute("stroke",s),r.setAttribute("stroke-width","0.1"),r.setAttribute("fill",c),r.setAttribute("d","M10 "+t*n+" L90 "+(t-o/2)*n+"L90 "+e*n+"L10 "+(e+o/2)*n+" Z"),r.setAttribute("id",e+"!"+i);const a=document.createElementNS(v,"textPath");a.setAttribute("href","#"+e+"!"+i),a.setAttribute("startOffset","21%"),a.innerHTML="Seq-Nr: "+i;const d=document.createElementNS(v,"text");d.append(a),document.querySelector("#tcpSegments").append(r),document.querySelector("#tcpSegments").append(d)}else{const r=document.createElementNS(v,"path");r.setAttribute("stroke","pink"),r.setAttribute("fill","pink"),r.setAttribute("stroke-width","0.1"),r.setAttribute("d","M50 "+(t-o/4)*n+" L90 "+(t-o/2)*n+"L90 "+e*n+"L50 "+(e+o/4)*n+" Z"),r.setAttribute("id",e+"!"+i);const a=document.createElementNS(v,"textPath");a.setAttribute("href","#"+e+"!"+i),a.setAttribute("startOffset","21%"),a.innerHTML="Seq-Nr: "+i;const c=document.createElementNS(v,"text");c.append(a),document.querySelector("#tcpSegments").append(r),document.querySelector("#tcpSegments").append(c)}}function te(){const e=G("firstUnackedSegmentNum");try{document.querySelector("#timeoutBar").remove()}catch(e){}if(z.length<=e)return;const t=z[e].sendingCompleteMS;if(t==x)return;const n=document.createElementNS(v,"line");n.setAttribute("stroke","#C1E1C1"),n.setAttribute("stroke-width","1"),n.setAttribute("x1","91%"),n.setAttribute("y1",(t/b).toString()),n.setAttribute("x2","99%"),n.setAttribute("y2",(t/b).toString()),n.setAttribute("id","timeoutBar"),document.querySelector("#timeoutBarSvg").append(n)}function ne(){const e=G("firstUnackedSegmentNum"),t=z[e].sendingCompleteMS,n=t+P("timeoutSpan")*P("roundTripTimeMS"),o=document.createElementNS(v,"path");o.setAttribute("stroke","pink"),o.setAttribute("fill","pink"),o.setAttribute("d","M94 "+t/b+"L96 "+t/b+"L96 "+n/b+"L94 "+n/b+"Z"),o.setAttribute("id","timeoutBlock"),document.querySelector("#timeoutBarSvg").append(o)}function oe(){const e=F.pop(),t=e.startMS/b,n=e.endMS/b,o=e.ackNum,i=e.isDelivered,r=P("ratio1pxToMS"),a=P("roundTripTimeMS")/b;if(i){const e=document.createElementNS(v,"path");e.setAttribute("stroke","black"),e.setAttribute("stroke-width","0.05"),e.setAttribute("stroke-dasharray","2 2"),e.setAttribute("d","M10 "+t*r+"L90 "+n*r),document.querySelector("#tcpSegments").append(e);const i=document.createElementNS(v,"text");i.setAttribute("x","3%"),i.setAttribute("y",t),i.innerHTML=o,document.querySelector("#tcpSegments").append(i)}else{const e=document.createElementNS(v,"path");e.setAttribute("stroke","pink"),e.setAttribute("stroke-width","0.5"),e.setAttribute("stroke-dasharray","2 2"),e.setAttribute("d","M10 "+t*r+"L50 "+(n-a/4)*r),document.querySelector("#tcpSegments").append(e);const i=document.createElementNS(v,"text");i.setAttribute("x","3%"),i.setAttribute("y",t),i.innerHTML=o,document.querySelector("#tcpSegments").append(i)}}function ie(e){const t=O(F);t.isDelivered=e,U.push(t),e||Y({lastEvent:q.ACK_LOSS})}function re(){const e=O(F),t=e.ackNum,n=e.endMS,o=G("congWin"),i=G("currentTraffic"),r=G("duplicateAcks");let a=G("firstUnackedSegmentNum");const c=P("seqSizeByte");if(H({currentTraffic:i-1}),Y({lastEvent:q.NEW_ACK,clockMS:n}),t==G("confirmedReceived"))if(Y({lastEvent:q.DUP_ACK}),G("ccState")!=M.FAST_RECOVERY){if(H({duplicateAcks:r+1}),G("duplicateAcks")>=3)return H({ccState:M.DUP_3,threshold:Math.max(2,Math.floor(G("congWin")/2)),congWin:Math.floor(G("congWin")/2)+3,congWinFractions:0}),console.log(D),Y({lastEvent:q.DUP_3}),void $()}else H({congWin:G("congWin")+1});else switch(G("ccState")){case M.SLOW_START:if(H({congWin:G("congWin")+1,confirmedReceived:t}),G("congWin")>=G("threshold"))return void function(){switch(G("ccState")){case M.SLOW_START:H({ccState:M.CONGESTION_AVOIDANCE}),Y({lastEvent:q.THRESHOLD_REACHED});break;case M.FAST_RECOVERY:H({ccState:M.SLOW_START}),Y({lastEvent:q.TIMEOUT})}}();t>=z[a].seqNum+c&&(a+=(t-z[a].seqNum)/c,H({firstUnackedSegmentNum:a,timestampFirstUnacked:z.length<=a?x:z[a].sendingCompleteMS}));break;case M.CONGESTION_AVOIDANCE:H({congWinFractions:G("congWinFractions")+1,currentTraffic:i-1,confirmedReceived:t}),G("congWinFractions")==o&&H({congWin:o+1,congWinFractions:0}),t>=z[a].seqNum+c&&(a+=(t-z[a].seqNum)/c,H({firstUnackedSegmentNum:a,timestampFirstUnacked:z.length<=a?x:z[a].sendingCompleteMS}));break;case M.FAST_RECOVERY:H({ccState:M.CONGESTION_AVOIDANCE,congWin:G("threshold"),duplicateAcks:0}),Y({lastEvent:q.NEW_ACK})}}function ae(){const e=P("roundTripTimeMS");for(Y({lastEvent:q.SEG}),$(),B.add(X("seqNum"));B.has(J("BytesReceivedInOrder"));)K({BytesReceivedInOrder:J("BytesReceivedInOrder")+P("seqSizeByte")});const t={startMS:X("endMS"),endMS:X("endMS")+e/2,ackNum:J("BytesReceivedInOrder"),sendingSegmentCompleteMS:X("sendingCompleteMS")};F.unshift(t)}function ce(){H({ccState:M.TIMEOUT,threshold:Math.max(2,Math.floor(G("congWin")/2)),congWin:1,congWinFractions:0,currentTraffic:0,duplicateAcks:0}),Y({lastEvent:q.TIMEOUT});const e=P("timeoutSpan")*P("roundTripTimeMS"),t=G("firstUnackedSegmentNum");Y({clockMS:z[t].sendingCompleteMS+e}),$()}function se(e){if(Q("clockMS")-G("timestampFirstUnacked")>=G("timeoutSpan")*P("roundTripTimeMS"))return ce(),void ne();if(0!=F.length&&O(F).endMS==Q("clockMS"))ie(e),e&&re(),oe();else if(G("congWin")>G("currentTraffic"))!function(e){const t=Q("clockMS"),n=G("seqNum"),o=G("currentTraffic"),i=P("seqSizeByte"),r=P("roundTripTimeMS"),a=P("transrateKBytePerSecond"),c=t+i/a,s=i/a+r/2,d=i/a;C(i/a);const l={startMS:t,endMS:t+s,sendingCompleteMS:c,seqNum:n,isDelivered:e,transmissionTime:d,retransmitted:!1};z.push(l),H({seqNum:n+i,currentTraffic:o+1}),G("timestampFirstUnacked")==x&&de(c),e||Y({lastEvent:q.SEG_LOSS})}(e),e&&ae(),ee();else{if(function(){if(0==F.length)return!0;const e=G("timestampFirstUnacked"),t=G("timeoutSpan")*P("roundTripTimeMS");return O(F).endMS-e>=t}())return ne(),void ce();ie(e),e&&re(),oe()}te(),$()}function de(e){const t={...O(D)};t.timestampFirstUnacked=e,D.push(t)}function le(e){const t=G("firstUnackedSegmentNum"),n=z[t],o={isDelivered:e,startMS:n.sendingCompleteMS+P("timeoutSpan")*P("roundTripTimeMS"),endMS:n.endMS+P("timeoutSpan")*P("roundTripTimeMS")+n.transmissionTime,sendingCompleteMS:n.sendingCompleteMS+P("timeoutSpan")*P("roundTripTimeMS")+n.transmissionTime,seqNum:n.seqNum,retransmitted:!0,transmissionTime:n.transmissionTime};z.push(o),H({ccState:M.SLOW_START,currentTraffic:G("currentTraffic")+1,firstUnackedSegmentNum:t+1}),C(n.transmissionTime),de(X("sendingCompleteMS")),e||Y({lastEvent:q.RETRANSMIT_LOSS}),$(),te()}function me(e){const t=G("firstUnackedSegmentNum"),n=z[t],o=n.transmissionTime,i=n.seqNum,r=Q("clockMS"),a={isDelivered:e,startMS:r,seqNum:i,transmissionTime:o,endMS:r+o+P("roundTripTimeMS")/2,sendingCompleteMS:r+o,retransmitted:!0};z.push(a),H({ccState:M.FAST_RECOVERY,currentTraffic:G("currentTraffic")+1,firstUnackedSegmentNum:t+1}),Y({clockMS:Q("clockMS")+o}),de(X("sendingCompleteMS")),e||Y({lastEvent:q.RETRANSMIT_LOSS}),$()}const ue={textTcpCongestionControl:{en:"TCP-Congestion-Control",de:"TCP Staukontrolle"},textRoundTripDelay:{en:"Round Trip Delay in ms:",de:"Round Trip Delay in ms:"},textTransmissionRate:{en:"Transmission Rate in kByte/s:",de:"Übertragungsrate in kByte/s:"},seqTab:{en:"Sequence",de:"Sequenz"},autoTab:{en:"Automaton",de:"Automat"},congTab:{en:"Congestion Window",de:"Staufenster"},textCongestionControlAlg:{en:"Congestion Control Algorithm",de:"Algorithmus für Staukontrolle"},textSegmentSize:{en:"Segment Size in Byte",de:"Segmentgröße in Byte"},textInitialThreshold:{en:"Initial Threshold",de:"Initialer Threshold"},textEnglish:{en:"English",de:"Englisch"},textGerman:{en:"German",de:"Deutsch"},textLanguage:{en:"Language",de:"Sprache"},desktopMenu:{en:"Configuration",de:"Einstellungen"}};function pe(){"block"==document.querySelector("#dropdownSpace").style.display?(document.querySelectorAll(".visual").forEach((e=>{e.style.display="seqSpace"==e.id||"dataSpace"==e.id?"block":"none"})),document.querySelectorAll(".tab").forEach((e=>{e.style["pointer-events"]="auto"}))):(document.querySelectorAll(".visual").forEach((e=>{e.style.display="dropdownSpace"==e.id?"block":"none"})),document.querySelectorAll(".tab").forEach((e=>{e.style["pointer-events"]="none"})))}function Se(){const e=document.querySelector("#dropdownSpace");e.style.display="block"==e.style.display?"none":"block"}function he(){const e=document.querySelector("#extendedDataSpace");e.style.display="block"==e.style.display?"none":"block"}document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll("#press input").forEach((e=>{e.setAttribute("disabled","")})),document.querySelector("#startButton").removeAttribute("disabled"),document.querySelectorAll("form.numeric").forEach((e=>{e.addEventListener("submit",(e=>{e.preventDefault()})),e.addEventListener("change",(t=>{const n=parseInt(e.elements[1].value);if(!n>0)return!1;Z(e.id,n),j(),t.preventDefault()}))})),document.querySelectorAll("form.string").forEach((e=>{e.addEventListener("change",(()=>{const t=e.elements.option.value;Z(e.id,t),j()}))})),function(){if(!window.matchMedia("(max-width: 999px)").matches)return;const e={seqTab:"seqSpace",autoTab:"autoSpace",congTab:"congwinSpace"};document.querySelectorAll(".tab").forEach((t=>{t.addEventListener("click",(()=>function(e){document.querySelectorAll(".visual").forEach((t=>{t.style.display=t.id==e||"dataSpace"==t.id?"block":"none"}))}(e[t.id])))}))}(),document.querySelector("#changeLang").addEventListener("change",(e=>{const t=e.target.value;var n;n=t,document.querySelectorAll(".lang").forEach((e=>{e.innerHTML=ue[e.id][n]}))})),window.matchMedia("(max-width: 999px)").matches&&document.querySelector("#dropdownMenu").addEventListener("click",pe),window.matchMedia("(min-width: 1000px)").matches&&(document.querySelector("#dropdownMenu").addEventListener("click",Se),document.querySelector("#extendedData").addEventListener("click",he)),function(){let e=1;const t=document.querySelector("#diagramSvg").viewBox.baseVal.width;console.log(t);let n=5;for(;n<t;){const t=document.createElementNS(v,"text");t.setAttribute("y","95%"),t.setAttribute("x",n),t.setAttribute("text-anchor","middle"),t.innerHTML=e,document.querySelector("#axisNumbers").append(t),console.log(t),e+=1,n+=9}e=1;const o=document.querySelector("#diagramSvg").viewBox.baseVal.height;for(console.log(t),n=.9*o;n>0;){const t=document.createElementNS(v,"text");t.setAttribute("x","3%"),t.setAttribute("y",n),t.setAttribute("text-anchor","middle"),t.innerHTML=e,document.querySelector("#axisNumbers").append(t),console.log(t),e+=1,n-=5}}(),$(),document.querySelector("#send").addEventListener("click",(()=>{switch(G("ccState")){case M.SLOW_START:se(!0);break;case M.TIMEOUT:le(!0),ae(),ee();break;case M.DUP_3:me(!0),ae(),ee();break;case M.CONGESTION_AVOIDANCE:case M.FAST_RECOVERY:se(!0)}})),document.querySelector("#loss").addEventListener("click",(()=>{switch(G("ccState")){case M.SLOW_START:se(!1);break;case M.TIMEOUT:le(!1),ee();break;case M.DUP_3:me(!0),ae(),ee();break;case M.CONGESTION_AVOIDANCE:case M.FAST_RECOVERY:se(!1)}})),document.querySelector("#startButton").addEventListener("click",T),document.querySelector("#reset").addEventListener("click",j)}))})()})();