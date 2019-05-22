import {queryCompanyInfo,queryCompanyIntr} from '@/services/api';

export default {
  namespace: 'companyAdd', 
  state: {},
  effects: {
    *baseInfo({ payload,callBack }, { call, put }) {
      const res = yield call(queryCompanyInfo, payload);
      const {msg,data:{id}}=res;
      yield put({
        type: 'save',
        payload: res.data,
      });
      if(callBack) callBack(msg,id)
    },
    *step2({ payload,callBack }, { call, put }) {
      const res = yield call(queryCompanyIntr, payload);
      const {msg}=res;
      if(callBack) callBack(msg)
    },
    *step3({ payload,callBack }, { call, put }) {
      const res = yield call(queryCarTypeImgAdd, payload);
      const {msg}=res;
      yield put({
        type: 'save',
        payload: res.data,
      });
      if(callBack) callBack(msg)
    },
    *step4({ payload,callBack }, { call, put }) {
      const res = yield call(queryCarTypeConfigInfoAdd, payload);
      const {msg}=res;
      yield put({
        type: 'save',
        payload: res.data,
      });
      if(callBack) callBack(msg)
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
