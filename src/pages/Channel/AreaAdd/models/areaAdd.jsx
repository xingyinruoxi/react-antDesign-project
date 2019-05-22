import {queryAreaInfoAdd} from '@/services/api';

export default {
  namespace: 'areaInfoAdd',
  state: {},
  effects: {
    *fetch({ payload,callBack }, { call, put }) {
      const response = yield call(queryAreaInfoAdd, payload);
      const {msg,data}=response;
      yield put({
        type: 'save',
        payload: data,
      });
      if(callBack) callBack(msg)
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
