import {
  queryProductSchemeDetail,
  querySchemeElementsDetail,
  queryProductPricingInformationDetail,
  queryTaxRevenueDetail,
  queryFactorAttributeDetail,
  queryRepaymentPeriodDetail,
  queryTotalFinancingDetail,
  queryRulesPaymentDetail,
  queryStartingdateSetrepaymentDetail,
  queryfixedChannelRulesFirstDetail,
  queryfixedChannelRulesSecDetail,
  querysupplementaryRulesDetail,
} from '@/services/api';

export default {
  namespace: 'productSchemeDetail',
  state: {
    formValues: {},
  },
  effects: {
    *detail({ payload }, { call, put }) {
      const { data } = yield call(queryProductSchemeDetail, payload);
      yield put({
        type: 'save',
        payload: { ...data, formValues: { ...payload.queryCondition } },
      });
    },
    *schemeElementsDetail({ payload }, { call, put }) {
      const { data } = yield call(querySchemeElementsDetail, payload);
      yield put({
        type: 'save',
        payload: { schemeElementsValues: { ...data }, formValues: { ...payload.queryCondition } },
      });
    },
    // 产品定价信息 ==>打包/保险年限
    *productPricingInformationDetail({ payload }, { call, put }) {
      const { data } = yield call(queryProductPricingInformationDetail, payload);
      yield put({
        type: 'save',
        payload: {
          productPricingInformationValues: { ...data },
          formValues: { ...payload.queryCondition },
        },
      });
    },
    // 产品定价信息 ==>税收
    *taxRevenueDetail({ payload }, { call, put }) {
      const { data } = yield call(queryTaxRevenueDetail, payload);
      yield put({
        type: 'save',
        payload: { taxRevenueValues: { ...data }, formValues: { ...payload.queryCondition } },
      });
    },
    // 查看 产品方案的要素属性
    *factorAttributeDetail({ payload }, { call, put }) {
      const { data } = yield call(queryFactorAttributeDetail, payload);
      yield put({
        type: 'save',
        payload: { factorAttributeValues: { ...data }, formValues: { ...payload.queryCondition } },
      });
    },
    // 查看 产品方案的要素属性 ==>还款周期
    *repaymentPeriodDetail({ payload }, { call, put }) {
      const { data } = yield call(queryRepaymentPeriodDetail, payload);
      yield put({
        type: 'save',
        payload: { repaymentPeriodValues: { ...data }, formValues: { ...payload.queryCondition } },
      });
    },
    // 期限，利率，融资总额
    *totalFinancingDetail({ payload }, { call, put }) {
      const { data } = yield call(queryTotalFinancingDetail, payload);
      yield put({
        type: 'save',
        payload: { totalFinancingValues: { ...data }, formValues: { ...payload.queryCondition } },
      });
    },
    // 起租及还款日的规则
    *rulesPaymentDetail({ payload }, { call, put }) {
      const { data } = yield call(queryRulesPaymentDetail, payload);
      yield put({
        type: 'save',
        payload: { rulesPaymentValues: { ...data }, formValues: { ...payload.queryCondition } },
      });
    },
    // 起租及还款日的规则===>根据起租日设置还款日
    *startingdateSetrepaymentDetail({ payload }, { call, put }) {
      const { data } = yield call(queryStartingdateSetrepaymentDetail, payload);
      yield put({
        type: 'save',
        payload: {
          startingdateSetrepaymentValues: { ...data },
          formValues: { ...payload.queryCondition },
        },
      });
    },
    // 渠道固定分润规则 第一个
    *fixedChannelRulesFirstDetail({ payload }, { call, put }) {
      const { data } = yield call(queryfixedChannelRulesFirstDetail, payload);
      yield put({
        type: 'save',
        payload: {
          fixedChannelRulesFirstValues: { ...data },
          formValues: { ...payload.queryCondition },
        },
      });
    },
    // 渠道固定分润规则 第二个
    *fixedChannelRulesSecDetail({ payload }, { call, put }) {
      const { data } = yield call(queryfixedChannelRulesSecDetail, payload);
      yield put({
        type: 'save',
        payload: {
          fixedChannelRulesSecValues: { ...data },
          formValues: { ...payload.queryCondition },
        },
      });
    },
    // 有没有设置补充规则
    *supplementaryRulesDetail({ payload }, { call, put }) {
      const { data } = yield call(querysupplementaryRulesDetail, payload);
      yield put({
        type: 'save',
        payload: {
          supplementaryRulesValues: { ...data },
          formValues: { ...payload.queryCondition },
        },
      });
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
