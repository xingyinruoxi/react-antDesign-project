// eslint-disable-next-line no-unused-vars
import { routerRedux } from 'dva/router';
// eslint-disable-next-line no-unused-vars
import { message } from 'antd';
import {queryGetassociateSettings} from '@/services/api';

export default {
  namespace: "associateSettings",
  state: {
  },
  effects: {
    // 是否关联设置
    *getassociateSettings({ payload }, { call, put }) {
        // eslint-disable-next-line no-undef
        const response = yield call(queryGetassociateSettings, payload);
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
        ...payload
      };
    },
  },
};
