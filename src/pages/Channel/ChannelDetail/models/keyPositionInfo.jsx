import {queryKeyPositionInfo} from '@/services/api';

export default {
  namespace: 'keyPositionInfo',
  state: {
    formValues:{}
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const {data} = yield call(queryKeyPositionInfo, payload);   
      yield put({
        type: 'save',
        payload: {...data},
      });
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
