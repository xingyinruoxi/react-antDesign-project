import { queryTotalFinancingDetail } from '@/services/api';
import {accMul} from '@/utils/utils'
export default {
  namespace: 'getpsinfo',
  state: {},
  effects: {
       *fetch({ payload ,callBack}, { call, put }) {
      const res = yield call(queryTotalFinancingDetail, payload);
      const {data,msg}=res;
      const {firstPaymentProperty,lastPaymentProperty,schemaInterest}=data;
      if(firstPaymentProperty){
        data.firstPaymentProperty=accMul(100,firstPaymentProperty)
      }
      if(lastPaymentProperty){
        data.lastPaymentProperty=accMul(100,lastPaymentProperty)
      }
      if(schemaInterest){
        data.schemaInterest=accMul(100,schemaInterest)
      }
      yield put({
        type: 'save',
        payload: data,
      });
      if(callBack) callBack(msg,data)
    },
  },

  reducers: {
    save(state, action) {
      const { payload } = action;
      return {
        ...state,
        ...payload,
      };
    },
  },
};
