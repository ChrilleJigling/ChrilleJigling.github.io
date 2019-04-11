(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(31)},26:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),c=a.n(o),s=(a(25),a(26),a(19)),l=a(14),u=a(3),i=a(4),p=a(6),m=a(5),h=a(7),d=a(2),f=a.n(d),b=a(10),k=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Book Manager"),r.a.createElement("p",null,"Add a book!"))}}]),t}(r.a.Component),v=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.props.addBooks},r.a.createElement("input",{type:"text",name:"title",placeholder:"Title..."}),r.a.createElement("input",{type:"text",name:"author",placeholder:"Author..."}),r.a.createElement("button",null,"Send")),r.a.createElement("form",{onSubmit:this.props.changeApiKey},r.a.createElement("p",null,r.a.createElement("button",{className:"mr-2"},"Change Api Key "),"Current Key: ",this.props.apiKey)))}}]),t}(r.a.Component),g=a(33),y=a(34),E=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App container"},r.a.createElement(g.a,null,r.a.createElement("thead",null,r.a.createElement("tr",{className:"book_title"},r.a.createElement("th",null,"#ID"),r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Author"),r.a.createElement("th",null,"Action "))),r.a.createElement("tbody",null,this.props.books&&this.props.books.map(function(e,t){return r.a.createElement("tr",{className:"book_value",key:e.id},r.a.createElement("td",null,e.id),r.a.createElement("td",null,e.title),r.a.createElement("td",null,e.author),r.a.createElement("td",null,r.a.createElement(y.a,{color:"success",size:"sm"},"Edit"),r.a.createElement(y.a,{color:"danger",size:"sm"},"Delete")))}))))}}]),t}(n.Component),w="https://www.forverkliga.se/JavaScript/api/crud.php",j=function(){var e=Object(b.a)(f.a.mark(function e(){var t,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("apiKey"))){e.next=5;break}return e.abrupt("return",t);case 5:return e.next=7,fetch("".concat(w,"?requestKey")).then(function(e){return e.json()}).then(function(e){return e.key});case 7:return a=e.sent,localStorage.setItem("apiKey",a),e.abrupt("return",a);case 10:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),O=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={books:[],apiKey:localStorage.getItem("apiKey"),error:""},a.addBooks=function(){var e=Object(b.a)(f.a.mark(function e(t){var n,r,o,c,u,i,p,m;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target.elements.title.value,r=t.target.elements.author.value,t.target.reset(),e.next=6,j();case 6:if(o=e.sent,console.log(o),!n||!r){e.next=35;break}c=0;case 10:if(!(c<10)){e.next=33;break}return e.next=13,fetch("https://www.forverkliga.se/JavaScript/api/crud.php?key=".concat(o,"&op=insert&title=").concat(n,"&author=").concat(r)).then(function(e){return e.json()});case 13:if(u=e.sent,i=u.status,p=u.message,m=Object(l.a)(u,["status","message"]),"success"!==i){e.next=28;break}return console.log("added book successfully"),console.log("status: ".concat(i)),console.log("Number of retries: ".concat(c)),console.log(Object(s.a)({},m)),a.setState({limit:c,error:""}),a.getBooks(),0===c?window.alert("Status: ".concat(i,"\nWe managed to add your book to the list after ").concat(c+1," try!")):window.alert("Status: ".concat(i,"\nWe managed to add your book to the list after ").concat(c+1," tries!")),e.abrupt("break",33);case 28:window.alert("Status: ".concat(i,"\nOperation Failed")),console.log("ERROR: ".concat(p));case 30:c++,e.next=10;break;case 33:e.next=36;break;case 35:a.setState({error:"Please enter the values"});case 36:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.changeApiKey=function(){var e=Object(b.a)(f.a.mark(function e(t){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("".concat(w,"?requestKey")).then(function(e){return e.json()}).then(function(e){return e.key});case 3:n=e.sent,localStorage.setItem("apiKey",n),a.setState({apiKey:n}),a.getBooks();case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.getBooks=function(){var e=Object(b.a)(f.a.mark(function e(t){var n,r,o,c,s,u;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t&&t.preventDefault(),e.next=3,j();case 3:n=e.sent,console.log(n),r=0;case 6:if(!(r<10)){e.next=27;break}return e.next=9,fetch("https://www.forverkliga.se/JavaScript/api/crud.php?key=".concat(n,"&op=select")).then(function(e){return e.json()});case 9:if(o=e.sent,c=o.status,s=o.message,u=Object(l.a)(o,["status","message"]),"success"!==c){e.next=23;break}return console.log("Books were successfully displayed"),console.log("status: ".concat(c)),console.log("Number of retries: ".concat(r+1)),console.log({data:u}),console.log(u.data),a.setState({books:u.data,limit:r}),e.abrupt("break",27);case 23:console.log("ERROR: ".concat(s));case 24:r++,e.next=6;break;case 27:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getBooks()}},{key:"render",value:function(){var e=this.state;return r.a.createElement("div",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-5 title-container"},r.a.createElement(k,null)),r.a.createElement("div",{className:"col-xss-7 form-container"},r.a.createElement(k,null),e.error,r.a.createElement(v,{changeApiKey:this.changeApiKey,addBooks:this.addBooks,apiKey:e.apiKey}),r.a.createElement(E,{books:e.books,index:e.books.index})))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.b6a4b9dd.chunk.js.map