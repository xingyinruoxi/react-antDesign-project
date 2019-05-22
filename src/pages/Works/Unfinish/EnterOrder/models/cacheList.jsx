import { cacheList } from '@/services/api';
export default {
  namespace: 'cacheList',
  state: [],
  effects: {
    *fetch({ payload, callBack }, { call, put }) {
      const res = yield call(cacheList, payload);
      const { msg, data } = res;
      yield put({
        type: 'save',
        payload: data,
      });
      if (callBack) callBack(msg, data);
    },
  },
  reducers: {
    save(state, { payload }) {
      return [...state, ...payload];
    },
  },
};
