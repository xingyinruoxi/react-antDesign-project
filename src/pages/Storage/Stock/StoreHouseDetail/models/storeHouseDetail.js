import {queryStoreHouseDetail} from '@/services/api';

export default {
  namespace: 'storeHouseDetail',
  state: {},
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryStoreHouseDetail, payload);
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
