(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(7),r=n.n(c),o=(n(15),n(1)),u=n(2),l=n(4),s=n(3),m=n(5),h=(n(16),n(8)),f=new(n.n(h).a),v=function(e){var t,n;t="testPlayer1",n=JSON.stringify(e),localStorage.setItem("collectGame_".concat(t),n)},d=function(e){return JSON.parse(function(e){return localStorage.getItem("collectGame_".concat(e))}(e))},b=function(){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=[],a=!0,i=!1,c=void 0;try{for(var r,o=e[Symbol.iterator]();!(a=(r=o.next()).done);a=!0)for(var u=r.value,l=u.num,s=u.chance,m=0;m<s*t;m++)n.push(l)}catch(h){i=!0,c=h}finally{try{a||null==o.return||o.return()}finally{if(i)throw c}}return n[~~(Math.random()*n.length)]}([{num:1,chance:.55},{num:2,chance:.3},{num:4,chance:.1},{num:8,chance:.05}])},g={1:"xiaojitui",2:"zhenzi",4:"shousimianbao",8:"bigenguo",16:"yaoguo",32:"caomei",64:"baocuibinggan",128:"naiyouxiaweiyiguo",256:"mangguo",512:"songzi",1024:"banli",2048:"baiputaogan",4096:"hongzao",8192:"huafubing",16384:"manyuemeiquqi",32768:"shanbei",65536:"zhurouchang",131072:"kaixinguo",262144:"guaziren"},N=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(s.a)(t).call(this))).vacentArea=9,e.state={blockNum:d("testPlayer1")||[[1,0,0],[0,0,0],[0,0,0]],toggle:0},e.prevPos=[],e.toggle=0,e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.blockNum,a=t.toggle,c=n.map(function(t,n){return t.map(function(t,c){return i.a.createElement("div",{className:"block",key:3*n+c,onClick:function(){return e.handleChess(n,c)}},t?i.a.createElement("span",{className:"number".concat(e.isArrayEqual(e.prevPos,[n,c])&&a?" lifted":"")},i.a.createElement("i",{className:"icon ".concat(g[t])})):"")})});return i.a.createElement("div",{className:"collect-board"},c)}},{key:"componentDidMount",value:function(){var e=this;this.eventEmitter=f.addListener("sendNumber",function(t){e.recievedNewNumber(t)}),this.deleteListener=f.addListener("deleteNumber",function(){e.setState({blockNum:[[0,0,0],[0,0,0],[0,0,0]]})})}},{key:"handleChess",value:function(e,t){var n=this.state.toggle;n?this.switchChess(this.prevPos,[e,t]):this.prevPos=[e,t],this.setState({toggle:!n})}},{key:"switchChess",value:function(e,t){if(!this.isArrayEqual(e,t)){var n=this.state.blockNum,a=e[0],i=[e[1]],c=t[0],r=[t[1]],o=n[a][i],u=n[c][r];n[a][i]=o!==u?[u,n[c][r]=o][0]:[0,n[c][r]=u+o][0],this.setState({blockNum:n}),v(n)}}},{key:"isArrayEqual",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.toString()===t.toString()}},{key:"recievedNewNumber",value:function(e){var t=this.state.blockNum;if(this.findVacentPos()){var n=this.findVacentPos()[0],a=this.findVacentPos()[1];t[n][a]=e,this.setState({blockNum:t})}else this.vacentArea=0}},{key:"findVacentPos",value:function(){var e=this.state.blockNum;for(var t in e){var n=e[t].findIndex(function(e){return 0===e});if(-1!==n)return[t,n]}}}]),t}(i.a.Component),y=(n(17),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(s.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"topActions"},i.a.createElement("div",{className:"delete",onClick:function(){return e.delete()}},i.a.createElement("i",{className:"icon trashBin"}),i.a.createElement("span",null,"\u91cd\u7f6e")),i.a.createElement("div",{className:"dice",onClick:function(){return e.summon()}},i.a.createElement("i",{className:"icon weibolu"}),i.a.createElement("span",null,"\u6765\u4e00\u53d1")))}},{key:"summon",value:function(){f.emit("sendNumber",b())}},{key:"delete",value:function(){f.emit("deleteNumber","reStart")}}]),t}(i.a.Component)),k=(n(18),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(s.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"footer"})}}]),t}(i.a.Component));n(19),n(20);var p=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(y,null),i.a.createElement(N,null),i.a.createElement(k,null))};r.a.render(i.a.createElement(p,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.14921bca.chunk.js.map