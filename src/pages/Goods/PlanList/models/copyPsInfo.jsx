import { copyPsInfo } from '@/services/api';

export default {
  namespace: 'copyPsInfo',
  state: {
  },
  effects: {
    *submit({ payload, callBack }, { call, put }) {
      const res = yield call(copyPsInfo, payload);
      const { msg,data } = res;
      yield put({
        type: 'save',
        payload: data
      });
      if (callBack) callBack(msg,data);
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
