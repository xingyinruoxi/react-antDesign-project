(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[97],{Bwsn:function(e,a,t){"use strict";t.r(a);var n=t("RIqP"),c=t.n(n),s=t("o0o1"),r=t.n(s),o=t("dCQc");a["default"]={namespace:"getptbenefits",state:[],effects:{fetch:r.a.mark(function e(a,t){var n,c,s,p,u,i,d;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,c=a.callBack,s=t.call,p=t.put,e.next=4,s(o["Tb"],n);case 4:return u=e.sent,i=u.data,d=u.msg,e.next=8,p({type:"save",payload:i});case 8:c&&c(d,i);case 9:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,a){var t=a.payload;return[].concat(c()(e),c()(t))}}}}}]);