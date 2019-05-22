import {queryChannelInfo,queryChannelImportant,querySaveUpload} from '@/services/api';

export default {
  namespace: 'channelAdd',
  state: {},
  effects: {
    *baseInfo({ payload,callBack }, { call, put }) {
      const res = yield call(queryChannelInfo, payload);
      const {msg,data}=res;
      yield put({
        type: 'save',
        payload: res.data,
      });
      if(callBack) callBack(msg,data)
    },
    *step2({ payload,callBack }, { call, put }) {
      const res = yield call(queryChannelImportant, payload);
      const {msg,data}=res;
      yield put({
        type: 'save',
      });
      if(callBack) callBack(msg,data)
    },
    *step3({ payload,callBack }, { call, put }) {
      const res = yield call(querySaveUpload, payload);
      const {msg}=res;
      yield put({
        type: 'save',
        payload: res.data,
      });
      if(callBack) callBack(msg)
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
