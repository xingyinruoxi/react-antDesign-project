import { deleteptlist } from '@/services/api';

export default {
  namespace: 'deleteptlist',
  state: {},
  effects: {
    *fetch({ payload ,callBack}, { call, put }) {
      const res = yield call(deleteptlist, payload);
      const {msg,data}=res;
      yield put({
        type: 'save',
        payload: data,
      });
      if(callBack) callBack(msg)
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
