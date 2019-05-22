import {queryChannelImportInfo} from '@/services/api';

export default {
  namespace: 'channelImportInfo',
  state: {
    formValues:{}
  },
  effects: {
    *fetch({ payload,callBack }, { call, put }) {
      const res = yield call(queryChannelImportInfo, payload);    
      const { msg, data } = res;
      yield put({
        type: 'save',
        payload: {...data,formValues:{...payload.queryCondition}},
      });
      if (callBack) callBack(msg, data)
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
