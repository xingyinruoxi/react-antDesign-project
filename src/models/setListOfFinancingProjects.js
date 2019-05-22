import {querySetListOfFinancingProjects} from '@/services/api';

export default {
  namespace: "setlistOfFinancingProjects",
  state: {},
  effects: {
    // 选择 融资项目
    *setListOfFinancingProjects({ payload,callback }, { call, put }) {
        const response = yield call(querySetListOfFinancingProjects, payload);
        yield put({
        type: 'saveStepFormData',
        payload: response.data,
        });
        if (callback) callback(response.msg,response.data);
    },

  },
  reducers: {
    saveStepFormData(state, { payload }) {
      return{
         ...state,
        ...payload,
      }
    },
  },
};
