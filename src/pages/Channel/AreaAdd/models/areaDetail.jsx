import { queryAreaDetail } from '@/services/api';

export default {
  namespace: 'areaDetail',
  state: {},
  effects: {
    *fetch({ payload, callBack }, { call, put }) {
      const { msg, data } = yield call(queryAreaDetail, payload);
      const { province, city, county: area } = data;
      let newGeographic = {
        province,
        city,
        area
      };
      delete data.citys;
      data.citys = newGeographic;
      yield put({
        type: 'save',
        payload: data,
      });
      if (callBack) callBack(msg, data)
    },
  },

  reducers: {
    save(state, action) {
      const { payload } = action;
      return {
        ...state,
        ...payload,
      };
    },
  },
};
