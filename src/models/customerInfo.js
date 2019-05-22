import {queryCustomerInfo } from '@/services/api';

export default {
  namespace: 'customerInfo',
  state: {},
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryCustomerInfo, payload);
      yield put({
        type: 'save',
        payload: response.data,
      });
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
