import {queryChannelUpdate} from '@/services/api';

export default {
  namespace: 'channelUpdate',
  state: {},
  effects: {
    *submit({ payload,callBack }, { call, put }) {
      const {msg} = yield call(queryChannelUpdate, payload);
      const {data:{id}}=payload;
      yield put({
        type: 'save',
        payload: msg
      });
      if(callBack) callBack(msg,id)
    }
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
