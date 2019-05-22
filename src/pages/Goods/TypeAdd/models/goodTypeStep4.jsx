import { queryGoodTypeStep4, moneyListAdd } from '@/services/api';
export default {
  namespace: 'goodTypeStep4',
  state: [],
  effects: {
    *fetch({ payload, callBack }, { call, put }) {
      const res = yield call(queryGoodTypeStep4, payload);
      const { msg ,data} = res;
    /*   data.map(item=>{
        const {minProportion,maxProportion}=item;
        if(minProportion){
          item.minProportion=(minProportion*100).toFixed(2);
          item.maxProportion=(maxProportion*100).toFixed(2);
        }
        return {
          ...item
        }
      }) */
   
      yield put({
        type: 'save',
        payload:data,
      });
      if (callBack) callBack(msg,data);
    },
    *moneyAdd({ payload, callBack }, { call }) {
      const res = yield call(moneyListAdd, payload);
      const { msg ,data} = res;
      const newData=data?data.id:'';
      if (callBack) callBack(msg,newData);
    },
  },
  reducers: {
    save(state, { payload }) {
      return [
        ...state,
        ...payload,
      ];
    },
  },
};
