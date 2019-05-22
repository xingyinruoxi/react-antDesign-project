import {queryPayCarSubmit } from '@/services/api';

export default {
  namespace: 'payCarSubmit',
  state: {},
  effects: {
    *submit({ payload,callBack }, { call, put }) {
      const response = yield call(queryPayCarSubmit, payload);
      const {msg}=response;
      yield put({
        type: 'save',
        payload: response.data,
      });
      if(callBack) callBack(msg)
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
