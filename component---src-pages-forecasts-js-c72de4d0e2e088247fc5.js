"use strict";(self.webpackChunkweb_gatsby=self.webpackChunkweb_gatsby||[]).push([[68],{8574:function(e,t,n){n.r(t),n.d(t,{default:function(){return r}});var a=n(7294),l=n(1079);function r(e){let{data:t}=e;return a.createElement(l.Z,null,function(e){var t=[],n=[{text:"笠松"},{text:"川崎"}],l=[{text:"1"},{text:"2"},{text:"3"},{text:"4"},{text:"5"},{text:"6"},{text:"7"},{text:"8"},{text:"9"},{text:"10"},{text:"11"},{text:"12"}];for(var r in n)for(var d in l){let u=n[r].text,i=l[d].text,m=u+i;t.push(a.createElement("div",{key:m,id:m}," ",u,i,"R",c(e,u,i)))}return t}(t.region))}function c(e,t,n){let l=[],r=0;return e.edges.forEach((function(e){e.node.area===t&&e.node.race_no===n&&(r+=1,l.push(a.createElement("tr",{key:e.node.id},a.createElement("td",{width:"20%"},e.node.RaceData01_time.replace("発走","")),a.createElement("td",{width:"10%"},e.node.area),a.createElement("td",{width:"10%"},e.node.race_no),a.createElement("td",{width:"10%"},"[",e.node.umaban,"]"),a.createElement("td",{width:"50%",align:"left"},e.node.horse_name))))})),l=0===r?a.createElement("p",{align:"center"},"データがありません"):a.createElement("table",{className:"predict"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"出走"),a.createElement("th",null,"場所"),a.createElement("th",null,"R"),a.createElement("th",null,"馬番"),a.createElement("th",null,"馬名"))),a.createElement("tbody",null,l)),l}}}]);
//# sourceMappingURL=component---src-pages-forecasts-js-c72de4d0e2e088247fc5.js.map