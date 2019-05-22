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
    typeData: state.typeData,
    loading: state.loading.models.productClassList,
    productClassList: state.productClassList,
  };
})
 export default class List extends PureComponent {
  state = {
    visible: false,
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
    dispatch({
      type: 'productClassList/fetch',
      payload: { queryCondition: {}, limit: 10 },
    });
    dispatch({
      type: 'typeData/fetch',
      payload: { data: { key: 'cm_level' } },
    });
    
  }
  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'typeData/clear',
      payload: {},
    });
  }
  render() {
    let {
      loading,
      dispatch,
      productClassList,
      typeData
    } = this.props;
    const { visible, item = {} } = this.state;
    const { handleCancel } = this;

    const listFormProps = {
      typeData,
      dispatch,
      productClassList
    };
    const listTableProps = {
      dispatch,
      loading,
      typeData,
      productClassList,
      showEditModal:this.showEditModal
    };
    const modalMethods = {
      dispatch,
      visible,
      item,
      handleCancel,
      typeData,
    };
    return (
      <PageHeaderWrapper title="商品类别列表">
        <Card bordered={false}>
          {
            typeData?<ListForm {...listFormProps} />:null
          }
          <div className={styles.tableList}>
            <div className={styles.tableListOperator}>
              <Button icon="plus" type="primary" onClick={this.showModal}>
                新建
              </Button>
            </div>
          </div>
          {
            typeData?<ListTable {...listTableProps} />:null
          }
          
        </Card>
        {visible ? <ModalProduct {...modalMethods} /> : null}
      </PageHeaderWrapper>
    );
  }
}


