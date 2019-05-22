import {queryUnfinishTermlist } from '@/services/api';

export default {
  namespace: 'unfinishTermlist',
  state: {
    formValues:{}
  },
  effects: {
    *fetch({ payload,callBack }, { call, put }) {
      const res = yield call(queryUnfinishTermlist, payload);
      const {msg}=res;
      yield put({
        type: 'save',
        payload: res.data,
      });
      if(callBack) callBack(msg);
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
