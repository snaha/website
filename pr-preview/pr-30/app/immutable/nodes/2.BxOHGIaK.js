import{a as Ca,t as D,b as k,c as ee,d as R}from"../chunks/D1z4n4pz.js";import{W as Sa,an as Da,O as Ia,h as N,s as J,Y as Pe,a6 as aa,b as ta,e as ke,t as p,D as Oa,H as La,r as Je,f as Y,c as X,a0 as Ma,g as Ne,a as Ee,p as sa,ar as we,a4 as ra,x as xe,as as za,M as Ra,m as Qe,A as Ha,at as Va,au as Ba,a3 as Fa,av as Xa,d as na,aw as Ka,ax as Wa,_ as Ya,E as Ga,ay as Te,z as Ua,az as Ja,aA as Qa,ak as V,ac as $,ae as G,ad as _,a7 as ia,a8 as la,al as v,C as z,aB as C,ap as Za,v as et}from"../chunks/Bkk4yaoW.js";import{i as at,a as tt,c as st,d as rt,n as nt,b as it,l as lt,w as ot,s as je}from"../chunks/Dxw-noyP.js";import{i as ae}from"../chunks/DobYJpiA.js";import{p as S,r as Ce,a as ct}from"../chunks/BChPd_yH.js";import{s as oa}from"../chunks/Bd-YjjjO.js";import{b as L}from"../chunks/js3qCn-o.js";function vt(a,e){if(e){const t=document.body;a.autofocus=!0,Sa(()=>{document.activeElement===t&&a.focus()})}}function U(a,e){N&&J(Pe(a)),Da(()=>{var t=e();for(var s in t){var r=t[s];r?a.style.setProperty(s,r):a.style.removeProperty(s)}}),Ia(()=>{a.remove()})}function Ae(a,e){return e}function dt(a,e,t,s){for(var r=[],u=e.length,m=0;m<u;m++)Ba(e[m].e,r,!0);var y=u>0&&r.length===0&&t!==null;if(y){var c=t.parentNode;Fa(c),c.append(t),s.clear(),F(a,e[0].prev,e[u-1].next)}Xa(r,()=>{for(var f=0;f<u;f++){var i=e[f];y||(s.delete(i.k),F(a,i.prev,i.next)),na(i.e,!y)}})}function $e(a,e,t,s,r,u=null){var m=a,y={flags:e,items:new Map,first:null};{var c=a;m=N?J(Pe(c)):c.appendChild(aa())}N&&ke();var f=null,i=!1,x=Oa(()=>{var n=t();return Ha(n)?n:n==null?[]:ra(n)});ta(()=>{var n=p(x),g=n.length;if(i&&g===0)return;i=g===0;let h=!1;if(N){var E=m.data===La;E!==(g===0)&&(m=Je(),J(m),Y(!1),h=!0)}if(N){for(var j=null,b,o=0;o<g;o++){if(X.nodeType===8&&X.data===Ma){m=X,h=!0,Y(!1);break}var q=n[o],A=s(q,o);b=ca(X,y,j,null,q,A,o,r,e,t),y.items.set(A,b),j=b}g>0&&J(Je())}N||ft(n,y,m,r,e,s,t),u!==null&&(g===0?f?Ne(f):f=Ee(()=>u(m)):f!==null&&sa(f,()=>{f=null})),h&&Y(!0),p(x)}),N&&(m=X)}function ft(a,e,t,s,r,u,m){var y=a.length,c=e.items,f=e.first,i=f,x,n=null,g=[],h=[],E,j,b,o;for(o=0;o<y;o+=1){if(E=a[o],j=u(E,o),b=c.get(j),b===void 0){var q=i?i.e.nodes_start:t;n=ca(q,e,n,n===null?e.first:n.next,E,j,o,s,r,m),c.set(j,n),g=[],h=[],i=n.next;continue}if(ut(b,E,o),b.e.f&we&&Ne(b.e),b!==i){if(x!==void 0&&x.has(b)){if(g.length<h.length){var A=h[0],T;n=A.prev;var P=g[0],W=g[g.length-1];for(T=0;T<g.length;T+=1)Ze(g[T],A,t);for(T=0;T<h.length;T+=1)x.delete(h[T]);F(e,P.prev,W.next),F(e,n,P),F(e,W,A),i=A,n=W,o-=1,g=[],h=[]}else x.delete(b),Ze(b,i,t),F(e,b.prev,b.next),F(e,b,n===null?e.first:n.next),F(e,n,b),n=b;continue}for(g=[],h=[];i!==null&&i.k!==j;)i.e.f&we||(x??(x=new Set)).add(i),h.push(i),i=i.next;if(i===null)continue;b=i}g.push(b),n=b,i=b.next}if(i!==null||x!==void 0){for(var B=x===void 0?[]:ra(x);i!==null;)i.e.f&we||B.push(i),i=i.next;var le=B.length;if(le>0){var oe=y===0?t:null;dt(e,B,oe,c)}}xe.first=e.first&&e.first.e,xe.last=n&&n.e}function ut(a,e,t,s){za(a.v,e),a.i=t}function ca(a,e,t,s,r,u,m,y,c,f){var i=(c&Ka)!==0,x=(c&Wa)===0,n=i?x?Ra(r):Qe(r):r,g=c&Va?Qe(m):m,h={i:g,v:n,k:u,a:null,e:null,prev:t,next:s};try{return h.e=Ee(()=>y(a,n,g,f),N),h.e.prev=t&&t.e,h.e.next=s&&s.e,t===null?e.first=h:(t.next=h,t.e.next=h.e),s!==null&&(s.prev=h,s.e.prev=h.e),h}finally{}}function Ze(a,e,t){for(var s=a.next?a.next.e.nodes_start:t,r=e?e.e.nodes_start:t,u=a.e.nodes_start;u!==s;){var m=Ya(u);r.before(u),u=m}}function F(a,e,t){e===null?a.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function va(a,e,t,s,r,u){let m=N;N&&ke();var y,c,f=null;N&&X.nodeType===1&&(f=X,ke());var i=N?X:a,x;ta(()=>{const n=e()||null;var g=n==="svg"?Te:null;n!==y&&(x&&(n===null?sa(x,()=>{x=null,c=null}):n===c?Ne(x):na(x)),n&&n!==c&&(x=Ee(()=>{if(f=N?f:g?document.createElementNS(g,n):document.createElement(n),Ca(f,f),s){N&&at(n)&&f.append(document.createComment(""));var h=N?Pe(f):f.appendChild(aa());N&&(h===null?Y(!1):J(h)),s(f,h)}xe.nodes_end=f,i.before(f)})),y=n,y&&(c=y))},Ga),m&&(Y(!0),J(i))}function da(a){var e,t,s="";if(typeof a=="string"||typeof a=="number")s+=a;else if(typeof a=="object")if(Array.isArray(a)){var r=a.length;for(e=0;e<r;e++)a[e]&&(t=da(a[e]))&&(s&&(s+=" "),s+=t)}else for(t in a)a[t]&&(s&&(s+=" "),s+=t);return s}function ht(){for(var a,e,t=0,s="",r=arguments.length;t<r;t++)(a=arguments[t])&&(e=da(a))&&(s&&(s+=" "),s+=e);return s}function _t(a){return typeof a=="object"?ht(a):a??""}function gt(a,e){e?a.hasAttribute("selected")||a.setAttribute("selected",""):a.removeAttribute("selected")}function O(a,e,t,s){var r=a.__attributes??(a.__attributes={});N&&(r[e]=a.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&a.nodeName==="LINK")||r[e]!==(r[e]=t)&&(e==="style"&&"__styles"in a&&(a.__styles={}),e==="loading"&&(a[Qa]=t),t==null?a.removeAttribute(e):typeof t!="string"&&fa(a).includes(e)?a[e]=t:a.setAttribute(e,t))}function Se(a,e,t,s,r=!1,u=!1,m=!1){let y=N&&u;y&&Y(!1);var c=e||{},f=a.tagName==="OPTION";for(var i in e)i in t||(t[i]=null);t.class&&(t.class=_t(t.class)),s!==void 0&&(t.class=t.class?t.class+" "+s:s);var x=fa(a),n=a.__attributes??(a.__attributes={});for(const o in t){let q=t[o];if(f&&o==="value"&&q==null){a.value=a.__value="",c[o]=q;continue}var g=c[o];if(q!==g){c[o]=q;var h=o[0]+o[1];if(h!=="$$"){if(h==="on"){const A={},T="$$"+o;let P=o.slice(2);var E=it(P);if(tt(P)&&(P=P.slice(0,-7),A.capture=!0),!E&&g){if(q!=null)continue;a.removeEventListener(P,c[T],A),c[T]=null}if(q!=null)if(E)a[`__${P}`]=q,rt([P]);else{let W=function(B){c[o].call(this,B)};c[T]=st(P,a,W,A)}else E&&(a[`__${P}`]=void 0)}else if(o==="style"&&q!=null)a.style.cssText=q+"";else if(o==="autofocus")vt(a,!!q);else if(!u&&(o==="__value"||o==="value"&&q!=null))a.value=a.__value=q;else if(o==="selected"&&f)gt(a,q);else{var j=o;r||(j=nt(j));var b=j==="defaultValue"||j==="defaultChecked";if(q==null&&!u&&!b)if(n[o]=null,j==="value"||j==="checked"){let A=a;const T=e===void 0;if(j==="value"){let P=A.defaultValue;A.removeAttribute(j),A.defaultValue=P,A.value=A.__value=T?P:null}else{let P=A.defaultChecked;A.removeAttribute(j),A.defaultChecked=P,A.checked=T?P:!1}}else a.removeAttribute(o);else b||x.includes(j)&&(u||typeof q!="string")?a[j]=q:typeof q!="function"&&O(a,j,q)}o==="style"&&"__styles"in a&&(a.__styles={})}}}return y&&Y(!0),c}var ea=new Map;function fa(a){var e=ea.get(a.nodeName);if(e)return e;ea.set(a.nodeName,e=[]);for(var t,s=a,r=Element.prototype;r!==s;){t=Ja(s);for(var u in t)t[u].set&&e.push(u);s=Ua(s)}return e}function ua(a,e,t){var s=a.__className,r=pt(e);N&&a.className===r?a.__className=r:(s!==r||N&&a.className!==r)&&(e==null?a.removeAttribute("class"):a.className=r,a.__className=r)}function pt(a,e){return(a??"")+""}function K(a,e,t){if(t){if(a.classList.contains(e))return;a.classList.add(e)}else{if(!a.classList.contains(e))return;a.classList.remove(e)}}function mt(a,e){lt(window,["resize"],()=>ot(()=>e(window[a])))}var bt=D("<span><!></span>");function yt(a,e){let t=S(e,"dimension",3,"default"),s=S(e,"variant",3,"strong"),r=S(e,"class",3,""),u=S(e,"leftAlign",3,!1),m=S(e,"mode",3,"auto"),y=Ce(e,["$$slots","$$events","$$legacy","dimension","variant","active","hover","focus","disabled","href","class","leftAlign","children","mode"]);var c=bt(),f=$(c);va(f,()=>e.href?"a":"button",!1,(i,x)=>{let n;V(()=>{n=Se(i,n,{class:`${t()} ${s()} ${m()}`,href:e.href,disabled:e.disabled,...y},"svelte-1hblcdw",i.namespaceURI===Te,i.nodeName.includes("-")),K(i,"leftAlign",u()),K(i,"active",e.active),K(i,"hover",e.hover),K(i,"focus",e.focus)});var g=ee(),h=G(g);{var E=j=>{var b=ee(),o=G(b);oa(o,()=>e.children),k(j,b)};ae(h,j=>{e.children&&j(E)})}k(x,g)}),_(c),V(()=>{ua(c,`${`root ${r()}`??""} svelte-1hblcdw`),K(c,"disabled",e.disabled)}),k(a,c)}var qt=D("<hr>");function Z(a,e){let t=S(e,"orientation",3,"horizontal"),s=S(e,"class",3,""),r=Ce(e,["$$slots","$$events","$$legacy","orientation","class"]);var u=qt();let m;V(()=>m=Se(u,m,{class:`${t()??""} ${s()??""}`,...r},"svelte-4zatmg")),k(a,u)}function I(a,e){function t(n){switch(n){case"h1":return"h1";case"h2":return"h2";case"h3":return"h3";case"h4":return"h4";case"h5":return"h5";case"h6":return"h6";default:return"span"}}let s=S(e,"variant",3,"default"),r=S(e,"element",19,()=>t(s())),u=S(e,"font",3,"sans"),m=S(e,"bold",3,!1),y=S(e,"italic",3,!1),c=S(e,"class",3,""),f=Ce(e,["$$slots","$$events","$$legacy","variant","element","font","bold","italic","class","children"]);var i=ee(),x=G(i);va(x,r,!1,(n,g)=>{let h;V(()=>{h=Se(n,h,{class:`root ${u()} ${s()} ${c()}`,...f},"svelte-1k85xwk",n.namespaceURI===Te,n.nodeName.includes("-")),K(n,"bold",m()),K(n,"italic",y())});var E=ee(),j=G(E);{var b=o=>{var q=ee(),A=G(q);oa(A,()=>e.children),k(o,q)};ae(j,o=>{e.children&&o(b)})}k(g,E)}),k(a,i)}var wt=D("<span> </span>"),kt=D("<div></div>");function H(a,e){ia(e,!0);let t=S(e,"color",3,"top"),s=S(e,"large",3,!1);var r=kt();$e(r,21,()=>e.text.split(" "),Ae,(u,m)=>{var y=wt(),c=$(y,!0);_(y),V(()=>je(c,p(m))),k(u,y)}),_(r),V(()=>{ua(r,`root ${t()??""} svelte-17p02z5`),K(r,"large",s())}),k(a,r),la()}var xt=D('<img alt="Header" class="svelte-1q0q40j">'),jt=D('<span class="yellow">We turn worthy ideas into products.</span><br> We’re an OG team geared towards making the web a bit better for hoomans.',1),At=D('<img alt="Header" class="svelte-1q0q40j">'),$t=D(`We’re a small and independent team defending privacy, freedom and more generally, human
			interests in software products.<br><br>We build for the web — websites, web applications,
			web3 dapps & other crypto-related projects.`,1),Pt=D(`Attila and David met back in 2012, while working together at <a class="svelte-1q0q40j">Prezi</a>. In 2019, they co-founded the <a class="svelte-1q0q40j">Felfele Foundation</a>. Shortly after
			that, they met with Vojtech while working with the <a class="svelte-1q0q40j">Swarm Foundation</a>. Since them Attila, David and Vojtech have stuck
			together. They’ve worked with different teams at <a class="svelte-1q0q40j">Logos</a> and
			co-founded Snaha together. Besides helping selected clients, Snaha is bootstrapping <a href="https://kalkul.app/" target="_blank" class="svelte-1q0q40j">Kalkul</a> and developing <a href="https://diete.design/" target="_blank" class="svelte-1q0q40j">Diète</a>, its own open-source design system.`,1),Nt=D('<a target="_blank" class="svelte-1q0q40j"><img class="svelte-1q0q40j"></a>'),Et=D('<div class="card svelte-1q0q40j"><img class="svelte-1q0q40j"> <!> <!></div>'),Tt=D(`Successful products result from a delicate assembly of widely different skillsets. Magic
			happens precisely within the in-betweens.<br><br> Our team covers the full spectrum and has
			refined a subtle alchemy in working together — efficiently binding our diverse competences to deliver
			high-quality, seamless products.`,1),Ct=D('Drop us an email at <a href="mailto:hello@snaha.net" class="svelte-1q0q40j">hello@snaha.net</a> or join our <a href="/" class="svelte-1q0q40j">Discord server</a>.',1),St=D('<div class="grower svelte-1q0q40j"></div>'),Dt=D('<section class="header svelte-1q0q40j"><div class="left svelte-1q0q40j"><img alt="Logo" class="logo svelte-1q0q40j"> <!> <!> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div> <!></section> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <section class="svelte-1q0q40j"><div class="container svelte-1q0q40j"><!></div> <div class="container svelte-1q0q40j"><!></div></section> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <section class="reverse svelte-1q0q40j"><div class="about-team svelte-1q0q40j"><!> <div class="icons svelte-1q0q40j"></div></div> <div class="container svelte-1q0q40j"><!></div></section> <section class="svelte-1q0q40j"></section> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <section class="svelte-1q0q40j"><div class="container svelte-1q0q40j"><!></div> <div class="container svelte-1q0q40j"><!></div></section> <section class="svelte-1q0q40j"><div class="card svelte-1q0q40j"><!> <!></div> <div class="card svelte-1q0q40j"><!> <!></div> <div class="card svelte-1q0q40j"><!> <!></div></section> <section class="svelte-1q0q40j"><div class="card svelte-1q0q40j"><!> <!></div> <div class="card svelte-1q0q40j"><!> <!></div> <div class="card svelte-1q0q40j"><!> <!></div></section> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <section class="svelte-1q0q40j"><div class="contact svelte-1q0q40j"><!> <!></div></section> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <footer class="svelte-1q0q40j"><span class="svelte-1q0q40j">hello@snaha.net</span> <a href="mailto:hello@snaha.net" class="svelte-1q0q40j">Contact us</a> <a href="https://github.com/snaha" target="_blank" class="svelte-1q0q40j">Github</a> <a href="/" class="svelte-1q0q40j">Discord</a> <!> <!></footer>',1);function Bt(a,e){ia(e,!0);let t=Za(0);const s=z(()=>p(t)<920),r="/",u=[{name:"Prezi",icon:`${L}/icons/prezi.svg`,link:r},{name:"Felfele",icon:`${L}/icons/felfele.svg`,link:r},{name:"Swarm",icon:`${L}/icons/swarm.svg`,link:r},{name:"Logos",icon:`${L}/icons/logos.svg`,link:r},{name:"Kalkul",icon:`${L}/icons/kalkul.svg`,link:"https://kalkul.app/"},{name:"Diete",icon:`${L}/icons/diete.svg`,link:"https://diete.design/"}],m=[{name:"Attila",img:`${L}/team/attila.png`,info:"Shabby chic enamel pin raclette authentic letterpress, selfies cold-pressed. Ascot adaptogen sus, intelligentsia fingerstache offal food truck narwhal hashtag occupy big mood etsy seitan austin."},{name:"David",img:`${L}/team/david.png`,info:"Put a bird on it man bun freegan semiotics edison bulb unicorn celiac cloud bread grailed you probably haven't heard of them street art shoreditch iPhone. Kinfolk locavore banh mi gluten-free irony trust fund."},{name:"Vojtech",img:`${L}/team/vojtech.png`,info:"Tumblr freegan poke, poutine pug bespoke tacos pour-over cliche normcore selvage. XOXO cray hammock post-ironic, aesthetic typewriter umami. Shaman farm-to-table biodiesel kombucha kinfolk."}];var y=Dt(),c=G(y),f=$(c),i=$(f);O(i,"src",`${L}/logo.svg`);var x=v(i,2);{var n=l=>{var w=xt();O(w,"src",`${L}/header-img.png`),k(l,w)};ae(x,l=>{p(s)&&l(n)})}var g=v(x,2);const h=z(()=>p(s)?"default":"h3");I(g,{get variant(){return p(h)},class:"normal block",children:(l,w)=>{var d=jt();C(2),k(l,d)},$$slots:{default:!0}});var E=v(g,2);const j=z(()=>p(s)?"compact":"large");U(E,()=>({"--colors-ultra-high":"var(--colors-high-accent)"})),yt(E.lastChild,{get dimension(){return p(j)},children:(l,w)=>{C();var d=R("CONTACT US");k(l,d)},$$slots:{default:!0}}),_(E),_(f);var b=v(f,2);{var o=l=>{var w=At();O(w,"src",`${L}/header-img.png`),k(l,w)};ae(b,l=>{p(s)||l(o)})}_(c);var q=v(c,2);U(q,()=>({"--double-padding":"0"})),Z(q.lastChild,{}),_(q);var A=v(q,2),T=$(A),P=$(T);const W=z(()=>!p(s));H(P,{text:"human- friendly web",color:"accent",get large(){return p(W)}}),_(T);var B=v(T,2),le=$(B);const oe=z(()=>p(s)?"default":"large");I(le,{get variant(){return p(oe)},children:(l,w)=>{C();var d=$t();C(3),k(l,d)},$$slots:{default:!0}}),_(B),_(A);var te=v(A,2);U(te,()=>({"--double-padding":"0"})),Z(te.lastChild,{}),_(te);var ce=v(te,2),ve=$(ce),De=$(ve);const ha=z(()=>p(s)?"default":"large");I(De,{get variant(){return p(ha)},class:"block",children:(l,w)=>{C();var d=Pt(),M=v(G(d));O(M,"href",r);var Q=v(M,2);O(Q,"href",r);var ie=v(Q,2);O(ie,"href",r);var qe=v(ie,2);O(qe,"href",r),C(5),k(l,d)},$$slots:{default:!0}});var Ie=v(De,2);$e(Ie,21,()=>u,Ae,(l,w)=>{var d=Nt(),M=$(d);_(d),V(()=>{O(d,"href",p(w).link),O(M,"src",p(w).icon),O(M,"alt",p(w).name)}),k(l,d)}),_(Ie),_(ve);var Oe=v(ve,2),_a=$(Oe);const ga=z(()=>!p(s));H(_a,{text:"our core team",color:"accent",get large(){return p(ga)}}),_(Oe),_(ce);var de=v(ce,2);$e(de,21,()=>m,Ae,(l,w)=>{var d=Et(),M=$(d),Q=v(M,2);H(Q,{get text(){return p(w).name}});var ie=v(Q,2);I(ie,{children:(qe,It)=>{C();var Ue=R();V(()=>je(Ue,p(w).info)),k(qe,Ue)},$$slots:{default:!0}}),_(d),V(()=>{O(M,"src",p(w).img),O(M,"alt",p(w).name)}),k(l,d)}),_(de);var se=v(de,2);U(se,()=>({"--double-padding":"0"})),Z(se.lastChild,{}),_(se);var fe=v(se,2),ue=$(fe),pa=$(ue);const ma=z(()=>!p(s));H(pa,{text:"connect the dots",color:"accent",get large(){return p(ma)}}),_(ue);var Le=v(ue,2),ba=$(Le);const ya=z(()=>p(s)?"default":"large");I(ba,{get variant(){return p(ya)},children:(l,w)=>{C();var d=Tt();C(3),k(l,d)},$$slots:{default:!0}}),_(Le),_(fe);var he=v(fe,2),_e=$(he),Me=$(_e);H(Me,{text:"Design"});var qa=v(Me,2);I(qa,{children:(l,w)=>{C();var d=R(`Shabby chic enamel pin raclette authentic letterpress, selfies cold-pressed. Ascot adaptogen
			sus, intelligentsia fingerstache offal food truck narwhal hashtag occupy big mood etsy seitan
			austin.`);k(l,d)},$$slots:{default:!0}}),_(_e);var ge=v(_e,2),ze=$(ge);H(ze,{text:"Frontend"});var wa=v(ze,2);I(wa,{children:(l,w)=>{C();var d=R(`Put a bird on it man bun freegan semiotics edison bulb unicorn celiac cloud bread grailed you
			probably haven't heard of them street art shoreditch iPhone. Kinfolk locavore banh mi
			gluten-free irony trust fund.`);k(l,d)},$$slots:{default:!0}}),_(ge);var Re=v(ge,2),He=$(Re);H(He,{text:"Backend"});var ka=v(He,2);I(ka,{children:(l,w)=>{C();var d=R(`Tumblr freegan poke, poutine pug bespoke tacos pour-over cliche normcore selvage. XOXO cray
			hammock post-ironic, aesthetic typewriter umami. Shaman farm-to-table biodiesel kombucha
			kinfolk.`);k(l,d)},$$slots:{default:!0}}),_(Re),_(he);var pe=v(he,2),me=$(pe),Ve=$(me);H(Ve,{text:"Branding"});var xa=v(Ve,2);I(xa,{children:(l,w)=>{C();var d=R(`Tumblr freegan poke, poutine pug bespoke tacos pour-over cliche normcore selvage. XOXO cray
			hammock post-ironic, aesthetic typewriter umami. Shaman farm-to-table biodiesel kombucha
			kinfolk.`);k(l,d)},$$slots:{default:!0}}),_(me);var be=v(me,2),Be=$(be);H(Be,{text:"Marketing"});var ja=v(Be,2);I(ja,{children:(l,w)=>{C();var d=R(`Shabby chic enamel pin raclette authentic letterpress, selfies cold-pressed. Ascot adaptogen
			sus, intelligentsia fingerstache offal food truck narwhal hashtag occupy big mood etsy seitan
			austin.`);k(l,d)},$$slots:{default:!0}}),_(be);var Fe=v(be,2),Xe=$(Fe);H(Xe,{text:"Devops"});var Aa=v(Xe,2);I(Aa,{children:(l,w)=>{C();var d=R(`Put a bird on it man bun freegan semiotics edison bulb unicorn celiac cloud bread grailed you
			probably haven't heard of them street art shoreditch iPhone. Kinfolk locavore banh mi
			gluten-free irony trust fund.`);k(l,d)},$$slots:{default:!0}}),_(Fe),_(pe);var re=v(pe,2);U(re,()=>({"--double-padding":"0"})),Z(re.lastChild,{}),_(re);var ye=v(re,2),Ke=$(ye),We=$(Ke);const $a=z(()=>p(s)?"default":"large");I(We,{get variant(){return p($a)},class:"high",children:(l,w)=>{C();var d=R("Something to discuss?");k(l,d)},$$slots:{default:!0}});var Pa=v(We,2);const Na=z(()=>p(s)?"default":"h3");I(Pa,{get variant(){return p(Na)},class:"normal block",children:(l,w)=>{C();var d=Ct();C(4),k(l,d)},$$slots:{default:!0}}),_(Ke),_(ye);var ne=v(ye,2);U(ne,()=>({"--double-padding":"0"})),Z(ne.lastChild,{}),_(ne);var Ye=v(ne,2),Ge=v($(Ye),8);{var Ea=l=>{var w=St();k(l,w)};ae(Ge,l=>{p(s)||l(Ea)})}var Ta=v(Ge,2);I(Ta,{class:"high end",children:(l,w)=>{C();var d=R();V(M=>je(d,M),[()=>new Date().getFullYear()]),k(l,d)},$$slots:{default:!0}}),_(Ye),mt("innerWidth",l=>et(t,ct(l))),k(a,y),la()}export{Bt as component};
