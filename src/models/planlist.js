import {queryPlanlist} from '@/services/api';

export default {
  namespace: 'planList',
  state: [],
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryPlanlist, payload);
      yield put({
        type: 'save',
        payload: response.data,
      });
    }
  },

  reducers: {
    save(state, action) {
      const {payload}=action;
      return [
        ...state,
        ...payload,
      ];
    },
  },
};
