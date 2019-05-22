import { addCache } from '@/services/api';
export default {
  namespace: 'addCache',
  state: {},
  effects: {
    *submit({ payload, callBack }, { call, put }) {
      const res = yield call(addCache, payload);
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
      return { ...state, ...payload };
    },
  },
};
