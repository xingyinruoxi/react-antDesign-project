(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[82],{lzFz:function(a,e,t){"use strict";t.r(e);var n=t("RIqP"),c=t.n(n),r=t("o0o1"),s=t.n(r),o=t("dCQc");e["default"]={namespace:"goodTypeStep4",state:[],effects:{fetch:s.a.mark(function a(e,t){var n,c,r,p,u,d,i;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,c=e.callBack,r=t.call,p=t.put,a.next=4,r(o["Tb"],n);case 4:return u=a.sent,d=u.msg,i=u.data,a.next=8,p({type:"save",payload:i});case 8:c&&c(d,i);case 9:case"end":return a.stop()}},a,this)}),moneyAdd:s.a.mark(function a(e,t){var n,c,r,p,u,d,i;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,c=e.callBack,r=t.call,a.next=4,r(o["A"],n);case 4:p=a.sent,u=p.msg,d=p.data,i=d?d.id:"",c&&c(u,i);case 8:case"end":return a.stop()}},a,this)})},reducers:{save:function(a,e){var t=e.payload;return[].concat(c()(a),c()(t))}}}}}]);