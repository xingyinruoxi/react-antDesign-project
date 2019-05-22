import {queryProClassEnd } from '@/services/api';

export default {
  namespace: 'proClassEnd',
  state: [],
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryProClassEnd, payload);
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
