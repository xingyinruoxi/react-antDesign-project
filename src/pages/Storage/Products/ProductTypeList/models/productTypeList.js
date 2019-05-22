import {
  queryProductTypeList,
  queryProTypeAdd,
  queryProTypeUpdate
} from '@/services/api';

export default {
  namespace: 'productTypeList',

  state: {
    formValues:{}
  },

  effects: {
    * fetch({payload }, {call,put}) {
      const {data} = yield call(queryProductTypeList, payload);
      yield put({
        type: 'save',
        payload: {...data,formValues:{...payload.queryCondition}},
      });
    },
       *add({ payload, callback }, { call, put }) {
        const {data,msg} = yield call(queryProTypeAdd, payload);
        yield put({
          type: 'save',
          payload: {...data,formValues:{...payload.queryCondition}},
        });
        if (callback) callback(msg);
      },
      *update({ payload, callback }, { call, put }) {
        const {data,msg} = yield call(queryProTypeUpdate, payload);
        yield put({
          type: 'save',
          payload: {...data,formValues:{...payload.queryCondition}},
        });
        if (callback) callback(msg);
      },
      /*
      *remove({ payload, callback }, { call, put }) {
        const response = yield call(removeRule, payload);
        yield put({
          type: 'save',
          payload: response,
        });
        if (callback) callback();
      },
      , */
  },

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
