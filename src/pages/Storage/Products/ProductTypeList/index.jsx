import React, { PureComponent } from 'react';
import { Card, Button, Icon } from 'antd';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import ListForm from './components/ListForm';
import ListTable from './components/ListTable';
import styles from './assets/css/TableList.less';
import ModalProduct from './components/ModalProduct';
@connect(state => {
  return {
    productTypeList: state.productTypeList,
    loading: state.loading.models.productTypeList,
  };
})
export class List extends PureComponent {
  state = {
    visible: false,
    allBrandList:[]
  };
  setData = (key, data) => {
    this.setState({
      [key]: data 
    });
  };
  showModal = () => {
    this.setState({
      visible: true,
      item: undefined,
    });
  };

  showEditModal = item => {
    this.setState({
      visible: true,
      item,
    });
  };
  handleCancel = () => {
    // setTimeout(() => this.addBtn.blur(), 0);
    this.setState({
      visible: false,
    });
  };
  componentDidMount() {
    const { dispatch } = this.props;
    const { setData } = this
    dispatch({
      type: 'productTypeList/fetch',
      payload: { queryCondition: {},limit:10 },
    });
    dispatch({
      type: 'allBrandList/fetch',
      payload: {
        data:{}
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          setData('allBrandList', data)
        }
      }
    });
  }
  render() {
    let {
      loading,
      dispatch,
      productTypeList
    } = this.props;
    const { visible, item = {},allBrandList } = this.state;
    const { handleCancel } = this;
    const listFormProps = {
      dispatch,
      productTypeList,
      allBrandList
    };
    const listTableProps = {
      dispatch,
      loading,
      productTypeList,
      allBrandList,
      showEditModal: this.showEditModal,
    };
    const parentMethods = {
      dispatch,
      visible,
      item,
      handleCancel,
    };
    return (
      <PageHeaderWrapper title="商品型号">
        <Card bordered={false}>
          <ListForm {...listFormProps} />
          <div className={styles.tableList}>
            <div className={styles.tableListOperator}>
              <Button icon="plus" type="primary" onClick={this.showModal}>
                新建
              </Button>
            </div>
          </div>
          <ListTable {...listTableProps} />
        </Card>
        {visible ? <ModalProduct {...parentMethods} /> : null}
      </PageHeaderWrapper>
    );
  }
}

export default List;
