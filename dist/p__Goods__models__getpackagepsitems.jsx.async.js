(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[94],{Zrve:function(e,a,t){"use strict";t.r(a);var n=t("RIqP"),c=t.n(n),r=t("o0o1"),s=t.n(r),o=t("dCQc");a["default"]={namespace:"getpackagepsitems",state:[],effects:{fetch:s.a.mark(function e(a,t){var n,c,r,p,u,i,d,f;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,c=a.callBack,r=t.call,p=t.put,e.next=4,r(o["gd"],n);case 4:return u=e.sent,i=u.data,d=u.msg,f={},i.forEach(function(e){var a=e.itemKey,t=e.itemAmount;f[a]=t}),e.next=10,p({type:"save",payload:i});case 10:c&&c(d,f);case 11:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,a){var t=a.payload;return[].concat(c()(e),c()(t))}}}}}]);