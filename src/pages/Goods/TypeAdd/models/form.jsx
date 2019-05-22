import {
  rentalDayDatSetRepaymentDateRule,
  dateRuleDelete,
  moneyRuleDelete,
} from '@/services/api';

export default {
  namespace: 'form',
  state: {},
  effects: {
   
    // 删除还款日
    *dateRuleDelete({ payload, callBack }, { call, put }) {
      const res = yield call(dateRuleDelete, payload);
      const { msg, data } = res;
      yield put({
        type: 'saveStepFormData',
        payload: data,
      });
      if (callBack) callBack(msg);
    },
    // 删除金额
    *moneyRuleDelete({ payload, callBack }, { call, put }) {
      const res = yield call(moneyRuleDelete, payload);
      const { msg, data } = res;
      yield put({
        type: 'saveStepFormData',
        payload: data,
      });
      if (callBack) callBack(msg);
    },
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
