import { queryBatchManagemenAll } from '@/services/api';

export default {
  namespace: 'batchManagemen',
  state: {
    formValues: {},
  },
  effects: {
    // 批量关联渠道
    *batchManagemenAll({ payload }, { call, put }) {
      const { data } = yield call(queryBatchManagemenAll, payload);
      yield put({
        type: 'save',
        payload: {
          batchManagemenAllValues: { ...data },
          formValues: { ...payload.queryCondition },
        },
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
