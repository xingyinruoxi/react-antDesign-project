import { tranferSub } from '@/services/api';

export default {
  namespace: 'tranferSub',
  state: {},
  effects: {
    *submit({ payload,callBack }, { call, put }) {
      const res = yield call(tranferSub, payload);
      const { data, msg } = res;
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
      return {...state, ...payload};
    },
  },
};
