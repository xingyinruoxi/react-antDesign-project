import { getpschannelrelas } from '@/services/api';

export default {
  namespace: 'getpschannelrelas',
  state: [],
  effects: {
    *fetch({ payload ,callBack}, { call, put }) {
      const { msg,data } = yield call(getpschannelrelas, payload);
      yield put({
        type: 'save',
        payload: data,
      });
      if(callBack) callBack(msg,data)
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
