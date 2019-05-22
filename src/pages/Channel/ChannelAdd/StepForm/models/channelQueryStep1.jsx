import {queryFindChannel} from '@/services/api';

export default {
  namespace: 'channelQueryStep1',
  state: {},
  effects: {
    *fetch({ payload,callBack }, { call, put }) {
      const res = yield call(queryFindChannel, payload);
      yield put({
        type: 'save',
        payload: res.data,
      });
      if(callBack) callBack()
    },
  },

  reducers: {
    save(state, action) {
      const {payload}=action;
      return {
        ...state,
        ...payload,
      };
    },
  },
};
