import {queryStoreHouseAdd,queryStoreHouseUpdate} from '@/services/api';
export default {
  namespace: 'storeHouseAdd',
  state: {},
  effects: {
    * submit({payload,callback}, {call,put}) {
      const {data,msg} = yield call(queryStoreHouseAdd, payload);
      yield put({
        type: 'save',
        payload:data,
      });
      if (callback) callback(msg);
    },
    *update({ payload, callback }, { call, put }) {
      const response = yield call(queryStoreHouseUpdate, payload);
      yield put({
        type: 'edit',
        payload: response,
      });
      if (callback) callback();
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
       */
  },

  reducers: {
    save(state, action) {
      const {payload}=action;
      return {
        ...state,
        ...payload,
      };
    },
    edit(state, action) {
      const {payload}=action;
      return {
        ...state,
        ...payload,
      };
    },
  },
};
