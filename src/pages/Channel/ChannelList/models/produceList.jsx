import {querySettingsChannelProduct} from '@/services/api';

export default {
  namespace: 'produceList',
  state: {

  },
  effects: {
    *submit({ payload,callBack }, { call, put }) {
        const res= yield call(querySettingsChannelProduct, payload);
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
