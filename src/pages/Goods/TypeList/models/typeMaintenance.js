import { goodTypeMaintenance,queryGoodTypeDetail } from '@/services/api';

export default {
  namespace: 'maintenance',
  state: {
      
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(goodTypeMaintenance, payload);
      yield put({
        type: 'save', 
        payload: response.data,
      });
    },
    *detail({ payload, callback }, { call, put }) {
      const response = yield call(queryGoodTypeDetail, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    },
 
    // *add({ payload, callback }, { call, put }) {
    //   const response = yield call(addRule, payload);
    //   yield put({
    //     type: 'save',
    //     payload: response,
    //   });
    //   if (callback) callback();
    // },
    // *remove({ payload, callback }, { call, put }) {
    //   const response = yield call(removeRule, payload);
    //   yield put({
    //     type: 'save',
    //     payload: response,
    //   });
    //   if (callback) callback();
    // },
    // *update({ payload, callback }, { call, put }) {
    //   const response = yield call(updateRule, payload);
    //   yield put({
    //     type: 'save',
    //     payload: response,
    //   });
    //   if (callback) callback();
    // },
  },

  reducers: {
    save(state, action) {
        const {payload}=action
      return {
        ...state,
        ...payload,
      };
    },
  },
};
