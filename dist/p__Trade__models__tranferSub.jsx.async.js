(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[137],{aS9D:function(a,e,n){"use strict";n.r(e);var t=n("MVZn"),r=n.n(t),s=n("o0o1"),c=n.n(s),u=n("dCQc");e["default"]={namespace:"tranferSub",state:{},effects:{submit:c.a.mark(function a(e,n){var t,r,s,o,p,d,i;return c.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return t=e.payload,r=e.callBack,s=n.call,o=n.put,a.next=4,s(u["ud"],t);case 4:return p=a.sent,d=p.data,i=p.msg,a.next=8,o({type:"save",payload:d});case 8:r&&r(i);case 9:case"end":return a.stop()}},a,this)})},reducers:{save:function(a,e){var n=e.payload;return r()({},a,{},n)}}}}}]);