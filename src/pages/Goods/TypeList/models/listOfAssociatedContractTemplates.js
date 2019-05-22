import { querylistOfAssociatedContractTemplates } from '@/services/api';

export default {
  namespace: 'listOfAssociatedContractTemplates',
  state: {
    formValues: {},
  },
  effects: {
    *listOfAssociatedContractTemplates({ payload }, { call, put }) {
      const { data } = yield call(querylistOfAssociatedContractTemplates, payload);
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
