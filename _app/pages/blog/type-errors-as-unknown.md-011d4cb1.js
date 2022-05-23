import{S as W,i as Z,s as z,e as i,t as o,k as U,c as u,a as h,h as c,d as s,m as V,b as A,g as m,F as a,n as q}from"../../chunks/index-e9030ae9.js";function B(L){let l,E,y,p,M=`<code class="language-json"><span class="token punctuation">&#123;</span>
	<span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
		<span class="token property">"useUnknownInCatchVariables"</span><span class="token operator">:</span> <span class="token boolean">true</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,w,e,b,d,v,g,f,C,T,k,x,O,_,j,D;return{c(){l=i("h2"),E=o(F),y=U(),p=i("pre"),w=U(),e=i("p"),b=o("This setting in "),d=i("code"),v=o("tsconfig.json"),g=o(" will make the type of the caught error in a "),f=i("code"),C=o("catch"),T=o(" block of type "),k=i("code"),x=o("unknown"),O=o(" instead of "),_=i("code"),j=o("any"),D=o("."),this.h()},l(t){l=u(t,"H2",{});var r=h(l);E=c(r,F),r.forEach(s),y=V(t),p=u(t,"PRE",{class:!0});var R=h(p);R.forEach(s),w=V(t),e=u(t,"P",{});var n=h(e);b=c(n,"This setting in "),d=u(n,"CODE",{});var I=h(d);v=c(I,"tsconfig.json"),I.forEach(s),g=c(n," will make the type of the caught error in a "),f=u(n,"CODE",{});var H=h(f);C=c(H,"catch"),H.forEach(s),T=c(n," block of type "),k=u(n,"CODE",{});var P=h(k);x=c(P,"unknown"),P.forEach(s),O=c(n," instead of "),_=u(n,"CODE",{});var S=h(_);j=c(S,"any"),S.forEach(s),D=c(n,"."),n.forEach(s),this.h()},h(){A(p,"class","language-json")},m(t,r){m(t,l,r),a(l,E),m(t,y,r),m(t,p,r),p.innerHTML=M,m(t,w,r),m(t,e,r),a(e,b),a(e,d),a(d,v),a(e,g),a(e,f),a(f,C),a(e,T),a(e,k),a(k,x),a(e,O),a(e,_),a(_,j),a(e,D)},p:q,i:q,o:q,d(t){t&&s(l),t&&s(y),t&&s(p),t&&s(w),t&&s(e)}}}const G={title:"Type errors as unknown in catch blocks",date:"2022-05-23T00:00:00.000Z",tags:["typescript"],question:"What is the type of errors in catch blocks?",answer:"Its any by default but can be changed to unknown with the compiler option useUnknownInCatchVariables."},{title:F,date:K,tags:N,question:Q,answer:X}=G;class Y extends W{constructor(l){super(),Z(this,l,null,B,z,{})}}export{Y as default,G as metadata};
