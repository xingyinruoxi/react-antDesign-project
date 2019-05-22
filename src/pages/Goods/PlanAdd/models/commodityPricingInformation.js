import {
  routerRedux
} from 'dva/router';
import {
  message
} from 'antd';
import {
  querCommodityPricingInformation
} from '@/services/api';

export default {
  namespace: 'commodityPricingInformation',
  state: {},

  effects: {
    // 新增产品方案  基本信息
    * addCommodityPricingInformation({
      payload,
      callBack
    }, {
      call,
      put
    }) {
      const res = yield call(querCommodityPricingInformation, payload);
      const {
        msg
      } = res;
      yield put({
        type: 'saveStepFormData',
        payload: res.data,
      });
      if (callBack) callBack(msg, id)
    },
  },

  reducers: {
    saveStepFormData(state, {
      payload
    }) {
      return {
        ...state,
        ...payload
      };
    },
  },
};
