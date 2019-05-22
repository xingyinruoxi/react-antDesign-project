import {queryCompanyDetail} from '@/services/api';

export default {
  namespace: 'companyDetail',
  state: {},
  effects: {
    *fetch({ payload,callBack }, { call, put }) {
      const response = yield call(queryCompanyDetail, payload);
      yield put({
        type: 'save',
        payload: response.data,
      });
      if(callBack) callBack()
    },
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
