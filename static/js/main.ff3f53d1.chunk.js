(this["webpackJsonpimage-loading"]=this["webpackJsonpimage-loading"]||[]).push([[0],{38:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);for(var a=n(3),c=n.n(a),o=n(21),r=n(14),l=n(15),i=n(16),s=n(22),u=n(20),m=n(0),d=n.n(m),h=n(17),g=n(18),f=n.n(g),p=n(19),b=n.n(p),v=function(e){var t=e.name;return d.a.createElement("h1",{className:"title"},t,"!")},E=(n(38),n(39),n(45),[]),k=0;k<30;k++){var w=Math.floor(10*Math.random()),C=Math.floor(500*Math.random());k%4===0&&E.push({src:"https://localhost:80/breakimg.jpg"}),E.push({src:"https://app.pixelencounter.com/api/basic/svgmonsters/".concat(C,"/image/png?fillType=").concat(w,"&size=").concat(100)})}var j=function(){return null},y=n(46),I=function(e){var t=b()();return d.a.createElement("div",{id:"SymbolContainer_".concat(t),className:"col-3 my-2"},d.a.createElement("a",{download:!0,onClick:function(e){return function(e){y({url:e.target.src,method:"GET",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS"},redirect:"follow",responseType:"blob"}).then((function(e){var t=window.URL.createObjectURL(new Blob([e.data])),n=document.createElement("a");n.href=t,n.setAttribute("download","image.png"),document.body.appendChild(n),n.click()}))}(e)}},d.a.createElement("img",{src:e.src,className:"img-fluid"})))},O=function(e){var t=e.src;return d.a.createElement(I,{src:t,fallbackImage:d.a.createElement(j,null),initialImage:"https://loading.io/spinners/ellipsis/index.discuss-ellipsis-preloader.svg",alt:"cool image should be here",className:"img-fluid",onError:function(e){}})},A=function(e){return new Promise((function(t,n){var a=new Image;a.onload=function(){t(e.src)},a.onerror=function(){n("one or more images could not load")},a.src=e.src}))},T=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).componentDidMount=Object(r.a)(c.a.mark((function t(){var n,a,r,l,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],a=E.map(A),t.next=4,Promise.all(a).then((function(e){console.log(e)})).catch((function(e){console.log(e)}));case 4:r=Object(o.a)(a),t.prev=5,r.s();case 7:if((l=r.n()).done){t.next=13;break}return i=l.value,t.next=11,i.then((function(e){n.push({src:e})})).catch((function(e){}));case 11:t.next=7;break;case 13:t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),r.e(t.t0);case 18:return t.prev=18,r.f(),t.finish(18);case 21:e.setState((function(e){return{validImages:n}}));case 22:case"end":return t.stop()}}),t,null,[[5,15,18,21]])}))),e.delayedCallback=f.a.debounce((function(e){console.log(e.target.value)}),300),e.handleInputChange=function(t){t.persist(),e.delayedCallback(t)},e.handleClick=function(){e.setState((function(e){return{count:e.count+1}}))},e.state={name:"Image Gallery",validImages:[],count:0},e}return Object(i.a)(n,[{key:"showAlert",value:function(){alert("I'm an alert")}},{key:"render",value:function(){return d.a.createElement("div",{className:"container"},d.a.createElement(v,{name:this.state.name}),d.a.createElement("p",{className:"title"},"Click on image to Download :)"),d.a.createElement("div",{className:"row"},this.state.validImages.length?this.state.validImages.map((function(e,t){return d.a.createElement(O,Object.assign({key:"img_".concat(t)},e))})):d.a.createElement("div",{className:"card-title col-12 card"},d.a.createElement("img",{className:"loading",src:"https://c.tenor.com/BtC0jVjzYToAAAAC/loading-chain.gif"})),"  "),d.a.createElement("br",null),"good images: ",this.state.validImages.length," / ",E.length,d.a.createElement("br",null),d.a.createElement("button",{onClick:this.handleClick},"Add ",this.state.count))}}]),n}(m.Component);Object(h.render)(d.a.createElement(T,null),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.ff3f53d1.chunk.js.map