(this.webpackJsonprouting=this.webpackJsonprouting||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/header1.70e6670e.jpg"},,function(e,t,a){e.exports=a.p+"static/media/header3.d9d36b65.jpg"},,,,,,,function(e,t,a){e.exports=a(40)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/header2.33eca35f.jpg"},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),o=a(7),i=a(8),u=a(10),m=a(9),s=(a(27),a(3)),p=a(1),d=(a(28),a(13)),E=a.n(d),f=(a(29),a(15)),h=a.n(f),b=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.e,null,r.a.createElement(p.c,{path:"/",exact:!0,render:function(){return r.a.createElement("img",{src:E.a,alt:"city"})}}),r.a.createElement(p.c,{path:"/products",render:function(){return r.a.createElement("img",{src:h.a,alt:"city"})}}),r.a.createElement(p.c,{path:"/contact",render:function(){return r.a.createElement("img",{src:h.a,alt:"city"})}}),r.a.createElement(p.c,{path:"/admin",render:function(){return r.a.createElement("img",{src:E.a,alt:"city"})}}),r.a.createElement(p.c,{render:function(){return r.a.createElement("img",{src:E.a,alt:"city"})}})))},g=(a(35),[{name:"start",path:"/"},{name:"produkty",path:"/products"},{name:"kontakt",path:"/contact"},{name:"panel admina",path:"/admin"}]),v=function(){var e=g.map((function(e){return r.a.createElement("li",{key:e.name},e.name=r.a.createElement(s.c,{exact:!0,to:e.path},e.name," "))}));return r.a.createElement("nav",{className:"main"},r.a.createElement("ul",null,e))},y=function(e){var t=e.title,a=e.author,n=e.text;return r.a.createElement("article",{style:{marginTop:40}},r.a.createElement("h3",{style:{marginBottom:3,textTransform:"uppercase"}},t),r.a.createElement("span",{style:{display:"block",marginBottom:10,fontSize:12}},a),r.a.createElement("p",{style:{fontSize:15}},n))},j=[{id:1,title:"gitara",author:"Jan Kowal",text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi sint sed, fuga tenetur quis explicabo? Quaerat, voluptatem omnis. Distinctio nulla labore eum odit ratione consectetur officiis temporibus voluptas ex? Libero."},{id:2,title:"Krowa",author:"Adam Kowal",text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi sint sed, fuga tenetur quis explicabo? Quaerat, voluptatem omnis. Distinctio nulla labore eum odit ratione consectetur officiis temporibus voluptas ex? Libero."},{id:3,title:"Muaaa",author:"Ania Kowal",text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi sint sed, fuga tenetur quis explicabo? Quaerat, voluptatem omnis. Distinctio nulla labore eum odit ratione consectetur officiis temporibus voluptas ex? Libero."}],k=function(){var e=j.map((function(e){return r.a.createElement(y,Object.assign({key:e.id},e))}));return r.a.createElement("div",{className:"home"},e)},x=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(p.c,{render:function(){return r.a.createElement(p.b,{to:"/login"})}})}}]),a}(n.Component),w=(a(36),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleChange=function(t){e.setState({value:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.setState({value:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("form",null,r.a.createElement("h3",null,"Napisz do nas!"),r.a.createElement("textarea",{value:this.state.value,placeholder:"Wpisz wiadomo\u015b\u0107...",onChange:this.handleChange}),r.a.createElement("button",{onClick:this.handleSubmit},"Wy\u015blij")),r.a.createElement(p.a,{when:this.state.value,message:"Masz niewype\u0142niony formularz "}))}}]),a}(n.Component)),O=(a(37),["car","bike","motocycle"]),C=function(){var e=O.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement(s.b,{to:"/product/".concat(e)},e))}));return r.a.createElement("div",{className:"products"},r.a.createElement("h2",null,"Lista Produkt\xf3w"),r.a.createElement("ul",null,e))},S=function(e){return r.a.createElement("article",{className:"product"},r.a.createElement("h1",null,e.id))},L=function(e){var t=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Strona produktu"),r.a.createElement(S,{id:t.params.id}),r.a.createElement(s.b,{to:"/products"},"Powr\xf3t do listy produkt\xf3w"))},N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"Error")}}]),a}(n.Component),z=function(){return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:""},"Podaj Login",r.a.createElement("input",{type:"text"})),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:""},"Podaj Has\u0142o",r.a.createElement("input",{type:"password"})),r.a.createElement("button",{style:{display:"block",width:100,height:30,backgroundColor:"white",border:"2px solid black",cursor:"pointer"}},"Zaloguj"))},Q=function(){return r.a.createElement(p.e,null,r.a.createElement(p.c,{path:"/",exact:!0,component:k}),r.a.createElement(p.c,{path:"/products",component:C}),r.a.createElement(p.c,{path:"/product/:id",component:L}),r.a.createElement(p.c,{path:"/contact",component:w}),r.a.createElement(p.c,{path:"/admin",component:x}),r.a.createElement(p.c,{path:"/login",component:z}),r.a.createElement(p.c,{component:N}))},J=(a(38),function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Stopka"),r.a.createElement(p.c,{path:"/",exact:!0,render:function(e){return r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,"stronie g\u0142\xf3wnej"))}}),r.a.createElement(p.c,{path:"/:page",render:function(e){return console.log(e),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.params.page))}}))}),D=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement(b,null)),r.a.createElement("main",null,r.a.createElement("aside",null,r.a.createElement(v,null)),r.a.createElement("section",{className:"page"},r.a.createElement(Q,null))),r.a.createElement("footer",null,r.a.createElement(J,null))))}}]),a}(r.a.Component);a(39);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.e34d2cb4.chunk.js.map