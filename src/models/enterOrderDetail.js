import {queryEnterOrderDetail } from '@/services/api';

export default {
  namespace: 'enterOrderDetail',
  state: {
  },
  effects: {
    *fetch({ payload,callBack }, { call, put }) {
      const response = yield call(queryEnterOrderDetail, payload);
      const {tradeInfo:{tbCustomerInfoId}}=response.data;
      yield put({
        type: 'save',
        payload: response.data,
      });
      if(callBack) callBack(tbCustomerInfoId);
    }
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
