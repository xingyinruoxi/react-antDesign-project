(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[95],{tQlJ:function(e,t,a){"use strict";a.r(t);var n=a("MVZn"),r=a.n(n),s=a("o0o1"),c=a.n(s),o=a("dCQc"),p=a("+n12");t["default"]={namespace:"getpsinfo",state:{},effects:{fetch:c.a.mark(function e(t,a){var n,r,s,u,i,l,y,d,f,m;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=t.callBack,s=a.call,u=a.put,e.next=4,s(o["hd"],n);case 4:return i=e.sent,l=i.data,y=i.msg,d=l.firstPaymentProperty,f=l.lastPaymentProperty,m=l.schemaInterest,d&&(l.firstPaymentProperty=Object(p["a"])(100,d)),f&&(l.lastPaymentProperty=Object(p["a"])(100,f)),m&&(l.schemaInterest=Object(p["a"])(100,m)),e.next=12,u({type:"save",payload:l});case 12:r&&r(y,l);case 13:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,t){var a=t.payload;return r()({},e,{},a)}}}}}]);