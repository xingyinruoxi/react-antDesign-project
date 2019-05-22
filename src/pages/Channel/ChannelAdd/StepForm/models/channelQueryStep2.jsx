import {queryFindChannel2} from '@/services/api';

export default {
  namespace: 'channelQueryStep2',
  state: {},
  effects: {
    *fetch({ payload,callBack }, { call, put }) {
      const response = yield call(queryFindChannel2, payload);
      yield put({
        type: 'save',
        payload: response.data,
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
