import {queryShopListStop} from '@/services/api';

export default {
  namespace: 'shopListStop',
  state: {

  },
  effects: {
    *submit({ payload,callBack }, { call, put }) {
        const res= yield call(queryShopListStop, payload);
        const {msg}=res;
        yield put({
        type: 'save',
        payload: msg
        });
        if(callBack) callBack(msg)
    }},

    reducers: {
    save(state, action) {
        const {payload}=action;
        return {
        ...state,
        ...payload,
        };
    },
    },
};
