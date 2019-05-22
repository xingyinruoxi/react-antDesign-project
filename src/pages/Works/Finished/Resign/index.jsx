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
    ResignListOver: state.ResignListOver,
    orderStatusType:state.orderStatusType,
    loading: state.loading.models.ResignListOver,
  };
})
export class Resign extends PureComponent {
  
  handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const { dispatch } = this.props;
    const filters = Object.keys(filtersArg).reduce((obj, key) => {
      const newObj = { ...obj };
      newObj[key] = getValue(filtersArg[key]);
      return newObj;
    }, {});

    const params = {
      currentPage: pagination.current,
      pageSize: pagination.pageSize,
      // ...formValues,
      ...filters,
    };
    if (sorter.field) {
      params.sorter = `${sorter.field}_${sorter.order}`;
    }

    dispatch({
      type: 'rule/fetch',
      payload: params,
    });
  };

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
      type: 'ResignListOver/fetch',
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
      loading,
      ResignListOver,
      dispatch,
      orderStatusType:trade_status_3
    } = this.props;
    const parentMethods = {
      dispatch,
    };
    const listFormProps = {
      dispatch,
      ResignListOver,
      trade_status_3
    };
    const listTableProps = {
      dispatch,
      loading,
      ResignListOver,
      trade_status_3
    };
    return (
      <PageHeaderWrapper title="重签查询">
        <Card bordered={false}>
          <ListForm {...listFormProps} />
          <ListTable {...listTableProps} />
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Resign;
