import {queryAllChannel} from '@/services/api';

export default {
  namespace: 'allChannel',
  state: [
    // formValues:{}
  ],
  effects: {
    *fetch({ payload,callBack }, { call, put }) {
      const res = yield call(queryAllChannel, payload);    
      const { msg, data } = res;
      yield put({
        type: 'save',
        payload: data,
      });
      if (callBack) callBack(msg, data)
    },
  },

  reducers: {
    save(state, action) {
      const {payload}=action;
      return [
        ...state,
        ...payload,
      ];
    },
  },
};
