import {queryPtFirstPayMentDetail } from '@/services/api';

export default {
  namespace: 'payGoodTypeDetail',
  state: {
  },
  effects: {
    *pt_firstpaymentDetail({ payload }, { call, put }){
      const data = yield call(queryPtFirstPayMentDetail, payload);   
      yield put({
        type: 'save',
        payload:data,
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
