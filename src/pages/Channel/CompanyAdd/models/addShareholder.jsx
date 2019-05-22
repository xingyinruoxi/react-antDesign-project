import {queryAddShareholder} from '@/services/api';

export default {
  namespace: 'addShareholder', 
  state: [],
  effects: {
    *step2({ payload,callBack }, { call, put }) {
      const response = yield call(queryAddShareholder, payload);
      const {msg,data:id}=response;
      if(callBack) callBack(msg,id)
    },
    
  },

  reducers: {
    save(state, action) {
      const {payload}=action;
      return [
        ...state,
      ];
    },
  },
};
