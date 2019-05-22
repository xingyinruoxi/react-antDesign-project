import { queryPlanTypeStep1 } from '@/services/api';
export default {
  namespace: 'planTypeStep1',
  state: {},
  effects: {
    // 新增产品方案基本信息查询
    *fetch({ payload,callBack }, { call,put }) {
      const res = yield call(queryPlanTypeStep1, payload);
      yield put({
        type: 'save',
        payload:res.data,
      });
      if(callBack) callBack(res.msg)
    },
    
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    },
  },
};
