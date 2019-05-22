import React, { PureComponent } from 'react';
import { Card, Form, Table, Input, Button, Dropdown, Icon } from 'antd';
import Link from 'umi/link';
const FormItem = Form.Item;
import { connect } from 'dva';
import StandardTable from '@/components/StandardTable';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import ListForm from './components/ListForm';
import ListTable from './components/ListTable';
import styles from './assets/css/TableList.less';
@connect(state => {
  return {
    transferList: state.transferList,
    reviewList: state.reviewList,
    loading: state.loading.models.reviewList,
    orderStatusType: state.orderStatusType,
  };
})
export class List extends PureComponent {
  state = {
    selectedRows: [],
  };
  handleSelectRows = rows => {
    this.setState({
      selectedRows: rows,
    });
  };
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'orderStatusType/fetch',
      payload: {
        data: {
          key: 'trade_status_2_2',
        },
      },
    });
    dispatch({
      type: 'reviewList/fetch',
      payload: {
        limit: 10,
        queryCondition: {
          tradeStatus: '2010,2001,2006',
          bigStatus: '2',
        },
      },
    });
    dispatch({
      type: 'transferList/fetch',
      payload: {
        limit: 200,
        queryCondition: {
          "roleCode": "re_audit"
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
    let { reviewList, loading, dispatch, orderStatusType: trade_status_2 ,transferList} = this.props;
    const { selectedRows } = this.state;
    const parentMethods = {
      dispatch,
    };
    const listFormProps = {
      dispatch,
      reviewList,
      trade_status_2,
    };
    const listTableProps = {
      dispatch,
      loading,
      reviewList,
      trade_status_2,
      transferList,selectedRows
    };
    return (
      <PageHeaderWrapper title="复审监控">
        <Card bordered={false}>
          <div className={styles.tableList}>
            <div className={styles.tableListOperator}>
              {selectedRows.length > 0 && (
                <Button type="primary">
                  <Icon type="arrow-up" />
                  转派
                </Button>
              )}
            </div>
          </div>
          <ListForm {...listFormProps} />
          {reviewList.list ? <ListTable {...listTableProps} /> : null}
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default List;
