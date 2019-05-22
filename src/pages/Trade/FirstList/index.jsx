import React, { PureComponent } from 'react';
import { Card, Icon } from 'antd';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import ListForm from './components/ListForm';
import ListTable from './components/ListTable';
@connect(state => {
  return {
    transferList: state.transferList,
    firstList: state.firstList,
    loading: state.loading.models.firstList,
    orderStatusType: state.orderStatusType,
  };
})
export class List extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'orderStatusType/fetch',
      payload: {
        data: {
          key: 'trade_status_2_1',
        },
      },
    });
    dispatch({
      type: 'firstList/fetch',
      payload: {
        limit: 10,
        queryCondition: {
          tradeStatus: '2004,2107,2108,2009',
          bigStatus: '2',
        },
      },
    });
    dispatch({
      type: 'transferList/fetch',
      payload: {
        limit: 200,
        queryCondition: {
          roleCode: 'first_audit',
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
    const { firstList, loading, transferList, dispatch, orderStatusType: trade_status_2, } = this.props;
    const listFormProps = {
      dispatch,
      firstList,
      trade_status_2,
    };
    const listTableProps = {
      dispatch,
      loading,
      firstList,
      trade_status_2,
      transferList,
    };
    return (
      <PageHeaderWrapper title="初审监控">
        <Card bordered={false}>
          <ListForm {...listFormProps} />
          {firstList.list ? <ListTable {...listTableProps} /> : null}
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default List;
