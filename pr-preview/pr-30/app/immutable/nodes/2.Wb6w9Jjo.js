import{a as Sa,t as I,b as q,c as ee,d as H}from"../chunks/D1z4n4pz.js";import{W as Da,an as Ia,O as Oa,h as E,s as J,Y as Ne,a6 as aa,b as ta,e as qe,t as g,D as La,H as Ma,r as Je,f as G,c as K,a0 as za,g as Ee,a as Te,p as sa,ar as ke,a4 as ra,x as xe,as as Ra,M as Ha,m as Qe,A as Va,at as Ba,au as Fa,a3 as Xa,av as Ka,d as na,aw as Wa,ax as Ya,_ as Ga,E as Ua,ay as Ce,z as ja,az as Ja,aA as Qa,ak as B,ac as P,ae as U,ad as p,a7 as ia,a8 as la,al as d,C as R,aB as S,ap as Za,v as et}from"../chunks/Bkk4yaoW.js";import{i as at,a as tt,c as st,d as rt,n as nt,b as it,l as lt,w as ot,s as Ae}from"../chunks/Dxw-noyP.js";import{i as ae}from"../chunks/DobYJpiA.js";import{p as D,r as Se,a as ct}from"../chunks/BChPd_yH.js";import{s as oa}from"../chunks/Bd-YjjjO.js";import{b as M}from"../chunks/DPbIGm_i.js";function dt(a,e){if(e){const t=document.body;a.autofocus=!0,Da(()=>{document.activeElement===t&&a.focus()})}}function j(a,e){E&&J(Ne(a)),Ia(()=>{var t=e();for(var s in t){var r=t[s];r?a.style.setProperty(s,r):a.style.removeProperty(s)}}),Oa(()=>{a.remove()})}function $e(a,e){return e}function vt(a,e,t,s){for(var r=[],u=e.length,b=0;b<u;b++)Fa(e[b].e,r,!0);var y=u>0&&r.length===0&&t!==null;if(y){var c=t.parentNode;Xa(c),c.append(t),s.clear(),X(a,e[0].prev,e[u-1].next)}Ka(r,()=>{for(var f=0;f<u;f++){var i=e[f];y||(s.delete(i.k),X(a,i.prev,i.next)),na(i.e,!y)}})}function Pe(a,e,t,s,r,u=null){var b=a,y={flags:e,items:new Map,first:null};{var c=a;b=E?J(Ne(c)):c.appendChild(aa())}E&&qe();var f=null,i=!1,x=La(()=>{var n=t();return Va(n)?n:n==null?[]:ra(n)});ta(()=>{var n=g(x),_=n.length;if(i&&_===0)return;i=_===0;let h=!1;if(E){var T=b.data===Ma;T!==(_===0)&&(b=Je(),J(b),G(!1),h=!0)}if(E){for(var A=null,m,o=0;o<_;o++){if(K.nodeType===8&&K.data===za){b=K,h=!0,G(!1);break}var w=n[o],$=s(w,o);m=ca(K,y,A,null,w,$,o,r,e,t),y.items.set($,m),A=m}_>0&&J(Je())}E||ft(n,y,b,r,e,s,t),u!==null&&(_===0?f?Ee(f):f=Te(()=>u(b)):f!==null&&sa(f,()=>{f=null})),h&&G(!0),g(x)}),E&&(b=K)}function ft(a,e,t,s,r,u,b){var y=a.length,c=e.items,f=e.first,i=f,x,n=null,_=[],h=[],T,A,m,o;for(o=0;o<y;o+=1){if(T=a[o],A=u(T,o),m=c.get(A),m===void 0){var w=i?i.e.nodes_start:t;n=ca(w,e,n,n===null?e.first:n.next,T,A,o,s,r,b),c.set(A,n),_=[],h=[],i=n.next;continue}if(ut(m,T,o),m.e.f&ke&&Ee(m.e),m!==i){if(x!==void 0&&x.has(m)){if(_.length<h.length){var $=h[0],C;n=$.prev;var N=_[0],Y=_[_.length-1];for(C=0;C<_.length;C+=1)Ze(_[C],$,t);for(C=0;C<h.length;C+=1)x.delete(h[C]);X(e,N.prev,Y.next),X(e,n,N),X(e,Y,$),i=$,n=Y,o-=1,_=[],h=[]}else x.delete(m),Ze(m,i,t),X(e,m.prev,m.next),X(e,m,n===null?e.first:n.next),X(e,n,m),n=m;continue}for(_=[],h=[];i!==null&&i.k!==A;)i.e.f&ke||(x??(x=new Set)).add(i),h.push(i),i=i.next;if(i===null)continue;m=i}_.push(m),n=m,i=m.next}if(i!==null||x!==void 0){for(var F=x===void 0?[]:ra(x);i!==null;)i.e.f&ke||F.push(i),i=i.next;var le=F.length;if(le>0){var oe=y===0?t:null;vt(e,F,oe,c)}}xe.first=e.first&&e.first.e,xe.last=n&&n.e}function ut(a,e,t,s){Ra(a.v,e),a.i=t}function ca(a,e,t,s,r,u,b,y,c,f){var i=(c&Wa)!==0,x=(c&Ya)===0,n=i?x?Ha(r):Qe(r):r,_=c&Ba?Qe(b):b,h={i:_,v:n,k:u,a:null,e:null,prev:t,next:s};try{return h.e=Te(()=>y(a,n,_,f),E),h.e.prev=t&&t.e,h.e.next=s&&s.e,t===null?e.first=h:(t.next=h,t.e.next=h.e),s!==null&&(s.prev=h,s.e.prev=h.e),h}finally{}}function Ze(a,e,t){for(var s=a.next?a.next.e.nodes_start:t,r=e?e.e.nodes_start:t,u=a.e.nodes_start;u!==s;){var b=Ga(u);r.before(u),u=b}}function X(a,e,t){e===null?a.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function da(a,e,t,s,r,u){let b=E;E&&qe();var y,c,f=null;E&&K.nodeType===1&&(f=K,qe());var i=E?K:a,x;ta(()=>{const n=e()||null;var _=n==="svg"?Ce:null;n!==y&&(x&&(n===null?sa(x,()=>{x=null,c=null}):n===c?Ee(x):na(x)),n&&n!==c&&(x=Te(()=>{if(f=E?f:_?document.createElementNS(_,n):document.createElement(n),Sa(f,f),s){E&&at(n)&&f.append(document.createComment(""));var h=E?Ne(f):f.appendChild(aa());E&&(h===null?G(!1):J(h)),s(f,h)}xe.nodes_end=f,i.before(f)})),y=n,y&&(c=y))},Ua),b&&(G(!0),J(i))}function va(a){var e,t,s="";if(typeof a=="string"||typeof a=="number")s+=a;else if(typeof a=="object")if(Array.isArray(a)){var r=a.length;for(e=0;e<r;e++)a[e]&&(t=va(a[e]))&&(s&&(s+=" "),s+=t)}else for(t in a)a[t]&&(s&&(s+=" "),s+=t);return s}function ht(){for(var a,e,t=0,s="",r=arguments.length;t<r;t++)(a=arguments[t])&&(e=va(a))&&(s&&(s+=" "),s+=e);return s}function pt(a){return typeof a=="object"?ht(a):a??""}function _t(a,e){e?a.hasAttribute("selected")||a.setAttribute("selected",""):a.removeAttribute("selected")}function L(a,e,t,s){var r=a.__attributes??(a.__attributes={});E&&(r[e]=a.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&a.nodeName==="LINK")||r[e]!==(r[e]=t)&&(e==="style"&&"__styles"in a&&(a.__styles={}),e==="loading"&&(a[Qa]=t),t==null?a.removeAttribute(e):typeof t!="string"&&fa(a).includes(e)?a[e]=t:a.setAttribute(e,t))}function De(a,e,t,s,r=!1,u=!1,b=!1){let y=E&&u;y&&G(!1);var c=e||{},f=a.tagName==="OPTION";for(var i in e)i in t||(t[i]=null);t.class&&(t.class=pt(t.class)),s!==void 0&&(t.class=t.class?t.class+" "+s:s);var x=fa(a),n=a.__attributes??(a.__attributes={});for(const o in t){let w=t[o];if(f&&o==="value"&&w==null){a.value=a.__value="",c[o]=w;continue}var _=c[o];if(w!==_){c[o]=w;var h=o[0]+o[1];if(h!=="$$"){if(h==="on"){const $={},C="$$"+o;let N=o.slice(2);var T=it(N);if(tt(N)&&(N=N.slice(0,-7),$.capture=!0),!T&&_){if(w!=null)continue;a.removeEventListener(N,c[C],$),c[C]=null}if(w!=null)if(T)a[`__${N}`]=w,rt([N]);else{let Y=function(F){c[o].call(this,F)};c[C]=st(N,a,Y,$)}else T&&(a[`__${N}`]=void 0)}else if(o==="style"&&w!=null)a.style.cssText=w+"";else if(o==="autofocus")dt(a,!!w);else if(!u&&(o==="__value"||o==="value"&&w!=null))a.value=a.__value=w;else if(o==="selected"&&f)_t(a,w);else{var A=o;r||(A=nt(A));var m=A==="defaultValue"||A==="defaultChecked";if(w==null&&!u&&!m)if(n[o]=null,A==="value"||A==="checked"){let $=a;const C=e===void 0;if(A==="value"){let N=$.defaultValue;$.removeAttribute(A),$.defaultValue=N,$.value=$.__value=C?N:null}else{let N=$.defaultChecked;$.removeAttribute(A),$.defaultChecked=N,$.checked=C?N:!1}}else a.removeAttribute(o);else m||x.includes(A)&&(u||typeof w!="string")?a[A]=w:typeof w!="function"&&L(a,A,w)}o==="style"&&"__styles"in a&&(a.__styles={})}}}return y&&G(!0),c}var ea=new Map;function fa(a){var e=ea.get(a.nodeName);if(e)return e;ea.set(a.nodeName,e=[]);for(var t,s=a,r=Element.prototype;r!==s;){t=Ja(s);for(var u in t)t[u].set&&e.push(u);s=ja(s)}return e}function ua(a,e,t){var s=a.__className,r=gt(e);E&&a.className===r?a.__className=r:(s!==r||E&&a.className!==r)&&(e==null?a.removeAttribute("class"):a.className=r,a.__className=r)}function gt(a,e){return(a??"")+""}function W(a,e,t){if(t){if(a.classList.contains(e))return;a.classList.add(e)}else{if(!a.classList.contains(e))return;a.classList.remove(e)}}function bt(a,e){lt(window,["resize"],()=>ot(()=>e(window[a])))}var mt=I("<span><!></span>");function yt(a,e){let t=D(e,"dimension",3,"default"),s=D(e,"variant",3,"strong"),r=D(e,"class",3,""),u=D(e,"leftAlign",3,!1),b=D(e,"mode",3,"auto"),y=Se(e,["$$slots","$$events","$$legacy","dimension","variant","active","hover","focus","disabled","href","class","leftAlign","children","mode"]);var c=mt(),f=P(c);da(f,()=>e.href?"a":"button",!1,(i,x)=>{let n;B(()=>{n=De(i,n,{class:`${t()} ${s()} ${b()}`,href:e.href,disabled:e.disabled,...y},"svelte-1hblcdw",i.namespaceURI===Ce,i.nodeName.includes("-")),W(i,"leftAlign",u()),W(i,"active",e.active),W(i,"hover",e.hover),W(i,"focus",e.focus)});var _=ee(),h=U(_);{var T=A=>{var m=ee(),o=U(m);oa(o,()=>e.children),q(A,m)};ae(h,A=>{e.children&&A(T)})}q(x,_)}),p(c),B(()=>{ua(c,`${`root ${r()}`??""} svelte-1hblcdw`),W(c,"disabled",e.disabled)}),q(a,c)}var wt=I("<hr>");function Z(a,e){let t=D(e,"orientation",3,"horizontal"),s=D(e,"class",3,""),r=Se(e,["$$slots","$$events","$$legacy","orientation","class"]);var u=wt();let b;B(()=>b=De(u,b,{class:`${t()??""} ${s()??""}`,...r},"svelte-4zatmg")),q(a,u)}function O(a,e){function t(n){switch(n){case"h1":return"h1";case"h2":return"h2";case"h3":return"h3";case"h4":return"h4";case"h5":return"h5";case"h6":return"h6";default:return"span"}}let s=D(e,"variant",3,"default"),r=D(e,"element",19,()=>t(s())),u=D(e,"font",3,"sans"),b=D(e,"bold",3,!1),y=D(e,"italic",3,!1),c=D(e,"class",3,""),f=Se(e,["$$slots","$$events","$$legacy","variant","element","font","bold","italic","class","children"]);var i=ee(),x=U(i);da(x,r,!1,(n,_)=>{let h;B(()=>{h=De(n,h,{class:`root ${u()} ${s()} ${c()}`,...f},"svelte-1k85xwk",n.namespaceURI===Ce,n.nodeName.includes("-")),W(n,"bold",b()),W(n,"italic",y())});var T=ee(),A=U(T);{var m=o=>{var w=ee(),$=U(w);oa($,()=>e.children),q(o,w)};ae(A,o=>{e.children&&o(m)})}q(_,T)}),q(a,i)}var kt=I("<span> </span>"),qt=I("<div></div>");function V(a,e){ia(e,!0);let t=D(e,"color",3,"top"),s=D(e,"large",3,!1);var r=qt();Pe(r,21,()=>e.text.split(" "),$e,(u,b)=>{var y=kt(),c=P(y,!0);p(y),B(()=>Ae(c,g(b))),q(u,y)}),p(r),B(()=>{ua(r,`root ${t()??""} svelte-17p02z5`),W(r,"large",s())}),q(a,r),la()}var xt=I('<img alt="Header" class="svelte-1p41qbd">'),At=I('<span class="yellow">We turn worthy ideas into products.</span><br> We’re an OG team geared towards making the web a bit better for hoomans.',1),$t=I('<img alt="Header" class="svelte-1p41qbd">'),Pt=I(`We’re a small and independent team defending privacy, freedom and more generally, human
			interests in software products.<br><br>We build for the web — websites, web applications,
			web3 dapps & other crypto-related projects.`,1),Nt=I(`Attila and David met back in 2012, while working together at <a class="svelte-1p41qbd">Prezi</a>. In 2019, they co-founded the <a class="svelte-1p41qbd">Felfele Foundation</a>. Shortly after
			that, they met with Vojtech while working with the <a class="svelte-1p41qbd">Swarm Foundation</a>. Since them Attila, David and Vojtech have stuck
			together. They’ve worked with different teams at <a class="svelte-1p41qbd">Logos</a> and
			co-founded Snaha together. Besides helping selected clients, Snaha is bootstrapping <a href="https://kalkul.app/" target="_blank" class="svelte-1p41qbd">Kalkul</a> and developing <a href="https://diete.design/" target="_blank" class="svelte-1p41qbd">Diète</a>, its own open-source design system.`,1),Et=I('<a target="_blank" class="svelte-1p41qbd"><img class="svelte-1p41qbd"></a>'),Tt=I('<div class="card svelte-1p41qbd"><img class="svelte-1p41qbd"> <!> <!></div>'),Ct=I(`Successful products result from a delicate assembly of widely different skillsets. Magic
			happens precisely within the in-betweens.<br><br> Our team covers the full spectrum and has
			refined a subtle alchemy in working together — efficiently binding our diverse competences to deliver
			high-quality, seamless products.`,1),St=I('Drop us an email at <a href="mailto:hello@snaha.net" class="svelte-1p41qbd">hello@snaha.net</a> or join our <a href="/" class="svelte-1p41qbd">Discord server</a>.',1),Dt=I('<div class="grower svelte-1p41qbd"></div>'),It=I('<section class="header svelte-1p41qbd"><div class="left svelte-1p41qbd"><img alt="Logo" class="logo svelte-1p41qbd"> <!> <!> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div> <!></section> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <section class="svelte-1p41qbd"><div class="container svelte-1p41qbd"><!></div> <div class="container svelte-1p41qbd"><!></div></section> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <section class="reverse svelte-1p41qbd"><div class="about-team svelte-1p41qbd"><!> <div class="icons svelte-1p41qbd"></div></div> <div class="container svelte-1p41qbd"><!></div></section> <section class="svelte-1p41qbd"></section> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <section class="svelte-1p41qbd"><div class="container svelte-1p41qbd"><!></div> <div class="container svelte-1p41qbd"><!></div></section> <section class="svelte-1p41qbd"><div class="card svelte-1p41qbd"><!> <!></div> <div class="card svelte-1p41qbd"><!> <!></div> <div class="card svelte-1p41qbd"><!> <!></div></section> <section class="svelte-1p41qbd"><div class="card svelte-1p41qbd"><!> <!></div> <div class="card svelte-1p41qbd"><!> <!></div> <div class="card svelte-1p41qbd"><!> <!></div></section> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <section class="svelte-1p41qbd"><div class="contact svelte-1p41qbd"><!> <!></div></section> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <footer class="svelte-1p41qbd"><span class="svelte-1p41qbd">hello@snaha.net</span> <a href="mailto:hello@snaha.net" class="svelte-1p41qbd">Contact us</a> <a href="https://github.com/snaha" target="_blank" class="svelte-1p41qbd">Github</a> <a href="/" class="svelte-1p41qbd">Discord</a> <!> <!></footer>',1);function Ft(a,e){ia(e,!0);let t=Za(0);const s=R(()=>g(t)<920),r="/",u=[{name:"Prezi",icon:`${M}/icons/prezi.svg`,link:r},{name:"Felfele",icon:`${M}/icons/felfele.svg`,link:r},{name:"Swarm",icon:`${M}/icons/swarm.svg`,link:r},{name:"Logos",icon:`${M}/icons/logos.svg`,link:r},{name:"Kalkul",icon:`${M}/icons/kalkul.svg`,link:"https://kalkul.app/"},{name:"Diete",icon:`${M}/icons/diete.svg`,link:"https://diete.design/"}],b=[{name:"Attila",img:`${M}/team/attila.png`,info:"Shabby chic enamel pin raclette authentic letterpress, selfies cold-pressed. Ascot adaptogen sus, intelligentsia fingerstache offal food truck narwhal hashtag occupy big mood etsy seitan austin."},{name:"David",img:`${M}/team/david.png`,info:"Put a bird on it man bun freegan semiotics edison bulb unicorn celiac cloud bread grailed you probably haven't heard of them street art shoreditch iPhone. Kinfolk locavore banh mi gluten-free irony trust fund."},{name:"Vojtech",img:`${M}/team/vojtech.png`,info:"Tumblr freegan poke, poutine pug bespoke tacos pour-over cliche normcore selvage. XOXO cray hammock post-ironic, aesthetic typewriter umami. Shaman farm-to-table biodiesel kombucha kinfolk."}];var y=It(),c=U(y),f=P(c),i=P(f);L(i,"src",`${M}/logo.svg`);var x=d(i,2);{var n=l=>{var k=xt();L(k,"src",`${M}/header-img.png`),q(l,k)};ae(x,l=>{g(s)&&l(n)})}var _=d(x,2);const h=R(()=>g(s)?"default":"h3");O(_,{get variant(){return g(h)},class:"normal block",children:(l,k)=>{var v=At();S(2),q(l,v)},$$slots:{default:!0}});var T=d(_,2);const A=R(()=>g(s)?"compact":"large");j(T,()=>({"--colors-ultra-high":"var(--colors-high-accent)"})),yt(T.lastChild,{get dimension(){return g(A)},children:(l,k)=>{S();var v=H("CONTACT US");q(l,v)},$$slots:{default:!0}}),p(T),p(f);var m=d(f,2);{var o=l=>{var k=$t();L(k,"src",`${M}/header-img.png`),q(l,k)};ae(m,l=>{g(s)||l(o)})}p(c);var w=d(c,2);j(w,()=>({"--double-padding":"0"})),Z(w.lastChild,{}),p(w);var $=d(w,2),C=P($),N=P(C);const Y=R(()=>!g(s));V(N,{text:"human- friendly web",color:"accent",get large(){return g(Y)}}),p(C);var F=d(C,2),le=P(F);const oe=R(()=>g(s)?"default":"large");O(le,{get variant(){return g(oe)},children:(l,k)=>{S();var v=Pt();S(3),q(l,v)},$$slots:{default:!0}}),p(F),p($);var te=d($,2);j(te,()=>({"--double-padding":"0"})),Z(te.lastChild,{}),p(te);var ce=d(te,2),de=P(ce),Ie=P(de);const ha=R(()=>g(s)?"default":"large");O(Ie,{get variant(){return g(ha)},class:"block",children:(l,k)=>{S();var v=Nt(),z=d(U(v));L(z,"href",r);var Q=d(z,2);L(Q,"href",r);var ie=d(Q,2);L(ie,"href",r);var we=d(ie,2);L(we,"href",r),S(5),q(l,v)},$$slots:{default:!0}});var Oe=d(Ie,2);Pe(Oe,21,()=>u,$e,(l,k)=>{var v=Et(),z=P(v);p(v),B(()=>{L(v,"href",g(k).link),L(z,"src",g(k).icon),L(z,"alt",g(k).name)}),q(l,v)}),p(Oe),p(de);var Le=d(de,2),pa=P(Le);const _a=R(()=>!g(s));V(pa,{text:"our core team",color:"accent",get large(){return g(_a)}}),p(Le),p(ce);var ve=d(ce,2);Pe(ve,21,()=>b,$e,(l,k)=>{var v=Tt(),z=P(v),Q=d(z,2);V(Q,{get text(){return g(k).name}});var ie=d(Q,2);O(ie,{children:(we,Ot)=>{S();var je=H();B(()=>Ae(je,g(k).info)),q(we,je)},$$slots:{default:!0}}),p(v),B(()=>{L(z,"src",g(k).img),L(z,"alt",g(k).name)}),q(l,v)}),p(ve);var se=d(ve,2);j(se,()=>({"--double-padding":"0"})),Z(se.lastChild,{}),p(se);var fe=d(se,2),ue=P(fe),ga=P(ue);const ba=R(()=>!g(s));V(ga,{text:"connect the dots",color:"accent",get large(){return g(ba)}}),p(ue);var Me=d(ue,2),ma=P(Me);const ya=R(()=>g(s)?"default":"large");O(ma,{get variant(){return g(ya)},children:(l,k)=>{S();var v=Ct();S(3),q(l,v)},$$slots:{default:!0}}),p(Me),p(fe);var he=d(fe,2),pe=P(he),ze=P(pe);V(ze,{text:"Design"});var wa=d(ze,2);O(wa,{children:(l,k)=>{S();var v=H(`Shabby chic enamel pin raclette authentic letterpress, selfies cold-pressed. Ascot adaptogen
			sus, intelligentsia fingerstache offal food truck narwhal hashtag occupy big mood etsy seitan
			austin.`);q(l,v)},$$slots:{default:!0}}),p(pe);var _e=d(pe,2),Re=P(_e);V(Re,{text:"Frontend"});var ka=d(Re,2);O(ka,{children:(l,k)=>{S();var v=H(`Put a bird on it man bun freegan semiotics edison bulb unicorn celiac cloud bread grailed you
			probably haven't heard of them street art shoreditch iPhone. Kinfolk locavore banh mi
			gluten-free irony trust fund.`);q(l,v)},$$slots:{default:!0}}),p(_e);var He=d(_e,2),Ve=P(He);V(Ve,{text:"Backend"});var qa=d(Ve,2);O(qa,{children:(l,k)=>{S();var v=H(`Tumblr freegan poke, poutine pug bespoke tacos pour-over cliche normcore selvage. XOXO cray
			hammock post-ironic, aesthetic typewriter umami. Shaman farm-to-table biodiesel kombucha
			kinfolk.`);q(l,v)},$$slots:{default:!0}}),p(He),p(he);var ge=d(he,2),be=P(ge),Be=P(be);V(Be,{text:"Branding"});var xa=d(Be,2);O(xa,{children:(l,k)=>{S();var v=H(`Tumblr freegan poke, poutine pug bespoke tacos pour-over cliche normcore selvage. XOXO cray
			hammock post-ironic, aesthetic typewriter umami. Shaman farm-to-table biodiesel kombucha
			kinfolk.`);q(l,v)},$$slots:{default:!0}}),p(be);var me=d(be,2),Fe=P(me);V(Fe,{text:"Marketing"});var Aa=d(Fe,2);O(Aa,{children:(l,k)=>{S();var v=H(`Shabby chic enamel pin raclette authentic letterpress, selfies cold-pressed. Ascot adaptogen
			sus, intelligentsia fingerstache offal food truck narwhal hashtag occupy big mood etsy seitan
			austin.`);q(l,v)},$$slots:{default:!0}}),p(me);var Xe=d(me,2),Ke=P(Xe);V(Ke,{text:"Devops"});var $a=d(Ke,2);O($a,{children:(l,k)=>{S();var v=H(`Put a bird on it man bun freegan semiotics edison bulb unicorn celiac cloud bread grailed you
			probably haven't heard of them street art shoreditch iPhone. Kinfolk locavore banh mi
			gluten-free irony trust fund.`);q(l,v)},$$slots:{default:!0}}),p(Xe),p(ge);var re=d(ge,2);j(re,()=>({"--double-padding":"0"})),Z(re.lastChild,{}),p(re);var ye=d(re,2),We=P(ye),Ye=P(We);const Pa=R(()=>g(s)?"default":"large");O(Ye,{get variant(){return g(Pa)},class:"high",children:(l,k)=>{S();var v=H("Something to discuss?");q(l,v)},$$slots:{default:!0}});var Na=d(Ye,2);const Ea=R(()=>g(s)?"default":"h3");O(Na,{get variant(){return g(Ea)},class:"normal block",children:(l,k)=>{S();var v=St();S(4),q(l,v)},$$slots:{default:!0}}),p(We),p(ye);var ne=d(ye,2);j(ne,()=>({"--double-padding":"0"})),Z(ne.lastChild,{}),p(ne);var Ge=d(ne,2),Ue=d(P(Ge),8);{var Ta=l=>{var k=Dt();q(l,k)};ae(Ue,l=>{g(s)||l(Ta)})}var Ca=d(Ue,2);O(Ca,{class:"high end",children:(l,k)=>{S();var v=H();B(z=>Ae(v,z),[()=>new Date().getFullYear()]),q(l,v)},$$slots:{default:!0}}),p(Ge),bt("innerWidth",l=>et(t,ct(l))),q(a,y),la()}export{Ft as component};
