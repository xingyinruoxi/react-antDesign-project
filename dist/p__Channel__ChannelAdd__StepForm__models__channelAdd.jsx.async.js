(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{nSTq:function(a,e,t){"use strict";t.r(e);var n=t("MVZn"),s=t.n(n),c=t("o0o1"),r=t.n(c),p=t("dCQc");e["default"]={namespace:"channelAdd",state:{},effects:{baseInfo:r.a.mark(function a(e,t){var n,s,c,u,o,l,i;return r.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,s=e.callBack,c=t.call,u=t.put,a.next=4,c(p["ib"],n);case 4:return o=a.sent,l=o.msg,i=o.data,a.next=8,u({type:"save",payload:o.data});case 8:s&&s(l,i);case 9:case"end":return a.stop()}},a,this)}),step2:r.a.mark(function a(e,t){var n,s,c,u,o,l,i;return r.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,s=e.callBack,c=t.call,u=t.put,a.next=4,c(p["hb"],n);case 4:return o=a.sent,l=o.msg,i=o.data,a.next=8,u({type:"save"});case 8:s&&s(l,i);case 9:case"end":return a.stop()}},a,this)}),step3:r.a.mark(function a(e,t){var n,s,c,u,o,l;return r.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,s=e.callBack,c=t.call,u=t.put,a.next=4,c(p["Ic"],n);case 4:return o=a.sent,l=o.msg,a.next=8,u({type:"save",payload:o.data});case 8:s&&s(l);case 9:case"end":return a.stop()}},a,this)})},reducers:{save:function(a,e){var t=e.payload;return s()({},a,{},t)}}}}}]);