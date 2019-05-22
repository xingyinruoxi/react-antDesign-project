import {queryFindProduceList} from '@/services/api';

export default {
  namespace: 'queryProduceList',
  state: {

  },
  effects: {
    *fetch({ payload,callBack }, { call, put }) {
        const res= yield call(queryFindProduceList, payload);
        const {msg,data}=res;
        yield put({
            type: 'save',
            payload: data
        });
        if(callBack) callBack(msg,data)
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
