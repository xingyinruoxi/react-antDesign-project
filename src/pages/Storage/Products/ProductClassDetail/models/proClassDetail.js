import {queryProClassDetail } from '@/services/api';

export default {
  namespace: 'proClassDetail',
  state: {},
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryProClassDetail, payload);
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
