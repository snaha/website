var Ga=Object.defineProperty;var ra=t=>{throw TypeError(t)};var ja=(t,e,a)=>e in t?Ga(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var na=(t,e,a)=>ja(t,typeof e!="symbol"?e+"":e,a),De=(t,e,a)=>e.has(t)||ra("Cannot "+a);var L=(t,e,a)=>(De(t,e,"read from private field"),a?a.call(t):e.get(t)),ae=(t,e,a)=>e.has(t)?ra("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),Se=(t,e,a,r)=>(De(t,e,"write to private field"),r?r.call(t,a):e.set(t,a),a),ia=(t,e,a)=>(De(t,e,"access private method"),a);import{t as S,a as y,d as la,b as H}from"../chunks/DdMubMdz.js";import{ah as Ua,b as Ya,s as Ee,h as U,a7 as Ka,f as Ja,z as l,T as Xa,H as Qa,g as oa,i as We,c as te,ab as Za,j as ga,a as pa,p as et,as as ze,af as ma,M as da,at,$ as tt,J as ca,P as st,au as rt,av as nt,ae as it,aw as lt,d as ot,ax as dt,ay as ct,a9 as vt,e as ut,u as ht,w as N,y as p,az as ft,t as ue,C as o,o as _a,x as ya,v as i,D as $,A as E,F as He,B as Me}from"../chunks/DYWgC3AC.js";import{s as Ie}from"../chunks/Bqo-UNf_.js";import{i as ve}from"../chunks/DZxSGmZu.js";import{e as gt,a as pt,t as Y,d as ba,s as P,c as j,T as D,D as se,b as mt,f as _t}from"../chunks/Bh06FKS9.js";import{a as K,r as yt,p as va}from"../chunks/BPp7cRjZ.js";import{s as bt}from"../chunks/DfzugRC8.js";import{b as ua}from"../chunks/C3xiZ-0y.js";import{o as wt}from"../chunks/C2yNY7is.js";import{b as T}from"../chunks/ClRE_ZrT.js";function Ne(t,e){return e}function kt(t,e,a,r){for(var v=[],w=e.length,f=0;f<w;f++)nt(e[f].e,v,!0);var k=w>0&&v.length===0&&a!==null;if(k){var m=a.parentNode;it(m),m.append(a),r.clear(),O(t,e[0].prev,e[w-1].next)}lt(v,()=>{for(var _=0;_<w;_++){var n=e[_];k||(r.delete(n.k),O(t,n.prev,n.next)),ot(n.e,!k)}})}function Be(t,e,a,r,v,w=null){var f=t,k={flags:e,items:new Map,first:null};{var m=t;f=U?Ee(Ka(m)):m.appendChild(Ua())}U&&Ja();var _=null,n=!1,x=Xa(()=>{var d=a();return st(d)?d:d==null?[]:ma(d)});Ya(()=>{var d=l(x),b=d.length;if(n&&b===0)return;n=b===0;let h=!1;if(U){var W=f.data===Qa;W!==(b===0)&&(f=oa(),Ee(f),We(!1),h=!0)}if(U){for(var C=null,g,A=0;A<b;A++){if(te.nodeType===8&&te.data===Za){f=te,h=!0,We(!1);break}var V=d[A],B=r(V,A);g=wa(te,k,C,null,V,B,A,v,e,a),k.items.set(B,g),C=g}b>0&&Ee(oa())}U||xt(d,k,f,v,e,r,a),w!==null&&(b===0?_?ga(_):_=pa(()=>w(f)):_!==null&&et(_,()=>{_=null})),h&&We(!0),l(x)}),U&&(f=te)}function xt(t,e,a,r,v,w,f){var k=t.length,m=e.items,_=e.first,n=_,x,d=null,b=[],h=[],W,C,g,A;for(A=0;A<k;A+=1){if(W=t[A],C=w(W,A),g=m.get(C),g===void 0){var V=n?n.e.nodes_start:a;d=wa(V,e,d,d===null?e.first:d.next,W,C,A,r,v,f),m.set(C,d),b=[],h=[],n=d.next;continue}if($t(g,W,A),g.e.f&ze&&ga(g.e),g!==n){if(x!==void 0&&x.has(g)){if(b.length<h.length){var B=h[0],z;d=B.prev;var ne=b[0],Q=b[b.length-1];for(z=0;z<b.length;z+=1)ha(b[z],B,a);for(z=0;z<h.length;z+=1)x.delete(h[z]);O(e,ne.prev,Q.next),O(e,d,ne),O(e,Q,B),n=B,d=Q,A-=1,b=[],h=[]}else x.delete(g),ha(g,n,a),O(e,g.prev,g.next),O(e,g,d===null?e.first:d.next),O(e,d,g),d=g;continue}for(b=[],h=[];n!==null&&n.k!==C;)n.e.f&ze||(x??(x=new Set)).add(n),h.push(n),n=n.next;if(n===null)continue;g=n}b.push(g),d=g,n=g.next}if(n!==null||x!==void 0){for(var Z=x===void 0?[]:ma(x);n!==null;)n.e.f&ze||Z.push(n),n=n.next;var J=Z.length;if(J>0){var ee=k===0?a:null;kt(e,Z,ee,m)}}da.first=e.first&&e.first.e,da.last=d&&d.e}function $t(t,e,a,r){at(t.v,e),t.i=a}function wa(t,e,a,r,v,w,f,k,m,_){var n=(m&dt)!==0,x=(m&ct)===0,d=n?x?tt(v):ca(v):v,b=m&rt?ca(f):f,h={i:b,v:d,k:w,a:null,e:null,prev:a,next:r};try{return h.e=pa(()=>k(t,d,b,_),U),h.e.prev=a&&a.e,h.e.next=r&&r.e,a===null?e.first=h:(a.next=h,a.e.next=h.e),r!==null&&(r.prev=h,r.e.prev=h.e),h}finally{}}function ha(t,e,a){for(var r=t.next?t.next.e.nodes_start:a,v=e?e.e.nodes_start:a,w=t.e.nodes_start;w!==r;){var f=vt(w);v.before(w),w=f}}function O(t,e,a){e===null?t.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}var R,X,re,he,ka;const fe=class fe{constructor(e){ae(this,he);ae(this,R,new WeakMap);ae(this,X);ae(this,re);Se(this,re,e)}observe(e,a){var r=L(this,R).get(e)||new Set;return r.add(a),L(this,R).set(e,r),ia(this,he,ka).call(this).observe(e,L(this,re)),()=>{var v=L(this,R).get(e);v.delete(a),v.size===0&&(L(this,R).delete(e),L(this,X).unobserve(e))}}};R=new WeakMap,X=new WeakMap,re=new WeakMap,he=new WeakSet,ka=function(){return L(this,X)??Se(this,X,new ResizeObserver(e=>{for(var a of e){fe.entries.set(a.target,a);for(var r of L(this,R).get(a.target)||[])r(a)}}))},na(fe,"entries",new WeakMap);let Fe=fe;var At=new Fe({box:"border-box"});function Pt(t,e,a){var r=At.observe(t,()=>a(t[e]));ut(()=>(ht(()=>a(t[e])),r))}var Tt=S("<span><!></span>");function fa(t,e){let a=K(e,"dimension",3,"default"),r=K(e,"variant",3,"strong"),v=K(e,"class",3,""),w=K(e,"leftAlign",3,!1),f=K(e,"mode",3,"auto"),k=yt(e,["$$slots","$$events","$$legacy","dimension","variant","active","hover","focus","disabled","href","class","leftAlign","children","mode"]);var m=Tt(),_=p(m);gt(_,()=>e.href?"a":"button",!1,(n,x)=>{let d;N(()=>{d=pt(n,d,{class:`${a()} ${r()} ${f()}`,href:e.href,disabled:e.disabled,...k},"svelte-1hblcdw",n.namespaceURI===ft,n.nodeName.includes("-")),Y(n,"leftAlign",w()),Y(n,"active",e.active),Y(n,"hover",e.hover),Y(n,"focus",e.focus)});var b=la(),h=ue(b);{var W=C=>{var g=la(),A=ue(g);bt(A,()=>e.children),y(C,g)};ve(h,C=>{e.children&&C(W)})}y(x,b)}),o(m),N(()=>{ba(m,`${`root ${v()}`??""} svelte-1hblcdw`),Y(m,"disabled",e.disabled)}),y(t,m)}var Ct=S("<span> </span>"),Dt=S('<div class="root svelte-1060s2a"><div></div></div>');function I(t,e){_a(e,!0);let a=K(e,"color",3,"top"),r=K(e,"large",3,!1),v,w;function f(){const _=w.getBoundingClientRect();v.style.height=`${_.height}px`}wt(()=>(window.addEventListener("resize",f),f(),()=>window.removeEventListener("resize",f)));var k=Dt(),m=p(k);Be(m,21,()=>e.text.split(" "),Ne,(_,n)=>{var x=Ct(),d=p(x,!0);o(x),N(()=>Ie(d,l(n))),y(_,x)}),o(m),ua(m,_=>w=_,()=>w),o(k),ua(k,_=>v=_,()=>v),N(()=>{ba(m,`wrapper ${a()??""} svelte-1060s2a`),Y(m,"large",r())}),y(t,k),ya()}var St=S('<img alt="Header" class="svelte-7m7ly3">'),Et=S('<span class="yellow">We turn worthy ideas into products.</span> Snaha is a product makers collective geared towards making the web a bit better for hoomans.',1),Wt=S('<img alt="Header" class="svelte-7m7ly3">'),zt=S(`We’re a small and independent OG team defending privacy, freedom and more generally, human
			interests in software products.<br><br>We build for the web — websites, web applications,
			web3 dapps & other crypto-related projects.`,1),Ht=S(`Attila and David met back in 2012, while working together at <a target="_blank" class="svelte-7m7ly3">Prezi</a>. In 2019, they co-founded the <a target="_blank" class="svelte-7m7ly3">Felfele Foundation</a>. Shortly after that,
			they met with Vojtech while working with the <a target="_blank" class="svelte-7m7ly3">Swarm Foundation</a>. Since then Attila, David
			and Vojtech have stuck together. They’ve worked with different teams at <a target="_blank" class="svelte-7m7ly3">Logos</a> and co-founded Snaha collective together. Besides helping selected clients, Snaha is bootstrapping <a target="_blank" class="svelte-7m7ly3">Kalkul</a> and developing <a target="_blank" class="svelte-7m7ly3">Diète</a>, its own open-source design system.`,1),Mt=S('<a target="_blank" class="svelte-7m7ly3"><img class="svelte-7m7ly3"></a>'),It=S('<div class="card svelte-7m7ly3"><img class="svelte-7m7ly3"> <!> <!></div>'),Nt=S(`Successful products result from a delicate assembly of widely different skillsets. Magic
			happens precisely within the in-betweens.<br><br> Our team covers the full spectrum and has
			refined a subtle alchemy in working together — efficiently binding our diverse competences to deliver
			high-quality, seamless products.`,1),Bt=S('Drop us an email at <a href="mailto:hello@snaha.net" class="svelte-7m7ly3">hello@snaha.net</a> or join our <a href="/" class="svelte-7m7ly3">Discord server</a>.',1),Ft=S('<div class="grower svelte-7m7ly3"></div>'),Lt=S('<nav class="svelte-7m7ly3"><img alt="Brand" class="svelte-7m7ly3"> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></nav> <section class="header svelte-7m7ly3"><div class="left svelte-7m7ly3"><img alt="Logo" class="logo svelte-7m7ly3"> <!> <!> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div> <!></section> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <section class="svelte-7m7ly3"><div class="container svelte-7m7ly3"><!></div> <div class="container svelte-7m7ly3"><!></div></section> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <section class="reverse svelte-7m7ly3"><div class="about-team svelte-7m7ly3"><!> <div class="icons svelte-7m7ly3"></div></div> <div class="container svelte-7m7ly3"><!></div></section> <section class="svelte-7m7ly3"></section> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <section class="svelte-7m7ly3"><div class="container svelte-7m7ly3"><!></div> <div class="container svelte-7m7ly3"><!></div></section> <section class="svelte-7m7ly3"><div class="card svelte-7m7ly3"><!> <!></div> <div class="card svelte-7m7ly3"><!> <!></div> <div class="card svelte-7m7ly3"><!> <!></div></section> <section class="svelte-7m7ly3"><div class="card svelte-7m7ly3"><!> <!></div> <div class="card svelte-7m7ly3"><!> <!></div> <div class="card svelte-7m7ly3"><!> <!></div></section> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <section class="svelte-7m7ly3"><div class="contact svelte-7m7ly3"><!> <!></div></section> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <footer class="svelte-7m7ly3"><span class="svelte-7m7ly3">hello@snaha.net</span> <a class="svelte-7m7ly3">Contact us</a> <a href="https://github.com/snaha" target="_blank" class="svelte-7m7ly3">Github</a> <a href="/" class="svelte-7m7ly3">Discord</a> <!> <!></footer>',1);function Qt(t,e){_a(e,!0);let a=Me(0);const r=E(()=>l(a)<920),v={Prezi:{icon:`${T}/icons/prezi.svg`,link:"https://prezi.com"},Felfele:{icon:`${T}/icons/felfele.svg`,link:"https://felfele.org"},Swarm:{icon:`${T}/icons/swarm.svg`,link:"https://www.ethswarm.org"},Logos:{icon:`${T}/icons/logos.svg`,link:"https://logos.co"},Kalkul:{icon:`${T}/icons/kalkul.svg`,link:"https://kalkul.app/"},Diete:{icon:`${T}/icons/diete.svg`,link:"https://diete.design/"}},w=[{name:"Attila",img:`${T}/team/attila.png`,info:"Attila is a full-stack engineer and engineering manager who keeps the team well-grounded in reality. Passionate about decentralized systems, cryptography, he goes out of his way to use open-source technology for everything… sometimes to the point where his audio during team calls becomes a heroic struggle. With a people-first approach to management, he knows that great tech is built by great teams."},{name:"David",img:`${T}/team/david.png`,info:"David is leading all design efforts at Snaha. He’s an advocate for purpose-driven design, products that elegantly serve people without taking centre stage. He loves solutions that use just the right amount of technology/resources and make the most out of it — maximum joy, minimum waste. He's somewhere on the line between being detail-oriented and obsessive."},{name:"Vojtech",img:`${T}/team/vojtech.png`,info:"Vojtech is full-stack software engineer with a knack for turning ideas into reality—especially when blockchain is involved. An eternal optimist, he’s the kind of developer who says, “We can build that tomorrow”—and does his best to make it happen. A lifelong dreamer, he’s driven by a desire to contribute to humanity, whether through volunteering, philanthropy, working with organizations pushing scientific progress or finding ways to make a difference in his own city."}];let f=Me(0),k=Me(0),m=E(()=>l(f)+(l(r)?16:64)<=l(k));var _=Lt(),n=ue(_),x=p(n);P(x,"src",`${T}/brand.svg`);var d=i(x,2);const b=E(()=>l(r)?"small":"compact");j(d,()=>({"--colors-ultra-high":"var(--colors-high-accent)"})),fa(d.lastChild,{get dimension(){return l(b)},href:`${T}/contact`,children:(s,u)=>{$();var c=H("CONTACT US");y(s,c)},$$slots:{default:!0}}),o(d),o(n);var h=i(n,2),W=p(h),C=p(W);P(C,"src",`${T}/logo.svg`);var g=i(C,2);{var A=s=>{var u=St();P(u,"src",`${T}/header-img.png`),y(s,u)};ve(g,s=>{l(r)&&s(A)})}var V=i(g,2);const B=E(()=>l(r)?"default":"h3");D(V,{get variant(){return l(B)},class:"normal block",children:(s,u)=>{var c=Et();$(),y(s,c)},$$slots:{default:!0}});var z=i(V,2);const ne=E(()=>l(r)?"compact":"large");j(z,()=>({"--colors-ultra-high":"var(--colors-high-accent)"})),fa(z.lastChild,{get dimension(){return l(ne)},href:`${T}/contact`,children:(s,u)=>{$();var c=H("CONTACT US");y(s,c)},$$slots:{default:!0}}),o(z),o(W);var Q=i(W,2);{var Z=s=>{var u=Wt();P(u,"src",`${T}/header-img.png`),y(s,u)};ve(Q,s=>{l(r)||s(Z)})}o(h);var J=i(h,2);j(J,()=>({"--double-padding":"0"})),se(J.lastChild,{}),o(J);var ee=i(J,2),ge=p(ee),xa=p(ge);const $a=E(()=>!l(r));I(xa,{text:"human- friendly web",color:"accent",get large(){return l($a)}}),o(ge);var Le=i(ge,2),Aa=p(Le);const Pa=E(()=>l(r)?"default":"large");D(Aa,{get variant(){return l(Pa)},children:(s,u)=>{$();var c=zt();$(3),y(s,c)},$$slots:{default:!0}}),o(Le),o(ee);var ie=i(ee,2);j(ie,()=>({"--double-padding":"0"})),se(ie.lastChild,{}),o(ie);var pe=i(ie,2),me=p(pe),Oe=p(me);const Ta=E(()=>l(r)?"default":"large");D(Oe,{get variant(){return l(Ta)},class:"block",children:(s,u)=>{$();var c=Ht(),M=i(ue(c)),q=i(M,2),F=i(q,2),G=i(F,2),Ce=i(G,2),ce=i(Ce,2);$(),N(()=>{P(M,"href",v.Prezi.link),P(q,"href",v.Felfele.link),P(F,"href",v.Swarm.link),P(G,"href",v.Logos.link),P(Ce,"href",v.Kalkul.link),P(ce,"href",v.Diete.link)}),y(s,c)},$$slots:{default:!0}});var Re=i(Oe,2);Be(Re,21,()=>Object.entries(v),Ne,(s,u)=>{let c=()=>l(u)[0],M=()=>l(u)[1].icon,q=()=>l(u)[1].link;var F=Mt(),G=p(F);o(F),N(()=>{P(F,"href",q()),P(G,"src",M()),P(G,"alt",c())}),y(s,F)}),o(Re),o(me);var Ve=i(me,2),Ca=p(Ve);const Da=E(()=>!l(r));I(Ca,{text:"our core team",color:"accent",get large(){return l(Da)}}),o(Ve),o(pe);var _e=i(pe,2);Be(_e,21,()=>w,Ne,(s,u)=>{var c=It(),M=p(c),q=i(M,2);I(q,{get text(){return l(u).name}});var F=i(q,2);D(F,{children:(G,Ce)=>{$();var ce=H();N(()=>Ie(ce,l(u).info)),y(G,ce)},$$slots:{default:!0}}),o(c),N(()=>{P(M,"src",l(u).img),P(M,"alt",l(u).name)}),y(s,c)}),o(_e);var le=i(_e,2);j(le,()=>({"--double-padding":"0"})),se(le.lastChild,{}),o(le);var ye=i(le,2),be=p(ye),Sa=p(be);const Ea=E(()=>!l(r));I(Sa,{text:"connect the dots",color:"accent",get large(){return l(Ea)}}),o(be);var qe=i(be,2),Wa=p(qe);const za=E(()=>l(r)?"default":"large");D(Wa,{get variant(){return l(za)},children:(s,u)=>{$();var c=Nt();$(3),y(s,c)},$$slots:{default:!0}}),o(qe),o(ye);var we=i(ye,2),ke=p(we),Ge=p(ke);I(Ge,{text:"Design"});var Ha=i(Ge,2);D(Ha,{children:(s,u)=>{$();var c=H(`We can help from defining the product scope and features all the way to the finest execution
			details. We typically use Diète, our own open-source design system, which can be customised
			into a unique visual direction. This allows us to move faster while ensuring quality and the
			highest accessibility standards.`);y(s,c)},$$slots:{default:!0}}),o(ke);var xe=i(ke,2),je=p(xe);I(je,{text:"Frontend"});var Ma=i(je,2);D(Ma,{children:(s,u)=>{$();var c=H(`We build fast, maintainable, and accessible user interfaces using Svelte. Its modern, reactive
			approach allows us to write less code while achieving high performance. We focus on delivering
			smooth interactions, quick load times, and a seamless experience across all devices.`);y(s,c)},$$slots:{default:!0}}),o(xe);var Ue=i(xe,2),Ye=p(Ue);I(Ye,{text:"Backend"});var Ia=i(Ye,2);D(Ia,{children:(s,u)=>{$();var c=H(`We develop backend systems that serve as a strong foundation for applications. This includes
			APIs for handling business logic, database management for storing and retrieving data
			efficiently, and authentication to ensure security. We prioritize scalability and
			maintainability while keeping things as simple as possible.`);y(s,c)},$$slots:{default:!0}}),o(Ue),o(we);var $e=i(we,2),Ae=p($e),Ke=p(Ae);I(Ke,{text:"Branding"});var Na=i(Ke,2);D(Na,{children:(s,u)=>{$();var c=H(`Meaningful branding will help make your product stand out. We believe that there should be a
			strong connection between the product and the brand. Based on product design, we can help with
			defining a minimal brand concept and strategy, designing your product logo and actionable
			branding guidelines to build websites, marketing material and more.`);y(s,c)},$$slots:{default:!0}}),o(Ae);var Pe=i(Ae,2),Je=p(Pe);I(Je,{text:"Marketing"});var Ba=i(Je,2);D(Ba,{children:(s,u)=>{$();var c=H(`Great design, code and branding are rarely enough to make a product successful. We can help
			crafting tailored marketing strategies and creative campaigns to reach the strategic audience
			for your product. We can help with writing content in line with your brand’s tone of voice and
			create all the required visual material to support marketing campaigns.`);y(s,c)},$$slots:{default:!0}}),o(Pe);var Xe=i(Pe,2),Qe=p(Xe);I(Qe,{text:"DevOps"});var Fa=i(Qe,2);D(Fa,{children:(s,u)=>{$();var c=H(`Successful products stand and fall with availability. A great user experience means nothing if
			your product is unreliable. We ensure that deployments are automated, infrastructure is
			scalable, and monitoring is in place to catch issues before they become problems. As they say,
			"Good infrastructure is invisible"—our goal is to make sure everything runs smoothly without
			anyone noticing.`);y(s,c)},$$slots:{default:!0}}),o(Xe),o($e);var oe=i($e,2);j(oe,()=>({"--double-padding":"0"})),se(oe.lastChild,{}),o(oe);var Te=i(oe,2),Ze=p(Te),ea=p(Ze);const La=E(()=>l(r)?"default":"large");D(ea,{get variant(){return l(La)},class:"high",children:(s,u)=>{$();var c=H("Something to discuss?");y(s,c)},$$slots:{default:!0}});var Oa=i(ea,2);const Ra=E(()=>l(r)?"default":"h3");D(Oa,{get variant(){return l(Ra)},class:"normal block",children:(s,u)=>{$();var c=Bt();$(4),y(s,c)},$$slots:{default:!0}}),o(Ze),o(Te);var de=i(Te,2);j(de,()=>({"--double-padding":"0"})),se(de.lastChild,{}),o(de);var aa=i(de,2),ta=i(p(aa),2);P(ta,"href",`${T}/contact`);var sa=i(ta,6);{var Va=s=>{var u=Ft();y(s,u)};ve(sa,s=>{l(r)||s(Va)})}var qa=i(sa,2);D(qa,{class:"high end",children:(s,u)=>{$();var c=H();N(M=>Ie(c,M),[()=>new Date().getFullYear()]),y(s,c)},$$slots:{default:!0}}),o(aa),N(()=>Y(n,"navShown",l(m))),mt("innerWidth",s=>He(a,va(s))),_t("y",()=>l(k),s=>He(k,va(s))),Pt(h,"clientHeight",s=>He(f,s)),y(t,_),ya()}export{Qt as component};
