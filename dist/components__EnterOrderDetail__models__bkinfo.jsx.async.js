(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"tH/P":function(e,a,n){"use strict";n.r(a);var t=n("MVZn"),c=n.n(t),s=n("o0o1"),r=n.n(s),o=n("dCQc");a["default"]={namespace:"bkinfo",state:{},effects:{fetch:r.a.mark(function e(a,n){var t,c,s,p,u,i,d;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=a.payload,c=a.callBack,s=n.call,p=n.put,e.next=4,s(o["h"],t);case 4:return u=e.sent,i=u.msg,d=u.data,e.next=8,p({type:"save",payload:d});case 8:c&&c(i,d);case 9:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,a){var n=a.payload;return c()({},e,{},n)}}}}}]);