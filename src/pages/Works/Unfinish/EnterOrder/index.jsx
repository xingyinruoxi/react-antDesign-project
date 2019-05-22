import React, { PureComponent } from 'react';
import { Card } from 'antd';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import ListForm from './components/ListForm';
import ListTable from './components/ListTable';
import ModalCacheForm from './components/ModalCacheForm';
import styles from './assets/css/TableList.less';

@connect(state => {
  return {
    userInfo: state.userInfo,
    enterOrderList: state.enterOrderList,
    loading: state.loading.models.enterOrderList,
  };
})
export class Enterorder extends PureComponent {
  state = {
    modalVisible: false,
    tradeCode:null,
  };
  handleModalVisible = (flag, tradeCode) => {
    this.setState({
      modalVisible: !!flag,
      tradeCode,
    });
  };
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'enterOrderList/fetch',
      payload: {
        limit: 10,
        queryCondition: {
          bigStatus: '2',
        },
      },
    });
  }
  render() {
    let {
      enterOrderList,
      loading,
      dispatch,
      userInfo: { realName },
    } = this.props;
    let { modalVisible, tradeCode } = this.state;
    const { handleModalVisible } = this;
    const parentMethods = {
      dispatch,
      tradeCode,
      modalVisible,
      realName,
      handleModalVisible,
    };
    const listFormProps = {
      dispatch,
      enterOrderList,
    };
    const listTableProps = {
      dispatch,
      loading,
      enterOrderList,
      handleModalVisible,
    };

    return (
      <PageHeaderWrapper title="进单待办">
        <Card bordered={false}>
          <ListForm {...listFormProps} />
          {enterOrderList.list ? <ListTable {...listTableProps} /> : null}
        </Card>
        {modalVisible ? <ModalCacheForm modalVisible={modalVisible} {...parentMethods} /> : null}
      </PageHeaderWrapper>
    );
  }
}

export default Enterorder;
