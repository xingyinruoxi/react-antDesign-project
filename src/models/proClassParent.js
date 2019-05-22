import {queryProClassParent } from '@/services/api';

export default {
  namespace: 'proClassParent',
  state: [],
  effects: {
    *fetch({ payload,callBack }, { call, put }) {
      const res = yield call(queryProClassParent, payload);
      const {msg,data}=res;
      yield put({
        type: 'save',
        payload: res.data,
      });
      if(callBack) callBack(msg,data)
    }
  },

  reducers: {
    save(state, action) {
      const {payload}=action;
      return [...payload]
    },
  },
};
