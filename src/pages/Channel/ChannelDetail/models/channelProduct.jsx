import {queryChannelProduct} from '@/services/api';

export default {
  namespace: 'channelProduct',
  state: {
    formValues:{}
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const {data} = yield call(queryChannelProduct, payload);     
      yield put({
        type: 'save',
        payload: {...data,formValues:{...payload.queryCondition}},
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
