import{t as D,a as _,d as Ve,b as N}from"../chunks/CMLPisIp.js";import{af as ba,b as ya,s as be,h as F,a5 as wa,e as ka,y as o,P as qa,H as xa,r as Ge,f as ye,c as U,a9 as $a,g as Ue,a as Xe,p as Aa,ao as we,ad as Je,J as Le,ap as Pa,Y as Ta,F as Ye,M as Da,aq as Sa,ar as Ea,ac as Ca,as as Wa,d as Ia,at as Ma,au as Na,a7 as Ha,t as B,v as g,av as Oa,m as se,w as l,k as Qe,q as Ze,o as s,z as M,x as q,A as za,B as Ba}from"../chunks/Do--xxhB.js";import{s as ke}from"../chunks/DdLTVAIc.js";import{i as te}from"../chunks/KlmBp6Xm.js";import{e as Fa,a as Ra,t as L,d as je,s as S,T as P,c as G,D as X,b as Va}from"../chunks/5RDJhmGs.js";import{a as R,r as Ga,p as La}from"../chunks/Cf7sPrYe.js";import{s as Ya}from"../chunks/v0nv_tJt.js";import{b as T}from"../chunks/bNKZIxyd.js";function qe(f,e){return e}function Ka(f,e,r,i){for(var c=[],y=e.length,m=0;m<y;m++)Ea(e[m].e,c,!0);var w=y>0&&c.length===0&&r!==null;if(w){var b=r.parentNode;Ca(b),b.append(r),i.clear(),z(f,e[0].prev,e[y-1].next)}Wa(c,()=>{for(var k=0;k<y;k++){var t=e[k];w||(i.delete(t.k),z(f,t.prev,t.next)),Ia(t.e,!w)}})}function xe(f,e,r,i,c,y=null){var m=f,w={flags:e,items:new Map,first:null};{var b=f;m=F?be(wa(b)):b.appendChild(ba())}F&&ka();var k=null,t=!1,x=qa(()=>{var d=r();return Da(d)?d:d==null?[]:Je(d)});ya(()=>{var d=o(x),p=d.length;if(t&&p===0)return;t=p===0;let h=!1;if(F){var E=m.data===xa;E!==(p===0)&&(m=Ge(),be(m),ye(!1),h=!0)}if(F){for(var A=null,u,$=0;$<p;$++){if(U.nodeType===8&&U.data===$a){m=U,h=!0,ye(!1);break}var O=d[$],W=i(O,$);u=ea(U,w,A,null,O,W,$,c,e,r),w.items.set(W,u),A=u}p>0&&be(Ge())}F||Ua(d,w,m,c,e,i,r),y!==null&&(p===0?k?Ue(k):k=Xe(()=>y(m)):k!==null&&Aa(k,()=>{k=null})),h&&ye(!0),o(x)}),F&&(m=U)}function Ua(f,e,r,i,c,y,m){var w=f.length,b=e.items,k=e.first,t=k,x,d=null,p=[],h=[],E,A,u,$;for($=0;$<w;$+=1){if(E=f[$],A=y(E,$),u=b.get(A),u===void 0){var O=t?t.e.nodes_start:r;d=ea(O,e,d,d===null?e.first:d.next,E,A,$,i,c,m),b.set(A,d),p=[],h=[],t=d.next;continue}if(Xa(u,E,$),u.e.f&we&&Ue(u.e),u!==t){if(x!==void 0&&x.has(u)){if(p.length<h.length){var W=h[0],C;d=W.prev;var J=p[0],Y=p[p.length-1];for(C=0;C<p.length;C+=1)Ke(p[C],W,r);for(C=0;C<h.length;C+=1)x.delete(h[C]);z(e,J.prev,Y.next),z(e,d,J),z(e,Y,W),t=W,d=Y,$-=1,p=[],h=[]}else x.delete(u),Ke(u,t,r),z(e,u.prev,u.next),z(e,u,d===null?e.first:d.next),z(e,d,u),d=u;continue}for(p=[],h=[];t!==null&&t.k!==A;)t.e.f&we||(x??(x=new Set)).add(t),h.push(t),t=t.next;if(t===null)continue;u=t}p.push(u),d=u,t=u.next}if(t!==null||x!==void 0){for(var V=x===void 0?[]:Je(x);t!==null;)t.e.f&we||V.push(t),t=t.next;var re=V.length;if(re>0){var ne=w===0?r:null;Ka(e,V,ne,b)}}Le.first=e.first&&e.first.e,Le.last=d&&d.e}function Xa(f,e,r,i){Pa(f.v,e),f.i=r}function ea(f,e,r,i,c,y,m,w,b,k){var t=(b&Ma)!==0,x=(b&Na)===0,d=t?x?Ta(c):Ye(c):c,p=b&Sa?Ye(m):m,h={i:p,v:d,k:y,a:null,e:null,prev:r,next:i};try{return h.e=Xe(()=>w(f,d,p,k),F),h.e.prev=r&&r.e,h.e.next=i&&i.e,r===null?e.first=h:(r.next=h,r.e.next=h.e),i!==null&&(i.prev=h,i.e.prev=h.e),h}finally{}}function Ke(f,e,r){for(var i=f.next?f.next.e.nodes_start:r,c=e?e.e.nodes_start:r,y=f.e.nodes_start;y!==i;){var m=Ha(y);c.before(y),y=m}}function z(f,e,r){e===null?f.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}var Ja=D("<span><!></span>");function Qa(f,e){let r=R(e,"dimension",3,"default"),i=R(e,"variant",3,"strong"),c=R(e,"class",3,""),y=R(e,"leftAlign",3,!1),m=R(e,"mode",3,"auto"),w=Ga(e,["$$slots","$$events","$$legacy","dimension","variant","active","hover","focus","disabled","href","class","leftAlign","children","mode"]);var b=Ja(),k=g(b);Fa(k,()=>e.href?"a":"button",!1,(t,x)=>{let d;B(()=>{d=Ra(t,d,{class:`${r()} ${i()} ${m()}`,href:e.href,disabled:e.disabled,...w},"svelte-1hblcdw",t.namespaceURI===Oa,t.nodeName.includes("-")),L(t,"leftAlign",y()),L(t,"active",e.active),L(t,"hover",e.hover),L(t,"focus",e.focus)});var p=Ve(),h=se(p);{var E=A=>{var u=Ve(),$=se(u);Ya($,()=>e.children),_(A,u)};te(h,A=>{e.children&&A(E)})}_(x,p)}),l(b),B(()=>{je(b,`${`root ${c()}`??""} svelte-1hblcdw`),L(b,"disabled",e.disabled)}),_(f,b)}var Za=D("<span> </span>"),ja=D("<div></div>");function H(f,e){Qe(e,!0);let r=R(e,"color",3,"top"),i=R(e,"large",3,!1);var c=ja();xe(c,21,()=>e.text.split(" "),qe,(y,m)=>{var w=Za(),b=g(w,!0);l(w),B(()=>ke(b,o(m))),_(y,w)}),l(c),B(()=>{je(c,`root ${r()??""} svelte-17p02z5`),L(c,"large",i())}),_(f,c),Ze()}var et=D('<img alt="Header" class="svelte-1p41qbd">'),at=D('<span class="yellow">We turn worthy ideas into products.</span><br> We’re an OG team geared towards making the web a bit better for hoomans.',1),tt=D('<img alt="Header" class="svelte-1p41qbd">'),st=D(`We’re a small and independent team defending privacy, freedom and more generally, human
			interests in software products.<br><br>We build for the web — websites, web applications,
			web3 dapps & other crypto-related projects.`,1),rt=D(`Attila and David met back in 2012, while working together at <a class="svelte-1p41qbd">Prezi</a>. In 2019, they co-founded the <a class="svelte-1p41qbd">Felfele Foundation</a>. Shortly after
			that, they met with Vojtech while working with the <a class="svelte-1p41qbd">Swarm Foundation</a>. Since them Attila, David and Vojtech have stuck
			together. They’ve worked with different teams at <a class="svelte-1p41qbd">Logos</a> and
			co-founded Snaha together. Besides helping selected clients, Snaha is bootstrapping <a href="https://kalkul.app/" target="_blank" class="svelte-1p41qbd">Kalkul</a> and developing <a href="https://diete.design/" target="_blank" class="svelte-1p41qbd">Diète</a>, its own open-source design system.`,1),nt=D('<a target="_blank" class="svelte-1p41qbd"><img class="svelte-1p41qbd"></a>'),it=D('<div class="card svelte-1p41qbd"><img class="svelte-1p41qbd"> <!> <!></div>'),lt=D(`Successful products result from a delicate assembly of widely different skillsets. Magic
			happens precisely within the in-betweens.<br><br> Our team covers the full spectrum and has
			refined a subtle alchemy in working together — efficiently binding our diverse competences to deliver
			high-quality, seamless products.`,1),ot=D('Drop us an email at <a href="mailto:hello@snaha.net" class="svelte-1p41qbd">hello@snaha.net</a> or join our <a href="/" class="svelte-1p41qbd">Discord server</a>.',1),dt=D('<div class="grower svelte-1p41qbd"></div>'),ct=D('<section class="header svelte-1p41qbd"><div class="left svelte-1p41qbd"><img alt="Logo" class="logo svelte-1p41qbd"> <!> <!> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div> <!></section> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <section class="svelte-1p41qbd"><div class="container svelte-1p41qbd"><!></div> <div class="container svelte-1p41qbd"><!></div></section> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <section class="reverse svelte-1p41qbd"><div class="about-team svelte-1p41qbd"><!> <div class="icons svelte-1p41qbd"></div></div> <div class="container svelte-1p41qbd"><!></div></section> <section class="svelte-1p41qbd"></section> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <section class="svelte-1p41qbd"><div class="container svelte-1p41qbd"><!></div> <div class="container svelte-1p41qbd"><!></div></section> <section class="svelte-1p41qbd"><div class="card svelte-1p41qbd"><!> <!></div> <div class="card svelte-1p41qbd"><!> <!></div> <div class="card svelte-1p41qbd"><!> <!></div></section> <section class="svelte-1p41qbd"><div class="card svelte-1p41qbd"><!> <!></div> <div class="card svelte-1p41qbd"><!> <!></div> <div class="card svelte-1p41qbd"><!> <!></div></section> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <section class="svelte-1p41qbd"><div class="contact svelte-1p41qbd"><!> <!></div></section> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <footer class="svelte-1p41qbd"><span class="svelte-1p41qbd">hello@snaha.net</span> <a class="svelte-1p41qbd">Contact us</a> <a href="https://github.com/snaha" target="_blank" class="svelte-1p41qbd">Github</a> <a href="/" class="svelte-1p41qbd">Discord</a> <!> <!></footer>',1);function yt(f,e){Qe(e,!0);let r=za(0);const i=M(()=>o(r)<920),c="/",y=[{name:"Prezi",icon:`${T}/icons/prezi.svg`,link:c},{name:"Felfele",icon:`${T}/icons/felfele.svg`,link:c},{name:"Swarm",icon:`${T}/icons/swarm.svg`,link:c},{name:"Logos",icon:`${T}/icons/logos.svg`,link:c},{name:"Kalkul",icon:`${T}/icons/kalkul.svg`,link:"https://kalkul.app/"},{name:"Diete",icon:`${T}/icons/diete.svg`,link:"https://diete.design/"}],m=[{name:"Attila",img:`${T}/team/attila.png`,info:"Shabby chic enamel pin raclette authentic letterpress, selfies cold-pressed. Ascot adaptogen sus, intelligentsia fingerstache offal food truck narwhal hashtag occupy big mood etsy seitan austin."},{name:"David",img:`${T}/team/david.png`,info:"Put a bird on it man bun freegan semiotics edison bulb unicorn celiac cloud bread grailed you probably haven't heard of them street art shoreditch iPhone. Kinfolk locavore banh mi gluten-free irony trust fund."},{name:"Vojtech",img:`${T}/team/vojtech.png`,info:"Tumblr freegan poke, poutine pug bespoke tacos pour-over cliche normcore selvage. XOXO cray hammock post-ironic, aesthetic typewriter umami. Shaman farm-to-table biodiesel kombucha kinfolk."}];var w=ct(),b=se(w),k=g(b),t=g(k);S(t,"src",`${T}/logo.svg`);var x=s(t,2);{var d=a=>{var v=et();S(v,"src",`${T}/header-img.png`),_(a,v)};te(x,a=>{o(i)&&a(d)})}var p=s(x,2);const h=M(()=>o(i)?"default":"h3");P(p,{get variant(){return o(h)},class:"normal block",children:(a,v)=>{var n=at();q(2),_(a,n)},$$slots:{default:!0}});var E=s(p,2);const A=M(()=>o(i)?"compact":"large");G(E,()=>({"--colors-ultra-high":"var(--colors-high-accent)"})),Qa(E.lastChild,{get dimension(){return o(A)},href:`${T}/contact`,children:(a,v)=>{q();var n=N("CONTACT US");_(a,n)},$$slots:{default:!0}}),l(E),l(k);var u=s(k,2);{var $=a=>{var v=tt();S(v,"src",`${T}/header-img.png`),_(a,v)};te(u,a=>{o(i)||a($)})}l(b);var O=s(b,2);G(O,()=>({"--double-padding":"0"})),X(O.lastChild,{}),l(O);var W=s(O,2),C=g(W),J=g(C);const Y=M(()=>!o(i));H(J,{text:"human- friendly web",color:"accent",get large(){return o(Y)}}),l(C);var V=s(C,2),re=g(V);const ne=M(()=>o(i)?"default":"large");P(re,{get variant(){return o(ne)},children:(a,v)=>{q();var n=st();q(3),_(a,n)},$$slots:{default:!0}}),l(V),l(W);var Q=s(W,2);G(Q,()=>({"--double-padding":"0"})),X(Q.lastChild,{}),l(Q);var ie=s(Q,2),le=g(ie),$e=g(le);const aa=M(()=>o(i)?"default":"large");P($e,{get variant(){return o(aa)},class:"block",children:(a,v)=>{q();var n=rt(),I=s(se(n));S(I,"href",c);var K=s(I,2);S(K,"href",c);var ae=s(K,2);S(ae,"href",c);var me=s(ae,2);S(me,"href",c),q(5),_(a,n)},$$slots:{default:!0}});var Ae=s($e,2);xe(Ae,21,()=>y,qe,(a,v)=>{var n=nt(),I=g(n);l(n),B(()=>{S(n,"href",o(v).link),S(I,"src",o(v).icon),S(I,"alt",o(v).name)}),_(a,n)}),l(Ae),l(le);var Pe=s(le,2),ta=g(Pe);const sa=M(()=>!o(i));H(ta,{text:"our core team",color:"accent",get large(){return o(sa)}}),l(Pe),l(ie);var oe=s(ie,2);xe(oe,21,()=>m,qe,(a,v)=>{var n=it(),I=g(n),K=s(I,2);H(K,{get text(){return o(v).name}});var ae=s(K,2);P(ae,{children:(me,vt)=>{q();var Re=N();B(()=>ke(Re,o(v).info)),_(me,Re)},$$slots:{default:!0}}),l(n),B(()=>{S(I,"src",o(v).img),S(I,"alt",o(v).name)}),_(a,n)}),l(oe);var Z=s(oe,2);G(Z,()=>({"--double-padding":"0"})),X(Z.lastChild,{}),l(Z);var de=s(Z,2),ce=g(de),ra=g(ce);const na=M(()=>!o(i));H(ra,{text:"connect the dots",color:"accent",get large(){return o(na)}}),l(ce);var Te=s(ce,2),ia=g(Te);const la=M(()=>o(i)?"default":"large");P(ia,{get variant(){return o(la)},children:(a,v)=>{q();var n=lt();q(3),_(a,n)},$$slots:{default:!0}}),l(Te),l(de);var ve=s(de,2),ue=g(ve),De=g(ue);H(De,{text:"Design"});var oa=s(De,2);P(oa,{children:(a,v)=>{q();var n=N(`We can help from defining the product scope and features all the way to the finest execution
			details. We typically use Diète, our own open-source design system, which can be customised
			into a unique visual direction. This allows us to move faster while ensuring quality and the
			highest accessibility standards.`);_(a,n)},$$slots:{default:!0}}),l(ue);var fe=s(ue,2),Se=g(fe);H(Se,{text:"Frontend"});var da=s(Se,2);P(da,{children:(a,v)=>{q();var n=N(`We build fast, maintainable, and accessible user interfaces using Svelte. Its modern, reactive
			approach allows us to write less code while achieving high performance. We focus on delivering
			smooth interactions, quick load times, and a seamless experience across all devices.`);_(a,n)},$$slots:{default:!0}}),l(fe);var Ee=s(fe,2),Ce=g(Ee);H(Ce,{text:"Backend"});var ca=s(Ce,2);P(ca,{children:(a,v)=>{q();var n=N(`We develop backend systems that serve as a strong foundation for applications. This includes
			APIs for handling business logic, database management for storing and retrieving data
			efficiently, and authentication to ensure security. We prioritize scalability and
			maintainability while keeping things as simple as possible.`);_(a,n)},$$slots:{default:!0}}),l(Ee),l(ve);var pe=s(ve,2),he=g(pe),We=g(he);H(We,{text:"Branding"});var va=s(We,2);P(va,{children:(a,v)=>{q();var n=N(`Meaningful branding will help make your product stand out. We believe that there should be a
			strong connection between the product and the brand. Based on product design, we can help with
			defining a minimal brand concept and strategy, designing your product logo and actionable
			branding guidelines to build websites, marketing material and more.`);_(a,n)},$$slots:{default:!0}}),l(he);var ge=s(he,2),Ie=g(ge);H(Ie,{text:"Marketing"});var ua=s(Ie,2);P(ua,{children:(a,v)=>{q();var n=N(`Great design, code and branding are rarely enough to make a product successful. We can help
			crafting tailored marketing strategies and creative campaigns to reach the strategic audience
			for your product. We can help with writing content in line with your brand’s tone of voice and
			create all the required visual material to support marketing campaigns.`);_(a,n)},$$slots:{default:!0}}),l(ge);var Me=s(ge,2),Ne=g(Me);H(Ne,{text:"DevOps"});var fa=s(Ne,2);P(fa,{children:(a,v)=>{q();var n=N(`Successful products stand and fall with availability. A great user experience means nothing if
			your product is unreliable. We ensure that deployments are automated, infrastructure is
			scalable, and monitoring is in place to catch issues before they become problems. As they say,
			"Good infrastructure is invisible"—our goal is to make sure everything runs smoothly without
			anyone noticing.`);_(a,n)},$$slots:{default:!0}}),l(Me),l(pe);var j=s(pe,2);G(j,()=>({"--double-padding":"0"})),X(j.lastChild,{}),l(j);var _e=s(j,2),He=g(_e),Oe=g(He);const pa=M(()=>o(i)?"default":"large");P(Oe,{get variant(){return o(pa)},class:"high",children:(a,v)=>{q();var n=N("Something to discuss?");_(a,n)},$$slots:{default:!0}});var ha=s(Oe,2);const ga=M(()=>o(i)?"default":"h3");P(ha,{get variant(){return o(ga)},class:"normal block",children:(a,v)=>{q();var n=ot();q(4),_(a,n)},$$slots:{default:!0}}),l(He),l(_e);var ee=s(_e,2);G(ee,()=>({"--double-padding":"0"})),X(ee.lastChild,{}),l(ee);var ze=s(ee,2),Be=s(g(ze),2);S(Be,"href",`${T}/contact`);var Fe=s(Be,6);{var _a=a=>{var v=dt();_(a,v)};te(Fe,a=>{o(i)||a(_a)})}var ma=s(Fe,2);P(ma,{class:"high end",children:(a,v)=>{q();var n=N();B(I=>ke(n,I),[()=>new Date().getFullYear()]),_(a,n)},$$slots:{default:!0}}),l(ze),Va("innerWidth",a=>Ba(r,La(a))),_(f,w),Ze()}export{yt as component};
