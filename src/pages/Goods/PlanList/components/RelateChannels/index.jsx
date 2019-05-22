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
class ModalPosition extends PureComponent {
	columns = [
		{
		  title: '选择岗位',
		  dataIndex: 'name',
		},
		{
		  title: '人员姓名',
		  dataIndex: 'desc',
		},
		{
		  title: '操作',
		  dataIndex: 'callNo',
		},
	]
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
      handleModalPosition,
      form: { getFieldDecorator },
	  rule: { data },
	  IfContent,
	} = this.props;
	const columns = [
		{
		  title: '选择岗位',
		  dataIndex: 'name',
		  key: 'name',
		  width: '20%',
		  render: (text, record) => {
			if (record.editable) {
			  return (
				<Input
				  value={text}
				  autoFocus
				  onChange={e => this.handleFieldChange(e, 'name', record.key)}
				  onKeyPress={e => this.handleKeyPress(e, record.key)}
				  placeholder="成员姓名"
				/>
			  );
			}
			return text;
		  },
		},
		{
		  title: '人员姓名',
		  dataIndex: 'department',
		  key: 'department',
		  width: '40%',
		  render: (text, record) => {
			if (record.editable) {
			  return (
				<Input
				  value={text}
				  onChange={e => this.handleFieldChange(e, 'department', record.key)}
				  onKeyPress={e => this.handleKeyPress(e, record.key)}
				  placeholder="所属部门"
				/>
			  );
			}
			return text;
		  },
		},
		{
		  title: '操作',
		  key: 'action',
		},
	  ];
    return (
      <Modal
        destroyOnClose
        title="批量设置关键岗位"
        width={720}
        visible={modalVisible}
        onOk={this.okHandle}
        onCancel={() => handleModalPosition()}
      >
		<>
			<Table
			columns={this.columns}
			pagination={false}
			rowClassName={record => (record.editable ? styles.editable : '')}
			/>
			<Button
			style={{ width: '100%', marginTop: 16, marginBottom: 8 }}
			type="dashed"
			// onClick={this.newMember}
			icon="plus"
			>
			新增成员
			</Button>
		</>
      </Modal>
    );
  }
}
export default ModalPosition;
