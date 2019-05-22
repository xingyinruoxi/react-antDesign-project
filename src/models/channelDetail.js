import {queryChannelDetail} from '@/services/api';

export default {
  namespace: 'channelDetail',
  state: {},
  effects: {
    *fetch({ payload,callBack }, { call, put }) {
      const response = yield call(queryChannelDetail, payload);
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
