import {queryCarTypeBaseInfoAdd,queryCarTypePersonInfoAdd,queryCarTypeImgAdd,queryCarTypeConfigInfoAdd} from '@/services/api';

export default {
  namespace: 'carTypeAdd',
  state: {},
  effects: {
    *baseInfo({ payload,callBack }, { call, put }) {
      const response = yield call(queryCarTypeBaseInfoAdd, payload);
      const {msg,data:dataId}=response;
      yield put({
        type: 'save',
        payload: response.data,
      });
      if(callBack) callBack(msg,dataId)
    },
    *step2({ payload,callBack }, { call, put }) {
      const response = yield call(queryCarTypePersonInfoAdd, payload);
      const {msg}=response;
      yield put({
        type: 'save',
      });
      if(callBack) callBack(msg)
    },
    *step3({ payload,callBack }, { call, put }) {
      const response = yield call(queryCarTypeImgAdd, payload);
      const {msg}=response;
      yield put({
        type: 'save',
        payload: response.data,
      });
      if(callBack) callBack(msg)
    },
    *step4({ payload,callBack }, { call, put }) {
      const response = yield call(queryCarTypeConfigInfoAdd, payload);
      const {msg}=response;
      yield put({
        type: 'save',
        payload: response.data,
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
