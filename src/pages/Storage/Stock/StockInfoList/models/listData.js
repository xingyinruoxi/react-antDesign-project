import {queryStoreInfoList} from '@/services/api';

export default {
  namespace: 'listData',

  state: {
    formValues:{}
  },

  effects: {
    * fetch({payload }, {call,put}) {
      const {data} = yield call(queryStoreInfoList, payload);
      yield put({
        type: 'save',
        payload: {...data,formValues:{...payload.queryCondition}},
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
