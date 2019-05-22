import { queryGetPreviousStepTypeDataTotal } from '@/services/api';

export default {
  namespace: 'previousStepTypeDataTotal',
  state: {},
  effects: {
    *getPreviousStepTypeDataTotal({ payload, callBack }, { call, put }) {
      const res = yield call(queryGetPreviousStepTypeDataTotal, payload);
      const { msg, data } = res;
      const { minInterest, maxInterest, minProportion, maxProportion } = data;
      data.maxInterest = maxInterest * 100;
      data.minInterest = minInterest * 100;
      if (minProportion) {
        values.minProportion = minProportion * 100;
        values.maxProportion = maxProportion * 100;
      }
      yield put({
        type: 'save',
        payload: data,
      });
      if (callBack) callBack(msg);
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
