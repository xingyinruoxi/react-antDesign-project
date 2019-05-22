import React, { PureComponent } from 'react';
import { Table } from 'antd';
import isEqual from 'lodash/isEqual';
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

  render() {
    const {
      typeDataTotal: {
        pt_servicepaymentTypeKey,
        pt_marginpaymentType,
        pt_servicepaymentKey,
        flcs_marginRefundType,
        pt_servicepaymentRef,
        pt_servicepaymentType,
      },
    } = this.props;
    const { loading, data } = this.state;
    const columns = [
      {
        title: '选择服务项',
        dataIndex: 'paymentKey',
        id: 'paymentKey',
        render: (text, record) => {
          return pt_servicepaymentKey && pt_servicepaymentKey[text];
        },
      },
      {
        title: '金额/比例',
        dataIndex: 'paymentMode',
        id: 'paymentMode',
        render: (text, record) => {
          return pt_servicepaymentTypeKey && pt_servicepaymentTypeKey[text];
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
          return (pt_servicepaymentRef && pt_servicepaymentRef[text]) || '--';
        },
      },
      {
        title: '收取方式',
        dataIndex: 'paymentType',
        id: 'paymentType',
        render: (text, record) => {
          return pt_servicepaymentType && pt_servicepaymentType[text];
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
      </>
    );
  }
}

export default TableForm;
