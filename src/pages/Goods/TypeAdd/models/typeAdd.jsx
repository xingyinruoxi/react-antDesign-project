import {
  addRepaymentDateRule,
  addProductTypeInfo,
  addProductTypeRule,
  rentalDayDatSetRepaymentDateRule,
  distributionRuleMoney,
  queryGetSupplementaryOtherRuless,
  dateRuleDelete,
  moneyRuleDelete,
  updateGoodType,
} from '@/services/api';

export default {
  namespace: 'typeAdd',
  state: {},
  effects: {
    // 新增产品类型  基本信息
    *addProductTypeInfo({ payload, callBack }, { call, put }) {
      const res = yield call(addProductTypeInfo, payload);
      const { msg, data} = res;
      yield put({
        type: 'saveStepFormData',
        payload: payload,
      });
      if (callBack) callBack(msg,data);
    },
    // 新增产品类型  基本信息
    *updateGoodType({ payload, callBack }, { call, put }) {
      const {
        data: { id },
      } = payload;
      const res = yield call(updateGoodType, payload);
      const { msg } = res;
      yield put({
        type: 'saveStepFormData',
        payload: payload,
      });
      if (callBack) callBack(msg, { id });
    },
    // 新增产品类型  设置融租规则
    *addProductTypeRule({ payload, callBack }, { call, put }) {
      const res = yield call(addProductTypeRule, payload);
      const { msg, data } = res;
      const id = data ? data.id : 'noId';
      yield put({
        type: 'saveStepFormData',
        payload: payload,
      });
      if (callBack) callBack(msg, id);
    },
    // 新增产品类型  设置还款日(固定还款日,起租日即还款日)
    *repaymentDateRule({ payload, callBack }, { call, put }) {
      const res = yield call(addRepaymentDateRule, payload);
      const {
        msg,
        data: { id },
      } = res;
      yield put({
        type: 'saveStepFormData',
        payload: payload,
      });
      if (callBack) callBack(msg, id);
    },
    //  新增产品类型  根据起租日设置还款日
    *rentalDayDatSetRepaymentDateRule({ payload, callBack }, { call, put }) {
      const res = yield call(rentalDayDatSetRepaymentDateRule, payload);
      const { msg, data:{id} } = res;
      yield put({
        type: 'saveStepFormData',
        payload: data,
      });
      if (callBack) callBack(msg,id);
    },
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
    //  新增产品类型-设置分润规则-渠道固定分润规则-金额
    *distributionRuleMoney({ payload, callBack }, { call }) {
      const res = yield call(distributionRuleMoney, payload);
      const { msg, data } = res;
      if (callBack) callBack(msg, data.id);
    },
    // 补充其他规则
    *addSupplementaryOtherRuless({ payload, callBack }, { call, put }) {
      const res = yield call(queryGetSupplementaryOtherRuless, payload);
      const { msg } = res;
      yield put({
        type: 'saveStepFormData',
        payload: res,
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
