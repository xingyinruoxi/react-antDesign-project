import { goodTypeMaintenance } from '@/services/api';

export default {
  namespace: 'maintenance',
  state: [],
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(goodTypeMaintenance, payload);
      yield put({
        type: 'save', 
        payload: response.data,
      });
    },
  },

  reducers: {
    save(state, action) {
      const {payload}=action
      return {
        ...state,
        ...payload,
      };
    },
  },
};
