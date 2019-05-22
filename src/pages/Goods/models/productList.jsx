import { queryCarTypeList } from '@/services/api';

export default {
  namespace: 'productList',
  state: [],

  effects: {
    *fetch({ payload,callBack }, { call, put }) {
      const { msg,data } = yield call(queryCarTypeList, payload);
      yield put({
        type: 'save',
        payload: data.list,
      });
      if(callBack) callBack(msg,data.list)
    },
  },

  reducers: {
    save(state, action) {
      const { payload } = action;
      return [...state, ...payload];
    },
  },
};
