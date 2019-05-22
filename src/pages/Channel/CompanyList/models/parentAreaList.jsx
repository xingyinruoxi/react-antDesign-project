import { queryParentList } from '@/services/api';

export default {
  namespace: 'parentAreaList',
  state: [
    {
      id:"0",
      name :"无上级区域"
    }
  ],
  effects: {
    *fetch({ payload,callBack }, { call, put }) {
      const res = yield call(queryParentList, payload);
      const {msg,data } = res;
      yield put({
        type: 'save',
        payload: data,
      });
      if(callBack) callBack(msg,data)
    },
  },

  reducers: {
    save(state, action) {
      const { payload } = action;
      return [
        ...state,
        ...payload,
      ];
    },
  },
};
