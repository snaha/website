var Ga=Object.defineProperty;var ra=t=>{throw TypeError(t)};var ja=(t,e,a)=>e in t?Ga(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var na=(t,e,a)=>ja(t,typeof e!="symbol"?e+"":e,a),Ce=(t,e,a)=>e.has(t)||ra("Cannot "+a);var L=(t,e,a)=>(Ce(t,e,"read from private field"),a?a.call(t):e.get(t)),ae=(t,e,a)=>e.has(t)?ra("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),Se=(t,e,a,r)=>(Ce(t,e,"write to private field"),r?r.call(t,a):e.set(t,a),a),ia=(t,e,a)=>(Ce(t,e,"access private method"),a);import{t as S,a as m,d as oa,b as H}from"../chunks/DdMubMdz.js";import{ah as Ua,b as Ya,s as Ee,h as U,a7 as Ja,f as Ka,z as o,T as Xa,H as Qa,g as la,i as We,c as te,ab as Za,j as ga,a as pa,p as et,as as ze,af as _a,M as ca,at,$ as tt,J as da,P as st,au as rt,av as nt,ae as it,aw as ot,d as lt,ax as ct,ay as dt,a9 as vt,e as ht,u as ut,w as B,y as p,az as ft,t as he,C as l,o as ba,x as ma,v as i,D as $,A as E,F as He,B as Me}from"../chunks/DYWgC3AC.js";import{s as Ie}from"../chunks/Bqo-UNf_.js";import{i as ve}from"../chunks/DZxSGmZu.js";import{e as gt,a as pt,t as Y,d as ka,s as P,c as j,T as C,D as se,b as _t,f as bt}from"../chunks/Bh06FKS9.js";import{a as J,r as mt,p as va}from"../chunks/BPp7cRjZ.js";import{s as kt}from"../chunks/DfzugRC8.js";import{b as ha}from"../chunks/C3xiZ-0y.js";import{o as wt}from"../chunks/C2yNY7is.js";import{b as D}from"../chunks/CZGXyI-t.js";function Be(t,e){return e}function yt(t,e,a,r){for(var v=[],w=e.length,f=0;f<w;f++)nt(e[f].e,v,!0);var y=w>0&&v.length===0&&a!==null;if(y){var _=a.parentNode;it(_),_.append(a),r.clear(),O(t,e[0].prev,e[w-1].next)}ot(v,()=>{for(var b=0;b<w;b++){var n=e[b];y||(r.delete(n.k),O(t,n.prev,n.next)),lt(n.e,!y)}})}function Ne(t,e,a,r,v,w=null){var f=t,y={flags:e,items:new Map,first:null};{var _=t;f=U?Ee(Ja(_)):_.appendChild(Ua())}U&&Ka();var b=null,n=!1,x=Xa(()=>{var c=a();return st(c)?c:c==null?[]:_a(c)});Ya(()=>{var c=o(x),k=c.length;if(n&&k===0)return;n=k===0;let u=!1;if(U){var W=f.data===Qa;W!==(k===0)&&(f=la(),Ee(f),We(!1),u=!0)}if(U){for(var T=null,g,A=0;A<k;A++){if(te.nodeType===8&&te.data===Za){f=te,u=!0,We(!1);break}var V=c[A],N=r(V,A);g=wa(te,y,T,null,V,N,A,v,e,a),y.items.set(N,g),T=g}k>0&&Ee(la())}U||xt(c,y,f,v,e,r,a),w!==null&&(k===0?b?ga(b):b=pa(()=>w(f)):b!==null&&et(b,()=>{b=null})),u&&We(!0),o(x)}),U&&(f=te)}function xt(t,e,a,r,v,w,f){var y=t.length,_=e.items,b=e.first,n=b,x,c=null,k=[],u=[],W,T,g,A;for(A=0;A<y;A+=1){if(W=t[A],T=w(W,A),g=_.get(T),g===void 0){var V=n?n.e.nodes_start:a;c=wa(V,e,c,c===null?e.first:c.next,W,T,A,r,v,f),_.set(T,c),k=[],u=[],n=c.next;continue}if($t(g,W,A),g.e.f&ze&&ga(g.e),g!==n){if(x!==void 0&&x.has(g)){if(k.length<u.length){var N=u[0],z;c=N.prev;var ne=k[0],Q=k[k.length-1];for(z=0;z<k.length;z+=1)ua(k[z],N,a);for(z=0;z<u.length;z+=1)x.delete(u[z]);O(e,ne.prev,Q.next),O(e,c,ne),O(e,Q,N),n=N,c=Q,A-=1,k=[],u=[]}else x.delete(g),ua(g,n,a),O(e,g.prev,g.next),O(e,g,c===null?e.first:c.next),O(e,c,g),c=g;continue}for(k=[],u=[];n!==null&&n.k!==T;)n.e.f&ze||(x??(x=new Set)).add(n),u.push(n),n=n.next;if(n===null)continue;g=n}k.push(g),c=g,n=g.next}if(n!==null||x!==void 0){for(var Z=x===void 0?[]:_a(x);n!==null;)n.e.f&ze||Z.push(n),n=n.next;var K=Z.length;if(K>0){var ee=y===0?a:null;yt(e,Z,ee,_)}}ca.first=e.first&&e.first.e,ca.last=c&&c.e}function $t(t,e,a,r){at(t.v,e),t.i=a}function wa(t,e,a,r,v,w,f,y,_,b){var n=(_&ct)!==0,x=(_&dt)===0,c=n?x?tt(v):da(v):v,k=_&rt?da(f):f,u={i:k,v:c,k:w,a:null,e:null,prev:a,next:r};try{return u.e=pa(()=>y(t,c,k,b),U),u.e.prev=a&&a.e,u.e.next=r&&r.e,a===null?e.first=u:(a.next=u,a.e.next=u.e),r!==null&&(r.prev=u,r.e.prev=u.e),u}finally{}}function ua(t,e,a){for(var r=t.next?t.next.e.nodes_start:a,v=e?e.e.nodes_start:a,w=t.e.nodes_start;w!==r;){var f=vt(w);v.before(w),w=f}}function O(t,e,a){e===null?t.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}var R,X,re,ue,ya;const fe=class fe{constructor(e){ae(this,ue);ae(this,R,new WeakMap);ae(this,X);ae(this,re);Se(this,re,e)}observe(e,a){var r=L(this,R).get(e)||new Set;return r.add(a),L(this,R).set(e,r),ia(this,ue,ya).call(this).observe(e,L(this,re)),()=>{var v=L(this,R).get(e);v.delete(a),v.size===0&&(L(this,R).delete(e),L(this,X).unobserve(e))}}};R=new WeakMap,X=new WeakMap,re=new WeakMap,ue=new WeakSet,ya=function(){return L(this,X)??Se(this,X,new ResizeObserver(e=>{for(var a of e){fe.entries.set(a.target,a);for(var r of L(this,R).get(a.target)||[])r(a)}}))},na(fe,"entries",new WeakMap);let Fe=fe;var At=new Fe({box:"border-box"});function Pt(t,e,a){var r=At.observe(t,()=>a(t[e]));ht(()=>(ut(()=>a(t[e])),r))}var Dt=S("<span><!></span>");function fa(t,e){let a=J(e,"dimension",3,"default"),r=J(e,"variant",3,"strong"),v=J(e,"class",3,""),w=J(e,"leftAlign",3,!1),f=J(e,"mode",3,"auto"),y=mt(e,["$$slots","$$events","$$legacy","dimension","variant","active","hover","focus","disabled","href","class","leftAlign","children","mode"]);var _=Dt(),b=p(_);gt(b,()=>e.href?"a":"button",!1,(n,x)=>{let c;B(()=>{c=pt(n,c,{class:`${a()} ${r()} ${f()}`,href:e.href,disabled:e.disabled,...y},"svelte-1hblcdw",n.namespaceURI===ft,n.nodeName.includes("-")),Y(n,"leftAlign",w()),Y(n,"active",e.active),Y(n,"hover",e.hover),Y(n,"focus",e.focus)});var k=oa(),u=he(k);{var W=T=>{var g=oa(),A=he(g);kt(A,()=>e.children),m(T,g)};ve(u,T=>{e.children&&T(W)})}m(x,k)}),l(_),B(()=>{ka(_,`${`root ${v()}`??""} svelte-1hblcdw`),Y(_,"disabled",e.disabled)}),m(t,_)}var Tt=S("<span> </span>"),Ct=S('<div class="root svelte-1060s2a"><div></div></div>');function I(t,e){ba(e,!0);let a=J(e,"color",3,"top"),r=J(e,"large",3,!1),v,w;function f(){const b=w.getBoundingClientRect();v.style.height=`${b.height}px`}wt(()=>(window.addEventListener("resize",f),f(),()=>window.removeEventListener("resize",f)));var y=Ct(),_=p(y);Ne(_,21,()=>e.text.split(" "),Be,(b,n)=>{var x=Tt(),c=p(x,!0);l(x),B(()=>Ie(c,o(n))),m(b,x)}),l(_),ha(_,b=>w=b,()=>w),l(y),ha(y,b=>v=b,()=>v),B(()=>{ka(_,`wrapper ${a()??""} svelte-1060s2a`),Y(_,"large",r())}),m(t,y),ma()}var St=S('<img alt="Header" class="svelte-k9co7b">'),Et=S('<span class="yellow">We turn worthy ideas into products.</span> Snaha is a product makers collective geared towards making the web a bit better for hoomans.',1),Wt=S('<img alt="Header" class="svelte-k9co7b">'),zt=S(`We’re a small and independent OG team defending privacy, freedom and more generally, human
			interests in software products.<br><br>We build for the web — websites, web applications,
			web3 dapps & other crypto-related projects.`,1),Ht=S(`Attila and David met back in 2012, while working together at <a target="_blank" class="svelte-k9co7b">Prezi</a>. In 2019, they co-founded the <a target="_blank" class="svelte-k9co7b">Felfele Foundation</a>. Shortly after that,
			they met with Vojtech while working with the <a target="_blank" class="svelte-k9co7b">Swarm Foundation</a>. Since then Attila, David
			and Vojtech have stuck together. They’ve worked with different teams at <a target="_blank" class="svelte-k9co7b">Logos</a> and co-founded Snaha collective together. Besides helping selected clients, Snaha is bootstrapping <a target="_blank" class="svelte-k9co7b">Kalkul</a> and developing <a target="_blank" class="svelte-k9co7b">Diète</a>, its own open-source design system.`,1),Mt=S('<a target="_blank" class="svelte-k9co7b"><img class="svelte-k9co7b"></a>'),It=S('<div class="card svelte-k9co7b"><img class="svelte-k9co7b"> <!> <!></div>'),Bt=S(`Successful products result from a delicate assembly of widely different skillsets. Magic
			happens precisely within the in-betweens.<br><br> Our team covers the full spectrum and has
			refined a subtle alchemy in working together — efficiently binding our diverse competences to deliver
			high-quality, seamless products.`,1),Nt=S('Drop us an email at <a href="mailto:hello@snaha.net" class="svelte-k9co7b">hello@snaha.net</a> or join our <a href="https://discord.gg/rrJ3c5DmBr" class="svelte-k9co7b">Discord server</a>.',1),Ft=S('<div class="grower svelte-k9co7b"></div>'),Lt=S('<nav class="svelte-k9co7b"><img alt="Brand" class="svelte-k9co7b"> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></nav> <section class="header svelte-k9co7b"><div class="left svelte-k9co7b"><img alt="Logo" class="logo svelte-k9co7b"> <!> <!> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div> <!></section> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <section class="svelte-k9co7b"><div class="container svelte-k9co7b"><!></div> <div class="container svelte-k9co7b"><!></div></section> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <section class="reverse svelte-k9co7b"><div class="about-team svelte-k9co7b"><!> <div class="icons svelte-k9co7b"></div></div> <div class="container svelte-k9co7b"><!></div></section> <section class="svelte-k9co7b"></section> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <section class="svelte-k9co7b"><div class="container svelte-k9co7b"><!></div> <div class="container svelte-k9co7b"><!></div></section> <section class="svelte-k9co7b"><div class="card svelte-k9co7b"><!> <!></div> <div class="card svelte-k9co7b"><!> <!></div> <div class="card svelte-k9co7b"><!> <!></div></section> <section class="svelte-k9co7b"><div class="card svelte-k9co7b"><!> <!></div> <div class="card svelte-k9co7b"><!> <!></div> <div class="card svelte-k9co7b"><!> <!></div></section> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <section class="svelte-k9co7b"><div class="contact svelte-k9co7b"><!> <!></div></section> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <footer class="svelte-k9co7b"><a href="mailto:hello@snaha.net" class="svelte-k9co7b">hello@snaha.net</a> <a class="svelte-k9co7b">Contact us</a> <a href="https://github.com/snaha" target="_blank" class="svelte-k9co7b">Github</a> <a href="https://discord.gg/rrJ3c5DmBr" class="svelte-k9co7b">Discord</a> <!> <!></footer>',1);function Qt(t,e){ba(e,!0);let a=Me(0);const r=E(()=>o(a)<920),v={Prezi:{icon:`${D}/icons/prezi.svg`,link:"https://prezi.com"},Felfele:{icon:`${D}/icons/felfele.svg`,link:"https://felfele.org"},Swarm:{icon:`${D}/icons/swarm.svg`,link:"https://www.ethswarm.org"},Logos:{icon:`${D}/icons/logos.svg`,link:"https://logos.co"},Kalkul:{icon:`${D}/icons/kalkul.svg`,link:"https://kalkul.app/"},Diete:{icon:`${D}/icons/diete.svg`,link:"https://diete.design/"}},w=[{name:"Attila",img:`${D}/team/attila.png`,info:"Attila is a full-stack engineer and engineering manager who keeps the team well-grounded in reality. Passionate about decentralized systems, cryptography, he goes out of his way to use open-source technology for everything… sometimes to the point where his audio during team calls becomes a heroic struggle. With a people-first approach to management, he knows that great tech is built by great teams."},{name:"David",img:`${D}/team/david.png`,info:"David is leading all design efforts at Snaha. He’s an advocate for purpose-driven design, products that elegantly serve people without taking centre stage. He loves solutions that use just the right amount of technology/resources and make the most out of it — maximum joy, minimum waste. He's somewhere on the line between being detail-oriented and obsessive."},{name:"Vojtech",img:`${D}/team/vojtech.png`,info:"Vojtech is full-stack software engineer with a knack for turning ideas into reality—especially when blockchain is involved. An eternal optimist, he’s the kind of developer who says, “We can build that tomorrow”—and does his best to make it happen. A lifelong dreamer, he’s driven by a desire to contribute to humanity, whether through volunteering, philanthropy, working with organizations pushing scientific progress or finding ways to make a difference in his own city."}];let f=Me(0),y=Me(0),_=E(()=>o(f)+(o(r)?16:64)<=o(y));var b=Lt(),n=he(b),x=p(n);P(x,"src",`${D}/brand.svg`);var c=i(x,2);const k=E(()=>o(r)?"small":"compact");j(c,()=>({"--colors-ultra-high":"var(--colors-high-accent)"})),fa(c.lastChild,{get dimension(){return o(k)},href:`${D}/contact`,children:(s,h)=>{$();var d=H("CONTACT US");m(s,d)},$$slots:{default:!0}}),l(c),l(n);var u=i(n,2),W=p(u),T=p(W);P(T,"src",`${D}/logo.svg`);var g=i(T,2);{var A=s=>{var h=St();P(h,"src",`${D}/header-img.png`),m(s,h)};ve(g,s=>{o(r)&&s(A)})}var V=i(g,2);const N=E(()=>o(r)?"default":"h3");C(V,{get variant(){return o(N)},class:"normal block",children:(s,h)=>{var d=Et();$(),m(s,d)},$$slots:{default:!0}});var z=i(V,2);const ne=E(()=>o(r)?"compact":"large");j(z,()=>({"--colors-ultra-high":"var(--colors-high-accent)"})),fa(z.lastChild,{get dimension(){return o(ne)},href:`${D}/contact`,children:(s,h)=>{$();var d=H("CONTACT US");m(s,d)},$$slots:{default:!0}}),l(z),l(W);var Q=i(W,2);{var Z=s=>{var h=Wt();P(h,"src",`${D}/header-img.png`),m(s,h)};ve(Q,s=>{o(r)||s(Z)})}l(u);var K=i(u,2);j(K,()=>({"--double-padding":"0"})),se(K.lastChild,{}),l(K);var ee=i(K,2),ge=p(ee),xa=p(ge);const $a=E(()=>!o(r));I(xa,{text:"human- friendly web",color:"accent",get large(){return o($a)}}),l(ge);var Le=i(ge,2),Aa=p(Le);const Pa=E(()=>o(r)?"default":"large");C(Aa,{get variant(){return o(Pa)},children:(s,h)=>{$();var d=zt();$(3),m(s,d)},$$slots:{default:!0}}),l(Le),l(ee);var ie=i(ee,2);j(ie,()=>({"--double-padding":"0"})),se(ie.lastChild,{}),l(ie);var pe=i(ie,2),_e=p(pe),Oe=p(_e);const Da=E(()=>o(r)?"default":"large");C(Oe,{get variant(){return o(Da)},class:"block",children:(s,h)=>{$();var d=Ht(),M=i(he(d)),q=i(M,2),F=i(q,2),G=i(F,2),Te=i(G,2),de=i(Te,2);$(),B(()=>{P(M,"href",v.Prezi.link),P(q,"href",v.Felfele.link),P(F,"href",v.Swarm.link),P(G,"href",v.Logos.link),P(Te,"href",v.Kalkul.link),P(de,"href",v.Diete.link)}),m(s,d)},$$slots:{default:!0}});var Re=i(Oe,2);Ne(Re,21,()=>Object.entries(v),Be,(s,h)=>{let d=()=>o(h)[0],M=()=>o(h)[1].icon,q=()=>o(h)[1].link;var F=Mt(),G=p(F);l(F),B(()=>{P(F,"href",q()),P(G,"src",M()),P(G,"alt",d())}),m(s,F)}),l(Re),l(_e);var Ve=i(_e,2),Ta=p(Ve);const Ca=E(()=>!o(r));I(Ta,{text:"our core team",color:"accent",get large(){return o(Ca)}}),l(Ve),l(pe);var be=i(pe,2);Ne(be,21,()=>w,Be,(s,h)=>{var d=It(),M=p(d),q=i(M,2);I(q,{get text(){return o(h).name}});var F=i(q,2);C(F,{children:(G,Te)=>{$();var de=H();B(()=>Ie(de,o(h).info)),m(G,de)},$$slots:{default:!0}}),l(d),B(()=>{P(M,"src",o(h).img),P(M,"alt",o(h).name)}),m(s,d)}),l(be);var oe=i(be,2);j(oe,()=>({"--double-padding":"0"})),se(oe.lastChild,{}),l(oe);var me=i(oe,2),ke=p(me),Sa=p(ke);const Ea=E(()=>!o(r));I(Sa,{text:"connect the dots",color:"accent",get large(){return o(Ea)}}),l(ke);var qe=i(ke,2),Wa=p(qe);const za=E(()=>o(r)?"default":"large");C(Wa,{get variant(){return o(za)},children:(s,h)=>{$();var d=Bt();$(3),m(s,d)},$$slots:{default:!0}}),l(qe),l(me);var we=i(me,2),ye=p(we),Ge=p(ye);I(Ge,{text:"Design"});var Ha=i(Ge,2);C(Ha,{children:(s,h)=>{$();var d=H(`We can help from defining the product scope and features all the way to the finest execution
			details. We typically use Diète, our own open-source design system, which can be customised
			into a unique visual direction. This allows us to move faster while ensuring quality and the
			highest accessibility standards.`);m(s,d)},$$slots:{default:!0}}),l(ye);var xe=i(ye,2),je=p(xe);I(je,{text:"Frontend"});var Ma=i(je,2);C(Ma,{children:(s,h)=>{$();var d=H(`We build fast, maintainable, and accessible user interfaces using Svelte. Its modern, reactive
			approach allows us to write less code while achieving high performance. We focus on delivering
			smooth interactions, quick load times, and a seamless experience across all devices.`);m(s,d)},$$slots:{default:!0}}),l(xe);var Ue=i(xe,2),Ye=p(Ue);I(Ye,{text:"Backend"});var Ia=i(Ye,2);C(Ia,{children:(s,h)=>{$();var d=H(`We develop backend systems that serve as a strong foundation for applications. This includes
			APIs for handling business logic, database management for storing and retrieving data
			efficiently, and authentication to ensure security. We prioritize scalability and
			maintainability while keeping things as simple as possible.`);m(s,d)},$$slots:{default:!0}}),l(Ue),l(we);var $e=i(we,2),Ae=p($e),Je=p(Ae);I(Je,{text:"Branding"});var Ba=i(Je,2);C(Ba,{children:(s,h)=>{$();var d=H(`Meaningful branding will help make your product stand out. We believe that there should be a
			strong connection between the product and the brand. Based on product design, we can help with
			defining a minimal brand concept and strategy, designing your product logo and actionable
			branding guidelines to build websites, marketing material and more.`);m(s,d)},$$slots:{default:!0}}),l(Ae);var Pe=i(Ae,2),Ke=p(Pe);I(Ke,{text:"Marketing"});var Na=i(Ke,2);C(Na,{children:(s,h)=>{$();var d=H(`Great design, code and branding are rarely enough to make a product successful. We can help
			crafting tailored marketing strategies and creative campaigns to reach the strategic audience
			for your product. We can help with writing content in line with your brand’s tone of voice and
			create all the required visual material to support marketing campaigns.`);m(s,d)},$$slots:{default:!0}}),l(Pe);var Xe=i(Pe,2),Qe=p(Xe);I(Qe,{text:"DevOps"});var Fa=i(Qe,2);C(Fa,{children:(s,h)=>{$();var d=H(`Successful products stand and fall with availability. A great user experience means nothing if
			your product is unreliable. We ensure that deployments are automated, infrastructure is
			scalable, and monitoring is in place to catch issues before they become problems. As they say,
			"Good infrastructure is invisible"—our goal is to make sure everything runs smoothly without
			anyone noticing.`);m(s,d)},$$slots:{default:!0}}),l(Xe),l($e);var le=i($e,2);j(le,()=>({"--double-padding":"0"})),se(le.lastChild,{}),l(le);var De=i(le,2),Ze=p(De),ea=p(Ze);const La=E(()=>o(r)?"default":"large");C(ea,{get variant(){return o(La)},class:"high",children:(s,h)=>{$();var d=H("Something to discuss?");m(s,d)},$$slots:{default:!0}});var Oa=i(ea,2);const Ra=E(()=>o(r)?"default":"h3");C(Oa,{get variant(){return o(Ra)},class:"normal block",children:(s,h)=>{$();var d=Nt();$(4),m(s,d)},$$slots:{default:!0}}),l(Ze),l(De);var ce=i(De,2);j(ce,()=>({"--double-padding":"0"})),se(ce.lastChild,{}),l(ce);var aa=i(ce,2),ta=i(p(aa),2);P(ta,"href",`${D}/contact`);var sa=i(ta,6);{var Va=s=>{var h=Ft();m(s,h)};ve(sa,s=>{o(r)||s(Va)})}var qa=i(sa,2);C(qa,{class:"high end",children:(s,h)=>{$();var d=H();B(M=>Ie(d,M),[()=>new Date().getFullYear()]),m(s,d)},$$slots:{default:!0}}),l(aa),B(()=>Y(n,"navShown",o(_))),_t("innerWidth",s=>He(a,va(s))),bt("y",()=>o(y),s=>He(y,va(s))),Pt(u,"clientHeight",s=>He(f,s)),m(t,b),ma()}export{Qt as component};
