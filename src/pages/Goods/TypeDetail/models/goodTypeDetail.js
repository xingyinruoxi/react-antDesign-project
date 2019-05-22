import { queryGoodTypeDetail } from '@/services/api';

export default {
  namespace: 'goodTypeDetail',
  state: {
  },
  effects: {
    *detail({ payload }, { call, put }) {
      const { data } = yield call(queryGoodTypeDetail, payload);
      yield put({
        type: 'save',
        payload:data,
      });
    },
  },

  reducers: {
    save(state, action) {
      const { payload } = action;
      return {
        ...state,
        ...payload,
      };
    },
  },
};
