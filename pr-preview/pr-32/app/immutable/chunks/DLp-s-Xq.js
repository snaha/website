import{S as N,C as Y,D as q,F as g,G as j,w as b,U as d,B as o,I as A,J as C,K as G,L as Z,M as V,N as $,O as z,x as K,P as F,Q as J,R as Q,j as M,T as W,V as X,l as H,W as k,X as p,Y as ee,Z as re}from"./Pm1olj0r.js";function O(r,a=null,P){if(typeof r!="object"||r===null||N in r)return r;const y=Z(r);if(y!==Y&&y!==q)return r;var u=new Map,c=V(r),w=g(0);c&&u.set("length",g(r.length));var I;return new Proxy(r,{defineProperty(f,e,n){(!("value"in n)||n.configurable===!1||n.enumerable===!1||n.writable===!1)&&G();var i=u.get(e);return i===void 0?(i=g(n.value),u.set(e,i)):o(i,O(n.value,I)),!0},deleteProperty(f,e){var n=u.get(e);if(n===void 0)e in f&&u.set(e,g(d));else{if(c&&typeof e=="string"){var i=u.get("length"),t=Number(e);Number.isInteger(t)&&t<i.v&&o(i,t)}o(n,d),U(w)}return!0},get(f,e,n){var v;if(e===N)return r;var i=u.get(e),t=e in f;if(i===void 0&&(!t||(v=A(f,e))!=null&&v.writable)&&(i=g(O(t?f[e]:d,I)),u.set(e,i)),i!==void 0){var s=b(i);return s===d?void 0:s}return Reflect.get(f,e,n)},getOwnPropertyDescriptor(f,e){var n=Reflect.getOwnPropertyDescriptor(f,e);if(n&&"value"in n){var i=u.get(e);i&&(n.value=b(i))}else if(n===void 0){var t=u.get(e),s=t==null?void 0:t.v;if(t!==void 0&&s!==d)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return n},has(f,e){var s;if(e===N)return!0;var n=u.get(e),i=n!==void 0&&n.v!==d||Reflect.has(f,e);if(n!==void 0||C!==null&&(!i||(s=A(f,e))!=null&&s.writable)){n===void 0&&(n=g(i?O(f[e],I):d),u.set(e,n));var t=b(n);if(t===d)return!1}return i},set(f,e,n,i){var R;var t=u.get(e),s=e in f;if(c&&e==="length")for(var v=n;v<t.v;v+=1){var m=u.get(v+"");m!==void 0?o(m,d):v in f&&(m=g(d),u.set(v+"",m))}t===void 0?(!s||(R=A(f,e))!=null&&R.writable)&&(t=g(void 0),o(t,O(n,I)),u.set(e,t)):(s=t.v!==d,o(t,O(n,I)));var _=Reflect.getOwnPropertyDescriptor(f,e);if(_!=null&&_.set&&_.set.call(i,n),!s){if(c&&typeof e=="string"){var h=u.get("length"),x=Number(e);Number.isInteger(x)&&x>=h.v&&o(h,x+1)}U(w)}return!0},ownKeys(f){b(w);var e=Reflect.ownKeys(f).filter(t=>{var s=u.get(t);return s===void 0||s.v!==d});for(var[n,i]of u)i.v!==d&&!(n in f)&&e.push(n);return e},setPrototypeOf(){j()}})}function U(r,a=1){o(r,r.v+a)}let E=!1;function ne(r){var a=E;try{return E=!1,[r(),E]}finally{E=a}}const te={get(r,a){if(!r.exclude.includes(a))return r.props[a]},set(r,a){return!1},getOwnPropertyDescriptor(r,a){if(!r.exclude.includes(a)&&a in r.props)return{enumerable:!0,configurable:!0,value:r.props[a]}},has(r,a){return r.exclude.includes(a)?!1:a in r.props},ownKeys(r){return Reflect.ownKeys(r.props).filter(a=>!r.exclude.includes(a))}};function ae(r,a,P){return new Proxy({props:r,exclude:a},te)}function fe(r,a,P,y){var B;var u=(P&p)!==0,c=!H||(P&k)!==0,w=(P&W)!==0,I=(P&re)!==0,f=!1,e;w?[e,f]=ne(()=>r[a]):e=r[a];var n=N in r||X in r,i=w&&(((B=A(r,a))==null?void 0:B.set)??(n&&a in r&&(l=>r[a]=l)))||void 0,t=y,s=!0,v=!1,m=()=>(v=!0,s&&(s=!1,I?t=M(y):t=y),t);e===void 0&&y!==void 0&&(i&&c&&$(),e=m(),i&&i(e));var _;if(c)_=()=>{var l=r[a];return l===void 0?m():(s=!0,v=!1,l)};else{var h=(u?K:F)(()=>r[a]);h.f|=z,_=()=>{var l=b(h);return l!==void 0&&(t=void 0),l===void 0?t:l}}if(!(P&J))return _;if(i){var x=r.$$legacy;return function(l,S){return arguments.length>0?((!c||!S||x||f)&&i(S?_():l),l):_()}}var R=!1,L=ee(e),D=K(()=>{var l=_(),S=b(L);return R?(R=!1,S):L.v=l});return u||(D.equals=Q),function(l,S){if(arguments.length>0){const T=S?b(D):c&&w?O(l):l;return D.equals(T)||(R=!0,o(L,T),v&&t!==void 0&&(t=T),M(()=>b(D))),l}return b(D)}}export{fe as a,O as p,ae as r};
