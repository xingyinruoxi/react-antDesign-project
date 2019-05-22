import { queryUpdatePassword } from '@/services/api';

export default {
  namespace: 'updatePassword',
  state: [
    // formValues: {},
  ],
  effects: {
    *fetch({ payload,callBack }, { call, put }) {
      const response = yield call(queryUpdatePassword, payload);
      const {msg}=response;
      yield put({
        type: 'save',
      });
      if(callBack) callBack(msg)
    },
  },

  reducers: {
    save(state, action) {
      const { payload } = action;
      return [
        ...state,
        ...payload,
      ];
    },
  },
};
