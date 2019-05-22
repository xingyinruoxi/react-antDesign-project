import {queryAddMainBusiness} from '@/services/api';

export default {
  namespace: 'addMainBusiness', 
  state: [],
  effects: {
    *step2({ payload,callBack }, { call, put }) {
      const response = yield call(queryAddMainBusiness, payload);
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
