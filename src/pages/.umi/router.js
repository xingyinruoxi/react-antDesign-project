import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import RendererWrapper0 from '/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/.umi/LocaleWrapper.jsx'
import _dvaDynamic from 'dva/dynamic'

let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/user",
    "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__UserLayout" */'../../layouts/UserLayout'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
    "routes": [
      {
        "path": "/user/login",
        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__User__models__forgetPwd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/User/models/forgetPwd.js').then(m => { return { namespace: 'forgetPwd',...m.default}}),
  import(/* webpackChunkName: 'p__User__models__register.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/User/models/register.js').then(m => { return { namespace: 'register',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__User__Login" */'../User/Login'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "path": "/user/forgetpwd",
        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__User__models__forgetPwd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/User/models/forgetPwd.js').then(m => { return { namespace: 'forgetPwd',...m.default}}),
  import(/* webpackChunkName: 'p__User__models__register.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/User/models/register.js').then(m => { return { namespace: 'register',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__User__ForgetPwd" */'../User/ForgetPwd'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "path": "/user/resetpwd",
        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__User__ResetPwd__models__resetPwd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/User/ResetPwd/models/resetPwd.js').then(m => { return { namespace: 'resetPwd',...m.default}}),
  import(/* webpackChunkName: 'p__User__models__forgetPwd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/User/models/forgetPwd.js').then(m => { return { namespace: 'forgetPwd',...m.default}}),
  import(/* webpackChunkName: 'p__User__models__register.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/User/models/register.js').then(m => { return { namespace: 'register',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__User__ResetPwd" */'../User/ResetPwd'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "path": "/user/forgetpwd-result",
        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__User__models__forgetPwd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/User/models/forgetPwd.js').then(m => { return { namespace: 'forgetPwd',...m.default}}),
  import(/* webpackChunkName: 'p__User__models__register.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/User/models/register.js').then(m => { return { namespace: 'register',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__User__ForgetPwdResult" */'../User/ForgetPwdResult'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "path": "/user/register",
        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__User__models__forgetPwd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/User/models/forgetPwd.js').then(m => { return { namespace: 'forgetPwd',...m.default}}),
  import(/* webpackChunkName: 'p__User__models__register.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/User/models/register.js').then(m => { return { namespace: 'register',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__User__Register" */'../User/Register.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "path": "/user/register-result",
        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__User__models__forgetPwd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/User/models/forgetPwd.js').then(m => { return { namespace: 'forgetPwd',...m.default}}),
  import(/* webpackChunkName: 'p__User__models__register.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/User/models/register.js').then(m => { return { namespace: 'register',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__User__RegisterResult" */'../User/RegisterResult'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "path": "/",
    "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../../layouts/BasicLayout'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
    "Routes": [require('../Authorized').default],
    "routes": [
      {
        "path": "/",
        "redirect": "/works/unfinish/enterorder/list",
        "exact": true
      },
      {
        "path": "/works",
        "icon": "laptop",
        "name": "works",
        "routes": [
          {
            "path": "/works/unfinish",
            "name": "unfinish",
            "routes": [
              {
                "path": "/works/unfinish/enterorder",
                "name": "enterorder",
                "hideChildrenInMenu": true,
                "routes": [
                  {
                    "path": "/works/unfinish/enterorder",
                    "redirect": "/works/unfinish/enterorder/list",
                    "exact": true
                  },
                  {
                    "path": "/works/unfinish/enterorder/list",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Works__Unfinish__EnterOrder__models__addCache.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Works/Unfinish/EnterOrder/models/addCache.jsx').then(m => { return { namespace: 'addCache',...m.default}}),
  import(/* webpackChunkName: 'p__Works__Unfinish__EnterOrder__models__cacheList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Works/Unfinish/EnterOrder/models/cacheList.jsx').then(m => { return { namespace: 'cacheList',...m.default}}),
  import(/* webpackChunkName: 'p__Works__Unfinish__EnterOrder__models__enterOrderList.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Works/Unfinish/EnterOrder/models/enterOrderList.js').then(m => { return { namespace: 'enterOrderList',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Works/Unfinish/EnterOrder'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/works/unfinish/enterorder/detail",
                    "name": "enterOrderDetail",
                    "hideInMenu": true,
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__bkinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/bkinfo.jsx').then(m => { return { namespace: 'bkinfo',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__changeCustomer.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/changeCustomer.jsx').then(m => { return { namespace: 'changeCustomer',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__contactList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/contactList.jsx').then(m => { return { namespace: 'contactList',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__contactUser.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/contactUser.js').then(m => { return { namespace: 'contactUser',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__fileList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/fileList.jsx').then(m => { return { namespace: 'fileList',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__findReportResult.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/findReportResult.jsx').then(m => { return { namespace: 'findReportResult',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__firstTradeSubmit.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/firstTradeSubmit.js').then(m => { return { namespace: 'firstTradeSubmit',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__orderResultInfo.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/orderResultInfo.js').then(m => { return { namespace: 'orderResultInfo',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__reTradeSubmit.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/reTradeSubmit.js').then(m => { return { namespace: 'reTradeSubmit',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__tradeHistory.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/tradeHistory.jsx').then(m => { return { namespace: 'tradeHistory',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__unfinishTermlist.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/unfinishTermlist.js').then(m => { return { namespace: 'unfinishTermlist',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../../components/EnterOrderDetail'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
                  }
                ]
              },
              {
                "path": "/works/unfinish/paycar",
                "name": "paycar",
                "hideChildrenInMenu": true,
                "routes": [
                  {
                    "path": "/works/unfinish/paycar",
                    "redirect": "/works/unfinish/paycar/list",
                    "exact": true
                  },
                  {
                    "path": "/works/unfinish/paycar/list",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Works__Unfinish__PayCar__models__payCarList.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Works/Unfinish/PayCar/models/payCarList.js').then(m => { return { namespace: 'payCarList',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Works/Unfinish/PayCar'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/works/unfinish/paycar/detail",
                    "name": "paycarDetail",
                    "hideInMenu": true,
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'components__PayCarDetail__models__payCarHistory.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PayCarDetail/models/payCarHistory.js').then(m => { return { namespace: 'payCarHistory',...m.default}}),
  import(/* webpackChunkName: 'components__PayCarDetail__models__payCarResult.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PayCarDetail/models/payCarResult.js').then(m => { return { namespace: 'payCarResult',...m.default}}),
  import(/* webpackChunkName: 'components__PayCarDetail__models__payCarSubmit.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PayCarDetail/models/payCarSubmit.js').then(m => { return { namespace: 'payCarSubmit',...m.default}}),
  import(/* webpackChunkName: 'components__PayCarDetail__models__payCarTabInfo.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PayCarDetail/models/payCarTabInfo.js').then(m => { return { namespace: 'payCarTabInfo',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../../components/PayCarDetail'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
                  }
                ]
              },
              {
                "path": "/works/unfinish/resign",
                "name": "resign",
                "hideInMenu": true,
                "hideChildrenInMenu": true,
                "routes": [
                  {
                    "path": "/works/unfinish/resign",
                    "redirect": "/works/unfinish/resign/list",
                    "exact": true
                  },
                  {
                    "path": "/works/unfinish/resign/list",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Works__Unfinish__Resign__models__ResignList.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Works/Unfinish/Resign/models/ResignList.js').then(m => { return { namespace: 'ResignList',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Works/Unfinish/Resign'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/works/unfinish/resign/detail",
                    "name": "resignDetail",
                    "hideInMenu": true,
                    "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../../components/ContractDetail'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
                  }
                ]
              },
              {
                "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "path": "/works/finished",
            "name": "finished",
            "routes": [
              {
                "path": "/works/finished/enterorder",
                "name": "enterorder",
                "hideChildrenInMenu": true,
                "routes": [
                  {
                    "path": "/works/finished/enterorder",
                    "redirect": "/works/finished/enterorder/list",
                    "exact": true
                  },
                  {
                    "path": "/works/finished/enterorder/list",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Works__Finished__EnterOrder__models__finishEnterorder.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Works/Finished/EnterOrder/models/finishEnterorder.js').then(m => { return { namespace: 'finishEnterorder',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Works/Finished/EnterOrder'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/works/finished/enterorder/detail",
                    "name": "enterorderDetail",
                    "hideInMenu": true,
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__bkinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/bkinfo.jsx').then(m => { return { namespace: 'bkinfo',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__changeCustomer.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/changeCustomer.jsx').then(m => { return { namespace: 'changeCustomer',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__contactList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/contactList.jsx').then(m => { return { namespace: 'contactList',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__contactUser.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/contactUser.js').then(m => { return { namespace: 'contactUser',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__fileList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/fileList.jsx').then(m => { return { namespace: 'fileList',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__findReportResult.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/findReportResult.jsx').then(m => { return { namespace: 'findReportResult',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__firstTradeSubmit.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/firstTradeSubmit.js').then(m => { return { namespace: 'firstTradeSubmit',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__orderResultInfo.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/orderResultInfo.js').then(m => { return { namespace: 'orderResultInfo',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__reTradeSubmit.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/reTradeSubmit.js').then(m => { return { namespace: 'reTradeSubmit',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__tradeHistory.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/tradeHistory.jsx').then(m => { return { namespace: 'tradeHistory',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__unfinishTermlist.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/unfinishTermlist.js').then(m => { return { namespace: 'unfinishTermlist',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../../components/EnterOrderDetail'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
                  }
                ]
              },
              {
                "path": "/works/finished/paycar",
                "name": "paycar",
                "hideChildrenInMenu": true,
                "routes": [
                  {
                    "path": "/works/finished/paycar",
                    "redirect": "/works/finished/paycar/list",
                    "exact": true
                  },
                  {
                    "path": "/works/finished/paycar/list",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Works__Finished__PayCar__models__payCarListOver.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Works/Finished/PayCar/models/payCarListOver.js').then(m => { return { namespace: 'payCarListOver',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Works/Finished/PayCar'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/works/finished/paycar/detail",
                    "name": "paycarDetail",
                    "hideInMenu": true,
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'components__PayCarDetail__models__payCarHistory.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PayCarDetail/models/payCarHistory.js').then(m => { return { namespace: 'payCarHistory',...m.default}}),
  import(/* webpackChunkName: 'components__PayCarDetail__models__payCarResult.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PayCarDetail/models/payCarResult.js').then(m => { return { namespace: 'payCarResult',...m.default}}),
  import(/* webpackChunkName: 'components__PayCarDetail__models__payCarSubmit.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PayCarDetail/models/payCarSubmit.js').then(m => { return { namespace: 'payCarSubmit',...m.default}}),
  import(/* webpackChunkName: 'components__PayCarDetail__models__payCarTabInfo.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PayCarDetail/models/payCarTabInfo.js').then(m => { return { namespace: 'payCarTabInfo',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../../components/PayCarDetail'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
                  }
                ]
              },
              {
                "path": "/works/finished/resign",
                "name": "resign",
                "hideInMenu": true,
                "hideChildrenInMenu": true,
                "routes": [
                  {
                    "path": "/works/finished/resign",
                    "redirect": "/works/finished/resign/list",
                    "exact": true
                  },
                  {
                    "path": "/works/finished/resign/list",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Works__Finished__Resign__models__ResignListOver.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Works/Finished/Resign/models/ResignListOver.js').then(m => { return { namespace: 'ResignListOver',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Works/Finished/Resign'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/works/finished/resign/detail",
                    "name": "resignDetail",
                    "hideInMenu": true,
                    "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../../components/ContractDetail'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
                  }
                ]
              },
              {
                "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/trade",
        "icon": "profile",
        "name": "trade",
        "routes": [
          {
            "path": "/trade/list",
            "name": "list",
            "hideChildrenInMenu": true,
            "routes": [
              {
                "path": "/trade/list",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Trade__List__models__TradeList.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Trade/List/models/TradeList.js').then(m => { return { namespace: 'TradeList',...m.default}}),
  import(/* webpackChunkName: 'p__Trade__models__tranferSub.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Trade/models/tranferSub.jsx').then(m => { return { namespace: 'tranferSub',...m.default}}),
  import(/* webpackChunkName: 'p__Trade__models__transferList.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Trade/models/transferList.js').then(m => { return { namespace: 'transferList',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Trade/List'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "path": "/trade/list/detail",
                "name": "detail",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__bkinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/bkinfo.jsx').then(m => { return { namespace: 'bkinfo',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__changeCustomer.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/changeCustomer.jsx').then(m => { return { namespace: 'changeCustomer',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__contactList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/contactList.jsx').then(m => { return { namespace: 'contactList',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__contactUser.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/contactUser.js').then(m => { return { namespace: 'contactUser',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__fileList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/fileList.jsx').then(m => { return { namespace: 'fileList',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__findReportResult.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/findReportResult.jsx').then(m => { return { namespace: 'findReportResult',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__firstTradeSubmit.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/firstTradeSubmit.js').then(m => { return { namespace: 'firstTradeSubmit',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__orderResultInfo.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/orderResultInfo.js').then(m => { return { namespace: 'orderResultInfo',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__reTradeSubmit.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/reTradeSubmit.js').then(m => { return { namespace: 'reTradeSubmit',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__tradeHistory.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/tradeHistory.jsx').then(m => { return { namespace: 'tradeHistory',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__unfinishTermlist.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/unfinishTermlist.js').then(m => { return { namespace: 'unfinishTermlist',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../../components/EnterOrderDetail'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "path": "/trade/firstlist",
            "name": "firstList",
            "hideChildrenInMenu": true,
            "routes": [
              {
                "path": "/trade/firstlist",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Trade__FirstList__models__firstList.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Trade/FirstList/models/firstList.js').then(m => { return { namespace: 'firstList',...m.default}}),
  import(/* webpackChunkName: 'p__Trade__models__tranferSub.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Trade/models/tranferSub.jsx').then(m => { return { namespace: 'tranferSub',...m.default}}),
  import(/* webpackChunkName: 'p__Trade__models__transferList.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Trade/models/transferList.js').then(m => { return { namespace: 'transferList',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Trade/FirstList'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "path": "/trade/firstlist/detail",
                "name": "detail",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__bkinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/bkinfo.jsx').then(m => { return { namespace: 'bkinfo',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__changeCustomer.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/changeCustomer.jsx').then(m => { return { namespace: 'changeCustomer',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__contactList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/contactList.jsx').then(m => { return { namespace: 'contactList',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__contactUser.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/contactUser.js').then(m => { return { namespace: 'contactUser',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__fileList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/fileList.jsx').then(m => { return { namespace: 'fileList',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__findReportResult.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/findReportResult.jsx').then(m => { return { namespace: 'findReportResult',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__firstTradeSubmit.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/firstTradeSubmit.js').then(m => { return { namespace: 'firstTradeSubmit',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__orderResultInfo.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/orderResultInfo.js').then(m => { return { namespace: 'orderResultInfo',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__reTradeSubmit.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/reTradeSubmit.js').then(m => { return { namespace: 'reTradeSubmit',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__tradeHistory.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/tradeHistory.jsx').then(m => { return { namespace: 'tradeHistory',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__unfinishTermlist.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/unfinishTermlist.js').then(m => { return { namespace: 'unfinishTermlist',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../../components/EnterOrderDetail'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "path": "/trade/reviewlist",
            "name": "reviewList",
            "hideChildrenInMenu": true,
            "routes": [
              {
                "path": "/trade/reviewlist",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Trade__ReviewList__models__reviewList.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Trade/ReviewList/models/reviewList.js').then(m => { return { namespace: 'reviewList',...m.default}}),
  import(/* webpackChunkName: 'p__Trade__models__tranferSub.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Trade/models/tranferSub.jsx').then(m => { return { namespace: 'tranferSub',...m.default}}),
  import(/* webpackChunkName: 'p__Trade__models__transferList.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Trade/models/transferList.js').then(m => { return { namespace: 'transferList',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Trade/ReviewList'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "path": "/trade/reviewlist/detail",
                "name": "detail",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__bkinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/bkinfo.jsx').then(m => { return { namespace: 'bkinfo',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__changeCustomer.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/changeCustomer.jsx').then(m => { return { namespace: 'changeCustomer',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__contactList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/contactList.jsx').then(m => { return { namespace: 'contactList',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__contactUser.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/contactUser.js').then(m => { return { namespace: 'contactUser',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__fileList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/fileList.jsx').then(m => { return { namespace: 'fileList',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__findReportResult.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/findReportResult.jsx').then(m => { return { namespace: 'findReportResult',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__firstTradeSubmit.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/firstTradeSubmit.js').then(m => { return { namespace: 'firstTradeSubmit',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__orderResultInfo.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/orderResultInfo.js').then(m => { return { namespace: 'orderResultInfo',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__reTradeSubmit.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/reTradeSubmit.js').then(m => { return { namespace: 'reTradeSubmit',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__tradeHistory.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/tradeHistory.jsx').then(m => { return { namespace: 'tradeHistory',...m.default}}),
  import(/* webpackChunkName: 'components__EnterOrderDetail__models__unfinishTermlist.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/EnterOrderDetail/models/unfinishTermlist.js').then(m => { return { namespace: 'unfinishTermlist',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../../components/EnterOrderDetail'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/contract",
        "icon": "audit",
        "name": "contract",
        "hideInMenu": true,
        "routes": [
          {
            "path": "/contract/list",
            "name": "list",
            "hideChildrenInMenu": true,
            "routes": [
              {
                "path": "/contract/list",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Contract__List__models__ContractList.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Contract/List/models/ContractList.js').then(m => { return { namespace: 'ContractList',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Contract/List'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "path": "/contract/list/detail",
                "name": "detail",
                "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../../components/ContractDetail'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/takecar",
        "icon": "car",
        "name": "takecar",
        "routes": [
          {
            "path": "/takecar/list",
            "name": "list",
            "hideChildrenInMenu": true,
            "routes": [
              {
                "path": "/takecar/list",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__TakeCar__List__models__takeCarList.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/TakeCar/List/models/takeCarList.js').then(m => { return { namespace: 'takeCarList',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../TakeCar/List'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "path": "/takecar/list/detail",
                "name": "detail",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'components__PayCarDetail__models__payCarHistory.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PayCarDetail/models/payCarHistory.js').then(m => { return { namespace: 'payCarHistory',...m.default}}),
  import(/* webpackChunkName: 'components__PayCarDetail__models__payCarResult.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PayCarDetail/models/payCarResult.js').then(m => { return { namespace: 'payCarResult',...m.default}}),
  import(/* webpackChunkName: 'components__PayCarDetail__models__payCarSubmit.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PayCarDetail/models/payCarSubmit.js').then(m => { return { namespace: 'payCarSubmit',...m.default}}),
  import(/* webpackChunkName: 'components__PayCarDetail__models__payCarTabInfo.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PayCarDetail/models/payCarTabInfo.js').then(m => { return { namespace: 'payCarTabInfo',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../../components/PayCarDetail'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/store",
        "icon": "gold",
        "name": "store",
        "routes": [
          {
            "path": "/store/products",
            "name": "products",
            "routes": [
              {
                "path": "/store/products/productclass",
                "name": "productClass",
                "hideChildrenInMenu": true,
                "routes": [
                  {
                    "path": "/store/products/productclass",
                    "redirect": "/store/products/productclass/list",
                    "exact": true
                  },
                  {
                    "path": "/store/products/productclass/list",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Storage__Products__ProductClassList__models__productClassList.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/ProductClassList/models/productClassList.js').then(m => { return { namespace: 'productClassList',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__carTypeConfig.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/carTypeConfig.jsx').then(m => { return { namespace: 'carTypeConfig',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__carTypeDetail.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/carTypeDetail.jsx').then(m => { return { namespace: 'carTypeDetail',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__getCarTypeImg.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/getCarTypeImg.jsx').then(m => { return { namespace: 'getCarTypeImg',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__proTypeEnd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/proTypeEnd.js').then(m => { return { namespace: 'proTypeEnd',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Storage/Products/ProductClassList'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/store/products/productclass/detail",
                    "name": "productClassDetail",
                    "hideInMenu": true,
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Storage__Products__ProductClassDetail__models__proClassDetail.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/ProductClassDetail/models/proClassDetail.js').then(m => { return { namespace: 'proClassDetail',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__carTypeConfig.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/carTypeConfig.jsx').then(m => { return { namespace: 'carTypeConfig',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__carTypeDetail.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/carTypeDetail.jsx').then(m => { return { namespace: 'carTypeDetail',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__getCarTypeImg.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/getCarTypeImg.jsx').then(m => { return { namespace: 'getCarTypeImg',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__proTypeEnd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/proTypeEnd.js').then(m => { return { namespace: 'proTypeEnd',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Storage/Products/ProductClassDetail'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
                  }
                ]
              },
              {
                "path": "/store/products/factorybrand",
                "name": "factoryBrand",
                "hideChildrenInMenu": true,
                "routes": [
                  {
                    "path": "/store/products/factorybrand",
                    "redirect": "/store/products/factorybrand/list",
                    "exact": true
                  },
                  {
                    "path": "/store/products/factorybrand/list",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Storage__Products__FactoryBrandList__models__brandEnd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/FactoryBrandList/models/brandEnd.js').then(m => { return { namespace: 'brandEnd',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__FactoryBrandList__models__brandList.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/FactoryBrandList/models/brandList.js').then(m => { return { namespace: 'brandList',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__FactoryBrandList__models__uploadImg.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/FactoryBrandList/models/uploadImg.js').then(m => { return { namespace: 'uploadImg',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__carTypeConfig.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/carTypeConfig.jsx').then(m => { return { namespace: 'carTypeConfig',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__carTypeDetail.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/carTypeDetail.jsx').then(m => { return { namespace: 'carTypeDetail',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__getCarTypeImg.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/getCarTypeImg.jsx').then(m => { return { namespace: 'getCarTypeImg',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__proTypeEnd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/proTypeEnd.js').then(m => { return { namespace: 'proTypeEnd',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Storage/Products/FactoryBrandList'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/store/products/factorybrand/detail",
                    "name": "factoryBrandDetail",
                    "hideInMenu": true,
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Storage__Products__FactoryBrandDetail__models__brandDetail.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/FactoryBrandDetail/models/brandDetail.js').then(m => { return { namespace: 'brandDetail',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__carTypeConfig.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/carTypeConfig.jsx').then(m => { return { namespace: 'carTypeConfig',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__carTypeDetail.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/carTypeDetail.jsx').then(m => { return { namespace: 'carTypeDetail',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__getCarTypeImg.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/getCarTypeImg.jsx').then(m => { return { namespace: 'getCarTypeImg',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__proTypeEnd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/proTypeEnd.js').then(m => { return { namespace: 'proTypeEnd',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Storage/Products/FactoryBrandDetail'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
                  }
                ]
              },
              {
                "path": "/store/products/producttype",
                "name": "productType",
                "hideChildrenInMenu": true,
                "routes": [
                  {
                    "path": "/store/products/producttype",
                    "redirect": "/store/products/producttype/list",
                    "exact": true
                  },
                  {
                    "path": "/store/products/producttype/list",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Storage__Products__ProductTypeList__models__allBrandList.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/ProductTypeList/models/allBrandList.js').then(m => { return { namespace: 'allBrandList',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__ProductTypeList__models__productTypeList.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/ProductTypeList/models/productTypeList.js').then(m => { return { namespace: 'productTypeList',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__carTypeConfig.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/carTypeConfig.jsx').then(m => { return { namespace: 'carTypeConfig',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__carTypeDetail.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/carTypeDetail.jsx').then(m => { return { namespace: 'carTypeDetail',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__getCarTypeImg.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/getCarTypeImg.jsx').then(m => { return { namespace: 'getCarTypeImg',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__proTypeEnd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/proTypeEnd.js').then(m => { return { namespace: 'proTypeEnd',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Storage/Products/ProductTypeList'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/store/products/producttype/detail",
                    "name": "productTypeDetail",
                    "hideInMenu": true,
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Storage__Products__ProductTypeDetail__models__proTypeDetail.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/ProductTypeDetail/models/proTypeDetail.js').then(m => { return { namespace: 'proTypeDetail',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__carTypeConfig.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/carTypeConfig.jsx').then(m => { return { namespace: 'carTypeConfig',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__carTypeDetail.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/carTypeDetail.jsx').then(m => { return { namespace: 'carTypeDetail',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__getCarTypeImg.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/getCarTypeImg.jsx').then(m => { return { namespace: 'getCarTypeImg',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__proTypeEnd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/proTypeEnd.js').then(m => { return { namespace: 'proTypeEnd',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Storage/Products/ProductTypeDetail'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
                  }
                ]
              },
              {
                "path": "/store/products/cartypestore",
                "name": "carTypeStore",
                "hideChildrenInMenu": true,
                "routes": [
                  {
                    "path": "/store/products/cartypestore",
                    "redirect": "/store/products/cartypestore/list",
                    "exact": true
                  },
                  {
                    "path": "/store/products/cartypestore/list",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Storage__Products__CarTypeStoreList__models__carTypeList.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/CarTypeStoreList/models/carTypeList.js').then(m => { return { namespace: 'carTypeList',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__CarTypeStoreList__models__typeDataCar.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/CarTypeStoreList/models/typeDataCar.js').then(m => { return { namespace: 'typeDataCar',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__carTypeConfig.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/carTypeConfig.jsx').then(m => { return { namespace: 'carTypeConfig',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__carTypeDetail.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/carTypeDetail.jsx').then(m => { return { namespace: 'carTypeDetail',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__getCarTypeImg.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/getCarTypeImg.jsx').then(m => { return { namespace: 'getCarTypeImg',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__proTypeEnd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/proTypeEnd.js').then(m => { return { namespace: 'proTypeEnd',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Storage/Products/CarTypeStoreList'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/store/products/cartypestore/detail",
                    "name": "carTypeStoreDetail",
                    "hideInMenu": true,
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Storage__Products__models__carTypeConfig.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/carTypeConfig.jsx').then(m => { return { namespace: 'carTypeConfig',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__carTypeDetail.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/carTypeDetail.jsx').then(m => { return { namespace: 'carTypeDetail',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__getCarTypeImg.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/getCarTypeImg.jsx').then(m => { return { namespace: 'getCarTypeImg',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__proTypeEnd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/proTypeEnd.js').then(m => { return { namespace: 'proTypeEnd',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Storage/Products/CarTypeStoreDetail'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/store/products/cartypestore/add",
                    "name": "carTypeAdd",
                    "hideInMenu": true,
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Storage__Products__CarTypeAdd__models__carTypeAdd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/CarTypeAdd/models/carTypeAdd.js').then(m => { return { namespace: 'carTypeAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__CarTypeAdd__models__carTypeUpdate.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/CarTypeAdd/models/carTypeUpdate.jsx').then(m => { return { namespace: 'carTypeUpdate',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__carTypeConfig.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/carTypeConfig.jsx').then(m => { return { namespace: 'carTypeConfig',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__carTypeDetail.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/carTypeDetail.jsx').then(m => { return { namespace: 'carTypeDetail',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__getCarTypeImg.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/getCarTypeImg.jsx').then(m => { return { namespace: 'getCarTypeImg',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__proTypeEnd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/proTypeEnd.js').then(m => { return { namespace: 'proTypeEnd',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Storage/Products/CarTypeAdd/StepForm'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "routes": [
                      {
                        "path": "/store/products/cartypestore/add",
                        "redirect": "/store/products/cartypestore/add/info",
                        "exact": true
                      },
                      {
                        "path": "/store/products/cartypestore/add/info",
                        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Storage__Products__CarTypeAdd__models__carTypeAdd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/CarTypeAdd/models/carTypeAdd.js').then(m => { return { namespace: 'carTypeAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__CarTypeAdd__models__carTypeUpdate.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/CarTypeAdd/models/carTypeUpdate.jsx').then(m => { return { namespace: 'carTypeUpdate',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__carTypeConfig.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/carTypeConfig.jsx').then(m => { return { namespace: 'carTypeConfig',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__carTypeDetail.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/carTypeDetail.jsx').then(m => { return { namespace: 'carTypeDetail',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__getCarTypeImg.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/getCarTypeImg.jsx').then(m => { return { namespace: 'getCarTypeImg',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__proTypeEnd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/proTypeEnd.js').then(m => { return { namespace: 'proTypeEnd',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Storage/Products/CarTypeAdd/StepForm/Step1.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                        "exact": true
                      },
                      {
                        "path": "/store/products/cartypestore/add/confirm",
                        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Storage__Products__CarTypeAdd__models__carTypeAdd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/CarTypeAdd/models/carTypeAdd.js').then(m => { return { namespace: 'carTypeAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__CarTypeAdd__models__carTypeUpdate.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/CarTypeAdd/models/carTypeUpdate.jsx').then(m => { return { namespace: 'carTypeUpdate',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__carTypeConfig.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/carTypeConfig.jsx').then(m => { return { namespace: 'carTypeConfig',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__carTypeDetail.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/carTypeDetail.jsx').then(m => { return { namespace: 'carTypeDetail',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__getCarTypeImg.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/getCarTypeImg.jsx').then(m => { return { namespace: 'getCarTypeImg',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__proTypeEnd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/proTypeEnd.js').then(m => { return { namespace: 'proTypeEnd',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Storage/Products/CarTypeAdd/StepForm/Step2.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                        "exact": true
                      },
                      {
                        "path": "/store/products/cartypestore/add/img",
                        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Storage__Products__CarTypeAdd__models__carTypeAdd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/CarTypeAdd/models/carTypeAdd.js').then(m => { return { namespace: 'carTypeAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__CarTypeAdd__models__carTypeUpdate.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/CarTypeAdd/models/carTypeUpdate.jsx').then(m => { return { namespace: 'carTypeUpdate',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__carTypeConfig.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/carTypeConfig.jsx').then(m => { return { namespace: 'carTypeConfig',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__carTypeDetail.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/carTypeDetail.jsx').then(m => { return { namespace: 'carTypeDetail',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__getCarTypeImg.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/getCarTypeImg.jsx').then(m => { return { namespace: 'getCarTypeImg',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__proTypeEnd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/proTypeEnd.js').then(m => { return { namespace: 'proTypeEnd',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Storage/Products/CarTypeAdd/StepForm/Step3.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                        "exact": true
                      },
                      {
                        "path": "/store/products/cartypestore/add/cofigdetail",
                        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Storage__Products__CarTypeAdd__models__carTypeAdd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/CarTypeAdd/models/carTypeAdd.js').then(m => { return { namespace: 'carTypeAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__CarTypeAdd__models__carTypeUpdate.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/CarTypeAdd/models/carTypeUpdate.jsx').then(m => { return { namespace: 'carTypeUpdate',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__carTypeConfig.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/carTypeConfig.jsx').then(m => { return { namespace: 'carTypeConfig',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__carTypeDetail.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/carTypeDetail.jsx').then(m => { return { namespace: 'carTypeDetail',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__getCarTypeImg.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/getCarTypeImg.jsx').then(m => { return { namespace: 'getCarTypeImg',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__proTypeEnd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/proTypeEnd.js').then(m => { return { namespace: 'proTypeEnd',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Storage/Products/CarTypeAdd/StepForm/Step4.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                        "exact": true
                      },
                      {
                        "path": "/store/products/cartypestore/add/result",
                        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Storage__Products__CarTypeAdd__models__carTypeAdd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/CarTypeAdd/models/carTypeAdd.js').then(m => { return { namespace: 'carTypeAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__CarTypeAdd__models__carTypeUpdate.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/CarTypeAdd/models/carTypeUpdate.jsx').then(m => { return { namespace: 'carTypeUpdate',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__carTypeConfig.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/carTypeConfig.jsx').then(m => { return { namespace: 'carTypeConfig',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__carTypeDetail.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/carTypeDetail.jsx').then(m => { return { namespace: 'carTypeDetail',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__getCarTypeImg.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/getCarTypeImg.jsx').then(m => { return { namespace: 'getCarTypeImg',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__proTypeEnd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/proTypeEnd.js').then(m => { return { namespace: 'proTypeEnd',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Storage/Products/CarTypeAdd/StepForm/Step5.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                        "exact": true
                      },
                      {
                        "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
                      }
                    ]
                  },
                  {
                    "path": "/store/products/cartypestore/edit",
                    "name": "carTypeEdit",
                    "hideInMenu": true,
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Storage__Products__CarTypeAdd__models__carTypeAdd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/CarTypeAdd/models/carTypeAdd.js').then(m => { return { namespace: 'carTypeAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__CarTypeAdd__models__carTypeUpdate.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/CarTypeAdd/models/carTypeUpdate.jsx').then(m => { return { namespace: 'carTypeUpdate',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__carTypeConfig.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/carTypeConfig.jsx').then(m => { return { namespace: 'carTypeConfig',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__carTypeDetail.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/carTypeDetail.jsx').then(m => { return { namespace: 'carTypeDetail',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__getCarTypeImg.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/getCarTypeImg.jsx').then(m => { return { namespace: 'getCarTypeImg',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__proTypeEnd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/proTypeEnd.js').then(m => { return { namespace: 'proTypeEnd',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Storage/Products/CarTypeAdd/StepForm'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "routes": [
                      {
                        "path": "/store/products/cartypestore/edit",
                        "redirect": "/store/products/cartypestore/edit/info",
                        "exact": true
                      },
                      {
                        "path": "/store/products/cartypestore/edit/info",
                        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Storage__Products__CarTypeAdd__models__carTypeAdd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/CarTypeAdd/models/carTypeAdd.js').then(m => { return { namespace: 'carTypeAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__CarTypeAdd__models__carTypeUpdate.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/CarTypeAdd/models/carTypeUpdate.jsx').then(m => { return { namespace: 'carTypeUpdate',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__carTypeConfig.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/carTypeConfig.jsx').then(m => { return { namespace: 'carTypeConfig',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__carTypeDetail.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/carTypeDetail.jsx').then(m => { return { namespace: 'carTypeDetail',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__getCarTypeImg.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/getCarTypeImg.jsx').then(m => { return { namespace: 'getCarTypeImg',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__proTypeEnd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/proTypeEnd.js').then(m => { return { namespace: 'proTypeEnd',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Storage/Products/CarTypeAdd/StepForm/Step1.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                        "exact": true
                      },
                      {
                        "path": "/store/products/cartypestore/edit/confirm",
                        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Storage__Products__CarTypeAdd__models__carTypeAdd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/CarTypeAdd/models/carTypeAdd.js').then(m => { return { namespace: 'carTypeAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__CarTypeAdd__models__carTypeUpdate.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/CarTypeAdd/models/carTypeUpdate.jsx').then(m => { return { namespace: 'carTypeUpdate',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__carTypeConfig.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/carTypeConfig.jsx').then(m => { return { namespace: 'carTypeConfig',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__carTypeDetail.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/carTypeDetail.jsx').then(m => { return { namespace: 'carTypeDetail',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__getCarTypeImg.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/getCarTypeImg.jsx').then(m => { return { namespace: 'getCarTypeImg',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__proTypeEnd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/proTypeEnd.js').then(m => { return { namespace: 'proTypeEnd',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Storage/Products/CarTypeAdd/StepForm/Step2.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                        "exact": true
                      },
                      {
                        "path": "/store/products/cartypestore/edit/img",
                        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Storage__Products__CarTypeAdd__models__carTypeAdd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/CarTypeAdd/models/carTypeAdd.js').then(m => { return { namespace: 'carTypeAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__CarTypeAdd__models__carTypeUpdate.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/CarTypeAdd/models/carTypeUpdate.jsx').then(m => { return { namespace: 'carTypeUpdate',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__carTypeConfig.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/carTypeConfig.jsx').then(m => { return { namespace: 'carTypeConfig',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__carTypeDetail.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/carTypeDetail.jsx').then(m => { return { namespace: 'carTypeDetail',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__getCarTypeImg.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/getCarTypeImg.jsx').then(m => { return { namespace: 'getCarTypeImg',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__proTypeEnd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/proTypeEnd.js').then(m => { return { namespace: 'proTypeEnd',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Storage/Products/CarTypeAdd/StepForm/Step3.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                        "exact": true
                      },
                      {
                        "path": "/store/products/cartypestore/edit/cofigdetail",
                        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Storage__Products__CarTypeAdd__models__carTypeAdd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/CarTypeAdd/models/carTypeAdd.js').then(m => { return { namespace: 'carTypeAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__CarTypeAdd__models__carTypeUpdate.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/CarTypeAdd/models/carTypeUpdate.jsx').then(m => { return { namespace: 'carTypeUpdate',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__carTypeConfig.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/carTypeConfig.jsx').then(m => { return { namespace: 'carTypeConfig',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__carTypeDetail.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/carTypeDetail.jsx').then(m => { return { namespace: 'carTypeDetail',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__getCarTypeImg.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/getCarTypeImg.jsx').then(m => { return { namespace: 'getCarTypeImg',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__proTypeEnd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/proTypeEnd.js').then(m => { return { namespace: 'proTypeEnd',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Storage/Products/CarTypeAdd/StepForm/Step4.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                        "exact": true
                      },
                      {
                        "path": "/store/products/cartypestore/edit/result",
                        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Storage__Products__CarTypeAdd__models__carTypeAdd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/CarTypeAdd/models/carTypeAdd.js').then(m => { return { namespace: 'carTypeAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__CarTypeAdd__models__carTypeUpdate.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/CarTypeAdd/models/carTypeUpdate.jsx').then(m => { return { namespace: 'carTypeUpdate',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__carTypeConfig.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/carTypeConfig.jsx').then(m => { return { namespace: 'carTypeConfig',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__carTypeDetail.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/carTypeDetail.jsx').then(m => { return { namespace: 'carTypeDetail',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__getCarTypeImg.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/getCarTypeImg.jsx').then(m => { return { namespace: 'getCarTypeImg',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Products__models__proTypeEnd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Products/models/proTypeEnd.js').then(m => { return { namespace: 'proTypeEnd',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Storage/Products/CarTypeAdd/StepForm/Step5.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                        "exact": true
                      },
                      {
                        "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
                      }
                    ]
                  },
                  {
                    "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
                  }
                ]
              },
              {
                "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "path": "/store/stock",
            "name": "stock",
            "routes": [
              {
                "path": "/store/stock/storehouse",
                "name": "storeHouse",
                "hideChildrenInMenu": true,
                "routes": [
                  {
                    "path": "/store/stock/storehouse",
                    "redirect": "/store/stock/storehouse/list",
                    "exact": true
                  },
                  {
                    "path": "/store/stock/storehouse/list",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Storage__Stock__StoreHouse__models__storeHouse.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Stock/StoreHouse/models/storeHouse.js').then(m => { return { namespace: 'storeHouse',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Storage/Stock/StoreHouse'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/store/stock/storehouse/detail",
                    "name": "storeHouseDetail",
                    "hideInMenu": true,
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Storage__Stock__StoreHouseDetail__models__storeHouseDetail.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Stock/StoreHouseDetail/models/storeHouseDetail.js').then(m => { return { namespace: 'storeHouseDetail',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Storage/Stock/StoreHouseDetail'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/store/stock/storehouse/add",
                    "name": "storeHouseAdd",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Storage__Stock__StoreHouseAdd__models__detailData.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Stock/StoreHouseAdd/models/detailData.js').then(m => { return { namespace: 'detailData',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Stock__StoreHouseAdd__models__storeHouseAdd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Stock/StoreHouseAdd/models/storeHouseAdd.js').then(m => { return { namespace: 'storeHouseAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Stock__StoreHouseAdd__models__storeHouseParent.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Stock/StoreHouseAdd/models/storeHouseParent.jsx').then(m => { return { namespace: 'storeHouseParent',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Stock__StoreHouseAdd__models__storeHouseUpdate.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Stock/StoreHouseAdd/models/storeHouseUpdate.js').then(m => { return { namespace: 'storeHouseUpdate',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Storage/Stock/StoreHouseAdd'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/store/stock/storehouse/edit",
                    "name": "storeHouseEdit",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Storage__Stock__StoreHouseAdd__models__detailData.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Stock/StoreHouseAdd/models/detailData.js').then(m => { return { namespace: 'detailData',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Stock__StoreHouseAdd__models__storeHouseAdd.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Stock/StoreHouseAdd/models/storeHouseAdd.js').then(m => { return { namespace: 'storeHouseAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Stock__StoreHouseAdd__models__storeHouseParent.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Stock/StoreHouseAdd/models/storeHouseParent.jsx').then(m => { return { namespace: 'storeHouseParent',...m.default}}),
  import(/* webpackChunkName: 'p__Storage__Stock__StoreHouseAdd__models__storeHouseUpdate.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Stock/StoreHouseAdd/models/storeHouseUpdate.js').then(m => { return { namespace: 'storeHouseUpdate',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Storage/Stock/StoreHouseAdd'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
                  }
                ]
              },
              {
                "path": "/store/stock/stockinfo",
                "name": "stockInfo",
                "hideChildrenInMenu": true,
                "routes": [
                  {
                    "path": "/store/stock/stockinfo",
                    "redirect": "/store/stock/stockinfo/list",
                    "exact": true
                  },
                  {
                    "path": "/store/stock/stockinfo/list",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Storage__Stock__StockInfoList__models__listData.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Stock/StockInfoList/models/listData.js').then(m => { return { namespace: 'listData',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Storage/Stock/StockInfoList'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/store/stock/stockinfo/detail",
                    "name": "stockInfoDetail",
                    "hideInMenu": true,
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Storage__Stock__StockInfoDetail__models__detailData.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Storage/Stock/StockInfoDetail/models/detailData.js').then(m => { return { namespace: 'detailData',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Storage/Stock/StockInfoDetail'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
                  }
                ]
              },
              {
                "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/channel",
        "icon": "cluster",
        "name": "channel",
        "routes": [
          {
            "path": "/channel/company/list",
            "name": "companyList",
            "hideChildrenInMenu": true,
            "routes": [
              {
                "path": "/channel/company/list",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Channel__CompanyList__models__companyList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyList/models/companyList.jsx').then(m => { return { namespace: 'companyList',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyList__models__parentAreaList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyList/models/parentAreaList.jsx').then(m => { return { namespace: 'parentAreaList',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Channel/CompanyList'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "path": "/channel/company/list/detail",
                "name": "companyDetail",
                "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Channel/CompanyDetail'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "path": "/channel/company/list/add",
                "name": "companyAdd",
                "hideInMenu": true,
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__addMainBusiness.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/addMainBusiness.jsx').then(m => { return { namespace: 'addMainBusiness',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__addShareholder.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/addShareholder.jsx').then(m => { return { namespace: 'addShareholder',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__companyAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/companyAdd.jsx').then(m => { return { namespace: 'companyAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__companyQueryStep1.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/companyQueryStep1.jsx').then(m => { return { namespace: 'companyQueryStep1',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__companyUpdate.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/companyUpdate.jsx').then(m => { return { namespace: 'companyUpdate',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__companyUpdate2.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/companyUpdate2.jsx').then(m => { return { namespace: 'companyUpdate2',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__delMainBusiness.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/delMainBusiness.jsx').then(m => { return { namespace: 'delMainBusiness',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__delShareholder.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/delShareholder.jsx').then(m => { return { namespace: 'delShareholder',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__goupMainBusiness.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/goupMainBusiness.jsx').then(m => { return { namespace: 'goupMainBusiness',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__groupShareholder.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/groupShareholder.jsx').then(m => { return { namespace: 'groupShareholder',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Channel/CompanyAdd/StepForm'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                "routes": [
                  {
                    "path": "/channel/company/list/add",
                    "redirect": "/channel/company/list/add/info",
                    "exact": true
                  },
                  {
                    "path": "/channel/company/list/add/info",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__addMainBusiness.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/addMainBusiness.jsx').then(m => { return { namespace: 'addMainBusiness',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__addShareholder.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/addShareholder.jsx').then(m => { return { namespace: 'addShareholder',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__companyAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/companyAdd.jsx').then(m => { return { namespace: 'companyAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__companyQueryStep1.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/companyQueryStep1.jsx').then(m => { return { namespace: 'companyQueryStep1',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__companyUpdate.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/companyUpdate.jsx').then(m => { return { namespace: 'companyUpdate',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__companyUpdate2.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/companyUpdate2.jsx').then(m => { return { namespace: 'companyUpdate2',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__delMainBusiness.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/delMainBusiness.jsx').then(m => { return { namespace: 'delMainBusiness',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__delShareholder.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/delShareholder.jsx').then(m => { return { namespace: 'delShareholder',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__goupMainBusiness.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/goupMainBusiness.jsx').then(m => { return { namespace: 'goupMainBusiness',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__groupShareholder.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/groupShareholder.jsx').then(m => { return { namespace: 'groupShareholder',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Channel/CompanyAdd/StepForm/Step1.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/channel/company/list/add/confirm",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__addMainBusiness.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/addMainBusiness.jsx').then(m => { return { namespace: 'addMainBusiness',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__addShareholder.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/addShareholder.jsx').then(m => { return { namespace: 'addShareholder',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__companyAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/companyAdd.jsx').then(m => { return { namespace: 'companyAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__companyQueryStep1.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/companyQueryStep1.jsx').then(m => { return { namespace: 'companyQueryStep1',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__companyUpdate.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/companyUpdate.jsx').then(m => { return { namespace: 'companyUpdate',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__companyUpdate2.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/companyUpdate2.jsx').then(m => { return { namespace: 'companyUpdate2',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__delMainBusiness.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/delMainBusiness.jsx').then(m => { return { namespace: 'delMainBusiness',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__delShareholder.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/delShareholder.jsx').then(m => { return { namespace: 'delShareholder',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__goupMainBusiness.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/goupMainBusiness.jsx').then(m => { return { namespace: 'goupMainBusiness',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__groupShareholder.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/groupShareholder.jsx').then(m => { return { namespace: 'groupShareholder',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Channel/CompanyAdd/StepForm/Step2.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/channel/company/list/add/result",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__addMainBusiness.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/addMainBusiness.jsx').then(m => { return { namespace: 'addMainBusiness',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__addShareholder.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/addShareholder.jsx').then(m => { return { namespace: 'addShareholder',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__companyAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/companyAdd.jsx').then(m => { return { namespace: 'companyAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__companyQueryStep1.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/companyQueryStep1.jsx').then(m => { return { namespace: 'companyQueryStep1',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__companyUpdate.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/companyUpdate.jsx').then(m => { return { namespace: 'companyUpdate',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__companyUpdate2.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/companyUpdate2.jsx').then(m => { return { namespace: 'companyUpdate2',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__delMainBusiness.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/delMainBusiness.jsx').then(m => { return { namespace: 'delMainBusiness',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__delShareholder.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/delShareholder.jsx').then(m => { return { namespace: 'delShareholder',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__goupMainBusiness.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/goupMainBusiness.jsx').then(m => { return { namespace: 'goupMainBusiness',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__groupShareholder.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/groupShareholder.jsx').then(m => { return { namespace: 'groupShareholder',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Channel/CompanyAdd/StepForm/Step3.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
                  }
                ]
              },
              {
                "path": "/channel/company/list/edit",
                "name": "companyEdit",
                "hideInMenu": true,
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__addMainBusiness.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/addMainBusiness.jsx').then(m => { return { namespace: 'addMainBusiness',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__addShareholder.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/addShareholder.jsx').then(m => { return { namespace: 'addShareholder',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__companyAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/companyAdd.jsx').then(m => { return { namespace: 'companyAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__companyQueryStep1.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/companyQueryStep1.jsx').then(m => { return { namespace: 'companyQueryStep1',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__companyUpdate.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/companyUpdate.jsx').then(m => { return { namespace: 'companyUpdate',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__companyUpdate2.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/companyUpdate2.jsx').then(m => { return { namespace: 'companyUpdate2',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__delMainBusiness.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/delMainBusiness.jsx').then(m => { return { namespace: 'delMainBusiness',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__delShareholder.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/delShareholder.jsx').then(m => { return { namespace: 'delShareholder',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__goupMainBusiness.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/goupMainBusiness.jsx').then(m => { return { namespace: 'goupMainBusiness',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__groupShareholder.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/groupShareholder.jsx').then(m => { return { namespace: 'groupShareholder',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Channel/CompanyAdd/StepForm'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                "routes": [
                  {
                    "path": "/channel/company/list/edit",
                    "redirect": "/channel/company/list/edit/info",
                    "exact": true
                  },
                  {
                    "path": "/channel/company/list/edit/info",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__addMainBusiness.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/addMainBusiness.jsx').then(m => { return { namespace: 'addMainBusiness',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__addShareholder.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/addShareholder.jsx').then(m => { return { namespace: 'addShareholder',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__companyAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/companyAdd.jsx').then(m => { return { namespace: 'companyAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__companyQueryStep1.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/companyQueryStep1.jsx').then(m => { return { namespace: 'companyQueryStep1',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__companyUpdate.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/companyUpdate.jsx').then(m => { return { namespace: 'companyUpdate',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__companyUpdate2.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/companyUpdate2.jsx').then(m => { return { namespace: 'companyUpdate2',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__delMainBusiness.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/delMainBusiness.jsx').then(m => { return { namespace: 'delMainBusiness',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__delShareholder.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/delShareholder.jsx').then(m => { return { namespace: 'delShareholder',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__goupMainBusiness.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/goupMainBusiness.jsx').then(m => { return { namespace: 'goupMainBusiness',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__groupShareholder.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/groupShareholder.jsx').then(m => { return { namespace: 'groupShareholder',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Channel/CompanyAdd/StepForm/Step1.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/channel/company/list/edit/confirm",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__addMainBusiness.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/addMainBusiness.jsx').then(m => { return { namespace: 'addMainBusiness',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__addShareholder.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/addShareholder.jsx').then(m => { return { namespace: 'addShareholder',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__companyAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/companyAdd.jsx').then(m => { return { namespace: 'companyAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__companyQueryStep1.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/companyQueryStep1.jsx').then(m => { return { namespace: 'companyQueryStep1',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__companyUpdate.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/companyUpdate.jsx').then(m => { return { namespace: 'companyUpdate',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__companyUpdate2.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/companyUpdate2.jsx').then(m => { return { namespace: 'companyUpdate2',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__delMainBusiness.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/delMainBusiness.jsx').then(m => { return { namespace: 'delMainBusiness',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__delShareholder.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/delShareholder.jsx').then(m => { return { namespace: 'delShareholder',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__goupMainBusiness.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/goupMainBusiness.jsx').then(m => { return { namespace: 'goupMainBusiness',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__groupShareholder.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/groupShareholder.jsx').then(m => { return { namespace: 'groupShareholder',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Channel/CompanyAdd/StepForm/Step2.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/channel/company/list/edit/result",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__addMainBusiness.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/addMainBusiness.jsx').then(m => { return { namespace: 'addMainBusiness',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__addShareholder.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/addShareholder.jsx').then(m => { return { namespace: 'addShareholder',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__companyAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/companyAdd.jsx').then(m => { return { namespace: 'companyAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__companyQueryStep1.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/companyQueryStep1.jsx').then(m => { return { namespace: 'companyQueryStep1',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__companyUpdate.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/companyUpdate.jsx').then(m => { return { namespace: 'companyUpdate',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__companyUpdate2.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/companyUpdate2.jsx').then(m => { return { namespace: 'companyUpdate2',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__delMainBusiness.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/delMainBusiness.jsx').then(m => { return { namespace: 'delMainBusiness',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__delShareholder.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/delShareholder.jsx').then(m => { return { namespace: 'delShareholder',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__goupMainBusiness.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/goupMainBusiness.jsx').then(m => { return { namespace: 'goupMainBusiness',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__groupShareholder.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/groupShareholder.jsx').then(m => { return { namespace: 'groupShareholder',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Channel/CompanyAdd/StepForm/Step3.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
                  }
                ]
              },
              {
                "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "path": "/channel/area/list",
            "name": "areaList",
            "hideChildrenInMenu": true,
            "routes": [
              {
                "path": "/channel/area/list",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Channel__AreaList__models__areaList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/AreaList/models/areaList.jsx').then(m => { return { namespace: 'areaList',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Channel/AreaList'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "path": "/channel/area/list/areaadd",
                "name": "areaAdd",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Channel__AreaAdd__models__areaAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/AreaAdd/models/areaAdd.jsx').then(m => { return { namespace: 'areaAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__AreaAdd__models__areaDetail.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/AreaAdd/models/areaDetail.jsx').then(m => { return { namespace: 'areaDetail',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__AreaAdd__models__areaUpdate.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/AreaAdd/models/areaUpdate.jsx').then(m => { return { namespace: 'areaUpdate',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__AreaAdd__models__parentAreaList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/AreaAdd/models/parentAreaList.jsx').then(m => { return { namespace: 'parentAreaList',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Channel/AreaAdd'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "path": "/channel/area/list/areaedit",
                "name": "areaEdit",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Channel__AreaAdd__models__areaAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/AreaAdd/models/areaAdd.jsx').then(m => { return { namespace: 'areaAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__AreaAdd__models__areaDetail.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/AreaAdd/models/areaDetail.jsx').then(m => { return { namespace: 'areaDetail',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__AreaAdd__models__areaUpdate.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/AreaAdd/models/areaUpdate.jsx').then(m => { return { namespace: 'areaUpdate',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__AreaAdd__models__parentAreaList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/AreaAdd/models/parentAreaList.jsx').then(m => { return { namespace: 'parentAreaList',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Channel/AreaAdd'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "path": "/channel/channel/list",
            "name": "channelList",
            "hideChildrenInMenu": true,
            "routes": [
              {
                "path": "/channel/channel/list",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Channel__ChannelList__models__channelList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelList/models/channelList.jsx').then(m => { return { namespace: 'channelList',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelList__models__findCompany.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelList/models/findCompany.jsx').then(m => { return { namespace: 'findCompany',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelList__models__goodProductList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelList/models/goodProductList.jsx').then(m => { return { namespace: 'goodProductList',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelList__models__modalManage.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelList/models/modalManage.jsx').then(m => { return { namespace: 'modalManage',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelList__models__positionDate.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelList/models/positionDate.jsx').then(m => { return { namespace: 'positionDate',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelList__models__positionList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelList/models/positionList.jsx').then(m => { return { namespace: 'positionList',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelList__models__produceList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelList/models/produceList.jsx').then(m => { return { namespace: 'produceList',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelList__models__queryProduceList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelList/models/queryProduceList.jsx').then(m => { return { namespace: 'queryProduceList',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelList__models__settingPosition.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelList/models/settingPosition.jsx').then(m => { return { namespace: 'settingPosition',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Channel/ChannelList'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "path": "/channel/channel/list/detail",
                "name": "detail",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Channel__ChannelDetail__models__channelImportInfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelDetail/models/channelImportInfo.jsx').then(m => { return { namespace: 'channelImportInfo',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelDetail__models__channelProduct.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelDetail/models/channelProduct.jsx').then(m => { return { namespace: 'channelProduct',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelDetail__models__keyPositionInfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelDetail/models/keyPositionInfo.jsx').then(m => { return { namespace: 'keyPositionInfo',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelDetail__models__manageInfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelDetail/models/manageInfo.jsx').then(m => { return { namespace: 'manageInfo',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelDetail__models__searchFile.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelDetail/models/searchFile.jsx').then(m => { return { namespace: 'searchFile',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelDetail__models__settingProjectView.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelDetail/models/settingProjectView.jsx').then(m => { return { namespace: 'settingProjectView',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelDetail__models__uploadDetail.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelDetail/models/uploadDetail.jsx').then(m => { return { namespace: 'uploadDetail',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Channel/ChannelDetail'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "path": "/channel/channel/list/add",
                "name": "channelAdd",
                "hideInMenu": true,
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelAdd.jsx').then(m => { return { namespace: 'channelAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelGroupList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelGroupList.jsx').then(m => { return { namespace: 'channelGroupList',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelQueryStep1.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelQueryStep1.jsx').then(m => { return { namespace: 'channelQueryStep1',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelQueryStep2.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelQueryStep2.jsx').then(m => { return { namespace: 'channelQueryStep2',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelUpdate.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelUpdate.jsx').then(m => { return { namespace: 'channelUpdate',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelUpdatetwo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelUpdatetwo.jsx').then(m => { return { namespace: 'channelUpdatetwo',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__parentAreaList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/parentAreaList.jsx').then(m => { return { namespace: 'parentAreaList',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__searchFile.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/searchFile.jsx').then(m => { return { namespace: 'searchFile',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__shopImgUpload.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/shopImgUpload.jsx').then(m => { return { namespace: 'shopImgUpload',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Channel/ChannelAdd/StepForm'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                "routes": [
                  {
                    "path": "/channel/channel/list/add",
                    "redirect": "/channel/channel/list/add/info",
                    "exact": true
                  },
                  {
                    "path": "/channel/channel/list/add/info",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelAdd.jsx').then(m => { return { namespace: 'channelAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelGroupList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelGroupList.jsx').then(m => { return { namespace: 'channelGroupList',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelQueryStep1.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelQueryStep1.jsx').then(m => { return { namespace: 'channelQueryStep1',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelQueryStep2.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelQueryStep2.jsx').then(m => { return { namespace: 'channelQueryStep2',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelUpdate.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelUpdate.jsx').then(m => { return { namespace: 'channelUpdate',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelUpdatetwo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelUpdatetwo.jsx').then(m => { return { namespace: 'channelUpdatetwo',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__parentAreaList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/parentAreaList.jsx').then(m => { return { namespace: 'parentAreaList',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__searchFile.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/searchFile.jsx').then(m => { return { namespace: 'searchFile',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__shopImgUpload.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/shopImgUpload.jsx').then(m => { return { namespace: 'shopImgUpload',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Channel/ChannelAdd/StepForm/Step1.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/channel/channel/list/add/confirm",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelAdd.jsx').then(m => { return { namespace: 'channelAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelGroupList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelGroupList.jsx').then(m => { return { namespace: 'channelGroupList',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelQueryStep1.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelQueryStep1.jsx').then(m => { return { namespace: 'channelQueryStep1',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelQueryStep2.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelQueryStep2.jsx').then(m => { return { namespace: 'channelQueryStep2',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelUpdate.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelUpdate.jsx').then(m => { return { namespace: 'channelUpdate',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelUpdatetwo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelUpdatetwo.jsx').then(m => { return { namespace: 'channelUpdatetwo',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__parentAreaList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/parentAreaList.jsx').then(m => { return { namespace: 'parentAreaList',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__searchFile.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/searchFile.jsx').then(m => { return { namespace: 'searchFile',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__shopImgUpload.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/shopImgUpload.jsx').then(m => { return { namespace: 'shopImgUpload',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Channel/ChannelAdd/StepForm/Step2.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/channel/channel/list/add/upload",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelAdd.jsx').then(m => { return { namespace: 'channelAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelGroupList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelGroupList.jsx').then(m => { return { namespace: 'channelGroupList',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelQueryStep1.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelQueryStep1.jsx').then(m => { return { namespace: 'channelQueryStep1',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelQueryStep2.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelQueryStep2.jsx').then(m => { return { namespace: 'channelQueryStep2',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelUpdate.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelUpdate.jsx').then(m => { return { namespace: 'channelUpdate',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelUpdatetwo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelUpdatetwo.jsx').then(m => { return { namespace: 'channelUpdatetwo',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__parentAreaList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/parentAreaList.jsx').then(m => { return { namespace: 'parentAreaList',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__searchFile.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/searchFile.jsx').then(m => { return { namespace: 'searchFile',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__shopImgUpload.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/shopImgUpload.jsx').then(m => { return { namespace: 'shopImgUpload',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Channel/ChannelAdd/StepForm/Step3.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/channel/channel/list/add/result",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelAdd.jsx').then(m => { return { namespace: 'channelAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelGroupList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelGroupList.jsx').then(m => { return { namespace: 'channelGroupList',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelQueryStep1.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelQueryStep1.jsx').then(m => { return { namespace: 'channelQueryStep1',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelQueryStep2.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelQueryStep2.jsx').then(m => { return { namespace: 'channelQueryStep2',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelUpdate.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelUpdate.jsx').then(m => { return { namespace: 'channelUpdate',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelUpdatetwo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelUpdatetwo.jsx').then(m => { return { namespace: 'channelUpdatetwo',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__parentAreaList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/parentAreaList.jsx').then(m => { return { namespace: 'parentAreaList',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__searchFile.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/searchFile.jsx').then(m => { return { namespace: 'searchFile',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__shopImgUpload.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/shopImgUpload.jsx').then(m => { return { namespace: 'shopImgUpload',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Channel/ChannelAdd/StepForm/Step4.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
                  }
                ]
              },
              {
                "path": "/channel/channel/list/edit",
                "name": "channelEdit",
                "hideInMenu": true,
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelAdd.jsx').then(m => { return { namespace: 'channelAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelGroupList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelGroupList.jsx').then(m => { return { namespace: 'channelGroupList',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelQueryStep1.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelQueryStep1.jsx').then(m => { return { namespace: 'channelQueryStep1',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelQueryStep2.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelQueryStep2.jsx').then(m => { return { namespace: 'channelQueryStep2',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelUpdate.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelUpdate.jsx').then(m => { return { namespace: 'channelUpdate',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelUpdatetwo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelUpdatetwo.jsx').then(m => { return { namespace: 'channelUpdatetwo',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__parentAreaList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/parentAreaList.jsx').then(m => { return { namespace: 'parentAreaList',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__searchFile.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/searchFile.jsx').then(m => { return { namespace: 'searchFile',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__shopImgUpload.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/shopImgUpload.jsx').then(m => { return { namespace: 'shopImgUpload',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Channel/ChannelAdd/StepForm'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                "routes": [
                  {
                    "path": "/channel/channel/list/edit",
                    "redirect": "/channel/channel/list/edit/info",
                    "exact": true
                  },
                  {
                    "path": "/channel/channel/list/edit/info",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelAdd.jsx').then(m => { return { namespace: 'channelAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelGroupList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelGroupList.jsx').then(m => { return { namespace: 'channelGroupList',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelQueryStep1.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelQueryStep1.jsx').then(m => { return { namespace: 'channelQueryStep1',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelQueryStep2.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelQueryStep2.jsx').then(m => { return { namespace: 'channelQueryStep2',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelUpdate.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelUpdate.jsx').then(m => { return { namespace: 'channelUpdate',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelUpdatetwo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelUpdatetwo.jsx').then(m => { return { namespace: 'channelUpdatetwo',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__parentAreaList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/parentAreaList.jsx').then(m => { return { namespace: 'parentAreaList',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__searchFile.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/searchFile.jsx').then(m => { return { namespace: 'searchFile',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__shopImgUpload.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/shopImgUpload.jsx').then(m => { return { namespace: 'shopImgUpload',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Channel/ChannelAdd/StepForm/Step1.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/channel/channel/list/edit/confirm",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelAdd.jsx').then(m => { return { namespace: 'channelAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelGroupList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelGroupList.jsx').then(m => { return { namespace: 'channelGroupList',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelQueryStep1.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelQueryStep1.jsx').then(m => { return { namespace: 'channelQueryStep1',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelQueryStep2.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelQueryStep2.jsx').then(m => { return { namespace: 'channelQueryStep2',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelUpdate.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelUpdate.jsx').then(m => { return { namespace: 'channelUpdate',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelUpdatetwo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelUpdatetwo.jsx').then(m => { return { namespace: 'channelUpdatetwo',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__parentAreaList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/parentAreaList.jsx').then(m => { return { namespace: 'parentAreaList',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__searchFile.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/searchFile.jsx').then(m => { return { namespace: 'searchFile',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__shopImgUpload.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/shopImgUpload.jsx').then(m => { return { namespace: 'shopImgUpload',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Channel/ChannelAdd/StepForm/Step2.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/channel/channel/list/edit/upload",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelAdd.jsx').then(m => { return { namespace: 'channelAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelGroupList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelGroupList.jsx').then(m => { return { namespace: 'channelGroupList',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelQueryStep1.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelQueryStep1.jsx').then(m => { return { namespace: 'channelQueryStep1',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelQueryStep2.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelQueryStep2.jsx').then(m => { return { namespace: 'channelQueryStep2',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelUpdate.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelUpdate.jsx').then(m => { return { namespace: 'channelUpdate',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelUpdatetwo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelUpdatetwo.jsx').then(m => { return { namespace: 'channelUpdatetwo',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__parentAreaList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/parentAreaList.jsx').then(m => { return { namespace: 'parentAreaList',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__searchFile.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/searchFile.jsx').then(m => { return { namespace: 'searchFile',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__shopImgUpload.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/shopImgUpload.jsx').then(m => { return { namespace: 'shopImgUpload',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Channel/ChannelAdd/StepForm/Step3.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/channel/channel/list/edit/result",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelAdd.jsx').then(m => { return { namespace: 'channelAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelGroupList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelGroupList.jsx').then(m => { return { namespace: 'channelGroupList',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelQueryStep1.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelQueryStep1.jsx').then(m => { return { namespace: 'channelQueryStep1',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelQueryStep2.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelQueryStep2.jsx').then(m => { return { namespace: 'channelQueryStep2',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelUpdate.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelUpdate.jsx').then(m => { return { namespace: 'channelUpdate',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__channelUpdatetwo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/channelUpdatetwo.jsx').then(m => { return { namespace: 'channelUpdatetwo',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__parentAreaList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/parentAreaList.jsx').then(m => { return { namespace: 'parentAreaList',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__searchFile.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/searchFile.jsx').then(m => { return { namespace: 'searchFile',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ChannelAdd__StepForm__models__shopImgUpload.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ChannelAdd/StepForm/models/shopImgUpload.jsx').then(m => { return { namespace: 'shopImgUpload',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Channel/ChannelAdd/StepForm/Step4.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
                  }
                ]
              },
              {
                "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "path": "/channel/shop/list",
            "name": "shopList",
            "hideChildrenInMenu": true,
            "routes": [
              {
                "path": "/channel/shop/list",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Channel__ShopList__models__allChannel.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ShopList/models/allChannel.jsx').then(m => { return { namespace: 'allChannel',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ShopList__models__shopList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ShopList/models/shopList.jsx').then(m => { return { namespace: 'shopList',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ShopList__models__shopListOpen.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ShopList/models/shopListOpen.jsx').then(m => { return { namespace: 'shopListOpen',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__ShopList__models__shopListStop.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ShopList/models/shopListStop.jsx').then(m => { return { namespace: 'shopListStop',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Channel/ShopList'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "path": "/channel/shop/list/detail",
                "name": "shopDetail",
                "hideInMenu": true,
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Channel__ShopDetail__models__shopDetail.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/ShopDetail/models/shopDetail.jsx').then(m => { return { namespace: 'shopDetail',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Channel/ShopDetail'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "path": "/channel/shop/list/add",
                "name": "carTypeAdd",
                "hideInMenu": true,
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__addMainBusiness.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/addMainBusiness.jsx').then(m => { return { namespace: 'addMainBusiness',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__addShareholder.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/addShareholder.jsx').then(m => { return { namespace: 'addShareholder',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__companyAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/companyAdd.jsx').then(m => { return { namespace: 'companyAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__companyQueryStep1.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/companyQueryStep1.jsx').then(m => { return { namespace: 'companyQueryStep1',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__companyUpdate.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/companyUpdate.jsx').then(m => { return { namespace: 'companyUpdate',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__companyUpdate2.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/companyUpdate2.jsx').then(m => { return { namespace: 'companyUpdate2',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__delMainBusiness.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/delMainBusiness.jsx').then(m => { return { namespace: 'delMainBusiness',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__delShareholder.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/delShareholder.jsx').then(m => { return { namespace: 'delShareholder',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__goupMainBusiness.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/goupMainBusiness.jsx').then(m => { return { namespace: 'goupMainBusiness',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__groupShareholder.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/groupShareholder.jsx').then(m => { return { namespace: 'groupShareholder',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Channel/CompanyAdd/StepForm'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                "routes": [
                  {
                    "path": "/channel/shop/list/add",
                    "redirect": "/channel/shop/list/add/info",
                    "exact": true
                  },
                  {
                    "path": "/channel/shop/list/add/info",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__addMainBusiness.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/addMainBusiness.jsx').then(m => { return { namespace: 'addMainBusiness',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__addShareholder.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/addShareholder.jsx').then(m => { return { namespace: 'addShareholder',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__companyAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/companyAdd.jsx').then(m => { return { namespace: 'companyAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__companyQueryStep1.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/companyQueryStep1.jsx').then(m => { return { namespace: 'companyQueryStep1',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__companyUpdate.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/companyUpdate.jsx').then(m => { return { namespace: 'companyUpdate',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__companyUpdate2.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/companyUpdate2.jsx').then(m => { return { namespace: 'companyUpdate2',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__delMainBusiness.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/delMainBusiness.jsx').then(m => { return { namespace: 'delMainBusiness',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__delShareholder.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/delShareholder.jsx').then(m => { return { namespace: 'delShareholder',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__goupMainBusiness.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/goupMainBusiness.jsx').then(m => { return { namespace: 'goupMainBusiness',...m.default}}),
  import(/* webpackChunkName: 'p__Channel__CompanyAdd__models__groupShareholder.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Channel/CompanyAdd/models/groupShareholder.jsx').then(m => { return { namespace: 'groupShareholder',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Channel/CompanyAdd/StepForm/Step1'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
                  }
                ]
              },
              {
                "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/goods",
        "icon": "appstore",
        "name": "goods",
        "routes": [
          {
            "path": "/goods/type/list",
            "name": "typeList",
            "hideChildrenInMenu": true,
            "routes": [
              {
                "path": "/goods/type/list",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Goods__TypeList__models__deleteptlist.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeList/models/deleteptlist.jsx').then(m => { return { namespace: 'deleteptlist',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__TypeList__models__getptlists.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeList/models/getptlists.jsx').then(m => { return { namespace: 'getptlists',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__TypeList__models__goodTypeList.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeList/models/goodTypeList.js').then(m => { return { namespace: 'goodTypeList',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__TypeList__models__listOfAssociatedContractTemplates.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeList/models/listOfAssociatedContractTemplates.js').then(m => { return { namespace: 'listOfAssociatedContractTemplates',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__TypeList__models__querySettingsList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeList/models/querySettingsList.jsx').then(m => { return { namespace: 'querySettingsList',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__TypeList__models__singleAssociationModal.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeList/models/singleAssociationModal.jsx').then(m => { return { namespace: 'singleAssociationModal',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__TypeList__models__typeMaintenance.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeList/models/typeMaintenance.js').then(m => { return { namespace: 'typeMaintenance',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__TypeList__models__WhetherToAssociateSettings.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeList/models/WhetherToAssociateSettings.js').then(m => { return { namespace: 'WhetherToAssociateSettings',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpackagepsitems.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpackagepsitems.jsx').then(m => { return { namespace: 'getpackagepsitems',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsinfo.jsx').then(m => { return { namespace: 'getpsinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsplans.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsplans.jsx').then(m => { return { namespace: 'getpsplans',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptbenefits.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptbenefits.jsx').then(m => { return { namespace: 'getptbenefits',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptinfo.jsx').then(m => { return { namespace: 'getptinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptpayments.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptpayments.jsx').then(m => { return { namespace: 'getptpayments',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplan.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplan.jsx').then(m => { return { namespace: 'getptplan',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplanperiods.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplanperiods.jsx').then(m => { return { namespace: 'getptplanperiods',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptprojects.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptprojects.jsx').then(m => { return { namespace: 'getptprojects',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3.jsx').then(m => { return { namespace: 'goodTypeStep3',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3List.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3List.jsx').then(m => { return { namespace: 'goodTypeStep3List',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__maintenance.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/maintenance.js').then(m => { return { namespace: 'maintenance',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__payMentInfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/payMentInfo.jsx').then(m => { return { namespace: 'payMentInfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__productList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/productList.jsx').then(m => { return { namespace: 'productList',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Goods/TypeList'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "path": "/goods/type/list/detail",
                "name": "detail",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Goods__TypeDetail__models__goodTypeDetail.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeDetail/models/goodTypeDetail.js').then(m => { return { namespace: 'goodTypeDetail',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__TypeDetail__models__payGoodTypeDetail.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeDetail/models/payGoodTypeDetail.js').then(m => { return { namespace: 'payGoodTypeDetail',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpackagepsitems.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpackagepsitems.jsx').then(m => { return { namespace: 'getpackagepsitems',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsinfo.jsx').then(m => { return { namespace: 'getpsinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsplans.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsplans.jsx').then(m => { return { namespace: 'getpsplans',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptbenefits.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptbenefits.jsx').then(m => { return { namespace: 'getptbenefits',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptinfo.jsx').then(m => { return { namespace: 'getptinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptpayments.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptpayments.jsx').then(m => { return { namespace: 'getptpayments',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplan.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplan.jsx').then(m => { return { namespace: 'getptplan',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplanperiods.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplanperiods.jsx').then(m => { return { namespace: 'getptplanperiods',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptprojects.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptprojects.jsx').then(m => { return { namespace: 'getptprojects',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3.jsx').then(m => { return { namespace: 'goodTypeStep3',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3List.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3List.jsx').then(m => { return { namespace: 'goodTypeStep3List',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__maintenance.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/maintenance.js').then(m => { return { namespace: 'maintenance',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__payMentInfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/payMentInfo.jsx').then(m => { return { namespace: 'payMentInfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__productList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/productList.jsx').then(m => { return { namespace: 'productList',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Goods/TypeDetail'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "path": "/goods/type/list/add",
                "name": "add",
                "hideInMenu": true,
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Goods__TypeAdd__models__form.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeAdd/models/form.jsx').then(m => { return { namespace: 'form',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__TypeAdd__models__goodTypeStep4.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeAdd/models/goodTypeStep4.jsx').then(m => { return { namespace: 'goodTypeStep4',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__TypeAdd__models__typeAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeAdd/models/typeAdd.jsx').then(m => { return { namespace: 'typeAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpackagepsitems.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpackagepsitems.jsx').then(m => { return { namespace: 'getpackagepsitems',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsinfo.jsx').then(m => { return { namespace: 'getpsinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsplans.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsplans.jsx').then(m => { return { namespace: 'getpsplans',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptbenefits.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptbenefits.jsx').then(m => { return { namespace: 'getptbenefits',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptinfo.jsx').then(m => { return { namespace: 'getptinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptpayments.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptpayments.jsx').then(m => { return { namespace: 'getptpayments',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplan.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplan.jsx').then(m => { return { namespace: 'getptplan',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplanperiods.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplanperiods.jsx').then(m => { return { namespace: 'getptplanperiods',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptprojects.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptprojects.jsx').then(m => { return { namespace: 'getptprojects',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3.jsx').then(m => { return { namespace: 'goodTypeStep3',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3List.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3List.jsx').then(m => { return { namespace: 'goodTypeStep3List',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__maintenance.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/maintenance.js').then(m => { return { namespace: 'maintenance',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__payMentInfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/payMentInfo.jsx').then(m => { return { namespace: 'payMentInfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__productList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/productList.jsx').then(m => { return { namespace: 'productList',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Goods/TypeAdd/StepForm'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                "routes": [
                  {
                    "path": "/goods/type/list/add",
                    "redirect": "/goods/type/list/add/info",
                    "exact": true
                  },
                  {
                    "path": "/goods/type/list/add/info",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Goods__TypeAdd__models__form.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeAdd/models/form.jsx').then(m => { return { namespace: 'form',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__TypeAdd__models__goodTypeStep4.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeAdd/models/goodTypeStep4.jsx').then(m => { return { namespace: 'goodTypeStep4',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__TypeAdd__models__typeAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeAdd/models/typeAdd.jsx').then(m => { return { namespace: 'typeAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpackagepsitems.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpackagepsitems.jsx').then(m => { return { namespace: 'getpackagepsitems',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsinfo.jsx').then(m => { return { namespace: 'getpsinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsplans.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsplans.jsx').then(m => { return { namespace: 'getpsplans',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptbenefits.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptbenefits.jsx').then(m => { return { namespace: 'getptbenefits',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptinfo.jsx').then(m => { return { namespace: 'getptinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptpayments.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptpayments.jsx').then(m => { return { namespace: 'getptpayments',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplan.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplan.jsx').then(m => { return { namespace: 'getptplan',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplanperiods.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplanperiods.jsx').then(m => { return { namespace: 'getptplanperiods',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptprojects.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptprojects.jsx').then(m => { return { namespace: 'getptprojects',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3.jsx').then(m => { return { namespace: 'goodTypeStep3',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3List.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3List.jsx').then(m => { return { namespace: 'goodTypeStep3List',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__maintenance.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/maintenance.js').then(m => { return { namespace: 'maintenance',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__payMentInfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/payMentInfo.jsx').then(m => { return { namespace: 'payMentInfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__productList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/productList.jsx').then(m => { return { namespace: 'productList',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Goods/TypeAdd/StepForm/Step0.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/goods/type/list/add/confirm",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Goods__TypeAdd__models__form.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeAdd/models/form.jsx').then(m => { return { namespace: 'form',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__TypeAdd__models__goodTypeStep4.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeAdd/models/goodTypeStep4.jsx').then(m => { return { namespace: 'goodTypeStep4',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__TypeAdd__models__typeAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeAdd/models/typeAdd.jsx').then(m => { return { namespace: 'typeAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpackagepsitems.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpackagepsitems.jsx').then(m => { return { namespace: 'getpackagepsitems',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsinfo.jsx').then(m => { return { namespace: 'getpsinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsplans.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsplans.jsx').then(m => { return { namespace: 'getpsplans',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptbenefits.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptbenefits.jsx').then(m => { return { namespace: 'getptbenefits',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptinfo.jsx').then(m => { return { namespace: 'getptinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptpayments.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptpayments.jsx').then(m => { return { namespace: 'getptpayments',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplan.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplan.jsx').then(m => { return { namespace: 'getptplan',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplanperiods.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplanperiods.jsx').then(m => { return { namespace: 'getptplanperiods',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptprojects.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptprojects.jsx').then(m => { return { namespace: 'getptprojects',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3.jsx').then(m => { return { namespace: 'goodTypeStep3',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3List.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3List.jsx').then(m => { return { namespace: 'goodTypeStep3List',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__maintenance.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/maintenance.js').then(m => { return { namespace: 'maintenance',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__payMentInfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/payMentInfo.jsx').then(m => { return { namespace: 'payMentInfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__productList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/productList.jsx').then(m => { return { namespace: 'productList',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Goods/TypeAdd/StepForm/Step1.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/goods/type/list/add/step2",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Goods__TypeAdd__models__form.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeAdd/models/form.jsx').then(m => { return { namespace: 'form',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__TypeAdd__models__goodTypeStep4.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeAdd/models/goodTypeStep4.jsx').then(m => { return { namespace: 'goodTypeStep4',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__TypeAdd__models__typeAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeAdd/models/typeAdd.jsx').then(m => { return { namespace: 'typeAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpackagepsitems.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpackagepsitems.jsx').then(m => { return { namespace: 'getpackagepsitems',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsinfo.jsx').then(m => { return { namespace: 'getpsinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsplans.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsplans.jsx').then(m => { return { namespace: 'getpsplans',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptbenefits.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptbenefits.jsx').then(m => { return { namespace: 'getptbenefits',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptinfo.jsx').then(m => { return { namespace: 'getptinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptpayments.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptpayments.jsx').then(m => { return { namespace: 'getptpayments',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplan.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplan.jsx').then(m => { return { namespace: 'getptplan',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplanperiods.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplanperiods.jsx').then(m => { return { namespace: 'getptplanperiods',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptprojects.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptprojects.jsx').then(m => { return { namespace: 'getptprojects',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3.jsx').then(m => { return { namespace: 'goodTypeStep3',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3List.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3List.jsx').then(m => { return { namespace: 'goodTypeStep3List',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__maintenance.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/maintenance.js').then(m => { return { namespace: 'maintenance',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__payMentInfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/payMentInfo.jsx').then(m => { return { namespace: 'payMentInfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__productList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/productList.jsx').then(m => { return { namespace: 'productList',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Goods/TypeAdd/StepForm/Step2.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/goods/type/list/add/step3",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Goods__TypeAdd__models__form.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeAdd/models/form.jsx').then(m => { return { namespace: 'form',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__TypeAdd__models__goodTypeStep4.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeAdd/models/goodTypeStep4.jsx').then(m => { return { namespace: 'goodTypeStep4',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__TypeAdd__models__typeAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeAdd/models/typeAdd.jsx').then(m => { return { namespace: 'typeAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpackagepsitems.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpackagepsitems.jsx').then(m => { return { namespace: 'getpackagepsitems',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsinfo.jsx').then(m => { return { namespace: 'getpsinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsplans.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsplans.jsx').then(m => { return { namespace: 'getpsplans',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptbenefits.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptbenefits.jsx').then(m => { return { namespace: 'getptbenefits',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptinfo.jsx').then(m => { return { namespace: 'getptinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptpayments.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptpayments.jsx').then(m => { return { namespace: 'getptpayments',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplan.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplan.jsx').then(m => { return { namespace: 'getptplan',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplanperiods.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplanperiods.jsx').then(m => { return { namespace: 'getptplanperiods',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptprojects.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptprojects.jsx').then(m => { return { namespace: 'getptprojects',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3.jsx').then(m => { return { namespace: 'goodTypeStep3',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3List.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3List.jsx').then(m => { return { namespace: 'goodTypeStep3List',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__maintenance.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/maintenance.js').then(m => { return { namespace: 'maintenance',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__payMentInfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/payMentInfo.jsx').then(m => { return { namespace: 'payMentInfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__productList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/productList.jsx').then(m => { return { namespace: 'productList',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Goods/TypeAdd/StepForm/Step4.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/goods/type/list/add/result",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Goods__TypeAdd__models__form.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeAdd/models/form.jsx').then(m => { return { namespace: 'form',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__TypeAdd__models__goodTypeStep4.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeAdd/models/goodTypeStep4.jsx').then(m => { return { namespace: 'goodTypeStep4',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__TypeAdd__models__typeAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeAdd/models/typeAdd.jsx').then(m => { return { namespace: 'typeAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpackagepsitems.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpackagepsitems.jsx').then(m => { return { namespace: 'getpackagepsitems',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsinfo.jsx').then(m => { return { namespace: 'getpsinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsplans.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsplans.jsx').then(m => { return { namespace: 'getpsplans',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptbenefits.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptbenefits.jsx').then(m => { return { namespace: 'getptbenefits',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptinfo.jsx').then(m => { return { namespace: 'getptinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptpayments.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptpayments.jsx').then(m => { return { namespace: 'getptpayments',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplan.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplan.jsx').then(m => { return { namespace: 'getptplan',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplanperiods.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplanperiods.jsx').then(m => { return { namespace: 'getptplanperiods',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptprojects.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptprojects.jsx').then(m => { return { namespace: 'getptprojects',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3.jsx').then(m => { return { namespace: 'goodTypeStep3',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3List.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3List.jsx').then(m => { return { namespace: 'goodTypeStep3List',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__maintenance.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/maintenance.js').then(m => { return { namespace: 'maintenance',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__payMentInfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/payMentInfo.jsx').then(m => { return { namespace: 'payMentInfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__productList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/productList.jsx').then(m => { return { namespace: 'productList',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Goods/TypeAdd/StepForm/Step5.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
                  }
                ]
              },
              {
                "path": "/goods/type/list/edit",
                "name": "carTypeEdit",
                "hideInMenu": true,
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Goods__TypeAdd__models__form.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeAdd/models/form.jsx').then(m => { return { namespace: 'form',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__TypeAdd__models__goodTypeStep4.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeAdd/models/goodTypeStep4.jsx').then(m => { return { namespace: 'goodTypeStep4',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__TypeAdd__models__typeAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeAdd/models/typeAdd.jsx').then(m => { return { namespace: 'typeAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpackagepsitems.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpackagepsitems.jsx').then(m => { return { namespace: 'getpackagepsitems',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsinfo.jsx').then(m => { return { namespace: 'getpsinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsplans.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsplans.jsx').then(m => { return { namespace: 'getpsplans',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptbenefits.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptbenefits.jsx').then(m => { return { namespace: 'getptbenefits',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptinfo.jsx').then(m => { return { namespace: 'getptinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptpayments.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptpayments.jsx').then(m => { return { namespace: 'getptpayments',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplan.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplan.jsx').then(m => { return { namespace: 'getptplan',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplanperiods.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplanperiods.jsx').then(m => { return { namespace: 'getptplanperiods',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptprojects.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptprojects.jsx').then(m => { return { namespace: 'getptprojects',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3.jsx').then(m => { return { namespace: 'goodTypeStep3',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3List.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3List.jsx').then(m => { return { namespace: 'goodTypeStep3List',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__maintenance.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/maintenance.js').then(m => { return { namespace: 'maintenance',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__payMentInfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/payMentInfo.jsx').then(m => { return { namespace: 'payMentInfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__productList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/productList.jsx').then(m => { return { namespace: 'productList',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Goods/TypeAdd/StepForm'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                "hideChildrenInMenu": true,
                "routes": [
                  {
                    "path": "/goods/type/list/edit",
                    "redirect": "/goods/type/list/edit/info",
                    "exact": true
                  },
                  {
                    "path": "/goods/type/list/edit/info",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Goods__TypeAdd__models__form.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeAdd/models/form.jsx').then(m => { return { namespace: 'form',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__TypeAdd__models__goodTypeStep4.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeAdd/models/goodTypeStep4.jsx').then(m => { return { namespace: 'goodTypeStep4',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__TypeAdd__models__typeAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeAdd/models/typeAdd.jsx').then(m => { return { namespace: 'typeAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpackagepsitems.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpackagepsitems.jsx').then(m => { return { namespace: 'getpackagepsitems',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsinfo.jsx').then(m => { return { namespace: 'getpsinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsplans.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsplans.jsx').then(m => { return { namespace: 'getpsplans',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptbenefits.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptbenefits.jsx').then(m => { return { namespace: 'getptbenefits',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptinfo.jsx').then(m => { return { namespace: 'getptinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptpayments.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptpayments.jsx').then(m => { return { namespace: 'getptpayments',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplan.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplan.jsx').then(m => { return { namespace: 'getptplan',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplanperiods.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplanperiods.jsx').then(m => { return { namespace: 'getptplanperiods',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptprojects.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptprojects.jsx').then(m => { return { namespace: 'getptprojects',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3.jsx').then(m => { return { namespace: 'goodTypeStep3',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3List.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3List.jsx').then(m => { return { namespace: 'goodTypeStep3List',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__maintenance.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/maintenance.js').then(m => { return { namespace: 'maintenance',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__payMentInfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/payMentInfo.jsx').then(m => { return { namespace: 'payMentInfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__productList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/productList.jsx').then(m => { return { namespace: 'productList',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Goods/TypeAdd/StepForm/Step0'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/goods/type/list/edit/confirm",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Goods__TypeAdd__models__form.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeAdd/models/form.jsx').then(m => { return { namespace: 'form',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__TypeAdd__models__goodTypeStep4.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeAdd/models/goodTypeStep4.jsx').then(m => { return { namespace: 'goodTypeStep4',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__TypeAdd__models__typeAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeAdd/models/typeAdd.jsx').then(m => { return { namespace: 'typeAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpackagepsitems.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpackagepsitems.jsx').then(m => { return { namespace: 'getpackagepsitems',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsinfo.jsx').then(m => { return { namespace: 'getpsinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsplans.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsplans.jsx').then(m => { return { namespace: 'getpsplans',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptbenefits.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptbenefits.jsx').then(m => { return { namespace: 'getptbenefits',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptinfo.jsx').then(m => { return { namespace: 'getptinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptpayments.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptpayments.jsx').then(m => { return { namespace: 'getptpayments',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplan.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplan.jsx').then(m => { return { namespace: 'getptplan',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplanperiods.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplanperiods.jsx').then(m => { return { namespace: 'getptplanperiods',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptprojects.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptprojects.jsx').then(m => { return { namespace: 'getptprojects',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3.jsx').then(m => { return { namespace: 'goodTypeStep3',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3List.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3List.jsx').then(m => { return { namespace: 'goodTypeStep3List',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__maintenance.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/maintenance.js').then(m => { return { namespace: 'maintenance',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__payMentInfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/payMentInfo.jsx').then(m => { return { namespace: 'payMentInfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__productList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/productList.jsx').then(m => { return { namespace: 'productList',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Goods/TypeAdd/StepForm/Step1'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/goods/type/list/edit/step2",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Goods__TypeAdd__models__form.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeAdd/models/form.jsx').then(m => { return { namespace: 'form',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__TypeAdd__models__goodTypeStep4.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeAdd/models/goodTypeStep4.jsx').then(m => { return { namespace: 'goodTypeStep4',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__TypeAdd__models__typeAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeAdd/models/typeAdd.jsx').then(m => { return { namespace: 'typeAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpackagepsitems.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpackagepsitems.jsx').then(m => { return { namespace: 'getpackagepsitems',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsinfo.jsx').then(m => { return { namespace: 'getpsinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsplans.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsplans.jsx').then(m => { return { namespace: 'getpsplans',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptbenefits.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptbenefits.jsx').then(m => { return { namespace: 'getptbenefits',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptinfo.jsx').then(m => { return { namespace: 'getptinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptpayments.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptpayments.jsx').then(m => { return { namespace: 'getptpayments',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplan.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplan.jsx').then(m => { return { namespace: 'getptplan',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplanperiods.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplanperiods.jsx').then(m => { return { namespace: 'getptplanperiods',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptprojects.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptprojects.jsx').then(m => { return { namespace: 'getptprojects',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3.jsx').then(m => { return { namespace: 'goodTypeStep3',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3List.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3List.jsx').then(m => { return { namespace: 'goodTypeStep3List',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__maintenance.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/maintenance.js').then(m => { return { namespace: 'maintenance',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__payMentInfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/payMentInfo.jsx').then(m => { return { namespace: 'payMentInfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__productList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/productList.jsx').then(m => { return { namespace: 'productList',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Goods/TypeAdd/StepForm/Step2.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/goods/type/list/edit/step3",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Goods__TypeAdd__models__form.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeAdd/models/form.jsx').then(m => { return { namespace: 'form',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__TypeAdd__models__goodTypeStep4.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeAdd/models/goodTypeStep4.jsx').then(m => { return { namespace: 'goodTypeStep4',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__TypeAdd__models__typeAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeAdd/models/typeAdd.jsx').then(m => { return { namespace: 'typeAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpackagepsitems.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpackagepsitems.jsx').then(m => { return { namespace: 'getpackagepsitems',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsinfo.jsx').then(m => { return { namespace: 'getpsinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsplans.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsplans.jsx').then(m => { return { namespace: 'getpsplans',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptbenefits.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptbenefits.jsx').then(m => { return { namespace: 'getptbenefits',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptinfo.jsx').then(m => { return { namespace: 'getptinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptpayments.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptpayments.jsx').then(m => { return { namespace: 'getptpayments',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplan.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplan.jsx').then(m => { return { namespace: 'getptplan',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplanperiods.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplanperiods.jsx').then(m => { return { namespace: 'getptplanperiods',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptprojects.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptprojects.jsx').then(m => { return { namespace: 'getptprojects',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3.jsx').then(m => { return { namespace: 'goodTypeStep3',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3List.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3List.jsx').then(m => { return { namespace: 'goodTypeStep3List',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__maintenance.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/maintenance.js').then(m => { return { namespace: 'maintenance',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__payMentInfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/payMentInfo.jsx').then(m => { return { namespace: 'payMentInfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__productList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/productList.jsx').then(m => { return { namespace: 'productList',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Goods/TypeAdd/StepForm/Step4.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/goods/type/list/edit/result",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Goods__TypeAdd__models__form.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeAdd/models/form.jsx').then(m => { return { namespace: 'form',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__TypeAdd__models__goodTypeStep4.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeAdd/models/goodTypeStep4.jsx').then(m => { return { namespace: 'goodTypeStep4',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__TypeAdd__models__typeAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/TypeAdd/models/typeAdd.jsx').then(m => { return { namespace: 'typeAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpackagepsitems.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpackagepsitems.jsx').then(m => { return { namespace: 'getpackagepsitems',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsinfo.jsx').then(m => { return { namespace: 'getpsinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsplans.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsplans.jsx').then(m => { return { namespace: 'getpsplans',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptbenefits.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptbenefits.jsx').then(m => { return { namespace: 'getptbenefits',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptinfo.jsx').then(m => { return { namespace: 'getptinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptpayments.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptpayments.jsx').then(m => { return { namespace: 'getptpayments',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplan.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplan.jsx').then(m => { return { namespace: 'getptplan',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplanperiods.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplanperiods.jsx').then(m => { return { namespace: 'getptplanperiods',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptprojects.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptprojects.jsx').then(m => { return { namespace: 'getptprojects',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3.jsx').then(m => { return { namespace: 'goodTypeStep3',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3List.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3List.jsx').then(m => { return { namespace: 'goodTypeStep3List',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__maintenance.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/maintenance.js').then(m => { return { namespace: 'maintenance',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__payMentInfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/payMentInfo.jsx').then(m => { return { namespace: 'payMentInfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__productList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/productList.jsx').then(m => { return { namespace: 'productList',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Goods/TypeAdd/StepForm/Step5.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
                  }
                ]
              },
              {
                "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "path": "/goods/plan/list",
            "name": "planList",
            "hideChildrenInMenu": true,
            "routes": [
              {
                "path": "/goods/plan/list",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Goods__PlanList__models__addpschannelrelas.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanList/models/addpschannelrelas.jsx').then(m => { return { namespace: 'addpschannelrelas',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanList__models__areaList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanList/models/areaList.jsx').then(m => { return { namespace: 'areaList',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanList__models__batchManagemen.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanList/models/batchManagemen.jsx').then(m => { return { namespace: 'batchManagemen',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanList__models__copyPsInfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanList/models/copyPsInfo.jsx').then(m => { return { namespace: 'copyPsInfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanList__models__getpschannelrelas.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanList/models/getpschannelrelas.jsx').then(m => { return { namespace: 'getpschannelrelas',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanList__models__goodPlanList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanList/models/goodPlanList.jsx').then(m => { return { namespace: 'goodPlanList',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpackagepsitems.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpackagepsitems.jsx').then(m => { return { namespace: 'getpackagepsitems',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsinfo.jsx').then(m => { return { namespace: 'getpsinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsplans.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsplans.jsx').then(m => { return { namespace: 'getpsplans',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptbenefits.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptbenefits.jsx').then(m => { return { namespace: 'getptbenefits',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptinfo.jsx').then(m => { return { namespace: 'getptinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptpayments.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptpayments.jsx').then(m => { return { namespace: 'getptpayments',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplan.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplan.jsx').then(m => { return { namespace: 'getptplan',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplanperiods.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplanperiods.jsx').then(m => { return { namespace: 'getptplanperiods',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptprojects.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptprojects.jsx').then(m => { return { namespace: 'getptprojects',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3.jsx').then(m => { return { namespace: 'goodTypeStep3',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3List.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3List.jsx').then(m => { return { namespace: 'goodTypeStep3List',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__maintenance.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/maintenance.js').then(m => { return { namespace: 'maintenance',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__payMentInfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/payMentInfo.jsx').then(m => { return { namespace: 'payMentInfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__productList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/productList.jsx').then(m => { return { namespace: 'productList',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Goods/PlanList'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "path": "/goods/plan/list/detail",
                "name": "detail",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Goods__PlanDetail__models__ProductSchemeDetail.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanDetail/models/ProductSchemeDetail.jsx').then(m => { return { namespace: 'ProductSchemeDetail',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpackagepsitems.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpackagepsitems.jsx').then(m => { return { namespace: 'getpackagepsitems',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsinfo.jsx').then(m => { return { namespace: 'getpsinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsplans.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsplans.jsx').then(m => { return { namespace: 'getpsplans',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptbenefits.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptbenefits.jsx').then(m => { return { namespace: 'getptbenefits',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptinfo.jsx').then(m => { return { namespace: 'getptinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptpayments.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptpayments.jsx').then(m => { return { namespace: 'getptpayments',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplan.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplan.jsx').then(m => { return { namespace: 'getptplan',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplanperiods.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplanperiods.jsx').then(m => { return { namespace: 'getptplanperiods',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptprojects.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptprojects.jsx').then(m => { return { namespace: 'getptprojects',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3.jsx').then(m => { return { namespace: 'goodTypeStep3',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3List.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3List.jsx').then(m => { return { namespace: 'goodTypeStep3List',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__maintenance.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/maintenance.js').then(m => { return { namespace: 'maintenance',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__payMentInfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/payMentInfo.jsx').then(m => { return { namespace: 'payMentInfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__productList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/productList.jsx').then(m => { return { namespace: 'productList',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Goods/PlanDetail'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "path": "/goods/plan/list/add",
                "name": "add",
                "hideInMenu": true,
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__commodityPricingInformation.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/commodityPricingInformation.js').then(m => { return { namespace: 'commodityPricingInformation',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__form.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/form.jsx').then(m => { return { namespace: 'form',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__planAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/planAdd.jsx').then(m => { return { namespace: 'planAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__planTypeStep1.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/planTypeStep1.js').then(m => { return { namespace: 'planTypeStep1',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__updatepsinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/updatepsinfo.jsx').then(m => { return { namespace: 'updatepsinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpackagepsitems.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpackagepsitems.jsx').then(m => { return { namespace: 'getpackagepsitems',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsinfo.jsx').then(m => { return { namespace: 'getpsinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsplans.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsplans.jsx').then(m => { return { namespace: 'getpsplans',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptbenefits.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptbenefits.jsx').then(m => { return { namespace: 'getptbenefits',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptinfo.jsx').then(m => { return { namespace: 'getptinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptpayments.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptpayments.jsx').then(m => { return { namespace: 'getptpayments',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplan.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplan.jsx').then(m => { return { namespace: 'getptplan',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplanperiods.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplanperiods.jsx').then(m => { return { namespace: 'getptplanperiods',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptprojects.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptprojects.jsx').then(m => { return { namespace: 'getptprojects',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3.jsx').then(m => { return { namespace: 'goodTypeStep3',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3List.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3List.jsx').then(m => { return { namespace: 'goodTypeStep3List',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__maintenance.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/maintenance.js').then(m => { return { namespace: 'maintenance',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__payMentInfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/payMentInfo.jsx').then(m => { return { namespace: 'payMentInfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__productList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/productList.jsx').then(m => { return { namespace: 'productList',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Goods/PlanAdd/StepForm'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                "routes": [
                  {
                    "path": "/goods/plan/list/add",
                    "redirect": "/goods/plan/list/add/info",
                    "exact": true
                  },
                  {
                    "path": "/goods/plan/list/add/info",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__commodityPricingInformation.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/commodityPricingInformation.js').then(m => { return { namespace: 'commodityPricingInformation',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__form.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/form.jsx').then(m => { return { namespace: 'form',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__planAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/planAdd.jsx').then(m => { return { namespace: 'planAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__planTypeStep1.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/planTypeStep1.js').then(m => { return { namespace: 'planTypeStep1',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__updatepsinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/updatepsinfo.jsx').then(m => { return { namespace: 'updatepsinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpackagepsitems.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpackagepsitems.jsx').then(m => { return { namespace: 'getpackagepsitems',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsinfo.jsx').then(m => { return { namespace: 'getpsinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsplans.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsplans.jsx').then(m => { return { namespace: 'getpsplans',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptbenefits.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptbenefits.jsx').then(m => { return { namespace: 'getptbenefits',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptinfo.jsx').then(m => { return { namespace: 'getptinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptpayments.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptpayments.jsx').then(m => { return { namespace: 'getptpayments',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplan.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplan.jsx').then(m => { return { namespace: 'getptplan',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplanperiods.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplanperiods.jsx').then(m => { return { namespace: 'getptplanperiods',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptprojects.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptprojects.jsx').then(m => { return { namespace: 'getptprojects',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3.jsx').then(m => { return { namespace: 'goodTypeStep3',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3List.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3List.jsx').then(m => { return { namespace: 'goodTypeStep3List',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__maintenance.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/maintenance.js').then(m => { return { namespace: 'maintenance',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__payMentInfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/payMentInfo.jsx').then(m => { return { namespace: 'payMentInfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__productList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/productList.jsx').then(m => { return { namespace: 'productList',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Goods/PlanAdd/StepForm/Step1.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/goods/plan/list/add/confirm",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__commodityPricingInformation.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/commodityPricingInformation.js').then(m => { return { namespace: 'commodityPricingInformation',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__form.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/form.jsx').then(m => { return { namespace: 'form',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__planAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/planAdd.jsx').then(m => { return { namespace: 'planAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__planTypeStep1.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/planTypeStep1.js').then(m => { return { namespace: 'planTypeStep1',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__updatepsinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/updatepsinfo.jsx').then(m => { return { namespace: 'updatepsinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpackagepsitems.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpackagepsitems.jsx').then(m => { return { namespace: 'getpackagepsitems',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsinfo.jsx').then(m => { return { namespace: 'getpsinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsplans.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsplans.jsx').then(m => { return { namespace: 'getpsplans',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptbenefits.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptbenefits.jsx').then(m => { return { namespace: 'getptbenefits',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptinfo.jsx').then(m => { return { namespace: 'getptinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptpayments.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptpayments.jsx').then(m => { return { namespace: 'getptpayments',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplan.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplan.jsx').then(m => { return { namespace: 'getptplan',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplanperiods.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplanperiods.jsx').then(m => { return { namespace: 'getptplanperiods',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptprojects.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptprojects.jsx').then(m => { return { namespace: 'getptprojects',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3.jsx').then(m => { return { namespace: 'goodTypeStep3',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3List.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3List.jsx').then(m => { return { namespace: 'goodTypeStep3List',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__maintenance.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/maintenance.js').then(m => { return { namespace: 'maintenance',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__payMentInfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/payMentInfo.jsx').then(m => { return { namespace: 'payMentInfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__productList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/productList.jsx').then(m => { return { namespace: 'productList',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Goods/PlanAdd/StepForm/Step2.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/goods/plan/list/add/step2",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__commodityPricingInformation.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/commodityPricingInformation.js').then(m => { return { namespace: 'commodityPricingInformation',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__form.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/form.jsx').then(m => { return { namespace: 'form',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__planAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/planAdd.jsx').then(m => { return { namespace: 'planAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__planTypeStep1.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/planTypeStep1.js').then(m => { return { namespace: 'planTypeStep1',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__updatepsinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/updatepsinfo.jsx').then(m => { return { namespace: 'updatepsinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpackagepsitems.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpackagepsitems.jsx').then(m => { return { namespace: 'getpackagepsitems',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsinfo.jsx').then(m => { return { namespace: 'getpsinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsplans.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsplans.jsx').then(m => { return { namespace: 'getpsplans',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptbenefits.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptbenefits.jsx').then(m => { return { namespace: 'getptbenefits',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptinfo.jsx').then(m => { return { namespace: 'getptinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptpayments.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptpayments.jsx').then(m => { return { namespace: 'getptpayments',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplan.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplan.jsx').then(m => { return { namespace: 'getptplan',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplanperiods.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplanperiods.jsx').then(m => { return { namespace: 'getptplanperiods',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptprojects.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptprojects.jsx').then(m => { return { namespace: 'getptprojects',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3.jsx').then(m => { return { namespace: 'goodTypeStep3',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3List.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3List.jsx').then(m => { return { namespace: 'goodTypeStep3List',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__maintenance.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/maintenance.js').then(m => { return { namespace: 'maintenance',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__payMentInfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/payMentInfo.jsx').then(m => { return { namespace: 'payMentInfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__productList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/productList.jsx').then(m => { return { namespace: 'productList',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Goods/PlanAdd/StepForm/Step3.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/goods/plan/list/add/step3",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__commodityPricingInformation.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/commodityPricingInformation.js').then(m => { return { namespace: 'commodityPricingInformation',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__form.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/form.jsx').then(m => { return { namespace: 'form',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__planAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/planAdd.jsx').then(m => { return { namespace: 'planAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__planTypeStep1.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/planTypeStep1.js').then(m => { return { namespace: 'planTypeStep1',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__updatepsinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/updatepsinfo.jsx').then(m => { return { namespace: 'updatepsinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpackagepsitems.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpackagepsitems.jsx').then(m => { return { namespace: 'getpackagepsitems',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsinfo.jsx').then(m => { return { namespace: 'getpsinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsplans.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsplans.jsx').then(m => { return { namespace: 'getpsplans',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptbenefits.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptbenefits.jsx').then(m => { return { namespace: 'getptbenefits',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptinfo.jsx').then(m => { return { namespace: 'getptinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptpayments.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptpayments.jsx').then(m => { return { namespace: 'getptpayments',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplan.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplan.jsx').then(m => { return { namespace: 'getptplan',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplanperiods.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplanperiods.jsx').then(m => { return { namespace: 'getptplanperiods',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptprojects.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptprojects.jsx').then(m => { return { namespace: 'getptprojects',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3.jsx').then(m => { return { namespace: 'goodTypeStep3',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3List.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3List.jsx').then(m => { return { namespace: 'goodTypeStep3List',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__maintenance.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/maintenance.js').then(m => { return { namespace: 'maintenance',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__payMentInfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/payMentInfo.jsx').then(m => { return { namespace: 'payMentInfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__productList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/productList.jsx').then(m => { return { namespace: 'productList',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Goods/PlanAdd/StepForm/Step4.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/goods/plan/list/add/result",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__commodityPricingInformation.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/commodityPricingInformation.js').then(m => { return { namespace: 'commodityPricingInformation',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__form.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/form.jsx').then(m => { return { namespace: 'form',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__planAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/planAdd.jsx').then(m => { return { namespace: 'planAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__planTypeStep1.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/planTypeStep1.js').then(m => { return { namespace: 'planTypeStep1',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__updatepsinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/updatepsinfo.jsx').then(m => { return { namespace: 'updatepsinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpackagepsitems.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpackagepsitems.jsx').then(m => { return { namespace: 'getpackagepsitems',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsinfo.jsx').then(m => { return { namespace: 'getpsinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsplans.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsplans.jsx').then(m => { return { namespace: 'getpsplans',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptbenefits.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptbenefits.jsx').then(m => { return { namespace: 'getptbenefits',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptinfo.jsx').then(m => { return { namespace: 'getptinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptpayments.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptpayments.jsx').then(m => { return { namespace: 'getptpayments',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplan.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplan.jsx').then(m => { return { namespace: 'getptplan',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplanperiods.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplanperiods.jsx').then(m => { return { namespace: 'getptplanperiods',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptprojects.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptprojects.jsx').then(m => { return { namespace: 'getptprojects',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3.jsx').then(m => { return { namespace: 'goodTypeStep3',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3List.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3List.jsx').then(m => { return { namespace: 'goodTypeStep3List',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__maintenance.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/maintenance.js').then(m => { return { namespace: 'maintenance',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__payMentInfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/payMentInfo.jsx').then(m => { return { namespace: 'payMentInfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__productList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/productList.jsx').then(m => { return { namespace: 'productList',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Goods/PlanAdd/StepForm/Step5.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
                  }
                ]
              },
              {
                "path": "/goods/plan/list/edit",
                "name": "edit",
                "hideInMenu": true,
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__commodityPricingInformation.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/commodityPricingInformation.js').then(m => { return { namespace: 'commodityPricingInformation',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__form.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/form.jsx').then(m => { return { namespace: 'form',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__planAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/planAdd.jsx').then(m => { return { namespace: 'planAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__planTypeStep1.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/planTypeStep1.js').then(m => { return { namespace: 'planTypeStep1',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__updatepsinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/updatepsinfo.jsx').then(m => { return { namespace: 'updatepsinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpackagepsitems.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpackagepsitems.jsx').then(m => { return { namespace: 'getpackagepsitems',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsinfo.jsx').then(m => { return { namespace: 'getpsinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsplans.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsplans.jsx').then(m => { return { namespace: 'getpsplans',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptbenefits.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptbenefits.jsx').then(m => { return { namespace: 'getptbenefits',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptinfo.jsx').then(m => { return { namespace: 'getptinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptpayments.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptpayments.jsx').then(m => { return { namespace: 'getptpayments',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplan.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplan.jsx').then(m => { return { namespace: 'getptplan',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplanperiods.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplanperiods.jsx').then(m => { return { namespace: 'getptplanperiods',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptprojects.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptprojects.jsx').then(m => { return { namespace: 'getptprojects',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3.jsx').then(m => { return { namespace: 'goodTypeStep3',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3List.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3List.jsx').then(m => { return { namespace: 'goodTypeStep3List',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__maintenance.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/maintenance.js').then(m => { return { namespace: 'maintenance',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__payMentInfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/payMentInfo.jsx').then(m => { return { namespace: 'payMentInfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__productList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/productList.jsx').then(m => { return { namespace: 'productList',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Goods/PlanAdd/StepForm'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                "routes": [
                  {
                    "path": "/goods/plan/list/edit",
                    "redirect": "/goods/plan/list/edit/info",
                    "exact": true
                  },
                  {
                    "path": "/goods/plan/list/edit/info",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__commodityPricingInformation.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/commodityPricingInformation.js').then(m => { return { namespace: 'commodityPricingInformation',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__form.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/form.jsx').then(m => { return { namespace: 'form',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__planAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/planAdd.jsx').then(m => { return { namespace: 'planAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__planTypeStep1.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/planTypeStep1.js').then(m => { return { namespace: 'planTypeStep1',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__updatepsinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/updatepsinfo.jsx').then(m => { return { namespace: 'updatepsinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpackagepsitems.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpackagepsitems.jsx').then(m => { return { namespace: 'getpackagepsitems',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsinfo.jsx').then(m => { return { namespace: 'getpsinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsplans.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsplans.jsx').then(m => { return { namespace: 'getpsplans',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptbenefits.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptbenefits.jsx').then(m => { return { namespace: 'getptbenefits',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptinfo.jsx').then(m => { return { namespace: 'getptinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptpayments.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptpayments.jsx').then(m => { return { namespace: 'getptpayments',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplan.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplan.jsx').then(m => { return { namespace: 'getptplan',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplanperiods.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplanperiods.jsx').then(m => { return { namespace: 'getptplanperiods',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptprojects.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptprojects.jsx').then(m => { return { namespace: 'getptprojects',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3.jsx').then(m => { return { namespace: 'goodTypeStep3',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3List.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3List.jsx').then(m => { return { namespace: 'goodTypeStep3List',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__maintenance.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/maintenance.js').then(m => { return { namespace: 'maintenance',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__payMentInfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/payMentInfo.jsx').then(m => { return { namespace: 'payMentInfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__productList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/productList.jsx').then(m => { return { namespace: 'productList',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Goods/PlanAdd/StepForm/Step1.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/goods/plan/list/edit/confirm",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__commodityPricingInformation.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/commodityPricingInformation.js').then(m => { return { namespace: 'commodityPricingInformation',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__form.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/form.jsx').then(m => { return { namespace: 'form',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__planAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/planAdd.jsx').then(m => { return { namespace: 'planAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__planTypeStep1.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/planTypeStep1.js').then(m => { return { namespace: 'planTypeStep1',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__updatepsinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/updatepsinfo.jsx').then(m => { return { namespace: 'updatepsinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpackagepsitems.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpackagepsitems.jsx').then(m => { return { namespace: 'getpackagepsitems',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsinfo.jsx').then(m => { return { namespace: 'getpsinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsplans.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsplans.jsx').then(m => { return { namespace: 'getpsplans',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptbenefits.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptbenefits.jsx').then(m => { return { namespace: 'getptbenefits',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptinfo.jsx').then(m => { return { namespace: 'getptinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptpayments.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptpayments.jsx').then(m => { return { namespace: 'getptpayments',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplan.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplan.jsx').then(m => { return { namespace: 'getptplan',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplanperiods.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplanperiods.jsx').then(m => { return { namespace: 'getptplanperiods',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptprojects.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptprojects.jsx').then(m => { return { namespace: 'getptprojects',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3.jsx').then(m => { return { namespace: 'goodTypeStep3',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3List.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3List.jsx').then(m => { return { namespace: 'goodTypeStep3List',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__maintenance.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/maintenance.js').then(m => { return { namespace: 'maintenance',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__payMentInfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/payMentInfo.jsx').then(m => { return { namespace: 'payMentInfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__productList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/productList.jsx').then(m => { return { namespace: 'productList',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Goods/PlanAdd/StepForm/Step2.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/goods/plan/list/edit/step2",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__commodityPricingInformation.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/commodityPricingInformation.js').then(m => { return { namespace: 'commodityPricingInformation',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__form.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/form.jsx').then(m => { return { namespace: 'form',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__planAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/planAdd.jsx').then(m => { return { namespace: 'planAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__planTypeStep1.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/planTypeStep1.js').then(m => { return { namespace: 'planTypeStep1',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__updatepsinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/updatepsinfo.jsx').then(m => { return { namespace: 'updatepsinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpackagepsitems.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpackagepsitems.jsx').then(m => { return { namespace: 'getpackagepsitems',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsinfo.jsx').then(m => { return { namespace: 'getpsinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsplans.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsplans.jsx').then(m => { return { namespace: 'getpsplans',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptbenefits.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptbenefits.jsx').then(m => { return { namespace: 'getptbenefits',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptinfo.jsx').then(m => { return { namespace: 'getptinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptpayments.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptpayments.jsx').then(m => { return { namespace: 'getptpayments',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplan.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplan.jsx').then(m => { return { namespace: 'getptplan',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplanperiods.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplanperiods.jsx').then(m => { return { namespace: 'getptplanperiods',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptprojects.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptprojects.jsx').then(m => { return { namespace: 'getptprojects',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3.jsx').then(m => { return { namespace: 'goodTypeStep3',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3List.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3List.jsx').then(m => { return { namespace: 'goodTypeStep3List',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__maintenance.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/maintenance.js').then(m => { return { namespace: 'maintenance',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__payMentInfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/payMentInfo.jsx').then(m => { return { namespace: 'payMentInfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__productList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/productList.jsx').then(m => { return { namespace: 'productList',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Goods/PlanAdd/StepForm/Step3.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/goods/plan/list/edit/step3",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__commodityPricingInformation.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/commodityPricingInformation.js').then(m => { return { namespace: 'commodityPricingInformation',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__form.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/form.jsx').then(m => { return { namespace: 'form',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__planAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/planAdd.jsx').then(m => { return { namespace: 'planAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__planTypeStep1.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/planTypeStep1.js').then(m => { return { namespace: 'planTypeStep1',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__updatepsinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/updatepsinfo.jsx').then(m => { return { namespace: 'updatepsinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpackagepsitems.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpackagepsitems.jsx').then(m => { return { namespace: 'getpackagepsitems',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsinfo.jsx').then(m => { return { namespace: 'getpsinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsplans.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsplans.jsx').then(m => { return { namespace: 'getpsplans',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptbenefits.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptbenefits.jsx').then(m => { return { namespace: 'getptbenefits',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptinfo.jsx').then(m => { return { namespace: 'getptinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptpayments.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptpayments.jsx').then(m => { return { namespace: 'getptpayments',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplan.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplan.jsx').then(m => { return { namespace: 'getptplan',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplanperiods.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplanperiods.jsx').then(m => { return { namespace: 'getptplanperiods',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptprojects.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptprojects.jsx').then(m => { return { namespace: 'getptprojects',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3.jsx').then(m => { return { namespace: 'goodTypeStep3',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3List.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3List.jsx').then(m => { return { namespace: 'goodTypeStep3List',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__maintenance.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/maintenance.js').then(m => { return { namespace: 'maintenance',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__payMentInfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/payMentInfo.jsx').then(m => { return { namespace: 'payMentInfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__productList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/productList.jsx').then(m => { return { namespace: 'productList',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Goods/PlanAdd/StepForm/Step4.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "path": "/goods/plan/list/edit/result",
                    "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__commodityPricingInformation.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/commodityPricingInformation.js').then(m => { return { namespace: 'commodityPricingInformation',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__form.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/form.jsx').then(m => { return { namespace: 'form',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__planAdd.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/planAdd.jsx').then(m => { return { namespace: 'planAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__planTypeStep1.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/planTypeStep1.js').then(m => { return { namespace: 'planTypeStep1',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__PlanAdd__models__updatepsinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/PlanAdd/models/updatepsinfo.jsx').then(m => { return { namespace: 'updatepsinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpackagepsitems.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpackagepsitems.jsx').then(m => { return { namespace: 'getpackagepsitems',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsinfo.jsx').then(m => { return { namespace: 'getpsinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getpsplans.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getpsplans.jsx').then(m => { return { namespace: 'getpsplans',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptbenefits.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptbenefits.jsx').then(m => { return { namespace: 'getptbenefits',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptinfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptinfo.jsx').then(m => { return { namespace: 'getptinfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptpayments.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptpayments.jsx').then(m => { return { namespace: 'getptpayments',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplan.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplan.jsx').then(m => { return { namespace: 'getptplan',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptplanperiods.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptplanperiods.jsx').then(m => { return { namespace: 'getptplanperiods',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__getptprojects.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/getptprojects.jsx').then(m => { return { namespace: 'getptprojects',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3.jsx').then(m => { return { namespace: 'goodTypeStep3',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__goodTypeStep3List.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/goodTypeStep3List.jsx').then(m => { return { namespace: 'goodTypeStep3List',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__maintenance.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/maintenance.js').then(m => { return { namespace: 'maintenance',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__payMentInfo.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/payMentInfo.jsx').then(m => { return { namespace: 'payMentInfo',...m.default}}),
  import(/* webpackChunkName: 'p__Goods__models__productList.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Goods/models/productList.jsx').then(m => { return { namespace: 'productList',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Goods/PlanAdd/StepForm/Step5.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
                  }
                ]
              },
              {
                "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "name": "exception",
        "icon": "warning",
        "path": "/exception",
        "hideInMenu": true,
        "routes": [
          {
            "path": "/exception/403",
            "name": "not-permission",
            "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Exception__models__error.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Exception/models/error.js').then(m => { return { namespace: 'error',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Exception/403'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "path": "/exception/404",
            "name": "not-find",
            "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Exception__models__error.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Exception/models/error.js').then(m => { return { namespace: 'error',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Exception/404'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "path": "/exception/500",
            "name": "server-error",
            "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Exception__models__error.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Exception/models/error.js').then(m => { return { namespace: 'error',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Exception/500'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "path": "/exception/trigger",
            "name": "trigger",
            "hideInMenu": true,
            "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Exception__models__error.js' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/Exception/models/error.js').then(m => { return { namespace: 'error',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Exception/TriggerException'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "name": "accountuser",
        "icon": "user",
        "path": "/accountuser",
        "routes": [
          {
            "path": "/accountuser/center",
            "name": "center",
            "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__AccountUser__models__updatePassword.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/AccountUser/models/updatePassword.jsx').then(m => { return { namespace: 'updatePassword',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../AccountUser/Center/index.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
            "routes": [
              {
                "path": "/accountuser/center",
                "redirect": "/accountuser/center/articles",
                "exact": true
              },
              {
                "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "path": "/accountuser/settings",
            "name": "settings",
            "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__AccountUser__models__updatePassword.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/AccountUser/models/updatePassword.jsx').then(m => { return { namespace: 'updatePassword',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../AccountUser/Settings/index.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
            "routes": [
              {
                "path": "/accountuser/settings",
                "redirect": "/AccountUser/settings/base",
                "exact": true
              },
              {
                "path": "/accountuser/settings/base",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__AccountUser__models__updatePassword.jsx' */'/Users/linzhou/Documents/workspace/orafl-flcs-web/src/pages/AccountUser/models/updatePassword.jsx').then(m => { return { namespace: 'updatePassword',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../AccountUser/Settings/index.jsx'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__404" */'../404'),
  LoadingComponent: require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "component": () => React.createElement(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
  }
];
window.g_routes = routes;
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  window.g_plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
window.g_history.listen(routeChangeHandler);
routeChangeHandler(window.g_history.location);

export default function RouterWrapper() {
  return (
<RendererWrapper0>
          <Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
        </RendererWrapper0>
  );
}
