var a=Object.defineProperty,s=Object.defineProperties,t=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,e=(s,t,n)=>t in s?a(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n,c=(a,s)=>{for(var t in s||(s={}))l.call(s,t)&&e(a,t,s[t]);if(n)for(var t of n(s))r.call(s,t)&&e(a,t,s[t]);return a};import{S as o,i,s as f,e as u,a as d,t as h,c as p,b as v,d as m,f as $,g,h as E,j as b,k as I,l as y,n as w,r as A,m as D,o as N,p as S,u as V,q as O,v as P,w as L,x as C,y as x,z as T,A as j,B as J,C as k,D as B,E as M,F as U,G as R}from"./vendor.349a45ad.js";function z(a){let s,t,n,l,r,e,c,o,i,f,D,N,S,V,O,P,L,C,x,T;return{c(){s=u("div"),t=u("nav"),n=u("div"),l=u("a"),r=u("img"),c=d(),o=u("h1"),i=u("strong"),f=h("Migration"),D=d(),N=u("div"),S=u("div"),V=u("a"),O=h("Lite"),P=d(),L=u("a"),C=h("Classic"),this.h()},l(a){s=p(a,"DIV",{class:!0});var e=v(s);t=p(e,"NAV",{class:!0,role:!0,"aria-label":!0});var u=v(t);n=p(u,"DIV",{class:!0});var d=v(n);l=p(d,"A",{class:!0,href:!0});var h=v(l);r=p(h,"IMG",{src:!0,width:!0,alt:!0}),h.forEach(m),c=$(d),o=p(d,"H1",{class:!0});var E=v(o);i=p(E,"STRONG",{});var b=v(i);f=g(b,"Migration"),b.forEach(m),E.forEach(m),d.forEach(m),D=$(u),N=p(u,"DIV",{class:!0});var I=v(N);S=p(I,"DIV",{class:!0});var y=v(S);V=p(y,"A",{class:!0,href:!0});var w=v(V);O=g(w,"Lite"),w.forEach(m),P=$(y),L=p(y,"A",{class:!0,href:!0});var A=v(L);C=g(A,"Classic"),A.forEach(m),y.forEach(m),I.forEach(m),u.forEach(m),e.forEach(m),this.h()},h(){r.src!==(e="logo.svg")&&E(r,"src","logo.svg"),E(r,"width","28"),E(r,"alt","Contributor Assistant Logo"),E(l,"class","navbar-item"),E(l,"href","https://github.com/cla-assistant/contributor-assistant"),E(o,"class","navbar-item"),E(n,"class","navbar-brand"),E(V,"class","navbar-item"),E(V,"href","#"),E(L,"class","navbar-item"),E(L,"href","#"),E(S,"class","navbar-start"),E(N,"class","navbar-menu"),E(t,"class","navbar"),E(t,"role","navigation"),E(t,"aria-label","main navigation"),E(s,"class","container")},m(e,u){b(e,s,u),I(s,t),I(t,n),I(n,l),I(l,r),I(n,c),I(n,o),I(o,i),I(i,f),I(t,D),I(t,N),I(N,S),I(S,V),I(V,O),I(S,P),I(S,L),I(L,C),x||(T=[y(V,"click",a[1]),y(L,"click",a[2])],x=!0)},p:w,i:w,o:w,d(a){a&&m(s),x=!1,A(T)}}}function H(a,s,t){let{mode:n="lite"}=s;return a.$$set=a=>{"mode"in a&&t(0,n=a.mode)},[n,()=>t(0,n="lite"),()=>t(0,n="classic")]}class G extends o{constructor(a){super(),i(this,a,H,z,f,{mode:0})}}function Y(a){let s,t,n=a[0].name+"";return{c(){s=u("span"),t=h(n),this.h()},l(a){s=p(a,"SPAN",{class:!0});var l=v(s);t=g(l,n),l.forEach(m),this.h()},h(){E(s,"class","file-name")},m(a,n){b(a,s,n),I(s,t)},p(a,s){1&s&&n!==(n=a[0].name+"")&&D(t,n)},d(a){a&&m(s)}}}function _(a){let s,t,n,l,r,e,c,o,i,f,A,D,S,V=a[0]&&Y(a);return{c(){s=u("div"),t=u("label"),n=u("input"),l=d(),r=u("span"),e=u("span"),c=u("i"),o=d(),i=u("span"),f=h("Choose a file…"),A=d(),V&&V.c(),this.h()},l(a){s=p(a,"DIV",{class:!0});var u=v(s);t=p(u,"LABEL",{class:!0});var d=v(t);n=p(d,"INPUT",{class:!0,type:!0,name:!0,id:!0,accept:!0}),l=$(d),r=p(d,"SPAN",{class:!0});var h=v(r);e=p(h,"SPAN",{class:!0});var E=v(e);c=p(E,"I",{class:!0}),v(c).forEach(m),E.forEach(m),o=$(h),i=p(h,"SPAN",{class:!0});var b=v(i);f=g(b,"Choose a file…"),b.forEach(m),h.forEach(m),A=$(d),V&&V.l(d),d.forEach(m),u.forEach(m),this.h()},h(){E(n,"class","file-input"),E(n,"type","file"),E(n,"name","resume"),E(n,"id",a[1]),E(n,"accept",a[2]),E(c,"class","fas fa-upload"),E(e,"class","file-icon"),E(i,"class","file-label"),E(r,"class","file-cta"),E(t,"class","file-label"),E(s,"class","file"),N(s,"has-name",a[0])},m(u,d){b(u,s,d),I(s,t),I(t,n),I(t,l),I(t,r),I(r,e),I(e,c),I(r,o),I(r,i),I(i,f),I(t,A),V&&V.m(t,null),D||(S=y(n,"change",a[4]),D=!0)},p(a,[l]){2&l&&E(n,"id",a[1]),4&l&&E(n,"accept",a[2]),a[0]?V?V.p(a,l):(V=Y(a),V.c(),V.m(t,null)):V&&(V.d(1),V=null),1&l&&N(s,"has-name",a[0])},i:w,o:w,d(a){a&&m(s),V&&V.d(),D=!1,S()}}}function F(a,s,t){let n,{file:l}=s,{control:r}=s,{accept:e}=s;return a.$$set=a=>{"file"in a&&t(0,l=a.file),"control"in a&&t(1,r=a.control),"accept"in a&&t(2,e=a.accept)},a.$$.update=()=>{8&a.$$.dirty&&n&&n[0]&&t(0,l=n[0])},[l,r,e,n,function(){n=this.files,t(3,n)}]}class q extends o{constructor(a){super(),i(this,a,F,_,f,{file:0,control:1,accept:2})}}function K(a){let s,t;const n=a[4].default,l=S(n,a,a[3],null);return{c(){s=u("a"),l&&l.c(),this.h()},l(a){s=p(a,"A",{download:!0,href:!0});var t=v(s);l&&l.l(t),t.forEach(m),this.h()},h(){E(s,"download",a[0]),E(s,"href",a[1])},m(a,n){b(a,s,n),l&&l.m(s,null),t=!0},p(a,[r]){l&&l.p&&(!t||8&r)&&V(l,n,a,a[3],t?r:-1,null,null),(!t||1&r)&&E(s,"download",a[0]),(!t||2&r)&&E(s,"href",a[1])},i(a){t||(O(l,a),t=!0)},o(a){P(l,a),t=!1},d(a){a&&m(s),l&&l.d(a)}}}function Q(a){return new Promise(((s,t)=>{const n=new FileReader;n.onload=function(){s(n.result)},n.onerror=function(){t()},n.readAsText(a)}))}function W(a,s,t){let n,{$$slots:l={},$$scope:r}=s,{download:e}=s,{content:c}=s;return a.$$set=a=>{"download"in a&&t(0,e=a.download),"content"in a&&t(2,c=a.content),"$$scope"in a&&t(3,r=a.$$scope)},a.$$.update=()=>{4&a.$$.dirty&&t(1,n=URL.createObjectURL(new Blob([c],{type:"text/plain"})))},[e,n,c,r,l]}class X extends o{constructor(a){super(),i(this,a,W,K,f,{download:0,content:2})}}const Z={type:"contributor-assistant/signatures",version:1,data:{current:{formSHA:"",form:{name:"",description:"",body:[]},signatures:[]},previous:[],invalidated:[]}};function aa(a){let s,t;return{c(){s=u("p"),t=h("This file does not contain valid JSON"),this.h()},l(a){s=p(a,"P",{class:!0});var n=v(s);t=g(n,"This file does not contain valid JSON"),n.forEach(m),this.h()},h(){E(s,"class","help is-danger")},m(a,n){b(a,s,n),I(s,t)},d(a){a&&m(s)}}}function sa(a){let s,t;return{c(){s=u("p"),t=h("This file does not contain valid YAML"),this.h()},l(a){s=p(a,"P",{class:!0});var n=v(s);t=g(n,"This file does not contain valid YAML"),n.forEach(m),this.h()},h(){E(s,"class","help is-danger")},m(a,n){b(a,s,n),I(s,t)},d(a){a&&m(s)}}}function ta(a){let s,t;return s=new X({props:{download:"signatures.json",content:a[5],$$slots:{default:[na]},$$scope:{ctx:a}}}),{c(){x(s.$$.fragment)},l(a){T(s.$$.fragment,a)},m(a,n){j(s,a,n),t=!0},p(a,t){const n={};32&t&&(n.content=a[5]),16384&t&&(n.$$scope={dirty:t,ctx:a}),s.$set(n)},i(a){t||(O(s.$$.fragment,a),t=!0)},o(a){P(s.$$.fragment,a),t=!1},d(a){J(s,a)}}}function na(a){let s,t,n,l,r,e;return{c(){s=u("button"),t=u("span"),n=u("i"),l=d(),r=u("span"),e=h("Save"),this.h()},l(a){s=p(a,"BUTTON",{class:!0});var c=v(s);t=p(c,"SPAN",{class:!0});var o=v(t);n=p(o,"I",{class:!0}),v(n).forEach(m),o.forEach(m),l=$(c),r=p(c,"SPAN",{});var i=v(r);e=g(i,"Save"),i.forEach(m),c.forEach(m),this.h()},h(){E(n,"class","fas fa-download"),E(t,"class","icon"),E(s,"class","button is-success")},m(a,c){b(a,s,c),I(s,t),I(t,n),I(s,l),I(s,r),I(r,e)},d(a){a&&m(s)}}}function la(a){let s,t,n,l,r,e,c,o,i,f,w,D,S,V,R,z,H,G,Y,_,F,K,Q,W,X,Z,na,la,ra,ea,ca,oa,ia,fa,ua,da,ha,pa,va,ma,$a,ga,Ea,ba,Ia,ya,wa,Aa,Da,Na,Sa,Va,Oa,Pa,La,Ca,xa,Ta,ja,Ja,ka,Ba,Ma,Ua,Ra,za,Ha,Ga,Ya,_a;function Fa(s){a[10](s)}let qa={control:"signature-input",accept:"application/json"};void 0!==a[0]&&(qa.file=a[0]),va=new q({props:qa}),L.push((()=>C(va,"file",Fa)));let Ka=a[6].signatureInput&&aa();function Qa(s){a[11](s)}let Wa={control:"form-input",accept:".yml,.yaml"};void 0!==a[1]&&(Wa.file=a[1]),Oa=new q({props:Wa}),L.push((()=>C(Oa,"file",Qa)));let Xa=a[6].formInput&&sa(),Za=a[5]&&ta(a);return{c(){s=u("h1"),t=h("CLA Assistant Lite"),n=d(),l=u("h2"),r=h("If you have added "),e=u("a"),c=h("custom fields"),o=h("\n  to your form, it is "),i=u("strong"),f=h("recommended"),w=h(" that you upload it as well to\n  properly format the signatures."),D=d(),S=u("div"),V=u("div"),R=d(),z=u("div"),H=u("div"),G=u("p"),Y=u("input"),_=d(),F=u("span"),K=u("i"),Q=d(),W=u("div"),X=u("p"),Z=u("input"),na=d(),la=u("span"),ra=u("i"),ea=d(),ca=u("div"),oa=u("div"),ia=u("label"),fa=h("JSON Signature file"),ua=d(),da=u("div"),ha=u("div"),pa=u("div"),x(va.$$.fragment),$a=d(),Ka&&Ka.c(),ga=d(),Ea=u("div"),ba=u("div"),Ia=u("label"),ya=h("YAML form file "),wa=u("span"),Aa=h("Optional"),Da=d(),Na=u("div"),Sa=u("div"),Va=u("div"),x(Oa.$$.fragment),La=d(),Xa&&Xa.c(),Ca=d(),xa=u("div"),Ta=u("div"),ja=d(),Ja=u("div"),ka=u("div"),Ba=u("div"),Ma=u("button"),Ua=h("Convert"),za=d(),Ha=u("div"),Za&&Za.c(),this.h()},l(a){s=p(a,"H1",{class:!0});var u=v(s);t=g(u,"CLA Assistant Lite"),u.forEach(m),n=$(a),l=p(a,"H2",{class:!0});var d=v(l);r=g(d,"If you have added "),e=p(d,"A",{href:!0});var h=v(e);c=g(h,"custom fields"),h.forEach(m),o=g(d,"\n  to your form, it is "),i=p(d,"STRONG",{});var E=v(i);f=g(E,"recommended"),E.forEach(m),w=g(d," that you upload it as well to\n  properly format the signatures."),d.forEach(m),D=$(a),S=p(a,"DIV",{class:!0});var b=v(S);V=p(b,"DIV",{class:!0}),v(V).forEach(m),R=$(b),z=p(b,"DIV",{class:!0});var I=v(z);H=p(I,"DIV",{class:!0});var y=v(H);G=p(y,"P",{class:!0});var A=v(G);Y=p(A,"INPUT",{class:!0,type:!0,placeholder:!0}),_=$(A),F=p(A,"SPAN",{class:!0});var N=v(F);K=p(N,"I",{class:!0}),v(K).forEach(m),N.forEach(m),A.forEach(m),y.forEach(m),Q=$(I),W=p(I,"DIV",{class:!0});var O=v(W);X=p(O,"P",{class:!0});var P=v(X);Z=p(P,"INPUT",{class:!0,type:!0,placeholder:!0}),na=$(P),la=p(P,"SPAN",{class:!0});var L=v(la);ra=p(L,"I",{class:!0}),v(ra).forEach(m),L.forEach(m),P.forEach(m),O.forEach(m),I.forEach(m),b.forEach(m),ea=$(a),ca=p(a,"DIV",{class:!0});var C=v(ca);oa=p(C,"DIV",{class:!0});var x=v(oa);ia=p(x,"LABEL",{class:!0,for:!0});var j=v(ia);fa=g(j,"JSON Signature file"),j.forEach(m),x.forEach(m),ua=$(C),da=p(C,"DIV",{class:!0});var J=v(da);ha=p(J,"DIV",{class:!0});var k=v(ha);pa=p(k,"DIV",{class:!0});var B=v(pa);T(va.$$.fragment,B),B.forEach(m),$a=$(k),Ka&&Ka.l(k),k.forEach(m),J.forEach(m),C.forEach(m),ga=$(a),Ea=p(a,"DIV",{class:!0});var M=v(Ea);ba=p(M,"DIV",{class:!0});var U=v(ba);Ia=p(U,"LABEL",{class:!0,for:!0});var q=v(Ia);ya=g(q,"YAML form file "),wa=p(q,"SPAN",{class:!0});var aa=v(wa);Aa=g(aa,"Optional"),aa.forEach(m),q.forEach(m),U.forEach(m),Da=$(M),Na=p(M,"DIV",{class:!0});var sa=v(Na);Sa=p(sa,"DIV",{class:!0});var ta=v(Sa);Va=p(ta,"DIV",{class:!0});var ma=v(Va);T(Oa.$$.fragment,ma),ma.forEach(m),La=$(ta),Xa&&Xa.l(ta),ta.forEach(m),sa.forEach(m),M.forEach(m),Ca=$(a),xa=p(a,"DIV",{class:!0});var Pa=v(xa);Ta=p(Pa,"DIV",{class:!0}),v(Ta).forEach(m),ja=$(Pa),Ja=p(Pa,"DIV",{class:!0});var Ra=v(Ja);ka=p(Ra,"DIV",{class:!0});var Ga=v(ka);Ba=p(Ga,"DIV",{class:!0});var Ya=v(Ba);Ma=p(Ya,"BUTTON",{class:!0});var _a=v(Ma);Ua=g(_a,"Convert"),_a.forEach(m),Ya.forEach(m),za=$(Ga),Ha=p(Ga,"DIV",{class:!0});var Fa=v(Ha);Za&&Za.l(Fa),Fa.forEach(m),Ga.forEach(m),Ra.forEach(m),Pa.forEach(m),this.h()},h(){E(s,"class","title"),E(e,"href","https://github.com/cla-assistant/contributor-assistant/tree/main/actions/signatures#custom-fields"),E(l,"class","subtitle"),E(V,"class","field-label is-normal"),E(Y,"class","input"),E(Y,"type","text"),E(Y,"placeholder","Owner"),E(K,"class","fas fa-user"),E(F,"class","icon is-small is-left"),E(G,"class","control has-icons-left"),E(H,"class","field is-narrow"),E(Z,"class","input"),E(Z,"type","text"),E(Z,"placeholder","Repository"),E(ra,"class","fas fa-bookmark"),E(la,"class","icon is-small is-left"),E(X,"class","control has-icons-left has-icons-right"),E(W,"class","field is-narrow"),E(z,"class","field-body"),E(S,"class","field is-horizontal"),E(ia,"class","label"),E(ia,"for","signature-input"),E(oa,"class","field-label is-normal"),E(pa,"class","control"),E(ha,"class","field"),E(da,"class","field-body"),E(ca,"class","field is-horizontal"),E(wa,"class","tag is-info is-light"),E(Ia,"class","label"),E(Ia,"for","form-input"),E(ba,"class","field-label is-normal"),E(Va,"class","control"),E(Sa,"class","field"),E(Na,"class","field-body"),E(Ea,"class","field is-horizontal"),E(Ta,"class","field-label"),E(Ma,"class","button is-link"),Ma.disabled=Ra=!(a[0]&&a[2]&&a[3]),N(Ma,"is-loading",a[4]),E(Ba,"class","control"),E(Ha,"class","control"),E(ka,"class","field is-grouped"),E(Ja,"class","field-body"),E(xa,"class","field is-horizontal")},m(u,d){b(u,s,d),I(s,t),b(u,n,d),b(u,l,d),I(l,r),I(l,e),I(e,c),I(l,o),I(l,i),I(i,f),I(l,w),b(u,D,d),b(u,S,d),I(S,V),I(S,R),I(S,z),I(z,H),I(H,G),I(G,Y),k(Y,a[2]),I(G,_),I(G,F),I(F,K),I(z,Q),I(z,W),I(W,X),I(X,Z),k(Z,a[3]),I(X,na),I(X,la),I(la,ra),b(u,ea,d),b(u,ca,d),I(ca,oa),I(oa,ia),I(ia,fa),I(ca,ua),I(ca,da),I(da,ha),I(ha,pa),j(va,pa,null),I(ha,$a),Ka&&Ka.m(ha,null),b(u,ga,d),b(u,Ea,d),I(Ea,ba),I(ba,Ia),I(Ia,ya),I(Ia,wa),I(wa,Aa),I(Ea,Da),I(Ea,Na),I(Na,Sa),I(Sa,Va),j(Oa,Va,null),I(Sa,La),Xa&&Xa.m(Sa,null),b(u,Ca,d),b(u,xa,d),I(xa,Ta),I(xa,ja),I(xa,Ja),I(Ja,ka),I(ka,Ba),I(Ba,Ma),I(Ma,Ua),I(ka,za),I(ka,Ha),Za&&Za.m(Ha,null),Ga=!0,Ya||(_a=[y(Y,"input",a[8]),y(Z,"input",a[9]),y(Ma,"click",a[7])],Ya=!0)},p(a,[s]){4&s&&Y.value!==a[2]&&k(Y,a[2]),8&s&&Z.value!==a[3]&&k(Z,a[3]);const t={};!ma&&1&s&&(ma=!0,t.file=a[0],B((()=>ma=!1))),va.$set(t),a[6].signatureInput?Ka||(Ka=aa(),Ka.c(),Ka.m(ha,null)):Ka&&(Ka.d(1),Ka=null);const n={};!Pa&&2&s&&(Pa=!0,n.file=a[1],B((()=>Pa=!1))),Oa.$set(n),a[6].formInput?Xa||(Xa=sa(),Xa.c(),Xa.m(Sa,null)):Xa&&(Xa.d(1),Xa=null),(!Ga||13&s&&Ra!==(Ra=!(a[0]&&a[2]&&a[3])))&&(Ma.disabled=Ra),16&s&&N(Ma,"is-loading",a[4]),a[5]?Za?(Za.p(a,s),32&s&&O(Za,1)):(Za=ta(a),Za.c(),O(Za,1),Za.m(Ha,null)):Za&&(M(),P(Za,1,1,(()=>{Za=null})),U())},i(a){Ga||(O(va.$$.fragment,a),O(Oa.$$.fragment,a),O(Za),Ga=!0)},o(a){P(va.$$.fragment,a),P(Oa.$$.fragment,a),P(Za),Ga=!1},d(a){a&&m(s),a&&m(n),a&&m(l),a&&m(D),a&&m(S),a&&m(ea),a&&m(ca),J(va),Ka&&Ka.d(),a&&m(ga),a&&m(Ea),J(Oa),Xa&&Xa.d(),a&&m(Ca),a&&m(xa),Za&&Za.d(),Ya=!1,A(_a)}}}function ra(a,n,l){var r=this&&this.__awaiter||function(a,s,t,n){return new(t||(t=Promise))((function(l,r){function e(a){try{o(n.next(a))}catch(s){r(s)}}function c(a){try{o(n.throw(a))}catch(s){r(s)}}function o(a){var s;a.done?l(a.value):(s=a.value,s instanceof t?s:new t((function(a){a(s)}))).then(e,c)}o((n=n.apply(a,s||[])).next())}))};let e,o,i,f,u,d=!1,h={signatureInput:!1,formInput:!1};return[e,o,i,f,d,u,h,function(){return r(this,void 0,void 0,(function*(){l(4,d=!0),yield function(){return r(this,void 0,void 0,(function*(){l(6,h.signatureInput=!1,h),l(6,h.formInput=!1,h);const a=yield Q(e);let n,r;try{n=JSON.parse(a)}catch(d){return void l(6,h.signatureInput=!0,h)}if(o){const a=yield Q(o);try{r=R.parse(a)}catch(p){return void l(6,h.formInput=!0,h)}}l(5,u=JSON.stringify(function(a,n={owner:"",repo:""},l){var r;const e=JSON.parse(JSON.stringify(Z));let o=[[!0]];if(void 0!==l){o=[];for(const a of l.body)"markdown"!==a.type&&o.push("signature"===a.id?[!0]:null)}for(const u of a.signedContributors)e.data.current.signatures.push((i=c({user:{databaseId:u.id,login:u.name}},n),f={issue:0,date:null!=(r=u.created_at)?r:(new Date).toJSON(),fields:o},s(i,t(f))));var i,f;return e}(n,{owner:i,repo:f},r)))}))}(),l(4,d=!1)}))},function(){i=this.value,l(2,i)},function(){f=this.value,l(3,f)},function(a){e=a,l(0,e)},function(a){o=a,l(1,o)}]}class ea extends o{constructor(a){super(),i(this,a,ra,la,f,{})}}function ca(a){let s,t;return{c(){s=u("h1"),t=h("CLA Assistant Classic"),this.h()},l(a){s=p(a,"H1",{class:!0});var n=v(s);t=g(n,"CLA Assistant Classic"),n.forEach(m),this.h()},h(){E(s,"class","title")},m(a,n){b(a,s,n),I(s,t)},p:w,i:w,o:w,d(a){a&&m(s)}}}class oa extends o{constructor(a){super(),i(this,a,null,ca,f,{})}}function ia(a){let s,t;return s=new oa({}),{c(){x(s.$$.fragment)},l(a){T(s.$$.fragment,a)},m(a,n){j(s,a,n),t=!0},i(a){t||(O(s.$$.fragment,a),t=!0)},o(a){P(s.$$.fragment,a),t=!1},d(a){J(s,a)}}}function fa(a){let s,t;return s=new ea({}),{c(){x(s.$$.fragment)},l(a){T(s.$$.fragment,a)},m(a,n){j(s,a,n),t=!0},i(a){t||(O(s.$$.fragment,a),t=!0)},o(a){P(s.$$.fragment,a),t=!1},d(a){J(s,a)}}}function ua(a){let s,t,n,l,r,e,c,o,i;function f(s){a[1](s)}let h={};void 0!==a[0]&&(h.mode=a[0]),t=new G({props:h}),L.push((()=>C(t,"mode",f)));const g=[fa,ia],y=[];function w(a,s){return"lite"===a[0]?0:1}return c=w(a),o=y[c]=g[c](a),{c(){s=u("main"),x(t.$$.fragment),l=d(),r=u("div"),e=u("section"),o.c(),this.h()},l(a){s=p(a,"MAIN",{});var n=v(s);T(t.$$.fragment,n),l=$(n),r=p(n,"DIV",{class:!0});var c=v(r);e=p(c,"SECTION",{class:!0});var i=v(e);o.l(i),i.forEach(m),c.forEach(m),n.forEach(m),this.h()},h(){E(e,"class","section"),E(r,"class","container")},m(a,n){b(a,s,n),j(t,s,null),I(s,l),I(s,r),I(r,e),y[c].m(e,null),i=!0},p(a,[s]){const l={};!n&&1&s&&(n=!0,l.mode=a[0],B((()=>n=!1))),t.$set(l);let r=c;c=w(a),c!==r&&(M(),P(y[r],1,1,(()=>{y[r]=null})),U(),o=y[c],o||(o=y[c]=g[c](a),o.c()),O(o,1),o.m(e,null))},i(a){i||(O(t.$$.fragment,a),O(o),i=!0)},o(a){P(t.$$.fragment,a),P(o),i=!1},d(a){a&&m(s),J(t),y[c].d()}}}function da(a,s,t){let n;return[n,function(a){n=a,t(0,n)}]}new class extends o{constructor(a){super(),i(this,a,da,ua,f,{})}}({target:document.getElementById("app")});
