(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(23)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),i=a.n(r),o=(a(17),a(6)),l=a(1),u=a(2),s=a(4),m=a(3),f=a(5),h=(a(18),a(9)),v=new(a.n(h).a),d=function(e){var t,a;t="testPlayer1",a=JSON.stringify(e),localStorage.setItem("collectGame_".concat(t),a)},b=function(e){return JSON.parse(function(e){return localStorage.getItem("collectGame_".concat(e))}(e))},p={1:"cake",2:"pizza",4:"popsicle",8:"doughnut",16:"macaron",32:"sushi",64:"hotdog",128:"bread",256:"chips",512:"taco",1024:"strawberry",2048:"cookie",4096:"pistachio",8192:"popcorn",16384:"pecan",32768:"pudding",65536:"mochi",131072:"eggyolkcake",262144:"cashew"},N=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).colNum=3,e.vacentArea=e.colNum*e.colNum,e.state={blockNum:b("testPlayer1")||[[1,0,0],[0,0,0],[0,0,0]],toggle:0,failed:!1},e.prevPos=[],e.toggle=0,e}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.blockNum,n=t.toggle,r=t.failed,i=a.map(function(t,a){return t.map(function(t,r){return c.a.createElement("div",{className:"block",key:a*e.colNum+r,onClick:function(){return e.handleChess(a,r)}},t?c.a.createElement("div",{className:"itemWrap"},c.a.createElement("div",{className:"foodIcon".concat(e.isArrayEqual(e.prevPos,[a,r])&&n?" lifted":"")},c.a.createElement("i",{className:"icon ".concat(p[t])})),c.a.createElement("span",{className:"number"},t)):"")})});return c.a.createElement("div",{className:"collect-board"},r?"\u6e38\u620f\u7ed3\u675f\uff0c\u8bf7\u91cd\u7f6e":i)}},{key:"componentDidMount",value:function(){var e=this;this.eventEmitter=v.addListener("sendNumber",function(t){e.recievedNewNumber(t)}),this.deleteListener=v.addListener("deleteNumber",function(){e.setState({blockNum:[[1,0,0],[0,0,0],[0,0,0]],failed:!1})})}},{key:"handleChess",value:function(e,t){var a=this.state.toggle;a?this.switchChess(this.prevPos,[e,t]):this.prevPos=[e,t],this.setState({toggle:!a})}},{key:"switchChess",value:function(e,t){if(!this.isArrayEqual(e,t)){var a=this.state.blockNum,n=Object(o.a)(e,2),c=n[0],r=n[1],i=Object(o.a)(t,2),l=i[0],u=i[1],s=a[c][r],m=a[l][u];a[c][r]=s!==m?[m,a[l][u]=s][0]:[0,a[l][u]=m+s][0],this.setState({blockNum:a}),d(a)}}},{key:"isArrayEqual",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.toString()===t.toString()}},{key:"recievedNewNumber",value:function(e){var t=this.state.blockNum,a=this.findVacentPos();if(a){var n=Object(o.a)(a,2),c=n[0],r=n[1];t[c][r]=e,this.setState({blockNum:t})}else this.vacentArea=0,9===Array.from(new Set(t.flat())).length&&this.setState({failed:!0});d(t)}},{key:"findVacentPos",value:function(){var e=this.state.blockNum;for(var t in e){var a=e[t].findIndex(function(e){return 0===e});if(-1!==a)return[t,a]}}}]),t}(c.a.Component),y=a(10),k=(a(19),[1,2,4,8]),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=Object(o.a)(e,4);return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,a=[],n=!0,c=!1,r=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done);n=!0)for(var l=i.value,u=l.num,s=l.chance,m=0;m<s*t;m++)a.push(u)}catch(f){c=!0,r=f}finally{try{n||null==o.return||o.return()}finally{if(c)throw r}}return a[~~(Math.random()*a.length)]}([{num:t[0],chance:.55},{num:t[1],chance:.3},{num:t[2],chance:.1},{num:t[3],chance:.05}])},E=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={},e}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"topActions"},c.a.createElement("div",{className:"delete",onClick:function(){return e.delete()}},c.a.createElement("i",{className:"icon trashBin"}),c.a.createElement("span",null,"\u91cd\u7f6e")),c.a.createElement("div",{className:"dice",onClick:function(){return e.summon()}},c.a.createElement("i",{className:"icon weibolu"}),c.a.createElement("span",null,"\u6765\u4e00\u53d1")))}},{key:"summon",value:function(){var e=b("testPlayer1")?Math.max.apply(Math,Object(y.a)(b("testPlayer1").flat())):8,t=k;if(e>8){var a=e/k[3];t=k.map(function(e){return e*a})}v.emit("sendNumber",g(t))}},{key:"delete",value:function(){v.emit("deleteNumber","reStart"),localStorage.removeItem("collectGame_testPlayer1")}}]),t}(c.a.Component),O=(a(20),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={},e}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"footer"})}}]),t}(c.a.Component));a(21),a(22);var j=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(E,null),c.a.createElement(N,null),c.a.createElement(O,null))};i.a.render(c.a.createElement(j,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.3e143301.chunk.js.map