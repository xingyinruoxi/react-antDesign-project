import React, { PureComponent } from 'react';
import { Card, Form, Table, Input } from 'antd';
import Link from 'umi/link';
const FormItem = Form.Item;
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import ListForm from './components/ListForm';
import ListTable from './components/ListTable';
import styles from './assets/css/TableList.less';
@connect(state => {
  return {
    ResignList: state.ResignList,
    orderStatusType: state.orderStatusType,
    loading: state.loading.models.ResignList,
  };
})
export class Resign extends PureComponent {

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
      type: 'ResignList/fetch',
      payload: {
        "limit": 10,
        "queryCondition": {
          "tradeStatus": "2003",
          "bigStatus": "3",
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
      ResignList,
      loading,
      dispatch,
      orderStatusType: trade_status_3,
    } = this.props;
    const parentMethods = {
      dispatch,
    };
    const listFormProps = {
      dispatch,
      ResignList,
      trade_status_3
    };
    const listTableProps = {
      dispatch,
      loading,
      ResignList,
      trade_status_3
    };
    return (
      <PageHeaderWrapper title="重签待办">
        <Card bordered={false}>
          <ListForm {...listFormProps} />
          <ListTable {...listTableProps} />
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Resign;
