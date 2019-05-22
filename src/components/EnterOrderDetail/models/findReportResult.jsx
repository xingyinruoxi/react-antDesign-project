import { findReportResult } from '@/services/api';

export default {
  namespace: 'findReportResult',
  state: [],
  effects: {
    *fetch({ payload, callBack }, { call, put }) {
      const res = yield call(findReportResult, payload);
      const listResult=res.length&&res[0].finalResult;
      const arrData = [];
      res.length > 0 &&
        res.forEach(({ finalInfo, finalResult, finalScore }) => {
          let itemFinalInfo = eval('(' + finalInfo + ')');
          const newItem = itemFinalInfo.map(item => {
            const { description } = item;
            return { ...item, finalResult, finalScore,listResult, description: JSON.parse(description) };
          });
          arrData.push(...newItem);
        });
      yield put({
        type: 'save',
        payload: arrData,
      });
      if (callBack) callBack(arrData);
    },
  },

  reducers: {
    save(state, action) {
      const { payload } = action;
      return [...state, ...payload];
    },
  },
};
