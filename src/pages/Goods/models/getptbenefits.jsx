import { queryGoodTypeStep4 } from '@/services/api';

export default {
  namespace: 'getptbenefits',
  state: [],
  effects: {
    *fetch({ payload, callBack }, { call, put }) {
      const res = yield call(queryGoodTypeStep4, payload);
      const { data, msg } = res;
      yield put({
        type: 'save',
        payload: data,
      });
      if (callBack) callBack(msg,data);
    },
  },

  reducers: {
    save(state, action) {
      const { payload } = action;
      return [
        ...state,
        ...payload,
      ];
    },
  },
};
