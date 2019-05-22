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
      data: props.value || [],
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

  handleKeyPress(e, id) {
    if (e.id === 'Enter') {
      this.saveRow(e, id);
    }
  }

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

  saveRow(e, id) {
    e.persist();
    this.setState({
      loading: true,
    });
    setTimeout(() => {
      if (this.clickedCancel) {
        this.clickedCancel = false;
        return;
      }
      const target = this.getRowByKey(id) || {};
      const newTarget = {};
      const { paymentMode, amount, proportion } = target;
      if (paymentMode === '1') {
        newTarget.key = amount+'';
      } else {
        newTarget.key = proportion+'';
      }
      if (!newTarget.key) {
        message.error('请填写完整信息。');
        e.target.focus();
        this.setState({
          loading: false,
        });
        return;
      }
      delete target.isNew;
      this.toggleEditable(e, id);
      const { data } = this.state;
      const { onChange } = this.props;
      onChange(data);
      this.setState({
        loading: false,
      });
    }, 500);
  }

  render() {
    const {
      typeDataTotal: {
        pt_marginpaymentKey,
        pt_marginpaymentTypeKey,
        pt_marginRef,
        pt_marginpaymentType,
        flcs_marginRefundType,
      },
    } = this.props;
    const { loading, data } = this.state;
    const columns = [
      {
        title: '方案额度',
        dataIndex: 'amount',
        width: '140px',
        id: 'amount',
        render: (text, record) => {
          const { paymentMode } = record;
          if (paymentMode === '2'||!paymentMode) {
            return '--';
          }
          if (record.editable) {
            return (
              <>
                <InputNumber
                  min={Number(record.mixAmount)}
                  max={Number(record.maxAmount)}
                  className={styles.inputNum}
                  value={text}
                  onChange={e => this.handleFieldChange(e, 'amount', record.id)}
                  onKeyPress={e => this.handleKeyPress(e, record.id)}
                  placeholder="请输入"
                />
                <span className="ant-form-text">元</span>
              </>
            );
          }
          return text;
        },
      },
      {
        title: '方案比例',
        dataIndex: 'proportion',
        width: '140px',
        id: 'proportion',
        render: (text, record) => {
          const { paymentMode } = record;
          if (paymentMode === '1'||!paymentMode) {
            return '--';
          }
          if (record.editable) {
            return (
              <div>
                <InputNumber
                  value={text}
                  className={styles.inputNum}
                  min={Number(record.minProportion)}
                  max={Number(record.maxProportion)}
                  onChange={e => this.handleFieldChange(e, 'proportion', record.id)}
                  onKeyPress={e => this.handleKeyPress(e, record.id)}
                  placeholder="请输入"
                />
                <span className="ant-form-text">%</span>
              </div>
            );
          }
          return text + '%';
        },
      },
      {
        title: '选择押金项',
        dataIndex: 'paymentKey',
        id: 'paymentKey',
        render: text => {
          return (pt_marginpaymentKey && pt_marginpaymentKey[text]) || '--';
        },
      },
      {
        title: '金额/比例',
        dataIndex: 'paymentMode',
        id: 'paymentMode',
        render: text => {
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
          return text + '%';
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
          return text ? text + '%' : '--';
        },
      },
      {
        title: '对比方',
        dataIndex: 'paymentRef',
        id: 'paymentRef',
        render: (text, record) => {
          const { paymentMode } = record;
          if (paymentMode === '1'||!paymentMode) {
            return '--';
          }
          return (pt_marginRef && pt_marginRef[text]) || '--';
        },
      },
      {
        title: '收取方式',
        dataIndex: 'paymentType',
        id: 'paymentType',
        render: (text, record) => {
          return (pt_marginpaymentType && pt_marginpaymentType[text]) || '--';
        },
      },
      {
        title: '退还方式',
        dataIndex: 'refundType',
        id: 'refundType',
        render: (text, record) => {
          return flcs_marginRefundType && flcs_marginRefundType[text];
        },
      },
      {
        title: '操作',
        fixed: 'right',
        width: 60,
        id: 'action',
        render: (text, record) => {
          const { loading } = this.state;
          if (!!record.editable && loading) {
            return null;
          }
          if (record.editable) {
            return <a onClick={e => this.saveRow(e, record.id)}>保存</a>;
          }
          return <a onClick={e => this.toggleEditable(e, record.id)}>编辑</a>;
        },
      },
    ];

    return (
      <>
        <Table
          scroll={{ x: '1200px' }}
          bordered
          rowKey={'id'}
          loading={loading}
          columns={columns}
          size={'middle'}
          dataSource={data}
          pagination={false}
          rowClassName={record => (record.editable ? styles.editable : '')}
        />
      </>
    );
  }
}

export default TableForm;
