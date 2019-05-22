import { routerRedux } from 'dva/router';
import { stringify } from 'qs';
import { accountLogin } from '@/services/user';
import { setAuthority } from '@/utils/authority';
import { getPageQuery,local } from '@/utils/utils';
import { reloadAuthorized } from '@/utils/Authorized';

export default {
  namespace: 'login',
  state: {
    msg:'OK'
  },
  effects: {
    *login({ payload,callBack }, { call, put }) {
      const res = yield call(accountLogin, payload);
      const {msg}=res;
      if(msg==='OK'){
        yield put({
          type: 'changeLoginStatus',
          payload: {...res.data.user,currentAuthority:'admin'},
        });
      }else{
        yield put({
          type: 'changeLoginStatus',
          payload: {msg,currentAuthority:'guest'},
        });
      }
      if(callBack) callBack(msg)
      // Login successfully
      if (msg !== 'OK') return;
      local.save('token',res.data.token);//设置token
      if(res.data.user.first){
        yield put(routerRedux.push('/user/resetpwd'));
      }else{
        reloadAuthorized();
        const urlParams = new URL(window.location.href);
        const params = getPageQuery();
        let { redirect } = params;
        if (redirect) {
          const redirectUrlParams = new URL(redirect);
          if (redirectUrlParams.origin === urlParams.origin) {
            redirect = redirect.substr(urlParams.origin.length);
            if (redirect.match(/^\/.*#/)) {
              redirect = redirect.substr(redirect.indexOf('#') + 1);
            }
          } else {
            window.location.href = redirect;
            return;
          } 
        }
        yield put(routerRedux.replace(redirect || '/'));
      }
    },

    /* *getCaptcha({ payload }, { call }) {
      yield call(getFakeCaptcha, payload);
    }, */

    *logout(_, { put }) {
      yield put({
        type: 'changeLoginStatus',
        payload: {
          status: false,
          currentAuthority: 'guest',
        },
      });
      reloadAuthorized();
      local.remove('token');//清除token
      local.remove('typeDataTotal');//清字典表
      yield put(
        routerRedux.push({
          pathname: '/user/login',
          search: stringify({
            redirect: window.location.href,
          }),
        })
      );
    },
  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      setAuthority(payload.currentAuthority);
      return {
        ...state,
        ...payload,
        // type: payload.type,
      };
    },
  },
};
