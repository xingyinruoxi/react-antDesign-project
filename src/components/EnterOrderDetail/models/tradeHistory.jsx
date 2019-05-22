import { queryTradeHistory } from '@/services/api';

export default {
  namespace: 'tradeHistory',
  state: [],
  effects: {
    *fetch({ payload }, { call, put }) {
      const res = yield call(queryTradeHistory, payload);
      const { msg } = res;
      yield put({
        type: 'save',
        payload: res.data,
      });
    },
  },

  reducers: {
    save(state, action) {
      const { payload } = action;
      return { ...state, ...payload };
    },
  },
};
