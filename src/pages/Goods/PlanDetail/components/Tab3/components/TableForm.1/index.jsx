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
      target[fieldName] = e.target.value;
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
      const { benefitMode, benefitAmount, benefitProportion } = target;
      newTarget.key = (benefitAmount || benefitProportion)+'';
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
        title: '方案额度',
        dataIndex: 'benefitAmount',
        width: '140px',
        id: 'benefitAmount',
        render: (text, record) => {
          if (record.benefitMode === '2') {
            return '--';
          }
          if (record.editable) {
            return (
              <Input
                value={text}
                onChange={e => this.handleFieldChange(e, 'benefitAmount', record.id)}
                onKeyPress={e => this.handleKeyPress(e, record.id)}
                placeholder="请输入"
              />
            );
          }
          return text;
        },
      },
      {
        title: '方案比例',
        dataIndex: 'benefitProportion',
        width: '140px',

        id: 'benefitProportion',
        render: (text, record) => {
          if (record.benefitMode === '1') {
            return '--';
          }
          if (record.editable) {
            return (
              <Input
                value={text}
                onChange={e => this.handleFieldChange(e, 'benefitProportion', record.id)}
                onKeyPress={e => this.handleKeyPress(e, record.id)}
                placeholder="请输入"
              />
            );
          }
          return text;
        },
      },
      {
        title: '选择渠道属性',
        dataIndex: 'benefitKey',
        id: 'benefitKey',
        render: (text, record) => {
          return (ch_attribute && ch_attribute[text]) || '--';
        },
      },
      {
        title: '规则',
        dataIndex: 'benefitMode',
        id: 'benefitMode',
        render: (text, record) => {
          return flcs_benefitMode && flcs_benefitMode[text];
        },
      },
      {
        title: '最低金额',
        dataIndex: 'mixAmount',
        id: 'mixAmount',
        render: (text, record) => {
          return text || '--';
        },
      },
      {
        title: '最高金额',
        dataIndex: 'maxAmount',
        id: 'maxAmount',
        render: (text, record) => {
          return text || '--';
        },
      },
      {
        title: '最低比例',
        dataIndex: 'minProportion',
        id: 'minProportion',
        render: (text, record) => {
          return text || '--';
        },
      },
      {
        title: '最高比例',
        dataIndex: 'maxProportion',
        id: 'maxProportion',
        render: (text, record) => {
          return text || '--';
        },
      },
      {
        title: '对比方',
        dataIndex: 'benefitRef',
        id: 'benefitRef',
        render: (text, record) => {
          return (flcs_benefitRef && flcs_benefitRef[text]) || '--';
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
