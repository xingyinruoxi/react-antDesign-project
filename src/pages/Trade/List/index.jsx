import React, { PureComponent } from 'react';
import { Card, Button, Icon } from 'antd';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import ListForm from './components/ListForm';
import ListTable from './components/ListTable';
import styles from './assets/css/TableList.less';
@connect(state => {
  return {
    TradeManageList: state.TradeManageList,
    loading: state.loading.models.TradeManageList,
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
          key: 'trade_status_2',
        },
      },
    });
    dispatch({
      type: 'TradeManageList/fetch',
      payload: {
        limit: 10,
        queryCondition: {
          tradeStatus: '2101,2106,2109,2110,2001,2002,2003,2007,2008,2222,2004,2107,2108,2009,2010,2001,2006',
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
    let {
      TradeManageList,
      loading,
      dispatch,
      orderStatusType: trade_status_2,
    } = this.props;
    const { selectedRows } = this.state;
    const parentMethods = {
      dispatch,
    };
    const listFormProps = {
      // orderStatusType,
      dispatch,
      TradeManageList,
      trade_status_2,
    };
    const listTableProps = {
      dispatch,
      loading,
      // orderStatusType,
      TradeManageList,
      trade_status_2,
    };
    return (
      <PageHeaderWrapper title="申请查询">
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
          {TradeManageList.list ? <ListTable {...listTableProps} /> : null}
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default List;
