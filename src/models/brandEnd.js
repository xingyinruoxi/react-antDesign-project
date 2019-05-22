import {
    queryBrandEnd2
  } from '@/services/api';
  
  export default {
    namespace: 'brandEnd2',
  
    state: [],
  
    effects: {
      * fetch({payload}, {call,put}) {
        const {
          data
        } = yield call(queryBrandEnd2, payload);
        yield put({
          type: 'save',
          payload: data,
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
  