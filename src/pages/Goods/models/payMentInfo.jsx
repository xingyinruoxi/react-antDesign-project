import { queryPtFirstPayMentDetail } from '@/services/api';
import {accMul} from '@/utils/utils'
export default {
  namespace: 'payMentInfo',
  state: {},
  effects: {
    *fetch({ payload ,callBack}, { call, put }) {
      const res = yield call(queryPtFirstPayMentDetail, payload);
      const {data,msg}=res;
      const {minProportion,maxProportion}=data[0];
      if(maxProportion){
        data[0].maxProportion=accMul(100,maxProportion);
        data[0].minProportion=accMul(100,minProportion);
      }
      yield put({
        type: 'save',
        payload: data[0],
      });
      if(callBack) callBack(msg,data[0])
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
