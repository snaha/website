import{a as Sa,t as I,b as w,c as ee,d as V}from"../chunks/D1z4n4pz.js";import{W as Da,an as Ia,O as Oa,h as E,s as J,Y as Ne,a6 as aa,b as ta,e as we,t as p,D as La,H as Ma,r as Je,f as U,c as W,a0 as Ra,g as Ee,a as Te,p as sa,ar as xe,a4 as ra,x as ze,as as Ha,M as Va,m as Qe,A as Ba,at as Fa,au as Xa,a3 as Ka,av as Wa,d as na,aw as Ya,ax as Ga,_ as Ua,E as qa,ay as Ce,z as ja,az as Ja,aA as Qa,ak as F,ac as P,ae as q,ad as _,a7 as ia,a8 as la,al as d,C as H,aB as S,ap as Za,v as et}from"../chunks/Bkk4yaoW.js";import{i as at,a as tt,c as st,d as rt,n as nt,b as it,l as lt,w as ot,s as Ae}from"../chunks/Dxw-noyP.js";import{i as ae}from"../chunks/DobYJpiA.js";import{p as D,r as Se,a as ct}from"../chunks/BChPd_yH.js";import{s as oa}from"../chunks/Bd-YjjjO.js";import{b as M}from"../chunks/BcAcyR-r.js";function dt(a,e){if(e){const t=document.body;a.autofocus=!0,Da(()=>{document.activeElement===t&&a.focus()})}}function j(a,e){E&&J(Ne(a)),Ia(()=>{var t=e();for(var s in t){var r=t[s];r?a.style.setProperty(s,r):a.style.removeProperty(s)}}),Oa(()=>{a.remove()})}function $e(a,e){return e}function vt(a,e,t,s){for(var r=[],u=e.length,b=0;b<u;b++)Xa(e[b].e,r,!0);var k=u>0&&r.length===0&&t!==null;if(k){var c=t.parentNode;Ka(c),c.append(t),s.clear(),K(a,e[0].prev,e[u-1].next)}Wa(r,()=>{for(var f=0;f<u;f++){var i=e[f];k||(s.delete(i.k),K(a,i.prev,i.next)),na(i.e,!k)}})}function Pe(a,e,t,s,r,u=null){var b=a,k={flags:e,items:new Map,first:null};{var c=a;b=E?J(Ne(c)):c.appendChild(aa())}E&&we();var f=null,i=!1,z=La(()=>{var n=t();return Ba(n)?n:n==null?[]:ra(n)});ta(()=>{var n=p(z),g=n.length;if(i&&g===0)return;i=g===0;let h=!1;if(E){var T=b.data===Ma;T!==(g===0)&&(b=Je(),J(b),U(!1),h=!0)}if(E){for(var A=null,m,o=0;o<g;o++){if(W.nodeType===8&&W.data===Ra){b=W,h=!0,U(!1);break}var y=n[o],$=s(y,o);m=ca(W,k,A,null,y,$,o,r,e,t),k.items.set($,m),A=m}g>0&&J(Je())}E||ft(n,k,b,r,e,s,t),u!==null&&(g===0?f?Ee(f):f=Te(()=>u(b)):f!==null&&sa(f,()=>{f=null})),h&&U(!0),p(z)}),E&&(b=W)}function ft(a,e,t,s,r,u,b){var k=a.length,c=e.items,f=e.first,i=f,z,n=null,g=[],h=[],T,A,m,o;for(o=0;o<k;o+=1){if(T=a[o],A=u(T,o),m=c.get(A),m===void 0){var y=i?i.e.nodes_start:t;n=ca(y,e,n,n===null?e.first:n.next,T,A,o,s,r,b),c.set(A,n),g=[],h=[],i=n.next;continue}if(ut(m,T,o),m.e.f&xe&&Ee(m.e),m!==i){if(z!==void 0&&z.has(m)){if(g.length<h.length){var $=h[0],C;n=$.prev;var N=g[0],G=g[g.length-1];for(C=0;C<g.length;C+=1)Ze(g[C],$,t);for(C=0;C<h.length;C+=1)z.delete(h[C]);K(e,N.prev,G.next),K(e,n,N),K(e,G,$),i=$,n=G,o-=1,g=[],h=[]}else z.delete(m),Ze(m,i,t),K(e,m.prev,m.next),K(e,m,n===null?e.first:n.next),K(e,n,m),n=m;continue}for(g=[],h=[];i!==null&&i.k!==A;)i.e.f&xe||(z??(z=new Set)).add(i),h.push(i),i=i.next;if(i===null)continue;m=i}g.push(m),n=m,i=m.next}if(i!==null||z!==void 0){for(var X=z===void 0?[]:ra(z);i!==null;)i.e.f&xe||X.push(i),i=i.next;var le=X.length;if(le>0){var oe=k===0?t:null;vt(e,X,oe,c)}}ze.first=e.first&&e.first.e,ze.last=n&&n.e}function ut(a,e,t,s){Ha(a.v,e),a.i=t}function ca(a,e,t,s,r,u,b,k,c,f){var i=(c&Ya)!==0,z=(c&Ga)===0,n=i?z?Va(r):Qe(r):r,g=c&Fa?Qe(b):b,h={i:g,v:n,k:u,a:null,e:null,prev:t,next:s};try{return h.e=Te(()=>k(a,n,g,f),E),h.e.prev=t&&t.e,h.e.next=s&&s.e,t===null?e.first=h:(t.next=h,t.e.next=h.e),s!==null&&(s.prev=h,s.e.prev=h.e),h}finally{}}function Ze(a,e,t){for(var s=a.next?a.next.e.nodes_start:t,r=e?e.e.nodes_start:t,u=a.e.nodes_start;u!==s;){var b=Ua(u);r.before(u),u=b}}function K(a,e,t){e===null?a.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function da(a,e,t,s,r,u){let b=E;E&&we();var k,c,f=null;E&&W.nodeType===1&&(f=W,we());var i=E?W:a,z;ta(()=>{const n=e()||null;var g=n==="svg"?Ce:null;n!==k&&(z&&(n===null?sa(z,()=>{z=null,c=null}):n===c?Ee(z):na(z)),n&&n!==c&&(z=Te(()=>{if(f=E?f:g?document.createElementNS(g,n):document.createElement(n),Sa(f,f),s){E&&at(n)&&f.append(document.createComment(""));var h=E?Ne(f):f.appendChild(aa());E&&(h===null?U(!1):J(h)),s(f,h)}ze.nodes_end=f,i.before(f)})),k=n,k&&(c=k))},qa),b&&(U(!0),J(i))}function va(a){var e,t,s="";if(typeof a=="string"||typeof a=="number")s+=a;else if(typeof a=="object")if(Array.isArray(a)){var r=a.length;for(e=0;e<r;e++)a[e]&&(t=va(a[e]))&&(s&&(s+=" "),s+=t)}else for(t in a)a[t]&&(s&&(s+=" "),s+=t);return s}function ht(){for(var a,e,t=0,s="",r=arguments.length;t<r;t++)(a=arguments[t])&&(e=va(a))&&(s&&(s+=" "),s+=e);return s}function _t(a){return typeof a=="object"?ht(a):a??""}function gt(a,e){e?a.hasAttribute("selected")||a.setAttribute("selected",""):a.removeAttribute("selected")}function L(a,e,t,s){var r=a.__attributes??(a.__attributes={});E&&(r[e]=a.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&a.nodeName==="LINK")||r[e]!==(r[e]=t)&&(e==="style"&&"__styles"in a&&(a.__styles={}),e==="loading"&&(a[Qa]=t),t==null?a.removeAttribute(e):typeof t!="string"&&fa(a).includes(e)?a[e]=t:a.setAttribute(e,t))}function De(a,e,t,s,r=!1,u=!1,b=!1){let k=E&&u;k&&U(!1);var c=e||{},f=a.tagName==="OPTION";for(var i in e)i in t||(t[i]=null);t.class&&(t.class=_t(t.class)),s!==void 0&&(t.class=t.class?t.class+" "+s:s);var z=fa(a),n=a.__attributes??(a.__attributes={});for(const o in t){let y=t[o];if(f&&o==="value"&&y==null){a.value=a.__value="",c[o]=y;continue}var g=c[o];if(y!==g){c[o]=y;var h=o[0]+o[1];if(h!=="$$"){if(h==="on"){const $={},C="$$"+o;let N=o.slice(2);var T=it(N);if(tt(N)&&(N=N.slice(0,-7),$.capture=!0),!T&&g){if(y!=null)continue;a.removeEventListener(N,c[C],$),c[C]=null}if(y!=null)if(T)a[`__${N}`]=y,rt([N]);else{let G=function(X){c[o].call(this,X)};c[C]=st(N,a,G,$)}else T&&(a[`__${N}`]=void 0)}else if(o==="style"&&y!=null)a.style.cssText=y+"";else if(o==="autofocus")dt(a,!!y);else if(!u&&(o==="__value"||o==="value"&&y!=null))a.value=a.__value=y;else if(o==="selected"&&f)gt(a,y);else{var A=o;r||(A=nt(A));var m=A==="defaultValue"||A==="defaultChecked";if(y==null&&!u&&!m)if(n[o]=null,A==="value"||A==="checked"){let $=a;const C=e===void 0;if(A==="value"){let N=$.defaultValue;$.removeAttribute(A),$.defaultValue=N,$.value=$.__value=C?N:null}else{let N=$.defaultChecked;$.removeAttribute(A),$.defaultChecked=N,$.checked=C?N:!1}}else a.removeAttribute(o);else m||z.includes(A)&&(u||typeof y!="string")?a[A]=y:typeof y!="function"&&L(a,A,y)}o==="style"&&"__styles"in a&&(a.__styles={})}}}return k&&U(!0),c}var ea=new Map;function fa(a){var e=ea.get(a.nodeName);if(e)return e;ea.set(a.nodeName,e=[]);for(var t,s=a,r=Element.prototype;r!==s;){t=Ja(s);for(var u in t)t[u].set&&e.push(u);s=ja(s)}return e}function ua(a,e,t){var s=a.__className,r=pt(e);E&&a.className===r?a.__className=r:(s!==r||E&&a.className!==r)&&(e==null?a.removeAttribute("class"):a.className=r,a.__className=r)}function pt(a,e){return(a??"")+""}function Y(a,e,t){if(t){if(a.classList.contains(e))return;a.classList.add(e)}else{if(!a.classList.contains(e))return;a.classList.remove(e)}}function bt(a,e){lt(window,["resize"],()=>ot(()=>e(window[a])))}var mt=I("<span><!></span>");function kt(a,e){let t=D(e,"dimension",3,"default"),s=D(e,"variant",3,"strong"),r=D(e,"class",3,""),u=D(e,"leftAlign",3,!1),b=D(e,"mode",3,"auto"),k=Se(e,["$$slots","$$events","$$legacy","dimension","variant","active","hover","focus","disabled","href","class","leftAlign","children","mode"]);var c=mt(),f=P(c);da(f,()=>e.href?"a":"button",!1,(i,z)=>{let n;F(()=>{n=De(i,n,{class:`${t()} ${s()} ${b()}`,href:e.href,disabled:e.disabled,...k},"svelte-1hblcdw",i.namespaceURI===Ce,i.nodeName.includes("-")),Y(i,"leftAlign",u()),Y(i,"active",e.active),Y(i,"hover",e.hover),Y(i,"focus",e.focus)});var g=ee(),h=q(g);{var T=A=>{var m=ee(),o=q(m);oa(o,()=>e.children),w(A,m)};ae(h,A=>{e.children&&A(T)})}w(z,g)}),_(c),F(()=>{ua(c,`${`root ${r()}`??""} svelte-1hblcdw`),Y(c,"disabled",e.disabled)}),w(a,c)}var yt=I("<hr>");function Z(a,e){let t=D(e,"orientation",3,"horizontal"),s=D(e,"class",3,""),r=Se(e,["$$slots","$$events","$$legacy","orientation","class"]);var u=yt();let b;F(()=>b=De(u,b,{class:`${t()??""} ${s()??""}`,...r},"svelte-4zatmg")),w(a,u)}function O(a,e){function t(n){switch(n){case"h1":return"h1";case"h2":return"h2";case"h3":return"h3";case"h4":return"h4";case"h5":return"h5";case"h6":return"h6";default:return"span"}}let s=D(e,"variant",3,"default"),r=D(e,"element",19,()=>t(s())),u=D(e,"font",3,"sans"),b=D(e,"bold",3,!1),k=D(e,"italic",3,!1),c=D(e,"class",3,""),f=Se(e,["$$slots","$$events","$$legacy","variant","element","font","bold","italic","class","children"]);var i=ee(),z=q(i);da(z,r,!1,(n,g)=>{let h;F(()=>{h=De(n,h,{class:`root ${u()} ${s()} ${c()}`,...f},"svelte-1k85xwk",n.namespaceURI===Ce,n.nodeName.includes("-")),Y(n,"bold",b()),Y(n,"italic",k())});var T=ee(),A=q(T);{var m=o=>{var y=ee(),$=q(y);oa($,()=>e.children),w(o,y)};ae(A,o=>{e.children&&o(m)})}w(g,T)}),w(a,i)}var xt=I("<span> </span>"),wt=I("<div></div>");function B(a,e){ia(e,!0);let t=D(e,"color",3,"top"),s=D(e,"large",3,!1);var r=wt();Pe(r,21,()=>e.text.split(" "),$e,(u,b)=>{var k=xt(),c=P(k,!0);_(k),F(()=>Ae(c,p(b))),w(u,k)}),_(r),F(()=>{ua(r,`root ${t()??""} svelte-17p02z5`),Y(r,"large",s())}),w(a,r),la()}var zt=I('<img alt="Header" class="svelte-1dxbz0k">'),At=I('<span class="yellow">We turn worthy ideas into products.</span><br> We’re an OG team geared towards making the web a bit better for hoomans.',1),$t=I('<img alt="Header">'),Pt=I(`We’re a small and independent team defending privacy, freedom and more generally, human
			interests in software products.<br><br>We build for the web — websites, web applications,
			web3 dapps & other crypto-related projects.`,1),Nt=I(`Attila and David met back in 2012, while working together at <a class="svelte-1dxbz0k">Prezi</a>. In 2019, they co-founded the <a class="svelte-1dxbz0k">Felfele Foundation</a>. Shortly after
			that, they met with Vojtech while working with the <a class="svelte-1dxbz0k">Swarm Foundation</a>. Since them Attila, David and Vojtech have stuck
			together. They’ve worked with different teams at <a class="svelte-1dxbz0k">Logos</a> and
			co-founded Snaha together. Besides helping selected clients, Snaha is bootstrapping <a href="https://kalkul.app/" target="_blank" class="svelte-1dxbz0k">Kalkul</a> and developing <a href="https://diete.design/" target="_blank" class="svelte-1dxbz0k">Diète</a>, its own open-source design system.`,1),Et=I('<a target="_blank" class="svelte-1dxbz0k"><img class="svelte-1dxbz0k"></a>'),Tt=I('<div class="card svelte-1dxbz0k"><img class="svelte-1dxbz0k"> <!> <!></div>'),Ct=I(`Successful products result from a delicate assembly of widely different skillsets. Magic
			happens precisely within the in-betweens.<br><br> Our team covers the full spectrum and has
			refined a subtle alchemy in working together — efficiently binding our diverse competences to deliver
			high-quality, seamless products.`,1),St=I('Drop us an email at <a href="mailto:hello@snaha.net" class="svelte-1dxbz0k">hello@snaha.net</a> or join our <a href="/" class="svelte-1dxbz0k">Discord server</a>.',1),Dt=I('<div class="grower svelte-1dxbz0k"></div>'),It=I('<section class="header svelte-1dxbz0k"><div class="left svelte-1dxbz0k"><img alt="Logo" class="logo svelte-1dxbz0k"> <!> <!> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div> <!></section> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <section class="svelte-1dxbz0k"><div class="container svelte-1dxbz0k"><!></div> <div class="container svelte-1dxbz0k"><!></div></section> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <section class="reverse svelte-1dxbz0k"><div class="about-team svelte-1dxbz0k"><!> <div class="icons svelte-1dxbz0k"></div></div> <div class="container svelte-1dxbz0k"><!></div></section> <section class="svelte-1dxbz0k"></section> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <section class="svelte-1dxbz0k"><div class="container svelte-1dxbz0k"><!></div> <div class="container svelte-1dxbz0k"><!></div></section> <section class="svelte-1dxbz0k"><div class="card svelte-1dxbz0k"><!> <!></div> <div class="card svelte-1dxbz0k"><!> <!></div> <div class="card svelte-1dxbz0k"><!> <!></div></section> <section class="svelte-1dxbz0k"><div class="card svelte-1dxbz0k"><!> <!></div> <div class="card svelte-1dxbz0k"><!> <!></div> <div class="card svelte-1dxbz0k"><!> <!></div></section> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <section class="svelte-1dxbz0k"><div class="contact svelte-1dxbz0k"><!> <!></div></section> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <footer class="svelte-1dxbz0k"><span class="svelte-1dxbz0k">hello@snaha.net</span> <a href="mailto:hello@snaha.net" class="svelte-1dxbz0k">Contact us</a> <a href="https://github.com/snaha" target="_blank" class="svelte-1dxbz0k">Github</a> <a href="/" class="svelte-1dxbz0k">Discord</a> <!> <!></footer>',1);function Xt(a,e){ia(e,!0);let t=Za(0);const s=H(()=>p(t)<920),r="/",u=[{name:"Prezi",icon:`${M}/icons/prezi.svg`,link:r},{name:"Felfele",icon:`${M}/icons/felfele.svg`,link:r},{name:"Swarm",icon:`${M}/icons/swarm.svg`,link:r},{name:"Logos",icon:`${M}/icons/logos.svg`,link:r},{name:"Kalkul",icon:`${M}/icons/kalkul.svg`,link:"https://kalkul.app/"},{name:"Diete",icon:`${M}/icons/diete.svg`,link:"https://diete.design/"}],b=[{name:"Attila",img:`${M}/team/attila.png`,info:"Shabby chic enamel pin raclette authentic letterpress, selfies cold-pressed. Ascot adaptogen sus, intelligentsia fingerstache offal food truck narwhal hashtag occupy big mood etsy seitan austin."},{name:"David",img:`${M}/team/david.png`,info:"Put a bird on it man bun freegan semiotics edison bulb unicorn celiac cloud bread grailed you probably haven't heard of them street art shoreditch iPhone. Kinfolk locavore banh mi gluten-free irony trust fund."},{name:"Vojtech",img:`${M}/team/vojtech.png`,info:"Tumblr freegan poke, poutine pug bespoke tacos pour-over cliche normcore selvage. XOXO cray hammock post-ironic, aesthetic typewriter umami. Shaman farm-to-table biodiesel kombucha kinfolk."}];var k=It(),c=q(k),f=P(c),i=P(f);L(i,"src",`${M}/logo.png`);var z=d(i,2);{var n=l=>{var x=zt();L(x,"src",`${M}/header-img.png`),w(l,x)};ae(z,l=>{p(s)&&l(n)})}var g=d(z,2);const h=H(()=>p(s)?"default":"h3");O(g,{get variant(){return p(h)},class:"normal block",children:(l,x)=>{var v=At();S(2),w(l,v)},$$slots:{default:!0}});var T=d(g,2);const A=H(()=>p(s)?"compact":"large");j(T,()=>({"--colors-ultra-high":"var(--colors-high-accent)"})),kt(T.lastChild,{get dimension(){return p(A)},children:(l,x)=>{S();var v=V("CONTACT US");w(l,v)},$$slots:{default:!0}}),_(T),_(f);var m=d(f,2);{var o=l=>{var x=$t();L(x,"src",`${M}/header-img.png`),w(l,x)};ae(m,l=>{p(s)||l(o)})}_(c);var y=d(c,2);j(y,()=>({"--double-padding":"0"})),Z(y.lastChild,{}),_(y);var $=d(y,2),C=P($),N=P(C);const G=H(()=>!p(s));B(N,{text:"human- friendly web",color:"accent",get large(){return p(G)}}),_(C);var X=d(C,2),le=P(X);const oe=H(()=>p(s)?"default":"large");O(le,{get variant(){return p(oe)},children:(l,x)=>{S();var v=Pt();S(3),w(l,v)},$$slots:{default:!0}}),_(X),_($);var te=d($,2);j(te,()=>({"--double-padding":"0"})),Z(te.lastChild,{}),_(te);var ce=d(te,2),de=P(ce),Ie=P(de);const ha=H(()=>p(s)?"default":"large");O(Ie,{get variant(){return p(ha)},class:"block",children:(l,x)=>{S();var v=Nt(),R=d(q(v));L(R,"href",r);var Q=d(R,2);L(Q,"href",r);var ie=d(Q,2);L(ie,"href",r);var ye=d(ie,2);L(ye,"href",r),S(5),w(l,v)},$$slots:{default:!0}});var Oe=d(Ie,2);Pe(Oe,21,()=>u,$e,(l,x)=>{var v=Et(),R=P(v);_(v),F(()=>{L(v,"href",p(x).link),L(R,"src",p(x).icon),L(R,"alt",p(x).name)}),w(l,v)}),_(Oe),_(de);var Le=d(de,2),_a=P(Le);const ga=H(()=>!p(s));B(_a,{text:"our core team",color:"accent",get large(){return p(ga)}}),_(Le),_(ce);var ve=d(ce,2);Pe(ve,21,()=>b,$e,(l,x)=>{var v=Tt(),R=P(v),Q=d(R,2);B(Q,{get text(){return p(x).name}});var ie=d(Q,2);O(ie,{children:(ye,Ot)=>{S();var je=V();F(()=>Ae(je,p(x).info)),w(ye,je)},$$slots:{default:!0}}),_(v),F(()=>{L(R,"src",p(x).img),L(R,"alt",p(x).name)}),w(l,v)}),_(ve);var se=d(ve,2);j(se,()=>({"--double-padding":"0"})),Z(se.lastChild,{}),_(se);var fe=d(se,2),ue=P(fe),pa=P(ue);const ba=H(()=>!p(s));B(pa,{text:"connect the dots",color:"accent",get large(){return p(ba)}}),_(ue);var Me=d(ue,2),ma=P(Me);const ka=H(()=>p(s)?"default":"large");O(ma,{get variant(){return p(ka)},children:(l,x)=>{S();var v=Ct();S(3),w(l,v)},$$slots:{default:!0}}),_(Me),_(fe);var he=d(fe,2),_e=P(he),Re=P(_e);B(Re,{text:"Design"});var ya=d(Re,2);O(ya,{children:(l,x)=>{S();var v=V(`Shabby chic enamel pin raclette authentic letterpress, selfies cold-pressed. Ascot adaptogen
			sus, intelligentsia fingerstache offal food truck narwhal hashtag occupy big mood etsy seitan
			austin.`);w(l,v)},$$slots:{default:!0}}),_(_e);var ge=d(_e,2),He=P(ge);B(He,{text:"Frontend"});var xa=d(He,2);O(xa,{children:(l,x)=>{S();var v=V(`Put a bird on it man bun freegan semiotics edison bulb unicorn celiac cloud bread grailed you
			probably haven't heard of them street art shoreditch iPhone. Kinfolk locavore banh mi
			gluten-free irony trust fund.`);w(l,v)},$$slots:{default:!0}}),_(ge);var Ve=d(ge,2),Be=P(Ve);B(Be,{text:"Backend"});var wa=d(Be,2);O(wa,{children:(l,x)=>{S();var v=V(`Tumblr freegan poke, poutine pug bespoke tacos pour-over cliche normcore selvage. XOXO cray
			hammock post-ironic, aesthetic typewriter umami. Shaman farm-to-table biodiesel kombucha
			kinfolk.`);w(l,v)},$$slots:{default:!0}}),_(Ve),_(he);var pe=d(he,2),be=P(pe),Fe=P(be);B(Fe,{text:"Branding"});var za=d(Fe,2);O(za,{children:(l,x)=>{S();var v=V(`Tumblr freegan poke, poutine pug bespoke tacos pour-over cliche normcore selvage. XOXO cray
			hammock post-ironic, aesthetic typewriter umami. Shaman farm-to-table biodiesel kombucha
			kinfolk.`);w(l,v)},$$slots:{default:!0}}),_(be);var me=d(be,2),Xe=P(me);B(Xe,{text:"Marketing"});var Aa=d(Xe,2);O(Aa,{children:(l,x)=>{S();var v=V(`Shabby chic enamel pin raclette authentic letterpress, selfies cold-pressed. Ascot adaptogen
			sus, intelligentsia fingerstache offal food truck narwhal hashtag occupy big mood etsy seitan
			austin.`);w(l,v)},$$slots:{default:!0}}),_(me);var Ke=d(me,2),We=P(Ke);B(We,{text:"Devops"});var $a=d(We,2);O($a,{children:(l,x)=>{S();var v=V(`Put a bird on it man bun freegan semiotics edison bulb unicorn celiac cloud bread grailed you
			probably haven't heard of them street art shoreditch iPhone. Kinfolk locavore banh mi
			gluten-free irony trust fund.`);w(l,v)},$$slots:{default:!0}}),_(Ke),_(pe);var re=d(pe,2);j(re,()=>({"--double-padding":"0"})),Z(re.lastChild,{}),_(re);var ke=d(re,2),Ye=P(ke),Ge=P(Ye);const Pa=H(()=>p(s)?"default":"large");O(Ge,{get variant(){return p(Pa)},class:"high",children:(l,x)=>{S();var v=V("Something to discuss?");w(l,v)},$$slots:{default:!0}});var Na=d(Ge,2);const Ea=H(()=>p(s)?"default":"h3");O(Na,{get variant(){return p(Ea)},class:"normal block",children:(l,x)=>{S();var v=St();S(4),w(l,v)},$$slots:{default:!0}}),_(Ye),_(ke);var ne=d(ke,2);j(ne,()=>({"--double-padding":"0"})),Z(ne.lastChild,{}),_(ne);var Ue=d(ne,2),qe=d(P(Ue),8);{var Ta=l=>{var x=Dt();w(l,x)};ae(qe,l=>{p(s)||l(Ta)})}var Ca=d(qe,2);O(Ca,{class:"high end",children:(l,x)=>{S();var v=V();F(R=>Ae(v,R),[()=>new Date().getFullYear()]),w(l,v)},$$slots:{default:!0}}),_(Ue),bt("innerWidth",l=>et(t,ct(l))),w(a,k),la()}export{Xt as component};
