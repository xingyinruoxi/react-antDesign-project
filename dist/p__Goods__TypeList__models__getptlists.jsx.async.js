(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[88],{uFpQ:function(e,a,t){"use strict";t.r(a);var n=t("RIqP"),c=t.n(n),s=t("o0o1"),r=t.n(s),p=t("dCQc");a["default"]={namespace:"getptlists",state:[],effects:{fetch:r.a.mark(function e(a,t){var n,c,s,o,u,i,d;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,c=a.callBack,s=t.call,o=t.put,e.next=4,s(p["w"],n);case 4:return u=e.sent,i=u.msg,d=u.data,e.next=8,o({type:"save",payload:d});case 8:c&&c(i,d);case 9:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,a){var t=a.payload;return[].concat(c()(e),c()(t))}}}}}]);