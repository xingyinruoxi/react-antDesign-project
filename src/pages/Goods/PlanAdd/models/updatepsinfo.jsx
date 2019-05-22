import { querCommodityPricingInformation } from '@/services/api';

export default {
  namespace: 'updatepsinfo',
  state: {},
  effects: {
    *submit({ payload ,callBack}, { call, put }) {
      const res = yield call(querCommodityPricingInformation, payload);
      const {data,msg}=res;
      yield put({
        type: 'save',
        payload:data,
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
