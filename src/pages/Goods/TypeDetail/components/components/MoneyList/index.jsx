import React, { PureComponent, Fragment } from 'react';
import { Table, Button, Input, Select, message, Popconfirm, Divider } from 'antd';
import isEqual from 'lodash/isEqual';
const { Option } = Select;

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
        render: (text, record) => {
          return pt_marginpaymentKey && pt_marginpaymentKey[text];
        },
      },
      {
        title: '金额/比例',
        dataIndex: 'paymentMode',
        id: 'paymentMode',
        render: (text, record) => {
          return pt_marginpaymentTypeKey && pt_marginpaymentTypeKey[text];
        },
      },
      {
        title: '最低金额',
        dataIndex: 'mixAmount',
        id: 'mixAmount',
        render: (text, record) => {
          const { paymentMode } = record;
          if (paymentMode === '2') {
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
          if (paymentMode === '2') {
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
          if (paymentMode === '1') {
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
          if (paymentMode === '1') {
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
          if (paymentMode === '1') {
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
          return pt_marginpaymentType && pt_marginpaymentType[text];
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
    ];

    return (
      <Table
        // scroll={{ x: 1000 }}
        bordered
        rowKey={'id'}
        loading={loading}
        columns={columns}
        size={'middle'}
        dataSource={data}
        pagination={false}
      />
    );
  }
}

export default TableForm;
