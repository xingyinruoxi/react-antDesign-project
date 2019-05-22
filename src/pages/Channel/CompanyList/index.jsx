import React, { PureComponent } from 'react';
import { Card, Input, Button } from 'antd';
import Link from 'umi/link';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import ListForm from './components/ListForm';
import styles from './assets/css/TableList.less';
import ListTable from './components/ListTable';
@connect(state => {
  return {
    companyList: state.companyList,
    loading: state.loading.models.companyList,
    // parentAreaList: state.parentAreaList,
  };
})
export class List extends PureComponent {
  state={
    parentAreaList:[]
  }
  setData = (key, data) => {
    this.setState({
      [key]: data
    });
  };
  componentDidMount() {
    const { dispatch } = this.props;
    const { setData} = this;
    dispatch({
      type: 'companyList/fetch',
      payload: {
        limit: 10,
        userId: 7,
        queryCondition: {
          name: '',
          zoneId: '',
        },
      },
    });
    dispatch({
      type: 'parentAreaList/fetch',
      payload: {
        data: {
          name: '',
          id: '0',
        },
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          setData('parentAreaList', data)
        }
      }
    });
  }
  render() {
    let { loading, dispatch, companyList } = this.props;
    const { parentAreaList } = this.state
    const listFormProps = {
      dispatch,
      companyList,
      parentAreaList,
    };
    const listTableProps = {
      dispatch,
      companyList,
      parentAreaList,
    };
    return (
      <PageHeaderWrapper title="集团维护">
        <Card bordered={false}>
          <ListForm {...listFormProps} />
          <div className={styles.tableList}>
            <div className={styles.tableListOperator}>
              <Link to={{ pathname: '/channel/company/list/add' }}>
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
