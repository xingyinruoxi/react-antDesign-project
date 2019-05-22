import {getTypeData } from '@/services/api';

export default {
  namespace: 'orderStatusType',
  state: {},
  effects: {
    *fetch({ payload,callBack }, { call, put }) {
      const response = yield call(getTypeData, payload);
      const {msg,data} = response
      yield put({
        type: 'save',
        payload: data,
      });
      if(callBack) callBack(data,msg)
    },
    *clear(_, { put }) {
      yield put({
        type: 'save',
        payload: {
          clear:true
        },
      });
    }
  },

  reducers: {
    save(state, action) {
      const { payload } = action;
      if (payload.clear) {
        state = {};
      }
      return {
        ...state,
        ...payload,
      };
    },
  },
};
