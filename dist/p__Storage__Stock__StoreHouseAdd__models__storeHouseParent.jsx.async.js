(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[129],{Dhaf:function(e,a,t){"use strict";t.r(a);var n=t("RIqP"),c=t.n(n),s=t("o0o1"),r=t.n(s),o=t("dCQc");a["default"]={namespace:"storeHouseParent",state:[],effects:{fetch:r.a.mark(function e(a,t){var n,c,s,u,p,d,i;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,c=a.callBack,s=t.call,u=t.put,e.next=4,s(o["bd"],n);case 4:return p=e.sent,d=p.data,i=p.msg,e.next=8,u({type:"save",payload:d});case 8:c&&c(i,d);case 9:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,a){var t=a.payload;return[].concat(c()(e),c()(t))}}}}}]);