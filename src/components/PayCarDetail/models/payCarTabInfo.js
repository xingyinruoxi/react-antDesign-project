import {queryPayCarTabInfo } from '@/services/api';

export default {
  namespace: 'payCarTabInfo',
  state: {},
  effects: {
    *fetch({ payload,callBack }, { call, put }) {
      const res = yield call(queryPayCarTabInfo, payload);
      const {msg,data}=res;
      yield put({
        type: 'save',
        payload: res.data,
      });
      if(callBack) callBack(msg,data)
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
