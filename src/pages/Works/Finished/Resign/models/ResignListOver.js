import {queryResignListOver} from '@/services/api';

export default {
  namespace: 'ResignListOver',
  state: {
    formValues:{}
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const {data} = yield call(queryResignListOver, payload);     
      yield put({
        type: 'save',
        payload: {...data,formValues:{...payload.queryCondition}},
      });
    },
    //  *add({ payload, callback }, { call, put }) {
    //   const response = yield call(queryProClassAdd, payload);
    //   yield put({
    //     type: 'save',
    //     payload: response.data,
    //   });
    //   if (callback) callback();
    // },
   /* *remove({ payload, callback }, { call, put }) {
      const response = yield call(removeRule, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    },*/
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
