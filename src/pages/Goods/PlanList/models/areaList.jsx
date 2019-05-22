import { queryBatchManagemenAll } from '@/services/api';

export default {
  namespace: 'areaList2',
  state: {
    formValues: {},
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const res = yield call(queryBatchManagemenAll, payload);
      const { data } = res;
      yield put({
        type: 'save',
        payload: { ...data, formValues: { ...payload.queryCondition } },
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
