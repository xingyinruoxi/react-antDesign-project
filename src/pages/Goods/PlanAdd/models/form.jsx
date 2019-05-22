import {
  queryessentialInformation,
  addpsbenefits,
  planTypeStep2Sub,
  addpsplans,
  updatepsbenefit,
} from '@/services/api';
export default {
  namespace: 'form',
  state: {},
  effects: {
    // 新增产品方案  基本信息
    *essentialInformation({ payload, callBack }, { call, put }) {
      const res = yield call(queryessentialInformation, payload);
      const { msg } = res;
      yield put({
        type: 'saveStepFormData',
        payload: res.data,
      });
      if (callBack) callBack(msg, res.data);
    },
    *planTypeStep2Sub({ payload, callBack }, { call, put }) {
      const res = yield call(planTypeStep2Sub, payload);
      const { msg } = res;
      yield put({
        type: 'saveStepFormData',
        payload: res.data,
      });
      if (callBack) callBack(msg);
    },
    *addpsplans({ payload, callBack }, { call, put }) {
      const res = yield call(addpsplans, payload);
      const { msg } = res;
      yield put({
        type: 'saveStepFormData',
        payload: res.data,
      });
      if (callBack) callBack(msg);
    },
    *addpsbenefits({ payload, callBack }, { call, put }) {
      const res = yield call(addpsbenefits, payload);
      const { msg } = res;
      yield put({
        type: 'saveStepFormData',
        payload: res.data,
      });
      if (callBack) callBack(msg);
    },
  },
  *updateRuleMoney({ payload, callBack }, { call, put }) {
    const res = yield call(updatepsbenefit, payload);
    const { msg } = res;
    yield put({
      type: 'saveStepFormData',
      payload: res.data,
    });
    if (callBack) callBack(msg);
  },

  reducers: {
    saveStepFormData(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
