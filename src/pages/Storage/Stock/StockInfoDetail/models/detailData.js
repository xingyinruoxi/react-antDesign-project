import {queryStoreInfoDetail} from '@/services/api';

export default {
  namespace: 'detailData',
  state: {
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryStoreInfoDetail, payload);
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
