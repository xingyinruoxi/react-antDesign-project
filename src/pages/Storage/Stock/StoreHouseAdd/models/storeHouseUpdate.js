import {queryStoreHouseUpdate} from '@/services/api';
export default {
  namespace: 'storeHouseUpdate',
  state: {},
  effects: {
    * submit({payload,callback}, {call,put}) {
      const {data,msg} = yield call(queryStoreHouseUpdate, payload);
      yield put({
        type: 'save',
        payload:data,
      });
      if (callback) callback(msg);

    },
    /*   *add({ payload, callback }, { call, put }) {
        const response = yield call(addRule, payload);
        yield put({
          type: 'save',
          payload: response,
        });
        if (callback) callback();
      },
      *remove({ payload, callback }, { call, put }) {
        const response = yield call(removeRule, payload);
        yield put({
          type: 'save',
          payload: response,
        });
        if (callback) callback();
      },
      *update({ payload, callback }, { call, put }) {
        const response = yield call(updateRule, payload);
        yield put({
          type: 'save',
          payload: response,
        });
        if (callback) callback();
      }, */
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
