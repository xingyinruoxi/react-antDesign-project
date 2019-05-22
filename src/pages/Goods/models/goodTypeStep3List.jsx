import { goodTypeStep3List } from '@/services/api';
export default {
  namespace: 'goodTypeStep3List',
  state: [],
  effects: {
    *fetch({ payload ,callBack}, { call, put }) {
      const res = yield call(goodTypeStep3List, payload);
      const {msg,data}=res;
      yield put({
        type: 'save',
        payload: res.data,
      });
      if(callBack) callBack(msg,data)
    },
  },
  reducers: {
    save(state, { payload }) {
      return [...state, ...payload];
    },
  },
};
