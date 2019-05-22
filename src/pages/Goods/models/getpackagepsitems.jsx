import { queryTaxRevenueDetail } from '@/services/api';

export default {
  namespace: 'getpackagepsitems',
  state: [],
  effects: {
    *fetch({ payload, callBack }, { call, put }) {
      const res = yield call(queryTaxRevenueDetail, payload);
      const { data, msg } = res;
      const obj={};
      data.forEach(({itemKey,itemAmount})=>{
        obj[itemKey]=itemAmount;
      })
      yield put({
        type: 'save',
        payload: data,
      });
      if (callBack) callBack(msg, obj);
    },
  },

  reducers: {
    save(state, action) {
      const { payload } = action;
      return [...state, ...payload];
    },
  },
};
