import React, { PureComponent } from 'react';
import { Card } from 'antd';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import ListForm from './components/ListForm';
import ListTable from './components/ListTable';
import styles from './assets/css/TableList.less';
@connect(state => {
  return {
    ContractList: state.ContractList,
    loading: state.loading.models.ContractList,
    orderStatusType: state.orderStatusType,
  };
})
export class List extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'orderStatusType/fetch',
      payload: {
        "data": {
        "key":"trade_status_3"
        }
      }
    });
    dispatch({
      type: 'ContractList/fetch',
      payload: {
        "limit": 10,
        "page": 0,
        "queryCondition": {
          "tradeStatus": "2003",
          "bigStatus": "2",
        }
      }
    });
  }
  componentWillUnmount(){
    const { dispatch } = this.props;
    dispatch({
      type: 'orderStatusType/clear',
      payload: {}
    });
  }
  render() {
    let {
      ContractList,
      loading,
      dispatch,
      orderStatusType:trade_status_3,
      // resignType:trade_status_3,
    } = this.props;
    const parentMethods = {
      dispatch,
    };
    const listFormProps = {
      dispatch,
      ContractList,
      // cm_emissionStandard,
      trade_status_3
    };
    const listTableProps = {
      dispatch,
      loading,
      ContractList,
      // cm_emissionStandard,
      trade_status_3
    };
    return (
      <PageHeaderWrapper 
      title="合同列表"
      content={'合同列表页用以显示所有通过信审后的订单合同信息，包括进行重签流程的数据信息。'}
      >
        <Card bordered={false}>
          <ListForm {...listFormProps} />
          <ListTable {...listTableProps} />
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default List;
