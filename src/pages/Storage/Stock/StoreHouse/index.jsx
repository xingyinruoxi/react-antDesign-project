import React, { PureComponent } from 'react';
import { Card, Button, Icon } from 'antd';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import ListForm from './components/ListForm';
import ListTable from './components/ListTable';
import Link from 'umi/link';
import styles from './assets/css/TableList.less';

@connect(state => {
  return {
    loading: state.loading.models.storeHouse,
    storeHouse:state.storeHouse,
    typeDataTotal:state.typeDataTotal
  };
})
export class List extends PureComponent {


  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'storeHouse/fetch',
      payload:{"queryCondition": {},limit:10}
    });
    dispatch({
      type: 'typeDataTotal/fetch',
      payload:{
        "data": {
          "version":1
          }
      }
    });
  }
  render() {
    let {
      loading,
      dispatch,
      storeHouse,
      typeDataTotal:{st_storeLevel,st_houseStatus}
    } = this.props;
    const listFormProps = {
      dispatch,
      storeHouse,
      st_storeLevel,
      st_houseStatus
    };
    const listTableProps = {
      dispatch,
      loading,
      storeHouse,
      st_storeLevel,
      st_houseStatus
    };
    return (
      <PageHeaderWrapper title="仓库列表">
        <Card bordered={false}>
          <ListForm {...listFormProps} />
          <div className={styles.tableList}>
            <div className={styles.tableListOperator}>
              <Link to="/store/stock/storehouse/add">
                <Button icon="plus" type="primary">
                  新建
                </Button>
              </Link>
            </div>
          </div>
          <ListTable {...listTableProps} />
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default List;
