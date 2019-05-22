/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/sort-comp */
import React, { PureComponent } from 'react';
import moment from 'moment';
import {
  Table,
  Form,
  Modal,
  Input,
  message,
  DatePicker,
  Col,
  Select,
  Row,
  Button,
  Divider,
  Popconfirm,
} from 'antd';
import { connect } from 'dva';
import isEqual from 'lodash/isEqual';
import styles from './style.less';

const FormItem = Form.Item;
const { Option } = Select;
// const modelColumns = [
//   {
//     id: '1',
//     processKey: 'processKey',
//     listKey: 'listKey',
//     // listInfoKey: 'listInfoKey',
//   },
// ];
@connect(state => ({
  rule: state.rule,
  loading: state.loading.models.rule,
  settingPosition: state.settingPosition,
}))
@Form.create()
class ModalPosition extends PureComponent {
  constructor(props) {
    const { modelColumns } = props;

    // delete settingPosition.formValues;
    super(props);
    this.state = {
      data: modelColumns,
      visible: false,
    };
  }
  // eslint-disable-next-line lines-between-class-members
  static getDerivedStateFromProps(nextProps, preState) {
    if (isEqual(nextProps.value, preState.value)) {
      return null;
    }
    return { data: nextProps.value, value: nextProps.value };
  }

  getRowByKey(id, newData) {
    const { data } = this.state;

    return (newData || data).filter(item => item.id === id)[0];
  }

  toggleEditable = (e, id) => {
    e.preventDefault();
    const { data } = this.state;
    const newData = data.map(item => ({
      ...item,
    }));

    const target = this.getRowByKey(id, newData);
    if (target) {
      // 进入编辑状态时保存原始数据
      if (!target.editable) {
        this.cacheOriginData[id] = {
          ...target,
        };
      }
      target.editable = !target.editable;
      this.setState({ data: newData });
    }
  };

  newMember = () => {
    const { data } = this.state;
    const newData = data.map(item => ({
      ...item,
    }));
    newData.push({
      id: Math.random(),
      processKey: '',
      listKey: '',
      editable: true,
      isNew: true,
    });
    this.index += 1;
    this.setState({ data: newData });
  };

  remove(id) {
    const { data } = this.state;
    const { onChange } = this.props;
    const newData = data.filter(item => item.id !== id);
    this.setState({ data: newData });
    onChange(newData);
  }

  handleKeyPress(e, id) {
    if (e.id === 'Enter') {
      this.saveRow(e, id);
    }
  }

  handleFieldChange(e, fieldName, id) {
    const { data } = this.state;
    const newData = data.map(item => ({
      ...item,
    }));
    const target = this.getRowByKey(id, newData);
    if (target) {
      target[fieldName] = e.target.value;
      this.setState({ data: newData });
    }
  }

  saveRow(e, id) {
    e.persist();
    this.setState({ loading: true });
    setTimeout(() => {
      if (this.clickedCancel) {
        this.clickedCancel = false;
        return;
      }
      const target = this.getRowByKey(id) || {};
      if (!target.processKey || !target.listKey) {
        // || !target.listInfoKey
        message.error('请填写完整还款信息。');
        e.target.focus();
        this.setState({ loading: false });
        return;
      }
      delete target.isNew;
      this.toggleEditable(e, id);
      const { data } = this.state;
      const { onChange } = this.props;

      // onChange(data);
      this.setState({ loading: false });

      // const { planBegin, planDay, planEnd } = data[0];
      // const { dispatch, productTemplateInfoId } = this.props;
      const { dispatch } = this.props;
      dispatch({
        type: 'settingPosition/fetch',
        payload: {
          data: {
            channelIds: [1, 2, 3], //渠道id
            roleIds: [3, 10, 11], //角色id
          },
        },
      });
      const { settingPosition } = this.props;
    }, 500);
  }

  cancel(e, id) {
    this.clickedCancel = true;
    e.preventDefault();
    const { data } = this.state;
    const newData = data.map(item => ({
      ...item,
    }));
    const target = this.getRowByKey(id, newData);
    if (this.cacheOriginData[id]) {
      Object.assign(target, this.cacheOriginData[id]);
      delete this.cacheOriginData[id];
    }
    target.editable = false;
    this.setState({ data: newData });
    this.clickedCancel = false;
  }

  okHandle = e => {
    const { handleModalPosition } = this.props;
    handleModalPosition();
  };
  render() {
    const columns = [
      {
        title: '选择岗位',
        dataIndex: 'processKey',
        id: 'processKey',
        width: '25%',
        render: (text, record) => {
          if (record.editable) {
            return (
              <Input
                value={text}
                autoFocus
                onChange={e => this.handleFieldChange(e, 'processKey', record.id)}
                onKeyPress={e => this.handleKeyPress(e, record.id)}
                placeholder="选择业务流程"
              />
              // <Select placeholder="请选择" onChange={e => this.handleFieldChange(e, 'businessId', record.id)} onKeyPress={e => this.handleKeyPress(e, record.id)}>
              //   {tb_cg_business_type &&Object.entries(tb_cg_business_type).map(item => (
              //       <Option value={Number(item[0])} id={item[0]}>
              //         {item[1]}
              //       </Option>
              //     ))}
              // </Select>
            );
          }
          return text;
        },
      },
      {
        title: '人员姓名',
        dataIndex: 'listKey',
        id: 'listKey',
        width: '25%',
        render: (text, record) => {
          if (record.editable) {
            return (
              <Input
                value={text}
                onChange={e => this.handleFieldChange(e, 'listKey', record.id)}
                onKeyPress={e => this.handleKeyPress(e, record.id)}
                placeholder="选择资料清单"
              />
            );
          }
          return text;
        },
      },
      {
        title: '操作',
        id: 'action',
        width: '25%',
        render: (text, record) => {
          const { loading } = this.state;
          if (!!record.editable && loading) {
            return null;
          }
          if (record.editable) {
            if (record.isNew) {
              return (
                <span>
                  <a onClick={e => this.saveRow(e, record.id)}>添加</a>
                  <Divider type="vertical" />
                  <Popconfirm title="是否要删除此行？" onConfirm={() => this.remove(record.id)}>
                    <a>删除</a>
                  </Popconfirm>
                </span>
              );
            }
            // return (
            //   <span>
            //     <a onClick={e => this.saveRow(e, record.id)}>保存</a>
            //     <Divider type="vertical" />
            //     <a onClick={e => this.cancel(e, record.id)}>取消</a>
            //   </span>
            // );
          }
          return (
            <span>
              {/* <a onClick={e => this.toggleEditable(e, record.id)}>编辑</a> */}
              {/* <Divider type="vertical" /> */}
              <Popconfirm title="是否要删除此行？" onConfirm={() => this.remove(record.id)}>
                <a>删除</a>
              </Popconfirm>
            </span>
          );
        },
      },
    ];
    const { loading, data } = this.state;  
    const {
      modalVisible,
      form,
      dispatch,
      handleModalPosition,
      form: { getFieldDecorator },
    } = this.props;
    return (
      <Modal
        destroyOnClose
        title="批量关键设置"
        width={720}
        visible={modalVisible}
        onOk={this.okHandle}
        onCancel={() => handleModalPosition()}
      >
        <Row gutter={{ lg: 24 }}>
          <Col>
            <FormItem label="关联合同模板">
              {getFieldDecorator('templateAssociated')(
                <Select placeholder="请选择" style={{ width: 200 }}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Yiminghe">yiminghe</Option>
                  {/* {Object.values(associateSettings).map((val, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Option value={index + 1} key={index}>
                      {val}
                    </Option>
                  ))} */}
                </Select>
              )}
            </FormItem>
          </Col>
        </Row>
        <FormItem label="关联流程资料清单" />
        <Table
          loading={loading}
          columns={columns}
          bordered
          size={'middle'}
          dataSource={data}
          pagination={false}
          rowClassName={record => (record.editable ? styles.editable : '')}
        />
        <Button
          style={{
            width: '100%',
            marginTop: 16,
            marginBottom: 8,
          }}
          type="dashed"
          onClick={this.newMember}
          icon="plus"
        >
          新增一行数据
        </Button>
      </Modal>
    );
  }
}
export default ModalPosition;
