import React, { PureComponent } from 'react';
import { Table, Form, Modal, message } from 'antd';
import { connect } from 'dva';
const FormItem = Form.Item;
const columns = [
  {
    title: '审批人',
    dataIndex: 'realName',
    key: 'realName',
  },
  {
    title: '岗位',
    dataIndex: 'position',
    key: 'position',
    render: position => <>{position || '--'}</>,
  },
  {
    title: '岗位状态',
    dataIndex: 'work',
    key: 'work',
    render: work => <>{work ? '上岗' : '下岗'}</>,
  },
  {
    title: '联系电话',
    dataIndex: 'phone',
    key: 'phone',
    render: phone => <>{phone || '--'}</>,
  },
];
@connect(state => {
  return {
    loading: state.loading.models.tranferSub,
  };
})
@Form.create()
class ModalCacheForm extends PureComponent {
  state={
    username:''
  }
  handleSure() {
    const { hideModel, dispatch, selectedRows } = this.props;
    const tradeCode=selectedRows.length&&selectedRows.map(({tradeCode})=>tradeCode).toString();
    const {username:receiveUser}=this.state;
    if(!receiveUser){
      message.error('请选择转派人')
      return;
    }
    dispatch({
      type: 'tranferSub/submit',
      payload: {
        data: {
          tradeCode,
          receiveUser
        },
      },
      callBack(msg) {
        if (msg === 'OK') {
          message.success('转派成功');
          hideModel();
          dispatch({
            type: 'firstList/fetch',
            payload: {
              limit: 10,
              queryCondition: {
                tradeStatus: '2004,2107,2108,2009',
                bigStatus: '2',
              },
            },
          });
        }else{
          message.error(msg)
        }
      },
    });
  }

  render() {
    const {
      modalVisible,
      form,
      dispatch,
      hideModel,
      handleSure,
      visible,
      form: { getFieldDecorator },
      selectedRows,
      transferList,
      transferList: { list },
    } = this.props;
    return (
      <Modal
        destroyOnClose
        title="选择转派人"
        width={520}
        visible={visible}
        onOk={() => this.handleSure()}
        onCancel={() => hideModel()}
      >
        <Table
          rowKey={'id'}
          bordered
          size={'middle'}
          rowSelection={{
            type: 'radio',
            onChange: (key, item) => {
              const {username}=item[0]
              this.setState({
                username
              })
            },
          }}
          dataSource={list}
          columns={columns}
        />
      </Modal>
    );
  }
}
export default ModalCacheForm;
