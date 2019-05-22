import { queryGoodTypeStep2 } from '@/services/api';
import {accMul} from '@/utils/utils'
export default {
  namespace: 'getptpayments',
  state: [],
  effects: {
    *fetch({ payload ,callBack}, { call, put }) {
      const res = yield call(queryGoodTypeStep2, payload);
      const {data,msg}=res;
      const newData=data.map(item=>{
        const {minProportion,maxProportion,proportion}=item;
        if(minProportion){
          item.minProportion=accMul(100,minProportion);
          item.maxProportion=accMul(100,maxProportion);
        }
        if(proportion){
          item.proportion=accMul(100,proportion);
        }
        return {
          ...item
        }
      })
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
      return [
        ...state,
        ...payload,
      ];
    },
  },
};
