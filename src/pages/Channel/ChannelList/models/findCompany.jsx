import {
    queryFindCompany
    } from '@/services/api';
    
    export default {
      namespace: "findCompany",
    
      state: [],
    
      effects: {
        * fetch({payload}, {call,put}) {
          const {
            data
          } = yield call(queryFindCompany, payload);
          yield put({
            type: 'save',
            payload: data,
          });
        },
      },
    
      reducers: {
        save(state, action) {
          let arr=[]
          const {
            payload
          } = action;
          Object.values(payload).forEach(element => {
            arr.push(...element)
          });
          return [...arr]
        },
      },
    };
    