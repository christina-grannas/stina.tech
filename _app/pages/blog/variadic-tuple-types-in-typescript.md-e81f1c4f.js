import{S as re,i as oe,s as ie,e as i,t as l,k as x,c as p,a as c,h as a,d as t,m as b,b as k,g as n,J as s,n as F}from"../../chunks/index-c3650d4a.js";function pe(se){let f,M,B,_,O,D,y,le=`<code class="language-undefined">const concat&lt;T extends any[], B extends any[]&gt;(first: [...T], second: [...B]):[...T, ...B] =&gt; &#123;
    return[...first,...second];
&#125;

const res =  concat([&quot;test&quot;, &quot;hej&quot;, &quot;test&quot;], [1, 2]);</code>`,q,r,P,m,g,V,E,I,J,T,Q,Y,v,z,K,C,w,h,j,S,u,G,A,H,N;return{c(){f=i("h2"),M=l("Variadic tuple types in Typescript"),B=x(),_=i("p"),O=l("This is possible to do since Typescript 4.x."),D=x(),y=i("pre"),q=x(),r=i("p"),P=l("The trick here lies in spreading the tuple type inside brackets: "),m=i("code"),g=l("[...T]"),V=l(" and make "),E=i("code"),I=l("T"),J=l(" extend "),T=i("code"),Q=l("any[]"),Y=l(" (array). Typescript will then be able to infer the typing inside the arrays/tuples you pass to "),v=i("code"),z=l("contact()"),K=l("."),C=x(),w=i("p"),h=i("a"),j=l("See example on typescriptlang.org"),S=x(),u=i("p"),G=l("If I have understand "),A=i("a"),H=l("the docs"),N=l(" correctly."),this.h()},l(e){f=p(e,"H2",{});var o=c(f);M=a(o,"Variadic tuple types in Typescript"),o.forEach(t),B=b(e),_=p(e,"P",{});var W=c(_);O=a(W,"This is possible to do since Typescript 4.x."),W.forEach(t),D=b(e),y=p(e,"PRE",{class:!0});var ae=c(y);ae.forEach(t),q=b(e),r=p(e,"P",{});var d=c(r);P=a(d,"The trick here lies in spreading the tuple type inside brackets: "),m=p(d,"CODE",{});var X=c(m);g=a(X,"[...T]"),X.forEach(t),V=a(d," and make "),E=p(d,"CODE",{});var R=c(E);I=a(R,"T"),R.forEach(t),J=a(d," extend "),T=p(d,"CODE",{});var U=c(T);Q=a(U,"any[]"),U.forEach(t),Y=a(d," (array). Typescript will then be able to infer the typing inside the arrays/tuples you pass to "),v=p(d,"CODE",{});var Z=c(v);z=a(Z,"contact()"),Z.forEach(t),K=a(d,"."),d.forEach(t),C=b(e),w=p(e,"P",{});var $=c(w);h=p($,"A",{href:!0,rel:!0});var ee=c(h);j=a(ee,"See example on typescriptlang.org"),ee.forEach(t),$.forEach(t),S=b(e),u=p(e,"P",{});var L=c(u);G=a(L,"If I have understand "),A=p(L,"A",{href:!0,rel:!0});var te=c(A);H=a(te,"the docs"),te.forEach(t),N=a(L," correctly."),L.forEach(t),this.h()},h(){k(y,"class","language-undefined"),k(h,"href","https://www.typescriptlang.org/play?#code/MYewdgzgLgBKbAIawLwB4AqMCmAPK2YAJhDImAJ4DaAugDQwBCO+hJZltAfDDABQAzAJYAnaAC4YVAHSyM9GBGzwikmbMY0AlOPXSMDWdM0wUPAN4AoXiOxQAriLBSjwsVEOylKmgG5LAL6WlvDQMLakKLzwSFB8VABEBNAJDAkAFtgAVqkwSdgpClQAjAwATNq+QA"),k(h,"rel","nofollow"),k(A,"href","https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html"),k(A,"rel","nofollow")},m(e,o){n(e,f,o),s(f,M),n(e,B,o),n(e,_,o),s(_,O),n(e,D,o),n(e,y,o),y.innerHTML=le,n(e,q,o),n(e,r,o),s(r,P),s(r,m),s(m,g),s(r,V),s(r,E),s(E,I),s(r,J),s(r,T),s(T,Q),s(r,Y),s(r,v),s(v,z),s(r,K),n(e,C,o),n(e,w,o),s(w,h),s(h,j),n(e,S,o),n(e,u,o),s(u,G),s(u,A),s(A,H),s(u,N)},p:F,i:F,o:F,d(e){e&&t(f),e&&t(B),e&&t(_),e&&t(D),e&&t(y),e&&t(q),e&&t(r),e&&t(C),e&&t(w),e&&t(S),e&&t(u)}}}class ne extends re{constructor(f){super(),oe(this,f,null,pe,ie,{})}}export{ne as default};