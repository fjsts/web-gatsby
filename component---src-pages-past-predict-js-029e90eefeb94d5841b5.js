"use strict";(self.webpackChunkweb_gatsby=self.webpackChunkweb_gatsby||[]).push([[958],{7181:function(e,t,a){var n=a(7294);t.Z=e=>{const{currentPath:t}=e;return(0,n.useEffect)((()=>{window.adsbygoogle=window.adsbygoogle||[],window.adsbygoogle.push({})}),[t]),n.createElement("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-6815803998948370","data-ad-slot":"5802022489","data-ad-format":"fluid","data-ad-layout":"in-article"})}},1875:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),l=a(1883),c=a(7181);function o(e){let{post:t,count:a}=e;const o="/today_predict/"+t.race_id+"/",r=t.area,d=t.race_no+"R "+t.RaceData01_time;let u="";return t.y_pred_value>70&&(u="🐴"),n.createElement("div",null,n.createElement(l.Link,{to:o},n.createElement("div",{className:"today-predict-list"},n.createElement("div",null,u," ",r," ",d," ",u," "))),a%5==0?n.createElement(c.Z,null):null)}},9635:function(e,t,a){a.r(t),a.d(t,{default:function(){return r}});var n=a(7294),l=a(1079),c=a(1875),o=a(8183);function r(e){let{data:t}=e;const a=(r=new Date,(r=new Date(r)).getFullYear()+"-"+("00"+(r.getMonth()+1)).slice(-2)+"-"+("00"+r.getDate()).slice(-2));var r;let d=0;return n.createElement(l.Z,null,n.createElement(o.Z,{pageTitle:"過去の予想"}),n.createElement("h1",null,"過去の予想"),t.allTodayRaceInfoCsv.edges.map((e=>function(e){if(a===e.node.date)return d+=1,n.createElement(c.Z,{key:e.node.race_id,post:e.node,count:d})}(e))))}}}]);
//# sourceMappingURL=component---src-pages-past-predict-js-029e90eefeb94d5841b5.js.map