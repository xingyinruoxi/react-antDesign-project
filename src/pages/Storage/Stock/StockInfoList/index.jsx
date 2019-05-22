import React, { PureComponent } from 'react';
import { Card, Button, Icon, Upload, message } from 'antd';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import ListForm from './components/ListForm';
import ListTable from './components/ListTable';
@connect(state => {
  return {
    listData: state.listData,
    loading: state.loading.models.data,
  };
})
export class List extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'listData/fetch',
      payload: { queryCondition: {}, limit: 10 },
    });
  }

  render() {
    let { loading, dispatch, listData } = this.props;
    const listFormProps = {
      dispatch,
      listData,
    };
    const listTableProps = {
      dispatch,
      loading,
      listData,
    };
    return (
      <PageHeaderWrapper title="库存信息">
        <Card bordered={false}>
          <ListForm {...listFormProps} />
          <ListTable {...listTableProps} />
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default List;
