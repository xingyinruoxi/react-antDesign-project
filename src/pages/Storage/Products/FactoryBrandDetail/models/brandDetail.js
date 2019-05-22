import {queryBrandDetail } from '@/services/api';

export default {
  namespace: 'brandDetail',
  state: {},
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryBrandDetail, payload);
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
