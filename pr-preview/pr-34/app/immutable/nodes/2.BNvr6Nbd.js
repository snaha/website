import{t as T,a as m,d as Oe,b as M}from"../chunks/CMLPisIp.js";import{af as ba,b as wa,s as be,h as R,a5 as ya,e as ka,y as o,P as qa,H as xa,r as Ge,f as we,c as j,a9 as $a,g as je,a as Ke,p as Aa,ao as ye,ad as Je,J as Le,ap as Pa,Y as Da,F as Ye,M as Ta,aq as Sa,ar as Ea,ac as Ca,as as Wa,d as Ia,at as Ha,au as Ma,a7 as Na,t as F,v as g,av as za,m as se,w as l,k as Xe,q as Qe,o as s,z as H,x as q,A as Ba,B as Fa}from"../chunks/Do--xxhB.js";import{s as ke}from"../chunks/DdLTVAIc.js";import{i as te}from"../chunks/KlmBp6Xm.js";import{e as Ra,a as Va,t as L,d as Ze,s as S,T as P,c as G,D as K,b as Oa}from"../chunks/5RDJhmGs.js";import{a as V,r as Ga,p as La}from"../chunks/Cf7sPrYe.js";import{s as Ya}from"../chunks/v0nv_tJt.js";import{b as D}from"../chunks/D5tb0cNF.js";function qe(h,e){return e}function Ua(h,e,r,i){for(var c=[],w=e.length,_=0;_<w;_++)Ea(e[_].e,c,!0);var y=w>0&&c.length===0&&r!==null;if(y){var b=r.parentNode;Ca(b),b.append(r),i.clear(),B(h,e[0].prev,e[w-1].next)}Wa(c,()=>{for(var k=0;k<w;k++){var t=e[k];y||(i.delete(t.k),B(h,t.prev,t.next)),Ia(t.e,!y)}})}function xe(h,e,r,i,c,w=null){var _=h,y={flags:e,items:new Map,first:null};{var b=h;_=R?be(ya(b)):b.appendChild(ba())}R&&ka();var k=null,t=!1,x=qa(()=>{var d=r();return Ta(d)?d:d==null?[]:Je(d)});wa(()=>{var d=o(x),p=d.length;if(t&&p===0)return;t=p===0;let f=!1;if(R){var E=_.data===xa;E!==(p===0)&&(_=Ge(),be(_),we(!1),f=!0)}if(R){for(var A=null,u,$=0;$<p;$++){if(j.nodeType===8&&j.data===$a){_=j,f=!0,we(!1);break}var z=d[$],W=i(z,$);u=ea(j,y,A,null,z,W,$,c,e,r),y.items.set(W,u),A=u}p>0&&be(Ge())}R||ja(d,y,_,c,e,i,r),w!==null&&(p===0?k?je(k):k=Ke(()=>w(_)):k!==null&&Aa(k,()=>{k=null})),f&&we(!0),o(x)}),R&&(_=j)}function ja(h,e,r,i,c,w,_){var y=h.length,b=e.items,k=e.first,t=k,x,d=null,p=[],f=[],E,A,u,$;for($=0;$<y;$+=1){if(E=h[$],A=w(E,$),u=b.get(A),u===void 0){var z=t?t.e.nodes_start:r;d=ea(z,e,d,d===null?e.first:d.next,E,A,$,i,c,_),b.set(A,d),p=[],f=[],t=d.next;continue}if(Ka(u,E,$),u.e.f&ye&&je(u.e),u!==t){if(x!==void 0&&x.has(u)){if(p.length<f.length){var W=f[0],C;d=W.prev;var J=p[0],Y=p[p.length-1];for(C=0;C<p.length;C+=1)Ue(p[C],W,r);for(C=0;C<f.length;C+=1)x.delete(f[C]);B(e,J.prev,Y.next),B(e,d,J),B(e,Y,W),t=W,d=Y,$-=1,p=[],f=[]}else x.delete(u),Ue(u,t,r),B(e,u.prev,u.next),B(e,u,d===null?e.first:d.next),B(e,d,u),d=u;continue}for(p=[],f=[];t!==null&&t.k!==A;)t.e.f&ye||(x??(x=new Set)).add(t),f.push(t),t=t.next;if(t===null)continue;u=t}p.push(u),d=u,t=u.next}if(t!==null||x!==void 0){for(var O=x===void 0?[]:Je(x);t!==null;)t.e.f&ye||O.push(t),t=t.next;var re=O.length;if(re>0){var ne=y===0?r:null;Ua(e,O,ne,b)}}Le.first=e.first&&e.first.e,Le.last=d&&d.e}function Ka(h,e,r,i){Pa(h.v,e),h.i=r}function ea(h,e,r,i,c,w,_,y,b,k){var t=(b&Ha)!==0,x=(b&Ma)===0,d=t?x?Da(c):Ye(c):c,p=b&Sa?Ye(_):_,f={i:p,v:d,k:w,a:null,e:null,prev:r,next:i};try{return f.e=Ke(()=>y(h,d,p,k),R),f.e.prev=r&&r.e,f.e.next=i&&i.e,r===null?e.first=f:(r.next=f,r.e.next=f.e),i!==null&&(i.prev=f,i.e.prev=f.e),f}finally{}}function Ue(h,e,r){for(var i=h.next?h.next.e.nodes_start:r,c=e?e.e.nodes_start:r,w=h.e.nodes_start;w!==i;){var _=Na(w);c.before(w),w=_}}function B(h,e,r){e===null?h.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}var Ja=T("<span><!></span>");function Xa(h,e){let r=V(e,"dimension",3,"default"),i=V(e,"variant",3,"strong"),c=V(e,"class",3,""),w=V(e,"leftAlign",3,!1),_=V(e,"mode",3,"auto"),y=Ga(e,["$$slots","$$events","$$legacy","dimension","variant","active","hover","focus","disabled","href","class","leftAlign","children","mode"]);var b=Ja(),k=g(b);Ra(k,()=>e.href?"a":"button",!1,(t,x)=>{let d;F(()=>{d=Va(t,d,{class:`${r()} ${i()} ${_()}`,href:e.href,disabled:e.disabled,...y},"svelte-1hblcdw",t.namespaceURI===za,t.nodeName.includes("-")),L(t,"leftAlign",w()),L(t,"active",e.active),L(t,"hover",e.hover),L(t,"focus",e.focus)});var p=Oe(),f=se(p);{var E=A=>{var u=Oe(),$=se(u);Ya($,()=>e.children),m(A,u)};te(f,A=>{e.children&&A(E)})}m(x,p)}),l(b),F(()=>{Ze(b,`${`root ${c()}`??""} svelte-1hblcdw`),L(b,"disabled",e.disabled)}),m(h,b)}var Qa=T("<span> </span>"),Za=T("<div></div>");function N(h,e){Xe(e,!0);let r=V(e,"color",3,"top"),i=V(e,"large",3,!1);var c=Za();xe(c,21,()=>e.text.split(" "),qe,(w,_)=>{var y=Qa(),b=g(y,!0);l(y),F(()=>ke(b,o(_))),m(w,y)}),l(c),F(()=>{Ze(c,`root ${r()??""} svelte-17p02z5`),L(c,"large",i())}),m(h,c),Qe()}var et=T('<img alt="Header" class="svelte-1p41qbd">'),at=T('<span class="yellow">We turn worthy ideas into products.</span> Snaha is a product makers collective geared towards making the web a bit better for hoomans.',1),tt=T('<img alt="Header" class="svelte-1p41qbd">'),st=T(`We’re a small and independent OG team defending privacy, freedom and more generally, human
			interests in software products.<br><br>We build for the web — websites, web applications,
			web3 dapps & other crypto-related projects.`,1),rt=T(`Attila and David met back in 2012, while working together at <a class="svelte-1p41qbd">Prezi</a>. In 2019, they co-founded the <a class="svelte-1p41qbd">Felfele Foundation</a>. Shortly after
			that, they met with Vojtech while working with the <a class="svelte-1p41qbd">Swarm Foundation</a>. Since then Attila, David and Vojtech have stuck
			together. They’ve worked with different teams at <a class="svelte-1p41qbd">Logos</a> and
			co-founded Snaha collective together. Besides helping selected clients, Snaha is bootstrapping <a href="https://kalkul.app/" target="_blank" class="svelte-1p41qbd">Kalkul</a> and developing <a href="https://diete.design/" target="_blank" class="svelte-1p41qbd">Diète</a>, its own open-source design system.`,1),nt=T('<a target="_blank" class="svelte-1p41qbd"><img class="svelte-1p41qbd"></a>'),it=T('<div class="card svelte-1p41qbd"><img class="svelte-1p41qbd"> <!> <!></div>'),lt=T(`Successful products result from a delicate assembly of widely different skillsets. Magic
			happens precisely within the in-betweens.<br><br> Our team covers the full spectrum and has
			refined a subtle alchemy in working together — efficiently binding our diverse competences to deliver
			high-quality, seamless products.`,1),ot=T('Drop us an email at <a href="mailto:hello@snaha.net" class="svelte-1p41qbd">hello@snaha.net</a> or join our <a href="/" class="svelte-1p41qbd">Discord server</a>.',1),dt=T('<div class="grower svelte-1p41qbd"></div>'),ct=T('<section class="header svelte-1p41qbd"><div class="left svelte-1p41qbd"><img alt="Logo" class="logo svelte-1p41qbd"> <!> <!> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div> <!></section> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <section class="svelte-1p41qbd"><div class="container svelte-1p41qbd"><!></div> <div class="container svelte-1p41qbd"><!></div></section> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <section class="reverse svelte-1p41qbd"><div class="about-team svelte-1p41qbd"><!> <div class="icons svelte-1p41qbd"></div></div> <div class="container svelte-1p41qbd"><!></div></section> <section class="svelte-1p41qbd"></section> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <section class="svelte-1p41qbd"><div class="container svelte-1p41qbd"><!></div> <div class="container svelte-1p41qbd"><!></div></section> <section class="svelte-1p41qbd"><div class="card svelte-1p41qbd"><!> <!></div> <div class="card svelte-1p41qbd"><!> <!></div> <div class="card svelte-1p41qbd"><!> <!></div></section> <section class="svelte-1p41qbd"><div class="card svelte-1p41qbd"><!> <!></div> <div class="card svelte-1p41qbd"><!> <!></div> <div class="card svelte-1p41qbd"><!> <!></div></section> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <section class="svelte-1p41qbd"><div class="contact svelte-1p41qbd"><!> <!></div></section> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <footer class="svelte-1p41qbd"><span class="svelte-1p41qbd">hello@snaha.net</span> <a class="svelte-1p41qbd">Contact us</a> <a href="https://github.com/snaha" target="_blank" class="svelte-1p41qbd">Github</a> <a href="/" class="svelte-1p41qbd">Discord</a> <!> <!></footer>',1);function wt(h,e){Xe(e,!0);let r=Ba(0);const i=H(()=>o(r)<920),c="/",w=[{name:"Prezi",icon:`${D}/icons/prezi.svg`,link:c},{name:"Felfele",icon:`${D}/icons/felfele.svg`,link:c},{name:"Swarm",icon:`${D}/icons/swarm.svg`,link:c},{name:"Logos",icon:`${D}/icons/logos.svg`,link:c},{name:"Kalkul",icon:`${D}/icons/kalkul.svg`,link:"https://kalkul.app/"},{name:"Diete",icon:`${D}/icons/diete.svg`,link:"https://diete.design/"}],_=[{name:"Attila",img:`${D}/team/attila.png`,info:"Attila is a full-stack engineer and engineering manager who keeps the team well-grounded in reality. Passionate about decentralized systems, cryptography, he goes out of his way to use open-source technology for everything… sometimes to the point where his audio during team calls becomes a heroic struggle. With a people-first approach to management, he knows that great tech is built by great teams."},{name:"David",img:`${D}/team/david.png`,info:"David is leading all design efforts at Snaha. He’s an advocate for purpose-driven design, products that elegantly serve people without taking centre stage. He loves solutions that use just the right amount of technology/resources and make the most out of it — maximum joy, minimum waste. He's somewhere on the line between being detail-oriented and obsessive."},{name:"Vojtech",img:`${D}/team/vojtech.png`,info:"Vojtech is full-stack software engineer with a knack for turning ideas into reality—especially when blockchain is involved. An eternal optimist, he’s the kind of developer who says, “We can build that tomorrow”—and does his best to make it happen. A lifelong dreamer, he’s driven by a desire to contribute to humanity, whether through volunteering, philanthropy, working with organizations pushing scientific progress or finding ways to make a difference in his own city."}];var y=ct(),b=se(y),k=g(b),t=g(k);S(t,"src",`${D}/logo.svg`);var x=s(t,2);{var d=a=>{var v=et();S(v,"src",`${D}/header-img.png`),m(a,v)};te(x,a=>{o(i)&&a(d)})}var p=s(x,2);const f=H(()=>o(i)?"default":"h3");P(p,{get variant(){return o(f)},class:"normal block",children:(a,v)=>{var n=at();q(),m(a,n)},$$slots:{default:!0}});var E=s(p,2);const A=H(()=>o(i)?"compact":"large");G(E,()=>({"--colors-ultra-high":"var(--colors-high-accent)"})),Xa(E.lastChild,{get dimension(){return o(A)},href:`${D}/contact`,children:(a,v)=>{q();var n=M("CONTACT US");m(a,n)},$$slots:{default:!0}}),l(E),l(k);var u=s(k,2);{var $=a=>{var v=tt();S(v,"src",`${D}/header-img.png`),m(a,v)};te(u,a=>{o(i)||a($)})}l(b);var z=s(b,2);G(z,()=>({"--double-padding":"0"})),K(z.lastChild,{}),l(z);var W=s(z,2),C=g(W),J=g(C);const Y=H(()=>!o(i));N(J,{text:"human- friendly web",color:"accent",get large(){return o(Y)}}),l(C);var O=s(C,2),re=g(O);const ne=H(()=>o(i)?"default":"large");P(re,{get variant(){return o(ne)},children:(a,v)=>{q();var n=st();q(3),m(a,n)},$$slots:{default:!0}}),l(O),l(W);var X=s(W,2);G(X,()=>({"--double-padding":"0"})),K(X.lastChild,{}),l(X);var ie=s(X,2),le=g(ie),$e=g(le);const aa=H(()=>o(i)?"default":"large");P($e,{get variant(){return o(aa)},class:"block",children:(a,v)=>{q();var n=rt(),I=s(se(n));S(I,"href",c);var U=s(I,2);S(U,"href",c);var ae=s(U,2);S(ae,"href",c);var _e=s(ae,2);S(_e,"href",c),q(5),m(a,n)},$$slots:{default:!0}});var Ae=s($e,2);xe(Ae,21,()=>w,qe,(a,v)=>{var n=nt(),I=g(n);l(n),F(()=>{S(n,"href",o(v).link),S(I,"src",o(v).icon),S(I,"alt",o(v).name)}),m(a,n)}),l(Ae),l(le);var Pe=s(le,2),ta=g(Pe);const sa=H(()=>!o(i));N(ta,{text:"our core team",color:"accent",get large(){return o(sa)}}),l(Pe),l(ie);var oe=s(ie,2);xe(oe,21,()=>_,qe,(a,v)=>{var n=it(),I=g(n),U=s(I,2);N(U,{get text(){return o(v).name}});var ae=s(U,2);P(ae,{children:(_e,vt)=>{q();var Ve=M();F(()=>ke(Ve,o(v).info)),m(_e,Ve)},$$slots:{default:!0}}),l(n),F(()=>{S(I,"src",o(v).img),S(I,"alt",o(v).name)}),m(a,n)}),l(oe);var Q=s(oe,2);G(Q,()=>({"--double-padding":"0"})),K(Q.lastChild,{}),l(Q);var de=s(Q,2),ce=g(de),ra=g(ce);const na=H(()=>!o(i));N(ra,{text:"connect the dots",color:"accent",get large(){return o(na)}}),l(ce);var De=s(ce,2),ia=g(De);const la=H(()=>o(i)?"default":"large");P(ia,{get variant(){return o(la)},children:(a,v)=>{q();var n=lt();q(3),m(a,n)},$$slots:{default:!0}}),l(De),l(de);var ve=s(de,2),ue=g(ve),Te=g(ue);N(Te,{text:"Design"});var oa=s(Te,2);P(oa,{children:(a,v)=>{q();var n=M(`We can help from defining the product scope and features all the way to the finest execution
			details. We typically use Diète, our own open-source design system, which can be customised
			into a unique visual direction. This allows us to move faster while ensuring quality and the
			highest accessibility standards.`);m(a,n)},$$slots:{default:!0}}),l(ue);var he=s(ue,2),Se=g(he);N(Se,{text:"Frontend"});var da=s(Se,2);P(da,{children:(a,v)=>{q();var n=M(`We build fast, maintainable, and accessible user interfaces using Svelte. Its modern, reactive
			approach allows us to write less code while achieving high performance. We focus on delivering
			smooth interactions, quick load times, and a seamless experience across all devices.`);m(a,n)},$$slots:{default:!0}}),l(he);var Ee=s(he,2),Ce=g(Ee);N(Ce,{text:"Backend"});var ca=s(Ce,2);P(ca,{children:(a,v)=>{q();var n=M(`We develop backend systems that serve as a strong foundation for applications. This includes
			APIs for handling business logic, database management for storing and retrieving data
			efficiently, and authentication to ensure security. We prioritize scalability and
			maintainability while keeping things as simple as possible.`);m(a,n)},$$slots:{default:!0}}),l(Ee),l(ve);var pe=s(ve,2),fe=g(pe),We=g(fe);N(We,{text:"Branding"});var va=s(We,2);P(va,{children:(a,v)=>{q();var n=M(`Meaningful branding will help make your product stand out. We believe that there should be a
			strong connection between the product and the brand. Based on product design, we can help with
			defining a minimal brand concept and strategy, designing your product logo and actionable
			branding guidelines to build websites, marketing material and more.`);m(a,n)},$$slots:{default:!0}}),l(fe);var ge=s(fe,2),Ie=g(ge);N(Ie,{text:"Marketing"});var ua=s(Ie,2);P(ua,{children:(a,v)=>{q();var n=M(`Great design, code and branding are rarely enough to make a product successful. We can help
			crafting tailored marketing strategies and creative campaigns to reach the strategic audience
			for your product. We can help with writing content in line with your brand’s tone of voice and
			create all the required visual material to support marketing campaigns.`);m(a,n)},$$slots:{default:!0}}),l(ge);var He=s(ge,2),Me=g(He);N(Me,{text:"DevOps"});var ha=s(Me,2);P(ha,{children:(a,v)=>{q();var n=M(`Successful products stand and fall with availability. A great user experience means nothing if
			your product is unreliable. We ensure that deployments are automated, infrastructure is
			scalable, and monitoring is in place to catch issues before they become problems. As they say,
			"Good infrastructure is invisible"—our goal is to make sure everything runs smoothly without
			anyone noticing.`);m(a,n)},$$slots:{default:!0}}),l(He),l(pe);var Z=s(pe,2);G(Z,()=>({"--double-padding":"0"})),K(Z.lastChild,{}),l(Z);var me=s(Z,2),Ne=g(me),ze=g(Ne);const pa=H(()=>o(i)?"default":"large");P(ze,{get variant(){return o(pa)},class:"high",children:(a,v)=>{q();var n=M("Something to discuss?");m(a,n)},$$slots:{default:!0}});var fa=s(ze,2);const ga=H(()=>o(i)?"default":"h3");P(fa,{get variant(){return o(ga)},class:"normal block",children:(a,v)=>{q();var n=ot();q(4),m(a,n)},$$slots:{default:!0}}),l(Ne),l(me);var ee=s(me,2);G(ee,()=>({"--double-padding":"0"})),K(ee.lastChild,{}),l(ee);var Be=s(ee,2),Fe=s(g(Be),2);S(Fe,"href",`${D}/contact`);var Re=s(Fe,6);{var ma=a=>{var v=dt();m(a,v)};te(Re,a=>{o(i)||a(ma)})}var _a=s(Re,2);P(_a,{class:"high end",children:(a,v)=>{q();var n=M();F(I=>ke(n,I),[()=>new Date().getFullYear()]),m(a,n)},$$slots:{default:!0}}),l(Be),Oa("innerWidth",a=>Fa(r,La(a))),m(h,y),Qe()}export{wt as component};
