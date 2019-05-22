import {queryReTradeSubmit } from '@/services/api';

export default {
  namespace: 'reTradeSubmit',
  state: {},
  effects: {
    *submit({ payload,callBack }, { call, put }) {
      const response = yield call(queryReTradeSubmit, payload);
      const {msg}=response;
      yield put({
        type: 'save',
        payload: response
      });
      if(callBack) callBack(msg);
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
