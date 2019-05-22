import React, { PureComponent } from 'react';
import { Card } from 'antd';
import Link from 'umi/link';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import StandardTable from '@/components/StandardTable';
import ListForm from './components/ListForm';
import ListTable from './components/ListTable';
@connect(state => {
  return {
    shopList: state.shopList,
    loading: state.loading.models.shopList,
    typeDataTotal: state.typeDataTotal,
  };
})
export class List extends PureComponent {
  state={
    allChannel:[]
  }
  setData = (key, data) => {
    this.setState({
      [key]: data 
    });
  };
  componentDidMount() {
    const { dispatch, typeDataTotal } = this.props;
    const { setData } = this
    dispatch({
      type: 'typeDataTotal/fetch',
      payload: {
        data: {
          version: 1,
        },
      },
    });
    dispatch({
      type: 'allChannel/fetch',
      payload: {
        data:{}
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          setData('allChannel', data)
        }
      }
    });
    dispatch({
      type: 'shopList/fetch',
      payload: {
        limit:10,
        queryCondition: {},
      },
    });
  }

  render() {
    let { loading, dispatch, shopList, typeDataTotal } = this.props;
    const { allChannel } = this.state
    const listFormProps = {
      dispatch,
      shopList,
      typeDataTotal,
      allChannel
    };
    const listTableProps = {
      dispatch,
      shopList,
      typeDataTotal,
      allChannel
    };
    return (
      <PageHeaderWrapper title="店端账号维护">
        <Card bordered={false}>
          <ListForm {...listFormProps} />
          <ListTable {...listTableProps} />
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default List;
