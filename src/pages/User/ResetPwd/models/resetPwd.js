import { fakeResetPwd } from '@/services/user';
import { setAuthority } from '@/utils/authority';
import { reloadAuthorized } from '@/utils/Authorized';

export default {
  namespace: 'resetPwd',

  state: {
    msg:'OK'
  },

  effects: {
    *submit({ payload,callBack }, { call, put }) {
      const res = yield call(fakeResetPwd, payload);
      const {msg,data}=res;
      yield put({
        type: 'resetPwdHandle',
        payload: data,
      });
      if(callBack) callBack(msg);
    },
  },

  reducers: {
    resetPwdHandle(state, { payload }) {
      setAuthority('guest');
      reloadAuthorized();
      return {
        ...state,
        ...payload
      };
    },
  },
};
