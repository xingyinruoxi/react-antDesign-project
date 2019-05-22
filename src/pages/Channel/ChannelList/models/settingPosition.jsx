import { querySettingPosition } from '@/services/api';

export default {
  namespace: 'settingPosition',
  state: [
    // formValues: {},
  ],
  effects: {
    *fetch({ payload,callBack }, { call, put }) {
      const response = yield call(querySettingPosition, payload);
      const {msg,data}=response;
      yield put({
        type: 'save',
        payload:data,
      });
      if(callBack) callBack(msg)
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
