(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[153],{Ndeh:function(e,t,a){"use strict";a.r(t);var n=a("o0o1"),r=a.n(n),s=a("MVZn"),o=a.n(s),u=a("dCQc");t["default"]={namespace:"enterOrderList",state:{formValues:{}},effects:{fetch:r.a.mark(function e(t,a){var n,s,c,i,d,p;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,s=a.call,c=a.put,e.next=4,s(u["Ab"],n);case 4:return i=e.sent,d=i.data,p=i.data.list,d.list=p.length>0&&p.filter(function(e){var t=e.tbTradeInfoDTO.status;return"2007"!==t&&"2008"!==t}),e.next=10,c({type:"save",payload:o()({},d,{formValues:o()({},n.queryCondition)})});case 10:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,t){var a=t.payload;return o()({},e,{},a)}}}}}]);