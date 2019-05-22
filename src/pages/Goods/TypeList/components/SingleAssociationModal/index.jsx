import React, { PureComponent } from 'react';
import {
  Table,
  Form,
  Modal,
  Input,
  message,
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

@Form.create()
class singleAssociationModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.value,
      modalVisible: props.handleModalVisible,
    };
  }
  static getDerivedStateFromProps(nextProps, preState) {
    if (isEqual(nextProps.value, preState.value)) {
      return null;
    }
    return { data: nextProps.value, value: nextProps.value };
  }

  getRowByKey(id, newData) {
    const { data } = this.state;
    return (newData || data).filter(item => item.productTemplateInfoId === id)[0];
  }

  newMember = () => {
    const { data } = this.state;
    const newData = data.map(item => ({
      ...item,
    }));
    newData.push({
      productTemplateInfoId: Math.round(Math.random() * 1000),
      listInfoKey: '',
      listKey: '',
      processKey: '',
      editable: true,
      isNew: true,
    });
    this.setState({ data: newData });
  };

  remove1({ listKey, productTemplateInfoId: ptInfoId }) {
    const { dispatch } = this.props;
    const { data } = this.state;
    const { removeCall } = this;
    const newData = data.filter(item => item.productTemplateInfoId !== ptInfoId);
    dispatch({
      type: 'deleteptlist/fetch',
      payload: {
        data: {
          listKey,
          ptInfoId,
        },
      },
      callBack(msg) {
        if (msg === 'OK') {
          removeCall(newData);
        } else {
          message.error(msg);
        }
      },
    });
  }

  removeCall = newData => {
    this.setState({ data: newData });
  };
  remove(id) {
    const { data } = this.state;
    const newData = data.filter(item => item.productTemplateInfoId !== id);
    this.setState({ data: newData });
  }

  handleKeyPress(e, productTemplateInfoId) {
    if (e.productTemplateInfoId === 'Enter') {
      this.saveRow(e, productTemplateInfoId);
    }
  }

  handleFieldChange(e, fieldName, productTemplateInfoId) {
    const { data } = this.state;
    const newData = data.map(item => ({
      ...item,
    }));
    const target = this.getRowByKey(productTemplateInfoId, newData);
    if (target) {
      if (typeof e === 'string') {
        target[fieldName] = e;
      } else if (Array.isArray(e)) {
        target[fieldName] = e;
      }
      const {processKey}=target;
      target.listKey=processKey.replace(/process/,'list');
      this.setState({ data: newData });
    }
  }

  saveRow(e, productTemplateInfoId) {
    e.persist();
    this.setState({ loading: true });
    const { removeCall } = this;
    setTimeout(() => {
      if (this.clickedCancel) {
        this.clickedCancel = false;
        return;
      }
      const target = this.getRowByKey(productTemplateInfoId) || {};
      const newTarget = target;
      for (const key in newTarget) {
        if (!newTarget[key]) {
          message.error('请填写完整信息');
          e.target.focus();
          this.setState({
            loading: false,
          });
          return;
        }
      }
      delete target.isNew;
      delete newTarget.editable;
      const { dispatch, singleAssociationId } = this.props;
      const { listInfoKey, listKey, processKey } = newTarget;
      const { data } = this.state;
      const newData = data.map(item => {
        if (item.productTemplateInfoId === productTemplateInfoId) {
          item.editable = true;
          item.isNew = true;
        }
        return { ...item };
      });
      dispatch({
        type: 'singleAssociationModal/associatedPreservation',
        payload: {
          data: {
            productTemplateInfoId: singleAssociationId,
            listInfoKey,
            listKey,
            processKey,
          },
        },
        callBack(msg) {
          if (msg === 'OK') {
            message.success('保存成功');
          } else {
            removeCall(newData);
            message.error(msg);
          }
        },
      });
      this.setState({ loading: false });
    }, 500);
  }

  cancel(e, productTemplateInfoId) {
    this.clickedCancel = true;
    e.preventDefault();
    const { data } = this.state;
    const newData = data.map(item => ({
      ...item,
    }));
    const target = this.getRowByKey(productTemplateInfoId, newData);
    if (this.cacheOriginData[productTemplateInfoId]) {
      Object.assign(target, this.cacheOriginData[productTemplateInfoId]);
      delete this.cacheOriginData[productTemplateInfoId];
    }
    target.editable = false;
    this.setState({ data: newData });
    this.clickedCancel = false;
  }
  handleSubmit = e => {
    e.preventDefault();
    const {
      dispatch,
      form,
      handleSingleAssociationModalPosition,
      singleAssociationId,
    } = this.props;
    form.validateFields((err, fieldsValue) => {
      const { templateAssociated } = fieldsValue;
      if (err) return;
      dispatch({
        type: 'singleAssociationModal/relatedContractTemplate',
        payload: {
          data: {
            templateAssociated: 2,
            associatedContractKey: templateAssociated,
            id: singleAssociationId,
          },
        },
        callBack(msg) {
          if (msg === 'OK') {
            handleSingleAssociationModalPosition();
            message.success('保存成功');
            dispatch({
              type: 'maintenance/fetch',
              payload: { queryCondition: {} },
            });
          } else {
            message.error(msg);
          }
        },
      });
    });
  };
  okHandle = e => {
    this.handleSubmit(e);
  };
  render() {
    const {
      typeDataTotal: { pt_process_list, pt_list_credit, esign_template, pt_list },
      modalVisible,
      form,
      dispatch,
      handleSingleAssociationModalPosition,
      form: { getFieldDecorator },
      singleAssociationId,
      singleAssociationModal,
      singleModelColumns,
      associatedContractKey
    } = this.props;
    const columns = [
      {
        title: '选择业务流程',
        dataIndex: 'processKey',
        width: 120,
        render: (text, record) => {
          if (record.editable) {
            return (
              <Select
                placeholder="请选择业务流程"
                style={{ width: 150 }}
                onChange={e =>
                  this.handleFieldChange(e, 'processKey', record.productTemplateInfoId)
                }
                onKeyPress={e => this.handleKeyPress(e, record.productTemplateInfoId)}
              >
                {pt_process_list &&
                  Object.entries(pt_process_list).map(item => {
                    return (
                      <Option value={item[0]} key={item[0]}>
                        {item[1]}
                      </Option>
                    );
                  })}
              </Select>
            );
          }
          return pt_process_list[text];
        },
      },
      {
        title: '选择资料清单',
        dataIndex: 'listKey',
        width: '25%',
        render: (text, record) => {
          if (record.editable) {
            return (
              <Select
              disabled
              value={record.listKey}
                placeholder="请选择资料清单"
                style={{ width: 150 }}
              >
                {pt_list &&
                  Object.entries(pt_list).map(item => (
                    <Option value={item[0]} key={item[0]}>
                      {item[1]}
                    </Option>
                  ))}
              </Select>
            );
          }
          return pt_list && pt_list[text];
        },
      },
      {
        title: '选择资料',
        dataIndex: 'listInfoKey',
        render: (text, record) => {
          if (record.editable) {
            return (
              <Select
                mode="tags"
                placeholder="请选择资料"
                style={{ width: 150 }}
                onChange={e =>
                  this.handleFieldChange(e, 'listInfoKey', record.productTemplateInfoId)
                }
                onKeyPress={e => this.handleKeyPress(e, record.productTemplateInfoId)}
              >
                {pt_list_credit &&
                  Object.entries(pt_list_credit).map(item => (
                    <Option value={item[0]} key={item[0]}>
                      {item[1]}
                    </Option>
                  ))}
              </Select>
            );
          }
          return (
            text &&
            text.map(item => {
              return <span>{pt_list_credit[item]},</span>;
            })
          );
        },
      },
      {
        title: '操作',
        id: 'action',
        width: 120,
        render: (text, record) => {
          const { loading } = this.state;
          if (!!record.editable && loading) {
            return null;
          }
          if (record.editable) {
            if (record.isNew) {
              return (
                <span>
                  <a onClick={e => this.saveRow(e, record.productTemplateInfoId)}>添加</a>
                  <Divider type="vertical" />
                  <Popconfirm
                    title="是否要删除此行？"
                    onConfirm={() => this.remove(record.productTemplateInfoId)}
                  >
                    <a>删除</a>
                  </Popconfirm>
                </span>
              );
            }
            return (
              <span>
                <a onClick={e => this.saveRow(e, record.productTemplateInfoId)}>保存</a>
                <Divider type="vertical" />
                <a onClick={e => this.cancel(e, record.productTemplateInfoId)}>取消</a>
              </span>
            );
          }
          return (
            <span>
              <Popconfirm title="是否要删除此行？" onConfirm={() => this.remove1(record)}>
                <a>删除</a>
              </Popconfirm>
            </span>
          );
        },
      },
    ];
    const { loading, data } = this.state;
    return (
      <Modal
        title="单个关键设置"
        width={720}
        visible={modalVisible}
        onOk={this.okHandle}
        onCancel={() => handleSingleAssociationModalPosition()}
      >
        <Form onSubmit={this.handleSubmit} hideRequiredMark>
          <Row gutter={{ lg: 24 }}>
            <Col>
              <FormItem label="关联合同模板">
                {getFieldDecorator('templateAssociated', {
                  initialValue: associatedContractKey,
                  rules: [{ required: true, message: '关联合同模板' }],
                })(
                  <Select placeholder="请选择" style={{ width: 200 }}>
                    {Object.entries(esign_template).map((val, index) => (
                      <Option value={val[0]} key={val[0]}>
                        {val[1]}
                      </Option>
                    ))}
                  </Select>
                )}
              </FormItem>
            </Col>
          </Row>
        </Form>
        <FormItem label="关联流程资料清单" />
        <Table
          loading={loading}
          columns={columns}
          size={'middle'}
          rowKey={'productTemplateInfoId'}
          bordered
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
          新增
        </Button>
      </Modal>
    );
  }
}
export default singleAssociationModal;
