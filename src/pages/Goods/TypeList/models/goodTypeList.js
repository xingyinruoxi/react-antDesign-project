import {queryGoodTypeList } from '@/services/api';

export default {
  namespace: 'goodTypeList',
  state: {
    formValues:{}
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const {data} = yield call(queryGoodTypeList, payload);     
      yield put({
        type: 'save',
        payload: {...data,formValues:{...payload.queryCondition}},
      });
    },
    // *update({ payload, callback }, { call, put }) {
    //   const {data,msg} = yield call(queryProClassUpdate, payload);
    //   yield put({
    //     type: 'save',
    //     payload: {...data,msg,formValues:{...payload.queryCondition}},
    //   });
    //   if (callback) callback(msg);
    // }, 
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
