import React, { PureComponent, Fragment } from 'react';
import { Table, Button, Input, Select, message, Popconfirm, Divider, InputNumber } from 'antd';
import isEqual from 'lodash/isEqual';
const { Option } = Select;
import styles from './style.less';

class TableForm extends PureComponent {
  cacheOriginData = {};

  constructor(props) {
    super(props);
    this.state = {
      data: props.value,
      loading: false,
      /* eslint-disable-next-line react/no-unused-state */
      value: props.value,
    };
  }

  static getDerivedStateFromProps(nextProps, preState) {
    if (isEqual(nextProps.value, preState.value)) {
      return null;
    }
    return {
      data: nextProps.value,
      value: nextProps.value,
    };
  }

  getRowByKey(id, newData) {
    const { data } = this.state;
    return (newData || data).filter(item => item.id === id)[0];
  }

  toggleEditable = (e, id) => {
    e.preventDefault();
    const { data } = this.state;
    const newData = data.map(item => ({ ...item }));
    const target = this.getRowByKey(id, newData);
    // const { minProportion, maxProportion } = target;
    /* if (e.target.innerText.includes('编辑') && minProportion) {
      target.minProportion = (minProportion * 100).toFixed(2);
      target.maxProportion = (maxProportion * 100).toFixed(2);
    } */
    if (target) {
      // 进入编辑状态时保存原始数据
      if (!target.editable) {
        this.cacheOriginData[id] = { ...target };
      }
      target.editable = !target.editable;
      this.setState({ data: newData });
    }
  };

  newMember = () => {
    const { data } = this.state;
    const newData = data.map(item => ({ ...item }));
    newData.push({
      id: Math.random() * 1000,
      paymentKey: '',
      paymentMode: '',
      mixAmount: '',
      minProportion: '',
      maxProportion: '',
      maxAmount: '',
      paymentRef: '',
      paymentType: '',
      refundType: '',
      editable: true,
      isNew: true,
    });
    this.setState({ data: newData });
  };

  handleKeyPress(e, id) {
    if (e.id === 'Enter') {
      this.saveRow(e, id);
    }
  }
  remove(id) {
    const { dispatch, productTemplateInfoId } = this.props;
    const { data } = this.state;
    const { removeCall } = this;
    const newData = data.filter(item => item.id !== id);
    dispatch({
      type: 'moneyList/delete',
      payload: {
        data: {
          id,
          productTemplateInfoId,
          paymentGroup: 'pt_marginpayment',
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

  handleFieldChange(e, fieldName, id) {
    const { data } = this.state;
    const newData = data.map(item => ({ ...item }));
    const target = this.getRowByKey(id, newData);
    if (target) {
      if (typeof e === 'object') {
        target[fieldName] = e.target.value;
      } else {
        target[fieldName] = e;
      }
      this.setState({ data: newData });
    }
  }

  updateData = (newData, e, editId) => {
    this.setState({ data: newData }, () => this.toggleEditable(e, editId));
  };
  saveRow(e, id) {
    e.persist();
    this.setState({
      loading: true,
    });
    setTimeout(() => {
      const { dispatch, productTemplateInfoId } = this.props;
      const {
        updateData,
        state: { data },
      } = this;
      if (this.clickedCancel) {
        this.clickedCancel = false;
        return;
      }
      const target = this.getRowByKey(id) || {};
      if (e.target.innerText.includes('保存')) {
        delete target.createBy;
        delete target.createTime;
        delete target.del;
        delete target.isDel;
        delete target.updateBy;
        delete target.updateTime;
      }
      const newTarget = target;
      if (target.paymentMode === '1') {
        delete newTarget.minProportion;
        delete newTarget.maxProportion;
        delete newTarget.paymentRef;
      } else {
        delete newTarget.mixAmount;
        delete newTarget.maxAmount;
      }
      const { mixAmount, minProportion } = newTarget;
      if (mixAmount === 0) {
        newTarget.mixAmount = mixAmount + '';
      }
      if (minProportion === 0) {
        newTarget.minProportion = minProportion + '';
      }
      delete newTarget.proportion;
      delete newTarget.amount;
      for (var key in newTarget) {
        if (!target[key]) {
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
      if (!e.target.innerText.includes('保存')) {
        delete newTarget.id;
      }
      /* const { minProportion, maxProportion } = newTarget;
      if (minProportion) {
        newTarget.minProportion = minProportion / 100;
        newTarget.maxProportion = maxProportion / 100;
      } */
      dispatch({
        type: 'goodTypeStep4/moneyAdd',
        payload: {
          data: {
            paymentGroup: 'pt_marginpayment',
            productTemplateInfoId,
            ...newTarget,
          },
        },
        callBack(msg, editId) {
          if (msg === 'OK') {
            const newData = data.map(item => {
              if (item.id === target.id) {
                return { ...item, id: editId, editable: true };
              } else {
                return { ...item };
              }
            });
            updateData(newData, e, editId);
          } else {
            message.error(msg);
          }
        },
      });
      this.setState({
        loading: false,
      });
    }, 500);
  }
  cancel(e, id) {
    this.clickedCancel = true;
    e.preventDefault();
    const { data } = this.state;
    const newData = data.map(item => ({ ...item }));
    const target = this.getRowByKey(id, newData);
    if (this.cacheOriginData[id]) {
      Object.assign(target, this.cacheOriginData[id]);
      delete this.cacheOriginData[id];
    }
    target.editable = false;
    /*  newData.map(item => {
      const { minProportion, maxProportion } = item;
      if (minProportion) {
        target.minProportion = minProportion / 100;
        target.maxProportion = maxProportion / 100;
      }
      return {
        ...item,
      };
    }); */
    this.setState({ data: newData });
    this.clickedCancel = false;
  }

  render() {
    const {
      typeDataTotal: {
        pt_marginpaymentTypeKey,
        pt_marginpaymentType,
        pt_marginpaymentKey,
        flcs_marginRefundType,
        pt_marginRef,
        pt_marginProductType,
      },
    } = this.props;
    const { loading, data } = this.state;
    const columns = [
      {
        title: '选择押金项',
        dataIndex: 'paymentKey',
        id: 'paymentKey',
        width: '140px',
        render: (text, record) => {
          if (record.editable) {
            return (
              <Select
                defaultValue={text}
                style={{ width: '100%' }}
                placeholder="请选择收取方式"
                onChange={e => this.handleFieldChange(e, 'paymentKey', record.id)}
                onKeyPress={e => this.handleKeyPress(e, record.id)}
              >
                {pt_marginpaymentKey &&
                  Object.entries(pt_marginpaymentKey).map(item => (
                    <Option key={item[0]} value={item[0]}>
                      {item[1]}
                    </Option>
                  ))}
              </Select>
            );
          }
          return pt_marginpaymentKey && pt_marginpaymentKey[text];
        },
      },
      {
        title: '金额/比例',
        dataIndex: 'paymentMode',
        id: 'paymentMode',
        width: '110px',
        render: (text, record) => {
          if (record.editable) {
            return (
              <Select
                defaultValue={text}
                style={{ width: '100%' }}
                placeholder="金额/比例"
                onChange={e => this.handleFieldChange(e, 'paymentMode', record.id)}
                onKeyPress={e => this.handleKeyPress(e, record.id)}
              >
                {pt_marginpaymentTypeKey &&
                  Object.entries(pt_marginpaymentTypeKey).map(item => (
                    <Option key={item[0]} value={item[0]}>
                      {item[1]}
                    </Option>
                  ))}
              </Select>
            );
          }
          return pt_marginpaymentTypeKey && pt_marginpaymentTypeKey[text];
        },
      },
      {
        title: '最低金额',
        dataIndex: 'mixAmount',
        id: 'mixAmount',
        render: (text, record) => {
          const { paymentMode } = record;
          if (paymentMode === '2'||!paymentMode) {
            return '--';
          }
          if (record.editable) {
            return (
              <>
                <InputNumber
                  className={styles.inputNum}
                  value={text}
                  onChange={e => this.handleFieldChange(e, 'mixAmount', record.id)}
                  onKeyPress={e => this.handleKeyPress(e, record.id)}
                  placeholder="请输入"
                />
                <span className="ant-form-text">元</span>
              </>
            );
          }
          return text || '--';
        },
      },
      {
        title: '最高金额',
        dataIndex: 'maxAmount',
        id: 'maxAmount',
        render: (text, record) => {
          const { paymentMode } = record;
          if (paymentMode === '2'||!paymentMode) {
            return '--';
          }
          if (record.editable) {
            return (
              <>
                <InputNumber
                  className={styles.inputNum}
                  value={text}
                  min={record.mixAmount}
                  onChange={e => this.handleFieldChange(e, 'maxAmount', record.id)}
                  onKeyPress={e => this.handleKeyPress(e, record.id)}
                  placeholder="请输入"
                />
                <span className="ant-form-text">元</span>
              </>
            );
          }
          return text || '--';
        },
      },
      {
        title: '最低比例',
        dataIndex: 'minProportion',
        id: 'minProportion',
        render: (text, record) => {
          const { paymentMode } = record;
          if (paymentMode === '1'||!paymentMode) {
            return '--';
          }
          if (record.editable) {
            return (
              <>
                <InputNumber
                  className={styles.inputNum}
                  max={100}
                  value={text}
                  onChange={e => this.handleFieldChange(e, 'minProportion', record.id)}
                  onKeyPress={e => this.handleKeyPress(e, record.id)}
                  placeholder="请输入"
                />
                <span className="ant-form-text">%</span>
              </>
            );
          }
          return text + '%' || '--';
        },
      },
      {
        title: '最高比例',
        dataIndex: 'maxProportion',
        id: 'maxProportion',
        render: (text, record) => {
          const { paymentMode } = record;
          if (paymentMode === '1'||!paymentMode) {
            return '--';
          }
          if (record.editable) {
            return (
              <>
                <InputNumber
                  className={styles.inputNum}
                  value={text}
                  min={record.minProportion}
                  max={100}
                  onChange={e => this.handleFieldChange(e, 'maxProportion', record.id)}
                  onKeyPress={e => this.handleKeyPress(e, record.id)}
                  placeholder="请输入"
                />
                <span className="ant-form-text">%</span>
              </>
            );
          }
          return text + '%' || '--';
        },
      },
      {
        title: '对比方',
        dataIndex: 'paymentRef',
        id: 'paymentRef',
        width: '140px',
        render: (text, record) => {
          const { paymentMode } = record;
          if (paymentMode === '1'||!paymentMode) {
            return '--';
          }
          if (record.editable) {
            return (
              <Select
                defaultValue={text}
                style={{ width: '100%' }}
                placeholder="对比方"
                onChange={e => this.handleFieldChange(e, 'paymentRef', record.id)}
                onKeyPress={e => this.handleKeyPress(e, record.id)}
              >
                {pt_marginRef &&
                  Object.entries(pt_marginRef).map(item => (
                    <Option key={item[0]} value={item[0]}>
                      {item[1]}
                    </Option>
                  ))}
              </Select>
            );
          }
          return (pt_marginRef && pt_marginRef[text]) || '--';
        },
      },
      {
        title: '收取方式',
        dataIndex: 'paymentType',
        id: 'paymentType',
        width: '160px',
        render: (text, record) => {
          if (record.editable) {
            return (
              <Select
                defaultValue={text}
                style={{ width: '100%' }}
                placeholder="请选择收取方式"
                onChange={e => this.handleFieldChange(e, 'paymentType', record.id)}
                onKeyPress={e => this.handleKeyPress(e, record.id)}
              >
                {pt_marginpaymentType &&
                  Object.entries(pt_marginpaymentType).map(item => (
                    <Option key={item[0]} value={item[0]}>
                      {item[1]}
                    </Option>
                  ))}
              </Select>
            );
          }
          return pt_marginpaymentType && pt_marginpaymentType[text];
        },
      },
      {
        title: '退还方式',
        dataIndex: 'refundType',
        id: 'refundType',
        width: '120px',
        render: (text, record) => {
          if (record.editable) {
            return (
              <Select
                defaultValue={text}
                style={{ width: '100%' }}
                placeholder="退还方式"
                onChange={e => this.handleFieldChange(e, 'refundType', record.id)}
                onKeyPress={e => this.handleKeyPress(e, record.id)}
              >
                {flcs_marginRefundType &&
                  Object.entries(flcs_marginRefundType).map(item => (
                    <Option key={item[0]} value={item[0]}>
                      {item[1]}
                    </Option>
                  ))}
              </Select>
            );
          }
          return flcs_marginRefundType && flcs_marginRefundType[text];
        },
      },
      {
        title: '操作',
        id: 'action',
        width: '110px',
        fixed: 'right',
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
            return (
              <span>
                <a onClick={e => this.saveRow(e, record.id)}>保存</a>
                <Divider type="vertical" />
                <a onClick={e => this.cancel(e, record.id)}>取消</a>
              </span>
            );
          }
          return (
            <span>
              <a onClick={e => this.toggleEditable(e, record.id)}>编辑</a>
              <Divider type="vertical" />
              <Popconfirm title="是否要删除此行？" onConfirm={() => this.remove(record.id)}>
                <a>删除</a>
              </Popconfirm>
            </span>
          );
        },
      },
    ];

    return (
      <>
        <Table
          scroll={{ x: 1400 }}
          bordered
          rowKey={'id'}
          loading={loading}
          columns={columns}
          size={'middle'}
          dataSource={data}
          pagination={false}
          rowClassName={record => (record.editable ? styles.editable : '')}
        />
        <Button
          style={{ width: '100%', marginTop: 16, marginBottom: 8 }}
          type="dashed"
          onClick={this.newMember}
          icon="plus"
        >
          新增
        </Button>
      </>
    );
  }
}

export default TableForm;
