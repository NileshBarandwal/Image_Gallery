(this["webpackJsonpimage-loading"]=this["webpackJsonpimage-loading"]||[]).push([[0],{38:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);for(var a=n(3),c=n.n(a),o=n(21),r=n(14),l=n(15),s=n(16),i=n(22),u=n(20),m=n(0),d=n.n(m),f=n(17),h=n(18),g=n.n(h),p=n(19),v=n.n(p),b=function(e){var t=e.name;return d.a.createElement("h1",{className:"title"},t,"!")},E=(n(38),n(39),n(45),[]),w=0;w<30;w++){var k=Math.floor(10*Math.random()),y=Math.floor(500*Math.random());w%2===0&&E.push({src:"https://localhost:80/breakimg.jpg"}),E.push({src:"https://app.pixelencounter.com/api/basic/svgmonsters/".concat(y,"/image/png?fillType=").concat(k,"&size=").concat(100)})}var I=function(){return null},C=n(46),j=function(e){var t=v()();return d.a.createElement("div",{id:"SymbolContainer_".concat(t),className:"col-3 my-2"},d.a.createElement("a",{download:!0,onClick:function(e){return function(e){C({url:"https://cors-anywhere.herokuapp.com/"+e.target.src,method:"GET",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS"},redirect:"follow",responseType:"blob"}).then((function(e){var t=window.URL.createObjectURL(new Blob([e.data])),n=document.createElement("a");n.href=t,n.setAttribute("download","image.png"),document.body.appendChild(n),n.click()}))}(e)}},d.a.createElement("img",{src:e.src,className:"img-fluid"})))},O=function(e){var t=e.src;return d.a.createElement(j,{src:t,fallbackImage:d.a.createElement(I,null),initialImage:"https://loading.io/spinners/ellipsis/index.discuss-ellipsis-preloader.svg",alt:"cool image should be here",className:"img-fluid",onError:function(e){}})},N=function(e){return new Promise((function(t,n){var a=new Image;a.onload=function(){t(e.src)},a.onerror=function(){n("one or more images could not load")},a.src=e.src}))},T=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).componentDidMount=Object(r.a)(c.a.mark((function t(){var n,a,r,l,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],a=E.map(N),t.next=4,Promise.all(a).then((function(e){console.log(e)})).catch((function(e){console.log(e)}));case 4:r=Object(o.a)(a),t.prev=5,r.s();case 7:if((l=r.n()).done){t.next=13;break}return s=l.value,t.next=11,s.then((function(e){n.push({src:e})})).catch((function(e){}));case 11:t.next=7;break;case 13:t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),r.e(t.t0);case 18:return t.prev=18,r.f(),t.finish(18);case 21:e.setState((function(e){return{validImages:n}}));case 22:case"end":return t.stop()}}),t,null,[[5,15,18,21]])}))),e.delayedCallback=g.a.debounce((function(e){console.log(e.target.value)}),300),e.handleInputChange=function(t){t.persist(),e.delayedCallback(t)},e.handleClick=function(){e.setState((function(e){return{count:e.count+1}}))},e.state={name:"Image Gallery",validImages:[],count:0},e}return Object(s.a)(n,[{key:"showAlert",value:function(){alert("I'm an alert")}},{key:"render",value:function(){return d.a.createElement("div",{className:"container"},d.a.createElement(b,{name:this.state.name}),d.a.createElement("p",{className:"title"},"Click on image to Download :)"),d.a.createElement("div",{className:"row"},this.state.validImages.length?this.state.validImages.map((function(e,t){return d.a.createElement(O,Object.assign({key:"img_".concat(t)},e))})):d.a.createElement("div",{className:"card-title"},d.a.createElement("img",{className:"loading",src:"https://studio.code.org/v3/assets/CffKtSIYkjIcwoQ0tYfRw1wj2Av7J0cAl29M3yGpRKk/3d6aa9082f3c9e285df9970dc7b762ac.gif"})),"  "),d.a.createElement("br",null),"good images: ",this.state.validImages.length," / ",E.length,d.a.createElement("br",null))}}]),n}(m.Component);Object(f.render)(d.a.createElement(T,null),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.35cba11a.chunk.js.map