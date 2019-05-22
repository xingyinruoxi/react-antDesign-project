import {getTypeData } from '@/services/api';

export default {
  namespace: 'typeDataCar',
  state: {},
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(getTypeData, payload);
      yield put({
        type: 'save',
        payload: response.data,
      });
    }
  },

  reducers: {
    save(state, action) {
      const {payload}=action;
      return {
        ...state,
        ...payload,
      };
    },
  },
};
