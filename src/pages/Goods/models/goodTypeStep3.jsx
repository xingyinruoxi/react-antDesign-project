import {queryGoodTypeStep3} from '@/services/api';
export default {
  namespace: "goodTypeStep3",
  state: {
  },
  effects: {
    *fetch({ payload,callBack }, { call, put }) {
        const res = yield call(queryGoodTypeStep3, payload);
        const {msg}=res;
        yield put({
        type: 'save',
        payload: res.data,
        });
        if (callBack) callBack(msg);
    },
  },
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    },
  },
};
