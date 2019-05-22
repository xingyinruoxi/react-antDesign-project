import { queryGoodTypeDetail } from '@/services/api';
import {accMul} from '@/utils/utils'
export default {
  namespace: 'getptinfo',
  state: {},
  effects: {
    *fetch({ payload ,callBack}, { call, put }) {
      const res = yield call(queryGoodTypeDetail, payload);
      const {data,msg}=res;
      const {minInterest,maxInterest,minProportion,maxProportion}=data;
      if(minInterest){
        data.minInterest=accMul(100,minInterest);
        data.maxInterest=accMul(100,maxInterest);
      }
      if(minProportion){
        data.minProportion=accMul(100,minProportion);
      }
      if(maxProportion){
        data.maxProportion=accMul(100,maxProportion);
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
