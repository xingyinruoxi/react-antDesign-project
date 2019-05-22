import {queryEnterOrderList} from '@/services/api';

export default {
  namespace: 'enterOrderList',
  state: {
    formValues:{}
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const {data,data:{list}} = yield call(queryEnterOrderList, payload);  
      data.list=list.length>0&&list.filter(({tbTradeInfoDTO:{status}})=>{
        return status!=='2007'&&status!=='2008'
      })
      yield put({
        type: 'save',
        payload: {...data,formValues:{...payload.queryCondition}},
      });
    },
    
  },

  reducers: {
    save(state, action) {
      const {payload}=action;
      return {
        ...state,
        ...payload,
      };
    },
  },
};
