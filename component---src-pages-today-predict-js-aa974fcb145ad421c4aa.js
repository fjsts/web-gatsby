"use strict";(self.webpackChunkweb_gatsby=self.webpackChunkweb_gatsby||[]).push([[146],{7639:function(e,t,a){a.r(t),a.d(t,{default:function(){return s}});var n=a(7294),l=a(1629),c=a(1883);function r(e){let{post:t}=e;const a="/today_predict/"+t.race_id+"/",l=t.area,r=t.race_no+"R "+t.RaceData01_time;let s="";return t.y_pred_value>70&&(s="🐴"),n.createElement(c.Link,{to:a,className:"post-link-anchor"},n.createElement("div",{className:"post-link"},n.createElement("div",{className:"post-link-text"},n.createElement("h3",null,s," ",l," ",r," ",s," "))))}function s(e){let{data:t}=e;const a=(c=new Date,(c=new Date(c)).getFullYear()+"-"+("00"+(c.getMonth()+1)).slice(-2)+"-"+("00"+c.getDate()).slice(-2));var c;return n.createElement(l.Z,null,n.createElement("h2",null,"本日の予想"),t.allTodayRaceInfoCsv.edges.map((e=>function(e){if(a===e.node.date)return n.createElement(r,{key:e.node.race_id,post:e.node})}(e))))}}}]);
//# sourceMappingURL=component---src-pages-today-predict-js-aa974fcb145ad421c4aa.js.map