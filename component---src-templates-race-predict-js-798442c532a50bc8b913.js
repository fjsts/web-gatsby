"use strict";(self.webpackChunkweb_gatsby=self.webpackChunkweb_gatsby||[]).push([[199],{9703:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var a=n(7294),l=n(1629),r=n(1883);function c(e){let{pageContext:t,data:n}=e;const c=t.post.area,d=t.post.race_no+"R "+t.post.RaceData01_time,u=t.post.race_id;return a.createElement(l.Z,null,a.createElement("h2",null,c," ",d),function(e,t){let n=[],l=0,r=0;e.edges.forEach((function(e){e.node.race_id===t&&(l+=1,r=Math.round(100*e.node.y_pred_value)/100,n.push(a.createElement("tr",{key:e.node.id},a.createElement("td",{width:"20%"},e.node.umaban),a.createElement("td",{width:"60%",align:"left"},e.node.horse_name),a.createElement("td",{width:"20%",align:"right"},r))))})),n=0===l?a.createElement("p",{align:"center"},"データがありません"):a.createElement("table",{className:"predict"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"馬番"),a.createElement("th",null,"馬名"),a.createElement("th",null,"期待値"))),a.createElement("tbody",null,n));return n}(n.allTodayPredictCsv,u),a.createElement(r.Link,{to:"/today_predict"},a.createElement("span",{className:"btn-return"},"← 戻る")))}}}]);
//# sourceMappingURL=component---src-templates-race-predict-js-798442c532a50bc8b913.js.map