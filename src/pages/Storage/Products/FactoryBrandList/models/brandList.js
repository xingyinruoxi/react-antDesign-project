import {queryBrandList,queryBrandAdd,queryBrandUpdate } from '@/services/api';

export default {
  namespace: 'brandList',

  state: {
    formValues:{}
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const {data} = yield call(queryBrandList, payload);
      yield put({
        type: 'save',
        payload: {...data,formValues:{...payload.queryCondition}},
        
      });
    },
     *add({ payload, callback }, { call, put }) {
      const res = yield call(queryBrandAdd, payload);
      const {data,msg}=res;
      yield put({
        type: 'save',
        payload: {...data,msg,formValues:{...payload.queryCondition}},
      });
      if (callback) callback(msg);
    },
    /* *remove({ payload, callback }, { call, put }) {
      const response = yield call(removeRule, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    }, */
    *update({ payload, callback }, { call, put }) {
      const {data,msg} = yield call(queryBrandUpdate, payload);
      yield put({
        type: 'save',
        payload: {...data,msg,formValues:{...payload.queryCondition}},
      });
      if (callback) callback(msg);
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
