import { getTypeData } from '@/services/api';

export default {
  namespace: 'typeData',
  state: {},
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(getTypeData, payload);
      yield put({
        type: 'save',
        payload: response.data,
      });
    },
    *clear(_, { put }) {
      yield put({
        type: 'save',
        payload: {
          clear: true,
        },
      });
    },
  },

  reducers: {
    save(state, action) {
      const { payload } = action;
      if (payload.clear) {
        state = {};
      }
      return {
        ...state,
        ...payload,
      };
    },
  },
};
