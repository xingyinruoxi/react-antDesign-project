import {queryContactUserSub } from '@/services/api';

export default {
  namespace: 'contactUser',
  state: {},
  effects: {
    *submit({ payload,callBack }, { call, put }) {
      const response = yield call(queryContactUserSub, payload);
      const {msg}=response;
      yield put({
        type: 'save',
        payload: response.data,
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
