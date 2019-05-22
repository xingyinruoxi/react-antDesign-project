import React, { PureComponent } from 'react';
import { Table, Form, Modal } from 'antd';
import { connect } from 'dva';
import TableForm from './components/TableForm';
@connect(state => {
  return {
    loading: state.loading.models.rule,
  };
})
@Form.create()
class ModalCacheForm extends PureComponent {
  state = {
    tableData: [],
  };
  setData = (key, data) => {
    this.setState({
      [key]: data,
    });
  };
  componentDidMount() {
    const { dispatch, tradeCode } = this.props;
    const { setData } = this;
    dispatch({
      type: 'cacheList/fetch',
      payload: {
        data: {
          tradeCode,
        },
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          setData('tableData', data);
        }
      },
    });
  }
  okHandle = () => {
    let { form, dispatch, handleModalVisible } = this.props;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      form.resetFields();
      handleModalVisible();
    });
  };

  render() {
    const {
      modalVisible,
      form,
      dispatch,
      handleModalVisible,
      form: { getFieldDecorator },
      realName,
      tradeCode,
    } = this.props;
    const { tableData } = this.state;
    const propsTableForm = {
      realName,
      dispatch,
      tradeCode,
    };

    return (
      <Modal
        destroyOnClose
        title="暂存列表"
        width={780}
        visible={modalVisible}
        footer={null}
        onCancel={() => handleModalVisible()}
      >
        {getFieldDecorator('members', {
          initialValue: tableData,
        })(<TableForm {...propsTableForm} />)}
      </Modal>
    );
  }
}
export default ModalCacheForm;
