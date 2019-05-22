import { goodTypeStep3List } from '@/services/api';

export default {
  namespace: 'getptplanperiods',
  state: [],
  effects: {
    *fetch({ payload, callBack }, { call, put }) {
      const res = yield call(goodTypeStep3List, payload);
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
