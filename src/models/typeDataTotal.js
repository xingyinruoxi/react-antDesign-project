import { getTypeDataTotal } from '@/services/api';
import {local} from '@/utils/utils'
export default {
  namespace: 'typeDataTotal',
  state: {
    ...local.fetch('typeDataTotal'),
  },
  effects: {
    *fetch({ payload, callBack }, { call, put }) {
      if(Object.keys(local.fetch('typeDataTotal')).length>0) return;
      const res = yield call(getTypeDataTotal, payload);
      const {msg,data}=res;
      yield put({
        type: 'save',
        payload:data,
      });
      if (callBack) callBack(msg,data);
      if(msg==='OK'){
        local.save('typeDataTotal',data)
      }
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
