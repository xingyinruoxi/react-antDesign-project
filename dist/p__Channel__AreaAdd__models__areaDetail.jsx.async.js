(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{yynR:function(e,a,t){"use strict";t.r(a);var n=t("MVZn"),c=t.n(n),r=t("o0o1"),s=t.n(r),i=t("dCQc");a["default"]={namespace:"areaDetail",state:{},effects:{fetch:s.a.mark(function e(a,t){var n,c,r,o,p,u,d,l,y,w,f;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,c=a.callBack,r=t.call,o=t.put,e.next=4,r(i["J"],n);case 4:return p=e.sent,u=p.msg,d=p.data,l=d.province,y=d.city,w=d.county,f={province:l,city:y,area:w},delete d.citys,d.citys=f,e.next=13,o({type:"save",payload:d});case 13:c&&c(u,d);case 14:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,a){var t=a.payload;return c()({},e,{},t)}}}}}]);