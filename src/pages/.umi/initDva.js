import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});

app.model({ namespace: 'brandEnd', ...(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/models/brandEnd.js').default) });
app.model({ namespace: 'brandParent', ...(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/models/brandParent.js').default) });
app.model({ namespace: 'channelDetail', ...(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/models/channelDetail.js').default) });
app.model({ namespace: 'companyDetail', ...(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/models/companyDetail.js').default) });
app.model({ namespace: 'customerInfo', ...(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/models/customerInfo.js').default) });
app.model({ namespace: 'enterOrderDetail', ...(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/models/enterOrderDetail.js').default) });
app.model({ namespace: 'geographic', ...(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/models/geographic.js').default) });
app.model({ namespace: 'getMenuNamesByRole', ...(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/models/getMenuNamesByRole.jsx').default) });
app.model({ namespace: 'global', ...(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/models/global.js').default) });
app.model({ namespace: 'listOfFinancingProjects', ...(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/models/listOfFinancingProjects.js').default) });
app.model({ namespace: 'login', ...(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/models/login.js').default) });
app.model({ namespace: 'menu', ...(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/models/menu.js').default) });
app.model({ namespace: 'orderDetail', ...(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/models/orderDetail.js').default) });
app.model({ namespace: 'orderStatusType', ...(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/models/orderStatusType.js').default) });
app.model({ namespace: 'planlist', ...(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/models/planlist.js').default) });
app.model({ namespace: 'previousStepTypeDetail', ...(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/models/previousStepTypeDetail.jsx').default) });
app.model({ namespace: 'proClassEnd', ...(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/models/proClassEnd.js').default) });
app.model({ namespace: 'proClassParent', ...(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/models/proClassParent.js').default) });
app.model({ namespace: 'project', ...(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/models/project.js').default) });
app.model({ namespace: 'setListOfFinancingProjects', ...(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/models/setListOfFinancingProjects.js').default) });
app.model({ namespace: 'setting', ...(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/models/setting.js').default) });
app.model({ namespace: 'tradeList', ...(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/models/tradeList.js').default) });
app.model({ namespace: 'typeData', ...(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/models/typeData.jsx').default) });
app.model({ namespace: 'typeDataTotal', ...(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/models/typeDataTotal.js').default) });
app.model({ namespace: 'userInfo', ...(require('/Users/linzhou/Documents/workspace/orafl-flcs-web/src/models/userInfo.jsx').default) });
