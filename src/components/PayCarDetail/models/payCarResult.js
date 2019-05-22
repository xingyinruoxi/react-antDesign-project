import {queryPayCarResult } from '@/services/api';

export default {
  namespace: 'payCarResult',
  state: {},
  effects: {
    *fetch({ payload,callBack }, { call, put }) {
      const res = yield call(queryPayCarResult, payload);
      yield put({
        type: 'save',
        payload: res.data,
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
