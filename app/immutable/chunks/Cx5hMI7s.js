import{a3 as J,ap as O,_ as R,h as d,s as z,a5 as V,b as K,e as S,c as C,E as U,a as H,az as x,af as Q,f as k,J as W,p as Z,g as $,d as ss,aA as es,L as ts,aB as as,ao as rs,t as B,m as P}from"./Pm1olj0r.js";import{i as is,a as ls,c as fs,d as ns,n as os,b as cs,l as us,w as M}from"./DyyYq0KV.js";import{c as _s,t as vs,a as L,d as m}from"./C2d6hwFH.js";import{a as w,r as j}from"./DLp-s-Xq.js";import{i as ds}from"./Ceb_C3fV.js";import{s as hs}from"./BzkoLcCa.js";function gs(s,e){if(e){const t=document.body;s.autofocus=!0,J(()=>{document.activeElement===t&&s.focus()})}}function zs(s,e){d&&z(V(s)),O(()=>{var t=e();for(var a in t){var r=t[a];r?s.style.setProperty(a,r):s.style.removeProperty(a)}}),R(()=>{s.remove()})}function ps(s,e,t,a,r,o){let h=d;d&&S();var g,c,n=null;d&&C.nodeType===1&&(n=C,S());var b=d?C:s,p;K(()=>{const f=e()||null;var N=f==="svg"?x:null;f!==g&&(p&&(f===null?Z(p,()=>{p=null,c=null}):f===c?$(p):ss(p)),f&&f!==c&&(p=H(()=>{if(n=d?n:N?document.createElementNS(N,f):document.createElement(f),_s(n,n),a){d&&is(f)&&n.append(document.createComment(""));var y=d?V(n):n.appendChild(Q());d&&(y===null?k(!1):z(y)),a(n,y)}W.nodes_end=n,b.before(n)})),g=f,g&&(c=g))},U),h&&(k(!0),z(b))}function F(s){var e,t,a="";if(typeof s=="string"||typeof s=="number")a+=s;else if(typeof s=="object")if(Array.isArray(s)){var r=s.length;for(e=0;e<r;e++)s[e]&&(t=F(s[e]))&&(a&&(a+=" "),a+=t)}else for(t in s)s[t]&&(a&&(a+=" "),a+=t);return a}function ys(){for(var s,e,t=0,a="",r=arguments.length;t<r;t++)(s=arguments[t])&&(e=F(s))&&(a&&(a+=" "),a+=e);return a}function bs(s){return typeof s=="object"?ys(s):s??""}function ws(s,e){e?s.hasAttribute("selected")||s.setAttribute("selected",""):s.removeAttribute("selected")}function Ns(s,e,t,a){var r=s.__attributes??(s.__attributes={});d&&(r[e]=s.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&s.nodeName==="LINK")||r[e]!==(r[e]=t)&&(e==="style"&&"__styles"in s&&(s.__styles={}),e==="loading"&&(s[es]=t),t==null?s.removeAttribute(e):typeof t!="string"&&X(s).includes(e)?s[e]=t:s.setAttribute(e,t))}function G(s,e,t,a,r=!1,o=!1,h=!1){let g=d&&o;g&&k(!1);var c=e||{},n=s.tagName==="OPTION";for(var b in e)b in t||(t[b]=null);t.class&&(t.class=bs(t.class)),a!==void 0&&(t.class=t.class?t.class+" "+a:a);var p=X(s),f=s.__attributes??(s.__attributes={});for(const i in t){let l=t[i];if(n&&i==="value"&&l==null){s.value=s.__value="",c[i]=l;continue}var N=c[i];if(l!==N){c[i]=l;var y=i[0]+i[1];if(y!=="$$"){if(y==="on"){const u={},T="$$"+i;let _=i.slice(2);var A=cs(_);if(ls(_)&&(_=_.slice(0,-7),u.capture=!0),!A&&N){if(l!=null)continue;s.removeEventListener(_,c[T],u),c[T]=null}if(l!=null)if(A)s[`__${_}`]=l,ns([_]);else{let Y=function(q){c[i].call(this,q)};c[T]=fs(_,s,Y,u)}else A&&(s[`__${_}`]=void 0)}else if(i==="style"&&l!=null)s.style.cssText=l+"";else if(i==="autofocus")gs(s,!!l);else if(!o&&(i==="__value"||i==="value"&&l!=null))s.value=s.__value=l;else if(i==="selected"&&n)ws(s,l);else{var v=i;r||(v=os(v));var E=v==="defaultValue"||v==="defaultChecked";if(l==null&&!o&&!E)if(f[i]=null,v==="value"||v==="checked"){let u=s;const T=e===void 0;if(v==="value"){let _=u.defaultValue;u.removeAttribute(v),u.defaultValue=_,u.value=u.__value=T?_:null}else{let _=u.defaultChecked;u.removeAttribute(v),u.defaultChecked=_,u.checked=T?_:!1}}else s.removeAttribute(i);else E||p.includes(v)&&(o||typeof l!="string")?s[v]=l:typeof l!="function"&&Ns(s,v,l)}i==="style"&&"__styles"in s&&(s.__styles={})}}}return g&&k(!0),c}var D=new Map;function X(s){var e=D.get(s.nodeName);if(e)return e;D.set(s.nodeName,e=[]);for(var t,a=s,r=Element.prototype;r!==a;){t=as(a);for(var o in t)t[o].set&&e.push(o);a=ts(a)}return e}function Ss(s,e,t){var a=s.__className,r=As(e);d&&s.className===r?s.__className=r:(a!==r||d&&s.className!==r)&&(e==null?s.removeAttribute("class"):s.className=r,s.__className=r)}function As(s,e){return(s??"")+""}function I(s,e,t){if(t){if(s.classList.contains(e))return;s.classList.add(e)}else{if(!s.classList.contains(e))return;s.classList.remove(e)}}function Ds(s,e,t=e){var a=s==="x",r=()=>M(()=>{o=!0,clearTimeout(h),h=setTimeout(g,100),t(window[a?"scrollX":"scrollY"])});addEventListener("scroll",r,{passive:!0});var o=!1,h,g=()=>{o=!1},c=!0;O(()=>{var n=e();c?c=!1:!o&&n!=null&&(o=!0,clearTimeout(h),scrollTo(window.scrollX,n),h=setTimeout(g,100))}),rs(r),R(()=>{removeEventListener("scroll",r)})}function Is(s,e){us(window,["resize"],()=>M(()=>e(window[s])))}var Ts=vs("<hr>");function Os(s,e){let t=w(e,"orientation",3,"horizontal"),a=w(e,"class",3,""),r=j(e,["$$slots","$$events","$$legacy","orientation","class"]);var o=Ts();let h;B(()=>h=G(o,h,{class:`${t()??""} ${a()??""}`,...r},"svelte-4zatmg")),L(s,o)}function Rs(s,e){function t(f){switch(f){case"h1":return"h1";case"h2":return"h2";case"h3":return"h3";case"h4":return"h4";case"h5":return"h5";case"h6":return"h6";default:return"span"}}let a=w(e,"variant",3,"default"),r=w(e,"element",19,()=>t(a())),o=w(e,"font",3,"sans"),h=w(e,"bold",3,!1),g=w(e,"italic",3,!1),c=w(e,"class",3,""),n=j(e,["$$slots","$$events","$$legacy","variant","element","font","bold","italic","class","children"]);var b=m(),p=P(b);ps(p,r,!1,(f,N)=>{let y;B(()=>{y=G(f,y,{class:`root ${o()} ${a()} ${c()}`,...n},"svelte-1k85xwk",f.namespaceURI===x,f.nodeName.includes("-")),I(f,"bold",h()),I(f,"italic",g())});var A=m(),v=P(A);{var E=i=>{var l=m(),u=P(l);hs(u,()=>e.children),L(i,l)};ds(v,i=>{e.children&&i(E)})}L(N,A)}),L(s,b)}export{Os as D,Rs as T,G as a,Is as b,zs as c,Ss as d,ps as e,Ds as f,Ns as s,I as t};
