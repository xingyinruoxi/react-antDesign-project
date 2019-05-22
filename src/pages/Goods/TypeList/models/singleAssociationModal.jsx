import {
  queryAssociationTemplate,
  queryListAndInformationLinkage,
  queryAssociatedPreservation,
  queryRelatedContractTemplate,
} from '@/services/api';

export default {
  namespace: 'singleAssociationModal',
  state: {
    associationTemplateModalValues: {},
    selectingBusinessProcessesValues: {},
    selectionListModalValues: {},
    listAndInformationLinkageValues: {},
    associatedPreservationValues: {},
    relatedContractTemplateValues: {},
  },
  effects: {
    // 关联模板
    *associationTemplate({ payload }, { call, put }) {
      // eslint-disable-next-line no-undef
      const response = yield call(queryAssociationTemplate, payload);
      const { data } = response;
      yield put({
        type: 'associationTemplateModal',
        payload: { associationTemplateValues: data },
      });
    },

    // 选择资料清单 和 选择资料 联动
    *listAndInformationLinkage({ payload }, { call, put }) {
      const response = yield call(queryListAndInformationLinkage, payload);
      const { data } = response;
      yield put({
        type: 'listAndInformationLinkageModal',
        payload: { listAndInformationLinkageValues: data },
      });
    },
    // 关联流程资料清单 保存
    *associatedPreservation({ payload,callBack }, { call, put }) {
      const response = yield call(queryAssociatedPreservation, payload);
      const { data,msg } = response;
      yield put({
        type: 'associatedPreservationModal',
        payload: { associatedPreservationValues: data },
      });
      if(callBack) callBack(msg)
    },
    // 关联合同模板 和ID 关联
    *relatedContractTemplate({ payload, callBack }, { call, put }) {
      // eslint-disable-next-line no-undef
      const response = yield call(queryRelatedContractTemplate, payload);
      const { msg, data } = response;
      yield put({
        type: 'relatedContractTemplateModal',
        payload: { relatedContractTemplateValues: data },
      });
      if (callBack) callBack(msg);
    },
  },
  reducers: {
    associationTemplateModal(state, action) {
      const { payload } = action;

      return {
        ...state,
        associationTemplateModalValues: payload.associationTemplateValues,
      };
    },
    selectingBusinessProcessesModal(state, action) {
      const { payload } = action;

      return {
        ...state,
        selectingBusinessProcessesValues: payload.selectingBusinessProcessesValues,
      };
    },
    selectionListModal(state, action) {
      const { payload } = action;
      return {
        ...state,
        selectionListModalValues: payload.selectionListModalValues,
      };
    },
    listAndInformationLinkageModal(state, action) {
      const { payload } = action;
      return {
        ...state,
        listAndInformationLinkageValues: payload.listAndInformationLinkageValues,
      };
    },
    associatedPreservationModal(state, action) {
      const { payload } = action;
      return {
        ...state,
        associatedPreservationValues: payload.associatedPreservationValues,
      };
    },
    relatedContractTemplateModal(state, action) {
      const { payload } = action;
      return {
        ...state,
        relatedContractTemplateValues: payload.relatedContractTemplateValues,
      };
    },
  },
};
