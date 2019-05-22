import { getMenuNamesByRole } from '@/services/api';

export default {
  namespace: 'getMenuNamesByRole',
  state: {},
  effects: {
    *fetch({ payload,callBack }, { call, put }) {
      const res = yield call(getMenuNamesByRole, payload);
      const { data,msg}=res;
      yield put({
        type: 'save',
        payload: data,
      });
      if(callBack) callBack(msg,data);
    },
  },

  reducers: {
    save(state, action) {
      const { payload } = action;
      return { ...payload };
    },
  },
};