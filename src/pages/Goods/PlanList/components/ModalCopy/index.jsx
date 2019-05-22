import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Form, Modal, Input, message, DatePicker, Col, Select, Option, Row, Button } from 'antd';
import { connect } from 'dva';


const FormItem = Form.Item;
@connect(state => {
  return {
    rule: state.rule,
    loading: state.loading.models.rule,
  };
})
@Form.create()
class ModalCopy extends PureComponent {    
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'rule/fetch',
    });
  }
  handleFieldChange(e, fieldName, key) {
    const { data } = this.state;
    const newData = data.map(item => ({ ...item }));
    const target = this.getRowByKey(key, newData);
    if (target) {
      target[fieldName] = e.target.value;
      this.setState({ data: newData });
    }
  }
  handleKeyPress(e, key) {
    if (e.key === 'Enter') {
      this.saveRow(e, key);
    }
  }
//   newMember = () => {
//     const { data } = this.state;
//     const newData = data.map(item => ({ ...item }));
//     newData.push({
//       key: `NEW_TEMP_ID_${this.index}`,
//       workId: '',
//       name: '',
//       department: '',
//       editable: true,
//       isNew: true,
//     });
//     this.index += 1;
//     // this.setState({ data: newData });
//   };
  render() {
    const {
      modalVisible,
      form,
      dispatch,
      handleModalCopy,
      form: { getFieldDecorator },
	  rule: { data },
	} = this.props;
    return (
      <Modal
        destroyOnClose
        title="提示"
        width={720}
        visible={modalVisible}
        onOk={this.okHandle}
        onCancel={() => handleModalCopy()}
      >
		<>
			<div>您好，您确定对选择的产品方案进行复制吗？</div>
		</>
      </Modal>
    );
  }
}
export default ModalCopy;
