import { transferList } from '@/services/api';

export default {
  namespace: 'transferList',
  state: {},
  effects: {
    *fetch({ payload }, { call, put }) {
      const res = yield call(transferList, payload);
      const { data, msg } = res;
      yield put({
        type: 'save',
        payload: data,
      });
    },
  },

  reducers: {
    save(state, action) {
      const { payload } = action;
      return {...state, ...payload};
    },
  },
};
