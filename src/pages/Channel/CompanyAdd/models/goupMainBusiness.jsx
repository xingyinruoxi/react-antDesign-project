import {queryGoupMainBusiness} from '@/services/api';

export default {
  namespace: 'goupMainBusiness', 
  state: [],
  effects: {
    *step2({ payload,callBack }, { call, put }) {
      const response = yield call(queryGoupMainBusiness, payload);
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
