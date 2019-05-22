import React, { PureComponent } from 'react';
import { Card, Form, Table, Input } from 'antd';
import Link from 'umi/link';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import ListForm from './components/ListForm';
import ListTable from './components/ListTable';
import styles from './assets/css/TableList.less';

@connect(state => {
  return {
    payCarListOver: state.payCarListOver,
    orderStatusType: state.orderStatusType,
    loading: state.loading.models.payCarListOver,
  };
})
export class Paycar extends PureComponent {
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
      type: 'payCarListOver/fetch',
      payload: {
        page: 1,
        limit: 10,
        queryCondition: {
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
    let { loading, dispatch, payCarListOver, orderStatusType: trade_status_5 } = this.props;
    const parentMethods = {
      dispatch,
    };
    const listFormProps = {
      dispatch,
      payCarListOver,
      trade_status_5,
    };
    const listTableProps = {
      dispatch,
      loading,
      payCarListOver,
      trade_status_5,
    };
    return (
      <PageHeaderWrapper title="交车已办">
        <Card bordered={false}>
          <ListForm {...listFormProps} />
          {payCarListOver.list ? <ListTable {...listTableProps} /> : null}
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Paycar;
