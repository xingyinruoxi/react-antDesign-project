(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[55],{IUZE:function(a,e,n){"use strict";n.r(e);var t=n("MVZn"),s=n.n(t),c=n("o0o1"),r=n.n(c),p=n("dCQc");e["default"]={namespace:"companyUpdate2",state:{},effects:{submit:r.a.mark(function a(e,n){var t,s,c,o,u,d,i;return r.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return t=e.payload,s=e.callBack,c=n.call,o=n.put,a.next=4,c(p["sb"],t);case 4:return u=a.sent,d=u.msg,i=t.data.id,a.next=9,o({type:"save",payload:d});case 9:s&&s(d,i);case 10:case"end":return a.stop()}},a,this)})},reducers:{save:function(a,e){var n=e.payload;return s()({},a,{},n)}}}}}]);