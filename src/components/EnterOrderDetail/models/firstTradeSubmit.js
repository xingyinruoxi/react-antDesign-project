import {queryFirstTradeSubmit } from '@/services/api';

export default {
  namespace: 'firstTradeSubmit',
  state: {},
  effects: {
    *submit({ payload,callBack }, { call, put }) {
      const response = yield call(queryFirstTradeSubmit, payload);
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
