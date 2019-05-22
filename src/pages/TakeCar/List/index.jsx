import React, { PureComponent } from 'react';
import { Card } from 'antd';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import ListForm from './components/ListForm';
import ListTable from './components/ListTable';
import styles from './assets/css/TableList.less';
@connect(state => {
  return {
    takeCarList: state.takeCarList,
    loading: state.loading.models.takeCarList,
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
          key: 'trade_status_5',
        },
      },
    });
    dispatch({
      type: 'takeCarList/fetch',
      payload: {
        limit: 10,
        page: 0,
        queryCondition: {
          // tradeStatus: '2003',
          bigStatus: '5',
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
    let { takeCarList, loading, dispatch, orderStatusType: trade_status_5 } = this.props;
    const parentMethods = {
      dispatch,
    };
    const listFormProps = {
      dispatch,
      takeCarList,
      trade_status_5,
    };
    const listTableProps = {
      dispatch,
      loading,
      takeCarList,
      trade_status_5,
    };
    return (
      <PageHeaderWrapper title="提车列表">
        <Card bordered={false}>
          <ListForm {...listFormProps} />
          {takeCarList.list ? <ListTable {...listTableProps} /> : null}
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default List;
