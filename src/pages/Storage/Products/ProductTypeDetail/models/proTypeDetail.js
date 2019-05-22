import {queryProTypeDetail} from '@/services/api';

export default {
  namespace: 'proTypeDetail',
  state: {},
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryProTypeDetail, payload);
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
