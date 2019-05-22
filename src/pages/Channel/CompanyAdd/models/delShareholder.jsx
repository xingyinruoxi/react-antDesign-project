import {queryDelShareholder} from '@/services/api';

export default {
  namespace: 'delShareholder', 
  state: [],
  effects: {
    *step2({ payload,callBack }, { call, put }) {
      const response = yield call(queryDelShareholder, payload);
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
