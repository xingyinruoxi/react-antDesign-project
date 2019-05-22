import { changeCustomer } from '@/services/api';

export default {
  namespace: 'changeCustomer',
  state: {},
  effects: {
    *submit({ payload, callBack }, { call, put }) {
      const res = yield call(changeCustomer, payload);
      const { msg, data } = res;
      yield put({
        type: 'save',
        payload: data,
      });
      if (callBack) callBack(msg, data);
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
