export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [{
        path: '/user/login',
        component: './User/Login'
      },
      {
        path: '/user/forgetpwd',
        component: './User/ForgetPwd'
      },
      {
        path: '/user/resetpwd',
        component: './User/ResetPwd'
      },
      {
        path: '/user/forgetpwd-result',
        component: './User/ForgetPwdResult'
      },
      {
        path: '/user/register',
        component: './User/Register.jsx'
      },
      {
        path: '/user/register-result',
        component: './User/RegisterResult'
      },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    // authority: ['admin', 'user'],
    routes: [{
        path: '/',
        redirect: '/works/unfinish/enterorder/list'
      },
      //我的工作
      {
        path: '/works',
        icon: 'laptop',
        name: 'works',
        routes: [{
            path: '/works/unfinish',
            name: 'unfinish',
            routes: [{
                path: '/works/unfinish/enterorder',
                name: 'enterorder',
                hideChildrenInMenu: true,
                routes: [{
                    path: '/works/unfinish/enterorder',
                    redirect: '/works/unfinish/enterorder/list',
                  },
                  {
                    path: '/works/unfinish/enterorder/list',
                    component: './Works/Unfinish/EnterOrder/',
                  },
                  {
                    path: '/works/unfinish/enterorder/detail',
                    name: 'enterOrderDetail',
                    hideInMenu: true,
                    component: './../components/EnterOrderDetail',
                  },
                ],
              },
              {
                path: '/works/unfinish/paycar',
                name: 'paycar',
                hideChildrenInMenu: true,
                routes: [{
                    path: '/works/unfinish/paycar',
                    redirect: '/works/unfinish/paycar/list',
                  },
                  {
                    path: '/works/unfinish/paycar/list',
                    // name: 'orderList',
                    component: './Works/Unfinish/PayCar/',
                  },
                  {
                    path: '/works/unfinish/paycar/detail',
                    name: 'paycarDetail',
                    hideInMenu: true,
                    component: './../components/PayCarDetail'
                  },
                ]
              },
              {
                path: '/works/unfinish/resign',
                name: 'resign',
                // component: './Works/Unfinish/Resign',
                hideInMenu: true,
                hideChildrenInMenu: true,
                routes: [{
                    path: '/works/unfinish/resign',
                    redirect: '/works/unfinish/resign/list',
                  },
                  {
                    path: '/works/unfinish/resign/list',
                    component: './Works/Unfinish/Resign',
                  },
                  {
                    path: '/works/unfinish/resign/detail',
                    name: 'resignDetail',
                    hideInMenu: true,
                    component: './../components/ContractDetail'
                  },
                ]
              },
            ],
          },
          {
            path: '/works/finished',
            name: 'finished',
            routes: [{
                path: '/works/finished/enterorder',
                name: 'enterorder',
                hideChildrenInMenu: true,
                routes: [{
                    path: '/works/finished/enterorder',
                    redirect: '/works/finished/enterorder/list',
                  },
                  {
                    path: '/works/finished/enterorder/list',
                    component: './Works/Finished/EnterOrder',
                  },
                  {
                    path: '/works/finished/enterorder/detail',
                    name: 'enterorderDetail',
                    hideInMenu: true,
                    component: './../components/EnterOrderDetail',
                  },
                ]
              },
              {
                path: '/works/finished/paycar',
                name: 'paycar',
                // component: './Works/Finished/Paycar',
                hideChildrenInMenu: true,
                routes: [{
                    path: '/works/finished/paycar',
                    redirect: '/works/finished/paycar/list',
                  },
                  {
                    path: '/works/finished/paycar/list',
                    component: './Works/Finished/PayCar',
                  },
                  {
                    path: '/works/finished/paycar/detail',
                    name: 'paycarDetail',
                    hideInMenu: true,
                    component: './../components/PayCarDetail'
                  },
                ]
              },
              {
                path: '/works/finished/resign',
                name: 'resign',
                // component: './Works/Finished/Resign',
                hideInMenu: true,
                hideChildrenInMenu: true,
                routes: [{
                    path: '/works/finished/resign',
                    redirect: '/works/finished/resign/list',
                  },
                  {
                    path: '/works/finished/resign/list',
                    component: './Works/Finished/Resign',
                  },
                  {
                    path: '/works/finished/resign/detail',
                    name: 'resignDetail',
                    hideInMenu: true,
                    component: './../components/ContractDetail'
                  },
                ]
              },
            ],
          },
        ],
      },
      {
        path: '/trade',
        icon: 'profile',
        name: 'trade',
        routes: [{
            path: '/trade/list',
            name: 'list',
            hideChildrenInMenu: true,
            routes: [{
                path: '/trade/list',
                component: './Trade/List'
              },
              {
                path: '/trade/list/detail',
                name: 'detail',
                component: './../components/EnterOrderDetail'
              }
            ]
          },
          {
            path: '/trade/firstlist',
            name: 'firstList',
            hideChildrenInMenu: true,
            routes: [{
                path: '/trade/firstlist',
                component: './Trade/FirstList'
              },
              {
                path: '/trade/firstlist/detail',
                name: 'detail',
                component: './../components/EnterOrderDetail'
              }
            ]
          },
          {
            path: '/trade/reviewlist',
            name: 'reviewList',
            hideChildrenInMenu: true,
            routes: [{
                path: '/trade/reviewlist',
                component: './Trade/ReviewList'
              },
              {
                path: '/trade/reviewlist/detail',
                name: 'detail',
                component: './../components/EnterOrderDetail'
              }
            ]
          },
        ],
      },
      {
        path: '/contract',
        icon: 'audit',
        name: 'contract',
        hideInMenu: true,
        routes: [{
          path: '/contract/list',
          name: 'list',
          hideChildrenInMenu: true,
          routes: [{
            path: '/contract/list',
            component: './Contract/List'
          }, {
            path: '/contract/list/detail',
            name: 'detail',
            component: './../components/ContractDetail'
          }]
        }],
      },
      {
        path: '/takecar',
        icon: 'car',
        name: 'takecar',
        routes: [{
          path: '/takecar/list',
          name: 'list',
          hideChildrenInMenu: true,
          routes: [{
            path: '/takecar/list',
            component: './TakeCar/List'
          }, {
            path: '/takecar/list/detail',
            name: 'detail',
            component: './../components/PayCarDetail'
          }]
        }],
      },
      //仓储管理
      {
        path: '/store',
        icon: 'gold',
        name: 'store',
        routes: [{
            path: '/store/products',
            name: 'products',
            routes: [{
                path: '/store/products/productclass',
                name: 'productClass',
                hideChildrenInMenu: true,
                routes: [{
                    path: '/store/products/productclass',
                    redirect: '/store/products/productclass/list',
                  },
                  {
                    path: '/store/products/productclass/list',
                    component: './Storage/Products/ProductClassList',
                  },
                  {
                    path: '/store/products/productclass/detail',
                    name: 'productClassDetail',
                    hideInMenu: true,
                    component: './Storage/Products/ProductClassDetail',
                  },
                ],
              },
              {
                path: '/store/products/factorybrand',
                name: 'factoryBrand',
                hideChildrenInMenu: true,
                routes: [{
                    path: '/store/products/factorybrand',
                    redirect: '/store/products/factorybrand/list',
                  },
                  {
                    path: '/store/products/factorybrand/list',
                    component: './Storage/Products/FactoryBrandList',
                  },
                  {
                    path: '/store/products/factorybrand/detail',
                    name: 'factoryBrandDetail',
                    hideInMenu: true,
                    component: './Storage/Products/FactoryBrandDetail',
                  },
                ],
              },
              {
                path: '/store/products/producttype',
                name: 'productType',
                hideChildrenInMenu: true,
                routes: [{
                    path: '/store/products/producttype',
                    redirect: '/store/products/producttype/list',
                  },
                  {
                    path: '/store/products/producttype/list',
                    component: './Storage/Products/ProductTypeList',
                  },
                  {
                    path: '/store/products/producttype/detail',
                    name: 'productTypeDetail',
                    hideInMenu: true,
                    component: './Storage/Products/ProductTypeDetail',
                  },
                ],
              },
              {
                path: '/store/products/cartypestore',
                name: 'carTypeStore',
                hideChildrenInMenu: true,
                routes: [{
                    path: '/store/products/cartypestore',
                    redirect: '/store/products/cartypestore/list',
                  },
                  {
                    path: '/store/products/cartypestore/list',
                    component: './Storage/Products/CarTypeStoreList',
                  },
                  {
                    path: '/store/products/cartypestore/detail',
                    name: 'carTypeStoreDetail',
                    hideInMenu: true,
                    component: './Storage/Products/CarTypeStoreDetail',
                  },
                  {
                    path: '/store/products/cartypestore/add',
                    name: 'carTypeAdd',
                    hideInMenu: true,
                    component: './Storage/Products/CarTypeAdd/StepForm',
                    // hideChildrenInMenu: true,
                    routes: [{
                        path: '/store/products/cartypestore/add',
                        redirect: '/store/products/cartypestore/add/info',
                      },
                      {
                        path: '/store/products/cartypestore/add/info',
                        component: './Storage/Products/CarTypeAdd/StepForm/Step1.jsx',
                      },
                      {
                        path: '/store/products/cartypestore/add/confirm',
                        component: './Storage/Products/CarTypeAdd/StepForm/Step2.jsx',
                      },
                      {
                        path: '/store/products/cartypestore/add/img',
                        component: './Storage/Products/CarTypeAdd/StepForm/Step3.jsx',
                      },
                      {
                        path: '/store/products/cartypestore/add/cofigdetail',
                        component: './Storage/Products/CarTypeAdd/StepForm/Step4.jsx',
                      },
                      {
                        path: '/store/products/cartypestore/add/result',
                        component: './Storage/Products/CarTypeAdd/StepForm/Step5.jsx',
                      },
                    ],
                  },
                  {
                    path: '/store/products/cartypestore/edit',
                    name: 'carTypeEdit',
                    hideInMenu: true,
                    component: './Storage/Products/CarTypeAdd/StepForm',
                    // hideChildrenInMenu: true,
                    routes: [{
                        path: '/store/products/cartypestore/edit',
                        redirect: '/store/products/cartypestore/edit/info',
                      },
                      {
                        path: '/store/products/cartypestore/edit/info',
                        component: './Storage/Products/CarTypeAdd/StepForm/Step1.jsx',
                      },
                      {
                        path: '/store/products/cartypestore/edit/confirm',
                        component: './Storage/Products/CarTypeAdd/StepForm/Step2.jsx',
                      },
                      {
                        path: '/store/products/cartypestore/edit/img',
                        component: './Storage/Products/CarTypeAdd/StepForm/Step3.jsx',
                      },
                      {
                        path: '/store/products/cartypestore/edit/cofigdetail',
                        component: './Storage/Products/CarTypeAdd/StepForm/Step4.jsx',
                      },
                      {
                        path: '/store/products/cartypestore/edit/result',
                        component: './Storage/Products/CarTypeAdd/StepForm/Step5.jsx',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            path: '/store/stock',
            name: 'stock',
            routes: [{
                path: '/store/stock/storehouse',
                name: 'storeHouse',
                hideChildrenInMenu: true,
                routes: [{
                    path: '/store/stock/storehouse',
                    redirect: '/store/stock/storehouse/list',
                  },
                  {
                    path: '/store/stock/storehouse/list',
                    component: './Storage/Stock/StoreHouse'
                  },
                  {
                    path: '/store/stock/storehouse/detail',
                    name: 'storeHouseDetail',
                    hideInMenu: true,
                    component: './Storage/Stock/StoreHouseDetail',
                  },
                  {
                    path: '/store/stock/storehouse/add',
                    name: 'storeHouseAdd',
                    component: './Storage/Stock/StoreHouseAdd',
                  },
                  {
                    path: '/store/stock/storehouse/edit',
                    name: 'storeHouseEdit',
                    component: './Storage/Stock/StoreHouseAdd',
                  },
                ],
              },
              {
                path: '/store/stock/stockinfo',
                name: 'stockInfo',
                hideChildrenInMenu: true,
                routes: [{
                    path: '/store/stock/stockinfo',
                    redirect: '/store/stock/stockinfo/list',
                  },
                  {
                    path: '/store/stock/stockinfo/list',
                    component: './Storage/Stock/StockInfoList'
                  },
                  {
                    path: '/store/stock/stockinfo/detail',
                    name: 'stockInfoDetail',
                    hideInMenu: true,
                    component: './Storage/Stock/StockInfoDetail',
                  },
                ],
              },
            ],
          },

        ],
      },
      // 渠道管理
      {
        path: '/channel',
        icon: 'cluster',
        name: 'channel',
        routes: [{
            path: '/channel/company/list',
            name: 'companyList',
            hideChildrenInMenu: true,
            routes: [{
                path: '/channel/company/list',
                component: './Channel/CompanyList'
              },
              {
                path: '/channel/company/list/detail',
                name: 'companyDetail',
                component: './Channel/CompanyDetail'
              },
              {
                path: '/channel/company/list/add',
                name: 'companyAdd',
                hideInMenu: true,
                component: './Channel/CompanyAdd/StepForm',
                routes: [{
                    path: '/channel/company/list/add',
                    redirect: '/channel/company/list/add/info',
                  },
                  {
                    path: '/channel/company/list/add/info',
                    component: './Channel/CompanyAdd/StepForm/Step1.jsx',
                  },
                  {
                    path: '/channel/company/list/add/confirm',
                    component: './Channel/CompanyAdd/StepForm/Step2.jsx',
                  },
                  {
                    path: '/channel/company/list/add/result',
                    component: './Channel/CompanyAdd/StepForm/Step3.jsx',
                  },
                ],
              },
              {
                path: '/channel/company/list/edit',
                name: 'companyEdit',
                hideInMenu: true,
                component: './Channel/CompanyAdd/StepForm',
                routes: [{
                    path: '/channel/company/list/edit',
                    redirect: '/channel/company/list/edit/info',
                  },
                  {
                    path: '/channel/company/list/edit/info',
                    component: './Channel/CompanyAdd/StepForm/Step1.jsx',
                  },
                  {
                    path: '/channel/company/list/edit/confirm',
                    component: './Channel/CompanyAdd/StepForm/Step2.jsx',
                  },
                  {
                    path: '/channel/company/list/edit/result',
                    component: './Channel/CompanyAdd/StepForm/Step3.jsx',
                  },
                ],
              },

            ]
          },
          {
            path: '/channel/area/list',
            name: 'areaList',
            hideChildrenInMenu: true,
            routes: [{
                path: '/channel/area/list',
                component: './Channel/AreaList'
              },
              {
                path: '/channel/area/list/areaadd',
                name: 'areaAdd',
                component: './Channel/AreaAdd'
              },
              {
                path: '/channel/area/list/areaedit',
                name: 'areaEdit',
                component: './Channel/AreaAdd'
              },
            ]
          },
          {
            path: '/channel/channel/list',
            name: 'channelList',
            hideChildrenInMenu: true,
            routes: [{
                path: '/channel/channel/list',
                component: './Channel/ChannelList'
              },
              {
                path: '/channel/channel/list/detail',
                name: 'detail',
                component: './Channel/ChannelDetail'
              },
              {
                path: '/channel/channel/list/add',
                name: 'channelAdd',
                hideInMenu: true,
                component: './Channel/ChannelAdd/StepForm',
                routes: [{
                    path: '/channel/channel/list/add',
                    redirect: '/channel/channel/list/add/info',
                  },
                  {
                    path: '/channel/channel/list/add/info',
                    component: './Channel/ChannelAdd/StepForm/Step1.jsx',
                  },
                  {
                    path: '/channel/channel/list/add/confirm',
                    component: './Channel/ChannelAdd/StepForm/Step2.jsx',
                  },
                  {
                    path: '/channel/channel/list/add/upload',
                    component: './Channel/ChannelAdd/StepForm/Step3.jsx',
                  },
                  {
                    path: '/channel/channel/list/add/result',
                    component: './Channel/ChannelAdd/StepForm/Step4.jsx',
                  },
                ],
              },
              {
                path: '/channel/channel/list/edit',
                name: 'channelEdit',
                hideInMenu: true,
                component: './Channel/ChannelAdd/StepForm',
                routes: [{
                    path: '/channel/channel/list/edit',
                    redirect: '/channel/channel/list/edit/info',
                  },
                  {
                    path: '/channel/channel/list/edit/info',
                    component: './Channel/ChannelAdd/StepForm/Step1.jsx',
                  },
                  {
                    path: '/channel/channel/list/edit/confirm',
                    component: './Channel/ChannelAdd/StepForm/Step2.jsx',
                  },
                  {
                    path: '/channel/channel/list/edit/upload',
                    component: './Channel/ChannelAdd/StepForm/Step3.jsx',
                  },
                  {
                    path: '/channel/channel/list/edit/result',
                    component: './Channel/ChannelAdd/StepForm/Step4.jsx',
                  },
                ],
              }
            ]
          },
          {
            path: '/channel/shop/list',
            name: 'shopList',
            hideChildrenInMenu: true,
            routes: [{
                path: '/channel/shop/list',
                component: './Channel/ShopList'
              },
              {
                path: '/channel/shop/list/detail',
                name: 'shopDetail',
                hideInMenu: true,
                component: './Channel/ShopDetail',
              },
              {
                path: '/channel/shop/list/add',
                name: 'carTypeAdd',
                hideInMenu: true,
                component: './Channel/CompanyAdd/StepForm',
                routes: [{
                    path: '/channel/shop/list/add',
                    redirect: '/channel/shop/list/add/info',
                  },
                  {
                    path: '/channel/shop/list/add/info',
                    component: './Channel/CompanyAdd/StepForm/Step1',
                  },
                  /* {
                    path: '/store/products/cartypestore/add/confirm',
                    component: './Storage/Products/CarTypeAdd/StepForm/Step2',
                  },
                  {
                    path: '/store/products/cartypestore/add/cofigdetail',
                    component: './Storage/Products/CarTypeAdd/StepForm/Step3',
                  },
                  {
                    path: '/store/products/cartypestore/add/result',
                    component: './Storage/Products/CarTypeAdd/StepForm/Step4',
                  }, */
                ],
              },
            ]
          }

        ],
      },
      // 产品管理
      {
        path: '/goods',
        icon: 'appstore',
        name: 'goods',
        routes: [{
            path: '/goods/type/list',
            name: 'typeList',
            hideChildrenInMenu: true,
            routes: [{
                path: '/goods/type/list',
                component: './Goods/TypeList'
              },
              {
                path: '/goods/type/list/detail',
                name: 'detail',
                component: './Goods/TypeDetail'
              },
              {
                path: '/goods/type/list/add',
                name: 'add',
                hideInMenu: true,
                component: './Goods/TypeAdd/StepForm',
                routes: [{
                    path: '/goods/type/list/add',
                    redirect: '/goods/type/list/add/info',
                  },
                  {
                    path: '/goods/type/list/add/info',
                    component: './Goods/TypeAdd/StepForm/Step0.jsx',
                  },
                  {
                    path: '/goods/type/list/add/confirm',
                    component: './Goods/TypeAdd/StepForm/Step1.jsx',
                  },
                  {
                    path: '/goods/type/list/add/step2',
                    component: './Goods/TypeAdd/StepForm/Step2.jsx',
                  },
                  {
                    path: '/goods/type/list/add/step3',
                    component: './Goods/TypeAdd/StepForm/Step4.jsx',
                  },
                  {
                    path: '/goods/type/list/add/result',
                    component: './Goods/TypeAdd/StepForm/Step5.jsx',
                  }
                ],
              },
              {
                path: '/goods/type/list/edit',
                name: 'carTypeEdit',
                hideInMenu: true,
                component: './Goods/TypeAdd/StepForm',
                hideChildrenInMenu: true,
                routes: [{
                    path: '/goods/type/list/edit',
                    redirect: '/goods/type/list/edit/info',
                  },
                  {
                    path: '/goods/type/list/edit/info',
                    component: './Goods/TypeAdd/StepForm/Step0',
                  },
                  {
                    path: '/goods/type/list/edit/confirm',
                    component: './Goods/TypeAdd/StepForm/Step1',
                  },

                  {
                    path: '/goods/type/list/edit/step2',
                    component: './Goods/TypeAdd/StepForm/Step2.jsx',
                  },
                  {
                    path: '/goods/type/list/edit/step3',
                    component: './Goods/TypeAdd/StepForm/Step4.jsx',
                  },
                  {
                    path: '/goods/type/list/edit/result',
                    component: './Goods/TypeAdd/StepForm/Step5.jsx',
                  }
                ],
              },
            ]
          },
          {
            path: '/goods/plan/list',
            name: 'planList',
            hideChildrenInMenu: true,
            routes: [{
                path: '/goods/plan/list',
                component: './Goods/PlanList'
              },
              {
                path: '/goods/plan/list/detail',
                name: 'detail',
                component: './Goods/PlanDetail'
              },
              {
                path: '/goods/plan/list/add',
                name: 'add',
                hideInMenu: true,
                component: './Goods/PlanAdd/StepForm',
                routes: [{
                    path: '/goods/plan/list/add',
                    redirect: '/goods/plan/list/add/info',
                  },
                  {
                    path: '/goods/plan/list/add/info',
                    component: './Goods/PlanAdd/StepForm/Step1.jsx',
                  },
                  {
                    path: '/goods/plan/list/add/confirm',
                    component: './Goods/PlanAdd/StepForm/Step2.jsx',
                  },
                  {
                    path: '/goods/plan/list/add/step2',
                    component: './Goods/PlanAdd/StepForm/Step3.jsx',
                  },
                  {
                    path: '/goods/plan/list/add/step3',
                    component: './Goods/PlanAdd/StepForm/Step4.jsx',
                  },
                  {
                    path: '/goods/plan/list/add/result',
                    component: './Goods/PlanAdd/StepForm/Step5.jsx',
                  }
                ],
              },
              {
                path: '/goods/plan/list/edit',
                name: 'edit',
                hideInMenu: true,
                component: './Goods/PlanAdd/StepForm',
                routes: [{
                    path: '/goods/plan/list/edit',
                    redirect: '/goods/plan/list/edit/info',
                  },
                  {
                    path: '/goods/plan/list/edit/info',
                    component: './Goods/PlanAdd/StepForm/Step1.jsx',
                  },
                  {
                    path: '/goods/plan/list/edit/confirm',
                    component: './Goods/PlanAdd/StepForm/Step2.jsx',
                  },
                  {
                    path: '/goods/plan/list/edit/step2',
                    component: './Goods/PlanAdd/StepForm/Step3.jsx',
                  },
                  {
                    path: '/goods/plan/list/edit/step3',
                    component: './Goods/PlanAdd/StepForm/Step4.jsx',
                  },
                  {
                    path: '/goods/plan/list/edit/result',
                    component: './Goods/PlanAdd/StepForm/Step5.jsx',
                  }
                ],
              },
            ]
          }
        ],
      },
      {
        name: 'exception',
        icon: 'warning',
        path: '/exception',
        hideInMenu: true,
        routes: [
          // exception
          {
            path: '/exception/403',
            name: 'not-permission',
            component: './Exception/403',
          },
          {
            path: '/exception/404',
            name: 'not-find',
            component: './Exception/404',
          },
          {
            path: '/exception/500',
            name: 'server-error',
            component: './Exception/500',
          },
          {
            path: '/exception/trigger',
            name: 'trigger',
            hideInMenu: true,
            component: './Exception/TriggerException',
          },
        ],
      },
      // {
      //   name: 'account',
      //   icon: 'user',
      //   path: '/account',
      //   routes: [{
      //       path: '/account/center',
      //       name: 'center',
      //       component: './Account/Center/Center',
      //       routes: [{
      //           path: '/account/center',
      //           redirect: '/account/center/articles',
      //         },
      //         {
      //           path: '/account/center/articles',
      //           component: './Account/Center/Articles',
      //         },
      //         {
      //           path: '/account/center/articles',
      //           component: './Account/Center/Articles',
      //         },
      //         {
      //           path: '/account/center/applications',
      //           component: './Account/Center/Applications',
      //         },
      //         {
      //           path: '/account/center/projects',
      //           component: './Account/Center/Projects',
      //         },
      //       ],
      //     },
      //     {
      //       path: '/account/settings',
      //       name: 'settings',
      //       component: './Account/Settings/Info',
      //       routes: [{
      //           path: '/account/settings',
      //           redirect: '/account/settings/base',
      //         },
      //         {
      //           path: '/account/settings/base',
      //           component: './Account/Settings/BaseView',
      //         },
      //         {
      //           path: '/account/settings/security',
      //           component: './Account/Settings/SecurityView',
      //         },
      //         {
      //           path: '/account/settings/binding',
      //           component: './Account/Settings/BindingView',
      //         },
      //         {
      //           path: '/account/settings/notification',
      //           component: './Account/Settings/NotificationView',
      //         },
      //       ],
      //     },
      //   ],
      // },
      //个人中心
      {
        name: 'accountuser',
        icon: 'user',
        path: '/accountuser',
        routes: [{
            path: '/accountuser/center',
            name: 'center',
            component: './AccountUser/Center/index.jsx',
            routes: [{
              path: '/accountuser/center',
              redirect: '/accountuser/center/articles',
            }, ],
          },
          {
            path: '/accountuser/settings',
            name: 'settings',
            component: './AccountUser/Settings/index.jsx',
            routes: [{
                path: '/accountuser/settings',
                redirect: '/AccountUser/settings/base',
              },
              {
                path: '/accountuser/settings/base',
                component: './AccountUser/Settings/index.jsx',
              },
            ],
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
