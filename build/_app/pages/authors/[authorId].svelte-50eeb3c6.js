import{S as z,i as F,s as G,e as I,t as j,k as g,c as k,a as y,g as w,d as c,n as q,b as L,f as v,E as b,h as A,I as D,J as K}from"../../chunks/vendor-d4402612.js";function H(h,t,l){const f=h.slice();return f[2]=t[l],f}function J(h){let t,l,f,o=h[2].title+"",s,_,m;return{c(){t=I("li"),l=I("a"),f=j("- "),s=j(o),m=g(),this.h()},l(u){t=k(u,"LI",{});var i=y(t);l=k(i,"A",{href:!0});var p=y(l);f=w(p,"- "),s=w(p,o),p.forEach(c),m=q(i),i.forEach(c),this.h()},h(){L(l,"href",_=`/blog/${h[2].id}`)},m(u,i){v(u,t,i),b(t,l),b(l,f),b(l,s),b(t,m)},p(u,i){i&1&&o!==(o=u[2].title+"")&&A(s,o),i&1&&_!==(_=`/blog/${u[2].id}`)&&L(l,"href",_)},d(u){u&&c(t)}}}function M(h){let t,l=h[1].name+"",f,o,s,_=h[1].company.catchPhrase+"",m,u,i,p=h[1].email+"",S,U,d,E=h[0],n=[];for(let e=0;e<E.length;e+=1)n[e]=J(H(h,E,e));return{c(){t=I("h2"),f=j(l),o=g(),s=I("p"),m=j(_),u=g(),i=I("p"),S=j(p),U=g(),d=I("ul");for(let e=0;e<n.length;e+=1)n[e].c();this.h()},l(e){t=k(e,"H2",{class:!0});var r=y(t);f=w(r,l),r.forEach(c),o=q(e),s=k(e,"P",{class:!0});var a=y(s);m=w(a,_),a.forEach(c),u=q(e),i=k(e,"P",{class:!0});var P=y(i);S=w(P,p),P.forEach(c),U=q(e),d=k(e,"UL",{});var C=y(d);for(let B=0;B<n.length;B+=1)n[B].l(C);C.forEach(c),this.h()},h(){L(t,"class","font-bold svelte-1uh761d"),L(s,"class","svelte-1uh761d"),L(i,"class","svelte-1uh761d")},m(e,r){v(e,t,r),b(t,f),v(e,o,r),v(e,s,r),b(s,m),v(e,u,r),v(e,i,r),b(i,S),v(e,U,r),v(e,d,r);for(let a=0;a<n.length;a+=1)n[a].m(d,null)},p(e,[r]){if(r&2&&l!==(l=e[1].name+"")&&A(f,l),r&2&&_!==(_=e[1].company.catchPhrase+"")&&A(m,_),r&2&&p!==(p=e[1].email+"")&&A(S,p),r&1){E=e[0];let a;for(a=0;a<E.length;a+=1){const P=H(e,E,a);n[a]?n[a].p(P,r):(n[a]=J(P),n[a].c(),n[a].m(d,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=E.length}},i:D,o:D,d(e){e&&c(t),e&&c(o),e&&c(s),e&&c(u),e&&c(i),e&&c(U),e&&c(d),K(n,e)}}}const Q=async({page:h,fetch:t})=>{const l=h.params.authorId,o=await(await t(`https://jsonplaceholder.typicode.com/users/${l}?_embed=posts`)).json(),s=o.posts;return{props:{user:o,posts:s}}};function N(h,t,l){let{posts:f}=t,{user:o}=t;return h.$$set=s=>{"posts"in s&&l(0,f=s.posts),"user"in s&&l(1,o=s.user)},[f,o]}class R extends z{constructor(t){super();F(this,t,N,M,G,{posts:0,user:1})}}export{R as default,Q as load};
