import { queryCarTypeUpdate, deleteCarTypeImg } from '@/services/api';

export default {
  namespace: 'carTypeUpdate',
  state: {},
  effects: {
    *submit({ payload, callBack }, { call, put }) {
      const { msg } = yield call(queryCarTypeUpdate, payload);
      const {
        data: { id },
      } = payload;
      yield put({
        type: 'save',
        payload: msg,
      });
      if (callBack) callBack(msg, id);
    },
    *deleteImg({ payload, callBack }, { call }) {
      const res = yield call(deleteCarTypeImg, payload);
      const { msg } = res;
      if (callBack) callBack(msg);
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
