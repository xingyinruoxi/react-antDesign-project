import {queryStoreHouseDetail} from '@/services/api';

export default {
  namespace: 'detailData',
  state: {
  },
  effects: {
    *fetch({ payload,callBack }, { call, put }) {
      const res = yield call(queryStoreHouseDetail, payload);
      const {msg,data}=res;
      yield put({
        type: 'save',
        payload: res.data,
      });
      if(callBack) callBack(msg,data)
    },
    *remove(_, { put }) {
      yield put({
        type: 'save',
        payload: {
          remove:true
        },
      });
    },
  },

  reducers: {
    save(state, action) {
      const {payload}=action;
      if(payload.remove){
        state={}
      }
      return {
        ...state,
        ...payload,
      };
    },
  },
};
