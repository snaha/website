var Ga=Object.defineProperty;var ra=t=>{throw TypeError(t)};var ja=(t,e,a)=>e in t?Ga(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var na=(t,e,a)=>ja(t,typeof e!="symbol"?e+"":e,a),Ce=(t,e,a)=>e.has(t)||ra("Cannot "+a);var L=(t,e,a)=>(Ce(t,e,"read from private field"),a?a.call(t):e.get(t)),ae=(t,e,a)=>e.has(t)?ra("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),Se=(t,e,a,r)=>(Ce(t,e,"write to private field"),r?r.call(t,a):e.set(t,a),a),ia=(t,e,a)=>(Ce(t,e,"access private method"),a);import{t as S,a as b,d as oa,b as H}from"../chunks/DdMubMdz.js";import{ah as Ua,b as Ya,s as Ee,h as U,a7 as Ja,f as Ka,z as o,T as Xa,H as Qa,g as la,i as We,c as te,ab as Za,j as fa,a as ga,p as et,as as ze,af as _a,M as da,at,$ as tt,J as ca,P as st,au as rt,av as nt,ae as it,aw as ot,d as lt,ax as dt,ay as ct,a9 as vt,e as pt,u as ht,w as B,y as g,az as ut,t as pe,C as l,o as ma,x as ba,v as i,D as $,A as E,F as He,B as Me}from"../chunks/DYWgC3AC.js";import{s as Ie}from"../chunks/Bqo-UNf_.js";import{i as ve}from"../chunks/DZxSGmZu.js";import{e as ft,a as gt,t as Y,d as wa,s as P,c as j,T as C,D as se,b as _t,f as mt}from"../chunks/Bh06FKS9.js";import{a as J,r as bt,p as va}from"../chunks/BPp7cRjZ.js";import{s as wt}from"../chunks/DfzugRC8.js";import{b as pa}from"../chunks/C3xiZ-0y.js";import{o as yt}from"../chunks/C2yNY7is.js";import{b as D}from"../chunks/BecioAaV.js";function Be(t,e){return e}function kt(t,e,a,r){for(var v=[],y=e.length,u=0;u<y;u++)nt(e[u].e,v,!0);var k=y>0&&v.length===0&&a!==null;if(k){var _=a.parentNode;it(_),_.append(a),r.clear(),O(t,e[0].prev,e[y-1].next)}ot(v,()=>{for(var m=0;m<y;m++){var n=e[m];k||(r.delete(n.k),O(t,n.prev,n.next)),lt(n.e,!k)}})}function Ne(t,e,a,r,v,y=null){var u=t,k={flags:e,items:new Map,first:null};{var _=t;u=U?Ee(Ja(_)):_.appendChild(Ua())}U&&Ka();var m=null,n=!1,x=Xa(()=>{var d=a();return st(d)?d:d==null?[]:_a(d)});Ya(()=>{var d=o(x),w=d.length;if(n&&w===0)return;n=w===0;let h=!1;if(U){var W=u.data===Qa;W!==(w===0)&&(u=la(),Ee(u),We(!1),h=!0)}if(U){for(var T=null,f,A=0;A<w;A++){if(te.nodeType===8&&te.data===Za){u=te,h=!0,We(!1);break}var V=d[A],N=r(V,A);f=ya(te,k,T,null,V,N,A,v,e,a),k.items.set(N,f),T=f}w>0&&Ee(la())}U||xt(d,k,u,v,e,r,a),y!==null&&(w===0?m?fa(m):m=ga(()=>y(u)):m!==null&&et(m,()=>{m=null})),h&&We(!0),o(x)}),U&&(u=te)}function xt(t,e,a,r,v,y,u){var k=t.length,_=e.items,m=e.first,n=m,x,d=null,w=[],h=[],W,T,f,A;for(A=0;A<k;A+=1){if(W=t[A],T=y(W,A),f=_.get(T),f===void 0){var V=n?n.e.nodes_start:a;d=ya(V,e,d,d===null?e.first:d.next,W,T,A,r,v,u),_.set(T,d),w=[],h=[],n=d.next;continue}if($t(f,W,A),f.e.f&ze&&fa(f.e),f!==n){if(x!==void 0&&x.has(f)){if(w.length<h.length){var N=h[0],z;d=N.prev;var ne=w[0],Q=w[w.length-1];for(z=0;z<w.length;z+=1)ha(w[z],N,a);for(z=0;z<h.length;z+=1)x.delete(h[z]);O(e,ne.prev,Q.next),O(e,d,ne),O(e,Q,N),n=N,d=Q,A-=1,w=[],h=[]}else x.delete(f),ha(f,n,a),O(e,f.prev,f.next),O(e,f,d===null?e.first:d.next),O(e,d,f),d=f;continue}for(w=[],h=[];n!==null&&n.k!==T;)n.e.f&ze||(x??(x=new Set)).add(n),h.push(n),n=n.next;if(n===null)continue;f=n}w.push(f),d=f,n=f.next}if(n!==null||x!==void 0){for(var Z=x===void 0?[]:_a(x);n!==null;)n.e.f&ze||Z.push(n),n=n.next;var K=Z.length;if(K>0){var ee=k===0?a:null;kt(e,Z,ee,_)}}da.first=e.first&&e.first.e,da.last=d&&d.e}function $t(t,e,a,r){at(t.v,e),t.i=a}function ya(t,e,a,r,v,y,u,k,_,m){var n=(_&dt)!==0,x=(_&ct)===0,d=n?x?tt(v):ca(v):v,w=_&rt?ca(u):u,h={i:w,v:d,k:y,a:null,e:null,prev:a,next:r};try{return h.e=ga(()=>k(t,d,w,m),U),h.e.prev=a&&a.e,h.e.next=r&&r.e,a===null?e.first=h:(a.next=h,a.e.next=h.e),r!==null&&(r.prev=h,r.e.prev=h.e),h}finally{}}function ha(t,e,a){for(var r=t.next?t.next.e.nodes_start:a,v=e?e.e.nodes_start:a,y=t.e.nodes_start;y!==r;){var u=vt(y);v.before(y),y=u}}function O(t,e,a){e===null?t.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}var R,X,re,he,ka;const ue=class ue{constructor(e){ae(this,he);ae(this,R,new WeakMap);ae(this,X);ae(this,re);Se(this,re,e)}observe(e,a){var r=L(this,R).get(e)||new Set;return r.add(a),L(this,R).set(e,r),ia(this,he,ka).call(this).observe(e,L(this,re)),()=>{var v=L(this,R).get(e);v.delete(a),v.size===0&&(L(this,R).delete(e),L(this,X).unobserve(e))}}};R=new WeakMap,X=new WeakMap,re=new WeakMap,he=new WeakSet,ka=function(){return L(this,X)??Se(this,X,new ResizeObserver(e=>{for(var a of e){ue.entries.set(a.target,a);for(var r of L(this,R).get(a.target)||[])r(a)}}))},na(ue,"entries",new WeakMap);let Fe=ue;var At=new Fe({box:"border-box"});function Pt(t,e,a){var r=At.observe(t,()=>a(t[e]));pt(()=>(ht(()=>a(t[e])),r))}var Dt=S("<span><!></span>");function ua(t,e){let a=J(e,"dimension",3,"default"),r=J(e,"variant",3,"strong"),v=J(e,"class",3,""),y=J(e,"leftAlign",3,!1),u=J(e,"mode",3,"auto"),k=bt(e,["$$slots","$$events","$$legacy","dimension","variant","active","hover","focus","disabled","href","class","leftAlign","children","mode"]);var _=Dt(),m=g(_);ft(m,()=>e.href?"a":"button",!1,(n,x)=>{let d;B(()=>{d=gt(n,d,{class:`${a()} ${r()} ${u()}`,href:e.href,disabled:e.disabled,...k},"svelte-1hblcdw",n.namespaceURI===ut,n.nodeName.includes("-")),Y(n,"leftAlign",y()),Y(n,"active",e.active),Y(n,"hover",e.hover),Y(n,"focus",e.focus)});var w=oa(),h=pe(w);{var W=T=>{var f=oa(),A=pe(f);wt(A,()=>e.children),b(T,f)};ve(h,T=>{e.children&&T(W)})}b(x,w)}),l(_),B(()=>{wa(_,`${`root ${v()}`??""} svelte-1hblcdw`),Y(_,"disabled",e.disabled)}),b(t,_)}var Tt=S("<span> </span>"),Ct=S('<div class="root svelte-1060s2a"><div></div></div>');function I(t,e){ma(e,!0);let a=J(e,"color",3,"top"),r=J(e,"large",3,!1),v,y;function u(){const m=y.getBoundingClientRect();v.style.height=`${m.height}px`}yt(()=>(window.addEventListener("resize",u),u(),()=>window.removeEventListener("resize",u)));var k=Ct(),_=g(k);Ne(_,21,()=>e.text.split(" "),Be,(m,n)=>{var x=Tt(),d=g(x,!0);l(x),B(()=>Ie(d,o(n))),b(m,x)}),l(_),pa(_,m=>y=m,()=>y),l(k),pa(k,m=>v=m,()=>v),B(()=>{wa(_,`wrapper ${a()??""} svelte-1060s2a`),Y(_,"large",r())}),b(t,k),ba()}var St=S('<img alt="Header" class="svelte-ap2nap">'),Et=S('<span class="yellow">We turn worthy ideas into products.</span> Snaha is a product makers collective geared towards making the web a bit better for hoomans.',1),Wt=S('<img alt="Header" class="header-img svelte-ap2nap">'),zt=S(`We’re a small and independent OG team defending privacy, freedom and more generally, human
			interests in software products.<br><br>We build for the web — websites, web applications,
			web3 dapps & other crypto-related projects.`,1),Ht=S(`Attila and David met back in 2012, while working together at <a target="_blank" class="svelte-ap2nap">Prezi</a>. In 2019, they co-founded the <a target="_blank" class="svelte-ap2nap">Felfele Foundation</a>. Shortly after that,
			they met with Vojtech while working with the <a target="_blank" class="svelte-ap2nap">Swarm Foundation</a>. Since then Attila, David
			and Vojtech have stuck together. They’ve worked with different teams at <a target="_blank" class="svelte-ap2nap">Logos</a> and co-founded Snaha collective together. Besides helping selected clients, Snaha is bootstrapping <a target="_blank" class="svelte-ap2nap">Kalkul</a> and developing <a target="_blank" class="svelte-ap2nap">Diète</a>, its own open-source design system.`,1),Mt=S('<a target="_blank" class="svelte-ap2nap"><img class="svelte-ap2nap"></a>'),It=S('<div class="card svelte-ap2nap"><img class="svelte-ap2nap"> <!> <!></div>'),Bt=S(`Successful products result from a delicate assembly of widely different skillsets. Magic
			happens precisely within the in-betweens.<br><br> Our team covers the full spectrum and has
			refined a subtle alchemy in working together — efficiently binding our diverse competences to deliver
			high-quality, seamless products.`,1),Nt=S('Drop us an email at <a href="mailto:hello@snaha.net" class="svelte-ap2nap">hello@snaha.net</a> or join our <a href="https://discord.gg/rrJ3c5DmBr" class="svelte-ap2nap">Discord server</a>.',1),Ft=S('<div class="grower svelte-ap2nap"></div>'),Lt=S('<nav class="svelte-ap2nap"><img alt="Brand" class="svelte-ap2nap"> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></nav> <section class="header svelte-ap2nap"><div class="left svelte-ap2nap"><img alt="Logo" class="logo svelte-ap2nap"> <!> <!> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div> <!></section> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <section class="svelte-ap2nap"><div class="container svelte-ap2nap"><!></div> <div class="container svelte-ap2nap"><!></div></section> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <section class="reverse svelte-ap2nap"><div class="about-team svelte-ap2nap"><!> <div class="icons svelte-ap2nap"></div></div> <div class="container svelte-ap2nap"><!></div></section> <section class="svelte-ap2nap"></section> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <section class="svelte-ap2nap"><div class="container svelte-ap2nap"><!></div> <div class="container svelte-ap2nap"><!></div></section> <section class="svelte-ap2nap"><div class="card svelte-ap2nap"><!> <!></div> <div class="card svelte-ap2nap"><!> <!></div> <div class="card svelte-ap2nap"><!> <!></div></section> <section class="svelte-ap2nap"><div class="card svelte-ap2nap"><!> <!></div> <div class="card svelte-ap2nap"><!> <!></div> <div class="card svelte-ap2nap"><!> <!></div></section> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <section class="svelte-ap2nap"><div class="contact svelte-ap2nap"><!> <!></div></section> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <footer class="svelte-ap2nap"><a href="mailto:hello@snaha.net" class="svelte-ap2nap">hello@snaha.net</a> <a class="svelte-ap2nap">Contact us</a> <a href="https://github.com/snaha" target="_blank" class="svelte-ap2nap">Github</a> <a href="https://discord.gg/rrJ3c5DmBr" class="svelte-ap2nap">Discord</a> <!> <!></footer>',1);function Qt(t,e){ma(e,!0);let a=Me(0);const r=E(()=>o(a)<920),v={Prezi:{icon:`${D}/icons/prezi.svg`,link:"https://prezi.com"},Felfele:{icon:`${D}/icons/felfele.svg`,link:"https://felfele.org"},Swarm:{icon:`${D}/icons/swarm.svg`,link:"https://www.ethswarm.org"},Logos:{icon:`${D}/icons/logos.svg`,link:"https://logos.co"},Kalkul:{icon:`${D}/icons/kalkul.svg`,link:"https://kalkul.app/"},Diete:{icon:`${D}/icons/diete.svg`,link:"https://diete.design/"}},y=[{name:"Attila",img:`${D}/team/attila.png`,info:"Attila is a full-stack engineer and engineering manager who keeps the team well-grounded in reality. Passionate about decentralized systems, cryptography, he goes out of his way to use open-source technology for everything… sometimes to the point where his audio during team calls becomes a heroic struggle. With a people-first approach to management, he knows that great tech is built by great teams."},{name:"David",img:`${D}/team/david.png`,info:"David is leading all design efforts at Snaha. He’s an advocate for purpose-driven design, products that elegantly serve people without taking centre stage. He loves solutions that use just the right amount of technology/resources and make the most out of it — maximum joy, minimum waste. He's somewhere on the line between being detail-oriented and obsessive."},{name:"Vojtech",img:`${D}/team/vojtech.png`,info:"Vojtech is full-stack software engineer with a knack for turning ideas into reality—especially when blockchain is involved. An eternal optimist, he’s the kind of developer who says, “We can build that tomorrow”—and does his best to make it happen. A lifelong dreamer, he’s driven by a desire to contribute to humanity, whether through volunteering, philanthropy, working with organizations pushing scientific progress or finding ways to make a difference in his own city."}];let u=Me(0),k=Me(0),_=E(()=>o(u)+(o(r)?16:64)<=o(k));var m=Lt(),n=pe(m),x=g(n);P(x,"src",`${D}/brand.svg`);var d=i(x,2);const w=E(()=>o(r)?"small":"compact");j(d,()=>({"--colors-ultra-high":"var(--colors-high-accent)"})),ua(d.lastChild,{get dimension(){return o(w)},href:`${D}/contact`,children:(s,p)=>{$();var c=H("CONTACT US");b(s,c)},$$slots:{default:!0}}),l(d),l(n);var h=i(n,2),W=g(h),T=g(W);P(T,"src",`${D}/logo.svg`);var f=i(T,2);{var A=s=>{var p=St();P(p,"src",`${D}/header-img.svg`),b(s,p)};ve(f,s=>{o(r)&&s(A)})}var V=i(f,2);const N=E(()=>o(r)?"default":"h3");C(V,{get variant(){return o(N)},class:"normal block",children:(s,p)=>{var c=Et();$(),b(s,c)},$$slots:{default:!0}});var z=i(V,2);const ne=E(()=>o(r)?"compact":"large");j(z,()=>({"--colors-ultra-high":"var(--colors-high-accent)"})),ua(z.lastChild,{get dimension(){return o(ne)},href:`${D}/contact`,children:(s,p)=>{$();var c=H("CONTACT US");b(s,c)},$$slots:{default:!0}}),l(z),l(W);var Q=i(W,2);{var Z=s=>{var p=Wt();P(p,"src",`${D}/header-img.svg`),b(s,p)};ve(Q,s=>{o(r)||s(Z)})}l(h);var K=i(h,2);j(K,()=>({"--double-padding":"0"})),se(K.lastChild,{}),l(K);var ee=i(K,2),fe=g(ee),xa=g(fe);const $a=E(()=>!o(r));I(xa,{text:"human- friendly web",color:"accent",get large(){return o($a)}}),l(fe);var Le=i(fe,2),Aa=g(Le);const Pa=E(()=>o(r)?"default":"large");C(Aa,{get variant(){return o(Pa)},children:(s,p)=>{$();var c=zt();$(3),b(s,c)},$$slots:{default:!0}}),l(Le),l(ee);var ie=i(ee,2);j(ie,()=>({"--double-padding":"0"})),se(ie.lastChild,{}),l(ie);var ge=i(ie,2),_e=g(ge),Oe=g(_e);const Da=E(()=>o(r)?"default":"large");C(Oe,{get variant(){return o(Da)},class:"block",children:(s,p)=>{$();var c=Ht(),M=i(pe(c)),q=i(M,2),F=i(q,2),G=i(F,2),Te=i(G,2),ce=i(Te,2);$(),B(()=>{P(M,"href",v.Prezi.link),P(q,"href",v.Felfele.link),P(F,"href",v.Swarm.link),P(G,"href",v.Logos.link),P(Te,"href",v.Kalkul.link),P(ce,"href",v.Diete.link)}),b(s,c)},$$slots:{default:!0}});var Re=i(Oe,2);Ne(Re,21,()=>Object.entries(v),Be,(s,p)=>{let c=()=>o(p)[0],M=()=>o(p)[1].icon,q=()=>o(p)[1].link;var F=Mt(),G=g(F);l(F),B(()=>{P(F,"href",q()),P(G,"src",M()),P(G,"alt",c())}),b(s,F)}),l(Re),l(_e);var Ve=i(_e,2),Ta=g(Ve);const Ca=E(()=>!o(r));I(Ta,{text:"our core team",color:"accent",get large(){return o(Ca)}}),l(Ve),l(ge);var me=i(ge,2);Ne(me,21,()=>y,Be,(s,p)=>{var c=It(),M=g(c),q=i(M,2);I(q,{get text(){return o(p).name}});var F=i(q,2);C(F,{children:(G,Te)=>{$();var ce=H();B(()=>Ie(ce,o(p).info)),b(G,ce)},$$slots:{default:!0}}),l(c),B(()=>{P(M,"src",o(p).img),P(M,"alt",o(p).name)}),b(s,c)}),l(me);var oe=i(me,2);j(oe,()=>({"--double-padding":"0"})),se(oe.lastChild,{}),l(oe);var be=i(oe,2),we=g(be),Sa=g(we);const Ea=E(()=>!o(r));I(Sa,{text:"connect the dots",color:"accent",get large(){return o(Ea)}}),l(we);var qe=i(we,2),Wa=g(qe);const za=E(()=>o(r)?"default":"large");C(Wa,{get variant(){return o(za)},children:(s,p)=>{$();var c=Bt();$(3),b(s,c)},$$slots:{default:!0}}),l(qe),l(be);var ye=i(be,2),ke=g(ye),Ge=g(ke);I(Ge,{text:"Design"});var Ha=i(Ge,2);C(Ha,{children:(s,p)=>{$();var c=H(`We can help from defining the product scope and features all the way to the finest execution
			details. We typically use Diète, our own open-source design system, which can be customised
			into a unique visual direction. This allows us to move faster while ensuring quality and the
			highest accessibility standards.`);b(s,c)},$$slots:{default:!0}}),l(ke);var xe=i(ke,2),je=g(xe);I(je,{text:"Frontend"});var Ma=i(je,2);C(Ma,{children:(s,p)=>{$();var c=H(`We build fast, maintainable, and accessible user interfaces using Svelte. Its modern, reactive
			approach allows us to write less code while achieving high performance. We focus on delivering
			smooth interactions, quick load times, and a seamless experience across all devices.`);b(s,c)},$$slots:{default:!0}}),l(xe);var Ue=i(xe,2),Ye=g(Ue);I(Ye,{text:"Backend"});var Ia=i(Ye,2);C(Ia,{children:(s,p)=>{$();var c=H(`We develop backend systems that serve as a strong foundation for applications. This includes
			APIs for handling business logic, database management for storing and retrieving data
			efficiently, and authentication to ensure security. We prioritize scalability and
			maintainability while keeping things as simple as possible.`);b(s,c)},$$slots:{default:!0}}),l(Ue),l(ye);var $e=i(ye,2),Ae=g($e),Je=g(Ae);I(Je,{text:"Branding"});var Ba=i(Je,2);C(Ba,{children:(s,p)=>{$();var c=H(`Meaningful branding will help make your product stand out. We believe that there should be a
			strong connection between the product and the brand. Based on product design, we can help with
			defining a minimal brand concept and strategy, designing your product logo and actionable
			branding guidelines to build websites, marketing material and more.`);b(s,c)},$$slots:{default:!0}}),l(Ae);var Pe=i(Ae,2),Ke=g(Pe);I(Ke,{text:"Marketing"});var Na=i(Ke,2);C(Na,{children:(s,p)=>{$();var c=H(`Great design, code and branding are rarely enough to make a product successful. We can help
			crafting tailored marketing strategies and creative campaigns to reach the strategic audience
			for your product. We can help with writing content in line with your brand’s tone of voice and
			create all the required visual material to support marketing campaigns.`);b(s,c)},$$slots:{default:!0}}),l(Pe);var Xe=i(Pe,2),Qe=g(Xe);I(Qe,{text:"DevOps"});var Fa=i(Qe,2);C(Fa,{children:(s,p)=>{$();var c=H(`Successful products stand and fall with availability. A great user experience means nothing if
			your product is unreliable. We ensure that deployments are automated, infrastructure is
			scalable, and monitoring is in place to catch issues before they become problems. As they say,
			"Good infrastructure is invisible"—our goal is to make sure everything runs smoothly without
			anyone noticing.`);b(s,c)},$$slots:{default:!0}}),l(Xe),l($e);var le=i($e,2);j(le,()=>({"--double-padding":"0"})),se(le.lastChild,{}),l(le);var De=i(le,2),Ze=g(De),ea=g(Ze);const La=E(()=>o(r)?"default":"large");C(ea,{get variant(){return o(La)},class:"high",children:(s,p)=>{$();var c=H("Something to discuss?");b(s,c)},$$slots:{default:!0}});var Oa=i(ea,2);const Ra=E(()=>o(r)?"default":"h3");C(Oa,{get variant(){return o(Ra)},class:"normal block",children:(s,p)=>{$();var c=Nt();$(4),b(s,c)},$$slots:{default:!0}}),l(Ze),l(De);var de=i(De,2);j(de,()=>({"--double-padding":"0"})),se(de.lastChild,{}),l(de);var aa=i(de,2),ta=i(g(aa),2);P(ta,"href",`${D}/contact`);var sa=i(ta,6);{var Va=s=>{var p=Ft();b(s,p)};ve(sa,s=>{o(r)||s(Va)})}var qa=i(sa,2);C(qa,{class:"high end",children:(s,p)=>{$();var c=H();B(M=>Ie(c,M),[()=>new Date().getFullYear()]),b(s,c)},$$slots:{default:!0}}),l(aa),B(()=>Y(n,"navShown",o(_))),_t("innerWidth",s=>He(a,va(s))),mt("y",()=>o(k),s=>He(k,va(s))),Pt(h,"clientHeight",s=>He(u,s)),b(t,m),ba()}export{Qt as component};
