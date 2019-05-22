import React, { PureComponent } from 'react';
import { Card } from 'antd';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import ListTable from './components/ListTable';
import ListForm from './components/ListForm';
import styles from './assets/css/TableList.less';
@connect(state => {
  return {
    payCarList: state.payCarList,
    loading: state.loading.models.payCarList,
    orderStatusType:state.orderStatusType
  };
})
export class Paycar extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'orderStatusType/fetch',
      payload: {
        "data": {
        "key":"trade_status_5"
        }
      }
    });
    dispatch({
      type: 'payCarList/fetch',
      payload: {
        "limit": 10,
        "queryCondition": {
          "bigStatus": "5",
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
      payCarList,
      loading,
      dispatch,  
      orderStatusType:trade_status_5
    } = this.props;
    const parentMethods = {
      dispatch,
    };
    const listFormProps = {
      dispatch,
      payCarList,
      trade_status_5
    };
    const listTableProps = {
      dispatch,
      loading,
      payCarList,
      trade_status_5
    };
    return (
      <PageHeaderWrapper title="交车待办">
        <Card bordered={false}>
          <ListForm {...listFormProps} />
          {
            payCarList.list?<ListTable {...listTableProps} />:null
          }
          
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Paycar;
