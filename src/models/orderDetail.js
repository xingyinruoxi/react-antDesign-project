import {queryOrderDetail } from '@/services/api';

export default {
  namespace: 'orderDetail',
  state: {},
  effects: {
    *fetch({ payload,callBack }, { call, put }) {
      const response = yield call(queryOrderDetail, payload);
      // const {tradeInfo:{tbCustomerInfoId}}=response.data;
      yield put({
        type: 'save',
        payload: response.data,
      });
      // if(callBack) callBack(tbCustomerInfoId);
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
