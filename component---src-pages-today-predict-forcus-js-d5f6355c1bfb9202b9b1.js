"use strict";(self.webpackChunkweb_gatsby=self.webpackChunkweb_gatsby||[]).push([[528],{7181:function(e,t,l){var n=l(7294);t.Z=e=>{const{currentPath:t}=e;return(0,n.useEffect)((()=>{window.adsbygoogle=window.adsbygoogle||[],window.adsbygoogle.push({})}),[t]),n.createElement("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-6815803998948370","data-ad-slot":"5802022489","data-ad-format":"fluid","data-ad-layout":"in-article"})}},6065:function(e,t,l){l.r(t),l.d(t,{default:function(){return d}});var n=l(7294),a=l(3998),r=l(8183),c=l(7181);function d(e){let{data:t}=e;return n.createElement(a.Z,null,n.createElement(r.Z,{pageTitle:"本日の狙い目"}),n.createElement("h1",null,"本日の狙い目"),n.createElement(c.Z,null),n.createElement("br",null),n.createElement("h2",null,"中央競馬"),u(t.allTodayPredictCsv,"center",!1),n.createElement("br",null),n.createElement("br",null),n.createElement(c.Z,null),n.createElement("br",null),n.createElement("br",null),n.createElement("h2",null,"地方競馬"),u(t.allTodayPredictCsv,"region",!1),n.createElement("br",null),n.createElement("br",null),n.createElement(c.Z,null))}function u(e,t,l){let a=[],r=0;const c=(d=new Date,(d=new Date(d)).getFullYear()+"-"+("00"+(d.getMonth()+1)).slice(-2)+"-"+("00"+d.getDate()).slice(-2));var d;return e.edges.forEach((function(e){e.node.y_pred_value>70&&e.node.date===c&&e.node.division===t&&(r+=1,a.push(n.createElement("tr",{key:e.node.id},n.createElement("td",{width:"20%"},e.node.area,e.node.race_no,"R"),n.createElement("td",{width:"20%"},e.node.RaceData01_time.replace("発走","")),n.createElement("td",{width:"10%"},e.node.umaban),n.createElement("td",{width:"50%"},e.node.horse_name))))})),a=0===r?n.createElement("p",{align:"center"},"該当のレースがありません。"):n.createElement("table",{className:"predict-table"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"レース"),n.createElement("th",null,"出走"),n.createElement("th",null,"馬番"),n.createElement("th",null,"馬名"))),n.createElement("tbody",null,a)),a}}}]);
//# sourceMappingURL=component---src-pages-today-predict-forcus-js-d5f6355c1bfb9202b9b1.js.map