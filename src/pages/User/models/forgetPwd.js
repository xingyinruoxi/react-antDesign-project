import { fakeForgetPwd,getCode } from '@/services/user';
import { setAuthority } from '@/utils/authority';
import { reloadAuthorized } from '@/utils/Authorized';

export default {
  namespace: 'forgetPwd',

  state: {
    msg:'OK'
  },

  effects: {
    *submit({ payload,callBack }, { call, put }) {
      const res = yield call(fakeForgetPwd, payload);
      const {msg}=res;
      const {username}=payload;
      yield put({
        type: 'forgetPwdHandle',
        payload: {msg},
      });
      if(callBack) callBack(msg,username)
    },
    *sendCode({ payload ,callBack}, { call, put }) {
      const res = yield call(getCode, payload);
      const {msg}=res;
      yield put({
        type: 'forgetPwdHandle',
        payload: {msg},
      });
      if(callBack) callBack(msg)
    },
  },

  reducers: {
    forgetPwdHandle(state, { payload }) {
      setAuthority('guest');
      reloadAuthorized();
      return {
        ...state,
        ...payload
      };
    },
  },
};
