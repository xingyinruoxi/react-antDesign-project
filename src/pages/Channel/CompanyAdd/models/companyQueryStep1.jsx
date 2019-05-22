import {queryFindCompany} from '@/services/api';

export default {
  namespace: 'companyQueryStep1',
  state: {},
  effects: {
    *fetch({ payload,callBack }, { call, put }) {
      const response = yield call(queryFindCompany, payload);
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
