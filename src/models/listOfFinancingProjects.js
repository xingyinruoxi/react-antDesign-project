// eslint-disable-next-line no-unused-vars
import { routerRedux } from 'dva/router';
// eslint-disable-next-line no-unused-vars
import { message } from 'antd';
import {queryGetListOfFinancingProjects} from '@/services/api';

export default {
  namespace: "listOfFinancingProjects",
  state: {
  },
  effects: {
    // 融资项目 列表
    *getListOfFinancingProjects({ payload }, { call, put }) {
        // eslint-disable-next-line no-undef
        const response = yield call(queryGetListOfFinancingProjects, payload);
        yield put({
        type: 'saveStepFormData',
        payload: response.data,
        });
        // if (callback) callback();
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
