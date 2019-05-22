import {queryCarTypeConfig} from '@/services/api';

export default {
  namespace: 'carTypeConfig',
  state: {},
  effects: {
    *fetch({ payload,callBack }, { call, put }) {
      const res = yield call(queryCarTypeConfig, payload);
      const {msg,data}=res;
      yield put({
        type: 'save',
        payload:data,
      });
      if(callBack) callBack(msg,data);
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
