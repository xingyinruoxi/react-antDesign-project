import { routerRedux } from 'dva/router';
import { stringify } from 'qs';
import { queryUserInfo } from '@/services/user';
import { message } from 'antd';
import { reloadAuthorized } from '@/utils/Authorized';
import { setAuthority } from '@/utils/authority';
import { local } from '@/utils/utils';

export default {
  namespace: 'userInfo',
  state: {},
  effects: {
    *fetch({ payload,callBack }, { call, put }) {
      const res = yield call(queryUserInfo, payload);
      if (res.msg === 'OK') {
        const data = res.data.user || res.data;
        yield put({
          type: 'save',
          payload: {
            ...data,
            currentAuthority: 'admin',
          },
        });
        if(callBack) callBack(res.msg,res.data)
      } else {
        message.error(res.msg);
        yield put({
          type: 'save',
          payload: {
            currentAuthority: 'guest',
          },
        });
        reloadAuthorized();
        local.remove('token'); //清除token
        local.remove('typeDataTotal'); //清字典表
        yield put(
          routerRedux.push({
            pathname: '/user/login',
            search: stringify({
              redirect: window.location.href,
            }),
          })
        );
      }
    },
  },

  reducers: {
    save(state, action) {
      const { payload } = action;
      setAuthority(payload.currentAuthority);
      return {
        ...state,
        ...payload,
      };
    },
  },
};
