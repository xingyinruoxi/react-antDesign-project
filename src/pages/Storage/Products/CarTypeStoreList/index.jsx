import React, { PureComponent } from 'react';
import { Card, Button, Icon } from 'antd';
import { connect } from 'dva';
import Link from 'umi/link';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import ListForm from './components/ListForm';
import ListTable from './components/ListTable';
import styles from './assets/css/TableList.less';
@connect(state => {
  
  return {
    typeDataCar: state.typeDataCar,
    carTypeList: state.carTypeList,
    loading: state.loading.models.carTypeList
  };
})
export default class List extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'carTypeList/fetch',
      payload: {
        queryCondition: {},
        limit: 10,
      },
    });
    dispatch({
      type: 'typeDataCar/fetch',
      payload: {
          "data": {
          "key":"cm_status"
          }
      },
    });
  }
  render() {
    let {
      loading,
      dispatch,
      carTypeList,
      typeDataCar:cm_status ,
    } = this.props;
    const listTableProps = {
      dispatch,
      loading,
      carTypeList,
      cm_status,
    };
    const listFormProps = {
      dispatch,
      carTypeList,
      cm_status,
      loading
    };
    return (
      <PageHeaderWrapper title="车型库列表">
        <Card bordered={false}>
          {cm_status ? <ListForm {...listFormProps} /> : null}
          <div className={styles.tableList}>
            <div className={styles.tableListOperator}>
              <Link to="/store/products/cartypestore/add">
                <Button icon="plus" type="primary">
                  新建
                </Button>
              </Link>
            </div>
          </div>
          {cm_status ? <ListTable {...listTableProps} /> : null}
        </Card>
      </PageHeaderWrapper>
    );
  }
}


