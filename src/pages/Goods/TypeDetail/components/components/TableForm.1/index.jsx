import React, { PureComponent, Fragment } from 'react';
import { Table, Button, Input, Select, message, Popconfirm, Divider } from 'antd';
import isEqual from 'lodash/isEqual';
const { Option } = Select;
import styles from './less/style.less';

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
      benefitKey: '',
      benefitMode: '',
      mixAmount: '',
      minProportion: '',
      maxProportion: '',
      maxAmount: '',
      benefitRef: '',
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
      type: 'typeAdd/moneyRuleDelete',
      payload: {
        data: {
          id,
          productTemplateInfoId,
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
    const {minProportion,maxProportion}=newData[0];
    if(minProportion){
      newData[0].minProportion=(minProportion*100).toFixed(2);
      newData[0].maxProportion=(maxProportion*100).toFixed(2);
    }
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
      if (target.benefitMode === '1') {
        delete newTarget.minProportion;
        delete newTarget.maxProportion;
        delete newTarget.benefitRef;
      } else if (target.benefitMode === '2') {
        delete newTarget.mixAmount;
        delete newTarget.maxAmount;
      } else {
        delete newTarget.benefitKey;
        delete newTarget.mixAmount;
        delete newTarget.maxProportion;
        delete newTarget.maxAmount;
        delete newTarget.minProportion;
      }
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
      const {minProportion,maxProportion}=newTarget;
      if(minProportion){
        newTarget.minProportion=minProportion/100;
        newTarget.maxProportion=maxProportion/100;
      }
      dispatch({
        type: 'typeAdd/distributionRuleMoney',
        payload: {
          data: {
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
    this.setState({ data: newData });
    this.clickedCancel = false;
  }

  render() {
    const {
      typeDataTotal: {
        flcs_benefitMode,
        pt_marginpaymentType,
        ch_attribute,
        flcs_marginRefundType,
        flcs_benefitRef,
        pt_servicepaymentType,
      },
    } = this.props;
    const { loading, data } = this.state;
    const columns = [
      {
        title: '选择渠道属性',
        dataIndex: 'benefitKey',
        id: 'benefitKey',
        width: '140px',
        render: (text, record) => {
          if (record.editable) {
            const { benefitMode } = record;
            return (
              <>
                {benefitMode !== '3' ? (
                  <Select
                    defaultValue={text}
                    style={{ width: '100%' }}
                    placeholder="请选择收取方式"
                    onChange={e => this.handleFieldChange(e, 'benefitKey', record.id)}
                    onKeyPress={e => this.handleKeyPress(e, record.id)}
                  >
                    {ch_attribute &&
                      Object.entries(ch_attribute).map(item => (
                        <Option key={item[0]} value={item[0]}>
                          {item[1]}
                        </Option>
                      ))}
                  </Select>
                ) : (
                  '--'
                )}
              </>
            );
          }
          return ch_attribute && ch_attribute[text]||'--';
        },
      },
      {
        title: '规则',
        dataIndex: 'benefitMode',
        id: 'benefitMode',
        width: '110px',
        render: (text, record) => {
          if (record.editable) {
            return (
              <Select
                defaultValue={text}
                style={{ width: '100%' }}
                placeholder="规则"
                onChange={e => this.handleFieldChange(e, 'benefitMode', record.id)}
                onKeyPress={e => this.handleKeyPress(e, record.id)}
              >
                {flcs_benefitMode &&
                  Object.entries(flcs_benefitMode).map(item => (
                    <Option key={item[0]} value={item[0]}>
                      {item[1]}
                    </Option>
                  ))}
              </Select>
            );
          }
          return flcs_benefitMode && flcs_benefitMode[text];
        },
      },
      {
        title: '最低金额',
        dataIndex: 'mixAmount',
        id: 'mixAmount',
        render: (text, record) => {
          if (record.editable) {
            const { benefitMode } = record;
            return (
              <>
                {benefitMode === '1' ? (
                  <Input
                    value={text}
                    onChange={e => this.handleFieldChange(e, 'mixAmount', record.id)}
                    onKeyPress={e => this.handleKeyPress(e, record.id)}
                    placeholder="请输入"
                  />
                ) : (
                  '--'
                )}
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
          if (record.editable) {
            const { benefitMode } = record;
            return (
              <>
                {benefitMode === '1' ? (
                  <Input
                    value={text}
                    onChange={e => this.handleFieldChange(e, 'maxAmount', record.id)}
                    onKeyPress={e => this.handleKeyPress(e, record.id)}
                    placeholder="请输入"
                  />
                ) : (
                  '--'
                )}
              </>
            );
          }
          return text || '--';
        },
      },
      {
        title: '最低比例',
        dataIndex: 'minProportion',
        width: '100px',
        id: 'minProportion',
        render: (text, record) => {
          if (record.editable) {
            const { benefitMode } = record;
            return (
              <>
                {benefitMode === '2' ? (
                  <Input
                    value={text}
                    onChange={e => this.handleFieldChange(e, 'minProportion', record.id)}
                    onKeyPress={e => this.handleKeyPress(e, record.id)}
                    placeholder="请输入"
                  />
                ) : (
                  '--'
                )}
              </>
            );
          }
          return text || '--';
        },
      },
      {
        title: '最高比例',
        dataIndex: 'maxProportion',
        id: 'maxProportion',
        width: '100px',
        render: (text, record) => {
          if (record.editable) {
            const { benefitMode } = record;
            return (
              <>
                {benefitMode === '2' ? (
                  <Input
                    value={text}
                    onChange={e => this.handleFieldChange(e, 'maxProportion', record.id)}
                    onKeyPress={e => this.handleKeyPress(e, record.id)}
                    placeholder="请输入"
                  />
                ) : (
                  '--'
                )}
              </>
            );
          }
          return text || '--';
        },
      },
      {
        title: '对比方',
        dataIndex: 'benefitRef',
        id: 'benefitRef',
        width: '140px',
        render: (text, record) => {
          if (record.editable) {
            const { benefitMode } = record;
            return (
              <>
                {benefitMode === '2' ? (
                  <Select
                    defaultValue={text}
                    style={{ width: '100%' }}
                    placeholder="对比方"
                    onChange={e => this.handleFieldChange(e, 'benefitRef', record.id)}
                    onKeyPress={e => this.handleKeyPress(e, record.id)}
                  >
                    {flcs_benefitRef &&
                      Object.entries(flcs_benefitRef).map(item => (
                        <Option key={item[0]} value={item[0]}>
                          {item[1]}
                        </Option>
                      ))}
                  </Select>
                ) : (
                  '--'
                )}
              </>
            );
          }
          return (flcs_benefitRef && flcs_benefitRef[text]) || '--';
        },
      },
      {
        title: '操作',
        id: 'action',
        width: '110px',
        // fixed: 'right',
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
