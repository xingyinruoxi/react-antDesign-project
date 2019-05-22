import {queryBrandParent } from '@/services/api';

export default {
  namespace: 'brandParent',
  state: [],
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryBrandParent, payload);
      yield put({
        type: 'save',
        payload: response.data,
      });
    }
  },

  reducers: {
    save(state, action) {
      const {payload}=action;
      return [...payload]
    },
  },
};
