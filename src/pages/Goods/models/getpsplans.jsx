import { queryPlanlist } from '@/services/api';

export default {
  namespace: 'getpsplans',
  state: [],
  effects: {
    *fetch({ payload, callBack }, { call, put }) {
      const res = yield call(queryPlanlist, payload);
      const { data, msg } = res;
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
      return [...state, ...payload];
    },
  },
};
