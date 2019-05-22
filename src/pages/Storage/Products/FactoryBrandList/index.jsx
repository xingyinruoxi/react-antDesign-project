import React, { PureComponent } from 'react';
import { Card, Button, Icon } from 'antd';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import ListForm from './components/ListForm';
import ListTable from './components/ListTable';
import styles from './assets/css/TableList.less';
import ModalProduct from './components/ModalProduct';
@connect(({ loading, brandList, typeData }) => ({
  loading: loading.models.brandList,
  brandList,
  typeData,
}))
export class List extends PureComponent {
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
      type: 'brandList/fetch',
      payload: { queryCondition: {}, limit: 10 },
    });
    dispatch({
      type: 'typeData/fetch',
      payload: {
        data: {
          key: 'cm_level',
        },
      },
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
    let { typeData, loading, dispatch, brandList } = this.props;
    const { visible, item = {} } = this.state;
    const { handleCancel } = this;
    const listFormProps = {
      typeData,
      dispatch,
      brandList,
    };
    const listTableProps = {
      dispatch,
      loading,
      typeData,
      brandList,
      showEditModal: this.showEditModal,
    };
    const parentMethods = {
      dispatch,
      visible,
      item,
      handleCancel,
      typeData,
    };

    return (
      <PageHeaderWrapper title="厂家品牌">
        <Card bordered={false}>
          {typeData ? <ListForm {...listFormProps} /> : null}
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
