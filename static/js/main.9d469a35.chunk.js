(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),i=n.n(c),o=(n(15),n(1)),u=n(2),s=n(4),l=n(3),m=n(5),h=(n(16),n(8)),f=new(n.n(h).a),v=function(e){var t,n;t="testPlayer1",n=JSON.stringify(e),localStorage.setItem("collectGame_".concat(t),n)},d=function(e){return JSON.parse(function(e){return localStorage.getItem("collectGame_".concat(e))}(e))},b=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(l.a)(t).call(this))).state={blockNum:d("testPlayer1")||[[1,0,0],[0,0,0],[0,0,0]],toggle:0},e.prevPos=[],e.toggle=0,e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.blockNum,a=t.toggle,c=n.map(function(t,n){return t.map(function(t,c){return r.a.createElement("div",{className:"block",key:3*n+c,onClick:function(){return e.handleChess(n,c)}},t?r.a.createElement("span",{className:"number".concat(e.isArrayEqual(e.prevPos,[n,c])&&a?" lifted":"")},t):"")})});return r.a.createElement("div",{className:"collect-board"},c)}},{key:"componentDidMount",value:function(){var e=this;this.eventEmitter=f.addListener("sendNumber",function(t){e.recievedNewNumber(t)})}},{key:"handleChess",value:function(e,t){var n=this.state.toggle;n?this.switchChess(this.prevPos,[e,t]):this.prevPos=[e,t],this.setState({toggle:!n})}},{key:"switchChess",value:function(e,t){if(!this.isArrayEqual(e,t)){var n=this.state.blockNum,a=e[0],r=[e[1]],c=t[0],i=[t[1]],o=n[a][r],u=n[c][i];n[a][r]=o!==u?[u,n[c][i]=o][0]:[0,n[c][i]=u+o][0],this.setState({blockNum:n}),v(n)}}},{key:"isArrayEqual",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.toString()===t.toString()}},{key:"recievedNewNumber",value:function(e){var t=this.state.blockNum;if(this.findVacentPos()){var n=this.findVacentPos()[0],a=this.findVacentPos()[1];t[n][a]=e,this.setState({blockNum:t})}else console.log("\u4f4d\u7f6e\u5df2\u6ee1")}},{key:"findVacentPos",value:function(){var e=this.state.blockNum;for(var t in e){var n=e[t].findIndex(function(e){return 0===e});if(-1!==n)return[t,n]}}}]),t}(r.a.Component),k=(n(17),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(l.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"dice",onClick:function(){return e.summon()}},"+")}},{key:"summon",value:function(){f.emit("sendNumber",this.createRandomNumber())}},{key:"createRandomNumber",value:function(){var e=this.createChanceArr([{num:1,chance:.55},{num:2,chance:.3},{num:4,chance:.1},{num:8,chance:.05}]);return e[~~(Math.random()*e.length)]}},{key:"createChanceArr",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=[],a=!0,r=!1,c=void 0;try{for(var i,o=e[Symbol.iterator]();!(a=(i=o.next()).done);a=!0)for(var u=i.value,s=u.num,l=u.chance,m=0;m<l*t;m++)n.push(s)}catch(h){r=!0,c=h}finally{try{a||null==o.return||o.return()}finally{if(r)throw c}}return n}}]),t}(r.a.Component));n(18);var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,null),r.a.createElement(b,null))};i.a.render(r.a.createElement(y,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.9d469a35.chunk.js.map