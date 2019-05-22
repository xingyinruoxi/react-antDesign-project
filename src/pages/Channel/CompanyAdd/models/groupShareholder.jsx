import {queryShareholder} from '@/services/api';

export default {
  namespace: 'groupShareholder', 
  state: [],
  effects: {
    *step2({ payload,callBack }, { call, put }) {
      const response = yield call(queryShareholder, payload);
      const {msg,data}=response;
      yield put({
        type: 'save',
        payload:data,
      });
      if(callBack) callBack(msg,data)
    },
    
  },

  reducers: {
    save(state, action) {
      const {payload}=action;
      return [
        ...state,
        ...payload
      ];
    },
  },
};
