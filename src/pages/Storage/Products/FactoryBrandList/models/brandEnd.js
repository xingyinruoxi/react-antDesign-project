import {
  queryProClassEnd
} from '@/services/api';

export default {
  namespace: 'brandEnd',

  state: [],

  effects: {
    * fetch({payload}, {call,put}) {
      const res = yield call(queryProClassEnd, payload);
      yield put({
        type: 'save',
        payload: res.data,
      });
    },
    /* *add({ payload, callback }, { call, put }) {
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
      const {
        payload
      } = action;
      return [...payload]
    },
  },
};
