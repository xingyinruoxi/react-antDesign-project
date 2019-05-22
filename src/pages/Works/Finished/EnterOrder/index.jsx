import React, { PureComponent } from 'react';
import { Card } from 'antd';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import ListForm from './components/ListForm';
import ListTable from './components/ListTable';
import styles from './assets/css/TableList.less';
@connect(state => {
  return {
    finishEnterorder: state.finishEnterorder,
    orderStatusType: state.orderStatusType,
    loading: state.loading.models.finishEnterorder,
  };
})
export class EnterOrder extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'orderStatusType/fetch',
      payload: {
        data: {
          key: 'trade_status_2',
        },
      },
    });
    dispatch({
      type: 'finishEnterorder/fetch',
      payload: {
        limit: 10,
        page:1,
        queryCondition: {
          bigStatus: '2',
        },
      },
    });
  }
  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'orderStatusType/clear',
      payload: {},
    });
  }
  render() {
    let { loading, dispatch, finishEnterorder, orderStatusType: trade_status_2 } = this.props;
    const parentMethods = {
      dispatch,
    };
    const listFormProps = {
      dispatch,
      finishEnterorder,
      trade_status_2,
    };
    const listTableProps = {
      dispatch,
      loading,
      finishEnterorder,
      trade_status_2,
    };
    return (
      <PageHeaderWrapper title="进单已办">
        <Card bordered={false}>
        <ListForm {...listFormProps} />
        {
          finishEnterorder.list?<ListTable {...listTableProps} />:null
        }
         
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default EnterOrder;
