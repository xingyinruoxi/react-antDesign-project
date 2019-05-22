import {addpschannelrelas} from '@/services/api';

export default {
  namespace: 'addpschannelrelas',
  state: {
    formValues:{}
  },
  effects: {
    *submit({ payload ,callBack}, { call, put }) {
      const res = yield call(addpschannelrelas, payload);   
      const {msg,data}=res;
      yield put({
        type: 'save',
        payload:data,
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
